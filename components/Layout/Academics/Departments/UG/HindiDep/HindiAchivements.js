import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { withStyles, Theme, createStyles, makeStyles, } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { withWidth } from '@material-ui/core';
import { blue } from '@material-ui/core/colors';

const HindiAchivements = () => {

    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (

        <div>
            <h2 style={{ textDecoration: "underline" }}> Staff</h2>
            <Accordion square expanded={expanded === 'panel0'} onChange={handleChange('panel0')}>
                <AccordionSummary
                    expandIcon={expanded === 'panel0' ? <RemoveIcon style={{ color: "white" }} /> : <AddIcon style={{ color: "white" }} />}
                    style={{ backgroundColor: "darkblue", color: "white" }}
                >
                    <Typography >Sri. MD. Jalaluddin</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Box>
                        <h2 style={{ textDecoration: "underline" }}>ACADEMIC YEAR 2019-2020</h2>
                        <ul>
                            <li>Participated in the Three – Day Faculty Development Programme on “Innovative Pedagogy and Effective Teaching” from 30th May to 1st June, 2019 organized by Internal Quality Assurance Cell, KBN College, Vijayawada.</li>
                        </ul>
                    </Box>
                </AccordionDetails>
            </Accordion>


            <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                    expandIcon={expanded === 'panel1' ? <RemoveIcon style={{ color: "white" }} /> : <AddIcon style={{ color: "white" }} />}
                    style={{ backgroundColor: "darkblue", color: "white" }}
                >
                    <Typography >Smt.J.JANAKI</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Box>
                        <h2 style={{ textDecoration: "underline" }}>ACADEMIC YEAR 2019-2020</h2>
                        <ul>
                            <li>Acted as Resource Person for delivering a Guest Lecture on “Hindi Sahitya me Kabir Ka Sthaan” at Indira Gandhi National Open University Regional Centre, Vijayawada on 17th September, 2019.</li>
                            <li>Participated in the Three – Day Faculty Development Programme on “Innovative Pedagogy and Effective Teaching” from 30th May to 1st June, 2019 organized by Internal Quality Assurance Cell, KBN College, Vijayawada.</li>
                            <h3 style={{ textDecoration: 'underline' }}>Presentations</h3>
                            <p>INSERT OF TABLE1</p>
                            <p>insertion of table2</p>
                            <img src='https://drive.google.com/uc?id=1eLWaReW2iQKPBqJXkVkTCkchWPtBHFxP' alt='photo' height="600px" width="900px" />
                        </ul>
                    </Box>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}

export default HindiAchivements;