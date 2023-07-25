import Shots from "../../../components/Shots";

const YouTubeShots = () => {
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
        },{
            videoId: 'hxWELDpI7IM'
        },{
            videoId: 'hxWELDpI7IM'
        },
    ];

    return <section className="max-w -mb-24 lg:-mb-40 relative -top-20 lg:-top-36 flex gap-4 w-full px-5 overflow-scroll no-scrollbar">
        {
            slides.map((slide, i) => <Shots key={i} videoId={slide.videoId} />)
        }
    </section>
};

export default YouTubeShots;
