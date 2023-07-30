import Shots from "../../../components/Shots";

const YouTubeShots = ({ isHome = Boolean }) => {
    const value = isHome

    const slides = [
        {
            videoId: 'odrNK0Y_z-M'
        },
        {
            videoId: 'SLLwm4KU_jQ'
        },
        {
            videoId: 'J6kmBWMD8MA'
        },
        {
            videoId: 'pMMeqBiEiAk'
        },
        {
            videoId: 'hxWELDpI7IM'
        },
        {
            videoId: 'hxWELDpI7IM'
        },
        {
            videoId: 'hxWELDpI7IM'
        }, {
            videoId: 'hxWELDpI7IM'
        }, {
            videoId: 'hxWELDpI7IM'
        },
    ];

    return <section
        className={`max-w flex gap-4 w-full px-5 overflow-scroll no-scrollbar 
            ${isHome && '-mb-24 relative -top-24'}`}
    >
        {
            slides.map((slide, i) => <Shots key={i} videoId={slide.videoId} />)
        }
    </section>
};

export default YouTubeShots;
