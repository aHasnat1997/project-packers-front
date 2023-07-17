import BrandIcon from "./homeSections/BrandIcon";
import Hero from "./homeSections/Hero";
import HomeFAQ from "./homeSections/HomeFAQ";
import TrendingProducts from "./homeSections/TrendingProducts";
import Works from "./homeSections/Work";

const HomeLayout = () => {

    return <>
        <Hero />
        <BrandIcon />
        <TrendingProducts />
        <Works />
        <HomeFAQ />
    </>
}

export default HomeLayout;
