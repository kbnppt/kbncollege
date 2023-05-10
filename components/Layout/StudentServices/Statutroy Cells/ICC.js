import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles, Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { getRequiredImgs } from '../../../Api';

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
    createData(4, "Smt. M. Lakshmi Prasanna", "Head, Dept. of Mathematics, Convenor"),
    createData(5, "Smt. O. Sailaja", "Lecturer in Chemistry, Member"),
    createData(6, "Dr. K. Siva Prakasa Rao", "Asst. Prof., Dept. of Commerce, Member"),


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
const Icc = () => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    const [apidata,setApiData] = React.useState([])

    const initialLoad = async() =>{
        let govt_folderId = '1l6eTYaw0I0t0msae6rw3MighBPxUA3nh';
        let data = await getRequiredImgs(govt_folderId);
        setApiData(data?.files)
    }


    React.useEffect(()=>{
        initialLoad()
    },[])


    const getImgData = (data) =>{
        let value = data?.split('%20')?.join(' ');
        let filterValue = apidata?.find((e)=>e?.name == value);
        if(filterValue){
            return filterValue?.id
        }
        return '1mOfBNITDbkyBcSwLI0A87bJY5nvNNm4E'
    }


    return (

        <div>
            <h2>Internal Complaints Committee</h2>
            <Typography style={{ backgroundColor: 'Orange', marginBottom: '15px' }}>
                Drop your Complaints online
            </Typography>
            <p className={classes.ARcells}>Internal Complaints Committee (ICC)</p>
            <a style={{ color: 'blue', textDecoration: 'underline' }} href={`https://drive.google.com/uc?id=${getImgData("act_2013.pdf")}`} target="_blank">THIS COMMITTEE IS FORMED BASED ON THE SEXUAL HARASSMENT OF WOMEN AT WORKPLACE (PREVENTION, PROHIBITION & REDRESSAL) ACT, 2013 </a>
            <div style={{ display: 'flex', marginTop: '5px' }}>
                <p style={{ color: 'gray', fontwidth: '5px' }}>  Name of the Cell : </p>
                <p style={{ color: 'green', fontwidth: '5px', marginLeft: '5px' }}> Internal Complaints Committee (ICC)</p>

            </div>
            <p style={{ fontfamily: 'cursive' }}>Year of Establishment: <strong>2013 </strong></p>

            <Typography style={{ color: 'green', fontwidth: '5px', margin: '10px', fontwidth: '10px' }}> Introduction</Typography>
            <Typography>
                KBN College is committed to provide safe academic and working environment to all girl students and its women employees. The college advocates the empowerment of women and has zero tolerance for sexual harassment. As per the guidelines of Supreme Court, UGC, Sexual Harassment of Women at workplace (Prevention, Prohibition &Redressal) Act, 2013, an Internal Complaints Committee (Anti – Sexual Harassment Cell) has been established by the college.
            </Typography>
            <p style={{ color: 'green', fontwidth: '5px', marginLeft: '15px', fontwidth: '10px' }}> Main Objectives:</p>



            <div style={{ display: 'flex', marginTop: '5px' }}>
                <div>
                    <ArrowForwardIosIcon />
                </div>
                <div>
                    To look after the welfare of the women employees and students.
                </div>
            </div>
            <div style={{ display: 'flex', marginTop: '5px' }}>
                <div>
                    <ArrowForwardIosIcon />
                </div>
                <div>
                    To facilitate Redressal of their grievances.
                </div>
            </div>
            <div style={{ display: 'flex', marginTop: '5px' }}>
                <div>
                    <ArrowForwardIosIcon />
                </div>
                <div>
                    To help maintain a harmonious atmosphere at campus and to enable women to pursue their work with dignity and reassurance.                </div>
            </div>

            <Typography style={{ color: 'green', fontwidth: '5px', margin: '15px', fontwidth: '10px' }}> The Role of the Committee:</Typography>



            <div style={{ display: 'flex', marginTop: '5px' }}>
                <div>
                    <ArrowForwardIosIcon />
                </div>
                <div>
                    To act as Inquiry Authority on a complaint of sexual harassment
                </div>
            </div>
            <div style={{ display: 'flex', marginTop: '5px' }}>
                <div>
                    <ArrowForwardIosIcon />
                </div>
                <div>
                    To ensure that complainant and witness are not victimized or discriminated because of their complaint. To take proactive measures towards sensitization of all those.
                </div>
            </div>
            <div style={{ display: 'flex', marginTop: '5px' }}>
                <div>
                    <ArrowForwardIosIcon />
                </div>
                <div>
                    To take appropriate disciplinary action if it is proved, that the offender has indulged in sexual harassment at the workplace.
                </div>
            </div>

            <Typography style={{ color: 'green', fontwidth: '5px', margin: '15px', fontwidth: '10px' }}> Code of conduct for workplace:
            </Typography>
            <Typography style={{ margin: '10px' }}>
                Sexual  harassment is a serious offence, which can destroy human dignity and freedom. In an effort to promote the wellbeing of all women employees at the work place the following code of conduct has been prescribed:
            </Typography>
            <div style={{ display: 'flex', marginTop: '5px' }}>
                <div>
                    <ArrowForwardIosIcon />
                </div>
                <div>
                    It shall be the duty of the employer to prevent or deter the commission of any act of sexual harassment at the workplace
                </div>
            </div>
            <div style={{ display: 'flex', marginTop: '5px' }}>
                <div>
                    <ArrowForwardIosIcon />
                </div>
                <div>
                    Sexual harassment will include such unwelcome sexually determined behaviour by any person either individually or in association with other persons or by any person in authority whether directly or by implication such as:
                </div>
            </div>
            <div style={{ display: 'flex', marginTop: '5px', marginLeft: '30px', padding: '5px' }}>
                <div>
                    <ArrowForwardIosIcon />
                </div>
                <div>
                    Eve – teasing
                </div>
            </div>
            <div style={{ display: 'flex', marginTop: '5px', marginLeft: '30px', padding: '5px' }}>
                <div>
                    <ArrowForwardIosIcon />
                </div>
                <div>
                    Unsavory remark
                </div>
            </div>
            <div style={{ display: 'flex', marginTop: '5px', marginLeft: '30px', padding: '5px' }}>
                <div>
                    <ArrowForwardIosIcon />
                </div>
                <div>
                    Jokes causing or likely to cause awkwardness or embarrassment
                </div>
            </div>
            <div style={{ display: 'flex', marginTop: '5px', marginLeft: '30px', padding: '5px' }}>
                <div>
                    <ArrowForwardIosIcon />
                </div>
                <div>
                    Innuendos and taunts
                </div>
            </div>
            <div style={{ display: 'flex', marginTop: '5px', marginLeft: '30px', padding: '5px' }}>
                <div>
                    <ArrowForwardIosIcon />
                </div>
                <div>
                    Gender based insults or sexiest remark
                </div>
            </div>
            <div style={{ display: 'flex', marginTop: '5px', marginLeft: '30px', padding: '5px' }}>
                <div>
                    <ArrowForwardIosIcon />
                </div>
                <div>
                    Unwelcome sexual overtone in any manner such as over telephone (Obnoxious telephone calls)
                </div>
            </div>
            <div style={{ display: 'flex', marginTop: '5px', marginLeft: '30px', padding: '5px' }}>
                <div>
                    <ArrowForwardIosIcon />
                </div>
                <div>
                    Touching or brushing against any part of the body
                </div>
            </div>
            <div style={{ display: 'flex', marginTop: '5px', marginLeft: '30px', padding: '5px' }}>
                <div>
                    <ArrowForwardIosIcon />
                </div>
                <div>
                    Displaying pornographic or other offensive or derogatory pictures, cartoons, pamphlets or sayings.
                </div>
            </div>
            <div style={{ display: 'flex', marginTop: '5px', marginLeft: '30px', padding: '5px' }}>
                <div>
                    <ArrowForwardIosIcon />
                </div>
                <div>
                    Forcible physical touch or molestation
                </div>
            </div>
            <div style={{ display: 'flex', marginTop: '5px', marginLeft: '30px', padding: '5px' }}>
                <div>
                    <ArrowForwardIosIcon />
                </div>
                <div>
                    Physical confinement against one’s will and any other act likely to violate one’s privacy.
                </div>
            </div>
            <Typography>
                And also includes any act or conduct by a person in authority and belonging to one sex which denies or would deny equal opportunity in pursuit of career development or otherwise making the environment at the workplace. Hostile or intimidating to a person belonging to the other sex, only on the ground of sex.
            </Typography>
            <Typography style={{ color: 'green', fontwidth: '5px', margin: '15px', fontwidth: '10px' }}> Mechanism for Redressal of complaints:
            </Typography>
            <div style={{ display: 'flex', marginTop: '5px' }}>
                <div>
                    <ArrowForwardIosIcon />
                </div>
                <div>
                    Any aggrieved woman may take in writing, a complaint of sexual harassment at workplace to any member of the college.                </div>
            </div>
            <div style={{ display: 'flex', marginTop: '5px' }}>
                <div>
                    <ArrowForwardIosIcon />
                </div>
                <div>
                    If the complainant feels that she cannot disclose her identity for any particular reason the complainant shall address the complaint to the Head of the organization and handover the same in person or in a sealed cover. Upon receipt of such complaint the Principal shall retain the original complaint with himself and send to the complaints committee as gist of the complaint containing all material and relevant details other than the name of the complaint and other details which might disclose the identity of the complaint.
                </div>
            </div>
            <div style={{ display: 'flex', marginTop: '5px' }}>
                <div>
                    <ArrowForwardIosIcon />
                </div>
                <div>
                    The Internal Committee can take steps to settle the matter between her and the respondent through conciliation, at the request of aggrieved woman.
                </div>
            </div>
            <div style={{ display: 'flex', marginTop: '5px' }}>
                <div>
                    <ArrowForwardIosIcon />
                </div>
                <div>
                    The Internal Committee, shall record the settlement so arrived and forward the same to the employer regarding action taken as specified in the recommendation.
                </div>
            </div>
            <div style={{ display: 'flex', marginTop: '5px' }}>
                <div>
                    <ArrowForwardIosIcon />
                </div>
                <div>
                    Where the Internal Committee of the campus arrives at a conclusion that the allegation against the respondent is malicious or the aggrieved women or any other person making the complaint has produced any forged or misleading document, it may recommend to the competent authority, to take action against the woman or the person who has made the complaint.
                </div>
            </div>
            <div style={{ display: 'flex', marginTop: '5px' }}>
                <div>
                    <ArrowForwardIosIcon />
                </div>
                <div>
                    <strong> Disciplinary action: </strong> Where the conduct of an employee amounts to misconduct in employment as defined in the relevant service rules the employer should initiate appropriate disciplinary action in accordance with the relevant rules.                </div>
            </div>
            <div style={{ display: 'flex', marginTop: '5px' }}>
                <div>
                    <ArrowForwardIosIcon />
                </div>
                <div>
                    The committee shall meet as often as may be needed & appropriate.
                </div>
            </div>
            <Typography style={{ color: 'green', fontwidth: '5px', margin: '15px', fontwidth: '10px' }}> Activities of the Cell:
            </Typography>
            <div style={{ display: 'flex', marginTop: '5px' }}>
                <div>
                    <ArrowForwardIosIcon />
                </div>
                <div>
                    <a style={{ color: 'blue' }} href={`https://drive.google.com/uc?id=${getImgData("KARATE.pdf")}`} target="_blank">KARATE COACHING </a>
                </div>
            </div>
            <div style={{ display: 'flex', marginTop: '5px' }}>
                <div>
                    <ArrowForwardIosIcon />
                </div>
                <div>
                    <a style={{ color: 'blue' }} href={`https://drive.google.com/uc?id=${getImgData("1-9.10.2017.pdf")}`} target="_blank">Gender Sensitivity programme by Prof. Ch. Swaroopa Rani, director, Centre for women studies, Acharya Nagarjuna University on 9<sup>th </sup> October 2017. </a>
                </div>
            </div>
            <div style={{ display: 'flex', marginTop: '5px' }}>
                <div>
                    <ArrowForwardIosIcon />
                </div>
                <div>
                    <a style={{ color: 'blue' }} href={`https://drive.google.com/uc?id=${getImgData("2-28.1.17.pdf")}`} target="_blank">A Guest lecture on “The Problems Faced by Women in Modern Society & Their Solutions” in association with AIDWA (All India Democratic Women’s Association) on 28<sup>th </sup> January, 2017. </a>
                </div>
            </div>
            <div style={{ display: 'flex', marginTop: '5px' }}>
                <div>
                    <ArrowForwardIosIcon />
                </div>
                <div>
                    <a style={{ color: 'blue' }} href={`https://drive.google.com/uc?id=${getImgData("3-9.1.2017.pdf")}`} target="_blank">One Day Workshop for the girl students on “Self Defence Techniques” on 9<sup>th </sup> January, 2017. </a>
                </div>
            </div>
            <div style={{ display: 'flex', marginTop: '5px' }}>
                <div>
                    <ArrowForwardIosIcon />
                </div>
                <div>
                    <a style={{ color: 'blue' }} href={`https://drive.google.com/uc?id=${getImgData("4-6.9.2016.pdf")}`} target="_blank">
                        A Guest Lecture on “Exclusion Gender and Impact on Women in India” on 6<sup>th </sup> September 2016. </a>
                </div>
            </div>
            <div style={{ display: 'flex', marginTop: '5px' }}>
                <div>
                    <ArrowForwardIosIcon />
                </div>
                <div>
                    <a style={{ color: 'blue' }} href={`https://drive.google.com/uc?id=${getImgData("5-16.2.2016.pdf")}`} target="_blank">
                        Training Programme on “Health Care” in association with “SHE Presenters” on 16<sup>th </sup> February, 2016.</a>
                </div>
            </div>

            <div style={{ display: 'flex', marginTop: '5px' }}>
                <div>
                    <ArrowForwardIosIcon />
                </div>
                <div>
                    <a style={{ color: 'blue' }} href={`https://drive.google.com/uc?id=${getImgData("6-28.8.2014.pdf")}`} target="_blank">
                        Health Awareness Campaign by Dr. R. Sridevi, MD, Meher Medicare Centre, Vijayawada on 28<sup>th </sup>August, 2014.</a>
                </div>
            </div>
            <div style={{ display: 'flex', marginTop: '5px' }}>
                <div>
                    <ArrowForwardIosIcon />
                </div>
                <div>
                    <a style={{ color: 'blue' }} href={`https://drive.google.com/uc?id=${getImgData("7-20.1.2014.pdf")}`} target="_blank">
                        Programme on “Gender Equity” on 20<sup>th </sup> January 2014 in the memory of the Death of Software engineer Anuhya at Mumbai. </a>
                </div>
            </div>
            <Typography style={{ padding: '10px' }}>
                <strong> List of Members in the Cell: </strong>
            </Typography>





            <TableContainer component={Paper} style={{ marginTop: '15px' }}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead className={classes.tableHead}>
                        <TableCell align="center" style={{ color: "white", }} colSpan={5} >
                            INTERNAL COMPLAINTS COMMITTEE
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


        </div>

    );
};

export default Icc;
