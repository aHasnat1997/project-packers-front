import React, { useRef, useEffect } from 'react';

const LineChart = ({ datasets, width, height }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        if (datasets && datasets.length > 0) {
            const canvas = canvasRef.current;
            const context = canvas.getContext('2d');

            const maxValue = Math.max(...datasets.flat());
            const xStep = width / (datasets[0].length - 1);
            const yScale = height / maxValue;

            context.clearRect(0, 0, width, height);

            // Draw grid lines
            context.strokeStyle = '#ddd';
            for (let y = 0; y <= height; y += height / 5) {
                context.beginPath();
                context.moveTo(0, y);
                context.lineTo(width, y);
                context.stroke();
            }
            for (let x = 0; x <= width; x += width / (datasets[0].length - 1)) {
                context.beginPath();
                context.moveTo(x, 0);
                context.lineTo(x, height);
                context.stroke();
            }

            // Draw lines and fill colors with constant opacity
            datasets.forEach((data, index) => {
                const color = getRandomColor();
                const opacity = 0.2; // Set the opacity here
                const fillColor = hexToRGBA(color, opacity);

                context.strokeStyle = color;
                context.fillStyle = fillColor;
                context.beginPath();
                data.forEach((value, dataIndex) => {
                    const x = dataIndex * xStep;
                    const y = height - value * yScale;

                    if (dataIndex === 0) {
                        context.moveTo(x, y);
                    } else {
                        context.lineTo(x, y);
                    }

                    // Draw small circle at each data point
                    context.arc(x, y, 4, 0, 2 * Math.PI);
                });

                // Fill color under the line
                const lastDataIndex = data.length - 1;
                context.lineTo(lastDataIndex * xStep, height);
                context.lineTo(0, height);
                context.closePath();
                context.fill();

                // Draw line
                context.stroke();
            });

            // Draw data point values
            context.fillStyle = 'black';
            context.font = '12px Arial';
            datasets.forEach((data) => {
                data.forEach((value, dataIndex) => {
                    const x = dataIndex * xStep;
                    const y = height - value * yScale;

                    context.fillText(value.toString(), x + 8, y - 8);
                });
            });

            // Draw axes
            context.strokeStyle = 'black';
            context.beginPath();
            context.moveTo(0, 0);
            context.lineTo(0, height);
            context.lineTo(width, height);
            context.stroke();
        }
    }, [datasets, width, height]);

    // Helper function to generate random colors
    const getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    // Helper function to convert hex color to RGBA with opacity
    const hexToRGBA = (hex, opacity) => {
        const hexColor = hex.replace('#', '');
        const r = parseInt(hexColor.substring(0, 2), 16);
        const g = parseInt(hexColor.substring(2, 4), 16);
        const b = parseInt(hexColor.substring(4, 6), 16);
        return `rgba(${r}, ${g}, ${b}, ${opacity})`;
    };

    return (
        <canvas
            ref={canvasRef}
            width={width}
            height={height}
        />
    );
};

export default LineChart;
