import {app} from './app.ts'
import {getFirestore,setDoc, doc, type DocumentReference} from 'firebase/firestore'
import {collectionNames} from "../constants/collection-names.ts";





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