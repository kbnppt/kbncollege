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


const EngAchivements = () => {

    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (

        <div>
            <h2 style={{ textDecoration: "underline" }}> Staff</h2>
            <Accordion square expanded={expanded === 'panel0'} onChange={handleChange('panel0')}>
                <AccordionSummary
                    expandIcon={expanded === 'panel0' ? <RemoveIcon style={{ color: "white" }} /> : <AddIcon style={{ color: "white" }} />}
                    style={{ backgroundColor: "darkblue", color: "white" }}
                >
                    <Typography >Mr. E.Vara Prasad</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Box>
                        <h2 style={{ textDecoration: "underline" }}>Publications:</h2>
                        <table class="table table-bordered">
                            <tbody>
                                <tr>
                                    <td>
                                        <p><strong>Journal Type</strong></p>
                                        <p><strong>&nbsp;</strong></p>
                                    </td>
                                    <td>
                                        <p><strong>Journal Name</strong></p>
                                    </td>
                                    <td>
                                        <p><strong>ISSN No.</strong></p>
                                    </td>
                                    <td>
                                        <p><strong>Vol. &amp; Issue No.</strong></p>
                                    </td>
                                    <td >
                                        <p><strong>Page No.</strong></p>
                                    </td>
                                    <td>
                                        <p><strong>Title</strong></p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>-</p>
                                    </td>
                                    <td>
                                        <p>Special Edition: New Directions in Post- Colonial Literature</p>
                                    </td>
                                    <td>
                                        <p>ISBN NO:978-81-936088-6-9</p>
                                    </td>
                                    <td>
                                        <p>&nbsp;</p>
                                    </td>
                                    <td >
                                        <p>35-43</p>
                                    </td>
                                    <td>
                                        <p>Interrogating Moral Standards and Gender in Modern Society In Vijay Tendulkar&rsquo;s Silence! The Court is in Session</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>-</p>
                                    </td>
                                    <td>
                                        <p>International Journal of Education For The Future (IJEF)</p>
                                    </td>
                                    <td>
                                        <p>2394-9902</p>
                                    </td>
                                    <td colspan="2">
                                        <p>To be published</p>
                                    </td>
                                    <td>
                                        <p>Inclusive Education in India Role of Technology</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>-</p>
                                    </td>
                                    <td>
                                        <p>International Journal: New Directions in Post &ndash; Colonial Literature (ISCS).</p>
                                        <p>&nbsp;</p>
                                    </td>
                                    <td>
                                        <p>ISBN NO. 978-93-82186-99-1</p>
                                    </td>
                                    <td>
                                        <p>January,2017.</p>
                                    </td>
                                    <td >
                                        <p>264-270</p>
                                    </td>
                                    <td>
                                        <p>Reflections of Societal Attitudes towards persons with&nbsp; disabilities in Salman Rushdie&rsquo;s Shame</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>-</p>
                                    </td>
                                    <td>
                                        <p>International Journal of Innovative Research in Science Engineering and</p>
                                        <p>Technology, ,</p>
                                        <p>&nbsp;</p>
                                    </td>
                                    <td>
                                        <p>ISSN: 2349-7009, Impact Factor: 3.391</p>
                                    </td>
                                    <td>
                                        <p>Vol.3, Issue 09, December, 2016</p>
                                    </td>
                                    <td >
                                        <p>&nbsp;</p>
                                    </td>
                                    <td>
                                        <p>Education and Modernization In India</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>-</p>
                                    </td>
                                    <td>
                                        <p>Special Edition-Celebrating Literary Theory- 2014: edited and Published by Dept. of English, The Madura College, Madurai.</p>
                                    </td>
                                    <td>
                                        <p>ISBN NO. 978-81-920310-5-7</p>
                                    </td>
                                    <td>
                                        <p>March, 2015.</p>
                                        <p>&nbsp;</p>
                                    </td>
                                    <td >
                                        <p>134-146</p>
                                    </td>
                                    <td>
                                        <p>Feminism Moral Standards in Modern Society in Vijay Tendulkar&rsquo;s &ndash; Silence the court is in session</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>-</p>
                                    </td>
                                    <td>
                                        <p>Multi-subject journal.</p>
                                    </td>
                                    <td>
                                        <p>IMPACT FACTOR: 1.5408.</p>
                                        <p>ISSN NO.2277-8160</p>
                                    </td>
                                    <td>
                                        <p>Issue No. 8. Vol. 4.</p>
                                        <p>August,2014</p>
                                    </td>
                                    <td >
                                        <p>33-38.</p>
                                    </td>
                                    <td>
                                        <p>Indian Feminist Theatre: Aesthetics</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>-</p>
                                    </td>
                                    <td>
                                        <p>International Journal of English Language, Literature &amp; Translation Studies &ndash; A peer reviewed International Research Journal.</p>
                                    </td>
                                    <td>
                                        <p>ISSN: 2349-9451. PAGE NO</p>
                                    </td>
                                    <td>
                                        <p>Vol. 1. S1., 2014</p>
                                    </td>
                                    <td >
                                        <p><strong>1-4</strong></p>
                                    </td>
                                    <td>
                                        <p>The Role and Significance of the Language Laboratory in inculcating communication Skills &ndash; A study on the usefulness of&nbsp; Audio-Visual Aids in EFL</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>&nbsp;</p>
                                    </td>
                                    <td>
                                        <p>Notions</p>
                                    </td>
                                    <td>
                                        <p>&nbsp;</p>
                                    </td>
                                    <td>
                                        <p>Dec 2013</p>
                                    </td>
                                    <td >
                                        <p>&nbsp;</p>
                                    </td>
                                    <td>
                                        <p>Re-representing Ismael Reed through Post Modern Fiction</p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <ul>
                            <li>Acted as Judge for Essay Writing Competitions in Amaravati Balostavam – 2019 at PSCMR College of Engineering & Technology, Vijayawada on 6thDecember,2019.</li>
                            <li>Attended the Three – Day Faculty Development Programme on “Innovative Pedagogy and Effective Teaching” organized by IQAC, KBN College, Vijayawada from 30th May to 1st June, 2019.</li>
                        </ul>
                        <h2 style={{ textDecoration: 'underline' }}>Paper Presentations:</h2>
                        <h3 style={{ textDecoration: 'underline' }}>2019-20:</h3>
                        <ul>


                            <li>Presented a Paper entitled “Finding a Voice the Gender in Mahesh Duttani’s, Final Solutions, Where There is a Will, Dance Like a Man” in the Two Day International Seminar on Social, Ethical and Cultural Values as Depicted in Drama organized by Sri Y.N. College (Autonomous), Narsapur on 13th & 14th December, 2019.</li>
                        </ul>
                        <h3 style={{ textDecoration: 'underline' }}>2016-17:</h3>
                        <ul>

                            <li>Presented a paper on “Patriarchy and Gender in Mahesh Dattani’s Plays” in the International Seminar organised by Andhra Loyola Degree College (Autonomous) held on 14, 15 & 16 March, 2018.</li>
                            <li>Presented a paper on “Inclusive Education in India Role of Technology” in a Two Day National Seminar on Recent Trends in Inclusive Education held on 7th & 8th February, 2018 organized by Madonna College for the Deaf, Gunadala, Vijayawada.</li>
                            <li>Presented in the National Workshop cum Seminar on “Translation and National Integration” organised by the Department of English, Acharya Nagarjuna University from 18th – 25th January, 2017.</li>
                            <li>Presented a paper on “Gender and Patriarchy in Mahesh Dattani’s plays with reference to the final solutions, where there is a will and dance like a man”, in the UGC Sponsored National Seminar jointly organised by Krishna University on “Women Empowerment: Media, Cinema and theatre – Prospects & Challenges” held on 21- 22 July, 2017.</li>
                        </ul>
                        <h3 style={{ textDecoration: 'underline' }}>2015-16:</h3>
                        <ul>

                            <li>Presented a paper on “Ambivalence in Kipling’s Plain Tales from the Hill with special reference to consequences and the taking of Lungtung pen, in the UGC sponsored National Seminar on New Directions in English Language and Literature from 13th – 14th February, 2015.</li>
                            <li>Presented a paper on “The Conception of Moral Standards, Gender in Modern Society in Vijay Tendulkar’s Silence! The Court is in Session in the National Seminar New Aspects in Postcolonial Literature organized by Andhra Loyola College, Vijayawada on 6th January, 2016.</li>
                            <li>Presented a paper entitled “Assessing Assimilative Policies by European Advents in the land of Australia” in the National Seminar on New Aspects in Post-Colonial Literature organized by Dept. of English, Andhra Loyola College, Vijayawada on 6th & 7th January, 2016.</li>
                            <li>Presented a paper titled “Revisiting Dalit Perspectives through Bhama’s Works in the UGC Sponsored Global Seminar on Celebrating the ancient ; contemporary wisdom of Fourth world(Natives/Aboriginals/Dalits) from 14th to 16th Dec 2015 organized by the Department of English, Acharya Nagarjuna University.
                            </li>
                        </ul>
                        <h3 style={{ textDecoration: 'underline' }}>2014-15:</h3>
                        <ul>

                            <li>Participated in the International & Interdisciplinary Conference on “Language, Literature Cultural Studies & Knowledge Resources” held at Vignan’s University, Vadlamudi on 5th & 6th February, 2015.</li>
                            <li>Participated National seminar on Development of advanced materials in physics and electronics and their application at KBN College, Vijayawada on 15th & 16th October 2014.</li>
                            <li>Participated One day training programme of Academic advisors of academic audit at P.R.Government College, Kakinada on 19th September, 2014.</li>
                            <li>Participated in International seminar on Gender issues: Transcending boundaries of culture on 19th & 20th September 2014 at Andhra University, Vizag.</li>
                            <li>Participated in International seminar on Women entrepreneurship: A Global perspective on 6th & 7th August 2014 at KBN College, Vijayawada.</li>
                            <li>Participated in National seminar on Enhancement and sustenance of quality among students and teachers: role of support services on 21st July, 2014 at KBN College, Vijayawada.</li>
                            <li>Participated in the Faculty Development Programme at KBN College on 2nd & 3rd June 2015.</li>
                        </ul>
                        <h3 style={{ textDecoration: 'underline' }}>2013-14:</h3>
                        <ul>

                            <li>27-3-2013 & 28-3-13 participated in Workshop on Better by the day at KBN College, Vijayawada.</li>
                            <li>Presented a paper titled “Post-Independence Indian English Poetry” in an International Seminar on “Comparative Literatures: Social Justice” from 29th to 31st January, 2013.</li>
                            <li>27-3-2013 & 28-3-13 participated in Workshop on Better by the day at KBN College, Vijayawada.Participated in the UGC Sponsored National Seminar on “Emerging Trends in Indian Writing in English in 21st century” held in the Dept. of English, Sri Durga Malleswara Siddhartha Mahila Kalasala, Vijayawada on 21st & 22nd January, 2014.</li>
                            <li>Participated in the Workshop on “Interactive Teaching and Professional development in English Language Teachers” organized by KBN College, Vijayawada on 11th November, 2013.</li>
                            <li>Participated in the National Seminar on Quality Initiatives in Research and extension organized by Ch. S. D. St. Theresa’s College for Women, Eluru on 19th & 20th July, 2013.</li>
                        </ul>
                        <h3 style={{ textDecoration: 'underline' }}>2012-13:</h3>
                        <ul>

                            <li>Participated in the Workshop on Better by the Day organized by KBN College, Vijayawada on 27th & 28th March, 2013.</li>
                            <li>Participated in the National Workshop on “Examination Reforms with Special Reference to Credit Based Evaluation Systems” organized by Acharya Nagarjuna University in Association with the Association of Indian Universities (AIU) from 4th – 6th March, 2013.</li>
                            <li>Participated in the UGC Sponsored National Seminar on “Significance of Green Strategies for Environmental Protection” organized by the Dept. of Chemistry, KBN College, Vijayawada on 14th & 15th December, 2012</li>
                            <li>Participated in the National Seminar on “Climate Change – A Challenge to Sustainable development” organized by KBN College, Vijayawada on 29th & 30th November, 2012.</li>
                            <li>Participated in a National Seminar cum Workshop on Quality Initiatives in Research and Extension from 19th – 20th July, 2013 held at Ch.S.D.St.Theresa College for Women.</li>
                        </ul>
                        <h3 style={{ textDecoration: 'underline' }}>BOS Member:</h3>
                        <ul>

                            <li>SVRM College, Nagaram from the Academic Year 2017-18</li>
                            <li>SDMS Kalasala, Vijayawada from the Academic Year 2016-17.</li>
                            <li>Maris Stella College, Vijayawada from the Academic Year: 2017-18 to 2020</li>
                        </ul>
                    </Box>
                </AccordionDetails>
            </Accordion>

            <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                    expandIcon={expanded === 'panel1' ? <RemoveIcon style={{ color: "white" }} /> : <AddIcon style={{ color: "white" }} />}
                    style={{ backgroundColor: "darkblue", color: "white" }}
                >
                    <Typography >Dr. Ch. Anuradha</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Box>
                        <div>
                            <h2 style={{ textDecoration: 'underline' }}> Book Publications:</h2>
                            <ul>
                                <li>Published a book entitled “AYN RAND” Novelist with a Vision and Philosophy on 2014 ISBN No: 978-93-82186-41-0 published by Prestige Books International, New Delhi.</li>
                            </ul>
                            <h2 style={{ textDecoration: 'underline' }}>Research Projects (Minor):</h2>
                            <ul>

                                <li>Publication of a research Article on “Remapping Exiled and the Diasporic Literature in the Context of Indian Writings in English” in Veda’s Journal of English Language and Literature. (The International Peer Review Journal, in 2019 (Volume 6& Issue 1), Impact Factor (SJIF)4.092 ISSN.NO.2349-9753</li>
                                <li>Publication of a research Article on “Steinbeck with His Novel the Grapes of Wrath: A critical outlook” in Veda’s Journal of English Language and Literature. (The International Peer Review Journal, in 2018 (Volume 5 & Issue 4),</li>
                                <li>Minor Research Project titled “Understanding the fallacies in Telugu/ Regional Medium Studies, Communication/ Writing Skills: A Remedial Approach” –Dr. Ch. Anuradha, KBN College, Vijayawada, dated February, 2012, UGC Financial Assistance to Minor Research Project Approval -cum sanction letter. No: F. MRP– 4081/12 (MRP/UGC- SERO) Link No: 4081 COM CODE- APNA006, total grant received 1 Lakh.</li>
                            </ul>
                            <table className="table table-bordered">
                                <tbody>
                                    <tr>
                                        <td >
                                            <p><strong>Journal Type</strong></p>
                                            <p><strong>(UGC Listed, Scopus, Web of Science)</strong></p>
                                        </td>
                                        <td>
                                            <p><strong>Journal Name</strong></p>
                                        </td>
                                        <td>
                                            <p><strong>ISSN No.</strong></p>
                                        </td>
                                        <td>
                                            <p><strong>Vol. &amp; Issue No. &amp; Year</strong></p>
                                        </td>
                                        <td >
                                            <p><strong>Page No.</strong></p>
                                        </td>
                                        <td>
                                            <p><strong>Title</strong></p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td >
                                            <p>UGC List: 49177</p>
                                        </td>
                                        <td>
                                            <p>Global Journal of Research Analysis</p>
                                        </td>
                                        <td>
                                            <p>2277-8160</p>
                                            <p>&nbsp;</p>
                                        </td>
                                        <td>
                                            <p>Vol. 6, Issue 9</p>
                                            <p>Sep, 2017</p>
                                        </td>
                                        <td >
                                            <p>Impact Factor for 2016-17 is 4.547</p>
                                        </td>
                                        <td>
                                            <p>Cyber Savagery &ndash; A Challenge to Women Empowerment</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td >
                                            <p>UGC List: 49177</p>
                                        </td>
                                        <td>
                                            <p>Global Journal of Research Analysis</p>
                                        </td>
                                        <td>
                                            <p>2277-8160</p>
                                        </td>
                                        <td>
                                            <p>Vol. 6, Issue 9</p>
                                            <p>Sep, 2017</p>
                                        </td>
                                        <td >
                                            <p>Impact Factor for 2016-17 is 4.547</p>
                                        </td>
                                        <td>
                                            <p>Learning to live together in Peace and Harmony through Self &ndash; Exploration</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td >
                                            <p>&nbsp;</p>
                                        </td>
                                        <td>
                                            <p>Notions a peer reviewed journal of English Literature</p>
                                        </td>
                                        <td>
                                            <p>ISSN No: 2395-7239</p>
                                        </td>
                                        <td>
                                            <p>ISSUE No. 3. Vol. 6, 2015</p>
                                        </td>
                                        <td >
                                            <p>Page No. 83-87.</p>
                                        </td>
                                        <td>
                                            <p>Trends in English Literature of 21<sup>st</sup> Century</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td >
                                            <p>&nbsp;</p>
                                        </td>
                                        <td>
                                            <p>Notions a peer reviewed journal of English Literature</p>
                                        </td>
                                        <td>
                                            <p>ISSN No: 2395-7239,</p>
                                        </td>
                                        <td>
                                            <p>ISSUE No. 4. Vol. 6, 2015</p>
                                            <p>Impact Factor: 3.9531</p>
                                        </td>
                                        <td >
                                            <p>&nbsp;</p>
                                        </td>
                                        <td>
                                            <p>Bharati Mukherjee Represents Women Self</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td >
                                            <p>&nbsp;</p>
                                        </td>
                                        <td>
                                            <p>Notions a peer reviewed journal of English Literature</p>
                                        </td>
                                        <td>
                                            <p>ISSN No: 2395-7239</p>
                                        </td>
                                        <td>
                                            <p>ISSUE No. 3, Vol. 7, , Impact Factor: 3.9531, 2015</p>
                                        </td>
                                        <td >
                                            <p>&nbsp;</p>
                                        </td>
                                        <td>
                                            <p>George Bernand Shaw as Social Reformer: A Quick Look through Pygmalion</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td >
                                            <p>&nbsp;</p>
                                        </td>
                                        <td>
                                            <p>Notions a peer reviewed journal of English Literature</p>
                                        </td>
                                        <td>
                                            <p>ISSN No: 2395-7239,</p>
                                        </td>
                                        <td>
                                            <p>ISSUE No. 1, Vol. 8, Impact Factor: 3.9531, 2015</p>
                                        </td>
                                        <td >
                                            <p>&nbsp;</p>
                                        </td>
                                        <td>
                                            <p>Understanding themes, Motifs and Myths through death of Salesman by Arthur Miller</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td >
                                            <p>&nbsp;</p>
                                        </td>
                                        <td>
                                            <p>Multi-subject journal of Global Journal for Research Analysis</p>
                                        </td>
                                        <td>
                                            <p>ISSN No: 2277-8160</p>
                                        </td>
                                        <td>
                                            <p>ISSUE No. 8. Vol. 1, Aug, 2014</p>
                                            <p>IF: 1.5408</p>
                                        </td>
                                        <td >
                                            <p>&nbsp;</p>
                                        </td>
                                        <td>
                                            <p>Women Entrepreneurship</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td >
                                            <p>&nbsp;</p>
                                        </td>
                                        <td>
                                            <p>VEDA&rsquo;s journal of English Language and Literature (JOELL)&rdquo;</p>
                                        </td>
                                        <td>
                                            <p>&nbsp;</p>
                                        </td>
                                        <td>
                                            <p>Impact Factor: 1.5408, August, 2014</p>
                                        </td>
                                        <td >
                                            <p>Page No. 62-63.</p>
                                        </td>
                                        <td>
                                            <p>Expatriate Literature &ndash; A- Bird&rsquo;s Eye View</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td >
                                            <p>&nbsp;</p>
                                        </td>
                                        <td>
                                            <p>VEDA&rsquo;s journal of English Language and Literature (JOELL)</p>
                                        </td>
                                        <td>
                                            <p>ISSN No: 2349-9753</p>
                                        </td>
                                        <td>
                                            <p>ISSUE No. 3. Vol. 1, , 2014</p>
                                            <p>Impact Factor: 1.5408</p>
                                        </td>
                                        <td >
                                            <p>Page No. 51-53.</p>
                                        </td>
                                        <td>
                                            <p>The Remnants of the past in the writings of Bharati Mukherjee</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td >
                                            <p>&nbsp;</p>
                                        </td>
                                        <td>
                                            <p>Notions a peer reviewed journal of English Literature</p>
                                        </td>
                                        <td>
                                            <p>ISSN NO: 0976-5247,</p>
                                        </td>
                                        <td>
                                            <p>VOL.4 Dec 2013</p>
                                            <p>&nbsp;</p>
                                        </td>
                                        <td >
                                            <p>&nbsp;</p>
                                        </td>
                                        <td>
                                            <p>Ayn Rand and the evolution of Russian Literature &ndash; A critical outlook</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td >
                                            <p>&nbsp;</p>
                                        </td>
                                        <td>
                                            <p>Exploring Fourth World Literatures</p>
                                        </td>
                                        <td>
                                            <p>&nbsp;</p>
                                        </td>
                                        <td>
                                            <p>Vol. 1, 2012</p>
                                        </td>
                                        <td >
                                            <p>&nbsp;</p>
                                        </td>
                                        <td>
                                            <p>&ldquo;Interrogating Nativity in the Works of Jeanette Armstrong&rdquo;</p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                            <h2 style={{ textDecoration: 'underline' }}>Paper Presentations:</h2>
                            <ul>
                                <h3 style={{ textDecoration: 'underline' }}>2017-18:</h3>
                                <li>Presented a paper entitled” Humanism – Have a Blissful Life” in the UGC Sponsored One Day National Seminar on Humanism – Essential for Ideal Society & Blissful Life organized by KBN College on 30th June, 2017.</li>
                                <li>Presented a paper entitled “Women in 21st Century Media” in the UGC Sponsored National Seminar on Women Empowerment: Media, Cinema & Theatre – Prospects & Challenges organized by KBN College, Vijayawada on 21st & 22nd July, 2017.</li>
                            </ul>
                            <ul>
                                <h3 style={{ textDecoration: 'underline' }}>2016-17:</h3>
                                <li>Presented a paper on “The Cultural Gap Depicted in the Interpreter of Melodies” in the National Seminar on Challenges in Teaching Language organized by SRR & CVR Govt. Degree College on 25th July 2016.</li>
                            </ul>
                            <ul>
                                <h3 style={{ textDecoration: 'underline' }}>2015-2016</h3>
                                <li>Presented a paper entitled “The Status of Paula Gunn Allen as Native American Writer with reference to her the Woman who owned the shadows” in Global Seminar on Celebrating the Ancient/Contemporary Wisdom of Fourth World in Global Seminar organized by Acharya Nagarjuna University, Guntur conducted from 14th to 16th December, 2015.</li>
                                <li>Presented a paper entitled “Post-colonial Study of Women with Reference to the Selected Novels of Namita Gokhale and Shaila Abdullah” in the National Seminar on New Aspects in Postcolonical Literature organized by Andhra Loyola College, Vijayawada conducted from 6th to 7th January, 2016.</li>
                            </ul>
                            <ul>
                                <h3 style={{ textDecoration: 'underline' }}>2014-2015</h3>
                                <li>Presented a paper on Writing Skills at Under Graduate level in the National Smeinar on English Language Teaching at Under Graduate Level in India : Toward the elimination of the inability to speak and write effectively in the research perspective on 28th & 29th November, 2014.</li>
                                <li>Presented a paper entitled “The Role of Education in Nation Building” in One Day National Seminar on Enhancement and Sustenance of Quality among students and Teachers: Role of Support Services organized by KBN College, Vijayawada on 21st July, 2014.</li>
                                <li>Presented a paper entitled “Women Entrepreneurship” in the International Seminar conducted from 6th to 7th August, 2014 on Women Entrepreneurship – Challenges at KBN College, Vijayawada.</li>
                                <li>Presented a paper entitled “Advanced Materials in Physics” in National Seminar on Applications on Physics Advanced Materials at KBN College, Vijayawada conducted from15th to 16th October, 2014</li>
                                <li>Presented a paper entitled “Writing skills at undergraduate Level” in the UGC sponsored National Seminar on English Language Teaching at Undergraduate Level in India: Toward the elimination of the inability to speak and write effectively, a research perspective” organized by SVRM College, Nagaram on 28th & 29th November, 2014.</li>
                            </ul>
                            <ul>
                                <h3 style={{ textDecoration: 'underline' }}>2013-2014</h3>
                                <li>Presented a paper entitled “Research and its kinds” in the National Seminar cum Workshop on Quality Initiatives in Research and Extension” organized by Ch. S. D. St. Theresa’s College, Eluru on 19th & 20th July, 2013.</li>
                                <li>Presented a paper entitled “New trends in English Literature of 21st Century” in the National Seminar on Trends in English Language & Literature in the 21st Century organized by Dharma Appa Rao College, Nuzvid on 29th & 30th November, 2013.</li>
                                <li>Presented a paper entitled “Githa Hariharan’s : The thousand faces of Night: as a replica of Indian Culture and its influence on women” in the National Seminar on Emerging Trends in Indian Writing in English in 21st century on 21st & 22nd January, 2014.</li>
                            </ul>
                            <ul>
                                <h3 style={{ textDecoration: 'underline' }}>2012-2013</h3>
                                <li>Presented a paper entitled “Conservation of Natural Resources” in the National Seminar on Climate Change- A Challenge to Sustainable Development at KBN College on29th and 30th November, 2012.</li>
                                <li>Presented a paper entitled “Lee Maracle: A Native Canadian” in the Global Seminar on Exploring the Cultural and Literary Nationalism of Fourth World at Acharya Nagarjuna University , Guntur conducted from 14th to 16th December, 2012.</li>
                            </ul>
                            <h2 style={{ textDecoration: 'underline' }}>Participation</h2>
                            <ul>
                                <h3 style={{ textDecoration: 'underline' }}>2019-2020</h3>
                                <li>Participated in the UGC Sponsored One – Day National Workshop on “Building Communicative Competence in English Language” organized by Department of English, KBN College, Vijayawada on 14th September,2019.</li>

                            </ul>
                            <ul>
                                <h3 style={{ textDecoration: 'underline' }}>2018-2019</h3>
                                <li>Participated in One-Day National Workshop on “Research Methodology: Approaches and Techniques organised by PB Siddhartha College of Arts & Science, Vijayawada, on 3rd November, 2018.</li>
                                <li>Participated in One-Day National Workshop on “ESL Class rooms: meeting curricular and corporate goals organised by KBN College Vijayawada, on 21st August, 2018.</li>
                            </ul>
                            <ul>
                                <h3 style={{ textDecoration: 'underline' }}>2017-2018</h3>
                                <li>Participated in the UGC Sponsored (Under Autonomous Grants) One Day National Workshop on “English Accent Training: A Trainer Training Programme” organized by Dept. of English, KBN College, Vijayawada on 25th November, 2017.</li>
                                <li>Attended a One Day Workshop on “Teaching Communication Skills through Digital Mode” on 9th August, 2017 organized by JKC College, Guntur.</li>
                                <li>Attended One Week Orientation Programme on “Future Trends in Quality Enhancement of Professional & Academic Skills in HEIs” organized by IQAC, KBN college from 5th – 11th August, 2017.</li>
                            </ul>
                            <ul>
                                <h3 style={{ textDecoration: 'underline' }}>2016-2017</h3>
                                <li>Participated in Propell Train the Trainer Workshop for the TOEFL iBT Test (Listening, Reading, Speaking & Writing) on 13th May, 2017.</li>
                                <li>Participated in National Women’s Parliament organized by Legislative Assembly, AP from 10th – 12th February, 2017.</li>
                                <li>Attended One Week National Workshop on “Emerging Trends and Challenges to Enhance Quality in Higher Education” organized by IQAC, JMJ College for Women, Tenali from 1st to 7th November 2016.</li>
                                <li>Participated in the UGC Funded One Day National Workshop on “Research and Innovations: Issues and Challenges” NWRIIC – 2016 organized by IQAC, KBN College, Vijayawada held on 22nd October 2016.</li>
                                <li>Participated in One Day Regional Awareness Workshop on “New Curriculum for General English and Communication & Soft Skills” organized by the Department of English, KBN College in association with Krishna University, Machilipatnam on 6th August 2016.</li>
                                <li>Participated in the FDP Programme on “Skill Development and Effective Teaching in Academia” organized by IQAC, KBN College on 2nd June 2016.</li>
                                <li>Participated in the National Seminar on “Challenges in Teaching Language” organized by SRR & CVR Govt. Degree College, Vijayawada on 25th July, 2016.</li>
                            </ul>
                            <ul>
                                <h3 style={{ textDecoration: 'underline' }}>2014-2015</h3>
                                <li>Participated in the National Seminar on “English language Teaching at Undergraduate Level in India: Towards the Elimination of the Inability to Speak and Write Effectively: A Research Perspective</li>
                                <li>Participated in National seminar on Development of advanced materials in physics and electronics and their application at KBN College, Vijayawada on 15th & 16th October 2014.</li>
                                <li>Participated in International seminar on Women entrepreneurship: A Global perspective on 6th & 7th August 2014 at KBN College, Vijayawada.</li>
                                <li>Participated in National seminar on Enhancement and sustenance of quality among students and teachers: role of support services on 21st July, 2014 at KBN College, Vijayawada.</li>
                                <li>Participated in the Faculty Development Programme at KBN College on 2nd & 3rd June 2015.</li>


                            </ul>
                            <ul>
                                <h3 style={{ textDecoration: 'underline' }}>2013-2014</h3>
                                <li>Participated in a Workshop on Interactive teaching and professional development in English Language teachers on 11-11-2013 at KBN College, Vijayawada.</li>
                                <li>Participated in the National Seminar on Quality initiatives in Research and extension organized by Ch. S. D. St. Theresa’s College for Women, Eluru on 19th & 20th July, 2013.</li>
                                <li>Participated in the UGC Sponsored National Seminar on “Emerging Trends in Indian Writing in English in 21st century” held in the Dept. of English, Sri Durga Malleswara Siddhartha Mahila Kalasala, Vijayawada on 21st & 22nd January, 2014</li>
                            </ul>
                            <ul>
                                <h3 style={{ textDecoration: 'underline' }}>2012-2013</h3>
                                <li>She has taken Three Sessions in English on 21.12.2006 and 22.12.2006 for Clerical Staff Members of Andhra Bank, Zonal Office, Vijayawada.</li>
                                <li>Attended a Workshop conducted from 27th to 28th March 2013 on Better by the Day at -KBN College, Vijayawada.</li>
                            </ul>
                            <h2 style={{ textDecoration: 'underline' }}>BOS Member:</h2>
                            <li>SRR & CVR Government Degree College, Vijayawada for the Academic Year 2016-17.</li>
                        </div>
                    </Box>
                </AccordionDetails>
            </Accordion>
            <Accordion square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary
                    expandIcon={expanded === 'panel2' ? <RemoveIcon style={{ color: "white" }} /> : <AddIcon style={{ color: "white" }} />}
                    style={{ backgroundColor: "darkblue", color: "white" }}
                >
                    <Typography >Mr.N. Victor David Dinakaran</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Box>
                        <h2 style={{ textDecoration: 'underline' }}>Awards</h2>
                        <ul>
                            <li>Received Indian Iconic Educationist Award from the Glorious Organization for Accelerated to Literacy, New Delhi on 6th October, 2017.</li>
                            <div>
                                <img src='http://www.kbncollege.ac.in/images/gifimages/english_dinakaran_ach.gif' alt='gif-img' style={{ border: "1px solid red", height: "500px", width: "500px" }} /></div>
                        </ul>
                        <ul>
                            <h3 style={{ textDecoration: 'underline' }}>Any other:</h3>
                            <li>Resource Person for Delivering a Guest Lecture on “Communication Skills for Advanced English Students” at Ch. S. D. Theresa’s College (A) for Women, Eluru on 1st July, 2017.</li>
                            <li>Chief Guest for UGC Higher Education for Persons with Disabilities organized Andhra Loyola College 5th January, 2017.</li>
                            <li>Delivered Keynote Address on “Abilities of the Visually Challenged”, Andhra Loyola College, Vijayawada on 14th September, 2016</li>
                            <li>Resource Person for delivering a Guest Lecture at P.V.P. Siddhartha Institute of Technology, on “Personality Development” on 29th December, 2015.</li>
                            <li>Resource Person for UGC – NET Exam, Paper – I – General Studies &
                                Paper- II – English, organised by the Department of English, Acharya Nagarjuna University from 28th May to 2nd June, 2012 & 18th – 24th June, 2012.</li>
                        </ul>
                        <ul>
                            <h3 style={{ textDecoration: 'underline' }}>Publications:</h3>
                            <table className="table table-bordered">
                                <tbody>
                                    <tr>
                                        <td >
                                            <p><strong>Journal Type</strong></p>
                                            <p><strong>&nbsp;</strong></p>
                                        </td>
                                        <td>
                                            <p><strong>Journal Name</strong></p>
                                        </td>
                                        <td >
                                            <p><strong>ISSN No.</strong></p>
                                        </td>
                                        <td >
                                            <p><strong>Vol. &amp; Issue No.</strong></p>
                                        </td>
                                        <td colspan="2">
                                            <p><strong>Page No.</strong></p>
                                        </td>
                                        <td >
                                            <p><strong>Title</strong></p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td >
                                            <p>-</p>
                                        </td>
                                        <td>
                                            <p>Special Edition: New Directions in Post- Colonial Literature</p>
                                        </td>
                                        <td >
                                            <p>ISBN NO:978-81-936088-6-9</p>
                                        </td>
                                        <td colspan="2" >
                                            <p>&nbsp;</p>
                                        </td>
                                        <td >
                                            <p>35-43</p>
                                        </td>
                                        <td >
                                            <p>Interrogating Moral Standards and Gender in Modern Society In Vijay Tendulkar&rsquo;s Silence! The Court is in Session</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td >
                                            <p>-</p>
                                        </td>
                                        <td>
                                            <p>International Journal of Education For The Future (IJEF)</p>
                                        </td>
                                        <td >
                                            <p>2394-9902</p>
                                        </td>
                                        <td colspan="2" >
                                            <p>To be published</p>
                                        </td>
                                        <td >
                                            <p>&nbsp;</p>
                                        </td>
                                        <td >
                                            <p>Inclusive Education in India Role of Technology</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td >
                                            <p>-</p>
                                        </td>
                                        <td>
                                            <p>International Journal of Education for the 21st Century (A Bi-annual/Peer Reviewed / Referred / Multidisciplinary Journal)</p>
                                        </td>
                                        <td >
                                            <p>2349-5774</p>
                                        </td>
                                        <td colspan="2" >
                                            <p>Vol.4, Issue No.1, January &ndash; June 2017</p>
                                        </td>
                                        <td >
                                            <p>60-63</p>
                                        </td>
                                        <td >
                                            <p>Rethinking disability in the 21st Century</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td >
                                            <p>-</p>
                                        </td>
                                        <td>
                                            <p>International Journal : New Directions in Post &ndash; Colonial Literature (ISCS)</p>
                                        </td>
                                        <td >
                                            <p>ISBN NO. 978-93-82186-99-1</p>
                                        </td>
                                        <td colspan="2" >
                                            <p>January,2017</p>
                                        </td>
                                        <td >
                                            <p>264-270</p>
                                        </td>
                                        <td >
                                            <p>Reflections of Societal Attitudes towards persons with&nbsp; disabilities in Salman Rushdie&rsquo;s Shame</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td >
                                            <p>-</p>
                                        </td>
                                        <td>
                                            <p>International Journal of Innovative Research in Science Engineering and Technology</p>
                                        </td>
                                        <td >
                                            <p>2349-7009, Impact Factor: 3.391</p>
                                        </td>
                                        <td colspan="2" >
                                            <p>Vol.3, Issue 09, December, 2016</p>
                                        </td>
                                        <td >
                                            <p>&nbsp;</p>
                                        </td>
                                        <td >
                                            <p>Education and Modernization In India</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td >
                                            <p>-</p>
                                        </td>
                                        <td>
                                            <p>Special Edition-Celebrating Literary Theory- 2014: edited and Published by Dept. of English, The Madura College, Madurai.</p>
                                        </td>
                                        <td >
                                            <p>978-81-920310-5-7</p>
                                        </td>
                                        <td colspan="2" >
                                            <p>March, 2015</p>
                                        </td>
                                        <td >
                                            <p>134-146</p>
                                        </td>
                                        <td >
                                            <p>Feminism Moral Standards in Modern Society in Vijay Tendulkar&rsquo;s &ndash; Silence the court is in session</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td >
                                            <p>-</p>
                                        </td>
                                        <td>
                                            <p>A Multi-subject</p>
                                            <p>Global Journal for Research Analysis</p>
                                            <p>&nbsp;</p>
                                        </td>
                                        <td >
                                            <p>2277-8160</p>
                                        </td>
                                        <td colspan="2" >
                                            <p>Issue No. 8. Vol. 4</p>
                                            <p>August, 2014. IMPACT FACTOR: 1.5408</p>
                                        </td>
                                        <td >
                                            <p>33-38</p>
                                        </td>
                                        <td >
                                            <p>Indian Feminist Theatre: Aesthetics</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td >
                                            <p>-</p>
                                        </td>
                                        <td>
                                            <p>International Journal of English Language, Literature &amp; Translation Studies &ndash; A peer reviewed International Research Journal.</p>
                                        </td>
                                        <td >
                                            <p>2349-9451.</p>
                                        </td>
                                        <td colspan="2" >
                                            <p>Vol. 1. S1., 2014</p>
                                        </td>
                                        <td >
                                            <p>PAGE NO 1-4</p>
                                        </td>
                                        <td >
                                            <p>The Role and Significance of the Language Laboratory in inculcating communication Skills &ndash; A study on the usefulness of&nbsp; Audio-Visual Aids in EF</p>
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                        </ul>
                        <h2 style={{ textDecoration: 'underline' }}>Paper Presentation</h2>
                        <ul>
                            <h3 style={{ textDecoration: 'underline' }}>2019-2020</h3>
                            <li>Presented a Paper entitled “Finding a Voice the Gender in Mahesh Duttani’s, Final Solutions, Where There is a Will, Dance Like a Man” in the Two Day International Seminar on Social, Ethical and Cultural Values as Depicted in Drama organized by Sri Y.N. College (Autonomous), Narsapur on 13th & 14th December, 2019.</li>

                        </ul>
                        <ul>
                            <h3 style={{ textDecoration: 'underline' }}>2017-2018</h3>
                            <li>Presented a paper on “Patriarchy and Gender in Mahesh Dattani’s Plays” in the International Seminar organised by Andhra Loyola Degree College (Autonomous) held on 14, 15 & 16 March, 2018.</li>
                            <li>Presented a paper on “Inclusive Education in India Role of Technology” in a Two Day National Seminar on Recent Trends in Inclusive Education held on 7th & 8th February, 2018 organized by Madonna College for the Deaf, Gunadala, Vijayawada.</li>
                            <li>Presented in the National Workshop cum Seminar on “Translation and National Integration” organised by the Department of English, Acharya Nagarjuna University from 18th – 25th January, 2017.</li>
                            <li>Presented a paper on “Gender and Patriarchy in Mahesh Dattani’s plays with reference to the final solutions, where there is a will and dance like a man”, in the UGC Sponsored National Seminar jointly organised by Krishna University on “Women Empowerment: Media, Cinema and theatre – Prospects & Challenges” held on 21st – 22nd July, 2017.</li>
                        </ul>
                        <ul>
                            <h3 style={{ textDecoration: 'underline' }}>2016-2017</h3>
                            <li>Presented a paper on “Reflections of Societal Attitudes towards persons with disabilities in Salman Rushdie’s Shame” in the Two Day National Seminar on Impact of Ambedkarism on Indian Reality organized by Andhra Loyola College, Vijayawada on 3rd & 4th December, 2016.</li>
                            <li>Presented a paper on “Education and Modernization in India” in the UGC Sponsored Two Day International Conference on “Digital India – The Information for All (ICDIA – 2016) organized by the Dept. of Computer Science & Applications, KBN College, Vijayawada on 2nd & 3rd December, 2016.</li>
                            <li>Presented a paper on “Digging as paradigm with reference to Seamus Heaney’s poem Digging” in the National Seminar on Challenges in Teaching organized by SRR & CVR Govt. Degree College, Vijayawada on 25th July 2016.</li>
                        </ul>
                        <ul>
                            <h3 style={{ textDecoration: 'underline' }}>2015-2016</h3>
                            <li>Presented a paper on “The Conception of Moral Standards, Gender in Modern Society in Vijay Tendulkar’s Silence! The Court is in Session in the National Seminar New Aspects in Postcolonial Literature organized by Andhra Loyola College, Vijayawada on 6th January, 2016.</li>
                        </ul>
                        <ul>
                            <h3 style={{ textDecoration: 'underline' }}>2014-2015</h3>
                            <li>Presented a Paper titled Feminism Moral Standards in Modern Society in Vijay Tendulkar’s-Silence the court is in session” in the UGC Sponsored National Conference on Facets of Literary theory held at Madurai College(Autonomous) on 19-20 March 2015,at Madurai.</li>
                            <li>Presented a paper entitled “Women Entrepreneurship in India Imperatives” in the UGC Sponsored Two Day National Seminar on Entrepreneurship in India – The Status and Imperatives organized by Dept. of Commerce, SKSD Mahila Kalasala, Tanuku on 15th & 16th February, 2015.</li>
                            <li>Presented a Paper entitled “Ambivalence in Kipling’s plain tales from the hill with special reference to consequences & the taking of Lungtung pen” in the UGC Sponsored National Seminar on “New Directions in English Language and Literature” organized by Dept of English, MANU on 13th and 14th Feb 2015.</li>
                            <li>Presented a Paper on “Domestic violence in India-Causes, Consequences & Remedies” in the UGC Sponsored National Seminar on “Human Rights-A study & Review” held on 17th and 18th Dec 2014 at Dharma Apparao College, Nuzvid, Krishna Dist.</li>
                            <li>Presented a Paper in the UGC Sponsored National Seminar on “English Language teaching at under Graduate level in India: Toward the Elimination of the inability to speak and write effectively, A Research perspective” organised by the Dept of English, SVRM College, Nagaram, Guntur Dist on 28th and 29th Nov 2014.</li>
                            <li>Presented a paper entitled “Assessment and evaluation in Higher Education – Some concepts & Principles in the Two Day National Seminar on Innovations in Higher Education organized by IQAC, PB Siddhartha College of Arts & Science on 7th & 8th November, 2014.</li>
                            <li>Presented a paper entitled “Applications of Solar Energy Source Materials” in Two Day UGC Sponsored National Seminar on Development of Advanced Materials of Physics & Electronics and Their Applications organized by the Department of Physics & Electronics, KBN College, Vijayawada on 15th & 16th October, 2014.</li>
                            <li>Presented a Paper entitled “Re-creating Myths, Legends and Folk tales in Girish Karnad’s Yayathi, Tughlaq, Hayavadana and Nagamandala in the International Seminar on Gender Issues: Transcending Boundaries of Culture organized by Dept. of English, Andhra University, Visakhapatnam on 19th & 20th September, 2014.</li>
                            <li>Presented a paper entitled “Indian Feminist Theatre: Aesthetics” in the UGC sponsored International Seminar on Women Entrepreneurship – A Global Perspective organized by KBN College, Vijayawada on 6th & 7th August, 2014.</li>
                            <li>Presented a paper entitled “Technical Manpower, Performance in India” in One Day National Seminar on Enhancement and Sustenance of Quality Among Students and Teachers: Role of Support Services organized by IQAC, KBN College, Vijayawada on 21st July, 2014.
                            </li>
                        </ul>
                        <ul>
                            <h3 style={{ textDecoration: 'underline' }}>2013-2014</h3>
                            <li>Presented a paper entitled “Innovative Methods on Teaching” in the UGC Sponsored National Seminar on Trends in English Language & Literature in the 21st Century organized by Dharma Appa Rao College, Nuzvid on 29th & 30th November, 2013.</li>
                            <li>Presented a Paper entitled “Global Communication in English Language” on 6th & 7th February, 2013 organized by P.B. Siddhartha Institute of Technology.</li>
                            <li>Presented a paper titled “Post-Independence Indian English Poetry” in an International Seminar on “Comparative Literatures: Social Justice” from 29th to 31st January, 2013.</li>
                            <li>Presented a Paper entitled “ICT in English Language Teaching & Learning” in the National Conference on Communication Skills for Academic Excellence & Career Development on 28th March, 2014 organized by PVP Siddhartha Institute of Technology.</li>
                            <li>Presented a paper entitled “Student Panel Discussion, Role of Integrated Education for the Blind” in Two day Seminar cum Workshop on Inclusive Education: English Language Classroom and Disabilities organized by the Department of Comparative Literature, University of Hyderabad on 23rd & 24th January, 2014.</li>
                        </ul>
                        <ul>
                            <h3 style={{ textDecoration: 'underline' }}>2012-2013</h3>
                            <li>Presented a paper entitled “Global Communication in English Language” in the National Seminar on Globalization in English Studies organized by Krishna University, Machilipatnam on 6th & 7th February, 2013.</li>
                            <li>Presented a paper entitled “Biosphere Reserves of India” in the UGC Sponsored National Seminar on Climate Change – A Challenge to Sustainable Development organized by Dept. of Zoology, KBN College, Vijayawada on 29th & 30th November, 2012.</li>
                        </ul>
                        <h2 style={{ textDecoration: 'underline' }}>Participation</h2>
                        <ul>
                            <h3 style={{ textDecoration: 'underline' }}>2019-2020</h3>
                            <li>Participated in the UGC Sponsored One – Day National Workshop on “Building Communicative Competence in English Language” organized by Department of English, KBN College, Vijayawada on 14th September, 2019.</li>
                        </ul>
                        <ul>
                            <h3 style={{ textDecoration: 'underline' }}>2018-2019</h3>
                            <li>Participated in the UGC Sponsored One Day International Workshop on “Ecocriticism” organized by Sri Y. N. College, Narsapur on 21st February, 2019.</li>
                            <li>Participated in the One Week Workshop cum Seminar Translation and National Integration organized by Acharya Nagarjuna University, Guntur from 18th to 25th January, 2019.</li>
                            <li>Participated National Council of Churches in “Institute on Disability” organized by National Council of Churches, Nagapur on 19th to 22nd November, 2018.</li>
                            <li>Participated in One-Day National Workshop on “Research Methodology: Approaches and Techniques organised by PB Siddhartha College of Arts & Science, Vijayawada, on 3rd November, 2018.</li>
                            <li>Participated in One-Day National Workshop on “ESL Class rooms: meeting curricular and corporate goals organised by KBN College Vijayawada, on 21st August, 2018</li>
                        </ul>
                        <ul>
                            <h3 style={{ textDecoration: 'underline' }}>2017-2018</h3>
                            <li>Participated in the UGC Sponsored (Under Autonomous Grants) One Day National Workshop on “English Accent Training: A Trainer Training Programme” organized by Dept. of English, KBN College, Vijayawada on 25th November, 2017.</li>
                            <li>Participated in the One Day National Seminar on “RAJBHASHA HINDI: ANUVAD KI SAMASYAEN” Organized by Department of Hindi, KBN College in collaboration with Krishna University, Machilipatnam on 23rd September, 2017.</li>
                            <li>Participated in the National Seminar on Social Responsibility & Ethics in Higher Education organized by VSR & NVR College, Tenali on 1st September, 2017.</li>
                            <li>Attended A Two- Day Residential Programme on “English for Digital Age” organised by APHRDA, Bapatla on 18th & 19th August, 2017.</li>
                            <li>Attended One Week Orientation Programme on “Future Trends in Quality Enhancement of Professional & Academic Skills in HEIs” organized by IQAC, KBN college from 5th – 11th August, 2017.</li>
                            <li>Attended a One Day Workshop on “Teaching Communication Skills through Digital Mode” on 9th August, 2017 organized by JKC College, Guntur.</li>
                            <li>Participated in the UGC Sponsored One Day National Seminar on Humanism – Essential for Ideal Society & Blissful Life organized by KBN College on 30th June, 2017.</li>
                            <li>Participated in the Propell Workshop for the TOEFL iBT Test on Listening, Reading, Speaking and Writing on 13th May, 2017.</li>
                        </ul>
                        <ul>
                            <h3 style={{ textDecoration: 'underline' }}>2016-2017</h3>
                            <li>Participated in the UGC Sponsored One Day National Seminar on “The Science behind Ageing: Can Science Modulate the Process?” organized by UGC Women’s Studies Centre on 27th March, 2017.</li>
                            <li >Participated in the UGC Funded One Day National Workshop on “Research and Innovations: Issues and Challenges” NWRIIC – 2016 organized by IQAC, KBN College, Vijayawada held on 22nd October 2016.</li>
                            <li>Participated in the One Day Regional Awareness Workshop on “New Curriculum for General English and Communication & Soft Skills” organized by the Department of English, Krishna University, Machilipatnam in association with KBN College on 6th August 2016.</li>
                            <li>Participated in the FDP Programme on “Skill Development and Effective Teaching in Academia” organized by IQAC, KBN College on 2nd June 2016.</li>
                        </ul>
                        <ul>
                            <h3 style={{ textDecoration: 'underline' }}>2015-2016</h3>
                            <li>Participated in the UGC Sponsored National workshop on “Human Values & Professional Ethics-Essential For Individual and Society organized by Value Educational cell and Dept. of Telugu, KBN College on 24th-25th July 2015.</li>
                            <li>Participated in the faculty development programme on 2nd & 3rd June 2015 at KBNC.</li>
                        </ul>
                        <ul>
                            <h3 style={{ textDecoration: 'underline' }}>2014-2015</h3>
                            <li>Participated in the International & Interdisciplinary Conference on “Language, Literature Cultural Studies & Knowledge Resources” held at Vignan’s University, Vadlamudi on 5th & 6th February, 2015.</li>
                            <li>Participated National seminar on Development of advanced materials in Physics and Electronics and their application at KBN College, Vijayawada on 15th & 16th October 2014.</li>
                            <li>Participated in Inter National seminar on Gender issues: Transcending boundaries of culture on 19th & 20th September 2014 at Andhra University, Vizag.</li>
                            <li>International seminar on Women entrepreneurship: A Global perspective on 6th & 7th August 2014 at KBN College, Vijayawada.</li>
                            <li>Participated in National seminar on Enhancement and sustenance of quality among students and teachers: role of support services on 21st July, 2014 at KBN College, Vijayawada.</li>
                            <li>Participated in the Faculty Development Programme at KBN College on 2nd & 3rd June 2015.</li>
                        </ul>
                        <ul>
                            <h3 style={{ textDecoration: 'underline' }}>2013-2014</h3>
                            <li>Participated in the Workshop on “Interactive teaching and Professional development in English Language Teachers” organized by KBN College, Vijayawada on 11th November, 2013. 27-3-2013 & 28-3-13 participated in Workshop on Better by the day at KBN College, Vijayawada.</li>
                            <li>Participated in the UGC Sponsored National Seminar on “Emerging Trends in Indian Writing in English in 21st century” organised by the Dept. of English, held at Sri Durga Malleswara Siddhartha Mahila Kalasala, Vijayawada on 21st & 22nd January, 2014.</li>
                            <li>Participated in the Workshop on “Interactive teaching and Professional development in English Language Teachers” organized by KBN College, Vijayawada on 11th November, 2013</li>
                            <li>Participated in the National Seminar on Quality initiatives in Research and extension organized by Ch. S. D. St. Theresa’s College for Women, Eluru on 19th & 20th July, 2013.</li>
                        </ul>
                        <ul>
                            <h3 style={{ textDecoration: 'underline' }}>2012-2013</h3>
                            <li>Participated in the Workshop on Better by the Day organized by KBN College, Vijayawada on 27th & 28th March, 2013.</li>
                            <li>Participated in an International Seminar on “Comparative Literatures: Social Justice” from 29th to 31st January, 2013.</li>
                            <li>Participated in the UGC Sponsored National Seminar on “Significance of Green Strategies for Environmental Protection” organized by the Dept. of Chemistry, KBN College, Vijayawada on 14th & 15th December, 2012</li>
                            <li>Participated in the National Seminar on “Climate Change – A Challenge to Sustainable development” organised by the Department of Zoology organized by KBN College, Vijayawada on 29th & 30th November, 2012.</li>
                        </ul>
                        <ul>
                            <p ><b>BOS Member:</b> SVRM College, Nagaram from the Academic Year 2015-16 to 2016-17</p>
                        </ul>
                        <ul>
                            <h3 style={{ textDecoration: 'underline' }}>Extension Lectures:</h3>
                            <li>Invited as a Guest on the inauguration of Digital Literacy Lab for Visually Challenged organised by the UGC Hepson in Association with enable India at Andhra Loyola College, Vijayawada, on 30th November, 2018.</li>
                            <li>Invited to Deliver a Guest Lecture on communicative English for competitive careers organised by the department of English DNR Degree College for women, Palakol on 23rd August, 2018.</li>
                        </ul>
                    </Box>
                </AccordionDetails>
            </Accordion>
            <Accordion square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary
                    expandIcon={expanded === 'panel3' ? <RemoveIcon style={{ color: "white" }} /> : <AddIcon style={{ color: "white" }} />}
                    style={{ backgroundColor: "darkblue", color: "white" }}
                >
                    <Typography >Ms. S. Santha Kumari</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Box>
                        <h2 style={{ textDecoration: 'underline' }}>Publications:</h2>
                        <table class="table table-bordered">
                            <tbody>
                                <tr>
                                    <td>
                                        <p><strong>Journal Type</strong></p>
                                        <p><strong>(UGC Listed, Scopus, Web of Science)</strong></p>
                                    </td>
                                    <td>
                                        <p><strong>Journal Name</strong></p>
                                    </td>
                                    <td>
                                        <p><strong>ISSN No.</strong></p>
                                    </td>
                                    <td>
                                        <p><strong>Vol. &amp; Issue No.</strong></p>
                                    </td>
                                    <td >
                                        <p><strong>Page No.</strong></p>
                                    </td>
                                    <td>
                                        <p><strong>Title</strong></p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>49177</p>
                                    </td>
                                    <td>
                                        <p>Global Journal for Research Analysis</p>
                                    </td>
                                    <td>
                                        <p>2277-8160</p>
                                    </td>
                                    <td>
                                        <p>Vol.3, Issue.8, Aug.2014</p>
                                        <p>Impact Factor 1.5408</p>
                                    </td>
                                    <td >
                                        <p>4-5</p>
                                    </td>
                                    <td>
                                        <p>Source of Human Enlightenment</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>49177</p>
                                    </td>
                                    <td>
                                        <p>Global Journal for Research Analysis</p>
                                    </td>
                                    <td>
                                        <p>2277-8160</p>
                                    </td>
                                    <td>
                                        <p>Vol.6, Issue.9, Sep.2017</p>
                                        <p>Impact Factor 4.547</p>
                                    </td>
                                    <td >
                                        <p>&nbsp;</p>
                                    </td>
                                    <td>
                                        <p>Comprehend the Essence of Human Dignity</p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>


                        <p><b>Article Publication:</b>Title “The Versatility of Women in Fiction” in the Book “Woman Who Owns You...?, ISBN: 978-81-7625-846-3.</p>
                        <h2 style={{ textDecoration: 'underline' }}>Paper Presentations:</h2>
                        <ul>
                            <li>Presented a paper on “Comprehend the Significance of Human Existence” in the UGC Sponsored One Day National Seminar on Humanism – Essential for Ideal Society & Blissful Life organized by KBN College on 30th June, 2017.</li>
                            <li>Presented a paper entitled “Source of Human Enlightenment” in the UGC sponsored International Seminar on Women Entrepreneurship – A Global Perspective organized by KBN College, Vijayawada on 6th & 7th August, 2014.</li>
                            <li>Presented a paper entitled “Rescue of Nature” in the National Seminar on Climate Change – A Challenge to Sustainable Development organized by KBN College, Vijayawada on 29th & 30th November, 2012.</li>
                        </ul>
                        <h2 style={{ textDecoration: 'underline' }}>Participation:</h2>
                        <ul>
                            <h3 style={{ textDecoration: 'underline' }}>2019-2020:</h3>
                            <li>Participated in the UGC Sponsored One – Day National Workshop on “Building Communicative Competence in English Language” organized by Department of English, KBN College, Vijayawada on 14th September, 2019.</li>
                        </ul>
                        <ul>
                            <h3 style={{ textDecoration: 'underline' }}>2017-2018:</h3>
                            <li>Participated in the UGC Sponsored (Under Autonomous Grants) One Day National Workshop on “English Accent Training: A Trainer Training Programme” organized by Dept. of English, KBN College, Vijayawada on 25th November, 2017.</li>
                            <li>One Day National Seminar on “RAJBHASHA HINDI: ANUVAD KI SAMASYAEN” Organized by Department of Hindi, KBN College in collaboration with Krishna University, Machilipatnam on 23rd September, 2017.</li>
                            <li>Participated in a Two Day Residential Training Programme on “English for Digital Age” organized by APHRDI, Bapatla on 18th & 19th August, 2017.</li>
                            <li>Attended One Week Orientation Programme on “Future Trends in Quality Enhancement of Professional & Academic Skills in HEIs” organized by IQAC, KBN college from 5th – 11th August, 2017.</li>
                            <li>Attended a One Day Workshop on “Teaching Communication Skills through Digital Mode” on 9th August, 2017 organized by JKC College, Guntur.</li>
                            <li>Participated in the National Seminar on “Women Empowerment: Media, Cinema & Theatre – Prospects & Challenges” organized by UGC Women’s Study Centre, KBN College, Vijayawada on 21st & 22nd July, 2017.</li>
                        </ul>
                        <ul>
                            <h3 style={{ textDecoration: 'underline' }}>2016-2017:</h3>
                            <li>Participated in the UGC Sponsored One-Day National Seminar on “The Science Behind Ageing: Can Science Modulate the Process?”, Organised by UGC Sponsored Women studies Centre, KBN College, Vijayawada on 27th March, 2017.</li>
                            <li>Participated in the UGC Sponsored One Day National Workshop on “Role of Human Values in Higher Education for Personal & Professional Excellence”. Organised by Maris Stella College on 1st February, 2017.</li>
                            <li>Participated in the International Seminar “Digital India – The Information for All” on 2nd& 3rd of December 2016. Organised by the Department of Computer Science and Applications, KBN College (Autonomous), Vijayawada.</li>
                            <li>Participated in the National Seminar on e-Tailing: Trends, Challenges & Opportunities” NSETCO -2016. Funded by UGC on 25th & 26th November, 2016 organized by the Department of Commerce and Management, KBN College (Autonomous), Vijayawada.</li>
                            <li>Participated in the UGC Funded One Day National Workshop on “Research and Innovations: Issues and Challenges” NWRIIC – 2016 organized by IQAC, KBN College, Vijayawada held on 22nd October 2016.</li>
                            <li>Participated in One Day Regional Awareness Workshop on “New Curriculum for General English and Communication & Soft Skills” organized by the Department of English, KBN College in association with Krishna University, Machilipatnam on 6th August 2016.</li>
                            <li>Participated in the FDP Programme on “Skill Development and Effective Teaching in Academia” organized by IQAC, KBN College on 2nd June 2016.</li>
                        </ul>
                        <ul>
                            <h3 style={{ textDecoration: 'underline' }}>2014-2015:</h3>
                            <li>Participated in the International Seminar on “Gender Issue: Transcending Boundaries of Culture” on 19th & 20th September, 2014 organized by Andhra University, Visakhapatnam, AP.</li>
                        </ul>
                        <ul>
                            <h3 style={{ textDecoration: 'underline' }}>2013-2014:</h3>
                            <li>Participated in National Workshop on Interactive Teaching and Professional Development in English Language Teachers on 11-11-2013 at KBN College, Vijayawada.</li>
                        </ul>
                        <ul>
                            <h3 style={{ textDecoration: 'underline' }}>2012-2013:</h3>
                            <li>Participated in Two-Day Faculty Development Workshop for College Teachers on 15th &16th March 2013.</li>
                            <li>Participated in the SAM Workshop on “Capacity Building if Women Managers in Higher Education” organized by KBN College form 21st – 25th February, 2013.</li>
                            <li>Participated in the Faculty Development Workshop for College Teachers organized by KBN College, Vijayawada on 15th& 16th March, 2013.</li>
                            <li>Participated in UGC Sponsored Global Seminar on “Exploring the Cultural & Literary Nationalism of Fourth World Literatures” organized by Acharya Nagarjuna University, on 14th – 16th December, 2012.</li>
                        </ul>
                    </Box>
                </AccordionDetails>
            </Accordion>
            <Accordion square expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary
                    expandIcon={expanded === 'panel4' ? <RemoveIcon style={{ color: "white" }} /> : <AddIcon style={{ color: "white" }} />}
                    style={{ backgroundColor: "darkblue", color: "white" }}
                >
                    <Typography >Smt. E. KALAVATHI</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Box>
                        <h2 style={{ textDecoration: 'underline' }}>Publications:</h2>
                        <table className="table table-bordered">
                            <tbody>
                                <tr>
                                    <td>
                                        <p><strong>Journal Type</strong></p>
                                        <p><strong>(UGC Listed, Scopus, Web of Science)</strong></p>
                                    </td>
                                    <td>
                                        <p><strong>Journal Name/ Book Name</strong></p>
                                    </td>
                                    <td>
                                        <p><strong>ISSN No.</strong></p>
                                    </td>
                                    <td>
                                        <p><strong>Vol. &amp; Issue No.</strong></p>
                                    </td>
                                    <td>
                                        <p><strong>Page No.</strong></p>
                                    </td>
                                    <td>
                                        <p><strong>Title</strong></p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>49177</p>
                                    </td>
                                    <td>
                                        <p>Global Journal for Research Analysis</p>
                                    </td>
                                    <td>
                                        <p>2277-8160</p>
                                    </td>
                                    <td>
                                        <p>Vol.3, Issue.8, Aug.2014</p>
                                        <p>Impact Factor 1.5408</p>
                                    </td>
                                    <td>
                                        <p>4-5</p>
                                    </td>
                                    <td>
                                        <p>Understanding the Harmony between Self, Family and Society</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>&nbsp;</p>
                                    </td>
                                    <td>
                                        <p>Language &amp; Literature in the Era of Globalization</p>
                                    </td>
                                    <td>
                                        <p>&nbsp;</p>
                                    </td>
                                    <td>
                                        <p>&nbsp;</p>
                                    </td>
                                    <td>
                                        <p>51-57</p>
                                    </td>
                                    <td>
                                        <p>&ldquo;Recent Trends in Indian Writing in English&rdquo;</p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <h2 style={{ textDecoration: 'underline' }}>Papers Presentations:</h2>
                        <ul>
                            <h3 style={{ textDecoration: 'underline' }}>Paper Presentations:</h3>
                            <li>Presented a Paper entitled “Human Values in Drama” in the Two Day International Seminar on Social, Ethical and Cultural Values as Depicted in Drama organized by Sri Y.N. College (Autonomous), Narsapur on 13th & 14th December, 2019.</li>
                            <li>Presented a paper entitled “English Language /teaching – A New Perspective” in the International Conference on The Rise of Indian Literature and the Global World organized by Andhra Loyola College (A), Vijayawada from 14th – 16th March, 2018.</li>
                            <li>Presented a paper entitled “Recent Trends in Indian Writing in English” in One Day National Seminar on Language & Literature in the Era of Globalization organized by Andhra Loyola Institute of Engineering & Technology, Vijayawada on 17th February, 2018.</li>
                            <li>Presented a paper entitled “Humanism – Understanding the Harmony between Self, Family & Society” in the UGC Sponsored One Day National Seminar on Humanism – Essential for Ideal Society & Blissful Life organized by Value Education Cell, KBN College on 30th June, 2017.</li>
                        </ul>
                        <h2 style={{ textDecoration: 'underline' }}>Participation:</h2>
                        <ul>
                            <h3 style={{ textDecoration: 'underline' }}> 2019-20:</h3>
                            <li>Participated in the UGC Sponsored One – Day National Workshop on “Building Communicative Competence in English Language” organized by Department of English, KBN College, Vijayawada on 14th September, 2019.</li>
                            <li>Participated in the UGC Sponsored One Day International Workshop on “Ecocriticism” organized by Sri Y. N. College, Narsapur on 21st February, 2019.</li>
                            <li>Participated in One Day National Workshop on “Benefits & Challenges of Inter Disciplinary Research” organized by IQAC, KBN College on 13th November, 2018.</li>
                            <li>Participated in One-Day National Workshop on “Research Methodology: Approaches and Techniques organised by PB Siddhartha College of Arts & Science, Vijayawada, on 3rd November, 2018.</li>
                            <li>Participated in One-Day National Workshop on “ESL Class rooms: meeting curricular and corporate goals organised by KBN College Vijayawada, on 21st August, 2018.</li>
                            <li>Participated in One-Day National Workshop on “Self Realisation- For Blissful Life and Harmonious Relationships” organized by Value Education Cell, KBN College, Vijayawada on 30th June, 2018.</li>
                            <li>Attended One Week Orientation Programme on “Future Trends in Quality Enhancement of Professional & Academic Skills in HEIs” organized by IQAC, KBN college from 5th – 11th August, 2017.</li>
                            <li>Participated in UGC Sponsored National Seminar on “Women Empowerment: Media, Cinema & Theatre – Challenges & Prospectus” organized Women’s Study Centre, KBN College on 21st & 22nd July, 2017.</li>
                            <li>Participated in Propell Workshop for the TOEFLiBT test Organized by ETS on 14th May, 2017.</li>
                        </ul>
                    </Box>
                </AccordionDetails>
            </Accordion>
            <Accordion square expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                <AccordionSummary
                    expandIcon={expanded === 'panel5' ? <RemoveIcon style={{ color: "white" }} /> : <AddIcon style={{ color: "white" }} />}
                    style={{ backgroundColor: "darkblue", color: "white" }}
                >
                    <Typography >Smt. P. Sunitha</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Box>
                        <h2 style={{ textDecoration: 'underline' }}>Participation:</h2>
                        <ul>
                            <li>Participated in One day National Workshop “Benefits and Challenges of Interdisciplinary Research” organised by IQAC Department KBN College, Vijayawada on 13th November, 2013.</li>
                            <li>Participated in the One Day National Work Shop “ESL Class room Meeting curricular and corporate goals organised by KBN College Vijayawada, on 21st August, 2018.</li>
                        </ul>
                    </Box>
                </AccordionDetails>
            </Accordion>
            <Accordion square expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                <AccordionSummary
                    expandIcon={expanded === 'panel6' ? <RemoveIcon style={{ color: "white" }} /> : <AddIcon style={{ color: "white" }} />}
                    style={{ backgroundColor: "darkblue", color: "white" }}
                >
                    <Typography >Mr. B. Mohana Teja</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Box>
                        <h2 style={{ textDecoration: 'underline' }}>Participation:</h2>
                        <ul>
                            <h3 style={{ textDecoration: 'underline' }}>2019-2020:</h3>
                            <li>Participated in the UGC Sponsored One – Day National Workshop on “Building Communicative Competence in English Language” organized by Department of English, KBN College, Vijayawada on 14th September, 2019.</li>
                            <li>Participated in the One day National workshop Research Methodology “Approaches & Techniques” organised by P.B Siddhartha College of Arts & Science on 3rd November, 2018.</li>
                            <li>Participated in the One Day National Work Shop “ESL Class room Meeting curricular and corporate goals organised by KBN College Vijayawada, on 21st August, 2018.</li>
                        </ul>
                    </Box>
                </AccordionDetails>
            </Accordion>
            <div>
                <h1>students</h1>
                <ul>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href='https://drive.google.com/uc?id=16HYXk_4g_ny3745VK7Vogf9X5je82RQx' target='__blank'>STUDENT ACHIVEMENTS(2018-2019)</a></li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href='https://drive.google.com/uc?id=1aTx0SdhYhIdrpKpI84gzXr3z-d0Fdr8y'>STUDENT ACHIVEMENTS(2017-2018)</a></li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href='https://drive.google.com/uc?id=1_8bDrqQWX2NAR7lEBOimDHQGQSRTAlxe' target='__blank'>STUDENT ACHIVEMENTS(2016-2017)</a></li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href='https://drive.google.com/uc?id=1REGAc433U9M-DFgdRMbDKu5FOAoXDGFN' target='__blank'>STUDENT ACHIVEMENTS(2015-2016)</a></li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href='https://drive.google.com/uc?id=1rlWJ7aIbQZ3-QcQ1sgn0BLseKNtz7mgD' target='__blank'>STUDENT ACHIVEMENTS(2014-2015)</a></li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href='https://drive.google.com/uc?id=1ziCfwHusbbiFYU2Zi7Y_RMjIMQRaf7lh' target='__blank'>STUDENT ACHIVEMENTS(2013-2014)</a></li>
                </ul>
            </div>
        </div >
    )
}

export default EngAchivements;