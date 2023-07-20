import image from '../../../assets/Rectangle18.png';
import WorkList from '../../../components/WorkList';

const Works = () => {
    // const 


    return <section className="bg-tertiary py-16">
        <div className="section-div flex flex-col lg:flex-row gap-16">
            <div className='lg:w-1/2'>
                <h2 className="text-4xl font-semibold">How Project Packers works</h2>
                <p className="mt-4">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                <div className='relative'>
                    <img className="mt-8 w-full" src={image} alt="" />
                    <span className='w-full h-full absolute top-0 flex justify-center items-center'>
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="48" height="48" rx="24" fill="white" />
                            <path d="M30.8906 24.846C30.5371 26.189 28.8667 27.138 25.5257 29.0361C22.296 30.8709 20.6812 31.7884 19.3798 31.4196C18.8418 31.2671 18.3516 30.9776 17.9562 30.5787C17 29.6139 17 27.7426 17 24C17 20.2574 17 18.3861 17.9562 17.4213C18.3516 17.0225 18.8418 16.7329 19.3798 16.5804C20.6812 16.2117 22.296 17.1291 25.5257 18.9639C28.8667 20.862 30.5371 21.811 30.8906 23.154C31.0365 23.7084 31.0365 24.2916 30.8906 24.846Z" fill="#0D3D4B" />
                        </svg>
                    </span>
                </div>
            </div>
            <ul className='flex flex-col gap-12'>
                <li>
                    <WorkList title='Tell us about the item you are looking for'
                        p='Thousands of deals on gadgets, shoes, cosmetics, watches - everything from the US.' />
                </li>
                <li>
                    <WorkList title='Wait for product offer to make delivery'
                        p='Thousands of deals on gadgets, shoes, cosmetics, watches - everything from the US.' />
                </li>
                <li>
                    <WorkList title='Place your order'
                        p='Thousands of deals on gadgets, shoes, cosmetics, watches - everything from the US.' />
                </li>
                <li>
                    <WorkList title='Place your order'
                        p='Thousands of deals on gadgets, shoes, cosmetics, watches - everything from the US.' />
                </li>
            </ul>
        </div>
    </section>
}

export default Works
