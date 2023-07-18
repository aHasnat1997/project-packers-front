const Shots = ({ videoId }) => {
    return <iframe
        title="YouTube Short Video"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=0&loop=1&playlist=${videoId}&controls=0`}
        allow="autoplay; encrypted-media"
        allowFullScreen
        className='rounded-2xl h-[400px] w-[283px]'
    />
};

export default Shots;
