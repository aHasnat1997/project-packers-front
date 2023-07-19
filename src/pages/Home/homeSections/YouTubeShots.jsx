import Shots from "../../../components/Shots";


const YouTubeShots = () => {
    const slide = [
        <Shots videoId='odrNK0Y_z-M' />,
        <Shots videoId='SLLwm4KU_jQ' />,
        <Shots videoId='J6kmBWMD8MA' />,
        <Shots videoId='pMMeqBiEiAk' />
    ];

    // to-do: shots scroll
    return <section className="max-w -mb-24 lg:-mb-52 relative -top-20 lg:-top-52 flex gap-4 overflow-x-auto no-scrollbar">
        {slide}
    </section>
};

export default YouTubeShots;
