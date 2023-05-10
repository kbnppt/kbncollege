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

const TelAchivements = () => {
    // const classes = useStyles();

    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <div>
            <div>
                <h3>staff</h3>
                <Accordion square expanded={expanded === 'panel0'} onChange={handleChange('panel0')}>
                    <AccordionSummary
                        expandIcon={expanded === 'panel0' ? <RemoveIcon style={{ color: "white" }} /> : <AddIcon style={{ color: "white" }} />}
                        style={{ backgroundColor: "darkblue", color: "white" }}
                    >
                        <Typography >Dr. JV Chalapathi Rao</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Box>
                            <h2 style={{ textDecoration: "underline" }}>ACADEMIC YEAR 2019-2020</h2>
                            <ul>
                                <li>Presented a Paper entitled “మానవత్వ ప్రభోదంలో నాటకాల పాత్ర” in the Two-Day International Seminar on “Social, Ethical and Cultural Values Depicted in Drama” organized by Sri Y.N. College (autonomous), Naraspur on 13th & 14th December, 2019.</li>
                                <li>Acted as Judge for Elocution competitions in Amaravati Balostavam – 2019 at PSCMR College of Engineering & Technology, Vijayawada on 7th December, 2019.</li>
                                <li>Acted as Judge for Traditional Dress Competitions organized by Department of Library Science & Information, KBN College, Vijayawada in view of National Library Week Celebrations from 14th– 19th November, 2019.</li>
                                <li>Acted as Judge for Essay Writing Competitions organized by Rotary Club at Chitturi Public School, Vijayawada on 13th September, 2019.</li>
                                <li>Dr. JV Chalapathi Rao, felicitated in Literary Conference organized by Vijayawada Exhibition Society at PWD Grounds, Vijayawada on 7th May, 2019.</li>
                                <li>Attended the Three – Day Faculty Development Programme on “Innovative Pedagogy and Effective Teaching” organized by IQAC, KBN College, Vijayawada from 30th May to 1st June, 2019.</li>
                                <li>Acted as Guest of Honour for Literary Conference organized by Sree Sarada Sravanthi Saahitya Samskruthika Samithi at Patamata on 14th July, 2019.</li>
                                <li>BOS member for JMJ College, Tenali – 7th September, 2019 </li>
                                <li>Acted as Judge for Essay Writing Competitions organized IDWA Association at KBN College, Vijayawada on 12th September, 2019</li>
                                <li>Acted as Judge for Essay Writing Competitions organized by Rotary Club at Chitturi Public School, Vijayawada on 13th September, 2019.</li>
                            </ul>
                            <h2 style={{ textDecoration: "underline" }}>Awards / Recognitions:</h2>
                            <ul>
                                <li>Participated in the “Telugu Maha Sabalu” organised by AP Writers Association on 6th & 7th January, 2019.</li>
                                <li>Participated in “Jnanabheri Progrmmae” organised by Government of AP, at Indira Gandhi Municipal Stadium, Vijayawada on 20th September, 2018.</li>
                                <li>Participated in the National Workshop on “Self- Realisation for Blissful Life and Harmonious Relationships” organised by Value Education Cell, KBN College, Vijayawada on 30th June, 2018.</li>
                                <li>Participated in FDP Programme organised by IQAC Department, KBN College, Vijayawada on 06th & 07th June, 2018.</li>
                                <li>Received a Best Teacher Award by Prakhya Vignanaparishad (Local Self Organization) award presented by Prof. V. Venkaiah, Krishna University Vice Chancellor on 5th Sep, 2012.</li>
                                <li>Acted as a Guest of Honour at Dalawai Subbai Municipal Corporation School, Vijayawada on the occasion of “World Mother Language Day” on 21st February, 2018.</li>
                                <li>Acted as a Resource Person for delivering a Guest Lecture on the occasion of “MAATRU BHASHA DINOSTNAM” organized by M.S.R ENGLISH MEDIUM School, Vijayawada on 29th August, 2017.</li>
                                <li>Acted as a Resource Person for delivering a speech on “Yuvatha – Saahithyam” on 8th September, 2016. Organised by Saahithi Mandali, Vuyyuru, Krishna Dist., A.P.</li>
                                <li>Participated in Bhuvana Vijaya Sabha as Role of Tenali Ramakrishna in Krishna Pushkara Mahostavalu at Sanghama Ghat, Vijayawada organized by AP State Government Literary & Cultural Organization on 18th August 2016.</li>

                            </ul>
                            <h2 style={{ textDecoration: "underline" }}>Any Other:</h2>
                            <ul>


                                <li>Delivered a guest lecture on “Maha Bharatha Visista” organised by Nalanda Degree College, Vijayawada, on 27th July, 2018.</li>
                                <li>Acted as a chief guest on the occasion of “Mathru Baasha Dinostavam” at Gowtham High School, Vijayawada on 29th August, 2018.</li>
                                <li>Acted as “Pruchaka” for Astavadanam Programme on 28th September, 2018 organised by PB Siddhartha College of Arts & Science, Vijayawada.</li>
                                <li>Acted as judge for Telugu Essay Writing & Debate Competitions organised by PRAGNA Debating & Quiz Club, KBN College, Vijayawada on 30th November, 2018.</li>
                                <li>Delivered a speech on “Teachers Day on “Value of Guru” on 5th September, 2015 at St. John’s Public School, Gunadala, Vijayawada.</li>
                                <li>Delivered a speech on “Importance of school studies” on 20th February, 2016. Organised by Siddhartha English Medium School, Vijayawada.</li>
                                <li>J.V. Chalapathi Rao delivered a speech on “Indian Culture and Tradition” on 24th March, 2016. Organised by St. John’s Public School, Vijayawada in Annual Day Celebrations.</li>
                                <li>Delivered a Guest Lecture on “Manasu Ninduga – Telugu Panduga” on 27th February, 2015. Organised by Annapurna VMC School Vijayawada.</li>
                            </ul>

                            <ul>
                                <h2 style={{ tectDecoration: "underline" }}>Publications:</h2>
                                <table className="table table-bordered">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <p><strong>TITLE OF THE PAPER</strong></p>
                                            </td>
                                            <td>
                                                <p><strong>NAME OF THE JOURNAL</strong></p>
                                            </td>
                                            <td>
                                                <p><strong>YEAR OF PUBLICATION</strong></p>
                                            </td>
                                            <td>
                                                <p><strong>ISSN NO</strong></p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <p>Humanism and modern Indian thought</p>
                                            </td>
                                            <td>
                                                <p>Global journal for research</p>
                                                <p>Analysis.</p>
                                            </td>
                                            <td>
                                                <p>2017-2018</p>
                                            </td>
                                            <td>
                                                <p>2277-8160</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <p>GST &ndash; its implications for the industry</p>
                                            </td>
                                            <td>
                                                <p>Economic chellenge</p>
                                            </td>
                                            <td>
                                                <p>2017-2018</p>
                                            </td>
                                            <td>
                                                <p>0975-1351</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <p>E- Retailing in India</p>
                                            </td>
                                            <td>
                                                <p>Journal of advanced research in commerce and management studies.</p>
                                            </td>
                                            <td>
                                                <p>2016-2017</p>
                                            </td>
                                            <td>
                                                <p>2394-837X</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <p>Achieving sustainable</p>
                                                <p>Development through</p>
                                                <p>Co-operate social</p>
                                                <p>Responsibility.</p>
                                            </td>
                                            <td>
                                                <p>International journal of</p>
                                                <p>Multi disciplinary research.</p>
                                            </td>
                                            <td>
                                                <p>2015-2016</p>
                                            </td>
                                            <td>
                                                <p>2395-7964</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <p>Denotation of glossary</p>
                                                <p>Sports.</p>
                                            </td>
                                            <td>
                                                <p>International journal of law, education, social and sports studies</p>
                                            </td>
                                            <td>
                                                <p>2014-2015</p>
                                            </td>
                                            <td>
                                                <p>2394-9724</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <p>Tilak Vachana Kavitvamu Samajika Sandesamu</p>
                                            </td>
                                            <td>
                                                <p>ISBN to be published</p>
                                            </td>
                                            <td>
                                                <p>&nbsp;</p>
                                            </td>
                                            <td>
                                                <p>&nbsp;</p>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </ul>
                            <h2 style={{ textDecoration: "underline" }}>Participation:</h2>
                            <ul>

                                <h3 style={{ textDecoration: "underline" }}>2017-18:</h3>
                                <li>Attended to the “World Telugu conference” at Hyderabad on 17th December 2017.</li>
                            </ul>

                            <ul>
                                <h3 style={{ textDecoration: "underline" }}>2016-17:</h3>
                                <li>Participated as a Pruchaka in Dattapadhi by Dr. Garikapati Narasimha Rao on February 27th to March 1st of 2017 at Siva Ramakrishna Kshetram, Satyanarayana Puram, Vijayawada.</li>
                                <li>Participated in Two Day International conference on “Smart Village – Smart India” on 2nd & 3rd December, 2016. Organised by KBN College, Vijayawada.</li>
                                <li>Participated in National Seminar on “e-Tailing in India” on 25th & 26th November, 2016. Organised by KBN College, Vijayawada.</li>
                                <li>Participated in the Rally on Gandhiji Sadhbhavana Yatra from KBN College to Gandhi Hill on 2nd October, 2016.</li>
                                <li>Participated in the UGC Funded One Day National Workshop on “Research and Innovations: Issues and Challenges” NWRIIC – 2016 organized by IQAC, KBN College, Vijayawada held on 22nd October 2016.</li>
                                <li>Participated in National Seminar on “Nadhi Praasastyam – Paryavarana Chaitanyam” on 4th August, 2016. Organised by S.D.M.Siddhartha Women’s College, Vijayawada.</li>

                            </ul>

                            <ul>
                                <h2 style={{ textDecoration: "underline" }} >2015-16:</h2>
                                <li>Attended Two Day “Faculty Development Programme” on 2nd & 3rd June, 2015. Resource Persons Sri Gampa Nageswara Rao &Jagadish Upadhyaya. Organised by KBN College, Vijayawada.</li>
                            </ul>

                            <ul>
                                <h2 style={{ textDecoration: "underline" }} >2014-15:</h2>
                                <li>Participated in UGC – International Seminar on “Denotation of Glossary Sports” – 12th & 13th of March, 2015. Organised by KBN College, Vijayawada</li>
                                <li>Participated in UGC National Seminar on “Daivamichina Bharya (NOVEL) – Saamaajika Spruha” .On 23rd & 24th December, 2014.</li>
                                <li>Participated in International Seminar on “Women Entrepreneurship – A Global Perspective (INSWEG -2014). On 6th & 7th August, 2014.</li>

                            </ul>

                            <ul>
                                <h2 style={{ textDecoration: "underline" }}>2013-14:</h2>
                                <li>Participated in National Seminar on “Telugu Saahityam Lo - Stree Vaadham” -18th February, 2014. Conducted by SDM Siddhartha Women’s College, Vijayawada.</li>
                                <li>Participated in UGC National Seminar on “Telugu Saangika Natakalu – Samajika Chaitanyam” – 2013. Conducted by JMJ College, Tenali.</li>
                                <li>Attended to Faculty Development Programme on “Human Values” on 17th August 2013. Resource Person Sri Mallapragada Srimannarayana Murthy. Conducted by K. B. N. College, Vijayawada</li>
                            </ul>

                            <ul>
                                <h2 style={{ textDecoration: "underline" }}>2012-13:</h2>
                                <li>Participated in one day National Seminar on “Telugu Katha – Aavirbhava Vikaasamu” – 24th February, 2012 conducted by S.D.M. Siddhartha Women’s College, Vijayawada</li>
                                <li> Participated in National Seminar on “Telugu Baasha Bodhanalo Naveena Paddatulu” – 5th & 6th of January 2012.Conducted by S.R.S.V. College of Education, Vijayawada.</li>
                            </ul>
                            <h2 style={{ textDecoration: "underline" }}>As BOS Member:</h2>
                            <ul>

                                <li>SDMSM Kalasala (A), Vijayawada</li>
                                <li>JMJ College, Tenali</li>
                            </ul>
                            <div >
                                <img src='http://www.kbncollege.ac.in/images/gifimages/jvcrach.gif' alt='gif-img' style={{ border: "1px solid red", height: "500px", width: "500px" }} />
                            </div>
                        </Box>

                    </AccordionDetails>
                </Accordion>
                <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary
                        expandIcon={expanded === 'panel1' ? <RemoveIcon style={{ color: "white" }} /> : <AddIcon style={{ color: "white" }} />}
                        style={{ backgroundColor: "darkblue", color: "white" }}
                    >
                        <Typography >S.Sivaiah Naik</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Box>
                            <div>
                                <h2 style={{ textDecoration: "underline" }}>ACADEMIC YEAR 2019-2020:</h2>
                                <ul>
                                    <li>Presented a Paper entitled “చలం గారి విడాకులు నాటకం విశ్లేషణ” in the Two-Day International Seminar on “Social, Ethical and Cultural Values Depicted in Drama” organized by Sri Y.N. College (autonomous), Naraspur on 13th & 14th December, 2019.</li>
                                    <li>Acted as Judge for Elocution competitions in Amaravati Balostavam – 2019 at PSCMR College of Engineering & Technology, Vijayawada on 7th December, 2019.</li>
                                    <li>Acted as Judge for Traditional Dress Competitions organized by Department of Library Science & Information, KBN College, Vijayawada in view of National Library Week Celebrations from 14th – 19th November, 2019.</li>
                                    <li>Attended the Three – Day Faculty Development Programme on “Innovative Pedagogy and Effective Teaching” organized by IQAC, KBN College, Vijayawada from 30th May to 1st June, 2019.</li>
                                    <li>Acted as Judge for Essay Writing Competitions organized IDWA Association at KBN College, Vijayawada on 12th September, 2019.</li>
                                </ul>
                                <h2 style={{ textDecoration: "underline" }}>AnyOther:</h2>
                                <ul>
                                    <li>Acted as judge for Telugu Essay Writing & Debate Competitions organised by PRAGNA Debating & Quiz Club, KBN College, Vijayawada on 30th November, 2018.</li>
                                    <li>Participated in “Jnanabheri Progrmmae” organised by Government of AP, at Indira Gandhi Municipal Stadium, Vijayawada on 20th September, 2018.</li>
                                    <li>Participated in FDP Programme organised by IQAC Department, KBN College, Vijayawada on 06th & 07th June, 2018</li>
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
                        <Typography >Dr. M. Reddemma</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Box>
                            <div>
                                <h2 style={{ textDecoration: "underline" }}>ACADEMIC YEAR 2019-2020:</h2>
                                <ul>
                                    <li>Attended the Three – Day Faculty Development Programme on “Innovative Pedagogy and Effective Teaching” organized by IQAC, KBN College, Vijayawada from 30th May to 1st June, 2019.</li>
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
                        <Typography >Y. Ramesh</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Box>
                            <h2 style={{ textDecoration: "underline" }}>ACADEMIC YEAR 2019-2020:</h2>
                            <ul>
                                <li>Acted as Judge for Essay Writing Competitions in Amaravati Balostavam – 2019 at PSCMR College of Engineering & Technology, Vijayawada on 6thDecember,2019.</li>
                                <li>Attended the Three – Day Faculty Development Programme on “Innovative Pedagogy and Effective Teaching” organized by IQAC, KBN College, Vijayawada from 30th May to 1st June, 2019.</li>
                            </ul>
                        </Box>
                    </AccordionDetails>
                </Accordion>

                <div>
                    <h1>Students</h1>
                    <ul>
                        <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href='https://drive.google.com/uc?id=1knldJSezncIBHencKhYFgF2sFkZ3m1mF' target='__blank'>STUDENT ACHIVEMENTS(2018-2019)</a></li>
                        <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href='https://drive.google.com/uc?id=19D2gWc3SE1Pm7zKHY_vWVfKZN2anpk77'>STUDENT ACHIVEMENTS(2017-2018)</a></li>
                        <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href='https://drive.google.com/uc?id=1WlAN07SDBbseFgHl8Nz6c5YT7XcSDQtX' target='__blank'>STUDENT ACHIVEMENTS(2016-2017)</a></li>
                        <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href='https://drive.google.com/uc?id=10P4AJm92mc9jyctrecvze2fQ8nFJPhMy' target='__blank'>STUDENT ACHIVEMENTS(2015-2016)</a></li>
                        <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href='https://drive.google.com/uc?id=18l_MUeRJ_pZahPCUE5vjFuTB70n1tmiO' target='__blank'>STUDENT ACHIVEMENTS(2014-2015)</a></li>
                        <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href='https://drive.google.com/uc?id=10XIR414ppjKV_MWFH1850tzyr0y-tfDA' target='__blank'>STUDENT ACHIVEMENTS(2013-2014)</a></li>
                        <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href='https://drive.google.com/uc?id=1XL45UyQjy4dql1r1NFk2vsxAXLNI-Dwv' target='__blank'>STUDENT ACHIVEMENTS(2012-2013)</a></li>


                    </ul>



                </div>
            </div>
        </div>
    );
}

export default TelAchivements;