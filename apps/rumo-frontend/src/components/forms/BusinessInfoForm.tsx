import {businessInfoFormFields} from "../../constants/formFields.ts";
import type {IBusinessInfoFormProps} from "./interfaces.ts";



export const BusinessInfoForm = ({register, errors}: IBusinessInfoFormProps) => {
    return (
            <div className='w-full flex flex-col'>
                <label className="label mb-1" htmlFor={businessInfoFormFields.firstName}>Your First Name:</label>
                <div className='indicator w-full'>
                    {errors?.firstName && (
                        <span className='indicator-item badge badge-error text-base-100'>Required</span>
                    )}
                    <input {...register(businessInfoFormFields.firstName, {
                        required: true
                    })} id={businessInfoFormFields.firstName} type="text"
                           className={`input input text-neutral mb-4 w-full ${errors?.firstName ? 'input-error' : ''}`}
                           required
                           placeholder="Gustavo"/>
                </div>


                <label className="label mb-1" htmlFor={businessInfoFormFields.lastName}>Your Last Name:</label>
                <div className="indicator w-full">
                    {errors?.lastName && (
                        <span className='indicator-item badge badge-error text-base-100'>Required</span>
                    )}
                    <input {...register(businessInfoFormFields.lastName, {
                        required: true
                    })} id={businessInfoFormFields.lastName} type="text"
                           className={`input input text-neutral mb-4 w-full ${errors?.lastName ? 'input-error' : ''}`}
                           required
                           placeholder="Fring"/>
                </div>

                <label className="label mb-1" htmlFor={businessInfoFormFields.companyName}>Your Business Name:</label>
                <div className='indicator w-full'>
                    {errors?.companyName && (
                        <span className='indicator-item badge badge-error text-base-100'>Required</span>
                    )}
                    <input {...register(businessInfoFormFields.companyName, {
                        required: true
                    })} id={businessInfoFormFields.companyName} type="text"
                           className={`input input text-neutral mb-2 w-full ${errors?.companyName ? 'input-error' : ''}`}
                           required
                           placeholder="Los Pollos Hermanos"/>

                </div>

            </div>
    )
}