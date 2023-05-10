import React from 'react'
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Box from '@material-ui/core/Box'
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
const AQARReports = () => {

    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    const classes = useStyles();

    return (
        <div>
            <h2 className={classes.HeadingMain}>AQAR Reports</h2>

            <Accordion square expanded={expanded === 'panel0'} onChange={handleChange('panel0')}>
                <AccordionSummary
                    expandIcon={expanded === 'panel0' ? <RemoveIcon style={{ color: "white" }} /> : <AddIcon style={{ color: "white" }} />}
                    style={{ backgroundColor: "darkblue", color: "white" }}
                >
                    <Typography >AQAR 2020-2021</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Box>
                        <div>
                            <ul>
                                <li> <a href="#" className={classes.AQARLinks}>IIQA</a></li>
                                <li> <a href="#" className={classes.AQARLinks}>CRITERIA-I</a></li>
                                <li> <a href="#" className={classes.AQARLinks}>CRITERIA-II</a></li>
                                <li> <a href="#" className={classes.AQARLinks}>CRITERIA-III</a></li>
                                <li> <a href="#" className={classes.AQARLinks}>CRITERIA-IV</a></li>
                                <li> <a href="#" className={classes.AQARLinks}>CRITERIA-V</a></li>
                                <li> <a href="#" className={classes.AQARLinks}>CRITERIA-VI</a></li>
                                <li> <a href="#" className={classes.AQARLinks}>CRITERIA-VII</a></li>
                            </ul>
                        </div>
                    </Box>
                </AccordionDetails>
            </Accordion>

            <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                    expandIcon={expanded === 'panel1' ? <RemoveIcon style={{ color: "white" }} /> : <AddIcon style={{ color: "white" }} />}
                    style={{ backgroundColor: "darkblue", color: "white" }}
                >
                    <Typography >AQAR 2019-2020</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Box>
                        <div>
                            <ul>
                                <li> <a href="#" className={classes.AQARLinks}>IIQA</a></li>
                                <li> <a href="#" className={classes.AQARLinks}>CRITERIA-I</a></li>
                                <li> <a href="#" className={classes.AQARLinks}>CRITERIA-II</a></li>
                                <li> <a href="#" className={classes.AQARLinks}>CRITERIA-III</a></li>
                                <li> <a href="#" className={classes.AQARLinks}>CRITERIA-IV</a></li>
                                <li> <a href="#" className={classes.AQARLinks}>CRITERIA-V</a></li>
                                <li> <a href="#" className={classes.AQARLinks}>CRITERIA-VI</a></li>
                                <li> <a href="#" className={classes.AQARLinks}>CRITERIA-VII</a></li>

                            </ul>
                        </div>
                    </Box>
                </AccordionDetails>
            </Accordion>

            <Accordion square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary
                    expandIcon={expanded === 'panel2' ? <RemoveIcon style={{ color: "white" }} /> : <AddIcon style={{ color: "white" }} />}
                    style={{ backgroundColor: "darkblue", color: "white" }}
                >
                    <Typography >AQAR 2018-2019</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Box>
                        <div>
                            <ul>
                                <li> <a href="#" className={classes.AQARLinks}>IIQA</a></li>
                                <li> <a href="#" className={classes.AQARLinks}>CRITERIA-I</a></li>
                                <li> <a href="#" className={classes.AQARLinks}>CRITERIA-II</a></li>
                                <li> <a href="#" className={classes.AQARLinks}>CRITERIA-III</a></li>
                                <li> <a href="#" className={classes.AQARLinks}>CRITERIA-IV</a></li>
                                <li> <a href="#" className={classes.AQARLinks}>CRITERIA-V</a></li>
                                <li> <a href="#" className={classes.AQARLinks}>CRITERIA-VI</a></li>
                                <li> <a href="#" className={classes.AQARLinks}>CRITERIA-VII</a></li>

                            </ul>
                        </div>
                    </Box>
                </AccordionDetails>
            </Accordion>
            <Accordion square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary
                    expandIcon={expanded === 'panel3' ? <RemoveIcon style={{ color: "white" }} /> : <AddIcon style={{ color: "white" }} />}
                    style={{ backgroundColor: "darkblue", color: "white" }}
                >
                    <Typography >AQAR 2017-2018</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Box>
                        <div>
                            <ul>
                                <li> <a href="#" className={classes.AQARLinks}>IIQA</a></li>
                                <li> <a href="#" className={classes.AQARLinks}>CRITERIA-I</a></li>
                                <li> <a href="#" className={classes.AQARLinks}>CRITERIA-II</a></li>
                                <li> <a href="#" className={classes.AQARLinks}>CRITERIA-III</a></li>
                                <li> <a href="#" className={classes.AQARLinks}>CRITERIA-IV</a></li>
                                <li> <a href="#" className={classes.AQARLinks}>CRITERIA-V</a></li>
                                <li> <a href="#" className={classes.AQARLinks}>CRITERIA-VI</a></li>
                                <li> <a href="#" className={classes.AQARLinks}>CRITERIA-VII</a></li>

                            </ul>
                        </div>
                    </Box>
                </AccordionDetails>
            </Accordion>
            <Accordion square expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary
                    expandIcon={expanded === 'panel4' ? <RemoveIcon style={{ color: "white" }} /> : <AddIcon style={{ color: "white" }} />}
                    style={{ backgroundColor: "darkblue", color: "white" }}
                >
                    <Typography >AQAR 2016-2017</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Box>
                        <div>
                            <ul>
                                <li> <a href="#" className={classes.AQARLinks}>IIQA</a></li>
                                <li> <a href="#" className={classes.AQARLinks}>CRITERIA-I</a></li>
                                <li> <a href="#" className={classes.AQARLinks}>CRITERIA-II</a></li>
                                <li> <a href="#" className={classes.AQARLinks}>CRITERIA-III</a></li>
                                <li> <a href="#" className={classes.AQARLinks}>CRITERIA-IV</a></li>
                                <li> <a href="#" className={classes.AQARLinks}>CRITERIA-V</a></li>
                                <li> <a href="#" className={classes.AQARLinks}>CRITERIA-VI</a></li>
                                <li> <a href="#" className={classes.AQARLinks}>CRITERIA-VII</a></li>

                            </ul>
                        </div>
                    </Box>
                </AccordionDetails>
            </Accordion>
            <Accordion square expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                <AccordionSummary
                    expandIcon={expanded === 'panel5' ? <RemoveIcon style={{ color: "white" }} /> : <AddIcon style={{ color: "white" }} />}
                    style={{ backgroundColor: "darkblue", color: "white" }}
                >
                    <Typography >AQAR 2015-2016</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Box>
                        <div>
                            <ul>
                                <li> <a href="#" className={classes.AQARLinks}>IIQA</a></li>
                                <li> <a href="#" className={classes.AQARLinks}>CRITERIA-I</a></li>
                                <li> <a href="#" className={classes.AQARLinks}>CRITERIA-II</a></li>
                                <li> <a href="#" className={classes.AQARLinks}>CRITERIA-III</a></li>
                                <li> <a href="#" className={classes.AQARLinks}>CRITERIA-IV</a></li>
                                <li> <a href="#" className={classes.AQARLinks}>CRITERIA-V</a></li>
                                <li> <a href="#" className={classes.AQARLinks}>CRITERIA-VI</a></li>
                                <li> <a href="#" className={classes.AQARLinks}>CRITERIA-VII</a></li>

                            </ul>
                        </div>
                    </Box>
                </AccordionDetails>
            </Accordion>
            <Accordion square expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                <AccordionSummary
                    expandIcon={expanded === 'panel6' ? <RemoveIcon style={{ color: "white" }} /> : <AddIcon style={{ color: "white" }} />}
                    style={{ backgroundColor: "darkblue", color: "white" }}
                >
                    <Typography >AQAR 2019-2020</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Box>
                        <div>
                            <ul>
                                <li> <a href="#" className={classes.AQARLinks}>IIQA</a></li>
                                <li> <a href="#" className={classes.AQARLinks}>CRITERIA-I</a></li>
                                <li> <a href="#" className={classes.AQARLinks}>CRITERIA-II</a></li>
                                <li> <a href="#" className={classes.AQARLinks}>CRITERIA-III</a></li>
                                <li> <a href="#" className={classes.AQARLinks}>CRITERIA-IV</a></li>
                                <li> <a href="#" className={classes.AQARLinks}>CRITERIA-V</a></li>
                                <li> <a href="#" className={classes.AQARLinks}>CRITERIA-VI</a></li>
                                <li> <a href="#" className={classes.AQARLinks}>CRITERIA-VII</a></li>

                            </ul>
                        </div>
                    </Box>
                </AccordionDetails>
            </Accordion>
            <Accordion square expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
                <AccordionSummary
                    expandIcon={expanded === 'panel7' ? <RemoveIcon style={{ color: "white" }} /> : <AddIcon style={{ color: "white" }} />}
                    style={{ backgroundColor: "darkblue", color: "white" }}
                >
                    <Typography >AQAR 2019-2020</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Box>
                        <div>
                            <ul>
                                <li> <a href="#" className={classes.AQARLinks}>IIQA</a></li>
                                <li> <a href="#" className={classes.AQARLinks}>CRITERIA-I</a></li>
                                <li> <a href="#" className={classes.AQARLinks}>CRITERIA-II</a></li>
                                <li> <a href="#" className={classes.AQARLinks}>CRITERIA-III</a></li>
                                <li> <a href="#" className={classes.AQARLinks}>CRITERIA-IV</a></li>
                                <li> <a href="#" className={classes.AQARLinks}>CRITERIA-V</a></li>
                                <li> <a href="#" className={classes.AQARLinks}>CRITERIA-VI</a></li>
                                <li> <a href="#" className={classes.AQARLinks}>CRITERIA-VII</a></li>

                            </ul>
                        </div>
                    </Box>
                </AccordionDetails>
            </Accordion>
            <Accordion square expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
                <AccordionSummary
                    expandIcon={expanded === 'panel8' ? <RemoveIcon style={{ color: "white" }} /> : <AddIcon style={{ color: "white" }} />}
                    style={{ backgroundColor: "darkblue", color: "white" }}
                >
                    <Typography >AQAR 2019-2020</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Box>
                        <div>
                            <ul>
                                <li> <a href="#" className={classes.AQARLinks}>IIQA</a></li>
                                <li> <a href="#" className={classes.AQARLinks}>CRITERIA-I</a></li>
                                <li> <a href="#" className={classes.AQARLinks}>CRITERIA-II</a></li>
                                <li> <a href="#" className={classes.AQARLinks}>CRITERIA-III</a></li>
                                <li> <a href="#" className={classes.AQARLinks}>CRITERIA-IV</a></li>
                                <li> <a href="#" className={classes.AQARLinks}>CRITERIA-V</a></li>
                                <li> <a href="#" className={classes.AQARLinks}>CRITERIA-VI</a></li>
                                <li> <a href="#" className={classes.AQARLinks}>CRITERIA-VII</a></li>

                            </ul>
                        </div>
                    </Box>
                </AccordionDetails>
            </Accordion>






        </div >
    )
}

export default AQARReports