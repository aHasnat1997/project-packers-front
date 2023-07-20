import { Link } from "react-router-dom";

const Cart = ({ img, title, price, onClickFunction }) => {
    return <Link to='/product'
        onClick={onClickFunction}
        className='bg-white px-3 pb-8 cursor-pointer flex flex-col justify-center'
    >
        <img src={img} alt="Product Image" />
        <div className='mt-7'>
            <h3 className='text-2xl font-semibold'>{title}</h3>
            <div className='flex justify-between items-center mt-4 text-base'>
                <p>Retailer price</p>
                <p className='font-semibold'>$ {price}</p>
            </div>
        </div>
    </Link>
}

export default Cart;
