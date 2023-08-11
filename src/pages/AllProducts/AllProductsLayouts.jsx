import useBreadcrumb from "../../Hooks/useBreadcrumb";
import { useTitle } from "../../Hooks/useTitle";
import Breadcrumb from "../../components/Breadcrumb";
import AllProducts from "./AllProducts";
import LeftNav from "./LeftNav";


const AllProductsLayout = () => {
    useTitle('All Products');

    return (
        <>
            <Breadcrumb />
            <section className="section-div flex flex-col lg:flex-row gap-6">
                <aside className='min-w-max'>
                    <LeftNav />
                </aside>
                <aside className='w-[80%]'>
                    <AllProducts />
                </aside>
            </section>
        </>
    );
};

export default AllProductsLayout;
