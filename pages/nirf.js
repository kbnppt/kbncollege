import React from 'react'
import { Container, makeStyles, withStyles } from '@material-ui/core';
import Header from '../components/Header/MainNavigation';
import HeadingComponent from '../components/Headings/index';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Head from 'next/head';
import Footer from '../components/Footer/animatedfooter';


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
        // '&:hover': {
        //     backgroundColor: '#bdbdbd87'
        // }
    },
}))(TableRow);

function createData(sno, name, designation) {
    return { sno, name, designation };
}

const rows = [
    createData('Institute ID', ['COLLEGE:K.B.N. College [IR-C-C-27168]', 'Overall : K.B.N. College [IR-O-C-27168]'], ['	View Report', '	View Report']),
    createData('COLLEGE NAME', ['KBN Autonomous College'], ''),
    createData('EMAIL ID', ['info@kbncollege.ac.in'], ''),

];

const ranking = [
    createData('Institute ID', ['COLLEGE:K.B.N. College [IR-C-C-27168]', 'MANAGEMENT: K.B.N. College [IR-M-C-27168]', 'Overall : K.B.N. College [IR-O-C-27168]'], ['View Report', 'View Report', 'View Report']),
    createData('COLLEGE NAME', ['KBN Autonomous College'], ''),
    createData('EMAIL ID', ['info@kbncollege.ac.in'], ''),
];

const yearRanking = [
    createData('Institute ID', ['COLLEGE:K.B.N. College [IR-C-C-27168]', 'MANAGEMENT: K.B.N. College [IR-M-C-27168]', 'Overall : K.B.N. College [IR-O-C-27168]'], ['View Report', 'View Report', 'View Report']),
    createData('COLLEGE NAME', ['KBN Autonomous College'], ''),
    createData('EMAIL ID', ['info@kbncollege.ac.in'], ''),
];

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'relative'
    },
    allBlocks: {
        height: '210px',
        padding: '4rem 0',
        background: '#050e3e',
        [theme.breakpoints.down("sm")]: {
            height: '300px',
        },
        [theme.breakpoints.down("xs")]: {
            height: '370px',
        },
    },
    headerStyle: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '2rem 0 1rem 0',
        textAlign: 'center',
        background: '#050e3e',
        color: '#fff',
        textTransform: 'uppercase'
    },
    verticalTabsRoot: {
        display: 'block',
        padding: '2rem 0',
        // [theme.breakpoints.down("sm")]: {
        //     display: 'none'
        // },
    },
    horizontalTabsRoot: {
        display: 'none',
        [theme.breakpoints.down("sm")]: {
            display: 'block'
        },
    },
    cardRoot: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    heading: {
        // border:'1px solid red',
        fontSize: '16px',
        // textAlign:'center'
    }

}));


const Index = () => {
    const classes = useStyles();

    return (
        <>
            <Head>
                <title>Nirf - Kakaraparti Bhavanarayana College (Autonomous)</title>
            </Head>
            <main>
                <div className={classes.root}>
                    <Header />
                               {/* <div className={classes.allBlocks} /> */}
                    <div className={classes.headerStyle}>
                        <Container>
                            <HeadingComponent data1="Nirf" data2="" Color={true} />
                        </Container>
                    </div>
                    <Container>
                        <div className={classes.verticalTabsRoot}>
                            <TableContainer component={Paper}>
                                <Table className={classes.table} aria-label="customized table">
                                    <TableHead>
                                        <TableRow>
                                            <StyledTableCell colSpan={3} style={{ fontSize: '16px' }} align="center">NATIONAL INSTITUTIONAL RANKING FRAMEWORK 2020-2021</StyledTableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {rows.map((row) => (
                                            <StyledTableRow key={row.name}>
                                                <StyledTableCell style={{ fontSize: '18px' }}>
                                                    {row.sno}
                                                </StyledTableCell>
                                                <StyledTableCell align="left" style={{ fontSize: '18px' }}>
                                                    <div style={{ paddingBottom: '7px' }}>{row?.name[0]}</div>
                                                    <div>{row?.name[1]}</div>
                                                </StyledTableCell>
                                                <StyledTableCell align="left" style={{ fontSize: '18px', color: 'blue' }}>
                                                    <div style={{ paddingBottom: '7px' }}><a href="#">{row?.designation[0]}</a></div>
                                                    <div><a href="#">{row?.designation[1]}</a></div>
                                                </StyledTableCell>
                                            </StyledTableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            <TableContainer component={Paper}>
                                <Table className={classes.table} aria-label="customized table">
                                    <TableHead>
                                        <TableRow>
                                            <StyledTableCell colSpan={3} style={{ fontSize: '16px' }} align="center">NATIONAL INSTITUTIONAL RANKING FRAMEWORK 2019-2020</StyledTableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {ranking.map((row) => (
                                            <StyledTableRow key={row.name}>
                                                <StyledTableCell style={{ fontSize: '18px' }}>
                                                    {row.sno}
                                                </StyledTableCell>
                                                <StyledTableCell align="left" style={{ fontSize: '18px' }}>
                                                    <div style={{ paddingBottom: '7px' }}>{row?.name[0]}</div>
                                                    <div style={{ paddingBottom: '7px' }}>{row?.name[1]}</div>
                                                    <div>{row?.name[2]}</div>
                                                </StyledTableCell>
                                                <StyledTableCell align="left" style={{ fontSize: '18px', color: 'blue' }}>
                                                    <div style={{ paddingBottom: '7px' }}><a href="#">{row?.designation[0]}</a></div>
                                                    <div style={{ paddingBottom: '7px' }}><a href="#">{row?.designation[1]}</a></div>
                                                    <div><a href="#">{row?.designation[2]}</a></div>
                                                </StyledTableCell>
                                            </StyledTableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            <TableContainer component={Paper}>
                                <Table className={classes.table} aria-label="customized table">
                                    <TableHead>
                                        <TableRow>
                                            <StyledTableCell colSpan={3} style={{ fontSize: '16px' }} align="center">NATIONAL INSTITUTIONAL RANKING FRAMEWORK 2018-2019</StyledTableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {yearRanking.map((row) => (
                                            <StyledTableRow key={row.name}>
                                                <StyledTableCell style={{ fontSize: '18px' }}>
                                                    {row.sno}
                                                </StyledTableCell>
                                                <StyledTableCell align="left" style={{ fontSize: '18px' }}>
                                                    <div style={{ paddingBottom: '7px' }}>{row?.name[0]}</div>
                                                    <div style={{ paddingBottom: '7px' }}>{row?.name[1]}</div>
                                                    <div>{row?.name[2]}</div>
                                                </StyledTableCell>
                                                <StyledTableCell align="left" style={{ fontSize: '18px', color: 'blue' }}>
                                                    <div style={{ paddingBottom: '7px' }}><a href="#">{row?.designation[0]}</a></div>
                                                    <div style={{ paddingBottom: '7px' }}><a href="#">{row?.designation[1]}</a></div>
                                                    <div><a href="#">{row?.designation[2]}</a></div>
                                                </StyledTableCell>
                                            </StyledTableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </div>
                    </Container>
                </div>
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    )
}

export default Index;