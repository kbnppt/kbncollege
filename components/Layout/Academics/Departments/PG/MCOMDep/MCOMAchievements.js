import React from 'react'
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box'
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const MCOMAchievements = () => {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <div>
            <h2 style={{ color: '#0048cd', textAlign: 'center' }}>DEPARTMENT OF M.COM</h2>

            <div>
                <h1 style={{ textDecoration: "underline" }}> Staff</h1>
                <Accordion square expanded={expanded === 'panel0'} onChange={handleChange('panel0')}>
                    <AccordionSummary
                        expandIcon={expanded === 'panel0' ? <RemoveIcon style={{ color: "white" }} /> : <AddIcon style={{ color: "white" }} />}
                        style={{ backgroundColor: "darkblue", color: "white" }}
                    >
                        <Typography >B.Prabhakar </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Box>
                            <h2>ACADEMIC YEAR 2019-2020</h2>
                            <h3>National Seminar:</h3>
                            <ul>
                                <li>Participated in UGC Sponsored National Seminar on “Role of IQAC towards Quality Enhancement and Sustenance from NAAC Perspective” in collaboration with NAAC, Bangalore from 29-30 November, 2019, in Government College (Autonomous), Rajahmundry.</li>
                                <li>Participated and presented a paper in the ICSSR (IMPRESS) Sponsored Two National Seminar on “An Impact of Developmental Programmes for Social Transformation of Scheduled Castes & Scheduled Tribes”, organized by Department of Commerce & Management, KBN College (Autonomous), Vijayawada, A.P. and the title of the paper “A Study on the Socio – Economic Conditions of Schedule Tribes in India”, held on 29th and 30th November, 2019.</li>
                                <li>Participated in Two Day National Seminar on “Intellectual Property Rights: Technological Development” sponsored by UGC (with Autonomy Grants), and presented the paper entitled “Patentability of Various Innovations – Issues & Challenges, Organized by Departments of commerce (UG & PG) Economics (UG & PG) & Management Studies (PG) held on 27th & 28th September, 2019, in Sir C R Reddy College, (ADIED & AUTONOMOUS), Eluru.</li>
                            </ul>
                            <h3>Online Course:</h3>
                            <ul>
                                <li>B. Prabhakar, Assistant Professor, has successfully completed and received a passing grade in “SKILLS105X: PUBLIC SPEAKING”, a course of study offered by RITx, an online learning initiative of Rochester Institute of Technology, May 6, 2019.</li>
                            </ul>
                            <h2>ACADEMIC YEAR 2018-2019</h2>
                            <ul>
                                <li>Participated in the National Workshop on ““Perception & Perspectives of Pedagogy – The role of Case Study in Management Education” organized by Department of Business and Management Studies, Gudlavalleru Engineering College, Gudlavalleru on 17th & 18th August 2018.</li>
                                <li>Participated in the National Workshop on “Benefits and Challenges of Interdisciplinary Research” organized by IQAC, KBN College, Vijayawada on 13th November 2018.</li>
                                <li>Participated in the National Workshop on “ZOHO” and “Insta EMI” organized by AP State Skill Development Corporation (APSSDC) from 22nd to 26th October 2018.</li>
                            </ul>
                            <h3>PUBLICATIONS</h3>
                            <ul>
                                <li>Paper Published entitled as “Brand Preferences of Consumers - A Comparative study across the Rural and Urban Markets of Vijayawada” in the International Journal of Management Technology and Engineering. ISSN No. 2249 – 7455, Vol IX, Page no 2437-2452 on Feb 2019.</li>
                                <li>Paper Published entitled as “Impact of Socio-Economic Factors on Brand Preferences of Consumers of Two-wheelers across the Rural and Urban Markets in Vijayawada - A Comparative Study” in the International Journal of Business, Management and Allied Sciences ISSN No. 2349 – 4638, Vol VI issue-I, Page no -28-48.</li>
                            </ul>
                            <h3>National Seminar:</h3>
                            <h4>2016-2017:</h4>
                            <ul>
                                <li>Mr.B.Prabhakar has presented a paper entitled “E-TAILING IN INDIA : CHALLENGES AND OPPORTUNITIES” in the UGC funded National Seminar on “e-tailing Trends, Challenges & Opportunities” (NSETCO - 2016) in collaboration with Krishna University on 25th& 26th  November 2016. Organised by Department of Commerce and Management, KBN College, Vijayawada.</li>
                                <li>Mr.B.Prabhakar has presented a paper on “Impact of Demonetizationon the Indian Economy” in the two day National seminar on “Indian Economic Turn Around Challenges  and  Prospects”  Sponsored  by  UGC,  Organised  by  Sir  C  R  Reddy College, Eluru, W.G.District.</li>
                            </ul>
                            <h3>National Workshop:</h3>
                            <h4>2017-2018:</h4>
                            <ul>
                                <li>Prabhakar (Asst. professor)kbn PG college  attended  one day  work shop on “IPR” conducted by  kbn  research  development centre  on  22 nd  feb 2018.</li>
                                <li>Prabhakar Asst. professor participated  in  3 day  FDP on research  methodology  in  gudllavalleru engg college , Krishna  district  on 18th  to 20th December 2017.</li>
                            </ul>
                            <h4>2016-2017:</h4>
                            <ul>
                                <li>Mr.B.Prabhakar has Participated in the UGC Funded One Day National Workshop on “Research and Innovations: Issues and Challenges” (NWRIIC-2016), Organized by IQAC, KBN College, Vijayawada.</li>
                            </ul>
                            <h3>International seminar:</h3>
                            <h4>2015-2016:</h4>
                            <ul>
                                <li>Mr.Prabhakar Bethapudi has presented a paper entitled “CSR initiatives and Brand Promotion– A study” in the UGC sponsored International Seminar on “Corporate Social responsibility Initiatives  for  Inclusive  and  Sustainable  Development”  (ISCSR  –2016)   on   19th      to   21st February  2016.  Organised  by  Department  of  Commerce  and Management, KBN College, Vijayawada.</li>
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
                        <Typography > CH. SIRISHA </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Box>
                            <h2>ACADEMIC YEAR 2019-2020</h2>
                            <h3>Publications</h3>
                            <ul>
                                <li>Published a research paper in World Academics Journal of Management (WAJM), title of the research paper “An Empirical Study on Public Parks in Vijayawada City”, Vol.7, Issue.1, PP. 01-08, E-ISSN: 2321-905X, ISSN: 2321-905X, October, 2019.</li>
                            </ul>
                            <h3>Faculty Development Programme</h3>
                            <ul>
                                <li>Participated in 3-day Faculty Development Programme on “INNOVATIVE PEDAGOGY & EFFECTIVE TEACHING”, Organized by IQAC in KBN College held on 30th, 31st May and 1st June, 2019.</li>
                            </ul>
                            <h3>Online Course</h3>
                            <ul>
                                <li>Sirisha. Ch, Assistant Professor, has successfully completed and received a passing grade in “SKILLS105X: PUBLIC SPEAKING”, a course of study offered by RITx, an online learning initiative of Rochester Institute of Technology, July 10, 2019.</li>
                            </ul>
                            <h3>Publications:</h3>
                            <h4>2018-2019</h4>
                            <ul>
                                <li>Paper Published entitled “An Empirical Study on Industrial Relation in Digital Age,” in the International Journal of Management Studies. ISSN No. 2231-2528, vol. 4, Issue (3), Page No. 60-68 2018.</li>
                            </ul>
                            <h3>Participatation</h3>
                            <ul>
                                <li>Participated in UGC Sponsored two days National Workshop on “A Study on Compensation Management in Retail Sector in India” organized by Department of HRM, Acharya Nagarjuna University, Guntur, on 8th & 9th February 2019.</li>
                                <li>Participated in UGC Sponsored one days National Workshop on “Benefits and Challenges of Interdisciplinary Research” organized by IQAC, KBN College, Vijayawada on 13th November 2018.</li>
                            </ul>
                            <h4>2014-2015</h4>
                            <div>
                                <table className="table table-bordered">
                                    <tbody>
                                        <tr>
                                            <td >
                                                <p><strong>S. No</strong></p>
                                            </td>
                                            <td >
                                                <p><strong>Title of the Articles</strong></p>
                                            </td>
                                            <td>
                                                <p><strong>Name of Journal</strong></p>
                                            </td>
                                            <td >
                                                <p><strong>Month & Year</strong></p>
                                            </td>
                                            <td>
                                                <p><strong>ISSN No</strong></p>
                                            </td>
                                            <td>
                                                <p><strong>PP</strong></p>
                                            </td>


                                        </tr>
                                        <tr>
                                            <td >
                                                <p>1</p>
                                            </td>
                                            <td >
                                                <p>Higher Education Prospecting Indian Economic System</p>
                                            </td>
                                            <td>
                                                <p>IQAC</p>
                                            </td>
                                            <td >
                                                <p>21.7.2014</p>
                                            </td>
                                            <td>
                                                <p>--</p>
                                            </td>
                                            <td>
                                                <p>--</p>
                                            </td>


                                        </tr>
                                        <tr>
                                            <td >
                                                <p>2</p>
                                            </td>
                                            <td >
                                                <p>Meliorate WomenTrough Literacy</p>
                                            </td>
                                            <td>
                                                <p>--</p>
                                            </td>
                                            <td >
                                                <p>Aug., 6th to 7th - 2014</p>
                                            </td>
                                            <td>
                                                <p>--</p>
                                            </td>
                                            <td>
                                                <p>--</p>
                                            </td>


                                        </tr>
                                        <tr>
                                            <td >
                                                <p>3</p>
                                            </td>
                                            <td >
                                                <p>Living Ethical is a Journal to Corporate Success</p>
                                            </td>
                                            <td>
                                                <p>UGC Sponsored two days National Seminar Ethical Hacking an Inevitable tool for secured Organization</p>
                                            </td>
                                            <td >
                                                <p>Dec. 13th & 14th 2014</p>
                                            </td>
                                            <td>
                                                <p>--</p>
                                            </td>
                                            <td>
                                                <p>--</p>
                                            </td>


                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <h4>2013-2014</h4>
                            <div>
                                <table className="table table-bordered">
                                    <tbody>
                                        <tr>
                                            <td >
                                                <p><strong>S. No</strong></p>
                                            </td>
                                            <td >
                                                <p><strong>Title of the Articles</strong></p>
                                            </td>
                                            <td>
                                                <p><strong>Name of Journal</strong></p>
                                            </td>
                                            <td >
                                                <p><strong>Month & Year</strong></p>
                                            </td>
                                            <td>
                                                <p><strong>ISSN No / ISBN No</strong></p>
                                            </td>
                                            <td>
                                                <p><strong>PP</strong></p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td >
                                                <p>1</p>
                                            </td>
                                            <td >
                                                <p>Participative Management Avenging Employee Empowerment</p>
                                            </td>
                                            <td>
                                                <p>Emerging Trends in Industrial Relations</p>
                                            </td>
                                            <td >
                                                <p>22.02.2014 to 23.02.2014</p>
                                            </td>
                                            <td>
                                                <p>978-81- 926819-5-5</p>
                                            </td>
                                            <td>
                                                <p>443 to 446</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td >
                                                <p>2</p>
                                            </td>
                                            <td >
                                                <p>Technology Trends Evoking Retail Banking</p>
                                            </td>
                                            <td>
                                                <p>International Journal of Research Management Studies</p>
                                            </td>
                                            <td >
                                                <p>15.03.2014</p>
                                            </td>
                                            <td>
                                                <p>2321 – 4864</p>
                                            </td>
                                            <td>
                                                <p>218 to 221</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td >
                                                <p>3</p>
                                            </td>
                                            <td >
                                                <p>Higher Education Prospecting Indian Economic System</p>
                                            </td>
                                            <td>
                                                <p>IQAC</p>
                                            </td>
                                            <td >
                                                <p>21.7.2014</p>
                                            </td>
                                            <td>
                                                <p>--</p>
                                            </td>
                                            <td>
                                                <p>--</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td >
                                                <p>4</p>
                                            </td>
                                            <td >
                                                <p>Role of Marketing Information Systems on Decision Making</p>
                                            </td>
                                            <td>
                                                <p>Edited book on Brand Management in Indian Industry</p>
                                            </td>
                                            <td >
                                                <p>28.3.2014.</p>
                                            </td>
                                            <td>
                                                <p>978-93- 83241-32-3,</p>
                                            </td>
                                            <td>
                                                <p>200 to 205</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td >
                                                <p>5</p>
                                            </td>
                                            <td >
                                                <p>Meliorate Women Trough Literacy</p>
                                            </td>
                                            <td>
                                                <p>--</p>
                                            </td>
                                            <td >
                                                <p>Aug., 6th to 7th - 2014</p>
                                            </td>
                                            <td>
                                                <p>--</p>
                                            </td>
                                            <td>
                                                <p>--</p>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <h4>2012-2013</h4>
                            <div>
                                <table className="table table-bordered">
                                    <tbody>
                                        <tr>
                                            <td >
                                                <p><strong>S. No</strong></p>
                                            </td>
                                            <td >
                                                <p><strong>Title of the Articles</strong></p>
                                            </td>
                                            <td>
                                                <p><strong>Name of Journal</strong></p>
                                            </td>
                                            <td >
                                                <p><strong>Month & Year</strong></p>
                                            </td>
                                            <td>
                                                <p><strong>ISSN No</strong></p>
                                            </td>
                                            <td>
                                                <p><strong>PP</strong></p>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td >
                                                <p>1</p>
                                            </td>
                                            <td >
                                                <p>Sustainable Resources and Economic Development</p>
                                            </td>
                                            <td>
                                                <p>###</p>
                                            </td>
                                            <td >
                                                <p>10.4.2013</p>
                                            </td>
                                            <td>
                                                <p>2319-7315</p>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td >
                                                <p>2</p>
                                            </td>
                                            <td >
                                                <p>Human Welfare and Social Security in India</p>
                                            </td>
                                            <td>
                                                <p>Human Resource Development Issues, Challenges & Strategies</p>
                                            </td>
                                            <td >
                                                <p>05.09.2012</p>
                                            </td>
                                            <td>
                                                <p>978-81-9722783-3-9</p>
                                            </td>
                                        </tr>


                                        <tr>
                                            <td >
                                                <p>3</p>
                                            </td>
                                            <td >
                                                <p>Semblance of Human Resource for Aggrandrement</p>
                                            </td>
                                            <td>
                                                <p>Changing Scenario of Human Resources in India</p>
                                            </td>
                                            <td >
                                                <p>18.10.2012</p>
                                            </td>
                                            <td>
                                                <p>978-93-5097-130-0</p>
                                            </td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>



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
                        <Typography > Dr. B.RATNAVALI </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Box>
                            <h2>ACADEMIC YEAR 2019-2020</h2>
                            <h3>Workshops:</h3>
                            <ul>
                                <li>Participated in 1-day Workshop on “Intellectual Property Rights in Higher Education – Issues & Challenges”, organized by the Department of Management Studies in collaboration with Internal Quality Assurance Cell on 13th September, 2019. At Tellakulajalayya Polisetty Somasundaram College, Guntur.</li>
                                <li>Participated in 1-day national workshop on “Recent Trends in Commerce & Management”, Organized by department of commerce & management studies, Adikavi Nannaya University, Rajamahendravaram, held on 07th September, 2019.</li>
                            </ul>
                            <h3>National Seminar</h3>
                            <ul>
                                <li>Participated in 2-day national seminar and presented a paper entitled “Intellectual Property Rights and Technology Transfer”, Organized by Departments of Commerce (UG & PG), Economics (UG & PG) & Management Studied (PG), held on 27th & 28th September 2019 at Sir C R Reddy College, Eluru.</li>
                            </ul>
                        </Box>
                    </AccordionDetails>
                </Accordion>
            </div>
            <div>
                <h1 style={{ textDecoration: "underline" }}> Students</h1>
                <h2>Students Achivements</h2>
                <p> Rama kiran of m.com selected as clerk in CANARA BANK in the year 2013.she crack the IBPS clerks 2012 exam conducted by INSTITUTE OF BANKING PERSONNEL SELECTION.</p>
                <p> B.Anuradha stood university topper from course in the year 2010-2012. Academic year . For her achievement she received gold medal from acharya nagarjuna university vice chancellor Prof.V.N.Rao garu in university convocation in 2013.</p>
                <ul>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href='https://www.kbncollege.ac.in/attachments/pgcommerce/STUDENT%20ACHIEVEMENTS.pdf' target='__blank'>STUDENT ACHIEVEMENTS(2018-2019)</a> </li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href='https://www.kbncollege.ac.in/attachments/pgcommerce/M..Com%20STUDENTS%20ACHIEVEMENTS%20-%20WEBSITE%20DATA.pdf' target='__blank'>STUDENT ACHIEVEMENTS(2017-2018)</a> </li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href='https://www.kbncollege.ac.in/attachments/pgcommerce/students%20acheivements%202016-2017.pdf' target='__blank'>STUDENT ACHIEVEMENTS(2016-2017)</a> </li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href='https://www.kbncollege.ac.in/attachments/pgcommerce/students%20acheivements%202015-2016%20pdf%20file.pdf' target='__blank'>STUDENT ACHIEVEMENTS(2015-2016)</a> </li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href='https://www.kbncollege.ac.in/attachments/pgcommerce/STUDENTS%20%20%20ACHIEVEMENTS%202014-2015.pdf' target='__blank'>STUDENT ACHIEVEMENTS(2014-2015)</a> </li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href='https://www.kbncollege.ac.in/attachments/pgcommerce/students%20ACHIEVEMNTS%202013-2014.pdf' target='__blank'>STUDENT ACHIEVEMENTS(2013-2014)</a> </li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href='https://www.kbncollege.ac.in/attachments/pgcommerce/students%20acheivements%202012-1013.pdf' target='__blank'>STUDENT ACHIEVEMENTS(2012-2013)</a> </li>
                </ul>
            </div>

        </div>
    )
}

export default MCOMAchievements;