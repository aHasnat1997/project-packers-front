import nike from '../../../assets/brand/nike.png';
import walmart from '../../../assets/brand/walmart.png';
import ebay from '../../../assets/brand/ebay.png';
import amazon from '../../../assets/brand/amazon.png';
import ikea from '../../../assets/brand/ikea.png';
import kroger from '../../../assets/brand/kroger.png';


const BrandIcon = () => {
    return <section className="section-div w-full">
        <h2 className="text-center text-2xl font-semibold">Buy Real USA product from any band through our <br /> Project Packers platform</h2>
        <div className="flex gap-2 sm:gap-12 justify-between w-full items-center px-5 overflow-x-auto no-scrollbar">
            <img src={nike} alt="Brand Icon" />
            <img src={walmart} alt="Brand Icon" />
            <img src={ebay} alt="Brand Icon" />
            <img src={amazon} alt="Brand Icon" />
            <img src={ikea} alt="Brand Icon" />
            <img src={kroger} alt="Brand Icon" />
        </div>
    </section>
}

export default BrandIcon;
