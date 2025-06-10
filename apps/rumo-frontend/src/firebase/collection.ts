import {app} from './app.ts'
import {getFirestore,setDoc, doc, type DocumentReference, collection, addDoc} from 'firebase/firestore'
import {collectionNames} from "../constants/collection-names.ts";
import type {IProfile} from "../models/profile-model.ts";





const firestore = getFirestore(app);

interface IUserDoc {
    companyName: string;
    email: string;
}

export const createUserDocument = async (authId:string | undefined, companyName: string, email:string) => {
    try{
        if(authId){
            const userDocRef = doc(firestore, collectionNames.users, authId) as DocumentReference<IUserDoc>;

            await setDoc(userDocRef, {
                companyName,
                email
            })
        }


    }catch(e) {
        console.error('Error adding document: ', e)
    }


}

export const createBusinessProfileDoc = async (profileData: Partial<IProfile>) => {
    try{
        if (profileData.userId){
            const profileDocRef = doc(firestore,collectionNames.profiles, profileData.userId) as DocumentReference<IProfile>;
            await setDoc(profileDocRef, {
                ...profileData
            })


        }

    }catch(e) {
        console.error('Error adding document: ', e);
        throw new Error('Unable to add profile document')
    }
}


export const createBusinessProfileDocNoId = async (profileData: Partial<IProfile>) => {
    try {
        const profilesCollection = collection(firestore, collectionNames.profiles);
        const newProfileDoc = await addDoc(profilesCollection, {
            ...profileData
        })

        console.log("Document written with ID: ", newProfileDoc.id);
    }catch(e) {
        console.error('Error adding document: ', e);
        throw new Error('Unable to add profile document')
    }

}