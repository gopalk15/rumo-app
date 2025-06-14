import type {PropsWithChildren } from "react";
import {Link} from "react-router-dom";
import {routes} from "../constants/routes.ts";

export const Header = ({children} : PropsWithChildren) => {
    const navBarItems = (
        <>
            <li><Link to={routes.search}>Directory</Link></li>
            <li><a href='#features-section'>Features</a></li>
            <li><a href="#about-section">About</a></li>
        </>

    )

    return (
        <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle"/>
            <div className="drawer-content flex flex-col">
                <div className="navbar bg-transparent w-full">
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="inline-block h-6 w-6 stroke-current text-primary"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                ></path>
                            </svg>
                        </label>
                    </div>
                    <div className="mx-2 flex-1 px-2 text-2xl text-primary font-logo font-bold">Rumo</div>
                    <div className="hidden flex-none lg:block">
                        <ul className="menu menu-horizontal text-base-100">
                            {navBarItems}
                        </ul>
                    </div>
                </div>
                {children}
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-primary text-primary-content min-h-full w-80 p-4">
                    {navBarItems}
                </ul>
            </div>
        </div>
    )
}