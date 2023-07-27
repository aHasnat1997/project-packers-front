import React from 'react';
import img1 from '../../assets/Assets-Rene-1.png';
import img2 from '../../assets/Assets-Rene-2.png';
import img3 from '../../assets/Assets-Rene-3.png';
import img4 from '../../assets/Assets-Rene-4.png';
import Breadcrumb from '../../components/Breadcrumb';
import { useTitle } from '../../Hooks/useTitle';
import BlogCart from './BlogCart';

const BlogLayout = () => {
    useTitle('Blog');
    const allBlog = [
        {
            img: img1,
            title: 'Validate your product and the market',
            paragraph: 'You have a great product. Now, it’s time to test your idea to see if it can become a business.'
        },
        {
            img: img3,
            title: 'Validate your product and the market',
            paragraph: 'You have a great product. Now, it’s time to test your idea to see if it can become a business.'
        },
        {
            img: img2,
            title: 'Validate your product and the market',
            paragraph: 'You have a great product. Now, it’s time to test your idea to see if it can become a business.'
        },
        {
            img: img4,
            title: 'Validate your product and the market',
            paragraph: 'You have a great product. Now, it’s time to test your idea to see if it can become a business.'
        },
        {
            img: img2,
            title: 'Validate your product and the market',
            paragraph: 'You have a great product. Now, it’s time to test your idea to see if it can become a business.'
        },
        {
            img: img1,
            title: 'Validate your product and the market',
            paragraph: 'You have a great product. Now, it’s time to test your idea to see if it can become a business.'
        },
        {
            img: img4,
            title: 'Validate your product and the market',
            paragraph: 'You have a great product. Now, it’s time to test your idea to see if it can become a business.'
        },
        {
            img: img3,
            title: 'Validate your product and the market',
            paragraph: 'You have a great product. Now, it’s time to test your idea to see if it can become a business.'
        },
        {
            img: img2,
            title: 'Validate your product and the market',
            paragraph: 'You have a great product. Now, it’s time to test your idea to see if it can become a business.'
        },
        {
            img: img1,
            title: 'Validate your product and the market',
            paragraph: 'You have a great product. Now, it’s time to test your idea to see if it can become a business.'
        },
        {
            img: img4,
            title: 'Validate your product and the market',
            paragraph: 'You have a great product. Now, it’s time to test your idea to see if it can become a business.'
        },
        {
            img: img2,
            title: 'Validate your product and the market',
            paragraph: 'You have a great product. Now, it’s time to test your idea to see if it can become a business.'
        },
        {
            img: img4,
            title: 'Validate your product and the market',
            paragraph: 'You have a great product. Now, it’s time to test your idea to see if it can become a business.'
        },
        {
            img: img2,
            title: 'Validate your product and the market',
            paragraph: 'You have a great product. Now, it’s time to test your idea to see if it can become a business.'
        },
        {
            img: img1,
            title: 'Validate your product and the market',
            paragraph: 'You have a great product. Now, it’s time to test your idea to see if it can become a business.'
        },
        {
            img: img3,
            title: 'Validate your product and the market',
            paragraph: 'You have a great product. Now, it’s time to test your idea to see if it can become a business.'
        },

    ];

    return (
        <>
            <Breadcrumb />
            <section
                className='section-div grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-7'
            >
                {
                    allBlog.map((blog, i) => (
                        <BlogCart
                            key={i}
                            imgSrc={blog.img}
                            title={blog.title}
                            paragraph={blog.paragraph}
                        />
                    ))
                }
            </section>
        </>
    );
};

export default BlogLayout;
