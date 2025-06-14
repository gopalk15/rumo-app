import type {IProfile} from "../../models/profile-model.ts";
import {externalRoutes} from "../../constants/routes.ts";


const cottonCove: IProfile = {
    userId: 'Knap5dyFPfdcvWPdleQZGi2MgCz1',
    userInfo: {
        firstName: 'Shanelle',
        lastName: 'Gopal'
    },
    businessInfo: {
        companyName: 'Cotton Cove',
        category: 'Online Retail', // Business category to place on a business directory
        description: 'Personalized gifts made with love—from custom mugs and hand-burned cutting boards to keepsakes for pet lovers. Founded by Shanelle Gopal, we craft thoughtful, one-of-a-kind items that turn everyday moments into lasting memories.',
        valueProposition: 'Personalized keepsakes—custom mugs, hand‑burned boards, pet gifts—crafted with love to make everyday moments unforgettable.', // 1 sentence value proposition
        tags: ['Personalized Gifts', 'Bespoke', 'Handmade'], //Core Identity tags 3 - 5 tags , optimize for search ability
        serviceableArea: 'Nationwide' // Area that the business services
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
        onlineOnly: true,
        address: {
            city: 'Cape Town',
            province: 'Western Cape'
        }

    },
    logo: {
        url: `${externalRoutes.cms}/cotton-cove.png`,
        alternativeText: 'cotton cove logo'
    },

    verified: true,
}

const rayneAndRoseBoutique: IProfile = {
    userId: 'bT779kT667h6lF6BdpLUjyHWnc82',
    userInfo: {
        firstName: 'Kristella',
        lastName: 'Rose'
    },
    businessInfo: {
        companyName: 'Rayne and Rose Boutique',
        category: 'Online Retail',
        description: 'Inspired by a love for rescue pets and all things creative, Rayne & Rose Boutique offers modern bohemian accessories for you, your home, and your pets. Each item is handmade to order, with fabrics that are handpicked or designed by the founder.',
        valueProposition: 'Handmade modern bohemian accessories for you, your home, and your pets.',
        tags: ['Handmade', 'Bohemian', 'Pet Accessories', 'Home Decor'],
        serviceableArea: 'Nationwide'
    },
    contactInfo: {
        email: 'kristella@rayneandrose.co.za',
        phone: '0725167391'

    },
    onlinePresence: {
        website: 'https://rayneandrose.co.za/',
        socialMedia: {
            facebook: {
                url: 'https://www.facebook.com/rayneandroseboutique/',
            },
            instagram: {
                url: 'https://www.instagram.com/rayneandroseboutique/'

            }
        }
    },
    location: {
        onlineOnly: true,
        address: {
            city: 'Cape Town',
            province: 'Western Cape'
        }

    },
    logo: {
        url: `${externalRoutes.cms}/rayne-and-rose.jpg`,
        alternativeText: 'Rayne and Rose Boutique logo'
    },

    verified: true,
}

const yungskin: IProfile = {
    userId: 'ZKVNjmHaqmZswD5mROqMKhr8BaU2',
    userInfo: {
        firstName: 'Carl',
        lastName: 'Yung'
    },
    businessInfo: {
        companyName: 'Yungskin',
        category: 'Skincare',
        description: 'Yungskin offers a range of energy-infused skincare products formulated with natural ingredients. Their product line includes cleansers, moisturizers, serums, masks, and body care, designed to be gentle, effective, and cruelty-free. They aim to provide high-quality, ethically-made skincare for a balanced and glowing complexion.',
        valueProposition: 'Energy-infused skincare, formulated with natural ingredients for radiant, healthy, and rejuvenated skin.',
        tags: ['Skincare', 'Natural Ingredients', 'Cruelty-Free', 'Anti-Aging', 'Energy-Infused'],
        serviceableArea: 'Nationwide'
    },
    contactInfo: {
        email: 'info@yungskin.com',
        phone: '0828029893'

    },
    onlinePresence: {
        website: 'https://yungskin.com/',
        socialMedia: {
            facebook: {
                url: 'https://www.facebook.com/yungskinSA/',
            },
            instagram: {
                url: 'https://www.instagram.com/yungskinsa/'

            }
        }
    },
    location: {
        onlineOnly: false,
        address: {
            city: 'Cape Town',
            province: 'Western Cape'
        }

    },
    logo: {
        url: `${externalRoutes.cms}/yungskin.jpg`,
        alternativeText: 'Yungskin logo'
    },

    verified: true,
}

const beanOfLife: IProfile = {
    userId: 'placeholder_user_id',
    userInfo: {
        firstName: 'Keagan',
        lastName: 'Whitehouse'
    },
    businessInfo: {
        companyName: 'Bean of Life',
        category: 'Cafe & Venue',
        description: 'A retro-inspired coffee haven in Blouberg, offering a cozy corner to relax, listen to vintage vinyl, and enjoy genuine conversations. They serve specialty coffee and offer their vibrant space for small gatherings like meetups and baby showers.',
        valueProposition: 'A cozy, retro-inspired cafe offering specialty coffee and a vibrant venue for small gatherings.',
        tags: ['Cafe', 'Coffee Shop', 'Venue Hire', 'Events', 'Baby Showers', 'Pet-Friendly'],
        serviceableArea: 'Local'
    },
    contactInfo: {
        email: 'info@beanoflife.co.za',
        phone: '0678040258'

    },
    onlinePresence: {
        website: 'https://www.beanoflife.co.za/',
        socialMedia: {
            facebook: {
                url: '',
            },
            instagram: {
                url: 'https://www.instagram.com/bean.of.life/'

            }
        }
    },
    location: {
        onlineOnly: false,
        address: {
            street: '5 Marine Cir',
            city: 'Table View, Cape Town',
            province: 'Western Cape',
            postalCode: '7439'
        }

    },
    logo: {
        url: `${externalRoutes.cms}/bean-of-life.jpg`,
        alternativeText: 'Bean of Life logo'
    },

    verified: true,
}

const syscoEntertainment: IProfile = {
    userId: "dsvgbXlkoCWPheHkPlFAwyxvDXh1",
    userInfo: {
        firstName: "Waldo",
        lastName: "Dekkers"
    },
    businessInfo: {
        companyName: "Sysco Entertainment",
        category: "Entertainment",
        description: "Sysco Entertainment, led by artist Waldo Dekkers, provides live music, DJ, and karaoke services for a variety of events, including weddings, corporate functions, and private parties. Waldo Dekkers is a singer and guitarist based in Cape Town.",
        valueProposition: "Versatile live musician, DJ, and karaoke host providing tailored entertainment for weddings, corporate events, and private functions.",
        tags: ["Live Music", "DJ", "Karaoke", "Wedding Entertainment", "Corporate Events", "Singer"],
        serviceableArea: "Cape Town and surrounding areas"
    },
    contactInfo: {
        email: "waldodekkers5@gmail.com",
        phone: "083 349 1125"
    },
    onlinePresence: {
        website: "",
        socialMedia: {
            facebook: {
                url: "https://www.facebook.com/WaldoDekkersArtist/"
            },
            instagram: {
                url: "https://www.instagram.com/waldodekkers/"
            }
        }
    },
    location: {
        onlineOnly: false,
        address: {
            city: "Cape Town",
            province: "Western Cape"
        }
    },
    logo: {
        url: `${externalRoutes.cms}/sysco-entertainment.jpg`,
        alternativeText: "Sysco Entertainment logo"
    },
    verified: true
}

const perfectlyClearProducts: IProfile = {
    userId: 'pCsB74558SYHsglI9pOSMetsmVC3',
    userInfo: {
        firstName: 'Mogamat',
        lastName: 'Abdol'
    },
    businessInfo: {
        companyName: 'Perfectly Clear Products',
        category: 'Health and Wellness',
        description: 'Perfectly Clear Products is a health and wellness company offering natural products such as raw sea moss and turmeric soap. They provide options for direct purchase, white labeling, and B2B services, delivering nationwide.',
        valueProposition: 'Natural health and wellness products like sea moss and turmeric soap, available for consumers and B2B.',
        tags: ['Health and Wellness', 'Natural Products', 'Sea Moss', 'Skincare', 'White Label'],
        serviceableArea: 'Nationwide'
    },
    contactInfo: {
        email: 'info@perfectlyclear.co.za',
        phone: '0745213010'

    },
    onlinePresence: {
        website: 'https://perfectlyclear.co.za/',
        socialMedia: {
            facebook: {
                url: 'https://www.facebook.com/perfectlyclearproducts',
            },
            linkedin: {
                url: 'https://www.linkedin.com/company/perfectly-clear-products'
            }
        }
    },
    location: {
        onlineOnly: false,
        address: {
            city: 'Cape Town',
            province: 'Western Cape'
        }

    },
    logo: {
        url: `${externalRoutes.cms}/perfectly-clear-products.png`,
        alternativeText: 'Perfectly Clear Products logo'
    },

    verified: true,
}

const wdDesignz: IProfile = {
    userId: 'bY1cmkSH4ya0MQe9rXjpoylDirw1',
    userInfo: {
        firstName: 'Warren',
        lastName: 'Davis'
    },
    businessInfo: {
        companyName: 'W.D.Designz',
        category: 'Digital Marketing',
        description: 'W.D.Designz is a creative agency based in Cape Town that specializes in helping businesses establish a strong brand presence. Their services include web design, graphic design, content creation, SEO, and Google Ads management to provide comprehensive digital solutions.',
        valueProposition: 'A creative agency offering web design, graphic design, and content creation to build a strong and visually compelling brand identity.',
        tags: ['Web Design', 'Graphic Design', 'Content Creation', 'SEO', 'Branding'],
        serviceableArea: 'Nationwide'
    },
    contactInfo: {
        email: 'wddesignz@outlook.com',
        phone: '0691126732'

    },
    onlinePresence: {
        website: 'https://wddesignz.co.za/',
        socialMedia: {
            facebook: {
                url: 'https://web.facebook.com/w.d.designz.sa/',
            },
            linkedin: {
                url: 'https://www.linkedin.com/in/warren-davis-81ab6431b/'
            }
        }
    },
    location: {
        onlineOnly: true,
        address: {
            city: 'Cape Town',
            province: 'Western Cape'
        }

    },
    logo: {
        url: `${externalRoutes.cms}/wd-designz.jpg`,
        alternativeText: 'W.D.Designz logo'
    },

    verified: true,
}


export const companyProfileMocks: IProfile[] = [cottonCove, rayneAndRoseBoutique, yungskin, beanOfLife, syscoEntertainment, perfectlyClearProducts, wdDesignz]