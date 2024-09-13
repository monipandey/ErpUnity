// Example: mock data fetch function. Replace with actual API calls.
export const fetchSalesData = async () => {
    const mockData = [
      { month: 'January', amount: 5000 },
      { month: 'February', amount: 3000 },
      { month: 'March', amount: 4500 },
      { month: 'April', amount: 5200 },
      { month: 'May', amount: 6000 },
    ];
    
    return new Promise((resolve) => {
      setTimeout(() => resolve(mockData), 1000);
    });
  };
  