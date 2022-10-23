import React, { useState, useEffect, useRef } from 'react';
import { getMoney } from '../../utils/getMoney'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { ILineChartProps } from './types'
import { Line, getElementAtEvent } from 'react-chartjs-2';
import { dataLineChart, optionsLineChart } from './data';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const INTERVAL = 3500;

const LineChart = () => {
  const [data, setData] = useState<ILineChartProps[]>([]);
  const chartRef = useRef<any>();
  
  useEffect(() => {
    let timer = setInterval(() => {
      setData([...data, {name: '', euros: getMoney()}]);
    }, INTERVAL);
    
    return () => {
      clearInterval(timer);
    }
  }, [data]);
  
  const onClick = (event: React.MouseEvent<HTMLCanvasElement>) => {
    // FIXME - Store the chartRef in a variable and use it
    console.log(getElementAtEvent(chartRef.current, event));
  }
  
  return (
    <Line
      ref={chartRef}
      options={optionsLineChart}
      data={dataLineChart(data)}
      onClick={onClick}
    />
  );
}

export default LineChart