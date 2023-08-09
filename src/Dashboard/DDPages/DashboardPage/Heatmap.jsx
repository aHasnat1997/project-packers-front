import React from 'react';
import ReactApexChart from 'react-apexcharts';


const heatMap = [
    {
        name: "6 am",
        data: [
            {
                x: "Mon",
                y: 43,
            },
            {
                x: "Tue",
                y: 43,
            },
            {
                x: "Wed",
                y: 43,
            },
            {
                x: "Thu",
                y: 43,
            },
            {
                x: "Fri",
                y: 43,
            },
            {
                x: "Sat",
                y: 43,
            },
            {
                x: "Sun",
                y: 43,
            },
        ],
    },

    {
        name: "6 am",
        data: [
            {
                x: "Mon",
                y: 43,
            },
            {
                x: "Tue",
                y: 43,
            },
            {
                x: "Wed",
                y: 43,
            },
            {
                x: "Thu",
                y: 43,
            },
            {
                x: "Fri",
                y: 43,
            },
            {
                x: "Sat",
                y: 43,
            },
            {
                x: "Sun",
                y: 43,
            },
        ],
    },
    {
        name: "6 am",
        data: [
            {
                x: "Mon",
                y: 43,
            },
            {
                x: "Tue",
                y: 43,
            },
            {
                x: "Wed",
                y: 43,
            },
            {
                x: "Thu",
                y: 43,
            },
            {
                x: "Fri",
                y: 43,
            },
            {
                x: "Sat",
                y: 43,
            },
            {
                x: "Sun",
                y: 43,
            },
        ],
    },
    {
        name: "6 am",
        data: [
            {
                x: "Mon",
                y: 43,
            },
            {
                x: "Tue",
                y: 43,
            },
            {
                x: "Wed",
                y: 43,
            },
            {
                x: "Thu",
                y: 43,
            },
            {
                x: "Fri",
                y: 43,
            },
            {
                x: "Sat",
                y: 43,
            },
            {
                x: "Sun",
                y: 43,
            },
        ],
    },
    {
        name: "6 am",
        data: [
            {
                x: "Mon",
                y: 43,
            },
            {
                x: "Tue",
                y: 43,
            },
            {
                x: "Wed",
                y: 43,
            },
            {
                x: "Thu",
                y: 43,
            },
            {
                x: "Fri",
                y: 43,
            },
            {
                x: "Sat",
                y: 43,
            },
            {
                x: "Sun",
                y: 43,
            },
        ],
    },
    {
        name: "6 am",
        data: [
            {
                x: "Mon",
                y: 43,
            },
            {
                x: "Tue",
                y: 43,
            },
            {
                x: "Wed",
                y: 43,
            },
            {
                x: "Thu",
                y: 43,
            },
            {
                x: "Fri",
                y: 43,
            },
            {
                x: "Sat",
                y: 43,
            },
            {
                x: "Sun",
                y: 43,
            },
        ],
    },
    {
        name: "6 am",
        data: [
            {
                x: "Mon",
                y: 43,
            },
            {
                x: "Tue",
                y: 43,
            },
            {
                x: "Wed",
                y: 43,
            },
            {
                x: "Thu",
                y: 43,
            },
            {
                x: "Fri",
                y: 43,
            },
            {
                x: "Sat",
                y: 43,
            },
            {
                x: "Sun",
                y: 43,
            },
        ],
    },
    {
        name: "6 am",
        data: [
            {
                x: "Mon",
                y: 43,
            },
            {
                x: "Tue",
                y: 43,
            },
            {
                x: "Wed",
                y: 43,
            },
            {
                x: "Thu",
                y: 43,
            },
            {
                x: "Fri",
                y: 43,
            },
            {
                x: "Sat",
                y: 43,
            },
            {
                x: "Sun",
                y: 43,
            },
        ],
    },
];


const Heatmap = () => {
    const cellSize = 6;
    const cellGap = 10;
    const chartData = {
        options: {
            chart: {
                height: 400,
                type: "heatmap",
                toolbar: {
                    show: false,
                },
            },
            dataLabels: {
                enabled: false,
            },
            plotOptions: {
                heatmap: {
                    radius: 12,
                },
            },
            colors: ["#3E949A"],
            xaxis: {
                labels: {
                    show: true,
                },
            },
            yaxis: {
                labels: {
                    show: true,
                },
            },
            grid: {
                padding: {
                    right: cellSize / 2,
                },
                show: true,
                borderColor: "#ffffff",
                strokeDashArray: 0,
                position: "back",
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
                    opacity: 1,
                },
                column: {
                    colors: undefined,
                    opacity: 1,
                },
                padding: {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                },
            },
        },
        series: heatMap.map(item => {
            return {
                name: item.name,
                data: item.data.map(entry => {
                    return {
                        x: entry.x,
                        y: entry.y,
                    };
                }),
            };
        }),
    };

    return (
        <div className="heatmap-container">
            <ReactApexChart
                options={chartData.options}
                series={chartData.series}
                type="heatmap"
                height={cellSize * 24 + cellGap * 23}
                width={480}
            />
        </div>
    );
};

export default Heatmap;
