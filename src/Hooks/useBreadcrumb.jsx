import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const useBreadcrumb = () => {
    const location = useLocation();
    const [breadcrumbs, setBreadcrumbs] = useState([]);

    useEffect(() => {
        const pathSegments = location.pathname.split('/').filter((segment) => segment !== '');

        const generateBreadcrumb = (pathSegments) => {
            let currentPath = '';
            const breadcrumbItems = pathSegments.map((segment, index) => {
                currentPath += `/${segment}`;
                return {
                    label: segment,
                    url: currentPath,
                };
            });
            return breadcrumbItems;
        };

        setBreadcrumbs(generateBreadcrumb(pathSegments));
    }, [location.pathname]);

    return breadcrumbs;
};

export default useBreadcrumb;

