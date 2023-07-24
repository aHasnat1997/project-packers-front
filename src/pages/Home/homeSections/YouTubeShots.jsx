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
    ];

    return <section className="max-w -mb-24 lg:-mb-52 relative -top-20 lg:-top-52 flex gap-4 w-full lg:justify-center items-center px-5 overflow-x-auto no-scrollbar">
        {
            slides.map((slide, i) => <Shots key={i} videoId={slide.videoId} />)
        }
    </section>
};

export default YouTubeShots;
