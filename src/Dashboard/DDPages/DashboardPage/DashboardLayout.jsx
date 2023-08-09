import React from 'react';
import Overview from './Overview';
import LineChart from './LineChart';
import Heatmap from './Heatmap';
import DashboardTable from './DashboardTable';
import AdminHeaders from '../../DDComponents/AdminHeaders';

const requestData = [
    { date: 'Jan', value: 70 },
    { date: 'Fed', value: 60 },
    { date: 'Mar', value: 50 },
    { date: 'Apr', value: 10 },
    { date: 'May', value: 40 },
    { date: 'Jun', value: 45 },
    { date: 'Jul', value: 45 },
    { date: 'Aug', value: 50 }
];

const orderData = [
    { date: 'Jan', value: 30 },
    { date: 'Fed', value: 10 },
    { date: 'Mar', value: 20 },
    { date: 'Apr', value: 5 },
    { date: 'May', value: 20 },
    { date: 'Jun', value: 50 },
    { date: 'Jul', value: 60 },
    { date: 'Aug', value: 10 }
];

const DashboardLayout = () => {
    return (
        <section className='dd-section-div'>
            <AdminHeaders location='overview' />
            <Overview />
            <div className='mt-8 flex items-center gap-4'>
                <div className='border rounded-lg p-5 relative'>
                    <h5 className='font-semibold text-lg absolute top-5'>Request vs Order</h5>
                    <LineChart requestData={requestData} orderData={orderData} />
                </div>
                <div className='border rounded-lg p-5'>
                    <h5 className='font-semibold text-lg'>Sales Heatmap</h5>
                    <Heatmap />
                </div>
            </div>
            <DashboardTable />
        </section>
    );
};

export default DashboardLayout;
