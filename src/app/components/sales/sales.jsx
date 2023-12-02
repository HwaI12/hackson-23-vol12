import { PieChart } from '@mui/x-charts/PieChart';
import * as React from 'react';

function makeData(rowData) {
  return rowData.map((row) => ({
    id: row.rank,
    value: row.quantity,
    label: row.product,
  }));
}


export default function Sales(props) {

  const rowData = [
    {rank:1,product:'商品A',quantity:10,},
    {rank:2,product:'商品B',quantity:15,},
    {rank:3,product:'商品C',quantity:20,},
  ];
  
  const data = makeData(rowData);
  // const data = props.data;
  return (
    <PieChart
      series={[
        {
          data,
          highlightScope: { faded: 'global', highlighted: 'item' },
          faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
        },
      ]}
      height={200}
    />
  );
}
