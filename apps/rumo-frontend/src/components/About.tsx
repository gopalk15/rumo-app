import {WaitingList} from "./WaitingList.tsx";

export const About = () => {
    return (
            <div id='about-section' className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse lg:gap-28 py-10">
                    <div className="lg:text-left flex flex-col justify-center gap-4 lg:items-start items-center max-w-3/4">
                        <h1 className="text-3xl font-bold text-base-content">About Rumo</h1>
                        <p className="py-2 text-neutral/90">
                            Rumo is a smarter way for local businesses to connect, collaborate, and grow — whether you're
                            looking for a reliable supplier or you are one.
                            From signage and office supplies to kitchen stock, cleaning services, textiles, and repairs — Rumo
                            helps businesses discover trusted vendors, compare options, and build lasting partnerships. At the
                            same time, it gives suppliers a space to showcase what they offer and reach the right customers
                            without any noise.

                        </p>
                        <p className='font-medium text-base-contentl'>
                            Every business can be both a buyer and a seller.
                            <br />
                            That’s why Rumo is built as a two-way marketplace.
                        </p>
                    </div>
                    <div className='min-w-1/3 content-center'>
                        <WaitingList />

                    </div>

                </div>
            </div>
    )


}
