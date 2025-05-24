import type {FormEvent} from "react";
import {createAccount, type TEmailResponse} from "../firebase/auth.ts";
import {generateRandomPassword} from "../utils/generate-random-password.ts";
import {useState} from "react";
import {getErrorMessage, getSuccessMessage} from "../utils/get-email-messages.ts";

export const WaitingList = () => {
   const [message, setMessage] = useState<TEmailResponse>();
   const displayAlert = message != undefined || message != null;
   const displayMessage = message?.isSuccess ? getSuccessMessage(message?.email as string) : getErrorMessage(message?.errorCode as string)




    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formElement = event.currentTarget;
        const formData = new FormData(formElement)
        const email = formData.get('email') as string;
        const res = await createAccount(email, generateRandomPassword());
        setMessage(res);

        formElement.reset();
    }

    return (
        <fieldset
            id='join'
            className="fieldset bg-primary/20 border-base-300 rounded-box w-xs border p-4 shadow-lg min-w-full min-h-full">
            <p className='text-center text-lg font-medium text-neutral'>
                🚀 Launching soon. Sign up to get access to the preview release.
            </p>
            <p className='text-base/7 mt-4 text-neutral/90'>
                Listing your business and using the platform to search is completely free.
            </p>
            <p className='text-base/7 my-2 text-neutral/90'>
                Be part of a trusted network where local businesses
                support each other.
            </p>
            {
                displayAlert ? (
                    <div role="alert"
                         className={`alert ${message?.isSuccess ? 'alert-success' : 'alert-error'} alert-soft`}>
                        <span>{displayMessage}</span>
                    </div>
                ) : undefined
            }
            <form onSubmit={handleSubmit} method='POST' className='flex flex-col items-center'>
                <div className='w-full'>
                    <label className="label mb-1" htmlFor='email'>Your Email Address:</label>
                    <input id='email' type="email" className="input input validator text-neutral mb-4 w-full" name='email'
                           placeholder="john@doe.com"/>
                </div>
                <button className="btn btn-primary text-primary-content mt-4 w-3/4">Join Now!</button>
            </form>

        </fieldset>
    )
}