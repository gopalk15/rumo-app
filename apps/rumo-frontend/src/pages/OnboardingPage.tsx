import {BusinessInfoForm} from "../components/forms/BusinessInfoForm.tsx";


import {useState} from "react";
import {ContactInfoForm} from "../components/forms/ContactInfoForm.tsx";
import {OnlinePresenceForm} from "../components/forms/OnlinePresenceForm.tsx";
import {useForm} from "react-hook-form";
import {auth, createAccount} from "../firebase/auth.ts";
import {generateRandomPassword} from "../utils/generate-random-password.ts";
import {createBusinessProfileDoc, createBusinessProfileDocNoId} from "../firebase/collection.ts";
import {mapFormDataToProfileModel} from "../utils/collection-mappers.ts";
import type {TProfileFormInputs} from "../components/forms/interfaces.ts";
import {Link} from "react-router-dom";
import {routes} from "../constants/routes.ts";
import {ErrorAlert} from "../components/alerts/ErrorAlert.tsx";
import {SuccessAlert} from "../components/alerts/SuccessAlert.tsx";
import logo from "../assets/logo-and-name.svg";

const COMMON_USER_ID = 'id-exists-update';


export const OnboardingPage = () => {
    /*TO DO
        If user already exists, then userID will be id-exists-update

     */

    const {register, handleSubmit, trigger, formState} = useForm<TProfileFormInputs>();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isProfileCreated, setIsProfileCreated] = useState<boolean>(false);
    const [isFailure, setIsFailure] = useState<boolean>(false);
    const {errors} = formState;

    const errorMessage = "❌ Something went wrong while saving your profile. Please try again."
    const successMessage = "🎉 Profile created successfully! Welcome aboard!"

    console.log(errors)


    const forms = [

        <BusinessInfoForm register={register} errors={errors}/>,
        <ContactInfoForm register={register} errors={errors}/>,
        <OnlinePresenceForm register={register} errors={errors}/>
    ];


    const [currentStep, setCurrentStep] = useState(0);
    const isSubmitForm = currentStep === forms.length - 1;
    const isPrevious = currentStep > 0;
    console.log({isSubmitForm})



    const handleNext = async () => {
        trigger().then(
            result => {
                if(result && (currentStep < forms.length -1)){
                    setCurrentStep((prev) => {
                        return prev + 1
                    })
                }
            }
        );


    }
    const handlePrev = () => {

        if(isPrevious){
            setCurrentStep((prev) => {
                return prev - 1
            })
        }

    }


    const submitData = async (data: TProfileFormInputs) => {
        console.log(data);
        setIsLoading(true);

        try{
            console.log('Current user', auth.currentUser?.uid)
            const res = await createAccount(data.email, generateRandomPassword());

            if (res.errorCode === 'auth/email-already-in-use'){
                createBusinessProfileDocNoId(mapFormDataToProfileModel(COMMON_USER_ID, data))
            }else {
                createBusinessProfileDoc(mapFormDataToProfileModel(auth.currentUser?.uid as string, data))
            }

            setIsProfileCreated(true)

        }catch (error){
            setIsFailure(true);
            console.error('Error during submission:', error);
        }finally {
            setIsLoading(false)
        }

    }

    const TryAgainButton = () => {
        return (
            <button disabled={isLoading} type='button' className="btn btn-primary text-primary-content mt-4 w-full">
                <Link to={routes.onboarding} reloadDocument>
                    Try Again
                </Link>
            </button>
        )
    }

    const SubmitButton = ({className = ''}: {
        className?: string
    }) => {
        return (
            <button disabled={isLoading} className={`btn btn-primary text-primary-content mt-4 ${className}`}>
                {isLoading ? (
                    <>
                        <span className="loading loading-spinner loading-sm"></span>
                        Submitting...
                    </>
                ) : (
                    'Submit'
                )}
            </button>
        )
    }

    const NavButton = ({isNext, className = ''}:{
        isNext: boolean,
        className?: string
    } ) => {
        return (
            <button disabled={!isNext && !isPrevious} type='button' onClick={isNext ? handleNext : handlePrev} className={`btn btn-primary text-primary-content mt-4 ${className}`}>
                {isNext ? 'Next' : 'Previous'}
            </button>
        )
    }

    const handleStepNavigation = async (step) => {

        if(step > currentStep){
            trigger().then(validation => {
                if (validation){
                    setCurrentStep(step)
                }
            })
        }else {
            setCurrentStep(step);
        }

    }







    return (
        <div className='flex flex-col justify-center h-screen items-center bg-secondary/30'>
            <img src={logo} alt='Rumo Logo' className='lg:w-1/12 md:w-1/8 w-1/3 aspect-square mb-4'/>
            <p className='text-center text-lg lg:text-md mb-4 max-w-11/12 lg:w-1/2'>You’re about to join a community where local businesses find trusted suppliers,
                compare services, list what they offer, and build real, lasting connections.</p>
            <fieldset className="fieldset bg-base-100 border-base-300 rounded-box w-xs border p-4 mb-8">
                <p className='font-bold text-center text-lg'>Let’s get you set up! 🚀</p>
                <ul className="steps my-6">
                    <li className={`step ${currentStep >= 0 ? 'step-primary' : ''}`}
                        onClick={() => handleStepNavigation(0)}>Your Info
                    </li>
                    <li className={`step ${currentStep >= 1 ? 'step-primary' : ''}`}
                        onClick={() => handleStepNavigation(1)}>Contact Info
                    </li>
                    <li className={`step ${currentStep >= 2 ? 'step-primary' : ''}`}
                        onClick={() => handleStepNavigation(2)}>Online Presence
                    </li>
                </ul>
                {
                    isFailure && <ErrorAlert>{errorMessage}</ErrorAlert>
                }
                {
                    isProfileCreated && <SuccessAlert>{successMessage}</SuccessAlert>

                }


                <form onSubmit={handleSubmit((data) => submitData(data))} noValidate className='mt-2'>
                    {forms[currentStep]}
                    {
                        isFailure ?
                            (<TryAgainButton/>) :
                            (
                                <div className='flex justify-between my-4 lg:my-2'>
                                    <NavButton isNext={false}/>

                                    {
                                        isSubmitForm ? <SubmitButton className='justify-self-end'/> :
                                            <NavButton isNext={true} className='justify-self-end'/>
                                    }

                                </div>

                            )

                    }

                </form>
            </fieldset>
        </div>

    )

}