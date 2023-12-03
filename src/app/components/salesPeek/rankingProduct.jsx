import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Image from 'next/image';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#E79223",
    color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
    backgroundColor: "#fff5e9",
    },
    // hide last border
    '&:last-child td, &:last-child th': {
    border: 0,
    },
}));


const rows = [
    {id: 1, image:"https://www.sirogohan.com/_files/recipe/images/gyouza/gyouza0347.JPG", name: '商品1', sales: 12},
    {id: 2, image:"https://www.marukome.co.jp/files/recipe/5008/6413f6aa-a960-4cef-ab79-60b90a0001f7.jpg", name: '商品2', sales: 10},
    {id: 3, image:"https://mi-journey.jp/foodie/wp-content/uploads/2019/08/190820tyahan1.jpg", name: '商品3', sales: 13},
    {id: 4, image:"https://mi-journey.jp/foodie/wp-content/uploads/2021/07/210816chinjaorosu1.jpg", name: '商品4', sales: 9},
    {id: 5, image:"https://www.sirogohan.com/_files/recipe/images/ma-bo/ma-bo8513.JPG", name: '商品5', sales: 8},
    {id: 6, image:"https://park.ajinomoto.co.jp/wp-content/uploads/2018/03/705936.jpeg", name: '商品6', sales: 4},
    {id: 7, image:"https://www.sirogohan.com/_files/recipe/images/hakusaiumani/8pou8451.JPG", name: '商品7', sales: 7},
];

export default function rankingProduct() {
    return (
    <TableContainer component={Paper}>
        <Table sx={{ minWidth: 300 }} size="small" aria-label="customized table">
        <TableHead>
            <TableRow>
            <StyledTableCell>rank</StyledTableCell>
            <StyledTableCell>image</StyledTableCell>
            <StyledTableCell>Product Name</StyledTableCell>
            <StyledTableCell>Sales</StyledTableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {rows.map((row) => (
            <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">{row.id}</StyledTableCell>
                <StyledTableCell align='left'>
                    <img
                        src={row.image}
                        alt="Picture of the author"
                        width={50}
                        height={50}
                        style={{objectFit: 'contain'}}
                    />
                </StyledTableCell>
                <StyledTableCell align='left'>{row.name}</StyledTableCell>
                <StyledTableCell align='left'>{row.sales}</StyledTableCell>
            </StyledTableRow>
            ))}
        </TableBody>
        </Table>
    </TableContainer>
    );
}