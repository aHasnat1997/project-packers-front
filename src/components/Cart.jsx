

const Cart = ({img, title, price, onClickFunction}) => {
    return <div onClick={onClickFunction} className='px-3 pb-8 border cursor-pointer'>
        <img src={img} alt="Product Image" />
        <div className='mt-7'>
            <h3 className='text-2xl font-semibold'>{title}</h3>
            <div className='flex justify-between items-center mt-4 text-base'>
                <p>Retailer price</p>
                <p className='font-semibold'>$ {price}</p>
            </div>
        </div>
    </div>
}

export default Cart;
