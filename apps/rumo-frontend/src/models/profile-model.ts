export interface IProfile {
    userId: string;
    userInfo: IUserInfo;
    businessInfo: IBusinessInfo;
    contactInfo: IContactInfo;
    onlinePresence?: IOnlinePresence;

}

export interface IUserInfo {
    firstName: string;
    lastName: string;
}

export interface IBusinessInfo {
    companyName: string;
    logoUrl?: string;
    industry?: string;
    description?: string;
}

export interface IContactInfo {
    email?: string;
    phone?: string | number;
    address?: {
        street: string;
        city: string;
        province: string;
        postalCode: number;
        country: string;
    }
}

export interface IOnlinePresence {
    website?: string;
    socialMedia?: {
        instagram?: ISocialMediaLink;
        facebook?: ISocialMediaLink;
        linkedin?: ISocialMediaLink;
        youtube?: ISocialMediaLink;
        twitter?: ISocialMediaLink;
    }
}


interface ISocialMediaLink {
    username?: string;
    url?: string;
}