
import {MdKeyboardDoubleArrowRight} from "react-icons/md";
import {useForm} from "react-hook-form";

export type TSearchInput = {
    searchInput: string;
}

export interface ISearch {
    isLoading: boolean;
    searchHandler: (input: TSearchInput) => void;
}



export const Search = ({searchHandler, isLoading = false}: ISearch) => {
    const {register, handleSubmit, resetField} = useForm<TSearchInput>()


    return (
        <form className='w-3/4 max-w-250' onSubmit={handleSubmit((data) => {
            searchHandler(data);
            resetField('searchInput');
        }) }>
            <div className='search-wrapper w-full relative'>
                <input
                    {...register('searchInput')}
                      type="text"
                       placeholder='Ask anything ...'
                       className={`w-full px-4 py-1.5 bg-base-100 rounded-full focus:outline-hidden peer`}
                />
                <button disabled={isLoading}
                        className='btn btn-primary btn-xs absolute top-[20%] right-[3%] peer-focus:top-[18%] p-1 lg:right-[2%]' >
                    {isLoading ? (
                        <>
                            <span className="loading loading-spinner loading-xs"></span>
                        </>
                    ) : (
                        <MdKeyboardDoubleArrowRight size='1rem'/>
                    )}
                </button>
            </div>
        </form>

    )

}