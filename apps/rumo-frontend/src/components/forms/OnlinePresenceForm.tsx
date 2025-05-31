import type {IOnlinePresenceFormProps} from "./interfaces.ts";
import { onlinePresenceFormFields} from "../../constants/formFields.ts";
import {IconContext} from "react-icons";
import {FaFacebook, FaInstagram, FaLinkedin} from "react-icons/fa";
import {TbWorld} from "react-icons/tb";

export const OnlinePresenceForm = ({register}: IOnlinePresenceFormProps) => {

    return (
        <IconContext.Provider value={{className: 'text-neutral/60 w-6 h-6'}}>
                <div className='w-full space-y-4'>
                    <label className="input" htmlFor={onlinePresenceFormFields.website}>
                        <TbWorld />
                    <input {...register(onlinePresenceFormFields.website)} id={onlinePresenceFormFields.website} type="url" className="w-full"
                           placeholder="Website (optional)"/>
                    </label>
                    <label className="input" htmlFor={onlinePresenceFormFields.instagram}>
                        <FaInstagram />
                    <input {...register(onlinePresenceFormFields.instagram)} id={onlinePresenceFormFields.instagram} type="url" className="w-full"
                           placeholder="Instagram ProfileCard (optional)"/>
                    </label>
                    <label className="input" htmlFor={onlinePresenceFormFields.facebook}>
                        <FaFacebook />
                    <input {...register(onlinePresenceFormFields.facebook)} id={onlinePresenceFormFields.facebook} type="url" className="w-full"
                           placeholder="Facebook Page (optional)"/>
                    </label>
                    <label className="input" htmlFor={onlinePresenceFormFields.linkedin}>
                        <FaLinkedin />
                    <input {...register(onlinePresenceFormFields.linkedin)} id={onlinePresenceFormFields.linkedin} type="url" className="w-full"
                           placeholder="LinkedIn profile (optional)"/>
                    </label>
                </div>
        </IconContext.Provider>
    )

}