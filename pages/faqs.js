import React from 'react'
import { Container, makeStyles } from '@material-ui/core';
import Header from '../components/Header/MainNavigation';
import HeadingComponent from '../components/Headings/index';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Head from 'next/head';
import Footer from '../components/Footer/animatedfooter';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Box from '@material-ui/core/Box';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';


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
        fontSize: 24,
    },
    pos: {
        marginBottom: 12,
    },
}));

const MainContent = () =>{
    const [expanded, setExpanded] = React.useState(false);

    const [questions,setQuestions] = React.useState([
        {ques:'How can a student apply for admission in the College?',answers:'As per the G.O.MS.No.34 Higher Education Department, Dated: 15.10.2020, the college is following Online Admission Process for admission into both Undergraduate and Postgraduate Courses conducted by the Government of Andhra Pradesh from the Academic Year 2020-21.',points:[]},
        {ques:'To whom the student can contact in college for admission?',
        answers:`As per the directions of Online Admission Committee, the College Helpline Centre was established is the college campus to provide assistance to the students in registering on Online Admission Module for Degree Colleges (OAMDC), making web options, issues related to allotment of seats, etc.  Principal of the College nominated two faculty members to share the responsibility of the admissions. For more details regarding admission student can contact: +91 `,points:[]},
        {ques:'Eligibility for Admission?',answers:`As per State Government G.O. Norms and University Norms.`,points:[]},
        {ques:'Hostel Facility for students available in the college?',answers:'Yes, facility available for both Boys & Girl Students.',points:[]},
        {ques:'Discipline and Anti-Ragging in the college premises?',answers:'Student must be abiding with college discipline rules & regulations.',points:[]},
        {ques:'What are the programmes offered in B.Sc.',answers:'',points:[
            {val:'(MPC)'},
            {val:'(CBZ)'},
            {val:'(MPCS)'},
            {val:'(MECS)'},
            {val:'(MSCS)'},
            {val:'(MCCS)'},
            {val:'(Data Science)'},
            {val:'(IoT)'},
            {val:'BCA'},
        ]},
        {ques:'What are the programmes offered in B.Com.',answers:'',points:[
            {val:'(General)'},
            {val:'(TPP)'},
            {val:'(Logistics)'},
            {val:'BBA'},
        ]},
        {ques:'What are the programmes offered in PG?',answers:'',points:[
            {val:'MBA'},
            {val:'MCA'},
            {val:'M.Sc. (Organic Chemistry'},
            {val:'M.Sc. (Analytical Chemistry)'},
        ]},
        {ques:'What Student Services available in the institution?',answers:'',points:[
            {val:'MOOCS'},
            {val:'Placement & Guidance Cell'},
            {val:'NCC'},
            {val:'Women Empowerment Cell'},
            {val:'PRAGNA (Debating & Quiz Club)'},
            {val:'Language Lab'},
            {val:'NSS'},
            {val:'Red Ribbon Club'},
            {val:'Ward Counseling'},
            {val:'Yoga'},
            {val:'Sports'},
            {val:'Free Coaching Camps'},
            {val:'Gymnasium'},
            {val:'Hygiene Food Canteen'},
            {val:'Health Centre'},
            {val:'Research Centres'},
            {val:'Central Library'},
            {val:'Digital Library'},
            {val:'State of Art Laboratories'},
            {val:'Museums'},
            {val:'Digital Classrooms'},
            {val:'Solar Power plant'},
            {val:'Utility Store'},
            {val:'Incubation Centre'},
            {val:'KOSA'},
        ]},
        {ques:'How can a student join in the National Cadet Corps of the college?',
        answers:`Selections will be done in the academic year (After 1st Year enrolment) in the college campus for Cadet identification, as per the selections the students will be able to attempt and join as Cadet in the NCC.  `,points:[]},
        {ques:'How can a student join as NSS Volunteer in the college?',
        answers:`Selections will be done for every academic year in the college campus for Volunteer identification, as per the selections the students will be able to join as Cadet in the NSS.`,points:[]},
        {ques:'Any Additional Programmes offered by the college?',
        answers:`College is offering 4 Diploma Programme i.e. Diploma in Yoga for Human Excellence, Drone Pilot, Computer Science, Event Management and Data Analytics.`,points:[]},
        {ques:'Is there any Certificate Courses offered by the college?',
        answers:`College is offering 4 Certificate Courses i.e. M.S. office, DTP, Accounting Package & Tally and Digital Marketing for both UG & PG Students. In addition, every Department will offer Add-On/Value Added Programmes for each Semester.`,points:[]},
        {ques:'Evaluation Procedure in the college',
        answers:`The college follows evaluation system based on Continuous Internal Assessment (CIA) and Semester-End Examination (SEE).`,points:[]},
        {ques:'Attendance Process for UG Programmes',answers:'',points:[
            {val:'5 marks attendance',sub:['100% - 5 marks','95-99 - 3 marks','90-94 - 2 marks']},
            {val:'Minimum attendance to attend the exam is 80%'},
            {val:'75-79 Condonation'},
        ]},
        {ques:'Attendance Process for PG Programmes',answers:'',points:[
            {val:'5 marks attendance',sub:['90%-100% - 5 marks','85%-89% - 4 marks','80%-84% - 3 marks','75%-79% - 2 marks']},
            {val:'Minimum attendance to attend the exam is 65%'},
        ]},
        {ques:'Is there any additional academic activities organized by the college?',answers:`College is consistently improve the student knowledge by organizing Guest Lectures, Seminars, Workshops, Training Programmes, Internships, Research Projects, Startups, Academic Competitions.`,points:[]},
        {ques:'Is there any extracurricular activities organized by the college?',answers:`College is having Sports & Games facility, conducted Extension Activities, Outreach Programmes, Field Visits, Internships, Health Camps, Awareness Programmes by different Cells, Committees and departments.`,points:[]},
        {ques:'Is there Placement and Guidance Cell in the college? ',answers:'Placement & Guidance Cell is an integral part of the KBN College, students may contact Placement & Guidance Cell Officer available in the college.',points:[]},
        {ques:'Other examination rules, scholarship details, provision of Certificates, etc. ',answers:'Students are required to contact administration Office and refer College Handbook. ',points:[]},
    ])
    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };
    return (
        <React.Fragment>
            {questions.map((e,i)=>{
                return (
                    <Accordion key={i} square style={{marginTop:'1rem'}} expanded={expanded === `panel${i}`} onChange={handleChange(`panel${i}`)}>
                        <AccordionSummary
                            expandIcon={expanded === `panel${i}` ? <RemoveIcon style={{ color: "white" }} /> : <AddIcon style={{ color: "white" }} />}
                            style={{ backgroundColor: "#3F51B5", color: "white" }}
                        >
                            <Typography >{i+1}. {e.ques}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            {e?.answers?.length >2 && (
                                <Box>
                                    <Typography style={{textAlign:'justify'}}>
                                        {e.answers}
                                    </Typography>
                                </Box>
                            )}

                            {e.points?.length >0 && (
                                <Box>
                                    <ul>
                                        {e.points?.map((e,i)=>{
                                            return <li key={i}>
                                                {e.val}
                                                {e?.sub && (
                                                    <dl>
                                                        {e?.sub.map((ele,i)=>(
                                                                <dd key={i}>- {ele}</dd>
                                                        ))}
                                                    </dl>
                                                )}
                                                </li>
                                        })}
                                    </ul>
                                </Box>
                            )}
                        </AccordionDetails>
                </Accordion>
                )
            })}

    </React.Fragment>
    )
}


const Index = () => {
    const classes = useStyles();

    return (
        <>
            <Head>
                <title>faqs - Kakaraparti Bhavanarayana College (Autonomous)</title>
            </Head>
            <main>
                <div className={classes.root}>
                    <Header />
                    <div className={classes.headerStyle}>
                        <Container>
                            <HeadingComponent data1="faqs" data2="" Color={true} />
                        </Container>
                    </div>

                    <div className={classes.horizontalTabsRoot}>
                        <Card className={classes.cardRoot} variant="outlined">
                                <CardContent>
                                    <h2 className={classes.title} color="textSecondary" gutterBottom>
                                        Frequently Asked Questions 
                                    </h2>
                                </CardContent>
                        </Card>
                    </div>

                    <Container>
                        <div className={classes.verticalTabsRoot}>
                            <Card className={classes.cardRoot} variant="outlined">
                                <CardContent>
                                    <h2 className={classes.title} color="textSecondary" gutterBottom>
                                        Frequently Asked Questions 
                                    </h2>
                                    <MainContent />
                                </CardContent>
                            </Card>
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