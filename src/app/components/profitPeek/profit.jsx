import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

const data = [  0   , 0   , 0   , 0   , 0   , 0   ,
                1260, 2240, 3000, 3560, 4540, 5500, 
                5700, 5800, 4920, 4560, 5100, 5600, 
                4800, 3300, 3490, 3210, 0   ,   0 ];
const xLabels = [0,1,2,3,4,5,6,7,8,9,10,11,12,
                13,14,15,16,17,18,19,20,21,22,23];

export default function ProfitPeek() {
    return (
    <BarChart
        width={500}
        height={300}
        series={[
            { data: data, id: 'pvId', },
        ]}
        xAxis={[{ data: xLabels, scaleType: 'band' }]}
        />
    );
}