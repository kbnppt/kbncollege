import React from 'react'
import { makeStyles,withStyles} from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: '#0048cd',
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            // backgroundColor: '#eee8aa',
        },
        '&:nth-of-type(even)':{
            backgroundColor: '#f5f5f5',

        }
        // '&:hover': {
        //     backgroundColor: '#bdbdbd87'
        // }
    },
}))(TableRow);

function createData(sno, name, designation) {
    return { sno, name, designation };
}

const yearRanking=[
    createData('1','M V R MADHUSUDANA RAO','SECRETARY'),
    createData('2','G S NAVEEN','VICE PRESIDENT'),
    createData('3', 'M G V KISHORE', 'JOINT SECRETARY'),
    createData('4', 'K N V RANGANAYAKULU', 'TREASURER'),
    createData('5', 'G ANANDA KUMAR', 'ADDL.TREASURER'),
    createData('6', 'K KISHORE KUMAR', 'EXECUTIVE MEMBER'),
    createData('7', 'P NAGESWARA RAO', 'EXECUTIVE MEMBER'),
    createData('8', 'K RAMA KRISHNA', 'EXECUTIVE MEMBER'),
    createData('9', 'A BALA SATYA SAI RAM', 'EXECUTIVE MEMBER'),
    createData('10', 'G RAM SURESH', 'EXECUTIVE MEMBER'),
    createData('11', 'D NAGA RATNA', 'EXECUTIVE MEMBER'),
    createData('12', 'T HARITHA', 'EXECUTIVE MEMBER'),
    createData('13', 'P MADHAVI', 'EXECUTIVE MEMBER'),
    createData('14', 'S MANJULA', 'EXECUTIVE MEMBER'),
    createData('15', 'T V M VASUDEVARAO', 'EXECUTIVE MEMBER'),
    createData('16', 'G SATYANARAYANA', 'AUDITOR'),

];

const useStyles = makeStyles((theme) => ({
    teluguHeading:{
        fontSize:'23px',
        color:'#0000ff',
        margin:'0',
        paddingTop:'12px',
        fontWeight:'normal'
    },
    table:{
        marginTop:'30px'
    }
}));


const KosaCommitte = () => {
  const classes = useStyles();

    return (
        <div>
            <h2 className={classes.teluguHeading}>KBN COLLEGE OLD STUDENTS ASSOCIATION (KOSA) IS CONSTITUTED WITH THE FOLLOWING MEMBERS</h2>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell style={{fontSize:'22px',borderRight:'1px solid white'}} colSpan={0}>SNO</StyledTableCell>
                            <StyledTableCell colSpan={2} style={{fontSize:'22px',borderRight:'1px solid white'}}>MEMBER</StyledTableCell>
                            <StyledTableCell colSpan={2} style={{fontSize:'22px'}}>DESIGNATION</StyledTableCell>
                        </TableRow> 
                    </TableHead>
                    <TableBody>
                        {yearRanking.map((row) => (
                            <StyledTableRow key={row.name}>
                                <StyledTableCell style={{fontSize:'18px',borderRight:'1px solid grey'}} colSpan={0}>
                                    {row.sno}           
                                </StyledTableCell>
                                <StyledTableCell align="left" style={{fontSize:'18px',borderRight:'1px solid grey'}} colSpan={2}>
                                    <div style={{paddingBottom:'7px'}}>{row?.name}</div>
                                </StyledTableCell>
                                <StyledTableCell align="left" style={{fontSize:'18px'}} colSpan={4}>
                                    <div style={{paddingBottom:'7px'}}>{row?.designation}</div>
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default KosaCommitte