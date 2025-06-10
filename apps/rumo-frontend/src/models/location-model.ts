export interface ILocation {
    onlineOnly: boolean
    address?: IAddress;
}


export interface IAddress {
    street?: string;
    city?: string;
    province?: string;
    country?: string;
    postalCode?: string;
    formatted?: string;
}