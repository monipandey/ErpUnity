import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LineChart from '../components/charts/LineChart';
import PieChart from '../components/charts/PieChart';
import './Sales.css';

const Sales = () => {
  const [salesData, setSalesData] = useState([]);
  
  useEffect(() => {
    // Replace with your API endpoint
    axios.get('/api/sales')
      .then(response => setSalesData(response.data))
      .catch(error => console.error("There was an error fetching sales data:", error));
  }, []);

  const lineChartSeries = [{
    name: 'Sales Revenue',
    data: salesData.map(item => item.revenue)
  }];
  
  const lineChartOptions = {
    chart: {
      type: 'line'
    },
    title: {
      text: 'Monthly Sales Revenue'
    },
    xaxis: {
      categories: salesData.map(item => item.month)
    }
  };

  const barChartSeries = [{
    name: 'Sales',
    data: salesData.map(item => item.quantity)
  }];
  
  const barChartOptions = {
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Sales Quantity by Month'
    },
    xaxis: {
      categories: salesData.map(item => item.month)
    }
  };

  const pieChartSeries = salesData.map(item => item.revenue);
  
  const pieChartOptions = {
    chart: {
      type: 'pie'
    },
    title: {
      text: 'Revenue Distribution'
    },
    labels: salesData.map(item => item.month)
  };

  return (
    <div className="sales-page">
      <h2>Sales Report</h2>
      <LineChart series={lineChartSeries} options={lineChartOptions} />
      <BarChart series={barChartSeries} options={barChartOptions} />
      <PieChart series={pieChartSeries} options={pieChartOptions} />
    </div>
  );
};

export default Sales;
