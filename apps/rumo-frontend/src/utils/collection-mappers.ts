import type {IProfile} from "../models/profile-model.ts";
import type {TProfileFormInputs} from "../components/forms/interfaces.ts";

export const mapFormDataToProfileModel = (userId: string,formData: TProfileFormInputs): Partial<IProfile> => {
    return {
        userId,
        userInfo: {
            firstName: formData.firstName,
            lastName: formData.lastName
        },
        businessInfo: {
            companyName: formData.companyName
        },
        contactInfo: {
            email: formData.email,
            phone: formData.phoneNumber,
        },
        onlinePresence: {
            website: formData.website,
            socialMedia: {
                instagram: {
                    url: formData.instagram
                },
                facebook: {
                    url: formData.facebook
                },
                linkedin: {
                    url: formData.linkedin
                },

            }
        }

    }

}