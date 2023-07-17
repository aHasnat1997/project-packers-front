import BrandIcon from "./homeSections/BrandIcon";
import Hero from "./homeSections/Hero";
import HomeFAQ from "./homeSections/HomeFAQ";
import TrendingProducts from "./homeSections/TrendingProducts";
import Works from "./homeSections/Work";
import YouTubeShots from "./homeSections/YouTubeShots";

const HomeLayout = () => {

    return <>
        <Hero />
        <YouTubeShots />
        <BrandIcon />
        <TrendingProducts />
        <Works />
        <HomeFAQ />
    </>
}

export default HomeLayout;
