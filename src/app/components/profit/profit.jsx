import { LineChart } from '@mui/x-charts/LineChart';
import * as React from 'react';

export default function Profit(props) {
  const date = [new Date(2023,11,1), new Date(2023,11,2), new Date(2023,11,3), new Date(2023,11,4), new Date(2023,11,5), new Date(2023,11,6), new Date(2023,11,7), new Date(2023,11,8), new Date(2023,11,9), new Date(2023,11,10),
                new Date(2023,11,11), new Date(2023,11,12), new Date(2023,11,13), new Date(2023,11,14), new Date(2023,11,15), new Date(2023,11,16), new Date(2023,11,17), new Date(2023,11,18), new Date(2023,11,19), new Date(2023,11,20),];
  const profit = date.map((d) => Math.round(Math.random() * 50000));
  const quantity = [1,6,2,7,1,7,2,6,2,8,4,7,2,8,9,1,6,9,2,10];
  // const date = props.date;
  // const profit = props.profit;
  // const quantity = props.quantity;
  return (
    <LineChart
      xAxis={[{ 
        id: 'Date',
        data: date,
        scaleType: 'time',
      }]}
      series={[
        {
          data: profit,
          curve: "linear",
          label: "profit",
          yAxisKey: 'leftAxisId'
        },
        {
          data: quantity,
          curve: "linear",
          label: "quantity",
          yAxisKey: 'rightAxisId'
        }
      ]}
      yAxis={[{ id: 'leftAxisId' }, { id: 'rightAxisId' }]}
      rightAxis="rightAxisId"
      width={1000}
      height={300}
    />
  );
}
