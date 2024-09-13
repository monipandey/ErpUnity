import React, { useState, useEffect } from 'react';
import ChartComponent from './ChartComponent';
import { Table } from 'react-bootstrap';
import { fetchSalesData } from '../Services/SalesService';

const SalesReport = () => {
  const [salesData, setSalesData] = useState([]);
  const [chartData, setChartData] = useState({
    series: [],
    options: {
      chart: { type: 'bar' },
      xaxis: { categories: [] },
    },
  });

  useEffect(() => {
    fetchSalesData().then((data) => {
      setSalesData(data);

      // Prepare chart data
      setChartData({
        series: [{ name: 'Sales', data: data.map(item => item.amount) }],
        options: {
          ...chartData.options,
          xaxis: { categories: data.map(item => item.month) },
        },
      });
    });
  }, []);

  return (
    <div>
      <h2>Sales Report</h2>

      {/* Sales Chart */}
      <ChartComponent chartData={chartData} />

      {/* Sales Table */}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Month</th>
            <th>Sales Amount</th>
          </tr>
        </thead>
        <tbody>
          {salesData.map((item, index) => (
            <tr key={index}>
              <td>{item.month}</td>
              <td>{item.amount}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default SalesReport;
