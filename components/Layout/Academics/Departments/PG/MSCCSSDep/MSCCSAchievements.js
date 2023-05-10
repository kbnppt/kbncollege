import React from 'react'
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box'
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const MSCCSAchievements = () => {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <div>
            <h2 style={{ color: '#0048cd', textAlign: 'center' }}>DEPARTMENT OF M.SC(CS)</h2>
            <div>
                <h1 style={{ textDecoration: "underline" }}> Staff</h1>
                <Accordion square expanded={expanded === 'panel0'} onChange={handleChange('panel0')}>
                    <AccordionSummary
                        expandIcon={expanded === 'panel0' ? <RemoveIcon style={{ color: "white" }} /> : <AddIcon style={{ color: "white" }} />}
                        style={{ backgroundColor: "darkblue", color: "white" }}
                    >
                        <Typography> Shamim </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Box>
                            <h3>PAPER  PUBLICATIONS:</h3>
                            <ul>
                                <li>Published a paper on “Digital India-Scope, Impact and Challenges”, International Journal of Innovative Research in Advance Engineering, Issue 12, Volume3, in an UGC Sponsored International Conference on “Digital India-The Information for ALL” on 2nd & 3rd December, 2016.</li>
                                <li>Published a paper on “P Vs NP: One of the Millennium Prize Problems proposed by the Clay Mathematic Institute”, International Journal of Research Studies in Computer Science and Engineering, Volume2, Issue3, March 2015, PP 102-104</li>
                                <li>Published a paper on “Computer Ethics & Professional Responsibility To Provide Security Of Data In The Workplace” presented in the National seminar NSEH-2014 Organized by Department of Computer Science & Applications, KBN College on 12th and 13th December, 2014 in the International Journal of Emerging Technology in Computer Science and Electronics with an ISSN No:0976-1353 Vol.11.Issue 2 (Nov.2014) with an impact factor of 1.078.</li>
                                <li>Published a paper on “Behavioural Biometrics For Human Computer Interaction” presented in the National seminar NSEH-2014 Organized by Department of Computer Science & Applications, KBN College on 12th and 13th December, 2014 in the International Journal of Emerging Technology in Computer Science and Electronics with an ISSN No:0976-1353 Vol.11.Issue 5 (Nov.2014) with an impact factor of 1.078.</li>
                                <li>Published a paper on “Improving an organizations existing information technology policy to increase security” presented in the National seminar NSEH-2014 Organized by Department of Computer Science & Applications, KBN College on 12th and 13th December, 2014 in the International Journal of Emerging Technology in Computer Science and Electronics with an ISSN No:0976-1353 Vol.11.Issue 2 (Nov.2014) with an impact factor of 1.078.</li>
                                <li>Published a paper on “Mobile Commerce- A Design and Development Approach” presented in the National Seminar Organized by Department of Maths, Andhra Loyola College on 21st and 22nd  August, 2014 in the International Journal of Scientific and Innovative Mathematical Research with an ISSN 2347-307x Volume-2 Issue-7(A) with an Impact factor:3.97</li>
                                <li>Published a paper on “Role of ICT in Empowering Women” presented in the International Seminar INSWEG-2014 Organized by Department of Commerce & Management on 6th and 7th August, 2014 in Global Journal for Research Analysis with an ISSN:2277-8160 Volume 3 Issue:8 with an Impact factor:1.5408.</li>
                                <li>Published a paper on “Dimension of Violence against Women” presented in the International Seminar INSWEG-2014 Organized by Department of Commerce & Management on 6th and 7th August2014, in Global Journal for Research Analysis with an ISSN:2277-8160 Volume 3 Issue:8 with an Impact factor:1.5408.</li>
                                <li>Published a paper on “Role of Sports in Students Life”, International Journal of Law, Education, Social and Sports Studies, ISSN:2394-9724.</li>
                                Presented a Paper on “Application & Safety Evolution of Nano Materials” presented in the National Seminar NSDAMPE-2014 Organized by Department of Physics & Electronics, KBN College on 15th & 16th October, 2014.                   <li>Published a paper on “Changing Attitude towards Physical Education and Modern Lifestyles”, International Journal of Law, Education, Social and Sports Studies, ISSN:2394-9724.</li>
                                <li>Published a paper on “Different Approaches for the Design of Human computer Interface” in National seminar RTICT-2012 organized by Krishna University  on 7th and 8th January,2012 in the International Journal of Software Engineering with an ISSN: 2249-0523. Volume-2 , Number 1-2.</li>
                            </ul>

                            <h3>PRESENTATIONS</h3>
                            <ul>
                                <li>Presented a paper on “Digital India-Scope, Impact and Challenges”, International Journal of Innovative Research in Advance Engineering, Issue 12, Volume3, in an UGC Sponsored International Conference on “Digital India-The Information for ALL” on 2nd & 3rd December, 2016.</li>
                                <li>Presented a paper on “P Vs NP: One of the Millennium Prize Problems proposed by the Clay Mathematic Institute”, International Journal of Research Studies in Computer Science and Engineering, Volume2, Issue3, March 2015, PP 102-104.</li>
                                <li>Presented a paper on “Computer Ethics & Professional Responsibility To Provide Security Of Data In The Workplace” presented in the National seminar NSEH-2014 Organized by Department of Computer Science & Applications, KBN College on 12th and 13th December, 2014 in the International Journal of Emerging Technology in Computer Science and Electronics with an ISSN No:0976-1353 Vol.11.Issue 2 (Nov.2014) with an impact factor of 1.078.</li>
                                <li>Presented a paper on “Behavioural Biometrics For Human Computer Interaction” presented in the National seminar NSEH-2014 Organized by Department of Computer Science & Applications, KBN College on 12th and 13th December, 2014 in the International Journal of Emerging Technology in Computer Science and Electronics with an ISSN No:0976-1353 Vol.11.Issue 5 (Nov.2014) with an impact factor of 1.078.</li>
                                <li>Presented a paper on “Improving an organizations existing information technology policy to increase security” presented in the National seminar NSEH-2014 Organized by Department of Computer Science & Applications, KBN College on 12th and 13th December, 2014 in the International Journal of Emerging Technology in Computer Science and Electronics with an ISSN No:0976-1353 Vol.11.Issue 2 (Nov.2014) with an impact factor of 1.078.</li>
                                <li>Presented a Paper on “Effects of E-Waste Management” presented in the National Seminar NSDAMPE-2014 Organized by Department of Physics & Electronics, KBN College on 15th & 16th October, 2014.</li>
                                <li>Presented a paper on “Mobile Commerce- A Design and Development Approach” presented in the National Seminar Organized by Department of Computer science & Applications, Andhra Loyola College on 11th and 12th August, 2014.</li>
                                <li>Presented a paper on “Role of ICT in Empowering Women” presented in the International Seminar INSWEG-2014 Organized by Department of Commerce & Management on 6th and 7th August, 2014 in Global Journal for Research Analysis with an ISSN:2277-8160 Volume 3 Issue:8 with an Impact factor:1.5408.</li>
                                <li>Presented a paper on “Dimension of Violence against Women” presented in the International Seminar INSWEG-2014 Organized by Department of Commerce & Management on 6th and 7th August2014, in Global Journal for Research Analysis with an ISSN:2277-8160 Volume 3 Issue:8 with an Impact factor:1.5408</li>
                                <li>Presented a Paper on “Role of Soft skills in Quality Education” Presented in the National Seminar NSESQ-2014 organized by Department of IQAC, KBN College on 21st July, 2014.</li>
                                <li>Presented a paper on “Enhancing Teaching Learning Strategies” Presented in the National Seminar NSESQ-2014 organized by Department of IQAC, KBN College on 21st July, 2014.</li>
                                <li>Presented a paper on “Role of Sports in Students Life”, International Journal of Law, Education, Social and Sports Studies, ISSN:2394-9724</li>
                                <li>Presented a paper on “Changing Attitude towards Physical Education and Modern Lifestyles”, International Journal of Law, Education, Social and Sports Studies, ISSN:2394-9724.</li>
                                <li>Presented a paper on “Different Approaches for the Design of Human computer Interface” in National seminar RTICT-2012 organized by Krishna University  on 7th and 8th January,2012 in the International Journal of Software Engineering with an ISSN: 2249-0523. Volume-2 , Number 1-2.</li>
                            </ul>

                            <h3>WORKSHOPS AND SEMINARS ATTENDED:</h3>
                            <ul>
                                <li>Organizing Member for the two day national workshop on DataScience organized by Department of ComputerScience, KBN College on 15-16 September, 2017.</li>
                                <li>Attended CSR principles & Dimensions organised by commerce & management KBN college on 21ST & 22ND Feb,2016.</li>
                                <li>Attended Big Data Challenges and opportunities Two day national workshop on 1ST OCT 2016.</li>
                                <li>Attended "Faculty development programme “Organized by M.R.Pai foundation on 28th Feb&1st Mar 2015 .</li>
                                <li>Attended "Faculty development programme" on IS-ED Approach  organised by P.V.P  SIT  on 19th Dec 2015.</li>
                                <li>Attended Radio talk on "women in Teaching Profession" Organized by Rainbow FM 102.2 on 21st Nov 2014.</li>
                                <li>Attended Advanced Program on electronic Banking Organized by Indian Bank,staff Training Centre, Vijayawada on 2nd&3rd Jan 2013.</li>
                                <li>Attended National Seminar on CLIMATE CHANGE A CHALLENGE TO SUSTAINABLE DEVELOPMENT Organized by Department of ZOOLOGY on 29th&30th Nov 2012.</li>
                                <li>Attended Two days Orientation programme on open distance learning Organized by IGNOU Regional Centre, Vijayawada on 13th&14th Oct 2012.</li>
                            </ul>

                        </Box>
                    </AccordionDetails>
                </Accordion>
            </div>

            <div>

                <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary
                        expandIcon={expanded === 'panel1' ? <RemoveIcon style={{ color: "white" }} /> : <AddIcon style={{ color: "white" }} />}
                        style={{ backgroundColor: "darkblue", color: "white" }}
                    >
                        <Typography>R.Jayamma</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Box>
                            <h3>PAPER  PUBLICATIONS:</h3>
                            <ul>
                                <li>Published a paper on “Big data security concerns and shortcomings” in in Journal of Emerging technology and Innovative Research(JETIR),ISSN : 2349-5162, Impact factor 5.87, volume 6, Issue 3, March-2019 organized by P.B. Siddhartha College of arts & Science on 25th Jan 2019.</li>
                                <li>Published a Paper on “Big Data-vulnerabilities and security” in national seminar “Cyber Security” NSCS-2018 organised by dept. computer science and application ,KBN College on 28&29th Nov,2018 with an ISBN:978-81-936640-1-8.</li>
                                <li>Published a paper on “Intelligent transport systems in India : state of art” ISSN:2454-132X in International Journal Of Advance Research ,Ideas and Innovations in Technology , Volume-4 ,Issue-5 ,On Sep-Oct ,2018.</li>
                                <li>Published a Paper on “Big Data ,Technologies and trends A Study”ISSN:2456-3307 in International Journal of Scientific Research in computer Science ,l Engineering and Information technology (IJSRCSETI),volume 3 ,Issue 7 , on Sep-oct,2018.</li>
                                <li>Published a paper on “A Survey on online Social Networks” in the DRDO SPONSORED Two Days NATIONAL CONFERENCE on Wireless Communications & Sensor Networks NCWCSN – 2014 Organized By Sensor Network Research Group Department of Electronics & Computer Engineering KL University, Vaddeswaram, Guntur District, Andhra Pradesh, India,during March 7th & 8th 2014.</li>
                            </ul>

                            <h3>PRESENTATIONS</h3>
                            <ul>
                                <li>Presented a paper on “A Survey on online Social Networks” in the DRDO SPONSORED Two Days NATIONAL CONFERENCE on Wireless Communications & Sensor Networks NCWCSN – 2014 Organized By Sensor Network Research Group Department of Electronics & Computer Engineering KL University, Vaddeswaram, Guntur District, Andhra Pradesh, India,during March 7th & 8th 2014.</li>
                                <li>Participated in 3-day Faculty Development Programme(FDP) organized by IQAC in KBN college on 30th,31st May and 1st June 2019.</li>
                                <li>Participated and presented a paper on “Big data security concerns and shortcomings” in Journal of Emerging technology and Innovative Research(JETIR),ISSN : 2349-5162, Impact factor 5.87, volume 6, Issue 3, March-2019 organized by P.B. Siddhartha College of arts & Science on 25th Jan 2019.</li>
                                <li>Delivered lecturer on basics of computer, usage of computer input & output devices ,applications of computers for 9th students of government school on Dec 1st 2018.</li>
                                <li>Participated in UGC sponsored two days national seminar on “cyber security” organised by dept. of computer science and applications KBN College on 28 & 29th NOV 2018.</li>
                                <li>Participated in UGC sponsored national work shop on “Intellectual Property Rights – Issues and Challenges ” organized by PG dept. of commerce and business administration KBN College – PG centre in collaboration with Krishna University, Machilipatnam on 23rd Nov 2018.</li>
                                <li>Research organised one day national workshop on “Benefits and challenges of interdisciplinary 13th NOV by internal quality assurance cell (IQAC)”, KBN College on Participated in the 2018.</li>
                                <li>Participated in UGC sponsored two days national workshop on “data analytics using R-programming(NWDAR-2018)” organised by department of computer science application , KBN College, on 24&25TH SEP 2018.</li>
                            </ul>

                            <h3>WORKSHOPS AND SEMINARS ATTENDED:</h3>
                            <h4>National International</h4>
                            <ul>
                                <li>Participated in Two day national workshop on “Mobile Application Development with Android”, NWMADA-2019 organized by the PG Department of Computer Science & Applications, K.B.N college, on 1st and 2nd March 2019.</li>
                                <li>Participated in UGC Sponsored Two-Day National level workshop on Data Sciene organized by KBN College,in collaboration with Krishna University, Machilipatnam on 15-16 September, 2017.</li>
                                <li>Completed Phase I of the CIT (Certificate in IT) Teacher Training Program (TTP) with competence through A-VIEW during Winter of 2012 organized by Enhance Edu, IIIT HYDERABAD. And got the eligibility for mentoring the students enrolled for the Student Enhancement Program (STEP) Phase-I.</li>
                                <li>Participated in Mission10X Workshop ‘High Impact Teaching Skills’ (Faculty Enablement Program) in MIC College of Technology conducted by Wipro During 10th -14th April -2012.</li>
                                <li>Attended an International Conference “Digital India-The Information For All” (ICDIA-2016) on 2nd and 3rd December 2016 at KBN College</li>
                                <li>Participated in faculty development programme “Communication and Presentation Skills for Faculty” conducted by CFBT Education Services, Hyderabad, an affiliate of CFBT Education Trust United Kingdom, from 11th -16th June 2012 in JNTUK.</li>
                            </ul>

                            <h4>OTHERS</h4>
                            <ul>
                                <li>Participated as an Instructor for computer awareness course in free summer coaching camp held in KBN College (Women’s studies centre) on 15th Apr 2019 to 16th May 2019.</li>
                                <li>Completed (Certificate of Proficiency) COP in Korean Language conducted by center for Foreign Languages International Student Cell, Acharya Nagarjuna University during 05.05.2017 to 17.06.2017.</li>
                                <li>Qualified in GATE 2009.</li>
                            </ul>

                        </Box>
                    </AccordionDetails>
                </Accordion>
            </div>

            <div>
                <Accordion square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                    <AccordionSummary
                        expandIcon={expanded === 'panel2' ? <RemoveIcon style={{ color: "white" }} /> : <AddIcon style={{ color: "white" }} />}
                        style={{ backgroundColor: "darkblue", color: "white" }}
                    >
                        <Typography>A.Prathyusha</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Box>
                            <h3>PAPER  PUBLICATIONS:</h3>
                            <ul>
                                <li>Published a Paper on “Needs & goals of cyber security” in national seminar “Cyber Security” NSCS-2018 organised by department of computer science and applications ,KBN College on 28&29th Nov,2018 with an ISBN:978-81-936640-1-8.</li>
                            </ul>

                            <h3>PRESENTATIONS</h3>
                            <ul>
                                <li>Participated in 3-day Faculty Development Programme(FDP) Organized by IQAC in KBN college on 30th,31st May and 1st June 2019.</li>
                                <li>Participated in UGC sponsored two days national seminar on “cyber security” organised by department of computer science and applications KBN College on 28 & 29th NOV 2018.</li>
                                <li>Research organised one day national workshop on “Benefits and challenges of interdisciplinary 13th NOV by Internal Quality Assurance Cell (IQAC)”, KBN College on Participated in the 2018.</li>
                                <li>Participated in UGC sponsored two days national workshop on “data analytics using R-programming(NWDAR-2018)” organised by department of computer science application , KBN College, on 24 & 25TH SEP2018.</li>
                            </ul>

                            <h3>WORKSHOPS AND SEMINARS ATTENDED:</h3>
                            <h4>National International</h4>
                            <ul>
                                <li>Participated in Two day national workshop on “Mobile Application Development with Android”, NWMADA-2019 organized by the PG Department of Computer Science & Applications, K.B.N college, on 1st and 2nd March 2019.</li>
                            </ul>

                            <h4>OTHERS</h4>
                            <ul>
                                <li>Participated as an Instructor for computer awareness course in free summercoaching camp held in KBN College (Women’s studies centre) on 15th Apr 2019to 16th May 2019.</li>
                            </ul>

                        </Box>
                    </AccordionDetails>
                </Accordion>
            </div>
            <div>
                <h1 style={{ textDecoration: "underline" }}> Students</h1>
                <p>B.Philomeena of M.Sc(CS)(2014-2016) got Pratibha Award from the Government of A.P.</p>
                <img src='https://drive.google.com/uc?id=1nFlSH-bpZjMVBISfLZFUiz4EluVBK7-o' alt='img' />
                <h2>STUDENT ACHIEVEMENTS of M.Sc(CS)</h2>

                <ul>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href='https://www.kbncollege.ac.in/attachments/msc(cs)/MSC2018.pdf' target='__blank'>STUDENT ACHIEVEMENTS(2018-2019)</a> </li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href='https://www.kbncollege.ac.in/attachments/msc(cs)/DEPT%20OF%20MSc%202017-18.pdf' target='__blank'>STUDENT ACHIEVEMENTS(2017-2018)</a> </li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href='https://www.kbncollege.ac.in/attachments/msc(cs)/DEPT%20OF%20MSc%202016-17.pdf' target='__blank'>STUDENT ACHIEVEMENTS(2016-2017)</a> </li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href='https://www.kbncollege.ac.in/attachments/msc(cs)/DEPT%20OF%20MSc%202015-16.pdf' target='__blank'>STUDENT ACHIEVEMENTS(2015-2016)</a> </li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href='https://www.kbncollege.ac.in/attachments/msc(cs)/DEPT%20OF%20MSc%202014-15.pdf' target='__blank'>STUDENT ACHIEVEMENTS(2014-2015)</a> </li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href='https://www.kbncollege.ac.in/attachments/############################' target='__blank'>STUDENT ACHIEVEMENTS(2013-2014)</a> </li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href='https://www.kbncollege.ac.in/attachments/############################' target='__blank'>STUDENT ACHIEVEMENTS(2012-2013)</a> </li>
                </ul>

            </div>
        </div>
    )
}

export default MSCCSAchievements;