import * as React from 'react';
import { ScatterChart } from '@mui/x-charts/ScatterChart';

const data = [
    { x: 300, y: 25, id: 1 , label: 'A'},
    { x: 350, y: 18, id: 2 , label: 'B'},
    { x: 250, y: 14, id: 3 , label: 'C'},
    { x: 100, y: 23, id: 4 , label: 'D'},
    { x: 450, y: 11, id: 5 , label: 'E'},
    { x: 510, y: 28, id: 6 , label: 'F'},
    { x: 300, y: 33, id: 7 , label: 'G'}
];

export default function SimpleScatterChart() {
    return (
        <ScatterChart
        width={500}
        height={300}
        series={[{  data, 
                    id: 'pvId'}]}
        xAxis={[{ min: 0 }]}
    />
);}