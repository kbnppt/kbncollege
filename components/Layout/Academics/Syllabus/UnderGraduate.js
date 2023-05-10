import { makeStyles, withStyles } from '@material-ui/core';
import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

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

const yearRanking = [
    createData('Telugu', '', ['View Syllabus'], ''),
    createData('Hindi', '', ['View Syllabus']),
    createData('English', '', ['View Syllabus']),
    createData('COMMUNICATION AND SOFT SKILLS', '', ['View Syllabus']),
    createData('HUMAN VALUES AND PROFESSIONAL ETHICS', '', ['View Syllabus']),
    createData('ENVIRONMENTAL STUDIES', '', ['View Syllabus']),
    createData('CITIZENSHIP EDUCATION', '', ['View Syllabus']),
    createData('ANALYTICAL SKILLS', '', ['View Syllabus']),
    createData('ENTREPRENUERSHIP', '', ['View Syllabus']),
    createData('LEADERSHIP EDUCATION', '', ['View Syllabus']),
];

const course = [
    createData('B.Sc(Mathematics,Physics,Chemistry)', '1965', 'Course structure of B.Sc(M.P.C)', ['Mathmatics', 'Physics', 'Chemistry']),
    createData('B.Sc(Chemistry,Botany,Zoology)', '1965', 'Course Structure B.Sc(C.B.Z.)', ['Botany', 'Zoology', 'Chemistry']),
    createData('B.Com(General)', '1965', 'COURSE STRUCTURE B.Com(General)', ['Commerce', 'Computers']),
    createData('B.Sc.(Mathematics,Physcis,Computer Science)', '1992', 'Course Structure of B.Sc(M.P.CS)', ['Mathematics', 'Physcis', 'Computer Science']),
    createData('B.Com(Tax Procedure)', '1996', 'Course Structure of B.Com(TaxProcedure)', ['Commerce', 'Computers']),
    createData('B.Com(Computers)', '1997', 'Course Structure of B.Com(Computers)', ['Commerce', 'Computers']),
    createData('B.C.A.', '1998', 'Course Structure of B.C.A.', ['Commerce', 'Computers']),
    createData('B.Sc(Mathematics,Computer Science,Electronics)', '2003', 'Course Structure of B.Sc(M.E.CS)', ['Mathematics', 'Computer Science', 'Electronics']),
    createData('B.B.A.', '2006', 'Course Structure of B.B.A.', ['B.B.A', 'Computers']),
    createData('B.Sc(Mathematics,Statistics,Computer Science)', '2008', 'Course Structure of B.Sc(M.S.CS)', ['Mathematics', 'Statistics', 'Computer Science']),
    createData('B.Com(Logistics)', '2013', 'Course Structure of B.Com(Logistics)', ['B.Com(Logistics)', 'Computers']),
    createData('B.Sc(Mathematics,Chemistry,ComputerScience)', '2013', '	Course Structure of B.Sc(M.C.CS)', ['Mathematics', 'Chemistry', 'Computer Science']),
    createData('B.Sc(IOT)', '2018', '', ''),
    createData('B.Sc(DATASCIENCE)', '2019', '', ''),
    createData('B.Sc(voc)', '2019', '', ''),
];
const course2 = [
    createData('ADVERTISING', '1965', '', 'VIEW SYLLABUS'),
    createData('AGRICULTURE MARKETING', '1965', 'Course Structure B.Sc(C.B.Z.)', ['Botany', 'Zoology', 'Chemistry']),
    createData('ELECTRICAL APPLIANCES', 'COURSE STRUCTURE B.Com(General)', ['Commerce', 'Computers']),
    createData('FOOD ADULTERATION', '1992', 'Course Structure of B.Sc(M.P.CS)', ['Mathematics', 'Physcis', 'Computer Science']),
    createData('SOLAR ENERGY', '1996', 'Course Structure of B.Com(TaxProcedure)', ['Commerce', 'Computers']),
];
const course3 = [
    createData('COMPUTER APPLICATIONS', '2019', '', 'VIEW SYLLABUS'),
    createData('HVPE', '2019', '', ['Botany', 'Zoology', 'Chemistry']),
    createData('INDIAN CULTURE & SCIENCE', '2019', '', ['Commerce', 'Computers']),
    createData('FOOD ADULTERATION', '2019', '', ['Mathematics', 'Physcis', 'Computer Science']),
    createData('INFORMATION & COM.TECH', '2019', '', ['Commerce', 'Computers']),
];

const UnderGraduate = () => {
    const classes = useStyles();

    return <div>
        <h2 className={classes.ugHeading}>Undergraduate Programmes</h2>
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell colSpan={6} style={{ fontSize: '20px' }} align="center">Part-1</StyledTableCell>
                    </TableRow>
                    <TableRow>
                        <StyledTableCell style={{ fontSize: '20px', borderRight: '1px solid #e0e0e0' }} colSpan={5} >Subject</StyledTableCell>
                        <StyledTableCell colSpan={2} style={{ fontSize: '20px' }}>Syllabus</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {yearRanking.map((row) => (
                        <StyledTableRow key={row.name}>
                            <StyledTableCell style={{ fontSize: '16px' }}>
                                {row.sno}
                            </StyledTableCell>
                            <StyledTableCell align="left" style={{ fontSize: '16px', borderRight: '1px solid #e0e0e0' }} colSpan={4}>
                                <div style={{ paddingRight: '130px' }}><a href="#">{row.name[0]}</a></div>
                            </StyledTableCell>
                            <StyledTableCell align="left" style={{ fontSize: '16px', color: 'blue' }} colSpan={2}>
                                <div style={{ paddingBottom: '0px' }}><a href="#">{row.designation[0]}</a></div>
                            </StyledTableCell>
                        </StyledTableRow>

                    ))}
                </TableBody>
            </Table>
        </TableContainer>


        <TableContainer component={Paper} style={{ paddingTop: '20px' }}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell colSpan={6} style={{ fontSize: '22px' }} align="center">Part-2</StyledTableCell>
                    </TableRow>
                    <TableRow>
                        <StyledTableCell style={{ fontSize: '20px', borderRight: '1px solid #e0e0e0' }} colSpan={0}>Course</StyledTableCell>
                        <StyledTableCell colSpan={2} style={{ fontSize: '20px', borderRight: '1px solid #e0e0e0' }}>Year of Establishment</StyledTableCell>
                        <StyledTableCell colSpan={2} style={{ fontSize: '20px', borderRight: '1px solid #e0e0e0' }}>Course Structure</StyledTableCell>
                        <StyledTableCell colSpan={2} style={{ fontSize: '20px', borderRight: '1px solid #e0e0e0' }}>Syllabus</StyledTableCell>
                    </TableRow>
                    <TableRow>
                        <StyledTableCell colSpan={6} style={{ fontSize: '20px' }} align="center">SKILL DEVELOPMENT COURSES</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {course2.map((row) => (
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
                            <StyledTableCell align="left" style={{ fontSize: '16px', color: 'blue' }} colSpan={2}>
                                <div style={{ paddingBottom: '0px' }}><a href="#">VIEW SYLLABUS</a></div>
                                <div style={{ paddingBottom: '0px' }}><a href="#"></a></div>
                                <div style={{ paddingBottom: '0px' }}><a href="#"></a></div>
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                    <TableRow>
                        <StyledTableCell colSpan={6} style={{ fontSize: '22px' }} align="center">LIFE SKILL COURSES</StyledTableCell>
                    </TableRow>
                    {course3.map((row) => (
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
                            <StyledTableCell align="left" style={{ fontSize: '16px', color: 'blue' }} colSpan={2}>
                                <div style={{ paddingBottom: '0px' }}><a href="#">VIEW SYLLABUS</a></div>
                                <div style={{ paddingBottom: '0px' }}><a href="#"></a></div>
                                <div style={{ paddingBottom: '0px' }}><a href="#"></a></div>
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>

        <TableContainer component={Paper} style={{ paddingTop: '20px' }}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell colSpan={6} style={{ fontSize: '20px' }} align="center">Part-3</StyledTableCell>
                    </TableRow>
                    <TableRow>
                        <StyledTableCell style={{ fontSize: '20px', borderRight: '1px solid #e0e0e0' }} colSpan={0}>Course</StyledTableCell>
                        <StyledTableCell colSpan={2} style={{ fontSize: '20px', borderRight: '1px solid #e0e0e0' }}>Year of Establishment</StyledTableCell>
                        <StyledTableCell colSpan={2} style={{ fontSize: '20px', borderRight: '1px solid #e0e0e0' }}>Course Structure</StyledTableCell>
                        <StyledTableCell colSpan={2} style={{ fontSize: '20px', borderRight: '1px solid #e0e0e0' }}>Syllabus</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {course.map((row) => (
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

export default UnderGraduate;
