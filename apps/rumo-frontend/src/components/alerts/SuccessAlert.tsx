import type {PropsWithChildren} from "react";

export const SuccessAlert = ({children}:PropsWithChildren) => {
    return (
        <div role="alert" className="alert alert-soft alert-success text-center my-4">
            <span className='text-neutral'>{children}</span>
        </div>

    )
}