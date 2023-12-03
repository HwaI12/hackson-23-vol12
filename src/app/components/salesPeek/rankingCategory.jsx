import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#2A608E",
    color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
    backgroundColor: "#e7f4ff",
    },
    // hide last border
    '&:last-child td, &:last-child th': {
    border: 0,
    },
}));


const rows = [
    {id: 1, name: 'カテゴリー1', product: 12},
    {id: 2, name: 'カテゴリー2', product: 10},
    {id: 3, name: 'カテゴリー3', product: 13},
    {id: 4, name: 'カテゴリー4', product: 9},
    {id: 5, name: 'カテゴリー5', product: 8},
    {id: 6, name: 'カテゴリー6', product: 4},
    {id: 7, name: 'カテゴリー7', product: 7},
];

export default function rankingCategory() {
    return (
    <TableContainer component={Paper}>
        <Table sx={{ minWidth: 300 }} aria-label="customized table">
        <TableHead>
            <TableRow>
            <StyledTableCell>rank</StyledTableCell>
            <StyledTableCell>Category Name</StyledTableCell>
            <StyledTableCell>Product</StyledTableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {rows.map((row) => (
            <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">{row.id}</StyledTableCell>
                <StyledTableCell align='left'>{row.name}</StyledTableCell>
                <StyledTableCell align='left'>{row.product}</StyledTableCell>
            </StyledTableRow>
            ))}
        </TableBody>
        </Table>
    </TableContainer>
    );
}