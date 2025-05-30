import { Header } from '../components/Header.tsx'
import logo from '../assets/logo-and-name.svg'
import {Footer} from "../components/Footer.tsx";
import {About} from "../components/About.tsx";
import {FeatureList} from "../components/FeatureList.tsx";

export const LandingPage = () => {

    return (
        <>
            <section className='bg-[url(/src/assets/landing-soon-bg.svg)] bg-cover overflow-x-hidden'>
                <div className='lg:mx-28 '>
                    <Header/>
                    <div className="hero lg:min-h-screen py-2">
                        <div className="hero-content text-neutral/90 text-center">
                            <div className="max-w-md flex flex-col items-center relative lg:right-4/5 lg:bottom-8">
                                <img src={logo} alt='Rumo Logo' className='w-1/2 aspect-square'/>
                                <h1 className="my-5 text-2xl font-bold">Changing The Way Businesses Connect</h1>
                                <p className="mb-5 w-full">
                                    We’re building South Africa’s most
                                    trusted B2B sourcing network - for cafés, agencies, salons, retailers, and
                                    growing businesses for every kind.
                                </p>
                                <p className='mb-5'>
                                    Reduce sourcing guesswork and build long-term business relationships that help your business thrive.
                                    <br />
                                    <em className='font-bold'>
                                        Join the waiting list today!
                                    </em>
                                </p>
                                <div className='flex gap-1'>
                                    <button className="btn btn btn-primary w-full"><a href='#join'>
                                        Join Now!
                                    </a></button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <FeatureList />
            <About />

            <Footer/>

        </>
    )
}