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
    backgroundColor: "#535353",
    color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
    backgroundColor: "#e4e2e2",
    },
    // hide last border
    '&:last-child td, &:last-child th': {
    border: 0,
    },
}));


const rows = [
    { time: '2023-11-01-10:14', table: '5', product: 'ラーメン', quantity: '1' },
    { time: '2023-11-01-10:21', table: '2', product: '餃子', quantity: '2' },
    { time: '2023-11-01-10:46', table: '6', product: 'ラーメン', quantity: '2' },
    { time: '2023-11-01-10:57', table: '3', product: 'ラーメン', quantity: '1' },
    { time: '2023-11-01-11:45', table: '5', product: 'チャーハン', quantity: '1' },
    { time: '2023-11-01-12:12', table: '3', product: '八宝菜', quantity: '1' },
    { time: '2023-11-01-12:23', table: '7', product: 'ラーメン', quantity: '1' },
    { time: '2023-11-01-13:43', table: '9', product: 'チャーハン', quantity: '1' },

];

export default function rankingCategory() {
    return (
    <TableContainer component={Paper}>
        <Table sx={{ minWidth: 300 }} aria-label="customized table">
        <TableHead>
            <TableRow>
            <StyledTableCell>Time</StyledTableCell>
            <StyledTableCell>Table</StyledTableCell>
            <StyledTableCell>Product</StyledTableCell>
            <StyledTableCell>Quantity</StyledTableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {rows.map((row) => (
            <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">{row.time}</StyledTableCell>
                <StyledTableCell align='left'>{row.table}</StyledTableCell>
                <StyledTableCell align='left'>{row.product}</StyledTableCell>
                <StyledTableCell align='left'>{row.quantity}</StyledTableCell>
            </StyledTableRow>
            ))}
        </TableBody>
        </Table>
    </TableContainer>
    );
}