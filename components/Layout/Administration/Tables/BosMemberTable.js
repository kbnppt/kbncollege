import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: '#07358a',
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
        '&:hover': {
            backgroundColor: '#bdbdbd87'
        }
    },
}))(TableRow);

const useStyles = makeStyles((theme) => ({
    table: {
        width: "100%",
    },
}));

const BosMemberTable = ({ data }) => {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Sno</StyledTableCell>
                        <StyledTableCell>Departments</StyledTableCell>
                        <StyledTableCell>Name of the Person</StyledTableCell>
                        <StyledTableCell>Designation & Address</StyledTableCell>
                        <StyledTableCell>Particulars</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data?.map((row) => (
                        <StyledTableRow key={row.name}>
                            <StyledTableCell >
                                {row.sno}
                            </StyledTableCell>
                            <StyledTableCell>
                                <div>{row?.departments}</div>
                            </StyledTableCell>
                            <StyledTableCell>{row.name}</StyledTableCell>
                            <StyledTableCell>
                                {row.designation}
                            </StyledTableCell>
                            <StyledTableCell>
                                {row.particulars}
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default BosMemberTable;