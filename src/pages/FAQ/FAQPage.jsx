import React from 'react';
import { useTitle } from '../../Hooks/useTitle';
import Breadcrumb from '../../components/Breadcrumb';
import HomeFAQ from '../Home/homeSections/HomeFAQ';

const FAQPage = () => {
    useTitle('FAQ');

    return (
        <>
            <Breadcrumb />
            <HomeFAQ />
        </>
    );
};

export default FAQPage;
