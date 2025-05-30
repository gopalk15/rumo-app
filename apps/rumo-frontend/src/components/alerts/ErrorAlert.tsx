import type {PropsWithChildren} from "react";

export const ErrorAlert = ({children}: PropsWithChildren) => {
    return (
        <div role="alert" className="alert alert-soft alert-error text-center my-2">
            <span className='text-neutral'>{children}</span>
        </div>
    )


}