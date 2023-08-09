import React, { useRef, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';


const LineChart = ({ requestData, orderData }) => {
    const chartData = {
        options: {
            chart: {
                id: 'request-vs-order',
                toolbar: {
                    show: false,
                },
            },
            xaxis: {
                categories: requestData.map(entry => entry.date), // Assuming your JSON data has a 'date' field
                labels: {
                    show: true,
                    format: 'MMM', // Display month abbreviation
                },
            },
            yaxis: {
                title: {
                    text: 'Quantity',
                },
                labels: {
                    formatter: function (value, index) {
                        return value;
                    },
                },
            },
            dataLabels: {
                enabled: false,
            },
            fill: {
                type: 'gradient',
                colors: ['#3E949A', '#F2C852'],
            },
            stroke: {
                colors: ['#3E949A', '#F2C852'],
                curve: 'straight',
            },
            grid: {
                show: true,
                borderColor: '#0000001f',
                strokeDashArray: 0,
                position: 'back',
                xaxis: {
                    lines: {
                        show: true,
                    },
                },
                yaxis: {
                    lines: {
                        show: true,
                    },
                },
                row: {
                    colors: undefined,
                    opacity: 0.2,
                },
                column: {
                    colors: undefined,
                    opacity: 0.2,
                },
                padding: {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                },
            },
            colors: ['#6BCCCB', '#F2C852'],
            legend: {
                position: 'top',
                horizontalAlign: 'right',
            },
        },
        series: [
            {
                name: 'Request',
                data: requestData.map(entry => entry.value), // Assuming your JSON data has a 'value' field for requests
            },
            {
                name: 'Order',
                data: orderData.map(entry => entry.value), // Assuming your JSON data has a 'value' field for orders
            },
        ],
    };

    return (
        <ReactApexChart
            options={chartData.options}
            series={chartData.series}
            type='area'
            height={400}
            width={900}
        />
    );
};

export default LineChart;
