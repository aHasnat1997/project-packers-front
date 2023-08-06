import React from 'react';
import Overview from './Overview';
import LineChart from './LineChart';
import Heatmap from './Heatmap';
import DashboardTable from './DashboardTable';
import AdminHeaders from '../../DDComponents/AdminHeaders';

const DashboardLayout = () => {
    const datasets = [
        [0, 45, 30, 70, 50, 80],
        [0, 75, 40, 60, 55, 90],
    ];
    return (
        <section className='dd-section-div'>
            <AdminHeaders location='overview' />
            <Overview />
            <div className='mt-8 flex items-center gap-4'>
                <LineChart datasets={datasets} width={1000} height={312} />
                <Heatmap />
            </div>
            <DashboardTable />
        </section>
    );
};

export default DashboardLayout;
