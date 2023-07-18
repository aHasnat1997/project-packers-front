import AllProducts from "./AllProducts";
import LeftNav from "./LeftNav";


const AllProductsLayout = () => {
    return <section className="section-div flex flex-col lg:flex-row gap-6">
        <aside className='min-w-max'>
            <LeftNav />
        </aside>
        <aside>
            <AllProducts />
        </aside>
    </section>
};

export default AllProductsLayout;
