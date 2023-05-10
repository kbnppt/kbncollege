import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
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
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
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
    createData('Dr. V. Narayana Rao', "  Principal", " Chairman"),
    createData("Sri P. L. Ramesh", "Vice-Principal", "Vice-Chairman"),
    createData("Dr. M. Venkateswara Rao", "Vice-Principal", 'Convenor'),
    createData("Dr.S.Venkatesh", "Lecturer in MBA", "Member"),
    createData("Dr.T.Bhagya Kumar", "Principal Jr.College", " Member"),
    createData("Dr.G.Krishnaveni", "IQAC Coordinator", "Member"),
    createData("Sri Ch.Ramesh Babu", "Controller of Examination", "Member"),
    createData("Sri J.Panduranga Rao", "Lecturer in Physics", "Member"),
    createData("Sri P.Ravindra", "Lecturer in Computers", "Member"),
    createData("Sri J.Panduranga Rao", "HoD, Dept. of Mathematics", "Member"),

];

const StyledTableRow2 = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);
function createDatasub(num, name, desg) {
    return { num, name, desg };
}

const rows2 = [
    createDatasub('Dr. V. Narayana Rao', "  Principal", " Chairman"),
    createDatasub("Sri A.Pardhasaradhi", "Office Superintendent", "Convenor"),
    createDatasub("Smt.V.Vijaya Lakshmi", "Jr.Assistant", 'Member'),
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
const GrievanceRedressal = () => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };


    return (

        <div>
            <h2>Grievance & Redressal Cell</h2>
            <Typography style={{ backgroundColor: 'Orange', marginBottom: '15px' }}>
                Drop your Complaints online
            </Typography>
            <p className={classes.ARcells}>Grievance & Redressal Cell</p>
            <div style={{ display: 'flex', marginTop: '5px' }}>
                <p style={{ color: 'gray', fontwidth: '5px' }}>  Name of the Cell : </p>
                <p style={{ color: 'green', fontwidth: '5px', marginLeft: '5px', fontwidth: '10px' }}> Appeals & Grievances Redressal Cell</p>
            </div>

            <p style={{ fontfamily: 'cursive' }}>Year of Establishment: <strong>2010 </strong></p>

            <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                    expandIcon={expanded === 'panel1' ? <RemoveIcon style={{ color: "white" }} /> : <AddIcon style={{ color: "white" }} />}

                    style={{ backgroundColor: "darkblue", color: "white" }}
                >
                    <Typography >IMPORTANCE OF CELL</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Appeals & Grievances Redressal cell is indented to find solutions for problems like Eve- teasing, ragging, harassment & victimization of students, including sexual harassment, Complaints regarding  Class room teaching, Class room management, Completion of syllabus,  Teaching methods, Conduction of examinations, Declaration of results, Evaluation practices,  Admission procedure,  Student scholarships, Provision of student amenities, Attendance,  Grievance related to charging of fees  etc. if and when they arise

                    </Typography>

                </AccordionDetails>
            </Accordion>
            <Accordion square expanded={expanded === 'panel2'} style={{ marginTop: '20px' }} onChange={handleChange('panel2')}>
                <AccordionSummary
                    expandIcon={expanded === 'panel2' ? <RemoveIcon style={{ color: "white" }} /> : <AddIcon style={{ color: "white" }} />}

                    style={{ backgroundColor: "darkblue", color: "white" }}
                >
                    <Typography >INTRODUCTION</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        To realize the primary needs of the students and staff and to secure civil liberties for everybody, a Grievance and Redressal Cell has been constituted in Kakaraparti Bhavanarayana College (KBN) in accordance with UGC guidelines on 10.08.2010. The Cell enables a student to express his/her feelings by initiating and pursuing the grievance procedure in accordance with the rules and regulations of the College. 'Student's Grievance Cell' enquires and analyses the nature and pattern of the grievances in a strictly confidential manner. The Grievance Redressal Cell convenes meetings periodically and takes steps to redress the grievance

                    </Typography>

                </AccordionDetails>
            </Accordion>
            <Accordion square expanded={expanded === 'panel3'} style={{ marginTop: '20px' }} onChange={handleChange('panel3')}>
                <AccordionSummary
                    expandIcon={expanded === 'panel3' ? <RemoveIcon style={{ color: "white" }} /> : <AddIcon style={{ color: "white" }} />}

                    style={{ backgroundColor: "darkblue", color: "white" }}
                >
                    <Typography >0BJECTIVES OF STUDENTS' APPELES & GRIEVANCE CELL </Typography>
                </AccordionSummary>
                <AccordionDetails style={{ display: 'flex', flexDirection: 'column' }}>
                    <div>
                        <Typography>
                            The objective of the Grievance Redressal Cell is to develop a responsive and accountable attitude among all the stakeholders in order to maintain a harmonious educational atmosphere in the Institute. The objectives of the Grievance Redressal Cell are:
                        </Typography>
                    </div>
                    <div style={{ display: 'flex', margin: '5px' }}>
                        <div>
                            <ArrowForwardIosIcon />
                        </div>
                        <div>
                            To uphold the dignity of the College by ensuring strife free atmosphere in the College through promoting cordial Student-Student relationship and Student-teacher relationship etc.
                        </div>

                    </div>
                    <div style={{ display: 'flex', margin: '5px' }}>
                        <div>
                            <ArrowForwardIosIcon />
                        </div>
                        <div>
                            To uphold the dignity of the College by ensuring strife free atmosphere in the College through promoting cordial Student-Student relationship and Student-teacher relationship etc.
                        </div>
                    </div>
                    <div style={{ display: 'flex', margin: '5px' }}>
                        <div>
                            <ArrowForwardIosIcon />
                        </div>
                        <div>
                            To make officials of the college responsive, accountable and courteous in dealing with the students.                        </div>
                    </div>
                    <div style={{ display: 'flex', margin: '5px' }}>
                        <div>
                            <ArrowForwardIosIcon />
                        </div>
                        <div>
                            To ensure effective solutions to students' grievances with an impartial and fair approach.
                        </div>
                    </div>
                    <div style={{ display: 'flex', margin: '5px' }}>
                        <div>
                            <ArrowForwardIosIcon />
                        </div>
                        <div>
                            Advising all staffs to be affectionate to the Students and not to behave in a vindictive manner towards any of them for any reason.
                        </div>
                    </div>
                    <Typography>
                        <strong> Scope: </strong>
                    </Typography>
                    <Typography>
                        The cell deals with Grievances received in writing or sometimes orally from the students about any of the following matters:
                    </Typography>
                    <Typography style={{ marginTop: '10px' }}>
                        <strong>  Administrative matters:  </strong>
                    </Typography>
                    <Typography style={{ marginTop: '10px' }}>
                        Related to admission procedure, student scholarships, Attendance, Grievance related to charging of fees, timely issue of conduct certificates, transfer certificates,   Migration certificates, provision of student amenities, etc. from the office.
                    </Typography>
                    <Typography style={{ marginTop: '10px' }}>
                        <strong>Examination related matters: </strong> Related to Conduction of examinations, Questions from   out of syllabus in the exams, Declaration of results, Evaluation practices, timely issue of marks list, Duplicate mark sheets if necessary & Provisional certificates etc.
                    </Typography>
                    <Typography style={{ marginTop: '10px' }}>
                        <strong>Academic Matters:  </strong>   Related to Class room management, completion of syllabus, teaching methods, treatment by lecturers, Ward Counselling system etc.
                    </Typography>
                    <Typography style={{ marginTop: '10px' }}>
                        <strong>Financial matters: </strong> Related to dues and payments of regular fees, examination fees, condonation, for various items from library and laboratories, etc.
                    </Typography>
                    <Typography style={{ marginTop: '10px' }}>
                        <strong> Harassment & victimization matters: </strong> Related to Eve- teasing, Ragging, bullying from other students, sexual harassment and victimization of students by lecturers.
                    </Typography>
                    <Typography style={{ marginTop: '10px' }}>
                        <strong>Other matters: </strong>  Related to conditions of sanitation, infra structural facilities, preparation of food in canteen, availability of transport etc.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion square expanded={expanded === 'panel4'} style={{ marginTop: '20px' }} onChange={handleChange('panel4')}>
                <AccordionSummary
                    expandIcon={expanded === 'panel4' ? <RemoveIcon style={{ color: "white" }} /> : <AddIcon style={{ color: "white" }} />}

                    style={{ backgroundColor: "darkblue", color: "white" }}
                >
                    <Typography >FUNCTIONING OF THE CELL</Typography>
                </AccordionSummary>
                <AccordionDetails style={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography style={{ color: 'green', fontwidth: '5px', marginLeft: '5px', fontwidth: '10px' }}>In case of Students</Typography>
                    <Typography style={{ marginTop: '10px' }}>
                        Appeals & Grievances Redressal cell is established to educate students and eradicate problems like Eve- teasing, ragging, harassment & victimization of students both physical and mental,redressing the academic related problems.The Grievances Redressal cell also looks after greviences related to Admission procedure, Completion of syllabus, Teaching methods, Regularity in Conducting examinations,Evaluation practices,Declaring results, Student scholarships, Provision of student amenities, Attendance, Grievance related to fees structures and other related issues from time to time.
                    </Typography>
                    <Typography style={{ color: 'green', fontwidth: '5px', marginLeft: '5px', fontwidth: '10px' }}>In case of Teaching & Non-Teaching Staff
                    </Typography>
                    <div style={{ display: 'flex', margin: '5px' }}>
                        <div>
                            <ArrowForwardIosIcon />
                        </div>
                        <div>
                            To entertain written and signed complaints and petitions of teachers in respect of matters directly affecting them individually or as group.
                        </div>
                    </div>
                    <div style={{ display: 'flex', margin: '5px' }}>
                        <div>
                            <ArrowForwardIosIcon />
                        </div>
                        <div>
                            To enquire into the grievances, and make recommendations and report to the concerned authorities like Director / Academic Council / Executive Council for Redressal or suitable action; and
                        </div>
                    </div>
                    <div style={{ display: 'flex', margin: '5px' }}>
                        <div>
                            <ArrowForwardIosIcon />
                        </div>
                        <div>
                            To recommend appropriate action against complainant, if allegations made in the documents found to be baseless
                        </div>
                    </div>
                </AccordionDetails>
            </Accordion>
            <Accordion square expanded={expanded === 'panel5'} style={{ marginTop: '20px' }} onChange={handleChange('panel5')}>
                <AccordionSummary
                    expandIcon={expanded === 'panel5' ? <RemoveIcon style={{ color: "white" }} /> : <AddIcon style={{ color: "white" }} />}

                    style={{ backgroundColor: "darkblue", color: "white" }}
                >
                    <Typography >STUDENTS GRIEVANCE PROCEDURE</Typography>
                </AccordionSummary>
                <AccordionDetails style={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography style={{ color: 'green', fontwidth: '5px', marginLeft: '5px', fontwidth: '10px' }}>In case of Students</Typography>
                    <Typography style={{ marginTop: '10px' }}>
                        The grievance procedure is a machinery to sort out the issues between student and college. It is a device to settle a problem. It enables to express feelings by initiating and pursuing the grievance procedure in accordance with the rules and regulations of the college. It involves a process of investigation in which 'Student's Grievance Cell' enquires and analyses the nature and pattern of the grievances in a strictly confidential manner. Emphasis on procedural fairness has been given with a view to "the right to be heard and right to be treated without bias".
                    </Typography>
                    <Typography style={{ marginTop: '10px' }}>Anyone with a genuine grievance may approach the members of Grievance & Redressal cell in person, or in consultation with the Principal. In case the student is unwilling to appear in self, grievances may be dropped in writing at the complaint/ suggestion box installed in the college near the administrative block, Computer department and Central Library Reading Room.
                    </Typography>
                    <Typography style={{ marginTop: '10px' }}>
                        The students can also put in writing their suggestions for improving the Academics / Administration in the College and drop it in the complaint/ suggestion box.
                    </Typography>
                    <Typography style={{ marginTop: '10px' }}>
                        They may also approach the members of the cell or their Ward Counsellor or any of their other lecturers as is comfortable to them. The complaints are taken out on every Wednesday & Saturday by the authorities and the matter is intimated to the Principal and Grievance & Redressal cell members for necessary action.
                    </Typography>
                    <div style={{ display: 'flex', margin: '5px' }}>
                        <div>
                            <ArrowForwardIosIcon />
                        </div>
                        <div>
                            The members of the cell are empowered to sort out the problems at their level through discussion with students.
                        </div>
                    </div>
                    <div style={{ display: 'flex', margin: '5px' }}>
                        <div>
                            <ArrowForwardIosIcon />
                        </div>
                        <div>
                            In case the members fail to find out any solution then the matter is referred to the principal for final comment on the matter.
                        </div>
                    </div>
                    <div style={{ display: 'flex', margin: '5px' }}>
                        <div>
                            <ArrowForwardIosIcon />
                        </div>
                        <div>
                            Considering the nature and depth of the grievances due inquiry is made by the members of the cell and through personal discussion the matter is solved. If anybody is found to be guilty for any kind of nuisance he or she is given punishment with due consideration with the principal. The nature of punishment includes verbal as well as written warning, information to the parents, suspension for a few days, information to the police (if situation arises for so) and expelling from the college as per the rule of the university.
                        </div>
                    </div>
                    <div style={{ display: 'flex', margin: '5px' }}>
                        <div>
                            <ArrowForwardIosIcon />
                        </div>
                        <div>
                            The college management is also considerate about any issues that might need their attention and intervention.
                        </div>
                    </div>

                    <div style={{ display: 'flex', margin: '5px' }}>
                        <div>
                            <ArrowForwardIosIcon />
                        </div>
                        <div>
                            The cell also takes the help of Ward Counsellors who take care of the student’s social, moral, emotional and psychological needs and issues to redress the grievances of students.
                        </div>
                    </div>
                    <div style={{ display: 'flex', margin: '5px' }}>
                        <div>
                            <ArrowForwardIosIcon />
                        </div>
                        <div>
                            The Feedback forms on Curriculum, Lecturers, functioning of the college, overall evaluation of the programme, teaching methods and infrastructural facilities etc. analysed by IQAC also help in resolving the problems of the students.                        </div>
                    </div>

                </AccordionDetails>
            </Accordion>
            <Typography style={{ margin: '10px' }}>
                Convenor:<strong>Dr.M.Venkateswara Rao,</strong>  Vice-Principal <br></br>
                Number : <strong>9441129108</strong>
            </Typography>
            <Typography style={{ color: 'green', fontwidth: '5px', marginLeft: '5px', marginTop: '15px', fontwidth: '10px' }}>Grievance – Redressal Cell Committee for Student and Teaching Staff:
            </Typography>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead className={classes.tableHead}>
                        <TableCell align="center" style={{ color: "white", }} colSpan={5} >
                            Grievance & Redressal Cell Committee for Teaching Staff
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
            <Typography style={{ color: 'green', fontwidth: '5px', marginLeft: '5px', marginTop: '25px', fontwidth: '10px' }}>Grievance – Redressal Cell Committee for Student and Teaching Staff:
            </Typography>
            <TableContainer component={Paper} style={{ marginTop: '15px' }}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead className={classes.tableHead}>
                        <TableCell align="center" style={{ color: "white" }} colSpan={5} >
                            Grievance & Redressal Cell Committee for Teaching Staff
                        </TableCell>
                    </TableHead>
                    <TableBody>
                        {rows2.map((row) => (
                            <StyledTableRow2 key={row.name}>
                                <StyledTableCell component="th" scope="row">
                                    {row.num}
                                </StyledTableCell>
                                <StyledTableCell align="left">{row.name}</StyledTableCell>
                                <StyledTableCell align="left">{row.desg}</StyledTableCell>

                            </StyledTableRow2>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>




            <Typography style={{ color: 'green', fontSize: '20px', paddingTop: '20px' }}>
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




        </div >

    );
};

export default GrievanceRedressal;
