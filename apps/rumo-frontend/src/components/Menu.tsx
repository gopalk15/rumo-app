import {routes} from "../constants/routes.ts";
import {MdOutlineRocketLaunch} from "react-icons/md";
import {AiOutlineHome} from "react-icons/ai";
import {BsInfoCircle} from "react-icons/bs";

export const Menu = ({containerClass = ''}: {containerClass?: string}) => {
    const iconSize = '1.25rem'
    return (
        <ul className={`menu bg-base-200 rounded-box ${containerClass}`}>
            <li>
                <a href={routes.search} className="tooltip tooltip-right" data-tip="Home">
                    <AiOutlineHome size={iconSize}/>
                </a>
            </li>
            <li>
                <a href={routes.home} className="tooltip tooltip-right" data-tip="About">
                    <BsInfoCircle size={iconSize}/>
                </a>
            </li>
            <li>
                <a href={routes.onboarding} className="tooltip tooltip-right" data-tip="Add Your Profile">
                    <MdOutlineRocketLaunch size={iconSize}/>
                </a>
            </li>
        </ul>

    )
}