import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { makeStyles, withStyles } from '@material-ui/core';

const useStyles = makeStyles({
    ugHeading: {
        fontSize: '28px',
        color: '#003494'
    }
})

const StyledTableCell = withStyles((theme) => ({
    head: {
        // backgroundColor: '#07358a',
        color: theme.palette.common.black,
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
        // '&:hover': {
        //     backgroundColor: '#bdbdbd87'
        // }
    },
}))(TableRow);

function createData(sno, name, designation, syllabus) {
    return { sno, name, designation, syllabus };
}

const pgcourse = [
    createData('M.SC(Computer Science)', '2001', 'Course structure of M.Sc Computers', ['View Syllabus']),
    createData('M.Com', '2002', 'Course Structure M.Com', ['View Syllabus']),
    createData('M.B.A', '2003', '	COURSE STRUCTURE M.B.A', ['View Syllabus']),
    createData('M.Sc(Chemistry)', '2005', 'Course Structure of M.Sc Chemistry', ['with effect from admitted batch 2019-2020', 'with effect from admitted batch 2018-2019']),
    createData('M.C.A', '2007', 'Course Structure of MCA', ['with effect from admitted batch 2019-2020', 'with effect from admitted batch 2018-2019', 'with effect from admitted batch 2017-2018']),
];

const PostGraduateComponent = () => {
    const classes = useStyles();

    return <div>
        <h2 className={classes.ugHeading}>Postgraduate Programmes</h2>
        <TableContainer component={Paper} style={{ paddingTop: '20px' }}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    {/* <TableRow>
                        <StyledTableCell colSpan={6} style={{fontSize:'22px'}} align="center">Part-2</StyledTableCell>
                    </TableRow> */}
                    <TableRow>
                        <StyledTableCell style={{ fontSize: '20px', borderRight: '1px solid #e0e0e0' }} colSpan={0}>Course</StyledTableCell>
                        <StyledTableCell colSpan={2} style={{ fontSize: '20px', borderRight: '1px solid #e0e0e0' }}>Year of Establishment</StyledTableCell>
                        <StyledTableCell colSpan={2} style={{ fontSize: '20px', borderRight: '1px solid #e0e0e0' }}>Course Structure</StyledTableCell>
                        <StyledTableCell colSpan={2} style={{ fontSize: '20px', borderRight: '1px solid #e0e0e0' }}>Syllabus</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {pgcourse.map((row) => (
                        <StyledTableRow key={row.name}>
                            <StyledTableCell style={{ fontSize: '16px', borderRight: '1px solid #e0e0e0' }}>
                                {row.sno}
                            </StyledTableCell>
                            <StyledTableCell align="left" style={{ fontSize: '16px', borderRight: '1px solid #e0e0e0' }} colSpan={0}>
                                <div style={{ paddingRight: '130px' }}><a href="#">{row.name}</a></div>
                            </StyledTableCell>
                            <StyledTableCell align="left" style={{ fontSize: '16px', color: 'blue', borderRight: '1px solid #e0e0e0' }} colSpan={2}>
                                <div style={{ paddingBottom: '0px' }}><a href="#">{row.designation}</a></div>
                            </StyledTableCell>
                            <StyledTableCell align="left" style={{ fontSize: '16px', color: 'blue' }} colSpan={4}>
                                <div style={{ paddingBottom: '0px' }}><a href="#">{row.syllabus[0]}</a></div>
                                <div style={{ paddingBottom: '0px' }}><a href="#">{row.syllabus[1]}</a></div>
                                <div style={{ paddingBottom: '0px' }}><a href="#">{row.syllabus[2]}</a></div>
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </div>;
};

export default PostGraduateComponent;
