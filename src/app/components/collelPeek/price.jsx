import * as React from 'react';
import { ScatterChart } from '@mui/x-charts/ScatterChart';

const data = [
    {'x': 203, 'y': 11, 'id': 1, 'label': 'A'},
    {'x': 105, 'y': 25, 'id': 2, 'label': 'B'},
    {'x': 210, 'y': 15, 'id': 3, 'label': 'C'},
    {'x': 112, 'y': 14, 'id': 4, 'label': 'D'},
    {'x': 268, 'y': 18, 'id': 5, 'label': 'E'},
    {'x': 103, 'y': 70, 'id': 6, 'label': 'F'},
    {'x': 157, 'y': 20, 'id': 7, 'label': 'G'},
    {'x': 194, 'y': 54, 'id': 8, 'label': 'H'},
    {'x': 245, 'y': 12, 'id': 9, 'label': 'I'},
    {'x': 22, 'y': 23, 'id': 10, 'label': 'J'},
    {'x': 82, 'y': 66, 'id': 11, 'label': 'K'},
    {'x': 47, 'y': 25, 'id': 12, 'label': 'L'},
    {'x': 246, 'y': 25, 'id': 13, 'label': 'M'},
    {'x': 33, 'y': 15, 'id': 14, 'label': 'N'},
    {'x': 164, 'y': 18, 'id': 15, 'label': 'O'},
    {'x': 168, 'y': 84, 'id': 16, 'label': 'P'},
    {'x': 276, 'y': 12, 'id': 17, 'label': 'Q'},
    {'x': 81, 'y': 12, 'id': 18, 'label': 'R'},
    {'x': 35, 'y': 43, 'id': 19, 'label': 'S'},
    {'x': 289, 'y': 53, 'id': 20, 'label': 'T'},
    {'x': 234, 'y': 18, 'id': 21, 'label': 'U'},
    {'x': 53, 'y': 15, 'id': 22, 'label': 'V'},
    {'x': 266, 'y': 12, 'id': 23, 'label': 'W'},
    {'x': 148, 'y': 21, 'id': 24, 'label': 'X'},
    {'x': 83, 'y': 6, 'id': 25, 'label': 'Y'},
    {'x': 159, 'y': 11, 'id': 26, 'label': 'Z'}];

export default function Collelation() {
    return (
        <ScatterChart
        width={1000}
        height={300}
        series={[{  data, 
                    id: 'pvId'}]}
        xAxis={[{ min: 0 }]}
        tooltip={{ trigger: 'item' }} 
    />
);}