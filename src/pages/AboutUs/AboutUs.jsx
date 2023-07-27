import React from 'react';
import { useTitle } from '../../Hooks/useTitle';
import Breadcrumb from '../../components/Breadcrumb';
import img from '../../assets/about.svg';
import img2 from '../../assets/about_2.svg';
import img3 from '../../assets/about_3.svg';
import YouTubeShots from '../Home/homeSections/YouTubeShots';

const AboutUs = () => {
    useTitle('About Us');

    return (
        <>
            <Breadcrumb />
            <div
                className='w-full h-[25rem] lg:h-[40rem] text-white flex justify-center items-center bg-black/50 bg-blend-overlay'
                style={{
                    backgroundImage: `url(${img})`,
                    backgroundAttachment: 'fixed',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover'
                }}
            >
                <div className='section-div lg:w-3/5 text-center'>
                    <h4 className='text-[#3E949A] text-2xl font-semibold mb-4'>About us</h4>
                    <h2
                        className='text-3xl lg:text-5xl font-semibold'
                    >
                        UBS is a multinational investment bank based in Switzerland, active.
                    </h2>
                </div>
            </div>
            <section className='px-4 my-10 font-Jakarta lg:my-20 lg:max-w-screen-xl lg:mx-auto'>
                <div className='flex flex-col lg:flex-row lg:items-center gap-7 mb-20'>
                    <div className='w-full lg:w-1/2'>
                        <h4 className='text-4xl mb-8'>Our Story</h4>
                        <p>It’s been named as one of the Most Innovative Companies in 2019 by “Fast Company”.</p>
                        <p className='my-4'>The digital transformation journey started back in 2015, when KW decided to reposition itself as a tech company. The company invested heavily in its own software, the cloud, and AI. It has scooped up top talent from the market and created its own Labs division, KW Labs. KW Labs acts as the innovation hub of Keller Williams, working in a similar fashion to Google and Amazon.</p>
                        <p>To stay ahead of competitors, Keller Williams have also undertaken one of the most ambitious projects in the industry – to leverage their data to boost artificial intelligence-powered technology.</p>
                    </div>
                    <img src={img2} alt='image' className='w-full lg:w-1/2' />
                </div>
                <div className='flex flex-col lg:flex-row lg:items-center gap-7'>
                    <img src={img3} alt='image' className='w-full lg:w-1/2' />
                    <div className='w-full lg:w-1/2'>
                        <h4 className='text-4xl mb-8'>Our Values</h4>
                        <p>It’s been named as one of the Most Innovative Companies in 2019 by “Fast Company”.</p>
                        <p className='my-4'>The digital transformation journey started back in 2015, when KW decided to reposition itself as a tech company. The company invested heavily in its own software, the cloud, and AI. It has scooped up top talent from the market and created its own Labs division, KW Labs. KW Labs acts as the innovation hub of Keller Williams, working in a similar fashion to Google and Amazon.</p>
                        <p>To stay ahead of competitors, Keller Williams have also undertaken one of the most ambitious projects in the industry – to leverage their data to boost artificial intelligence-powered technology.</p>
                    </div>
                </div>
                <div className='mt-36'>
                    <h3 className='text-4xl mb-12 text-center font-semibold'>
                        Our users love  Project Packers
                    </h3>
                    <YouTubeShots isHome={false} />
                </div>
            </section>
        </>
    );
};

export default AboutUs;
