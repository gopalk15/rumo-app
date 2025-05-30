import { contactInfoFormFields} from "../../constants/formFields.ts";
import type {IContactInfoFormProps} from "./interfaces.ts";


export const ContactInfoForm = ({register, errors}: IContactInfoFormProps) => {
    return (
        <div className='w-full flex flex-col'>
            <label className="label mb-1" htmlFor={contactInfoFormFields.email}>Your Email:</label>
            <div className='indicator w-full'>
                {errors?.email && (
                    <span className='indicator-item badge badge-error text-base-100'>Required</span>
                )}
                <input type='email' {...register(contactInfoFormFields.email, {required: true})}
                       id={contactInfoFormFields.email}
                       className={`input input text-neutral mb-4 w-full ${errors?.email ? 'input-error' : ''}`}
                       required
                       placeholder="gustavo@lphermanos.co.za"/>
            </div>

            <label className="label mb-1" htmlFor={contactInfoFormFields.phoneNumber}>Your Phone Number:</label>
            <input {...register(contactInfoFormFields.phoneNumber, {maxLength: 10, minLength: 10})} id={contactInfoFormFields.phoneNumber} type="tel"
                   className="input validator tabular-nums" required placeholder="0827637522"
          />
            {errors?.phoneNumber && (<p className="validator-hint">Must be 10 digits</p>)}
        </div>
    )
}