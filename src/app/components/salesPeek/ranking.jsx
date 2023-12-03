import { PieChart } from '@mui/x-charts/PieChart';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';


export default function Ranking() {
    return (
        <>
            <Grid container spacing={3}>
                <Grid item xs={4} md={4} lg={4}>
                    <Typography sx={{borderBottom: "solid", marginBottom: "5%"}}>カテゴリー</Typography>
                    <PieChart
                        colors={['#2a608e', '#3f8cc9', '#5fa7e0', '#8fc7f0', '#b3d9f7']}
                        series={[
                            {
                            data : [
                                { id: 0, value: 30, label: 'カテゴリー1' },
                                { id: 1, value: 30, label: 'カテゴリー2' },
                                { id: 2, value: 20, label: 'カテゴリー3' },
                                { id: 3, value: 10, label: 'カテゴリー4' },
                                { id: 4, value: 10 , label: 'カテゴリー5' },
                            ],
                            highlightScope: { faded: 'global', highlighted: 'item' },
                            faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
                            },
                        ]}
                        height={200}
                        slotProps={{
                            legend: { hidden: true },
                        }}
                    />
                </Grid>
                <Grid item xs={4} md={4} lg={4}>
                <Typography sx={{borderBottom: "solid", marginBottom: "5%"}}>商品</Typography>
                    <PieChart
                        colors={['#e79223', '#f0a44d', '#f5b76b', '#f9c98b', '#fde1c9']}
                        series={[
                            {
                            data : [
                                { id: 0, value: 90, label: '商品1' },
                                { id: 1, value: 50, label: '商品2' },
                                { id: 2, value: 30, label: '商品3' },
                                { id: 3, value: 20, label: '商品4' },
                                { id: 4, value: 10, label: '商品5' },
                            ],
                            highlightScope: { faded: 'global', highlighted: 'item' },
                            faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
                            },
                        ]}
                        height={200}
                        slotProps={{
                            legend: { hidden: true },
                        }}
                    />
                </Grid>
                <Grid item xs={4} md={4} lg={4}>
                <Typography sx={{borderBottom: "solid", marginBottom: "5%"}}>オプション</Typography>
                    <PieChart
                        colors={['#32b566', '#5fcf8a', '#8be6a8', '#b3f0c5', '#d9f8e3']}
                        series={[
                            {
                            data : [
                                { id: 0, value: 24, label: 'オプション1' },
                                { id: 1, value: 20, label: 'オプション2' },
                                { id: 2, value: 20, label: 'オプション3' },
                                { id: 3, value: 18, label: 'オプション4' },
                                { id: 4, value: 10, label: 'オプション5' },
                            ],
                            highlightScope: { faded: 'global', highlighted: 'item' },
                            faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
                            },
                        ]}
                        height={200}
                        slotProps={{
                            legend: { hidden: true },
                        }}
                    />
                </Grid>
            </Grid>
        </>
    );
};