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
import {getRequiredImgs} from '../../Api/index'

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
    createData(3, "Sri Vijayababu Tekkem", "Vice-Principal –Vice-Chairman"),
    createData(4, "Ms. R. Jayamma", "Convenor"),
    createData(5, "Smt. O. Sailaja", "Lecturer in PG Chemistry, Co-Convenor"),
    createData(6, "Dr. G. Krishnaveni", "Head, Dept. of Chemistry – IQAC Coordinator, Advisory Member"),
    createData(7, "Smt. J. Janaki", "Head, Dept. of Hindi, Member"),
    createData(8, "Smt. K. Vanama Devi", "Lecturer in Mathematics, Member"),
    createData(9, "Smt. P. Swathi", "Lecturer in Computer Science, Member"),
    createData(10, "Ms. P.L.N. Sai Laya", "III B.Sc. (MPC), Student Member"),
    createData(11, "Ms. Ch. Charu Hasini", "I M.Sc. (Che), Student Member"),
];

const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
    tableHead: {
        fontWeight: "bold",
        backgroundColor: "darkblue",

    }
});
const UGCWomenStudies = () => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    const [apidata,setApiData] = React.useState([])

    const initialLoad = async() =>{
        let folderId = '1FXkIjHh_aNPHX4qYqHAizmoyoO5Q2977';
        let data = await getRequiredImgs(folderId);
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
            <h2>UGC Women's Studies Center</h2>
            <p>For a long time women in India remained within the four walls of their household. Their dependence on men was total. For the last few decades, the subject of empowerment of women has becoming a burning issue all over the world including India. Many agencies of United Nations have emphasized in their reports that gender issue is to be given utmost priority. Women’s quest for equality with men is a Universal phenomenon. What exists for men is demanded by women.</p>
            <p>They have demanded equality with man in matters of education, employment, marriage, inheritance, politics and recently in the field of religion.</p>
            <p>The management of KBN College in always ready to encourage women in all aspects. In 2005 they started “Forum for Women Empowerment”. The women staff of teaching and non-teaching actively participated in the activities of the forum. It conducts
                different programmes to facilitate the empowerment of women.</p>
            <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                    expandIcon={expanded === 'panel1' ? <RemoveIcon style={{ color: "white" }} /> : <AddIcon style={{ color: "white" }} />}

                    style={{ backgroundColor: "darkblue", color: "white" }}
                >
                    <Typography >View More</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Later the forum was merged with Women’s Studies Centre which was established in the year 2016. Committed to the cause of women empowerment WOMEN'S STUDIES CENTER has emerged as a ground-breaking interdisciplinary body in February, 2016 under the development of women studies in Indian universities and colleges program of UGC. KBN College UGC sponsored women’s study Centre has had a very eventful and significant journey in a short span of I year. The Centre has been conceived as a gadget of social engineering that aims to build a conducive gender centric and gender sensitive eco system for women from all gamut of the society. It strives not only to grill the entire Women’s Studies Centre system of socio – economic- political and cultural subordination of women but also generates critical consciousness about the dominant ideologies of misogyny and patriarchy. In order to achieve this Centre meticulously resorts to training, extension, dissemination and advocacy as its core activities.

                        It deserves a mention here that the centre has been proactively undertaking major activities like extension activities, conducting seminars, workshops to examine the status of women in multi-cultural framework.
                        <h2>AIMS AND OBJECTIVES:</h2>
                        <ul >
                            <li>Propagate gender equality through education.</li>
                            <li>Initiating Geriatric Care.</li>
                            <li>To make the womens translation works available in telugu and vice versa.</li>
                            <li>Generate, strengthen and spread information and knowledge about  women.</li>
                            <li>Establish relationship between women, researchers, activists, NGOS and policy planners.</li>
                            <li>up hold and offer advocacy on issues affecting the social and cultural status of the women.</li>
                            <li>Attain command over the empowerment of women through teaching, research and extension activities.</li>
                        </ul>
                        <h2>THRUST AREAS:</h2>

                        <ul >
                            <li>Vocational and self employement courses for girls</li>
                            <li>Gender equality</li>
                            <li>Gender discrimination &amp; violence</li>
                            <li>Issues related to women rights</li>
                            <li>Women and laws</li>
                        </ul>
                        <h2>UGC - WOMEN’S STUDIES CENTRE</h2>
                        <TableContainer component={Paper}>
                            <Table className={classes.table} aria-label="customized table">
                                <TableHead className={classes.tableHead}>
                                    <TableCell align="center" style={{ color: "white", }} colSpan={5} >
                                        UGC - WOMEN’S STUDIES CENTRE
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
                    </Typography>

                </AccordionDetails>
            </Accordion>
            <h3><li><a href="#" target="_blank">GENDER AUDIT REPORT</a></li></h3>
            <h3><li><a href="#" target="_blank">Free Karate Coaching-A Gender Equity Program</a></li></h3>
            <Accordion square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary
                    expandIcon={expanded === 'panel2' ? <RemoveIcon style={{ color: "white" }} /> : <AddIcon style={{ color: "white" }} />}
                    style={{ backgroundColor: "darkblue", color: "white" }}
                >
                    <Typography >Events</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <h2 >ACADEMIC YEAR 2020-2021</h2>
                        <ul >

                            <li><a href={`https://drive.google.com/uc?id=${getImgData("Women's day REPORT (1).pdf")}`}>International Women’s Day Celebrations was organized by UGC Women’s Studies Centre on 8th March, 2021. Chief Guest: Prof. T. Hymavathi, Registrar, Krishna University, Machilipatnam</a></li>

                            <li><a href={`https://drive.google.com/uc?id=${getImgData("20-21/Non Toxic Gardening Techniques-23.1.2021.pdf")}`} target="_blank">an international Virtual Training
                                Programme on “Non-Toxic Gardening Techniques and Home Waste management”-23.1.2021 </a></li>

                            <li><a href={`https://drive.google.com/uc?id=${getImgData("20-21/1-WHITE RIBBON DAY-25.11.2020.pdf")}`} target="_blank">One Day Webinar on To reduce the horrifying statistics of violence against women on 25th November, 2020 </a></li>

                            <li><a href={`https://drive.google.com/uc?id=${getImgData("NATIONAL CANCER AWARENESS DAY-7.11.2020.pdf")}`} target="_blank">Awareness programme on The National Cancer Awareness Day on 7th November, 2020</a></li>


                            <li><a href={`https://drive.google.com/uc?id=${getImgData("20-21/3-NCW WEBINAR-5.10.2020.pdf")}`} target="_blank">One Day National Webinar
                                On Migrant Women Workers: Issues and Challenges on 5th October, 2020</a></li>

                            <li><a href={`https://drive.google.com/uc?id=${getImgData("ONE DAY WEBINAR - WOMEN EMPOWERMENT-25.8.pdf")}`}>One Day Webinar on Women Nutrition in Immune Respone against COVID-19 on 25th August, 2020.</a></li>

                            <li><a href={`https://drive.google.com/uc?id=${getImgData("WEBINAR%20ON%20COVID%20PANDEMIC%20-%2015TH%20JULY,%202020.pdf")}`}>Webinar on COVID-19 Pandemic: Clinical Advice and Future Considerations on 15th July, 2020</a></li>
                        </ul>

                        <h2 >ACADEMIC YEAR 2019-2020</h2>
                        <ul >
                            <li><a href={`https://drive.google.com/uc?id=${getImgData("1-INTERNATIONAL%20WOMENS%20DAY%20-%20KBN%20WOEMNS%20WEEK.pdf")}`}>International Women’s Day-2020 - KBN Women’s Week from 2nd March to 8th March, 2020 </a></li>
                            <li><a href={`https://drive.google.com/uc?id=${getImgData("2-SAM%20WORKSHOP%20-%203%20TO%209%20FEBRUARY,%202020.pdf")}`}>SAM Workshop from 3rd – 9th February, 2020</a></li>

                            <li><a href={`https://drive.google.com/uc?id=${getImgData("3-KISHORI%20VIKASAM%20PROGRAMME%20-%2024.1.2020.pdf")}`}>Kishore Vikasam Programme on 24th January, 2020</a></li>
                            <li><a href={`https://drive.google.com/uc?id=${getImgData("1920/ICSSR - SRC SPONSORED NATIONAL SEMINAR ON 27&28.12.2019.pdf")}`} target="_blank">ICSSR (SRC) Sponsored Two – Day National Seminar on “Women: The Key to Ensure Food Security” 27th & 28th December, 2019 Organized by Women Empowerment Cell</a> </li>
                            <li><a href={`https://drive.google.com/uc?id=${getImgData("20-21/DISHA ACT PROGRAMME.pdf")}`} target="_blank">Awareness Programme on ‘Disha Act-19' ON 2<sup>nd</sup> December 2020</a></li>
                            <li><a href={`https://drive.google.com/uc?id=${getImgData("1-30.10.2019.pdf")}`} target="_blank">Programme on Cancer Awareness and Screening to all teaching and non-teaching women staff on 30th October, 2019</a></li>

                            <li><a href={`https://drive.google.com/uc?id=${getImgData("2-1.10.2019.pdf")}`} target="_blank">Awareness programme on Women’s Health Issues on 1st October, 2019.</a></li>

                            <li><a href={`https://drive.google.com/uc?id=${getImgData("1920/WOMEN ENTREPRENEURSHIP-16-31.9.2020.pdf")}`} target="_blank">Women Entrepreneurship Development Programme from 16th to 31st September, 2019.</a></li>

                            <li><a href={`https://drive.google.com/uc?id=${getImgData("4-6.8.2019.pdf")}`} target="_blank">International Wonder Book of Records for formation of Logo of Orphan Free India on 6th August, 2019.</a></li>

                            <li><a href={`https://drive.google.com/uc?id=${getImgData("1920/3-2019-20.pdf")}`} target="_blank">Seminar on Orphan Free India on 1st August, 2019.</a></li>

                            <li><a href={`https://drive.google.com/uc?id=${getImgData("6-17.7.2019.pdf")}`} target="_blank">Health Screening Programme to all intermediate students from 8th to 17th July, 2019 & 22nd & 24th July, 2019.</a></li>

                            <li><a href={`https://drive.google.com/uc?id=${getImgData("7-26.6.2019.pdf")}`} target="_blank">International day of Drug Abuse and Illicit Trafficking on 26th June, 2019.</a></li>




                        </ul>

                        <h2 >ACADEMIC YEAR 2018-2019</h2>
                        <ul >
                            <li><a href={`https://drive.google.com/uc?id=${getImgData("15-2018-19.pdf")}`} target="_blank">Awareness Programme on Cheruva APP on 26-04-2019</a></li>

                            <li><a href={`https://drive.google.com/uc?id=${getImgData("14-2018-19.pdf")}`} target="_blank">International Women’s Day Celebrations on 8th March 2019</a></li>


                            <li><a href={`https://drive.google.com/uc?id=${getImgData("13-2018-19.pdf")}`} target="_blank">Awareness Programme on Women Health-Nutrition Food 27-02-2019.</a></li>

                            <li><a href={`https://drive.google.com/uc?id=${getImgData("12-2018-19.pdf")}`} target="_blank">Orientation Training to Peer Group Trainers 14th & 15th February, 2019.</a></li>

                            <li><a href={`https://drive.google.com/uc?id=${getImgData("11-2018-19.pdf")}`} target="_blank">Rangoli competitations 2019.</a></li>

                            <li><a href={`https://drive.google.com/uc?id=${getImgData("1819/1-2018-19.pdf")}`} target="_blank">Seminar on Sexual Harassment of women at work Place on 5<sup>th</sup> December, 2018.</a></li>
                            <li><a href={`https://drive.google.com/uc?id=${getImgData("1819/2-2018-19.pdf")}`} target="_blank">Interactive session on &ldquo;Women rights&rdquo; on 27th October, 2018.</a></li>
                            <li><a href={`https://drive.google.com/uc?id=${getImgData("1819/3-2018-19.pdf")}`} target="_blank">Awareness programme on &ldquo;Breast cancer&rdquo; on 24th October, 2018.</a></li>
                            <li><a href={`https://drive.google.com/uc?id=${getImgData("1819/4-2018-19.pdf")}`} target="_blank">International Day of Girl Child on 11th October, 2018.</a></li>
                            <li><a href={`https://drive.google.com/uc?id=${getImgData("1819/5-2018-19.pdf")}`} target="_blank">Awareness programme on &ldquo;menstrual problems-Health and Hygiene on 22<sup>nd</sup> September, 2018.</a></li>
                            <li><a href={`https://drive.google.com/uc?id=${getImgData("1819/6-2018-19.pdf")}`} target="_blank">Awareness programme on &ldquo;Cosmetics&rdquo; by Rexona confidence Academy on 17<sup>th</sup> September, 2018.</a></li>
                            <li><a href={`https://drive.google.com/uc?id=${getImgData("1819/7-2018-19.pdf")}`} target="_blank">Awareness programme on &ldquo;Depression in college students on 12<sup>th</sup> September, 2018.</a></li>
                            <li><a href={`https://drive.google.com/uc?id=${getImgData("1819/8-2018-19.pdf")}`} target="_blank">Skill development programme on <strong>Employability Skills</strong> from 6<sup>th</sup> August 2018 to 18<sup>th</sup> August, 2018.</a></li>
                            <li><a href={`https://drive.google.com/uc?id=${getImgData("1819/9-2018-19.pdf")}`} target="_blank">Workshop on <strong>Women Entrepreneurship</strong> on 26<sup>th</sup> July, 2018.</a></li>
                            <li><a href={`https://drive.google.com/uc?id=${getImgData("1819/10-2018-19.pdf")}`} target="_blank">Invited talk on <strong>Gynec Problems </strong>on 23<sup>rd</sup> July 2018.</a></li>
                        </ul>

                        <h2 >ACADEMIC YEAR 2017-2018</h2>
                        <ul>
                            <li><a href="attachments/FREE%20SUMMER%20COACHING%20CAMP%20-%2017-18.pdf" target="_blank">FREE SUMMER COACHING CAMP FOR WOMEN</a></li>
                            <li><a href={`https://drive.google.com/uc?id=${getImgData("Women'sDay_2018.pdf")}`} target="_blank">International Women's Day (March 8)</a></li>
                            <li><a href={`https://drive.google.com/uc?id=${getImgData("1-19.2.2018.pdf")}`} target="_blank">Free health check-up for women at Ambhapuram Village on 19th Feb 2018. </a></li>
                            <li><a href={`https://drive.google.com/uc?id=${getImgData("2-8.1.2018.pdf")}`} target="_blank">“Rangoli Competitions” on 8th January 2018 to all UG Girl students.  </a></li>
                            <li><a href={`https://drive.google.com/uc?id=${getImgData("3-15.12.2017.pdf")}`} target="_blank">Invite talk on “భారతీయ యువత – పాశ్చాత్య పోకడలు – మన కర్తవ్యం" By Ms. Nandini      Nallaghatla, Script Writer, Doordarshan on 15th December 2017. </a></li>
                            <li><a href={`https://drive.google.com/uc?id=${getImgData("4-11-13.12.2017.pdf")}`} target="_blank">Three Day workshop on “Fabric Painting” to Hindu High school 7th, 8th and 9th class students from 11th – 13th December 2017. </a></li>
                            <li><a href={`https://drive.google.com/uc?id=${getImgData("5-21-23.11.2017.pdf")}`} target="_blank">Three Day workshop on “Fabric Painting” to 1st B.Sc students from 21st-23rd November 2017. </a></li>
                            <li><a href={`https://drive.google.com/uc?id=${getImgData("6-21.10.2017.pdf")}`} target="_blank">Awareness programme on “Breast Cancer”  by Dr. Rajesh, Oncologist, Nagarjuna Hospitals, Vijayawada on 21st October 2017. </a></li>
                            <li><a href={`https://drive.google.com/uc?id=${getImgData("7-9.10.2017.pdf")}`} target="_blank">
                                Gender Sensitivity programme by Prof. Ch. Swaroopa Rani, director, Centre for women studies, ANU on 9th October 2017. </a></li>
                            <li><a href={`https://drive.google.com/uc?id=${getImgData("8-26.7.2017.pdf")}`} target="_blank">Gender equity programme on Women Entrepreneurship” by Yamini Sadineni, president South India non-Government Charities Trust to all on 26th July 2017. </a></li>
                            <li><a href="attachments/iqac/ns/6-21&22.7.2017.pdf" target="_blank">A Two-Day UGC sponsored National Seminar on “Women Empowerment: Media, Cinema & Theatre – Prospects & Challenges” on 21st & 22nd July, 2017
                            </a></li>
                        </ul>

                        <h2 >ACADEMIC YEAR 2016-2017</h2>
                        <ul >
                            <li><a href={`https://drive.google.com/uc?id=${getImgData("1-Free%20Summer%20Coaching%20Camp%202016-17.pdf")}`} target="_blank">FREE SUMMER COACHING CAMP FOR WOMEN </a></li>
                            <li><a href='attachments/iqac/ns/8-27.3.2017.pdf' target="_blank">UGC Sponsored One Day National Seminar on “THE SCIENCE BEHIND AGEING: CAN SCIENCE MODULATE THE PROCESS?” on 27th March, 2017. </a></li>
                            <li><a href={`https://drive.google.com/uc?id=${getImgData("3-23.3.17.pdf")}`} target="_blank">A Radio programme was conducted with RED FM Radio on the topic Social Status of Women in the Society on 23rd March, 2017. </a></li>
                            <li><a href={`https://drive.google.com/uc?id=${getImgData("4-8.3.2017.pdf")}`} target="_blank">International Women’s Day on 8th March, 2017. </a></li>
                            <li><a href={`https://drive.google.com/uc?id=${getImgData("5-28.1.17.pdf")}`} target="_blank">A Guest lecture on “The Problems Faced by Women in Modern Society & Their Solutions” in association with AIDWA (All India Democratic Women’s Association) on 28th January, 2017.
                            </a></li>
                            <li><a href={`https://drive.google.com/uc?id=${getImgData("6-20.1.2017.pdf")}`} target="_blank">Forum for Women Empowerment selected the best girl speaker, Manasa, I MPC & made a CD of her speech and the CD was sent to SRR & CVR Govt. Degree College on 20th January, 2017.
                            </a></li>
                            <li><a href={`https://drive.google.com/uc?id=${getImgData("7-10.1.2017.pdf")}`} target="_blank">“Rangoli Competitions” for girl students ion 10th January, 2017. </a></li>
                            <li><a href={`https://drive.google.com/uc?id=${getImgData("8-9.1.2017.pdf")}`} target="_blank">One Day Workshop for the girl students on “Self Defence Techniques” on 9th January, 2017. </a></li>
                            <li><a href={`https://drive.google.com/uc?id=${getImgData("")}`} target="_blank">Counselling Programme to Degree Girls students on 31st December, 2016. </a></li>
                            <li><a href={`https://drive.google.com/uc?id=${getImgData("10-18.11.2016.pdf")}`} target="_blank">One Day Workshop, “Junk Jewellery Design Course” Organized by Samana Institute of Design Studies by AWESOME (Association of Women Entrepreneurs Sharing of Mutual Empowerment) on 18th November 2016. </a></li>
                            <li><a href={`https://drive.google.com/uc?id=${getImgData("11-6.9.2016.pdf")}`} target="_blank">A Guest Lecture on “Exclusion Gender and Impact on Women in India” on 6th September 2016.</a></li>
                        </ul>

                        <h2 >ACADEMIC YEAR 2015-2016</h2>
                        <ul >

                            <li><a href={`https://drive.google.com/uc?id=${getImgData("1-Summer%20coachingcamp.pdf")}`} target="_blank">Organized a “Free Summer Coaching Camp for the Women” from 30th March, 2016 to 6th May, 2016.
                            </a></li>
                            <li><a href={`https://drive.google.com/uc?id=${getImgData("")}`} target="_blank">Conducted a seminar by Smt. Shobha Rani, Member of ALEAP on “Jute Making, Garment making and Fashion Designing” on 12th March, 2016.
                            </a></li>
                            <li><a href={`https://drive.google.com/uc?id=${getImgData("3-8.3.2016.pdf")}`} target="_blank">Celebrated “International Women’s Day” on 8th March, 2016. Chief Guest: Dr. S. Sasikala, Former Principal, KBN College, Vijayawada.
                            </a></li>
                            <li><a href={`https://drive.google.com/uc?id=${getImgData("4-16.2.2016.pdf")}`} target="_blank">	Training Programme on “Health Care” by  SHE Presenters on 16th February, 2016.
                            </a></li>
                            <li><a href={`https://drive.google.com/uc?id=${getImgData("5-29&30.1.2016.pdf")}`} target="_blank">Organized a Two Day Hands on Training Programme on “Tips for Healthy Look” by Smt. K. Kavitha, Beautician from 29th to 30th January, 2016.
                            </a></li>
                            <li><a href={`https://drive.google.com/uc?id=${getImgData("")}`} target="_blank">Organized a Seminar on “Obstacles in the Development of Women and Enlightening the Students of Health Problems”  by Smt. K. Swaroopa Rani, AIDWA State President, On 18th November, 2015 </a></li>
                            <li><a href={`https://drive.google.com/uc?id=${getImgData("7-16.11.2015.pdf")}`} target="_blank">Essay Writing Competition on the Topic “Voter’s Registration – Difficulties & Solutions” on 16th November, 2015.</a></li>

                        </ul>

                        <h2 >ACADEMIC YEAR 2014-2015</h2>
                        <ul >
                            <li><a href={`https://drive.google.com/uc?id=${getImgData("1-FREE%20SUMMER%20COACHING%20CAMP.pdf")}`} target="_blank">FREE SUMMER COACHING CAMP on 30th March to 6th May 2015.</a></li>
                            <li><a href={`https://drive.google.com/uc?id=${getImgData("2-8.3.2015.pdf")}`} target="_blank">INTERNATIONAL WOMENS DAY Celebrations on 8th March, 2015.</a></li>
                            <li><a href={`https://drive.google.com/uc?id=${getImgData("3-5.1.2015.pdf")}`} target="_blank">RANGOLI competition in view of Sankranthi Celebrations on 5th January 2015.</a></li>
                            <li><a href={`https://drive.google.com/uc?id=${getImgData("4-20.10.2014.pdf")}`} target="_blank">An Awareness Programme on “Breast Cancer & its Prevention” by Dr. N. Subbarao, Oncologist in association with ROOTS health association on 20th October 2014.</a></li>
                            <li><a href={`https://drive.google.com/uc?id=${getImgData("5-28.8.2014.pdf")}`} target="_blank">Female Health Awareness Campaign by Dr. R. Sridevi, MD, Meher Medicare Centre, Vijayawada on 28th August, 2014.</a></li>
                        </ul>

                        <h2 >ACADEMIC YEAR 2013-2014</h2>
                        <ul >
                            <li><a href={`https://drive.google.com/uc?id=${getImgData("1-Free%20summer%20coaching%20camp.pdf")}`} target="_blank">Free Summer Coaching Camp from 4th April – 16th May, 2014.</a></li>
                            <li><a href={`https://drive.google.com/uc?id=${getImgData("2-8.3.2014.pdf")}`} target="_blank">Celebrated International Women’s Day on 8th March, 2014. On this occasion a Rally on the Road for the Education & Equality of the Women in the Society was conducted with girl students & women lecturers.</a></li>
                            <li><a href={`https://drive.google.com/uc?id=${getImgData("3-25.2.2014.pdf")}`} target="_blank">Guest Lecture on “Fashion Technology” by Samana Institute of Fashion Technology on 25th February, 2014.</a></li>
                            <li><a href={`https://drive.google.com/uc?id=${getImgData("4-18.2.2014.pdf")}`} target="_blank">General Counselling on Dress Code, Behaviour, Mannerism & Health by Dr. B. Raja Rajeswari, Convenor, Smt. V. Subhashini, Smt. A. Durga & Smt. PB Sandhya Sri, Members of Forum for Women Empowerment was conducted on 18th February, 2014 for Girls students of KBN College.</a></li>
                            <li><a href={`https://drive.google.com/uc?id=${getImgData("5-20.1.2014.pdf")}`} target="_blank">	A counseling session for girl students was conducted by the Forum for Women Empowerment on 20th January 2014 in the memory of the Death of Software engineer Anuhya at Mumbai.</a></li>
                            <li><a href={`https://drive.google.com/uc?id=${getImgData("6-1-7.8.2013.pdf")}`} target="_blank">Celebrated “Breast Feeding Week” from 1st – 7th August, 2013 in association with Indian Association of Pediatrics. On this occasion Essay writing competition was conducted for girl students on “Innovative modes of spreading awareness about benefits of BREAST FEEDING in the public”.
                            </a></li>
                        </ul>

                        <h2 >ACADEMIC YEAR 2012-2013</h2>
                        <ul >
                            <li><a href={`https://drive.google.com/uc?id=${getImgData("1-Summer%20Coaching%20Camp.pdf")}`} target="_blank">Free Summer Coaching Camp from 2nd April 2013 to 16th May, 2013.</a></li>
                            <li><a href={`https://drive.google.com/uc?id=${getImgData("2-21.2.13.pdf")}`} target="_blank">In Collaboration with the Department of Commerce Management, the Forum for Women Empowerment organized a 5-day UGC sponsored work shop on “Sensitivity/Awareness/Motivation” under UGC’s capacity building of women managers from 21st February – 26th February, 2013.</a></li>
                            <li><a href={`https://drive.google.com/uc?id=${getImgData("")}`} target="_blank">A Rally was organized by all the female students under Forum for Women Empowerment to protest against the Gang Rape of Nirbhaya incident, Delhi on 20th January, 2013.</a></li>
                            <li><a href={`https://drive.google.com/uc?id=${getImgData("4-8.1.2013.pdf")}`} target="_blank">Rangoli competitions in view of Sankranthi celebrations for female students on 8th January, 2013.</a></li>

                            <li><a href={`https://drive.google.com/uc?id=${getImgData("5-28.9.2012.pdf")}`} target="_blank">A Guest Lecture on “Gynecologic Problems” by Dr. R. Revathi, Asso. Prof. Siddhartha Medical College was organized on 29th September, 2012
                            </a></li>

                        </ul>

                    </Typography>

                </AccordionDetails>
            </Accordion>
            <br />
            <Accordion square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary
                    expandIcon={expanded === 'panel3' ? <RemoveIcon style={{ color: "white" }} /> : <AddIcon style={{ color: "white" }} />}
                    style={{ backgroundColor: "darkblue", color: "white" }}
                >
                    <Typography >Vending Machine</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <h2 >FlashMob on the Occasion of International Day for the preservation of ozone layer on 16-September-2019</h2>
                        <iframe width="100%" height="262px" src="https://www.youtube.com/embed/tQTmyq9MTBo" frameborder="0" allowfullscreen></iframe>
                    </Typography>

                </AccordionDetails>
            </Accordion>

        </div>

    );
};

export default UGCWomenStudies;



