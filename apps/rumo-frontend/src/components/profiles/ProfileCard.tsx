import {RiVerifiedBadgeLine} from "react-icons/ri";
import {ProfileDataItem} from "./ProfileDataItem.tsx";

import {TbCategory} from "react-icons/tb";
import {CiLocationOn} from "react-icons/ci";

interface IProfileCard {
    logo?: {
        url: string;
        altText?: string;
    }
    title: string;
    verified: boolean;
    category?: string;
    city?: string;
    tags?: string[];
    valueProposition: string;
    containerClassName?: string;
}



export const ProfileCard = ({logo, verified, valueProposition,tags, title, category, city, containerClassName = ''}: IProfileCard) => {
    const tagIndicatorColors = ['status-primary', 'status-error', 'status-accent', 'status-info']



    return (
        <div className={`card max-w-75 shadow-md shadow-primary/10 bg-base-100${containerClassName}`}>

            <div className='flex justify-start'>
                <figure className='shadow-sm shadow-accent/10'>
                    <img
                        src={logo?.url ?? '/public/rumo-logo.svg'}
                        alt={logo?.altText ?? 'company logo'}
                        className="rounded-xl"/>
                </figure>
                <div className='self-center space-y-2 px-2 pt-4 '>

                    {
                        category  ? (
                            <ProfileDataItem text={category} textClassName='italic'>
                                <TbCategory />
                            </ProfileDataItem>

                        ) : undefined
                    }
                    {
                        city ? (
                            <ProfileDataItem text='Cape Town' textClassName='italic'>
                                <CiLocationOn />
                            </ProfileDataItem>

                        ) : undefined

                    }

                    {
                        verified ? (
                            <ProfileDataItem text='Verified' textClassName='italic'>
                                <RiVerifiedBadgeLine />
                            </ProfileDataItem>
                        ) : undefined
                    }

                </div>
            </div>


            <div className="card-body items-start pt-2 px-2">
                <h2 className="card-title font-logo text-wrap lg:text-left">{title}</h2>
                <p className='text-sm text-neutral/90 text-left line-clamp-3'>{valueProposition}</p>
            </div>

            {
                tags ? (
                    <div className='flex gap-2 flex-wrap p-2'>
                        {
                            tags.map((tag, index) => {
                                return(
                                    <div className='flex items-center'>
                                        <span className={`status ${tagIndicatorColors[index]}`}></span>
                                        <span className='text-[0.7rem] text-nowrap pl-1 text-neutral/70'>{tag}</span>
                                    </div>
                                )
                            })
                        }

                    </div>
                ) : undefined
            }
        </div>
    )
}