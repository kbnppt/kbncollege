import React from 'react';
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

const AboutIQAC = () => {
    const classes = useStyles();

    return <div>
        <h2 className={classes.HeadingMain}>INTERNAL QUALITY ASSURANCE CELL (IQAC)</h2>
        <p >One of the major challenges of Higher Education is to create and maintain quality of Education. In order to institutionalize the process of quality enhancement, the Internal Quality Assurance Cell (IQAC) was established in our College in 2005. The IQAC is a Nodal Agency for monitoring the working of the Institution and is committed to overall quality enhancement in the Institution.  It also co-ordinates and supervises the accreditation programmes. Quality sustenance and improvement are the prime spots of concentration of the Cell. It develops an action plan for the academic year and interacts with students, parents, Management, Alumni, Colleges, and Society, to assess and elicit suggestions and recommendations in important areas like introducing need based new academic programmes, improving infrastructural facilities etc. Through the IQAC the institution hopes to make progress in every aspect of the functioning of the institution. IQAC thus functions as an advisory body to the college on academic and research activities, student welfare schemes, in infrastructure development and extension activities. It facilitates various activities for the overall development of the college in the consonance with the challenges of Higher Education at the local, national and global levels.</p>
        <p>
            The aim of IQAC was to develop a system of conscious, consistent and continuous quality improvement. It played a key role in obtaining Grade ‘B++’ with 81.50 Grade Points in the first accreditation cycle for the year 2007-2012, later on with ‘A’ grade with CGPA of 3.15 on a 4 point scale for the second accreditation cycle for the year 2013-2018. The establishment of the IQAC was a giant leap towards quality sustenance in KBN College that helped to obtain the status of CPE by UGC in 2016 and securing 92nd rank in NIRF at the national level. Thus IQAC ensures improvement in the Institution with the active cooperation of all the stakeholders. IQAC not only plans and implements good academic practices but also measures the extent of its implementation.
        </p>
    </div>;
};

export default AboutIQAC;
