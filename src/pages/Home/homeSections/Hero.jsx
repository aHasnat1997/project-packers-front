import image from '../../../assets/image1.png';
import Modal from '../../../components/Modal';
import { SearchField } from '../../../components/SearchField';
import HomeModalBodyOne from './HomeModalBodyOne';
import search from '../../../assets/icon/cd-search-01.svg';
import { useState } from 'react';

const Hero = () => {
    const [searchValue, setSearchValue] = useState('')

    return <section className="w-full bg-primary relative overflow-hidden">
        <div className="max-w relative h-full lg:flex justify-between">
            <div className='lg:w-[43rem] mt-24'>
                <h1 className='text-4xl lg:text-[3.25rem] font-bold font-Sora text-white leading-normal'>Shop products from USA and save up to 40%</h1>
                <p className='mt-4 text-[1.25rem] text-gray-400'>Thousands of deals on gadgets, shoes, cosmetics, watches - everything from the US.</p>
                <div className='mt-8 lg:flex items-center relative z-10'>
                    <SearchField
                        placeholder={'Paste the URL of the product'}
                        fieldStyle='w-full lg:w-[26rem] py-[1rem]'
                        icon={search}
                        
                    />
                    <Modal
                        btnName='Create Request'
                        btnType='btn-primary px-[20px] py-[17px] w-full lg:w-auto mt-2 lg:mt-0'
                        body={<HomeModalBodyOne />}
                    />
                </div>
                <div className='mt-12 hidden lg:flex gap-8 text-white '>
                    <div className='flex gap-2 justify-start'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17 3.33782C15.5291 2.48697 13.8214 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.3151 21.9311 10.6462 21.8 10" stroke="#F2C852" strokeWidth="1.5" strokeLinecap="round" />
                            <path d="M8 12.5C8 12.5 9.5 12.5 11.5 16C11.5 16 17.0588 6.83333 22 5" stroke="#F2C852" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <p>Receive your product in <br /> 1-2 weeks</p>
                    </div>
                    <div className='flex gap-2 justify-start'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17 3.33782C15.5291 2.48697 13.8214 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.3151 21.9311 10.6462 21.8 10" stroke="#F2C852" strokeWidth="1.5" strokeLinecap="round" />
                            <path d="M8 12.5C8 12.5 9.5 12.5 11.5 16C11.5 16 17.0588 6.83333 22 5" stroke="#F2C852" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <p>Delivered by verified <br /> trusted travelers</p>
                    </div>
                </div>
            </div>
            <div className='lg:w-1/2 lg:mt-12 mb-20 relative z-0'>
                <img src={image} alt="banner image" />
            </div>
            <span className='absolute z-0 top-0 right-[-35rem] w-[100rem] h-[100rem] rounded-full border border-secondary opacity-25'></span>
            <span className='absolute z-0 top-60 right-[-30rem] w-[80rem] h-[80rem] rounded-full border border-secondary opacity-25'></span>
            <span className='absolute z-0 top-96 right-[-10rem] w-[40rem] h-[40rem] rounded-full border border-secondary opacity-25'></span>
        </div>
    </section>
}

export default Hero;
