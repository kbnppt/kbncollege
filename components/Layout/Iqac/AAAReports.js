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
import Image from 'next/image';

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
        paddingTop: '12px',
        '&:hover': {
            textDecoration: 'underline',
            color: 'blue'
        }
    },
    reportsHeading: {
        fontSize: '23px',
        color: 'green',
        margin: '0',
        paddingTop: '10px',
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

const AAAReports = () => {
    const classes = useStyles();

    return (
        <div>
            <a href="#" className={classes.teluguHeading}>NAAC PEER TEAM INSPECTION-8th&9thJanuary,2019</a>
            <h2 className={classes.HeadingMain}>AAA Reports</h2>
            <p className={classes.reportsHeading}>Academic Year 2019-2020</p>
            <div className={classes.objectivesContent}>
                <ArrowForwardIosIcon className={classes.arrowIcon} />
                <a className={classes.arrowwithContent}>Academic, Administrative and Development Peformance Indicators(AADPI)</a>
            </div>
            <p className={classes.reportsHeading}>Academic Year 2018-2019</p>
            <div className={classes.objectivesContent} style={{ marginBottom: '20px' }}>
                <ArrowForwardIosIcon className={classes.arrowIcon} />
                <a className={classes.arrowwithContent}>Academic Administrative Audit Report 2018-2019</a>
            </div>
            <Image src={'/images/AAPHOTO-2018-19.jpg'} alt="" width={600} height={740} />
            <p className={classes.reportsHeading}>Academic Year 2017-2018</p>
            <div className={classes.objectivesContent} style={{ marginBottom: '20px' }}>
                <ArrowForwardIosIcon className={classes.arrowIcon} />
                <a className={classes.arrowwithContent}>Academic Administrative Audit Report 2017-2018</a>
            </div>
            <Image src={'/images/photo2017-18.jpg'} alt="" width={600} height={740} />
            <p className={classes.reportsHeading}>Academic Year 2016-2017</p>
            <div className={classes.objectivesContent} style={{ marginBottom: '20px' }}>
                <ArrowForwardIosIcon className={classes.arrowIcon} />
                <a className={classes.arrowwithContent}>Academic Administrative Audit Report 2016-2017</a>
            </div>
            <Image src={'/images/photo2016-17.jpg'} alt="" width={600} height={740} />
            <p className={classes.reportsHeading}>Academic Year 2015-2016</p>
            <div className={classes.objectivesContent} style={{ marginBottom: '20px' }}>
                <ArrowForwardIosIcon className={classes.arrowIcon} />
                <a className={classes.arrowwithContent}>Academic Administrative Audit Report 2015-2016</a>
            </div>
            <Image src={'/images/photo2015-16.jfif'} alt="" width={600} height={740} />
            <p className={classes.reportsHeading}>Academic Year 2014-2015</p>
            <div className={classes.objectivesContent} style={{ marginBottom: '20px' }}>
                <ArrowForwardIosIcon className={classes.arrowIcon} />
                <a className={classes.arrowwithContent}>Academic Administrative Audit Report 2014-2015</a>
            </div>
            <Image src={'/images/photo2014-15.jpg'} alt="" width={600} height={740} />
            <p className={classes.reportsHeading}>Academic Year 2013-2014</p>
            <div className={classes.objectivesContent} style={{ marginBottom: '20px' }}>
                <ArrowForwardIosIcon className={classes.arrowIcon} />
                <a className={classes.arrowwithContent} >Academic Administrative Audit Report 2013-2014</a>

            </div>
            <div>
                <Image src={'https://drive.google.com/uc?id=1T-oVRiQHWWJq-nHIOV9qnqn4NJXxjJoL'} alt="" width={600} height={740} />
            </div>
        </div>
    )
}

export default AAAReports