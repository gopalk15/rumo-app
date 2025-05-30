import type {FieldErrors, UseFormRegister} from "react-hook-form";

export interface IBusinessInfoFormProps {
    register: UseFormRegister<IBusinessInfoFormInputs>;
    errors?: FieldErrors<IBusinessInfoFormInputs>;
}

export interface IContactInfoFormProps {
    register: UseFormRegister<IContactInfoFormInputs>;
    errors?: FieldErrors<IContactInfoFormInputs>;
}

export interface IOnlinePresenceFormProps {
    register: UseFormRegister<IOnlinePresenceFormInputs>;
    errors?: FieldErrors<IOnlinePresenceFormInputs>;
}

export interface IBusinessInfoFormInputs {
    firstName: string;
    lastName: string;
    companyName: string;
}
export interface IContactInfoFormInputs {
    email: string;
    phoneNumber: string | number;
}
export interface IOnlinePresenceFormInputs {
    website: string;
    instagram: string;
    facebook: string;
    linkedin: string;
}

export type TProfileFormInputs = IBusinessInfoFormInputs & IContactInfoFormInputs & IOnlinePresenceFormInputs;