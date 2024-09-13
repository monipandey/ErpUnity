import React from 'react';
import Chart from 'react-apexcharts';

const ChartComponent = ({ chartData }) => {
  return (
    <Chart
      options={chartData.options}
      series={chartData.series}
      type="bar"
      height={350}
    />
  );
};

export default ChartComponent;
