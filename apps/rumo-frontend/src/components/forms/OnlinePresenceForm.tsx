import type {IOnlinePresenceFormProps} from "./interfaces.ts";
import { onlinePresenceFormFields} from "../../constants/formFields.ts";
import {IconContext} from "react-icons";
import {FaFacebook, FaInstagram, FaLinkedin} from "react-icons/fa";
import {TbWorld} from "react-icons/tb";

export const OnlinePresenceForm = ({register}: IOnlinePresenceFormProps) => {

    return (
        <IconContext.Provider value={{className: 'text-neutral/60 w-6 h-6'}}>
                <div className='w-full space-y-4'>
                    <div className='indicator w-full relative focus-within:[&>span]:hidden'>
                        <span className='indicator-item badge bg-base-100 absolute right-5 text-xs transition-opacity'>Optional</span>
                        <label className="input" htmlFor={onlinePresenceFormFields.website}>
                            <TbWorld/>
                            <input {...register(onlinePresenceFormFields.website)} id={onlinePresenceFormFields.website}
                                   type="url" className="w-full"
                                   placeholder="https://your-website.co.za/"/>
                        </label>
                    </div>

                    <div className='indicator w-full relative focus-within:[&>span]:hidden'>
                        <span className='indicator-item badge bg-base-100 absolute right-5 text-xs transition-opacity'>Optional</span>
                        <label className="input" htmlFor={onlinePresenceFormFields.instagram}>
                            <FaInstagram/>
                            <input {...register(onlinePresenceFormFields.instagram)}
                                   id={onlinePresenceFormFields.instagram}
                                   type="url" className="w-full"
                                   placeholder="https://www.instagram.com/"/>
                        </label>
                    </div>

                    <div className='indicator w-full relative focus-within[&>span]:hidden'>
                        <span className='indicator-item badge bg-base-100 absolute right-5 text-xs transition-opacity'>Optional</span>
                        <label className="input" htmlFor={onlinePresenceFormFields.facebook}>
                            <FaFacebook/>
                            <input {...register(onlinePresenceFormFields.facebook)}
                                   id={onlinePresenceFormFields.facebook}
                                   type="url" className="w-full"
                                   placeholder="https://www.facebook.com/"/>
                        </label>
                    </div>

                    <div className='indicator w-full relative focus-within[&>span]:hidden'>
                        <span className='indicator-item badge bg-base-100 absolute right-5 text-xs transition-opacity'>Optional</span>
                        <label className="input" htmlFor={onlinePresenceFormFields.linkedin}>
                            <FaLinkedin/>
                            <input {...register(onlinePresenceFormFields.linkedin)}
                                   id={onlinePresenceFormFields.linkedin}
                                   type="url" className="w-full"
                                   placeholder="https://www.linkedin.com/"/>
                        </label>
                    </div>
                </div>
        </IconContext.Provider>
    )

}