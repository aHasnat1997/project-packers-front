import React from 'react';
import { Link } from 'react-router-dom';
import useBreadcrumb from '../Hooks/useBreadcrumb';

const Breadcrumb = () => {
    const breadcrumbs = useBreadcrumb();

    return (
        <nav className='bg-primary'>
            <ul className='max-w py-3 flex items-center gap-1 text-white'>
                <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                </li>
                {breadcrumbs.map((breadcrumb, index) => (
                    <li
                        key={index}
                        className='first-letter:uppercase'
                    >
                        <Link
                            to={breadcrumb.url}
                        >
                            / {breadcrumb.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Breadcrumb;
