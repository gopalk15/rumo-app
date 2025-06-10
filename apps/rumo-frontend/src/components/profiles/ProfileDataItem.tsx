
import type {ReactNode} from "react";
import {IconContext} from "react-icons";

export interface IProfileDataItemProps {
    text: string;
    textSize?: 'text-xs' | 'text-sm' | 'text-md' | 'text-lg';
    textClassName?: string;
    children: ReactNode;
}

export const ProfileDataItem = ({text, children, textSize = 'text-xs', textClassName = ''}: IProfileDataItemProps) => {

    return (
        <IconContext.Provider value={{className: 'text-primary w-4 h-4'}}>
            <div className='flex items-center gap-1'>
                {children}
                <span className={`${textSize} text-nowrap text-neutral/80 ${textClassName}`}>{text}</span>
            </div>
        </IconContext.Provider>
    )

}