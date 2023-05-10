import React from 'react'
import { makeStyles, withStyles } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Divider from '@material-ui/core/Divider';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: '#bdb76b',
        color: theme.palette.common.black,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: '#eee8aa',
        },
        '&:nth-of-type(even)': {
            backgroundColor: '#bdb76b',

        }
        // '&:hover': {
        //     backgroundColor: '#bdbdbd87'
        // }
    },
}))(TableRow);

function createData(sno, name, designation) {
    return { sno, name, designation };
}

const yearRanking = [
    createData('1', 'Dr. S. Sasikala', '2005-2007'),
    createData('2', 'Dr. P. Krishna Murthy', '2007-2009'),
    createData('3', 'Dr. B. Raja Rajeswari', '2009-2013'),
    createData('4', 'Dr. V. Subhashini', '2013-2019'),
    createData('5', 'Dr.P.Bharathi Devi', '2019-till now'),
    createData('6', 'Smt.Shamim,Asst.co-ordinator', '2019-tillnow'),

];

const research = [
    createData('1', 'Dr. V. Narayana Rao', 'Principal – FAC & Chairman'),
    createData('2', 'Dr. Ch. Venu Babu', 'Lecturer in Commerce, Convenor'),
    createData('3', 'Dr. K. Naveen Kumar', 'Vice – Principal & Vice – Chairman'),
    createData('4', 'Dr. G. Krishnaveni', 'HOD, Dept. of Chemistry, Member'),
    createData('5', 'Dr. PB Sandhya Sri', 'HOD, Dept. of Physics, Member'),
    createData('6', 'Dr. JV Chalapathi Rao', 'Lecturer in Telugu, Member'),
    createData('7', 'Smt. P. Bharathi Devi', 'HOD, Dept. of MCA, Member'),
    createData('8', 'Dr. G. Kranthi Kumar', 'Lecturer in Botany, Member'),
    createData('9', 'Dr. K. Bhagavan', 'Lecturer in Computers, Member'),
    createData('10', 'Dr. Sharma', 'Lecturer in Computers, Member'),

];

const useStyles = makeStyles((theme) => ({
    HeadingMain:{
        // fontSize:'30px',
        // textAlign:'center',
        color: '#2e69d6'
    },
    teluguHeading: {
        fontSize: '23px',
        color: 'green',
        margin: '0',
        paddingTop: '12px'
    },
    objectivesContent: {
        display: 'flex',
        paddingTop: '12px',
    },
    arrowIcon: {
        marginTop: '4px',
        marginRight: '10px'
    },
    arrowwithContent: {
        // fontSize: '22px',
        margin: '0px',
        color: '#337AB7',
        '&:hover': {
            textDecoration: 'underline',
            color: 'grey'
        }
    },
    teluguContent: {
        fontSize: '22px',
        margin: '0',
        paddingBottom: '10px'
    },
    AQARLinks: {
        fontSize: '20px',
        color: '#337AB7',
        '&:hover': {
            textDecoration: 'underline'
        }
    },
    divider: {
        marginTop: '25px',
        marginBottom: '25px'
    },
    arrowContent: {
        // fontSize: '22px',
        margin: '0px',
    }

}));

const IQACReports = () => {
    const classes = useStyles();

    return (
        <div>
            <h2 className={classes.HeadingMain}>IQAC Reports</h2>
            <a href="https://drive.google.com/file/d/1DE_govvTijPUzOZgcEtQs0gehr7lVYq-/view?usp=share_link" target='__blank' className={classes.AQARLinks}>IQAC Annual Report of 2020-21</a>
            <Divider className={classes.divider} />
            <a href="https://drive.google.com/file/d/1ycpTxZcz49TeM5T2ZQI6QblYa32J8mCZ/view?usp=share_link" target='__blank' className={classes.AQARLinks}>IQAC Annual Report of 2019-20</a>
            <Divider className={classes.divider} />
            <a href="https://drive.google.com/file/d/1L1h8nXOhDPzOylQPV8kp9XSe5A8lMX0L/view?usp=share_link" target='__blank' className={classes.AQARLinks}>IQAC Annual Report of 2018-19</a>
            <Divider className={classes.divider} />
            <a href="https://drive.google.com/file/d/1IBljHXGP5k2IQoAYLjzNRVcP8nvGytwI/view?usp=share_link" target='__blank' className={classes.AQARLinks}>IQAC Annual Report of 2017-18</a>
            <Divider className={classes.divider} />
            <a href="#" className={classes.AQARLinks}>IQAC Annual Report of 2016-17</a>
            <Divider className={classes.divider} />
            <a href="https://drive.google.com/file/d/1ohzhe-zMWoc2fYRGVL3wPKhySUQmCTlE/view?usp=share_link" target='__blank' className={classes.AQARLinks}>IQAC Annual Report of 2015-16</a>
            <Divider className={classes.divider} />
            <a href="#" className={classes.AQARLinks}>IQAC Annual Report of 2014-15</a>
            <Divider className={classes.divider} />
            <a href="https://drive.google.com/file/d/1iWieS2b6-yqCGgrQNzshhRQmogFHenKG/view?usp=share_link" target='__blank' className={classes.AQARLinks}>IQAC Annual Report of 2013-14</a>
            <Divider className={classes.divider} />
            <a href="https://drive.google.com/file/d/1jN3r9Trz24v_Iy5R2k2AYosltBW46Bi5/view?usp=share_link" target='__blank' className={classes.AQARLinks}>IQAC Annual Report of 2012-13</a>
            <Divider className={classes.divider} />
            <a href="#" target='__blank' className={classes.AQARLinks}>IQAC Annual Report of 2011-12</a>
            <Divider className={classes.divider} />
            <a href="https://drive.google.com/file/d/1k80CsZU6XbbjfjnqEMgrl_SQwVKzNkMl/view?usp=share_link" target='__blank' className={classes.AQARLinks}>IQAC Annual Report of 2010-11</a>
            <Divider className={classes.divider} />
        </div>
    )
}

export default IQACReports