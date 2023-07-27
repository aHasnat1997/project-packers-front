import React from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import { useTitle } from '../../Hooks/useTitle';
import img from '../../assets/Assets-Rene-4.svg';
import person from '../../assets/Ellipse.png';
import blogImg from '../../assets/Rene.svg';

const SingleBlogLayout = () => {
    useTitle('Validate your product and the market');

    const blogContent = {
        title: 'UBS is a multinational investment bank based in Switzerland, active in all major financial centers and with offices in over 50 countries.',
        body: "<h2 class='text-4xl font-semibold'>UBS is a multinational investment bank based in Switzerland, active in all major financial centers and with offices in over 50 countries.</h2><div class='my-8 flex flex-col gap-4'><p class='text-justify'>It’s been named as one of the Most Innovative Companies in 2019 by “Fast Company”.</p><p class='text-justify'>The digital transformation journey started back in 2015, when KW decided to reposition itself as a tech company. The company invested heavily in its own software, the cloud, and AI. It has scooped up top talent from the market and created its own Labs division, KW Labs. KW Labs acts as the innovation hub of Keller Williams, working in a similar fashion to Google and Amazon.</p><p class='text-justify'>To stay ahead of competitors, Keller Williams have also undertaken one of the most ambitious projects in the industry – <span class='text-[#3E949A]'>to leverage their data</span> to boost artificial intelligence-powered technology.</p></div><img src='https://i.pcmag.com/imagery/articles/04TYAG5Jqgzx0lKFGgJ7YCE-15..v1651174406.jpg' alt='Blog Image' class='w-full' /><div class='my-8 flex flex-col gap-4'><p class='text-justify'>It’s been named as one of the Most Innovative Companies in 2019 by “Fast Company”.</p><p class='text-justify'>The digital transformation journey started back in 2015, when KW decided to reposition itself as a tech company. The company inve sted heavily in its own software, the cloud, and AI. It has scooped up top talent from the market and created its own Labs division, KW Labs. KW Labs acts as the innovation hub of Keller Williams, working in a similar fashion to Google and Amazon.</p><p class='text-justify'>To stay ahead of competitors, Keller Williams have also undertaken one of the most ambitious projects in the industry – <span class='text-[#3E949A]'>to leverage their data</span> to boost artificial intelligence-powered technology.</p></div><h2 class='text-4xl font-semibold'>UBS is a multinational investment bank based in Switzerland, active in all major financial centers and with offices in over 50 countries.</h2><div class='my-8 flex flex-col gap-4'><p class='text-justify'>It’s been named as one of the Most Innovative Companies in 2019 by “Fast Company”.</p><p class='text-justify'>The digital transformation journey started back in 2015, when KW decided to reposition itself as a tech company. The company invested heavily in its own software, the cloud, and AI. It has scooped up top talent from the market and created its own Labs division, KW Labs. KW Labs acts as the innovation hub of Keller Williams, working in a similar fashion to Google and Amazon.</p><p class='text-justify'>To stay ahead of competitors, Keller Williams have also undertaken one of the most ambitious projects in the industry – <span class='text-[#3E949A]'>to leverage their data</span> to boost artificial intelligence-powered technology.</p></div>"
    }

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
                <div className='section-div lg:w-3/5'>
                    <h2
                        className='text-3xl lg:text-5xl font-semibold'
                    >
                        UBS is a multinational investment bank based in Switzerland, active.
                    </h2>
                    <div className='text-lg mt-6 flex items-center gap-4'>
                        <div className='flex gap-2 items-center'>
                            <img src={person} alt="writer image" />
                            <h4>Ralph Edwards</h4>
                        </div>
                        <span className='bg-white w-2 h-2 rounded-full' />
                        <p>June 13, 2020</p>
                    </div>
                </div>
            </div>
            <section
                className='max-w-[50rem] min-h-screen mx-auto px-4 my-12'
                dangerouslySetInnerHTML={{ __html: blogContent.body }}
            />
        </>
    );
};

export default SingleBlogLayout;
