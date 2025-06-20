import type {ILocation} from "./location-model.ts";

export interface IProfile {
    userId: string;
    userInfo: IUserInfo;
    businessInfo: IBusinessInfo;
    contactInfo: IContactInfo;
    location?: ILocation;
    onlinePresence?: IOnlinePresence;
    logo?: {
        url: string;
        alternativeText?: string;
    }
    verified: boolean;
}

export interface IUserInfo {
    firstName: string;
    lastName: string;
}



export interface IBusinessInfo {
    companyName: string;
    category?: string;
    description?: string;
    valueProposition?:string;
    tags?: string[];
    serviceableArea?: string;
}


export interface IContactInfo {
    email?: string;
    phone?: string | number;
    whatsapp?: string | number;
}

export interface IOnlinePresence {
    website?: string;
    socialMedia?: {
        instagram?: ISocialMediaLink;
        facebook?: ISocialMediaLink;
        linkedin?: ISocialMediaLink;
        youtube?: ISocialMediaLink;
        twitter?: ISocialMediaLink;
        tiktok?: ISocialMediaLink;
    }
}


interface ISocialMediaLink {
    username?: string;
    url?: string;
}