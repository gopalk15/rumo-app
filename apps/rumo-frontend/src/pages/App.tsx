import {Footer} from "../components/Footer.tsx";
import {Menu} from "../components/Menu.tsx";
import logo from "../assets/logo-and-name.svg";
import {Search, type TSearchInput} from "../components/Search.tsx";
import {ProfileCard} from "../components/profiles/ProfileCard.tsx";
import {companyProfileMocks} from "./__mocks__/company-profile.mocks.ts";
import {useEffect, useMemo, useRef, useState} from "react";
import type {IProfile} from "../models/profile-model.ts";
import {ProfileModal} from "../components/profiles/ProfileModal.tsx";

export type TProfileIndex = {
    userId: string;
    title: Set<string>;
    value: Set<string>;
    tags: Set<string>;

}

type TProfileScores = {
    userId: string;
    score: number;
}

export const App = () => {
    const data = companyProfileMocks;
    const dialogRef = useRef<HTMLDialogElement>(null);
    const [selectedProfile, setSelectedProfile] = useState<IProfile>();
    const [selectedCategory, setSelectedCategory] = useState<string | undefined>('All');
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [searchResult, setSearchResult] = useState<string[]>();


    const profileIndex = useMemo(() => data.reduce((acc: TProfileIndex[], profile) => {



        const profileIndex = {
            userId: profile.userId,
            title: new Set<string>(profile.businessInfo.companyName.toLowerCase().split(' ')),
            tags: new Set<string>(profile.businessInfo.tags?.map(tag => tag.toLowerCase()) ?? []),
            value: new Set<string>(profile.businessInfo.valueProposition?.toLowerCase().split(' ') ?? [])
        } as TProfileIndex

        acc.push(profileIndex);
        return acc;


    }, []), [data])


    const catergories = useMemo(() => {
        const setData = data.reduce((acc: Set<string>, profile: IProfile) => {
            acc.add(profile.businessInfo.category ?? '');
            return acc;
        }, new Set<string>(['All']))

        return Array.from(setData)

    }, [data]);




    const profilesToDisplay =  useMemo(() => {
        if (selectedCategory === 'All' && !searchResult){
            return data;
        }

        if(searchResult){
            return data.filter(profile => searchResult.includes(profile.userId));
        }

        return data.filter(profile => profile.businessInfo.category === selectedCategory);

    }, [data, selectedCategory, searchResult])






    useEffect(() => {
        if(!selectedProfile) return;
        dialogRef.current?.showModal();

    }, [selectedProfile])

    const closeModal = () => {
        dialogRef.current?.close();
        setSelectedProfile(undefined);

    }

    const sleep = (ms: number) => {
        return new Promise(resolve => setTimeout(resolve, ms));

    }


    const searchHandler = async (input: TSearchInput) => {
        setIsSubmitting(true);
        const keywords = input.searchInput.toLowerCase().trim().split(' ');



        const scores  = profileIndex.reduce((acc: TProfileScores[], profile: TProfileIndex) => {
            let counter = 0;
            keywords.forEach(keyword => {
                if (profile.title.has(keyword)){
                    counter = counter + 1
                }
                if(profile.tags.has(keyword)){
                    counter = counter + 1;
                }

                if(profile.value.has(keyword)){
                    counter = counter + 1
                }
            })

            acc.push({
                userId: profile.userId,
                score: counter
            })
            return acc;

        }, [])

        const resultIds = scores.reduce((acc: string[], score) => {
            if(score.score > 0){
                acc.push(score.userId);
            }
            return acc;
        }, [])

        //TO DO: Remove when implementation gets a bit too heavy

        await sleep(500)

        setSearchResult(resultIds);
        setSelectedCategory(undefined);

        setIsSubmitting(false);


    }


    return (
        <div>
            <Menu/>
            {
            selectedProfile && (
                    <ProfileModal ref={dialogRef} closeModal={closeModal} {...selectedProfile} />
                )
            }

            <div className='flex flex-col items-center mb-28'>
                <img src={logo} alt='Rumo Logo' className='lg:w-1/12 md:w-1/8 w-1/3 aspect-square mb-8'/>
                <Search searchHandler={searchHandler} isLoading={isSubmitting}/>
            </div>
            <div className='flex flex-nowrap space-y-10 gap-x-2 px-6 scroll-smooth w-screen overflow-x-scroll no-scrollbar'>
                {
                    catergories.map((category, index) => {
                        const isSelected = category === selectedCategory;
                        return <div key={index} className={`badge ${isSelected ? 'badge-soft' : 'badge-outline'} badge-primary text-nowrap`} onClick={() => {
                            setSearchResult(undefined);
                            setSelectedCategory(category)
                        }}>{category}</div>
                    })
                }

            </div>
            <div className='grid grid-cols-2 items-start sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 mx-4 lg:mx-18 gap-4 mb-20'>
                {
                    profilesToDisplay.map(profile => {

                        return (
                            <button onClick={()=> setSelectedProfile(profile)} className='object-fit'>
                                {
                                    profile.verified ? <ProfileCard
                                        logo={profile.logo}
                                        category={profile.businessInfo.category}
                                        city={profile.location?.address?.city}
                                        verified={profile.verified}
                                        tags={profile.businessInfo.tags}
                                        title={profile.businessInfo.companyName}
                                        description={profile.businessInfo?.description ?? ''}
                                        valueProposition={profile.businessInfo?.valueProposition ?? ''}

                                    /> : undefined

                                }

                            </button>

                        )
                    })



                }


            </div>
            <Footer/>
        </div>
    )

}