import React from 'react';
import { withStyles, Container, makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        // color: theme.palette.common.white,IicMenu
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
    },
}))(TableRow);

function createData(num, name, desg) {
    return { num, name, desg };
}

const rows = [
    createData(1, "KBN INNOVATION & STARTUP POLICY MEMBERS",<a href="https://drive.google.com/file/d/1NYB6sGBfdZT_iTx1VHCFWC3YwNZfPXzm/view?usp=share_link">
    <Button>Download</Button>
    </a>),
    createData(2, "NISP GUIDING FRAMEWORK", <a href="https://drive.google.com/file/d/1iXeipf98FSMIUp8tTa20lHzSkeXfCQdv/view?usp=share_link">
<Button>Download</Button>
</a>),
    createData(3, "AP STATE GOVERNMENT START-UP POLICY",<a href="https://drive.google.com/file/d/113wcRZqcfSdIHtHVw-IlP6G0xrZXTica/view?usp=share_link">
    <Button>Download</Button>
    </a>),
    createData(4, "KBN INNOVATION & STARTUP POLICY – APPROVAL LETTER", <a href="https://drive.google.com/file/d/15_66-FpbFCpwfBjG4OVKhaMTg10VHsQl/view?usp=share_link">
    <Button>Download</Button>
    </a>),
    createData(5, "KBN INNOVATION & STARTUP POLICY", <a href="https://drive.google.com/file/d/1MJOqJKM0Xplw7hFtEG_peW6DHPaThYrj/view?usp=share_link">
    <Button>Download</Button>
    </a>),
    createData(6, "KBN INNOVATION & STARTUP POLICY – ACTION PLAN", <a href="https://drive.google.com/file/d/1qsuJfBXD_nb9KuF5B-V-gPvLpKcCBK-P/view?usp=share_link">
    <Button>Download</Button>
    </a>),
    createData(7, "KBN INNOVATION & STARTUP POLICY – MINUTES",<a href="https://drive.google.com/file/d/1Y1LYh1ZJaojoezLXKhdp1qv1B148ne5_/view?usp=share_link">
    <Button>Download</Button>
    </a>),
   
];

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'relative'
    },
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
    table: {
        minWidth: 700,
    },
    tableHead: {
        fontWeight: "bold",
        backgroundColor: "darkblue",

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
        [theme.breakpoints.down("sm")]: {
            display: 'none'
        },
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
    ariiaReportMain: {
        display: 'flex',
        flexDirection: 'column',
        paddingLeft: '40px'
    },
    ariiaReport: {
        fontSize: '16px',
        padding: '10px 0px'
    }
}));


const EResources = () => {
    const classes = useStyles();

    return (
        <div>
                                        <h2 style={{ textDecoration: 'underline' }}>ABOUT NISP</h2>
                            <div>
                                <h4 style={{ color: 'green' }}>
                                    ABOUT NATIONAL INNOVATION AND STARTUP POLICY(NISP)
                                </h4>
                                <Typography>
                                    The National Innovation and Start-up Policy 2019 for students and faculty in HEIs was launched by Former Minister of Education, Shri Ramesh Pokhriyal 'Nishank' on 11th September 2019 at AICTE, New Delhi. This policy intends to guide HEIs for promoting student's driven innovations & start-ups and to engage the students and faculty in innovation and start up activities in campus. The policy aims at enabling HEIs to build, streamline and strengthen the innovation and entrepreneurial ecosystem in campus and will be instrumental in leveraging the potential of student's creative problem solving and entrepreneurial mind-set, and promoting a strong intra and interinstitutional partnerships with ecosystem enablers and different stakeholders at regional, national and international level. The policy is being implemented by MoE's Innovation Cell and in coordination AICTE, UGC, state/ UT governments and universities. Implementation of policy has been undertaken for quick adoption by HEIs. The present policy is a way forward to the earlier version of AICTE's Start-up Policy which was launched in the year 2016 to complement the Startup Action Plan under the Startup India and Stand-up India Program launched by Hon'ble Prime Minster of India.
                                </Typography>
                                <TableContainer component={Paper}>
                                    <Table className={classes.table} aria-label="customized table">
                                        <TableHead className={classes.tableHead}>
                                            <TableCell align="center" style={{ color: "white", }} colSpan={1} >
                                                S NO
                                            </TableCell>
                                            <TableCell align="center" style={{ color: "white", }} colSpan={1} >
                                                NAME
                                            </TableCell>
                                            <TableCell align="center" style={{ color: "white", }} colSpan={1} >
                                                DOWNLOAD
                                            </TableCell>
                                        </TableHead>
                                        <TableBody>
                                            {rows.map((row) => (
                                                <StyledTableRow key={row.name}>
                                                    <StyledTableCell component="th" scope="row" align="center">
                                                        {row.num}
                                                    </StyledTableCell>
                                                    <StyledTableCell align="center">{row.name}</StyledTableCell>
                                                    
                                                    <StyledTableCell align="center" variant='contained' >
                                                        <Button variant='contained' color='primary'>{row.desg}</Button>
                                                        </StyledTableCell>

                                                </StyledTableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </div>
        </div>
    );
};

export default EResources;
