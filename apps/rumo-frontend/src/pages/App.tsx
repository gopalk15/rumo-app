import {Header} from "../components/Header.tsx";
import {Footer} from "../components/Footer.tsx";
import {Menu} from "../components/Menu.tsx";
import logo from "../assets/logo-and-name.svg";
import {Search} from "../components/Search.tsx";
import {ProfileCard} from "../components/profiles/ProfileCard.tsx";

export const App = () => {




    return (
        <div>
            <Menu />
            <div className='flex flex-col items-center mb-28'>
                <img src={logo} alt='Rumo Logo' className='lg:w-1/12 md:w-1/8 w-1/3 aspect-square mb-4'/>
                <Search />
            </div>
            <div className='flex flex-nowrap space-y-10 px-10 gap-x-2 overflow-x-hidden snap-x scroll-smooth'>
                <div className="badge badge-outline badge-neutral">Primary</div>
                <div className="badge badge-outline badge-secondary">Secondary</div>
                <div className="badge badge-outline badge-accent">Accent</div>
                <div className="badge badge-outline badge-info">Info</div>
                <div className="badge badge-outline badge-success">Success</div>
                <div className="badge badge-outline badge-warning">Warning</div>
                <div className="badge badge-outline badge-error">Error</div>

            </div>
            <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 px-10'>
                <ProfileCard/>
                <ProfileCard/>
                <ProfileCard/>
                <ProfileCard/>
                <ProfileCard/>
                <ProfileCard/>
                <ProfileCard/>
                <ProfileCard/>

            </div>
            <Footer/>
        </div>
    )

}