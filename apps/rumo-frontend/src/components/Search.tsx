export const Search = () => {

    return (
        <form action="POST" className='w-3/4'>
            <div className='search-wrapper w-full'>
                <input type="text"
                       placeholder='Ask anything ...'
                       className={`w-full px-4 py-1.5 bg-base-200 rounded-full focus:outline-hidden`}
                />
            </div>

        </form>
    )

}