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
        fontSize: '16px',
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

const ResearchPromotion = () => {
    const classes = useStyles();

    return (
        <div>
            <h2 className={classes.HeadingMain}>Research Policy</h2>
            <p className={classes.teluguHeading} style={{ paddingBottom: '10px' }}>AIM</p>
            <p className={classes.teluguContent}>The research policy of the college aims to create and support a research culture among its faculty, and students and develop it for enriching and enhancing the professional competence of the faculty members.  The policy aims to develop and promote   scientific temper and research aptitudes of all learners; and for contributing to national development by their participation in research and related activities.</p>
            <p className={classes.teluguContent}>
                To achieve the high quality research ambience the following policies have been undertaken. A  Research Monitoring cell has been established that will prepare and implement the documents for development of research and its activities within the College.
            </p>
            <p className={classes.teluguHeading} style={{ paddingBottom: '10px' }}>Establishment of Research monitoring cell</p>
            <p className={classes.teluguContent}>
                The Research Monitoring Cell was established in 2016 comprising of the following members:
            </p>
            <div className={classes.objectivesContent}>
                <ArrowForwardIosIcon className={classes.arrowIcon} />
                <p className={classes.arrowContent}><b>Chairman: </b>Principal of the college</p>
            </div>
            <div className={classes.objectivesContent}>
                <ArrowForwardIosIcon className={classes.arrowIcon} />
                <p className={classes.arrowContent}><b>Convenor: </b>Professor of  PG Department</p>
            </div>
            <div className={classes.objectivesContent}>
                <ArrowForwardIosIcon className={classes.arrowIcon} />
                <p className={classes.arrowContent}><b>Members: </b>Senior faculty / Doctorates / pursuing research</p>
            </div>
            <div className={classes.objectivesContent}>
                <ArrowForwardIosIcon className={classes.arrowIcon} />
                <p className={classes.arrowContent}><b>Ex-office member: </b>Co-ordinator of IQAC</p>
            </div>
            <p className={classes.teluguHeading} style={{ paddingBottom: '10px' }}>Scope of the Research Policy</p>
            <p className={classes.teluguContent}>
                The policy applies to all the researchers of the college who are active in teaching, research, administration and provision of any form of support to the core functions of the college; all mentors, guides, external experts and sponsors associated with any of the research activities of the college; all academic and administrative departments of the college and all students of the college.
            </p>
            <p className={classes.teluguHeading} style={{ paddingBottom: '10px' }}>Objectives of Research Policy</p>
            <div className={classes.objectivesContent}>
                <ArrowForwardIosIcon className={classes.arrowIcon} />
                <p className={classes.arrowContent}>The Research Monitoring Cell of the college shall be responsible for implementing this research policy of the college by working closely with the college management. The objectives  are  as follows:</p>
            </div>
            <div className={classes.objectivesContent}>
                <ArrowForwardIosIcon className={classes.arrowIcon} />
                <p className={classes.arrowContent}>To develop and enhance research environment within the institution.</p>
            </div>
            <div className={classes.objectivesContent}>
                <ArrowForwardIosIcon className={classes.arrowIcon} />
                <p className={classes.arrowContent}>To motivate all Faculties to pursue research in their respective areas of expertise.</p>
            </div>
            <div className={classes.objectivesContent}>
                <ArrowForwardIosIcon className={classes.arrowIcon} />
                <p className={classes.arrowContent}>To strengthen the institutional capacity for strategic, technical and operational planning, budgeting and control of all research activities of the college</p>
            </div>
            <div className={classes.objectivesContent}>
                <ArrowForwardIosIcon className={classes.arrowIcon} />
                <p className={classes.arrowContent}>To increase and administer the seed money for supporting and facilitating research initiatives and projects of faculty members and students.</p>
            </div>
            <div className={classes.objectivesContent}>
                <ArrowForwardIosIcon className={classes.arrowIcon} />
                <p className={classes.arrowContent}>To encourage the departments to establish research labs with necessary facilities to carry out research projects.</p>
            </div>
            <div className={classes.objectivesContent}>
                <ArrowForwardIosIcon className={classes.arrowIcon} />
                <p className={classes.arrowContent}>To develop rules, procedures and guidelines for granting research support, instituting research awards, and create incentives for the faculty who receive state, national and international recognition for research contributions.</p>
            </div>
            <div className={classes.objectivesContent}>
                <ArrowForwardIosIcon className={classes.arrowIcon} />
                <p className={classes.arrowContent}>Increasing incentives, granting study leave, duty leave, reduction in workload, etc. for faculty members undertaking research activities.</p>
            </div>
            <div className={classes.objectivesContent}>
                <ArrowForwardIosIcon className={classes.arrowIcon} />
                <p className={classes.arrowContent}>To prepare and regularly update the research agenda of the college outlining the preferred focus areas and priorities of research activities to be supported</p>
            </div>
            <div className={classes.objectivesContent}>
                <ArrowForwardIosIcon className={classes.arrowIcon} />
                <p className={classes.arrowContent}>To encourage and guide the faculty members to apply and take up minor/major research projects.</p>
            </div>
            <div className={classes.objectivesContent}>
                <ArrowForwardIosIcon className={classes.arrowIcon} />
                <p className={classes.arrowContent}>To identify and inform researchers about the appropriate research opportunities announced by different academic, research, industry or government organisations.</p>
            </div>
            <div className={classes.objectivesContent}>
                <ArrowForwardIosIcon className={classes.arrowIcon} />
                <p className={classes.arrowContent}>To facilitate the establishment of more research centres by funding agencies / university.</p>
            </div>
            <div className={classes.objectivesContent}>
                <ArrowForwardIosIcon className={classes.arrowIcon} />
                <p className={classes.arrowContent}>To facilitate the establishment and development of specific research units like Central instrumentation centres for promoting interdisciplinary research.</p>
            </div>
            <div className={classes.objectivesContent}>
                <ArrowForwardIosIcon className={classes.arrowIcon} />
                <p className={classes.arrowContent}>To develop and promote linkages including MOU s with the Research Council of the  affiliated University,   industry bodies and individual companies  for  widening the scope of research  and creating opportunities for teachers and students of the college.</p>
            </div>
            <div className={classes.objectivesContent}>
                <ArrowForwardIosIcon className={classes.arrowIcon} />
                <p className={classes.arrowContent}>To approach National and international organisations such as UGC, ICSSR, ICHR, ICPR, DST, DBT, UNESCO, UNICEF to fund major and minor research projects undertaken by the faculty / students.</p>
            </div>
            <div className={classes.objectivesContent}>
                <ArrowForwardIosIcon className={classes.arrowIcon} />
                <p className={classes.arrowContent}>To encourage and facilitate the publication of the research work in reputed academic journals.</p>
            </div>
            <div className={classes.objectivesContent}>
                <ArrowForwardIosIcon className={classes.arrowIcon} />
                <p className={classes.arrowContent}>To encourage and facilitate the presentation of the research work through academic events such as workshops/seminars/guest lecturers.</p>
            </div>
            <div className={classes.objectivesContent}>
                <ArrowForwardIosIcon className={classes.arrowIcon} />
                <p className={classes.arrowContent}>To create and maintain a database of research work and research projects undertaken by the faculty and students as well as collect data by metrics such as Citation Index, Impact Factor, h-index, SNIP, SJR, etc.</p>
            </div>
            <div className={classes.objectivesContent}>
                <ArrowForwardIosIcon className={classes.arrowIcon} />
                <p className={classes.arrowContent}>To provide a mechanism for ensure that academic staff attain the desired mix of teaching, research and consultancy outputs so as to achieve the level stated in the College mission.</p>
            </div>
            <div className={classes.objectivesContent}>
                <ArrowForwardIosIcon className={classes.arrowIcon} />
                <p className={classes.arrowContent}>To draw up and adopt a research code, which informs all researchers about the ethical and legal norms and principles to be followed in the conduct of research.</p>
            </div>
            <p className={classes.teluguHeading} style={{ paddingBottom: '10px' }}>Terms of Office</p>
            <div className={classes.objectivesContent}>
                <ArrowForwardIosIcon className={classes.arrowIcon} />
                <p className={classes.arrowContent}>Members of the Research Monitoring cell serve for a term of five years.</p>
            </div>
            <div className={classes.objectivesContent}>
                <ArrowForwardIosIcon className={classes.arrowIcon} />
                <p className={classes.arrowContent}>An appointed member may be able to serve for additional terms as per the approval of the Academic Council of University.</p>
            </div>
            <p className={classes.teluguHeading} style={{ paddingBottom: '10px' }}>Quorum</p>
            <p className={classes.teluguContent}>The quorum for meetings of the Research Monitoring Cell shall be the nearest whole number above one third of the membership of the cell.</p>
            <p className={classes.teluguHeading} style={{ paddingBottom: '10px' }}>Meeting Schedule</p>
            <p className={classes.teluguContent}>The Research Monitoring cell will meet at least once each semester. The Chairman is responsible for determining if more meetings are required.</p>
            <p className={classes.teluguHeading} style={{ paddingBottom: '10px' }}>Reporting</p>
            <p className={classes.teluguContent}>The cell will report to the Academic Council by way of its minutes.</p>
            <a href='https://drive.google.com/file/d/1o0bKn4axxjqMhoxWFu-HO22uQtVQJbXE/view?usp=share_link' target={'_blank'} className={classes.arrowwithContent}>Code of Ethics-Plagiarism</a>
            <div style={{ paddingTop: '10px' }}>
                <a href='https://drive.google.com/uc?id=1ovzWn_WSTlwxgWhyV43-XPgBK27rZV_v' target={'_blank'} className={classes.arrowwithContent}>INCUBATION CENTRE</a>
            </div>
            <p className={classes.teluguHeading} style={{ paddingBottom: '20px' }}>List of Members in the RESEARCH PROMOTION & MONITORING CELL COMMITTEE</p>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell style={{ fontSize: '22px', borderRight: '1px solid white' }} colSpan={0}>S.no</StyledTableCell>
                            <StyledTableCell colSpan={2} style={{ fontSize: '22px', borderRight: '1px solid white' }}>Name of the Faculty</StyledTableCell>
                            <StyledTableCell colSpan={2} style={{ fontSize: '22px' }}>Designation</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {research.map((row) => (
                            <StyledTableRow key={row.name}>
                                <StyledTableCell style={{ fontSize: '18px', borderRight: '1px solid white' }} colSpan={0}>
                                    {row.sno}
                                </StyledTableCell>
                                <StyledTableCell align="left" style={{ fontSize: '18px', borderRight: '1px solid white' }} colSpan={2}>
                                    <div style={{ paddingBottom: '7px' }}>{row?.name}</div>
                                </StyledTableCell>
                                <StyledTableCell align="left" style={{ fontSize: '18px' }} colSpan={4}>
                                    <div style={{ paddingBottom: '7px' }}>{row?.designation}</div>
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default ResearchPromotion