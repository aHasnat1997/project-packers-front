import React, { createContext, useEffect, useState } from 'react';
import rectangle from '../assets/Rectangle 1.png'

export const AllUserContext = createContext(null);

const AllUserProvider = ({ children }) => {
    const data = [
        {
            id: 1,
            name: 'Annette Black',
            phone: '+671 555 0110',
            email: 'demo@gmail.com',
            location: 'Sao Tome and Principe',
            orders: [
                {
                    id: 1,
                    productName: '1ZPRESSO | J-MAX Manual Coffee Grinder',
                    productImg: rectangle,
                    status: 'Pending Payment',
                    statusColor: '#E2E8F0',
                    price: 256.00
                },
                {
                    id: 2,
                    productName: '1ZPRESSO | J-MAX Manual Coffee Grinder',
                    productImg: rectangle,
                    status: 'Completed',
                    statusColor: '#86EFAC',
                    price: 256.00
                },
                {
                    id: 3,
                    productName: '1ZPRESSO | J-MAX Manual Coffee Grinder',
                    productImg: rectangle,
                    status: 'Refunded',
                    statusColor: '#94A3B8',
                    price: 256.00
                },
                {
                    id: 4,
                    productName: '1ZPRESSO | J-MAX Manual Coffee Grinder',
                    productImg: rectangle,
                    status: 'Cancel',
                    statusColor: '#FECACA',
                    price: 256.00
                },
            ],
            amountSpent: 396.84
        },
        {
            id: 2,
            name: 'Kristin Watson',
            phone: '+307 555 0133',
            email: 'demo@gmail.com',
            location: 'Haiti',
            orders: [
                {
                    id: 1,
                    productName: '1ZPRESSO | J-MAX Manual Coffee Grinder',
                    productImg: rectangle,
                    status: 'Pending Payment',
                    statusColor: '#E2E8F0',
                    price: 256.00
                },
                {
                    id: 2,
                    productName: '1ZPRESSO | J-MAX Manual Coffee Grinder',
                    productImg: rectangle,
                    status: 'Completed',
                    statusColor: '#86EFAC',
                    price: 256.00
                },
                {
                    id: 3,
                    productName: '1ZPRESSO | J-MAX Manual Coffee Grinder',
                    productImg: rectangle,
                    status: 'Cancel',
                    statusColor: '#FECACA',
                    price: 256.00
                },
            ],
            amountSpent: 396.84
        },
        {
            id: 3,
            name: 'Wade Warren',
            phone: '+208 555 0112',
            email: 'demo@gmail.com',
            location: 'Poland',
            orders: [
                {
                    id: 1,
                    productName: '1ZPRESSO | J-MAX Manual Coffee Grinder',
                    productImg: rectangle,
                    status: 'Pending Payment',
                    statusColor: '#E2E8F0',
                    price: 256.00
                }
            ],
            amountSpent: 396.84
        },
        {
            id: 4,
            name: 'Floyd Miles',
            phone: '+684 555 0102',
            email: 'demo@gmail.com',
            location: 'Vietnam',
            orders: [
                {
                    id: 1,
                    productName: '1ZPRESSO | J-MAX Manual Coffee Grinder',
                    productImg: rectangle,
                    status: 'Pending Payment',
                    statusColor: '#E2E8F0',
                    price: 256.00
                },
                {
                    id: 2,
                    productName: '1ZPRESSO | J-MAX Manual Coffee Grinder',
                    productImg: rectangle,
                    status: 'Completed',
                    statusColor: '#86EFAC',
                    price: 256.00
                },
                {
                    id: 3,
                    productName: '1ZPRESSO | J-MAX Manual Coffee Grinder',
                    productImg: rectangle,
                    status: 'Completed',
                    statusColor: '#86EFAC',
                    price: 256.00
                },
                {
                    id: 4,
                    productName: '1ZPRESSO | J-MAX Manual Coffee Grinder',
                    productImg: rectangle,
                    status: 'Refunded',
                    statusColor: '#94A3B8',
                    price: 256.00
                },
                {
                    id: 5,
                    productName: '1ZPRESSO | J-MAX Manual Coffee Grinder',
                    productImg: rectangle,
                    status: 'Cancel',
                    statusColor: '#FECACA',
                    price: 256.00
                },
            ],
            amountSpent: 396.84
        },
        {
            id: 5,
            name: 'Darlene Robertson',
            phone: '+270 555 0117',
            email: 'demo@gmail.com',
            location: 'Pakistan',
            orders: [
                {
                    id: 1,
                    productName: '1ZPRESSO | J-MAX Manual Coffee Grinder',
                    productImg: rectangle,
                    status: 'Pending Payment',
                    statusColor: '#E2E8F0',
                    price: 256.00
                },
                {
                    id: 2,
                    productName: '1ZPRESSO | J-MAX Manual Coffee Grinder',
                    productImg: rectangle,
                    status: 'Pending Payment',
                    statusColor: '#E2E8F0',
                    price: 256.00
                },
                {
                    id: 3,
                    productName: '1ZPRESSO | J-MAX Manual Coffee Grinder',
                    productImg: rectangle,
                    status: 'Completed',
                    statusColor: '#86EFAC',
                    price: 256.00
                },
                {
                    id: 4,
                    productName: '1ZPRESSO | J-MAX Manual Coffee Grinder',
                    productImg: rectangle,
                    status: 'Completed',
                    statusColor: '#86EFAC',
                    price: 256.00
                },
                {
                    id: 5,
                    productName: '1ZPRESSO | J-MAX Manual Coffee Grinder',
                    productImg: rectangle,
                    status: 'Refunded',
                    statusColor: '#94A3B8',
                    price: 256.00
                },
                {
                    id: 6,
                    productName: '1ZPRESSO | J-MAX Manual Coffee Grinder',
                    productImg: rectangle,
                    status: 'Cancel',
                    statusColor: '#FECACA',
                    price: 256.00
                },
            ],
            amountSpent: 396.84
        },
        {
            id: 6,
            name: 'Esther Howard',
            phone: '+217 555 0113',
            email: 'demo@gmail.com',
            location: 'Central African Republic',
            orders: [
                {
                    id: 1,
                    productName: '1ZPRESSO | J-MAX Manual Coffee Grinder',
                    productImg: rectangle,
                    status: 'Pending Payment',
                    statusColor: '#E2E8F0',
                    price: 256.00
                },
                {
                    id: 2,
                    productName: '1ZPRESSO | J-MAX Manual Coffee Grinder',
                    productImg: rectangle,
                    status: 'Pending Payment',
                    statusColor: '#E2E8F0',
                    price: 256.00
                },
                {
                    id: 3,
                    productName: '1ZPRESSO | J-MAX Manual Coffee Grinder',
                    productImg: rectangle,
                    status: 'Completed',
                    statusColor: '#86EFAC',
                    price: 256.00
                }
            ],
            amountSpent: 396.84
        },
        {
            id: 7,
            name: 'Bessie Cooper',
            phone: '+480 555 0103',
            email: 'demo@gmail.com',
            location: 'Åland Islands',
            orders: [
                {
                    id: 1,
                    productName: '1ZPRESSO | J-MAX Manual Coffee Grinder',
                    productImg: rectangle,
                    status: 'Pending Payment',
                    statusColor: '#E2E8F0',
                    price: 256.00
                },
                {
                    id: 2,
                    productName: '1ZPRESSO | J-MAX Manual Coffee Grinder',
                    productImg: rectangle,
                    status: 'Pending Payment',
                    statusColor: '#E2E8F0',
                    price: 256.00
                },
                {
                    id: 3,
                    productName: '1ZPRESSO | J-MAX Manual Coffee Grinder',
                    productImg: rectangle,
                    status: 'Completed',
                    statusColor: '#86EFAC',
                    price: 256.00
                },
                {
                    id: 4,
                    productName: '1ZPRESSO | J-MAX Manual Coffee Grinder',
                    productImg: rectangle,
                    status: 'Completed',
                    statusColor: '#86EFAC',
                    price: 256.00
                },
                {
                    id: 5,
                    productName: '1ZPRESSO | J-MAX Manual Coffee Grinder',
                    productImg: rectangle,
                    status: 'Refunded',
                    statusColor: '#94A3B8',
                    price: 256.00
                },
                {
                    id: 6,
                    productName: '1ZPRESSO | J-MAX Manual Coffee Grinder',
                    productImg: rectangle,
                    status: 'Cancel',
                    statusColor: '#FECACA',
                    price: 256.00
                },
            ],
            amountSpent: 396.84
        },
        {
            id: 8,
            name: 'Jerome Bell',
            phone: '+302 555 0107',
            email: 'demo@gmail.com',
            location: 'Iceland',
            orders: [
                {
                    id: 1,
                    productName: '1ZPRESSO | J-MAX Manual Coffee Grinder',
                    productImg: rectangle,
                    status: 'Completed',
                    statusColor: '#86EFAC',
                    price: 256.00
                },
                {
                    id: 2,
                    productName: '1ZPRESSO | J-MAX Manual Coffee Grinder',
                    productImg: rectangle,
                    status: 'Completed',
                    statusColor: '#86EFAC',
                    price: 256.00
                },
                {
                    id: 3,
                    productName: '1ZPRESSO | J-MAX Manual Coffee Grinder',
                    productImg: rectangle,
                    status: 'Refunded',
                    statusColor: '#94A3B8',
                    price: 256.00
                },
                {
                    id: 4,
                    productName: '1ZPRESSO | J-MAX Manual Coffee Grinder',
                    productImg: rectangle,
                    status: 'Cancel',
                    statusColor: '#FECACA',
                    price: 256.00
                },
            ],
            amountSpent: 396.84
        },
        {
            id: 9,
            name: 'Devon Lane',
            phone: '+209 555 0104',
            email: 'demo@gmail.com',
            location: 'Guinea',
            orders: [
                {
                    id: 1,
                    productName: '1ZPRESSO | J-MAX Manual Coffee Grinder',
                    productImg: rectangle,
                    status: 'Pending Payment',
                    statusColor: '#E2E8F0',
                    price: 256.00
                },
                {
                    id: 2,
                    productName: '1ZPRESSO | J-MAX Manual Coffee Grinder',
                    productImg: rectangle,
                    status: 'Pending Payment',
                    statusColor: '#E2E8F0',
                    price: 256.00
                },
                {
                    id: 3,
                    productName: '1ZPRESSO | J-MAX Manual Coffee Grinder',
                    productImg: rectangle,
                    status: 'Completed',
                    statusColor: '#86EFAC',
                    price: 256.00
                },
                {
                    id: 4,
                    productName: '1ZPRESSO | J-MAX Manual Coffee Grinder',
                    productImg: rectangle,
                    status: 'Completed',
                    statusColor: '#86EFAC',
                    price: 256.00
                },
                {
                    id: 5,
                    productName: '1ZPRESSO | J-MAX Manual Coffee Grinder',
                    productImg: rectangle,
                    status: 'Refunded',
                    statusColor: '#94A3B8',
                    price: 256.00
                },
                {
                    id: 6,
                    productName: '1ZPRESSO | J-MAX Manual Coffee Grinder',
                    productImg: rectangle,
                    status: 'Cancel',
                    statusColor: '#FECACA',
                    price: 256.00
                },
                {
                    id: 7,
                    productName: '1ZPRESSO | J-MAX Manual Coffee Grinder',
                    productImg: rectangle,
                    status: 'Cancel',
                    statusColor: '#FECACA',
                    price: 256.00
                }
            ],
            amountSpent: 396.84
        },
        {
            id: 10,
            name: 'Jane Cooper',
            phone: '+239 555 0108',
            email: 'demo@gmail.com',
            location: 'Iran (Islamic Republic of Iran)',
            orders: [
                {
                    id: 1,
                    productName: '1ZPRESSO | J-MAX Manual Coffee Grinder',
                    productImg: rectangle,
                    status: 'Pending Payment',
                    statusColor: '#E2E8F0',
                    price: 256.00
                }
            ],
            amountSpent: 396.84
        }
    ];
    const [customersData, setCustomersData] = useState(data);

    // console.log(customersData);

    const customersInfo = { customersData }

    return (
        <AllUserContext.Provider value={customersInfo}>
            {children}
        </AllUserContext.Provider>
    );
};

export default AllUserProvider;
