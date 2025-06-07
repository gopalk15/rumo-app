import type {IProfile} from "../../models/profile-model.ts";


const cottonCove: IProfile = {
    userId: 'Knap5dyFPfdcvWPdleQZGi2MgCz1',
    userInfo: {
        firstName: 'Shanelle',
        lastName: 'Gopal'
    },
    businessInfo: {
        companyName: 'Cotton Cove',
        category: 'Online Retail',
        description: 'Personalized gifts made with love—from custom mugs and hand-burned cutting boards to keepsakes for pet lovers. Founded by Shanelle Gopal, we craft thoughtful, one-of-a-kind items that turn everyday moments into lasting memories.',
        serviceableArea: 'Nationwide'
    },
    contactInfo: {
        email: 'cttncove@gmail.com',
        phone: '0662350440'

    },
    onlinePresence: {
        website: 'https://www.cottoncove.co.za/',
        socialMedia: {
            facebook: {
                url: 'https://www.facebook.com/people/Cotton-Cove/61566529632069/?_rdr',
            },
            instagram: {
                url: 'https://www.instagram.com/_cottoncove_/'

            }
        }
    },
    location: {
        onlineOnly: true
    },
    logo: {
        url: '/public/logos/cotton-cove.webp',
        alternativeText: 'Cotton Cove logo'
    },
    verified: true,
}









export const companyProfileMocks: IProfile[] = [cottonCove]