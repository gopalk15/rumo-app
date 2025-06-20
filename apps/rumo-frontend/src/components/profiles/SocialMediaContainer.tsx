import type {IOnlinePresence} from "../../models/profile-model.ts";
import {FaFacebook, FaInstagram, FaLinkedin, FaTiktok, FaWhatsapp, FaYoutube} from "react-icons/fa";
import {FaXTwitter} from "react-icons/fa6";

export interface ISocialMediaContainer extends IOnlinePresence {
    containerClass?: string;
    whatsappNumber?: number | string;

}
export const SocialMediaContainer = ({socialMedia,whatsappNumber,containerClass=''} : ISocialMediaContainer) => {

    const iconProps = {
        size: '2rem',
        classNames: 'cursorPointer'
    }

    return (
        <div className={`flex text-neutral/50 justify-center gap-4 my-4 ${containerClass}`}>
            {
                socialMedia?.instagram ? (
                    <a href={socialMedia.instagram.url ?? ''} className={iconProps.classNames}>
                        <FaInstagram  size={iconProps.size}/>
                    </a>
                ) : undefined
            }
            {
                socialMedia?.facebook ? (
                    <a href={socialMedia.facebook.url ?? ''} className={iconProps.classNames}>
                        <FaFacebook size={iconProps.size}/>
                    </a>
                ) : undefined
            }
            {
                socialMedia?.tiktok ? (
                    <a href={socialMedia.tiktok.url ?? ''} className={iconProps.classNames}>
                        <FaTiktok size={iconProps.size}/>
                    </a>
                ) : undefined
            }
            {
                socialMedia?.twitter ? (
                    <a href={socialMedia.twitter.url ?? ''} className={iconProps.classNames}>
                        <FaXTwitter size={iconProps.size}/>
                    </a>
                ) : undefined
            }
            {
                socialMedia?.linkedin ? (
                    <a href={socialMedia.linkedin.url ?? ''} className={iconProps.classNames}>
                        <FaLinkedin size={iconProps.size} />
                    </a>
                ) : undefined
            }
            {
                socialMedia?.youtube ? (
                    <a href={socialMedia.youtube.url ?? ''} className={iconProps.classNames}>
                        <FaYoutube size={iconProps.size} />
                    </a>
                ) : undefined
            }
            {
                whatsappNumber ? (
                    <a href={`https://wa.me/${whatsappNumber}`} className={iconProps.classNames}>
                        <FaWhatsapp size={iconProps.size} />
                    </a>
                ) : undefined
            }


        </div>
    )

}