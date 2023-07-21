// usePreviousLocation.js
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const usePreviousLocation = () => {
    const [previousLocation, setPreviousLocation] = useState(null);

    useEffect(() => {
        const storedLocation = localStorage.getItem('previousLocation');
        if (storedLocation) {
            setPreviousLocation(JSON.parse(storedLocation));
        }
    }, []);

    const savePreviousLocation = (location) => {
        localStorage.setItem('previousLocation', JSON.stringify(location));
        setPreviousLocation(location);
    };

    return { previousLocation, setPreviousLocation, savePreviousLocation };
};

export default usePreviousLocation;
