import { LineChart } from '@mui/x-charts/LineChart';
import * as React from 'react';

export default function Profit(props) {
  const date = [1,2,3,4,5,6,7,8,9,10];
  const profit = [4,7,2,8,9,1,6,9,2,10];
  const quantity = [1,6,2,7,1,7,2,6,2,8];

  // const date = props.date;
  // const profit = props.profit;
  // const quantity = props.quantity;
  return (
    <LineChart
      xAxis={[{ data: date }]}
      series={[
        {
          data: profit,
          curve: "linear",
          label: "profit",
          // yAxisKey: 'leftAxisId'
        },
        {
          data: quantity,
          curve: "linear",
          label: "quantity",
          // yAxisKey: 'rightAxisId'
        }
      ]}
      // yAxis={[{ id: 'leftAxisId' }, { id: 'rightAxisId' }]}
      // rightAxis="rightAxisId"
      width={500}
      height={300}
    />
  );
}
