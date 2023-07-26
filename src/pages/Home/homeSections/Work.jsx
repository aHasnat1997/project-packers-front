import WorkList from '../../../components/WorkList';
import video from '../../../assets/kampus-production.mp4';
import { useRef, useState } from 'react';

const Works = () => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlayPause = () => {
        if (isPlaying) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }
        setIsPlaying((prevIsPlaying) => !prevIsPlaying);
    };

    const listItems = [
        {
            id: 1,
            title: 'Tell us about the item you are looking for',
            p: 'Thousands of deals on gadgets, shoes, cosmetics, watches - everything from the US.'
        },
        {
            id: 2,
            title: 'Tell us about the item you are looking for',
            p: 'Thousands of deals on gadgets, shoes, cosmetics, watches - everything from the US.'
        },
        {
            id: 3,
            title: 'Tell us about the item you are looking for',
            p: 'Thousands of deals on gadgets, shoes, cosmetics, watches - everything from the US.'
        },
        {
            id: 4,
            title: 'Tell us about the item you are looking for',
            p: 'Thousands of deals on gadgets, shoes, cosmetics, watches - everything from the US.'
        }
    ]


    return <section className="bg-tertiary py-16">
        <div className="section-div flex flex-col lg:flex-row gap-16">
            <div className='lg:w-1/2'>
                <h2 className="text-4xl font-semibold">How Project Packers works</h2>
                <p className="mt-4">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. <br /> Velit officia consequat duis enim velit mollit. Exercitation veniam <br /> consequat sunt nostrud amet.</p>
                <div className='relative mt-8'>
                    <video
                        loop
                        ref={videoRef}
                        className='rounded-xl w-full'
                    >
                        <source
                            src={video}
                            type="video/mp4"
                        />
                    </video>
                    {
                        isPlaying ?
                            <button
                                className='absolute top-0 right-0 bottom-0 left-0'
                                onClick={handlePlayPause}
                            />
                            :
                            <button
                                className={`absolute top-[calc(50%-32px)] right-[calc(50%-32px)]  bg-slate-300 bg-opacity-50 rounded-full p-4 active:p-2 active:top-[calc(50%-28px)] active:right-calc(50%-28px) active:origin-center ${isPlaying && 'hidden'}`}
                                onClick={handlePlayPause}
                            >
                                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="48" height="48" rx="24" fill="white" />
                                    <path d="M30.8906 24.846C30.5371 26.189 28.8667 27.138 25.5257 29.0361C22.296 30.8709 20.6812 31.7884 19.3798 31.4196C18.8418 31.2671 18.3516 30.9776 17.9562 30.5787C17 29.6139 17 27.7426 17 24C17 20.2574 17 18.3861 17.9562 17.4213C18.3516 17.0225 18.8418 16.7329 19.3798 16.5804C20.6812 16.2117 22.296 17.1291 25.5257 18.9639C28.8667 20.862 30.5371 21.811 30.8906 23.154C31.0365 23.7084 31.0365 24.2916 30.8906 24.846Z" fill="#0D3D4B" />
                                </svg>
                            </button>
                    }
                </div>
            </div>
            <ul className='flex flex-col gap-12'>
                {
                    listItems.map(list => <li key={list.id}>
                        <WorkList
                            title={list.title}
                            p={list.p}
                        />
                    </li>)
                }
            </ul>
        </div>
    </section>
}

export default Works
