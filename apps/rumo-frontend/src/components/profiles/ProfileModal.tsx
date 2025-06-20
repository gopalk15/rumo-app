import type {IProfile} from "../../models/profile-model.ts";
import type { RefObject} from "react";
import {ProfileDataItem} from "./ProfileDataItem.tsx";
import {MdOutlineMail} from "react-icons/md";
import {CiLocationOn, CiPhone} from "react-icons/ci";
import {TbWorld} from "react-icons/tb";
import {SocialMediaContainer} from "./SocialMediaContainer.tsx";



export interface IProfileModalProps extends IProfile{
    ref: RefObject<HTMLDialogElement>;
    closeModal: () => void;

}

export const ProfileModal = ({closeModal, ref, ...rest}: IProfileModalProps) => {


    return (
        <dialog className="modal" ref={ref}>
            <div className="modal-box w-11/12 lg:max-w-1/3">
                <div className='space-y-2'>
                    <h3 className='font-bold text-lg font-logo'>{rest.businessInfo.companyName}</h3>
                    <span>{rest.businessInfo.description}</span>
                </div>
                <SocialMediaContainer whatsappNumber={rest.contactInfo.whatsapp} {...rest.onlinePresence}/>
                <div className='space-y-2'>
                    {
                        rest.contactInfo.email ? (<ProfileDataItem text={rest.contactInfo.email} textSize='text-md'>
                            <MdOutlineMail/>
                        </ProfileDataItem>) : undefined
                    }
                    {
                        rest.contactInfo.phone ? (
                            <ProfileDataItem text={rest.contactInfo.phone.toString()} textSize='text-md'>
                                <CiPhone/>
                            </ProfileDataItem>
                        ) : undefined
                    }
                    {
                        rest.location?.address ? (
                            <ProfileDataItem text={rest.location.address?.city ?? ''} textSize='text-md'>
                                <CiLocationOn />
                            </ProfileDataItem>
                        ) : undefined
                    }
                    {
                        rest.onlinePresence?.website ? (
                            <a href={rest.onlinePresence.website}>
                                <ProfileDataItem text={rest.onlinePresence.website} textSize='text-md' textClassName='link link-hover'>
                                    <TbWorld />
                                </ProfileDataItem>
                            </a>

                        ) : undefined
                    }


                </div>
                <div className="modal-action">
                    <form method="dialog">
                        {/* if there is a button, it will close the modal */}
                        <button className="btn btn-primary" onClick={() => closeModal()}>Close</button>
                    </form>
                </div>
            </div>
        </dialog>

    )

}