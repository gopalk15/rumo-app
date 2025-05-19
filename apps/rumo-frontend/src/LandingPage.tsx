import { Header } from './components/Header'
import logo from './assets/logo-and-name.svg'

export const LandingPage = () => {
    return (
        <>
            <section className='bg-[url(/src/assets/landing-soon-bg.svg)] bg-cover'>
                <Header />
                <div className="hero min-h-screen">
                    <div className="hero-overlay"></div>
                    <div className="hero-content text-neutral-content text-center">
                        <div className="max-w-md flex flex-col items-center relative lg:right-3/5 lg:bottom-8">
                            <img src={logo} alt='Rumo Logo' className='w-1/2 aspect-square' />
                            <h1 className="mb-5 text-2xl font-bold">Changing The Way Businesses Connect</h1>
                            <p className="mb-5 w-full">
                                We’re building South Africa’s most
                                trusted B2B sourcing network - for cafés, agencies, salons, retailers, and
                                growing businesses for every kind.
                            </p>
                            <div className='flex gap-1'>
                                <input className="input input-sm validator text-neutral-600" type="email" required placeholder="mail@site.com" />
                                <button className="btn btn-sm btn-primary">Notify Me!</button>
                            </div>

                        </div>
                    </div>
                </div>



            </section>



        </>
    )
}