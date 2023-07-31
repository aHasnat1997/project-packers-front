import React from 'react';

// Example data for the heatmap
const data = [
    [30, 10, 5, 10],
    [50, 8, 15, 20],
    [12, 12, 1, 25],
    [15, 70, 22, 30],
];

const Heatmap = () => {
    const maxValue = Math.max(...data.map((row) => Math.max(...row)));

    return (
        <div className='w-full h-max'>
            <h1 className="text-xl font-semibold mb-4">Sales Heatmap</h1>
            <div className="grid grid-cols-1 gap-1">
                {data.map((row, rowIndex) => (
                    <div key={rowIndex} className="flex">
                        {row.map((value, colIndex) => (
                            <div
                                key={colIndex}
                                className={`h-16 bg-slate-600 text-white flex items-center justify-center transition-colors duration-300 ${value === maxValue ? 'font-bold' : ''
                                    }`}
                                style={{
                                    width: 'calc(100% / 4)',
                                    opacity: value / maxValue,
                                }}
                            >
                                {value}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Heatmap; // Export the Heatmap component
