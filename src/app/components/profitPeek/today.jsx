import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

export default function BasicBars() {
    const profit = [48520, 32340];
    const sales = [67, 31];
    return (
    <BarChart
        rightAxis="rightAxisId"
        yAxis={[{ id: 'leftAxisId' }, { id: 'rightAxisId' }]}
        xAxis={[{ scaleType: 'band', data: ['前日', '今日'] }]}
        series={[
            {
                data: profit,
                label: 'profit',
                id: 'pvId',
                yAxisKey: 'leftAxisId',
            },
            {
                data: sales,
                label: 'sales',
                id: 'uvId',
                yAxisKey: 'rightAxisId',
            },
        ]}
        width={500}
        height={300}
    />
    );
}