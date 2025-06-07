interface IProfileCard {
    logo?: {
        url: string;
        altText?: string;
    }
    title: string;
    category?: string;
    serviceableArea?: string;
    description: string;
    containerClassName?: string;
}



export const ProfileCard = ({logo, description, title, category, serviceableArea, containerClassName = ''}: IProfileCard) => {

    return (
        <div className={`card max-w-96 shadow-sm ${containerClassName}`}>
            <figure className='bg-transparent ld:py-2'>
                <img
                    src={ logo?.url ?? '/public/rumo-logo.svg'}
                    alt={logo?.altText ?? 'company logo'}
                    className="rounded-xl shadow-md"/>
            </figure>
            <div>
                {category} | {serviceableArea}
            </div>
            <div className="card-body items-center text-center truncate">
                <h2 className="card-title">{title}</h2>
                <p className='truncate'>{description}</p>
            </div>
        </div>
    )
}