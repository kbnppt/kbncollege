import React, { useState } from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { Card } from "@material-ui/core";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import BulletLineCom from "../../HeadingComponent/BulletLineCom";
import BulletLineLinkCom from "../../HeadingComponent/BulletLineLinkCom";
import CustomGifComp from "../../HeadingComponent/CustomGifComp";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#07358a",
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    "&:hover": {
      backgroundColor: "#bdbdbd87",
    },
  },
}))(TableRow);

function createTable1(sno, name, designation) {
  return { sno, name, designation };
}

const table1 = [
  createTable1(1, "Dr. V. Narayana Rao", "Principal –Chairman"),
  createTable1(2, "Sri P. L. Ramesh", "Vice-Principal –Vice-Chairman"),
  createTable1(3, "Dr.M.Venkateswara Rao", "Vice-Principal –Vice-Chairman"),
  createTable1(4, "Captain KPT Vijaya Bhaskar", "Lecturer in Chemistry, Convenor"),
  createTable1(5, "Dr. JV Chalapathi Rao", "Lecturer in Telugu, Member"),
  createTable1(6, "Sri S. Vasu", "Lecturer in Computers, Member"),
  createTable1(7, "Sri N. Hemanth Kumar", "Lecturer in Commerce, Member"),
  createTable1(8, "Dr. P. Seshu Babu", "Lecturer in Statistics, Member"),
  createTable1(9, "Sri Sk. Rahamthulla", "Lecturer in Mathematics, Member"),
];

const useStyles = makeStyles((theme) => ({
  table: {
    width: "100%",
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  stylesText: {
    textAlign: "justify",
  },
}));

const WardCounsellingSystem = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const [OBJECTIVES, setOBJECTIVES] = useState([
      `To improve the academic standards of the students through continuous mentoring by the respective ward counsellors.`,
      `To identify students who do not have sufficient attendance and slow learners through this system.`,
      `To provide assistance to students to identity their goals, choose their careers in consistence with their capabilities, interests and academic background.`,
      `To provide the students with information on academic policies, rules and regulations of the college and the university, requirements of academic programmes, procedures, credit requirements for promotion and various other activities of the college.`,
      `Enabling the students and their parents to know about the academic progress.`,
      `To identify the problems and difficulties in understanding of subjects, thereby organising remedial classes and help sessions in the respective subjects to improve the performance of each and every student in the ensuing examinations.`,
      `To arrange counselling sessions in group or in personal with the college psychologist to reduce stress among students so as to enhance their regularity and results.`,
    ]);
  const [PRACTICES, setPRACTICES] = useState([
      `Conducting parents meet for newly admitted students in the beginning of the academic year.`,
      `Prompt distribution of monthly attendance reports to the Ward Counsellors to immediately identify the students with poor attendance.`,
      `Prompt distribution of First and Second Mid marks lists immediately after evaluation to enable fast identification of slow learners.`,
      `Identification and preparation of the list of students with less than 70% of attendance and low result.`,
      `Conveying the information to the parents / guardians.`,
      `Students are counselled and necessary measures are taken to help them to overcome their difficulties in understanding the subjects.`,
      `Personal instructions are given to improve their performance.`,
      `Remedial classes are arranged for such students in each semester.`,
      `Undivided attention is given to a student in distress, repeatedly falling asleep in class, non-attentive by talking to the student in private and referring him/her to the college psychologist.`,
      `The thoughts and feelings of the student are listened in a sensitive way to create comfort to the student.`,
      `After the counselling, students are strengthened psychologically to tackle academic and personal challenges.`,
      `Motivation of counsellors involves psychological, emotional, social and cognitive forces that activate students to work hard and to enhance their academic performance.`,
      `Following up is an important part of the counselling process. The student is checked later to find out how he or she is doing and whether the support provided is appropriate or not.`,
      `The motto “The more you practice the smarter you become” was deeply instilled in the minds of the students by Ward Counsellors and Psychologist.`,
    ]);
  const [OUTCOMES, setOUTCOMES] = useState([
      `Attendance percentage of the students has increased to a remarkable extent.`,
      `The number of detained students has decreased consistently.`,
      `A great improvement in the teacher – student relationship has been achieved through continuous counselling system. Parents are better informed and more aware of the academic progress of their wards from the initial stages. A good relationship between the parent and the teacher has been established and the students’ performance in academics is improved.`,
      `The greatest outcomes of the ward counselling system is the notable and commendable increase recorded in the pass percentage of the students of the college.`,
    ]);
    const [WARDCOUNSELLINGMINUTESOFMEETINGS,setWARDCOUNSELLINGMINUTESOFMEETINGS] =useState([
        {link:'https://drive.google.com/uc?id=/ach/dramatic/iqac/1-7PpDAv7nXhFIby7M14-OpXCc8Oa7YGZ',textData:'WARD COUNSELLING MINUTES OF MEETING(2019-2020)'},
        {link:'https://drive.google.com/uc?id=/ach/dramatic/iqac/1a4ylzyPor-xjzNqGwpHSYGaWyie9qiuR',textData:'WARD COUNSELLING MINUTES OF MEETING(2018-2019)'},
        {link:'https://drive.google.com/uc?id=/ach/dramatic/iqac/1021ChrEy6eqU906G3BU6pQNXtDQ1bsKy',textData:'WARD COUNSELLING MINUTES OF MEETING(2017-2018)'},
        {link:'https://drive.google.com/uc?id=/ach/dramatic/iqac/1kdIcIANSgQngiYeeWDfShJvS9VsAYcMu',textData:'WARD COUNSELLING MINUTES OF MEETING(2016-2017)'},
        {link:'https://drive.google.com/uc?id=/ach/dramatic/iqac/1pEMpa-TVd8pmG-RrJNHJnQEe_7Q4SB_P',textData:'WARD COUNSELLING MINUTES OF MEETING(2015-2016)'},
        {link:'https://drive.google.com/uc?id=/ach/dramatic/iqac/1pdcA3xm52sMFe4kYi6rMgoyAo_xb9HxA',textData:'WARD COUNSELLING MINUTES OF MEETING(2014-2015)'},
    ])

    const [WARDCOUNSELLORSLIST,setWARDCOUNSELLORSLIST] =useState([
        {link:'https://drive.google.com/uc?id=/ach/dramatic/iqac/1hL7E3tsohdNaGlrQOlFoXjMxzspDCwR6',textData:'WARD COUNSELLORS(2019-2020)'},
        {link:'https://drive.google.com/uc?id=/ach/dramatic/iqac/10WQbNHYLGFj8_SBzVlh5RGxly6e84ZbV',textData:'WARD COUNSELLORS(2018-2019)'},
        {link:'https://drive.google.com/uc?id=/ach/dramatic/iqac/1xtlGUfC-k4wf9cGcECSl8lpGXBzZ41Gb',textData:'WARD COUNSELLORS(2017-2018)'},
        {link:'https://drive.google.com/uc?id=/ach/dramatic/iqac/1RFfkA6QEKZProfQKDD_zpQ5UL28eEF39',textData:'WARD COUNSELLORS(2016-2017)'},
        {link:'https://drive.google.com/uc?id=/ach/dramatic/iqac/1x9MdZag4OSpKv-WbaFnxCjacFSYIXwW6',textData:'WARD COUNSELLORS(2015-2016)'},
        {link:'https://drive.google.com/uc?id=/ach/dramatic/iqac/1Tpe8lSADtl312D2vm2EVp_-VCNCk7YG7',textData:'WARD COUNSELLORS(2014-2015)'},
    ])

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <h3>WardCounsellingSystem</h3>

      <Accordion
        square
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        style={{ margin: "1rem 0" }}
      >
        <AccordionSummary
          expandIcon={
            expanded === "panel1" ? (
              <RemoveIcon style={{ color: "white" }} />
            ) : (
              <AddIcon style={{ color: "white" }} />
            )
          }
          style={{ backgroundColor: "darkblue", color: "white" }}
        >
          <Typography>IMPORTANCE OF THE COUNSELLING</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div>
            <p className={classes.stylesText}>
              Ward Counselling is a procedure through which personal care is
              taken and guidance is given to students / wards to enable them to
              improve their academic performance. Though this is a continuous
              process in our ancient Gurukula system of education, the same
              method is now implemented in the present educational system as
              Ward Counselling System. The ward counselling system in our
              college has been strengthened over the years and works
              systematically and effectively. Ward Counselling Committee is
              constituted every year under the chairmanship of the Principal.
              Academics & Planning Director is nominated as Vice chairman, a
              senior faculty member as the convenor and four other faculties as
              the committee members. Under the Chairmanship of the Principal the
              committee meets with concerned Ward Counsellors to discuss the
              matters like Insufficient Attendance, Low Pass Percentage,
              Remedial Coaching for slow learners and distribution of study
              materials etc. The main objective of this system is to improve the
              academic standards of the degree students through continuous
              follow up by their respective ward counsellors. If a candidate is
              weak in his/her attendance or in academic performance, the same
              will be informed to his/her parents. The weak students are asked
              to bring their parents to discuss about their performance. The
              timely intimation about the performance of a particular student to
              his/her parent results in taking appropriate measures to improve
              his/her performance in the later period.
            </p>
            <p className={classes.stylesText}>
              College is a very unique time in a student’s life. In an era of
              rising academic standards counselling suggests new ways to help
              students to thrive in the face of adversity. Some students will
              face life challenges such as stress, academic difficulties,
              relationship issues, etc., that if dealt with appropriately, can
              facilitate emotional growth & maturity. The goal of the college is
              to promote greater wellness among the student population. To
              fulfill this goal the college has appointed Smt. Madduru Sravana
              Krishna Kumari, a renowned psychologist as the college Counsellor
              from 09.09.2014 onwards. Her counselling services help students to
              overcome comprehensive problems ranging from stress, room-mate or
              relationship problems, depression, career interests, academic
              concerns & many other types of problems.
            </p>
          </div>
        </AccordionDetails>
      </Accordion>

      <Accordion
        square
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
        style={{ margin: "1rem 0" }}
      >
        <AccordionSummary
          expandIcon={
            expanded === "panel2" ? (
              <RemoveIcon style={{ color: "white" }} />
            ) : (
              <AddIcon style={{ color: "white" }} />
            )
          }
          style={{ backgroundColor: "darkblue", color: "white" }}
        >
          <Typography>OBJECTIVES</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div>
            {OBJECTIVES.map((ele) => (
              <BulletLineCom data={ele} />
            ))}
          </div>
        </AccordionDetails>
      </Accordion>

      <Accordion
        square
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
        style={{ margin: "1rem 0" }}
      >
        <AccordionSummary
          expandIcon={
            expanded === "panel3" ? (
              <RemoveIcon style={{ color: "white" }} />
            ) : (
              <AddIcon style={{ color: "white" }} />
            )
          }
          style={{ backgroundColor: "darkblue", color: "white" }}
        >
          <Typography>PRACTICES</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div>
            {PRACTICES.map((ele) => (
              <BulletLineCom data={ele} />
            ))}
          </div>
        </AccordionDetails>
      </Accordion>

      <Accordion
        square
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
        style={{ margin: "1rem 0" }}
      >
        <AccordionSummary
          expandIcon={
            expanded === "panel4" ? (
              <RemoveIcon style={{ color: "white" }} />
            ) : (
              <AddIcon style={{ color: "white" }} />
            )
          }
          style={{ backgroundColor: "darkblue", color: "white" }}
        >
          <Typography>OUTCOMES</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div>
            {OUTCOMES.map((ele) => (
              <BulletLineCom data={ele} />
            ))}
          </div>
        </AccordionDetails>
      </Accordion>

      <h4>WARD COUNSELLING MINUTES OF MEETINGS</h4>
      {WARDCOUNSELLINGMINUTESOFMEETINGS.map((ele)=><BulletLineLinkCom link={ele?.link} textData={ele?.textData} />)}

      <h4>WARD COUNSELLORS LIST</h4>
      {WARDCOUNSELLORSLIST.map((ele)=><BulletLineLinkCom link={ele?.link} textData={ele?.textData} />)}

      <Card style={{width:'100%',margin:'1rem'}}>
          <CustomGifComp srcData='https://drive.google.com/uc?id=1kAUYAXxgDj_QZiVjZo162bFjjc27R5qq' />
      </Card>

      <h4>List of Members in the Cell:</h4>

      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell colSpan={3} align="center">
                ECO-CLUB COMMITTEE
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {table1.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell>{row.sno}</StyledTableCell>
                <StyledTableCell align="left">
                  <div>{row?.name}</div>
                </StyledTableCell>
                <StyledTableCell align="left">
                  {row.designation}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default WardCounsellingSystem;
