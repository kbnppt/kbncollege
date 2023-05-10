import React from 'react';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { withStyles, Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
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
    },
}))(TableRow);

function createData(num, name, desg) {
    return { num, name, desg };
}

const rows = [
    createData(1, "Dr. V. Narayana Rao", "Principal –Chairman"),
    createData(2, "Sri P. L. Ramesh", "Vice-Principal –Vice-Chairman"),
    createData(3, "Dr. M. Venkateswara Rao", "Vice-Principal –Vice-Chairman"),
    createData(4, "Sri N. Sambasiva Rao", "Assistant Professor & Incharge, HVPE, Convenor"),
    createData(5, "Sri V. Seshagiri Rao", "Lecturer in Commerce, Member"),
    createData(6, "Sri D. Hema Chandra Rao", "Head, Dept. of Physical Education, Member"),
    createData(7, "Smt. M. Lakshmi Prasanna", "Head, Dept. of Mathematics, Member"),
    createData(8, "Sri VTR Pavan Kumar", "Lecturer in  Computers, Member"),

];

const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
    tableHead: {
        fontWeight: "bold",
        backgroundColor: "darkblue",

    },
    ARcells: {
        color: 'blue',
        fontSize: '20px',
        marginTop: '-10px'
    }
});
const AntiRagging = () => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };


    return (

        <div>
            <h2>Anti-Ragging Cell</h2>
            <Typography style={{ backgroundColor: 'Orange', marginBottom: '15px' }}>
                Drop your Complaints online
            </Typography>
            <p className={classes.ARcells}>Anti-Ragging Cell</p>
            <div style={{ display: 'flex', marginTop: '5px' }}>
                <p style={{ color: 'gray', fontwidth: '5px' }}>  Name of the Cell : </p>
                <p style={{ color: 'green', fontwidth: '5px', marginLeft: '5px' }}> Anti-Ragging Cell</p>
            </div>

            <p style={{ fontfamily: 'cursive', fontSize: '30px', color: 'blue' }}>Say No to Ragging</p>
            <div style={{ display: 'flex', marginTop: '5px' }}>
                <div>
                    <ArrowForwardIosIcon />
                </div>
                <div>
                    To mail any compliant or grievances by students on ragging issues
                </div>
                <div style={{ fontSize: '19px', marginLeft: '5px', fontFamily: 'serif' }}>
                    <strong>antiraggingcellkbn@gmail.com </strong>
                </div>
            </div>
            <div style={{ display: 'flex', marginTop: '5px' }}>
                <div>
                    <ArrowForwardIosIcon />
                </div>
                <div>
                    Anti-Ragging – AP government has brought in Toll Free No
                </div>
                <div style={{ fontSize: '19px', marginLeft: '5px', fontFamily: 'serif' }}>
                    <strong>1800 4255314 </strong>
                </div>
            </div>
            <div style={{ display: 'flex', marginTop: '5px' }}>
                <div>
                    <ArrowForwardIosIcon />
                </div>
                <div>
                    Ragging within or outside any Educational institution is prohibited.
                </div>
            </div>
            <div style={{ display: 'flex', marginTop: '5px' }}>
                <div>
                    <ArrowForwardIosIcon />
                </div>
                <div>
                    Ragging means doing an act which causes or is likely to cause insult or annoyance or tear or apprehension or threat or intimidation or     outrage of modesty or injury to a student.
                </div>
            </div>
            <ul >

                <li style={{ color: 'blue', textDecoration: 'underline', backgroundColor: 'Yellow' }}><a href="https://drive.google.com/file/d/19J6SK27qeUqjF2i8H8JCYT4uoCgtg3kl/view?usp=share_link" target="_blank">UGC REGULATIONS ON CURBIUNG THE MENANCE OF RAGGING IN HIGHER EDUCATIONAL  INSTITUTIONS . 2009 </a></li>

                <li style={{ color: 'blue', textDecoration: 'underline', backgroundColor: 'Yellow', marginTop: '5px' }}><a href="#" target="_blank">FORMATION OF INSTITUTE LEVEL ANTI-RAGGING COMMITTEE AND SQUADS </a></li>
            </ul>
            <div>
                Ragging constitutes one or more of any of the following acts as per the AICTE / UGC act:
            </div>
            <div style={{ display: 'flex', marginTop: '5px' }}>
                <div>
                    <ArrowForwardIosIcon />
                </div>
                <div>
                    Any conduct by any student or students whether by words spoken or written or by an act which has the effect of teasing, treating or handling with rudeness a fresher or any other student.
                </div>
            </div>
            <div style={{ display: 'flex', marginTop: '5px' }}>
                <div>
                    <ArrowForwardIosIcon />
                </div>
                <div>
                    Indulging in rowdy or undisciplined activities by any student or students which causes or is likely to cause annoyance, hardship, physical or psychological harm or to raise fear or apprehension thereof in any fresher or any other student.
                </div>
            </div>
            <div style={{ display: 'flex', marginTop: '5px' }}>
                <div>
                    <ArrowForwardIosIcon />
                </div>
                <div>
                    Asking any student to do any act which such student will not in the ordinary course do and which has the effect of causing or generating a sense of shame, or torment or embarrassment so as to adversely affect the physique or psyche of such fresher or any other student.
                </div>
            </div>
            <div style={{ display: 'flex', marginTop: '5px' }}>
                <div>
                    <ArrowForwardIosIcon />
                </div>
                <div>
                    Any act by a senior student that prevents, disrupts or disturbs the regular academic activity of any other student or a fresher.
                </div>
            </div>
            <div style={{ display: 'flex', marginTop: '5px' }}>
                <div>
                    <ArrowForwardIosIcon />
                </div>
                <div>
                    Exploiting the services of a fresher or any other student for completing the academic tasks assigned to an individual or a group of students.
                </div>
            </div>
            <div style={{ display: 'flex', marginTop: '5px' }}>
                <div>
                    <ArrowForwardIosIcon />
                </div>
                <div>
                    Any act of financial extortion or forceful expenditure burden put on a fresher or any other student by students.
                </div>
            </div>
            <div style={{ display: 'flex', marginTop: '5px' }}>
                <div>
                    <ArrowForwardIosIcon />
                </div>
                <div>
                    Any act of physical abuse including all variants of it: sexual abuse, homosexual assaults, stripping, forcing obscene and lewd acts, gestures, causing bodily harm or any other danger to health or person.
                </div>
            </div>
            <div style={{ display: 'flex', marginTop: '5px' }}>
                <div>
                    <ArrowForwardIosIcon />
                </div>
                <div>
                    Any act or abuse by spoken words, emails, posts, public insults which would also include deriving perverted pleasure, vicarious or sadistic thrill from actively or passively participating in the discomfiture to fresher or any other student.
                </div>
            </div>
            <div style={{ display: 'flex', marginTop: '5px' }}>
                <div>
                    <ArrowForwardIosIcon />
                </div>
                <div>
                    Any act that affects the mental health and self-confidence of a fresher or any other student with or without an intent to derive a sadistic pleasure or showing off power, authority or superiority by a student over any fresher or any other student.
                </div>
            </div>
            <div style={{ color: 'green', fontSize: '20px', padding: '10px' }}>
                Punishments
            </div>
            <div style={{}}>
                Depending upon the nature and gravity of the offence as established, the possible punishments as per AICTE / UGC Section 9 for those found guilty of ragging at the institution level, shall be any one or any combination of the following:
            </div>
            <div style={{ display: 'flex', marginTop: '5px' }}>
                <div>
                    <ArrowForwardIosIcon />
                </div>
                <div>
                    Any act that affects the mental health and self-confidence of a fresher or any other student with or without an intent to derive a sadistic pleasure or showing off power, authority or superiority by a student over any fresher or any other student.
                </div>
            </div>
            <div style={{ display: 'flex', marginTop: '5px' }}>
                <div>
                    <ArrowForwardIosIcon />
                </div>
                <div>
                    Suspension from attending classes.
                </div>
            </div>
            <div style={{ display: 'flex', marginTop: '5px' }}>
                <div>
                    <ArrowForwardIosIcon />
                </div>
                <div>
                    Withholding / withdrawing scholarship/fellowship and other benefits.
                </div>
            </div>
            <div style={{ display: 'flex', marginTop: '5px' }}>
                <div>
                    <ArrowForwardIosIcon />
                </div>
                <div>
                    Debarring from appearing in any test/examination or other evaluation process.
                </div>
            </div>
            <div style={{ display: 'flex', marginTop: '5px' }}>
                <div>
                    <ArrowForwardIosIcon />
                </div>
                <div>
                    Withholding results.
                </div>
            </div>
            <div style={{ display: 'flex', marginTop: '5px' }}>
                <div>
                    <ArrowForwardIosIcon />
                </div>
                <div>
                    Debarring from representing the institution in any regional, national or international meet, tournament, youth festival, etc.
                </div>
            </div>
            <div style={{ display: 'flex', marginTop: '5px' }}>
                <div>
                    <ArrowForwardIosIcon />
                </div>
                <div>
                    Suspension / expulsion from the hostel.
                </div>
            </div>
            <div style={{ display: 'flex', marginTop: '5px' }}>
                <div>
                    <ArrowForwardIosIcon />
                </div>
                <div>
                    Cancellation of admission.
                </div>
            </div>
            <div style={{ display: 'flex', marginTop: '5px' }}>
                <div>
                    <ArrowForwardIosIcon />
                </div>
                <div>
                    Rustication from the institution for period ranging from 1 to 4 semesters.
                </div>
            </div>
            <div style={{ display: 'flex', marginTop: '5px' }}>
                <div>
                    <ArrowForwardIosIcon />
                </div>
                <div>
                    Expulsion from the institution and consequent debarring from admission to any other institution.
                </div>
            </div>
            <div style={{ display: 'flex', marginTop: '5px' }}>
                <div>
                    <ArrowForwardIosIcon />
                </div>
                <div>
                    Fine ranging between Rs. 25,000/- and Rs. 1, 00,000/-.
                </div>
            </div>
            <div style={{ display: 'flex', marginTop: '5px' }}>
                <div>
                    <ArrowForwardIosIcon />
                </div>
                <div>
                    Collective punishment: when the persons committing or abetting the crime of ragging are not identified, the institution shall resort to collective punishment as a deterrent to ensure community pressure on the potential ragger.
                </div>
            </div>
            <div style={{ display: 'flex', marginTop: '5px' }}>
                <div style={{ color: 'red', fontSize: '20px', marginTop: '-5px' }}>
                    Note:
                </div>
                <div>
                    1. A student convicted of any of the above offences, will be expelled from the college
                </div>
            </div>
            <div>
                2. A student imprisoned for more than six months for any of the above offence will not be admitted in any other college.            </div>
            <div>
                3. A student against whom there is prima facie evidence of ragging any form will be suspended from the college immediately.
            </div>
            <div>
                4. University level and college level anti ragging committees/mentoring cells constituted for this purpose will look into com.
            </div>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead className={classes.tableHead}>
                        <TableCell align="center" style={{ color: "white", }} colSpan={5} >
                            ANTI-RAGGING COMMITTEE
                        </TableCell>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <StyledTableRow key={row.name}>
                                <StyledTableCell component="th" scope="row">
                                    {row.num}
                                </StyledTableCell>
                                <StyledTableCell align="left">{row.name}</StyledTableCell>
                                <StyledTableCell align="left">{row.desg}</StyledTableCell>

                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Typography style={{ padding: '5px' }}>
                Anti – Ragging Events:
            </Typography>
            <ul >
                <li style={{ color: 'blue', textDecoration: 'underline' }}><a href="https://drive.google.com/file/d/1MSw2KK4Au1CjYe_vOoR21jKlJ7pqZXUe/view?usp=share_link" target="_blank">2020-2021 MinutesAwareness programme on "Anti-Ragging" on 10th july , 2017 </a></li>

                <li style={{ color: 'blue', textDecoration: 'underline', marginTop: '5px' }}><a href="https://drive.google.com/file/d/1FJBunrGBC8LX7czGRBm26bUUfjJpcrWg/view?usp=share_link" target="_blank">Awareness programme on "Anti-Ragging" on 3rd October , 2016 </a></li>
                <li style={{ color: 'blue', textDecoration: 'underline', marginTop: '5px' }}><a href="https://drive.google.com/file/d/1xpvjvwGQ6Der8DJL1-RZrjkIknHxjTyI/view?usp=share_link" target="_blank">Awareness programme on " Eve-Teasing Prevention" on 10th August , 2015 </a></li>
                <li style={{ color: 'blue', textDecoration: 'underline', marginTop: '5px' }}><a href="https://drive.google.com/file/d/1vwzzGoG4hNjCy4O8sssTl4V6l8AcXQuW/view?usp=share_link" target="_blank">Awareness programme on "Anti-Ragging & Eve-Teasing " on 9th August , 2014 </a></li>
                <li style={{ color: 'blue', textDecoration: 'underline', marginTop: '5px' }}><a href="https://drive.google.com/file/d/1ZswNcTAi4JfJlPZ00k7l7Xnj0mB_8v1_/view?usp=share_link" target="_blank">Awareness programme on "Anti-Ragging" on 20th August , 2014 </a></li>

            </ul>
            <Typography style={{ color: 'green', fontSize: '20px', padding: '10px' }}>
                Minutes of Meeting
            </Typography>
            <ul >
                <li style={{ color: 'blue', textDecoration: 'underline' }}><a href="https://www.kbncollege.ac.in/appeals_grievances_redressal_cell.php" target="_blank">2020-2021 Minutes</a></li>

                <li style={{ color: 'blue', textDecoration: 'underline', marginTop: '5px' }}><a href="https://www.kbncollege.ac.in/appeals_grievances_redressal_cell.php" target="_blank">2019-2020 Minutes </a></li>

                <li style={{ color: 'blue', textDecoration: 'underline', marginTop: '5px' }}><a href="https://www.kbncollege.ac.in/appeals_grievances_redressal_cell.php" target="_blank">2018-2019 Minutes </a></li>

                <li style={{ color: 'blue', textDecoration: 'underline', marginTop: '5px' }}><a href="https://www.kbncollege.ac.in/appeals_grievances_redressal_cell.php" target="_blank">2017-2018 Minutes </a></li>

                <li style={{ color: 'blue', textDecoration: 'underline', marginTop: '5px' }}><a href="https://www.kbncollege.ac.in/appeals_grievances_redressal_cell.php" target="_blank">2016-2017 Minutes </a></li>

                <li style={{ color: 'blue', textDecoration: 'underline', marginTop: '5px' }}><a href="https://www.kbncollege.ac.in/appeals_grievances_redressal_cell.php" target="_blank">2015-2016 Minutes </a></li>

                <li style={{ color: 'blue', textDecoration: 'underline', marginTop: '5px' }}><a href="https://www.kbncollege.ac.in/appeals_grievances_redressal_cell.php" target="_blank">2014-2015 Minutes </a></li>

                <li style={{ color: 'blue', textDecoration: 'underline', marginTop: '5px' }}><a href="https://www.kbncollege.ac.in/appeals_grievances_redressal_cell.php" target="_blank">2013-2014 Minutes </a></li>


            </ul>


        </div>

    );
};

export default AntiRagging;
