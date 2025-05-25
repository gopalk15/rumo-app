import {app} from './app.ts'
import {getAuth, createUserWithEmailAndPassword, type AuthError, updateProfile} from 'firebase/auth'

export const auth = getAuth(app)


export type TEmailResponse = {
    email: string;
    errorCode?: string;
    isSuccess?: boolean;
}

export const updateDisplayName = async (displayName: string) => {
    if (auth.currentUser) {
        updateProfile(auth.currentUser, {displayName}).then( () => {
            console.log(`Display name: ${displayName} has been updated`)
            }

        ).catch(e => {
            console.error('An error occured while updating the user\'s profile', e)
        })
    }

}

export const createAccount = async (email: string, password: string): Promise<TEmailResponse> => {
    const response: TEmailResponse = {
        email: '',
    }

    try {
        const user = await createUserWithEmailAndPassword(auth, email, password);
        return {
            ...response,
            email: user.user.email ?? '',
            isSuccess: true
        };
    } catch (error) {
        const authError = error as AuthError
        return {
            ...response,
            errorCode: authError.code
        };
    }
}


