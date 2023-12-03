import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

const data = [  0   , 0   , 0   , 0   , 0   , 18  ,
                13  , 14  , 17  , 22  , 33  , 35  , 
                30  , 29  , 31  , 32  , 26  , 28  , 
                26  , 24  , 20  , 18  , 0   , 0   ];
const xLabels = [0,1,2,3,4,5,6,7,8,9,10,11,12,
                13,14,15,16,17,18,19,20,21,22,23];

export default function ProductPeek() {
    return (
    <BarChart
        width={500}
        height={300}
        series={[
            { data: data, id: 'uvId', color: '#2D96FF' },
        ]}
        xAxis={[{ data: xLabels, scaleType: 'band' }]}
        />
    );
}