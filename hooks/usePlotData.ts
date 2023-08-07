import {useEffect, useState} from 'react';

export default function usePlotData() {
  const [chartData, setChartData] = useState<{y: number}[]>([{y: 135}]);
  let receiveData: {y: number}[] = [];

  useEffect(() => {
    if (chartData.length > 450) {
      setChartData([]);
    }
  }, [chartData]);

  const handleChartData = (dataArr: number[]) => {
    const [data, flag] = dataArr;
    receiveData.push({y: data});
    if (receiveData.length >= 5) {
      setChartData(prevChartData => [...prevChartData, ...receiveData]);
      console.log(receiveData);
      receiveData = [];
    }
  };

  return {
    chartData,
    handleChartData,
  };
}