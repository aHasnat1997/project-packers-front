import React, { useContext, useEffect, useState } from 'react';
import { SearchField } from '../../../components/SearchField';
import internet from '../../../assets/icon/cd-internet-01.svg';
import Counter from '../../../components/Counter';
import { AuthContext } from '../../../context/AuthProvider';
import { Link } from 'react-router-dom';
import reload from '../../../assets/icon/cd-reload-01.svg';
import camera from '../../../assets/icon/cd-camera-01.svg';

const HomeModalBodyOne = () => {
    const [active, setActive] = useState('link');
    const { user } = useContext(AuthContext);
    const [selectedImage, setSelectedImage] = useState();
    const [previewImage, setPreviewImage] = useState([]);

    useEffect(() => {
        if (!selectedImage) {
            setPreviewImage([]);
            return;
        }
        const objectUrl = URL.createObjectURL(selectedImage);
        setPreviewImage((prev) => [...prev, objectUrl]);
        return () => URL.revokeObjectURL(objectUrl);
    }, [selectedImage]);


    const handleFile = (e) => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedImage(undefined);
            return;
        }
        setSelectedImage(e.target.files[0]);
    };

    const handleDelete = id => {
        const newPreviewImage = previewImage.filter((img, i) => i !== id);
        setPreviewImage(newPreviewImage);
    }


    return (
        <div className='w-full lg:w-[33.5rem] p-8'>
            < div className='flex flex-col lg:flex-row lg:items-center gap-4 border-b pb-4' >
                <h3 className='mr-8 text-xl font-semibold'>Request Item</h3>
                <div className='flex gap-4'>
                    <button
                        className={`py-1 px-5 border rounded-full duration-200 active:scale-90 
                        ${active === 'link' && 'bg-accent'}`}
                        onClick={() => setActive('link')}
                    >
                        Link
                    </button>
                    <button
                        className={`py-1 px-5 border rounded-full duration-200 active:scale-90 
                        ${active === 'img' && 'bg-accent'}`}
                        onClick={() => setActive('img')}
                    >
                        Images
                    </button>
                </div>
            </div>
            {
                active === 'link' &&
                <div className='mt-5 flex flex-col gap-5'>
                    <div className='w-full'>
                        <h5>Product link</h5>
                        <div className='flex gap-1'>
                            <span className='flex-1'>
                                <SearchField
                                    placeholder=''
                                    icon={internet}
                                    fieldStyle={'input-field w-full py-3'}
                                />
                            </span>
                            <img
                                src={reload}
                                alt="reload"
                                className='bg-slate-200 cursor-pointer px-3 rounded-full duration-200 active:scale-90'
                            />
                        </div>
                    </div>
                    <div>
                        <h5>Product Name</h5>
                        <input type="text" className='input-field w-full px-6 py-3' />
                    </div>
                </div>
                || active === 'img' &&
                <div className='mt-5'>
                    <h5>Product Image</h5>
                    <div className='flex gap-2 overflow-x-auto no-scrollbar'>
                        {
                            previewImage.map((img, i) => <div
                                key={i}
                                className='relative flex  overflow-x-auto no-scrollbar'
                            >
                                <img
                                    src={img}
                                    className='w-32 h-full rounded-2xl'
                                />
                                <button
                                    className='btn-accent px-2  rounded-full absolute top-0 right-0'
                                    onClick={() => handleDelete(i)}
                                >
                                    X
                                </button>
                            </div>)
                        }
                        <label
                            htmlFor='file'
                            className='w-32 cursor-pointer border flex flex-col items-center py-9 rounded-2xl text-center'
                        >
                            <img src={camera} alt='camera' />
                            <span>Upload Image</span>
                        </label>
                        <input
                            type='file'
                            name='file'
                            id='file'
                            onChange={handleFile}
                            className='hidden'
                        />
                    </div>
                </div>
            }
            <div className='mt-5'>
                <div>
                    <h5>Quantity</h5>
                    <div className='flex items-center gap-5'>
                        <Counter fieldStyle='w-1/2 py-3 rounded-full' />
                        <p>By <span className='underline text-accent cursor-pointer'>amazon.com</span></p>
                    </div>
                </div>
                <div className='mt-5 w-full'>
                    <h5>Add a note (optional)</h5>
                    <textarea
                        rows='5'
                        className='w-full border-2 text-[14px] p-4 rounded-2xl duration-200 focus:outline-none focus:shadow-xl'
                    />
                </div>
                <Link
                    to={user ? '/all-products' : '/authentication/log-in'}
                >
                    <button
                        className='btn-primary w-full py-4 mt-5'
                    >
                        {
                            user ? 'Request Your Item' : 'Login & Request Your Item'
                        }
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default HomeModalBodyOne;
