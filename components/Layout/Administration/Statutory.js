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

function createData(sno, name, designation) {
    return { sno, name, designation };
}

const rows = [
    createData(1, ['Sri V. Hema Chandra Rao', 'President, KBN College Committee'], 'Chair Person'),
    createData(2, ['Ch. Nagendra Kumar', 'Vice-President, KBN College Committee'], 'Member'),
    createData(3, ['Sri T. Srinivasu', 'Secretary & Correspondent, KBN College Committee'], 'Member'),
    createData(4, ['Sri. G. Rama Rao', 'Joint Secretary, KBN College Committee'], 'Member'),
    createData(5, ['Sri. A. Rama Krishna Rao', 'Treasurer, KBN College Committee'], 'Member'),
    createData(6, ['Sri. M. Surendranadh', 'PG Convener, KBN College Committee'], 'Member'),
    createData(7, ['Dr. K. Naveen Kumar', 'Vice-Principal'], 'Member'),
    createData(8, ['Sri. P.L. Ramesh', 'Director, Academics & Planning'], 'Member'),
    createData(9, ['Sri.S.Venkatesh', 'Director, PG Courses'], 'Member'),
    createData(10, ['Dr.Mazharunnisa', 'Director, PG Center'], 'Member'),
    createData(11, ['Prof.K.Viyyanna Rao', 'Director,South East AsianGroup of Institutions'], 'Educationist'),
    createData(12, ['Prof. Soma Bandhopadhyay', 'Vice-Chancellor, West Bengal University of Teachers Training, Education Planning and Administration'], 'UGC nominee'),
    createData(13, ['Dr.K.Prameela', 'JointDirector,Collegiate Education'], 'State Government nominee'),
    createData(14, ['Prof. D. Surya Chandra Rao', 'Director, Rajiv Gandhi University of Knowledge Technologies'], 'Krishna University nominee'),
    createData(15, ['Sri E. Vara Prasad', 'Principal-FAC,KBN College'], 'Ex. Officio member'),
];
const academic = [
    createData(1, ['Sri. E. Vara Prasad', 'Principal-FAC'], 'Chairman'),
    createData(2, ['Prof. T. Hymavathi', 'Registrar Krishna University, Machilipatnam'], 'University Nominee'),
    createData(3, ['Dr. E. Bhavani', 'Asst. Professor, Dept. of English, Krishna University, Machilipatnam'], 'University Nominee'),
    createData(4, ['Prof. Pulipati King', 'Former Registrar Krishna University, Machilipatnam'], 'University Nominee'),
    createData(5, ['Dr. K. Naveen Kumar', 'Vice-Principal'], 'Member Secretary'),
    createData(6, ['Sri. P.L. Ramesh', 'Director, Academic &Planning'], 'Member'),
    createData(7, ['Sri S. Venkatesh', 'Director, P.G Courses'], 'Member'),
    createData(8, ['Dr. Mazarunnisa', 'Director, P.G Center'], 'Member'),
    createData(9, ['Sri. S. Sivaiah Nayak', 'Head, Dept. of Telugu'], 'Member'),
    createData(10, ['Smt. J.Janaki', 'Head, Dept. of Hindi'], 'Member'),
    createData(11, ['Dr. G.V.S.S.N.Sastry', 'Head, Dept. of Commerce'], 'Member'),
    createData(12, ['Sri P. Ravindra', 'Head, Dept. of Computer Science'], 'Member'),
    createData(13, ['Smt. M. Lakshmi Prasanna', 'Head, Dept. of Mathematics'], 'Member'),
    createData(14, ['Smt. Ch. Radhika', 'Head, Dept. of Statistics'], 'Member'),
    createData(15, ['Dr. P.B. Sandhya Sri', 'Head, Dept. of Physics & Electronics'], 'Member'),
    createData(16, ['Dr. G. Krishnaveni', 'Head, Dept. of Chemistry'], 'Member'),
    createData(17, ['Dr. G. Kranthi Kumar', 'Head, Dept. of Botany'], 'Member'),
    createData(18, ['Dr. G. Sakunthala', 'Head, Dept. of Zoology'], 'Member'),
    createData(19, ['Sri N. Sambasiva Rao', 'Head, Dept. of HVPE'], 'Member'),
    createData(20, ['Dr. P. Bharathi Devi', 'Head, Dept. of MCA'], 'Member'),
    createData(21, ['Smt. Shamim', 'Head, Dept. of M.Sc.(CS)'], 'Member'),
    createData(22, ['Sri B. Prabhakar Rao', 'Head, Depts. of MBA & M.Com.'], 'Member'),
    createData(23, ['Sri V. Thirupathi Rao', 'Head, Dept. of Library'], 'Member'),
    createData(24, ['Sri. D. Hema Chandra Rao', 'Head, Dept. of Physical Education'], 'Member'),
    createData(25, ['Sri. R. Venkata Subbarao', 'Managing Director Saitech Corporation, Vijayawada'], 'Industrial Nominee'),
    createData(26, ['Sri. T.Chandra Sekhar', 'Managing Director, Vilan Industries Vijayawada'], 'Industrial Nominee'),
    createData(27, ['Sri. B.V.S. Linga Murthy', 'Bondada Associates Vinnakota Vari Chowk, KT Road, Vijayawada'], 'Professional Body Member'),
    createData(28, ['Dr. K. Surendra Babu', 'Director SVRM College(Autonomous) Nagaram'], 'Academician'),
    createData(29, ['Sri.V.V.M. Krishna', 'Managing Director, IMIS Pharmaceutical Pvt. Ltd. Vijayawada.'], 'Industrial Nominee'),
    createData(30, ['Sri.M.Venkateswara Rao', 'Controller of Examinations'], 'Member'),
];

const finance = [
    createData(1, 'Sri. E. Vara Prasad', 'Principal-FAC & Chairman'),
    createData(2, 'Sri. Y. Venkata Ratnam', 'Finance Officer, Krishna University,Machilipatnam'),
    createData(3, 'G. Gangadhar', 'Auditor (Nominated By Governing Body),M/s Suryanarayana Murthy & Co., Gandhinagar, Vijayawada'),
    createData(4, 'Sri. P. L. Ramesh', 'Director, Academics & Planning, KBN College'),
];

const useStyles = makeStyles((theme) => ({
    table: {
        width: "100%",
    },
}));

const Statutory = () => {
    const classes = useStyles();

    return (
        <div>
            <h3>Governing Body</h3>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Sno</StyledTableCell>
                            <StyledTableCell align="left">Name</StyledTableCell>
                            <StyledTableCell align="center">Designation</StyledTableCell>
                            {/* <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell>
                            <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell> */}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <StyledTableRow key={row.name}>
                                <StyledTableCell>
                                    {row.sno}
                                </StyledTableCell>
                                <StyledTableCell align="left">
                                    <div>{row?.name[0]}</div>
                                    <div>{row?.name[1]}</div>
                                </StyledTableCell>
                                <StyledTableCell align="center">{row.designation}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <h3>Academic Council</h3>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Sno</StyledTableCell>
                            <StyledTableCell align="left">Name</StyledTableCell>
                            <StyledTableCell align="center">Designation</StyledTableCell>
                            {/* <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell>
                            <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell> */}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {academic.map((row) => (
                            <StyledTableRow key={row.name}>
                                <StyledTableCell>
                                    {row.sno}
                                </StyledTableCell>
                                <StyledTableCell align="left">
                                    <div>{row?.name[0]}</div>
                                    <div>{row?.name[1]}</div>
                                </StyledTableCell>
                                <StyledTableCell align="center">{row.designation}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <h3>Finance Committee</h3>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Sno</StyledTableCell>
                            <StyledTableCell align="left">Name</StyledTableCell>
                            <StyledTableCell align="left">Designation</StyledTableCell>
                            {/* <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell>
                            <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell> */}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {finance.map((row) => (
                            <StyledTableRow key={row.name}>
                                <StyledTableCell>
                                    {row.sno}
                                </StyledTableCell>
                                <StyledTableCell align="left">
                                    <div>{row?.name}</div>
                                </StyledTableCell>
                                <StyledTableCell align="left">{row.designation}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default Statutory;
