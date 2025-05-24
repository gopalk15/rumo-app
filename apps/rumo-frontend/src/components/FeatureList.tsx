import {IoSearch} from "react-icons/io5";
import {LuScale} from "react-icons/lu";
import {MdOutlineRateReview} from "react-icons/md";
import { FaRegCompass } from "react-icons/fa";
import {IconContext} from "react-icons";
import type {JSX} from "react";

type TListItemProps = {
    title: string;
    description: string;
    icon: JSX.Element;
}

const ListItem = ({title, description, icon}: TListItemProps) => {
    return (
        <li className='flex flex-col items-center justify-center content-center gap-4 lg:max-w-1/4 lg:min-w-1/4 min-w-1/2'>
            {icon}
            <h3 className='text-xl font-bold text-secondary'>{title}</h3>
            <p className='text-center text-neutral/90'>{description}</p>

        </li>
    )
}

const featureList = new Array<TListItemProps>(
    {
    title: 'Find Verified Suppliers',
    description: 'Quickly find trustworthy suppliers in your area, whether you need products or services for your business. ' +
        'Every listing on Rumo is vetted to help you avoid unreliable providers and focus only on quality options.',
    icon: <IoSearch />
} as TListItemProps,
    {
        title: 'Get Discovered',
        description: 'List your own business and get discovered by others nearby. ' +
            'Showcase your products or services to a targeted local audience actively looking for what you offer.' +
            ' Your business profile puts you in front of potential B2B clients without costly marketing or cold outreach',
        icon: <FaRegCompass />
    } as TListItemProps,
    {
        title: 'Compare with Confidence',
        description: 'Make smarter decisions by comparing vendors side by side on price points, customer ratings, and proven track records. ' +
            'Save time by seeing which suppliers fit your budget and quality standards upfront.',
        icon: <LuScale />
    } as TListItemProps,
    {
        title: 'Rate & Review',
        description: 'Share honest feedback about your supplier experiences to help other businesses choose confidently. ' +
            'At the same time, deliver excellent service and collect positive reviews that strengthen your own reputation on the platform.',
        icon: <MdOutlineRateReview />
    } as TListItemProps
    )
export const FeatureList = () => {

    return (
        <IconContext.Provider value={{className: 'text-accent w-12 h-12'}}>
            <ul id='features-section' className='flex lg:flex-nowrap flex-wrap lg:py-12 lg:gap-0 gap-6 bg-primary/20 py-6'>
                {featureList.map((item, index) => <ListItem key={index} title={item.title} description={item.description} icon={item.icon} />)}
            </ul>
        </IconContext.Provider>

    )
}