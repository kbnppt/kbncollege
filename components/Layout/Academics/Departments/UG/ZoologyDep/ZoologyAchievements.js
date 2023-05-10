import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box'
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { withWidth } from '@material-ui/core';
import { blue } from '@material-ui/core/colors';


const ZoologyAchievements = () => {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };
    return (
        <div>
            <h3>staff</h3>
            <Accordion square expanded={expanded === 'panel0'} onChange={handleChange('panel0')}>
                <AccordionSummary
                    expandIcon={expanded === 'panel0' ? <RemoveIcon style={{ color: "white" }} /> : <AddIcon style={{ color: "white" }} />}
                    style={{ backgroundColor: "darkblue", color: "white" }}
                >
                    <Typography >Dr. V. Subhashini</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Box>
                        <h2 style={{ textDecoration: "underline" }}>ACADEMIC YEAR 2019-2020</h2>
                        {/* <ul>
                            <li>Presented a Paper entitled “మానవత్వ ప్రభోదంలో నాటకాల పాత్ర” in the Two-Day International Seminar on “Social, Ethical and Cultural Values Depicted in Drama” organized by Sri Y.N. College (autonomous), Naraspur on 13th & 14th December, 2019.</li>
                        </ul> */}
                        <h2 style={{ textDecoration: "underline" }}>ACADEMIC YEAR 2019-2020</h2>
                        <ul>
                            <li>Participated in the Orientation Programme on “Research Promotion” organized by Research Promotion & Monitoring Cell, KBN College, Vijayawada on 21st September,2019.</li>
                            <li>Participated in the Invited Talk on “National Education Policy-2019” organized by Internal Quality Assurance Cell, KBN College, Vijayawada on 7th September,2019.</li>
                            <li>Acted as Jury Member for Three Day Amaravathi Balostavam Science Fair-2019 organized by Amaravathi Balostavam held at SRR & CVR Govt. Degree College, Vijayawada on 30th August,2019.</li>
                            <li>Participated in the UGC International Conference on “Innovations & Research Advances in Aquaculture, Fisheries and Exploration of Deep Sea Fishing” organized by K.G.R.L. College (A), Vijayawada on 28th & 29th August,2019.</li>
                            <li>Participated in the Awareness Programme on “Submission of Patents” organized by Research Promotion & Monitoring Cell, KBN College, Vijayawada on 31st July, 2019.</li>
                            <li>Acted as Resource Person for delivering a session on “Preparation of NAAC Formats” on 26th June, 2019 in Three day workshop from 24/06/2019 to 26/06/2019 on “Online Assessment Tools in Enhancing Quality in Higher Education and Digital Initiatives Launched by MHRD, GOI” organized by VSR Govt. Degree & PG College, Movva.</li>
                            <li>Participated in the National Consultative Meeting on NAAC A & A Process Improvement at the NAAC Bengaluru on 10th June, 2019.</li>
                            <li>Participated in the Three Day Faculty Development Programme on “Innovative Pedagogy and Effective Teaching” organized by Internal Quality Assurance Cell and Research Promotion & Monitoring Cell, KBN College, Vijayawada on from 30th May, 2019 to 1st June,2019. </li>
                            <li>Acted as Resource Person for delivering two sessions on “Re-Accreditation Process of NAAC” in Training Programme on 30th April, 2019 organized by SDMSM Kalasala, Vijayawada.</li>

                        </ul>
                        <h2 style={{ textDecoration: "underline" }}> Awards / Recognitions:</h2>
                        <ul>
                            <li>Women of Excellence Award, Pride India Siromani Puraskar from Score More Foundation, Vijayawada on 05-03-2017.</li>
                            <li>Best Teacher Award by Andhra Pradesh State Government in 2016 on 07.09.2016.</li>
                            <li>Best Lecturer Award in Zoology from commissionerate of Collegiate Education, Govt. of A.P in Yuvatarangam on 06.12.2014.</li>
                        </ul>
                        <h2 style={{ textDecoration: "underline" }}>Any Other:</h2>
                        <ul>


                            <li>Acted as Jury Member for ISNPIRE – MANAK-18-19 at District Level Exhibition and Project Competitions (DLEPC) organized by Department of School Education at St. Joseph’s English Medium School, Vijayawada from 27th – 29th January, 2019.</li>
                            <li>Acted as Resource Person for delivering a Guest Lecture on “IQAC establishment & Benefits” at Veniganlla Tataiah Janjanam Mangaladri and Isunuru Venkata Tatarao Degree College, Mangalagiri (VTJMIVT) on 25th January, 2019.</li>
                            <li>Acted as Chief Guest for Dr. Sudha Science Quest – 2018-19 organized by St. John’s English Medium High School, Vijayawada on 15th December, 2018.</li>
                            <li>Acted as Resource Person for delivering a session on “Qualities of a Good Teacher” in Three Day Induction Programme from 29th to 31st October, 2018 organized by KBN College, Vijayawada.</li>
                            <li>Resource Person on National Science Day Celebrations at KBN College, Vijayawada on 28th February, 2018.</li>
                            <li>Acted as a Jury member for Dr. Sudha Science Quest – 2017 conducted by St. John’s High School, Gunadala branch, Vijayawada on 30th November, 2017.</li>
                            <li>Acted as a Jury member for Dr. Sudha Science Quest – 2017 organized by St. John’s High School, Satyanarayanapuram branch, Vijayawada on 29th November, 2017.</li>
                            <li>Delivered a Guest Lecture on “Scope of Zoology in Higher Education” at Maris Stella College, Vijayawada on 7th July, 2017.</li>
                            <li>Acted as a Jury member in State Level National Children’s Science Congress on 3rd& 4th 2016 at St. John’s Public School, Ketanakonda, Ibrahimpatnam.</li>
                            <li> Acted as a Jury member in District Level (Krishna) National Children’s Science Congress on 25th Nov. 2016 at Regional Science Centre (APCOST) Bhavanipuram.</li>
                            <li> Acted as Jury Member for English & Telugu Elocution Competitions in view of Library Week Celebrations, organized by KBN College on 16th & 17th November, 2015.</li>
                            <li>Panel speaker in Two day Regional level Orientation program on CBCS Skill Enhancement Courses organised by Krishna University, Machilipatnam in association with CCE Hyderabad on 3rd& 4th Nov. 2015.</li>
                            <li>Panel speaker in NAAC sponsored Two day NAAC Awareness  Workshop  on “Role of assessment and accreditation in enhancing quality  of higher education”  organised by Krishna University, Machilipatnam, on 5th& 6th Feb.2015.</li>
                            <li>Acted as Judge for Exponentia in Aspire program conducted by PG Departments of KBN College on 24th January, 2015.</li>
                            <li>Resource Person for “Hands on Training program on “Identification of Plankton” at Andhra Loyola College, Vijayawada on 17th July, 2014.</li>
                            <li>Resource Person at SRR & CVR Govt. Degree College for delivering guest lecture on “Role of hormones in Reproduction” on 19th July, 2013.</li>
                            <li>Resource Person for Invited talk on “Shell Fish Fisheries” at Noble College, Machilipatnam on 23rd January, 2013</li>
                            <li>Resource Person for an invited talk on “Plankton and its identification” at Maris Stella College, Vijayawada on 5th October, 2012.</li>
                        </ul>
                        <ul>
                            <h2 style={{ tectDecoration: "underline" }}>Publications:</h2>
                            <table className="table table-bordered">
                                <tbody>
                                    <tr>
                                        <td>
                                            <p><strong>Journal Type

                                                (UGC Listed, Scopus, Web of Science)</strong></p>
                                        </td>
                                        <td>
                                            <p><strong>NAME OF THE JOURNAL</strong></p>
                                        </td>
                                        <td>
                                            <p><strong>ISSN / ISBN No.</strong></p>
                                        </td>
                                        <td>
                                            <p><strong>Vol. & Issue No.</strong></p>
                                        </td>
                                        <td>
                                            <p><strong>Page No. & Date</strong></p>
                                        </td>
                                        <td>
                                            <p><strong>Title</strong></p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p>UGC List: 49177</p>
                                        </td>
                                        <td>
                                            <p>Global Journal of Research Analysis</p>

                                        </td>
                                        <td>
                                            <p>2277-8160</p>
                                        </td>
                                        <td>
                                            <p>Vol. 6, Issue 9

                                                Sep, 2017</p>
                                        </td>
                                        <td>
                                            <p>Impact Factor for 2016-17 is 4.547</p>
                                        </td>
                                        <td>
                                            <p>Cyber Savagery – A Challenge to Women Empowerment</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p>UGC List: 49177</p>
                                        </td>
                                        <td>
                                            <p>Global Journal of Research Analysis</p>
                                        </td>
                                        <td>
                                            <p>2277-8160</p>
                                        </td>
                                        <td>
                                            <p>Vol. 6, Issue 9

                                                Sep, 2017</p>
                                        </td>
                                        <td>
                                            <p>Impact Factor for 2016-17 is 4.547</p>
                                        </td>
                                        <td>
                                            <p>Learning to live together in Peace and Harmony through Self - Exploration</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p> Scopus</p>
                                        </td>
                                        <td>
                                            <p>National Journal of Chemical & Pharmaceutical Sciences</p>
                                        </td>
                                        <td>
                                            <p>ISSN: 0974-2115</p>
                                        </td>
                                        <td>
                                            <p>Vol. 10, Issue I</p>
                                        </td>
                                        <td>
                                            <p>Jan- Mar.17</p>
                                        </td>
                                        <td>
                                            <p>Genetic & Epigenetic Effects of Nanoparticles</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p>-</p>

                                        </td>
                                        <td>
                                            <p>International Journal of Multidisciplinary Advanced Research Trends</p>

                                        </td>
                                        <td>
                                            <p>ISBN No. 2349-7408</p>
                                        </td>
                                        <td>
                                            <p>Volume 4, Issue 1(3),</p>
                                        </td>
                                        <td>
                                            <p>January 2017</p>
                                        </td>
                                        <td>
                                            <p>Role of Silvicultural Treatments in Lessening the stress impact on forest productivity</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p>-</p>
                                        </td>
                                        <td>
                                            <p>National Journal of Energy & Ecology</p>
                                        </td>
                                        <td>
                                            <p>978-93-86251-20-6</p>
                                        </td>
                                        <td>
                                            <p>   </p>
                                        </td>
                                        <td>
                                            <p>  Month or date2016</p>
                                        </td>
                                        <td>
                                            <p>Environment & Health Impact of Mining</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p>-</p>
                                        </td>
                                        <td>
                                            <p>National Journal of Advanced Research in Commerce & Management Studies</p>
                                        </td>
                                        <td>
                                            <p>2394-837X</p>
                                        </td>
                                        <td>
                                            <p>Vol. - 3, S2</p>
                                        </td>
                                        <td>
                                            <p>Pg. No. 68 2016</p>
                                        </td>
                                        <td>
                                            <p>E-Tailing in India</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p>UGC List: 8899 Scopus, Web of Science</p>
                                        </td>
                                        <td>
                                            <p>International Journal of Crustaceana</p>
                                        </td>
                                        <td>
                                            <p>ISSN: 0011-216X; E-ISSN : 1568-5403</p>
                                        </td>
                                        <td>
                                            <p>Vol. 89 Issue 2.</p>
                                        </td>
                                        <td>
                                            <p>Impact Factor for 2015-16 is 0.47</p>
                                        </td>
                                        <td>
                                            <p>Two Hyporheic Species of the Genus Cerconeotes Huys, 1992:C. Euryhalinus (Krishnaswamy, 1957)  and C. Huys in .Sp.(Copepoda, Harpacticoida, Leptastacidae) From India</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p>-</p>
                                        </td>
                                        <td>
                                            <p>Conference Proceedings of Academic and Administrative Audit</p>
                                        </td>
                                        <td>
                                            <p>978-93-85100-38-3</p>
                                        </td>
                                        <td>
                                            <p> </p>
                                        </td>
                                        <td>
                                            <p>August 2015</p>
                                        </td>
                                        <td>
                                            <p>Teacher Effectiveness –Suggestive Strategies</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p>-</p>
                                        </td>
                                        <td>
                                            <p>International Journal of Academic Research</p>
                                        </td>
                                        <td>
                                            <p>2348-7666</p>
                                        </td>
                                        <td>
                                            <p>Vol. 03, Issue 2, on</p>
                                        </td>
                                        <td>
                                            <p>Feb-2016, Impact Factor 3.075</p>
                                        </td>
                                        <td>
                                            <p>Research-A Parameter in Promoting Quality in Higher Education</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p>-</p>
                                        </td>
                                        <td>
                                            <p>International Journal of Law, Education, Social and Sports Studies</p>
                                        </td>
                                        <td>
                                            <p>2394-9724</p>
                                        </td>
                                        <td>
                                            <p>Vol:2, S1.</p>
                                        </td>
                                        <td>
                                            <p>2015</p>
                                        </td>
                                        <td>
                                            <p>Role of Energy balance in Athletes Training</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p>-</p>
                                        </td>
                                        <td>
                                            <p>International Journal of Multidisciplinary Advanced Research and Trends</p>
                                        </td>
                                        <td>
                                            <p>2349-7408</p>
                                        </td>
                                        <td>
                                            <p>Vol-2, Issue -1,</p>
                                        </td>
                                        <td>
                                            <p>Feb 2015</p>
                                        </td>
                                        <td>
                                            <p>Restoration, Remediation and Conservation Strategies of Wetland Ecosystem in India</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p>-</p>
                                        </td>
                                        <td>
                                            <p>International Journal of Emerging Technology in Computer Science and Electronics</p>
                                        </td>
                                        <td>
                                            <p>0976-1353</p>
                                        </td>
                                        <td>
                                            <p> Vol. 14; Issue 1;</p>
                                        </td>
                                        <td>
                                            <p>Nov. 2014</p>
                                        </td>
                                        <td>
                                            <p>Ethical hacking and Legal systems</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p> UGC List: 49177</p>
                                        </td>
                                        <td>
                                            <p>Global Journal of Research Analysis</p>
                                        </td>
                                        <td>
                                            <p>2277-8160</p>
                                        </td>
                                        <td>
                                            <p>Vol. 3, Issue 8</p>
                                        </td>
                                        <td>
                                            <p>August 2014 Imp. factor 1.5408</p>
                                        </td>
                                        <td>
                                            <p>Education-A tool of women empowerment in India-A historical perspective</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p>-</p>
                                        </td>
                                        <td>
                                            <p>Life Science International Research Journal</p>
                                        </td>
                                        <td>
                                            <p>2347-8691, 978-81-928; 281</p>
                                        </td>
                                        <td>
                                            <p>Volume I,  Issue  I</p>
                                        </td>
                                        <td>
                                            <p>6-9, 2014</p>
                                        </td>
                                        <td>
                                            <p>An Overview on assessment of Air Pollution by Urban Transport in Developing Countries with a Focus on its Strategic  Measures and  an awareness approach pertaining to  world Bank Report</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p>-</p>
                                        </td>
                                        <td>
                                            <p>Annual Journal of Multidisciplinary research</p>
                                        </td>
                                        <td>
                                            <p>2321-6425</p>
                                        </td>
                                        <td>
                                            <p>Volume II</p>
                                        </td>
                                        <td>
                                            <p>Jan-Dec 2013</p>
                                        </td>
                                        <td>
                                            <p>Social forestry as People’s participatory Inclusive strategy</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p>-</p>
                                        </td>
                                        <td>
                                            <p>DAMA International Trends in Biotechnology Research</p>
                                        </td>
                                        <td>
                                            <p>2320-0421</p>
                                        </td>
                                        <td>
                                            <p>Volume 1, Issue 2</p>
                                        </td>
                                        <td>
                                            <p>12-15, 2012</p>
                                        </td>
                                        <td>
                                            <p>Plasma circulating Nucleic acids (CNAs) of fish as potential Biomarker of Toxicity</p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </ul>


                        <h2 style={{ textDecoration: "underline" }}>Paper Presentations:</h2>
                        <ul>
                            <h3 style={{ textDecoration: "underline" }}>2017-2018:</h3>

                            <li>Presented a Paper entitled “Cyber Savagery – A Challenge to Women Empowerment” in the UGC Sponsored National Seminar on “Women Empowerment: Media, Cinema, Theatre – Prospects & Challenges on 21st& 22nd July, 2017.</li>
                            <li>Presented a Paper entitled “Learning to Live Together in Peace & Harmony through Self Exploration” in the UGC Sponsored One Day National Seminar on “Humanism – Essential for Ideal Society & Blissful Life” (NSHUM – 2017) organized by Value Education Cell, KBN College in collaboration with Krishna University, Machilipatnam on 30th June, 2017.</li>
                        </ul>
                        <ul>
                            <h3 style={{ textDecoration: "underline" }}>2016-2017:</h3>

                            <li>Presented a Paper entitled “Role of Sivicultural treatments in lessening the Stress” in a Three Day International Conference on “New Approaches in Agriculture, Food & Environmental Sciences” organized by Andhra Loyola College, Vijayawada from 22nd – 24th December, 2016.</li>
                            <li>Paper presented on “e- Tailing in India” in National Seminar on “e-Tailing: Trends, Challenges & Opportunities” (NSETCO – 2016) organized by Dept. of Commerce & Management, KBN College on 25th& 26th November, 2016.</li>
                            <li> Paper Presented entitled “Culture of Zooplankton and their role as live food organisms in Aquaculture with special reference to Rotifers” in 2ndAndhra Pradesh Science Congress on “Science & Technology for Health” organized by AP Akademi of Sciences, Amaravathi from 7th – 9th November, 2016.</li>
                            <li> Paper Presented on “Environment & Health Impact of Mining” in the UGC Sponsored National Seminar on Energy & Ecology organized by SIR CR Reddy Autonomous College, Eluru on 4th& 5th October, 2016.</li>
                            <li> Paper presented on “Biological Invasions: A Threat to Global Ecosystems” in the National Seminar on Environmental Protection, Sustainable Development- Issues & Challenges (EPSDIC – 2016) organized by SIR CR Reddy College, Eluru on 22nd& 23rd September 2016.</li>
                            <li>Paper presented on “Genetic & Epigenetic effects of Nanoparticles” in Two Day National Seminar on Advances in the synthesis of Nano materials & their Multi-Dimensional Applications in Chemical & Bio – Sciences (NANCBS – 2016) organized by Dept. of Chemistry, Andhra Loyola College, Vijayawada on 14th& 15th September 2016.</li>
                            <li>Paper presented on “Phycoremediation in Sewage & Industrial effluents Treatment” in Two Day National Seminar on Emerging trends in Environment & Sustainable Development organized by Dept. of Botany, Bio – technology & Microbiology, Andhra Loyola College, Vijayawada on 2nd& 3rd September 2016.</li>

                        </ul>
                        <ul>
                            <h3 style={{ textDecoration: "underline" }}>2015-16:</h3>

                            <li>Presented a Paper entitled “Best Practices in CSR in Environmental Sustainability” in the UGC Sponsored Two Day International Seminar on “CSR” Organised by Dept. of Commerce & Management, KBN College, Vijayawada on 19th-21st Feb 2016.</li>
                            <li>Presented a Paper entitled “Research a Parameter in promoting Quality in Higher Education” in Two Day National Seminar on Promoting Excellence in Higher Education Organized by IQAC of Sri. Y. N. College Narsapur on8th& 9th Jan 2016.</li>
                            <li>Presented a Paper entitled “Gene Manipulation – A Tool to improve Genetic Status of Fish” in International Conference on Recent Advances in Biosciences and applications of Engineering in Production of Biopharmaceuticals organized by KL University, Vaddeswaram, Guntur from 14th – 16th December, 2015.</li>
                            <li> Presented a Paper entitled “Conventional and Non-conventional Energy Resources” a Regional Level Orientation Programme on CBCS Skill Enhancement Courses at T.R. Women’s College, Gudivada on 3rd& 4th Nov 2015.</li>
                            <li> Presented a Paper entitled “Toxic effects of Fruit Ripening agent Calcium Carbide” in Two Day National Seminar on Advances in Chemical Sciences organized by Dept. of Chemistry KBN College on 18th& 19th Sep 2015.</li>
                            <li>Presented a Paper entitled “Teaching Effectiveness- Suggestive Strategies” in NAAC Sponsored Two Day National Seminar on Academic and Administrative Audit Organized by IQAC of JMJ College Tenali 12th& 13th Aug 2015.</li>
                            <li>Presented a Paper entitled “A Review of Women’s Place in the History of Sports Psychology” in UGC Sponsored National Seminar on Personality Development through Sports organized by Dept. of Physical Education P. B. Siddhartha College, Vijayawada on 3rd& 4th July 2015.</li>

                        </ul>
                        <ul>
                            <h3 style={{ textDecoration: "underline" }}> 2014-2015:</h3>
                            <li>Participated & Convenor for One Day National Seminar on “Enhancement &Sustenance of Quality among Students and Teachers: Role of Support Services” organized by IQAC at KBN College on 21st July, 2014.</li>
                        </ul>
                        <ul>
                            <h3 style={{ textDecoration: "underline" }}>2013-14:</h3>

                            <li>Participated at National Seminar on Conservation of Animal Biodiversity and Environmental Monitoring organized by Department Of Zoology of Vikrama Simhapuri University –P.G. Centre, Kavali, and A. P. India held on 11th-12th March 2014.</li>
                            <li>Participated in UGC sponsored National Seminar on “ Green Chemistry- Its impact on Environmental Protection” on 6thFebruary, 2014 held at JMJ College Tenali organized by the Department of Zoology.</li>
                            <li>Participated in UGC sponsored National Seminar on “Biodiversity Conservation- Present Status on 23rd -24th January, 2014 held at JMJ College Tenali organized by the Department of Zoology.</li>
                            <li> Participated in National Seminar on Recent Trends in Aqua Culture for Sustainable Environment organized by St. Theresa’s Autonomous College for Women, Eluru and sponsored by Ministry of Earth Sciences, Govt. of India on 22nd& 23rd November, 2013.</li>
                            <li> Participated in One Day work shop on Human Values & Professional Ethics conducted by CCE. A.P. Hyderabad on 11th July, 2013 at SRR& CVR Govt. Degree College, Vijayawada.</li>
                            <li>Attended 3-day district level National programme on Value Education Course conducted by DRC at SRR & CVR Govt. Degree College, Vijayawada from 8th – 10th July, 2013</li>
                        </ul>
                        <ul>
                            <h3 style={{ textDecoration: "underline" }}> 2012-2013:</h3>
                            <li>Participated in UGC sponsored National workshop on “Examination reforms with reference to Credit Based Evaluation systems” organised by   Acharya Nagarjuna University from 4-6 March 2013.</li>
                            <li> Participated in SAM Workshop in University College of Technology Hyderabad – Osmania University from 27th – 31st August, 2012.
                            </li>
                        </ul>
                        <ul>
                            <h3 style={{ textDecoration: "underline" }}>Articles published:</h3>

                            <li>Article published in Eenadu on “Internship INSPIRE Science Camp” on 11th January, 2017.</li>
                            <li>Article published in Eenadu on “Safest Diwali” on 30th October, 2016.</li>
                            <li>Article published in Eenadu on “Save our Sparrows” on 20th March, 2016.</li>
                            <li> Article published in Eenadu on “Importance of Stem Cells” on 2nd February, 2015.</li>

                        </ul>
                        <ul>
                            <h3 style={{ textDecoration: "underline" }}>Books published:</h3>

                            <li>Science Technology & Development – Degree Third Year Test Papers (English &Telugu Medium), Vikram Publishers – Modern Series </li>
                            <li>Animal Physiology, Behaviour & Ecology – B.Sc.(Zoology) :Paper III,3rd year</li>
                            <li>Centre for Distance Education – Acharya Nagarjuna University– Telugu & English Medium</li>
                            <li> Intermediate Practical Manual– Zoology – I & II Years – Telugu & English medium</li>
                            <li>Senior Intermediate Zoology–Question Bank–Telugu Medium VGS Publishers</li>
                        </ul>

                        <ul>
                            <h3 style={{ textDecoration: "underline" }}>AS BOS MEMBER: years</h3>

                            <li>BOS member in Zoology for Noble College Machilipatnam from </li>
                            <li>BOS member in Zoology for JMJ College Tenali</li>
                            <li>BOS member in Science & Technology for Maris Stella College Vijayawada.</li>
                            <li> BOS member in Zoology for AG & SG College, Vuyyuru</li>
                            <li>SDMS College, Vijayawada</li>
                            <li>Andhra Loyola College, Vijayawada</li>
                        </ul>
                        <div>
                            <div>

                                <img src='https://drive.google.com/uc?id=1HRqt1g57hnWN0veVtKMx66RXXi2qNPp_' alt='gif img' style={{ border: "1px solid red", height: "500px", width: "500px" }} />
                            </div>
                            <div>
                                <img src='https://drive.google.com/uc?id=1f4g7-8OXitCeX3raU52h-IVmUmeg3njE' style={{ border: "1px solid red", height: "500px", width: "500px" }} alt='gif img' />
                            </div>
                            <div>
                                <img src='https://drive.google.com/uc?id=17l2MD9_2TD3HQ6W4VxXtGJhF7Mdtxp50' alt='gif.img' style={{ border: "1px solid red", height: "500px", width: "500px" }} />

                            </div>
                        </div>




                    </Box>
                </AccordionDetails>
            </Accordion>
            <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                    expandIcon={expanded === 'panel1' ? <RemoveIcon style={{ color: "white" }} /> : <AddIcon style={{ color: "white" }} />}
                    style={{ backgroundColor: "darkblue", color: "white" }}
                >
                    <Typography >Sri T. Sambasiva Rao</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Box>
                        <h2 style={{ textDecoration: "underline" }}>ACADEMIC YEAR 2019-2020</h2>
                        <ul>
                            <li>Participated in the Orientation Programme on “Research Promotion” organized by Research Promotion & Monitoring Cell, KBN College, Vijayawada on 21st September,2019.</li>
                            <li>Participated in the Invited Talk on “National Education Policy-2019” organized by Internal Quality Assurance Cell, KBN College, Vijayawada on 7th September, 2019.</li>
                            <li>Participated in the UGC International Conference on “Innovations & Research Advances in Aquaculture, Fisheries and Exploration of Deep Sea Fishing” organized by K.G.R.L. College (A), Vijayawada on 28th & 29th August,2019.</li>
                            <li>Participated in the Awareness Programme on “Submission of Patents” organized by Research Promotion & Monitoring Cell, KBN College, Vijayawada on 31st July, 2019.</li>
                            <li>Participated in the Three Day Faculty Development Programme on “Innovative Pedagogy and Effective Teaching” organized by Internal Quality Assurance Cell, KBN College, Vijayawada on from 30th May, 2019 to 1st June,2019.</li>
                        </ul>
                        <h2 style={{ textDecoration: "underline" }}>Awards / Recognitions:  </h2>
                        <ul>
                            <li>Pursuing Ph. D.; completed Part – I  of  Ph. D. with A Grade</li>

                        </ul>
                        <h2 style={{ textDecoration: "underline" }}>Any Other:</h2>
                        <ul>
                            <li>Acted as Resource Person for Awareness Programme on “AIDS’ on 1st December, 2017</li>
                            <li>Acted as Judge for Elocution Competitions on “Conservation of Wild Life” on Tigers Day 29-07-2015.</li>
                            <li>Acted as Judge for Elocution Competition in the Seminar “Save Nature in perfect harmony” in view of World Nature Conservation Day conducted by Department of Botany on 28th July, 2015.</li>
                        </ul>
                        <h2 style={{ textDecoration: "underline" }}>Publications:</h2>
                        <ul>
                            <li>INSERT Table</li>

                        </ul>
                        <h2 style={{ textDecoration: "underline" }}>2017-18:</h2>
                        <ul>
                            <li>Presented a paper entitled “Human Values in the Society” in UGC Sponsored One Day National Seminar on Humanism - Essential for Ideal Society & Blissful Life” organized by Value Education Cell, KBN College in collaboration with Krishna University, Machilipatnam on 30th June, 2017.</li>
                        </ul>
                        <h2 style={{ textDecoration: "underline" }}>2016-17:</h2>
                        <ul>
                            <li>Paper presented on “Aspects of E-Tailing” in National Seminar on e-Tailing: Trends, Challenges & Opportunities” (NSETCO – 2016) organized by Dept. of Commerce & Management, KBN College on 25th& 26th November, 2016.</li>
                            <li>Paper presented on “Biological Invasions: A Threat to Global Ecosystems” in the National Seminar on Environmental Protection Sustainable Development Issues &Challenges (EPSDIC – 2016) organized by SIR CR Reddy College, Eluru on 22nd& 23rd September 2016.</li>
                        </ul>
                        <h2 style={{ textDecoration: "underline" }}>2015-16:</h2>
                        <ul>
                            <li>Presented a paper on “Green Chemistry and Technology for sustainable development” in the Twoday National seminar on “Advances in Chemical Sciences” organised by Department of Chemistry at KBN College Vijayawada on 18th& 19th September 2015.</li>
                            <li>Presented a paper entitled “Sports Injuries and Rehabilitation” in the UGC Sponsored National Seminar on “Personality Development through Sports” organized by PB Siddhartha College of Arts & Science, Vijayawada on 3rd& 4th July, 2015.</li>
                        </ul>
                        <h2 style={{ textDecoration: "underline" }}>2014-15:</h2>
                        <ul>
                            <li>Presented a paper on “Computer Simulation Modeling in Sports Bio-mechanics Energy” in UGC sponsored Two Day National Seminar on “Importance of Sports to Improve the Quality of Education” organized by the department of Physical Education, K. B. N. College, Vijayawada on 12th& 13th March, 2015.</li>
                            <li>Presented a paper on Multifarious anthropogenic threats on the Biodiversity focusing on its basic issues and ways to curb it in the National Seminar organized by Department of Zoology JMJ College for women –Tenali on 23-24th Jan 2015.</li>
                            <li>Presented a paper on “Genomics as a Modern Biological Tool with Multifarious Applications for Welfare of Human Health” in the International Seminar on Genomics & Stem Cells organized by Department of Botany, Chemistry & Zoology, KBN College, Vijayawada on 6th& 7th January 2015.</li>
                            <li>Presented a paper on “Security Policies in an Organization” in UGC Sponsored National Seminar on “Ethical Hacking-An Inevitable Tool for a Secured Organization at K.B. N College, organized by Department of Computer Science and Applications on 12 & 13th Dec 2014.</li>
                            <li>Presented a paper on “An over view on Bio piracy a Mutated Practice– Curbing the Interests of Developing & Poor Nations” at UGC sponsored National Seminar on Recent Trends in Phytochemical & Plant biology Research at PB Siddhartha College, Vijayawada on 12th& 13th 2014.</li>
                            <li>Presented a paper entitled “An outlook on small scale Industries in India Economy and a note on its role in empowerment” in the UGC Sponsored International Seminar on Women Entrepreneurship – A Global Perspective” on 6th& 7th August, 2014 organized by KBN College.</li>
                            <li>Presented a paper on Preventions of Cancer in the Global summit on “Emerging Sciences & Technologies Impact on Environment and Human Health & Special Symposia on “Cancer Therapy & Environmental Toxicology” sponsored by UNT Health Centre, Fourth Worth, Texas USA at Vikram Simhapuri University, Nellore from 1st – 3rd August, 2014</li>
                            <li>Presented a paper on “Insight on Revitalization” in One Day National Seminar on Enhancement and sustenance of Quality among Students and Teachers : Role of Support Services” organized by IQAC at KBN College on 21st July, 2014.</li>
                        </ul>

                        <h2 style={{ textDecoration: "underline" }}>2013-14:</h2>
                        <ul>
                            <li>Presented a paper on “Overview on the need of paradigm shift of farmer as a common man to extraordinary man, a crucial aspect for inclusive growth- sustainable development of Climate Change on Biodiversity in Generalized Scenario” at National Conference on Climate Change Impact and its management in Indian Agriculture organized by P.B. Siddhartha College of Arts & Science, Vijayawada held on 1st March 2014</li>
                            <li>Presented a paper on critically analyzing the role of Environmental basic issues at a Two Day Inter National Conference on Agriculture, Veterinary & Life Sciences-2014 organized by International Multidisciplinary Research Foundation held on 24th and 25th Jan 2014. The same paper is published in International Journal of Multidisciplinary Research with ISSN 2347-8691, 978-81-928-281-6-9 in Vol-I, Issue- I 2014.</li>
                            <li>Presented a paper on” Multifarious anthropogenic threats on the Biodiversity focusing on its basic issues and ways to curb it” at UGC, National Biodiversity Authority & A. P. State Council of Higher Education sponsored National Seminar on Biodiversity Conservation- Present Status on 23rd -24th January, 2014 at JMJ College Tenali organized by the Department of Zoology.</li>
                            <li>Presented a paper on “Environmental Education playing a crucial Role in uplifting the Environmentalism- an Indispensable driving force for Sustainable development” in DST Sponsored InterNational Symposium on Environmental Pollution, Nutrition and Genetics held on 27th and 29th Dec. 2013 at Vikram Simhapuri University, Nellore, organized by the department of Chemistry and UNT Health Science Centre Fort worth, Texas, USA.</li>
                            <li>Presented a paper on “Nano Robotics – An innovative branch of Nanotechnology embodies potential impact on Medicine Field” at AICTE sponsored National Seminar on Recent Trends in Surface Science and Nanotechnology held on 29th and 30th Nov. 2013 at PSCMR College of Engineering and Technology, organized by the departments of Science and Humanities.</li>
                        </ul>
                        <h2 style={{ textDecoration: "underline" }}>2012-13:</h2>
                        <ul>
                            <li>Presented a paper on “Clean Coal Technologies with a focus on Carbon Sequestration” in the National Seminar at Ch. S. D. Theresa’s College for Women, Eluru on 19th& 20th July, 2013.</li>
                            <li>Presented a paper on “Conserving landscape a vital strata of biosphere” at UGC sponsored National Seminar on Improved Strategies in the Sustained Biodiversity at PB Siddhartha College, Vijayawada. On 28.02.2013.</li>
                            <li>Presented a paper on “Innovations in Plant Research” in UGC sponsored National Conference on Innovations in Plant Research in 21st Century organized by JMJ College, Tenali on 30th& 31st January, 2013.</li>
                            <li>Presented a poster on “Sustainable Development a key step for promoting a peace Earth” at the International Conference on Global meet of Biologists conducted by Osmania University Hyderabad from 26.12.12 to 28.12.12.</li>
                            <li>Presented a paper on “Sustainable development – The most critical and essential concept at the present crucial juncture of destructive arena of the Globe at UGC sponsored National Seminar Green Strategies and its significance conducted by Dept. of Chemistry KBN College on 14.12.12.</li>
                            <li>Presented a paper on “Women’s Literacy and Empowerment- The Nellore Experience, understanding Empowerment “at Montessori Mahila Kalasala, Vijayawada in National Conference on Education– A powerful means of Women Empowerment & National Development on 07.12.12</li>
                            <li>Presented a paper on” Peace Earth Creation by adoption of Sustainable development” in UGC Sponsored National Seminar NSCCSD – 2012conducted by dept of Zoology of KBN College on 29.11.2012 & 30.11.12.</li>
                        </ul>
                        <h2 style={{ textDecoration: "underline" }}>Participation:</h2>
                        <ul>
                            <h3 style={{ textDecoration: "underline" }}>2018-19:</h3>

                            <li>Participated in the National Workshop on “Value added Fish Products” organized by P.B. Siddhartha College of Arts & Science, Vijayawada on 21st & 22nd December, 2018.</li>
                            <li>Participated in the One Day National Workshop on “Benefits and Challenges of Interdisciplinary Research” organized by IQAC, KBN College, Vijayawada on 13th November, 2018.</li>
                            <li>Participated in the “Conclave cum war room on Outcome based Education” organized by Andhra Loyola College in collaboration with The Commissionerate of Collegiate Education, Govt. of AP from 25th to 27th October, 2018.</li>
                            <li>Participated in the National Workshop on “Regulatory Mechanisms, Transgenic Technology & Applications in Plants” organized by Dept. of Botany & Microbiology, Acharya Nagarjuna University and Indian Institute of Science Education & Research, Tirupati on 2nd & 3rd August, 2018.</li>
                            <li>Participated in the UGC Sponsored One Day National Workshop on “Self Realization – For Blissful Life and Harmonious Relationships” organized by Value Education Cell, KBN College, Vijayawada on 30th June, 2018.</li>
                            <li>Participated in the Two Day Faculty Development Programme on “Teaching Methods, Tools and Techniques” organized by IQAC, KBN College, Vijayawada on 6th & 7th June, 2018.</li>
                        </ul>
                        <ul>
                            <h3 style={{ textDecoration: "underline" }}>2016-17:</h3>

                            <li>Participated in UGC Sponsored One Week National Workshop on “Promotion of Ethics & Human Values” organized by SVRM College, Nagaram from 21st – 27th November, 2016.</li>
                            <li>Participated in the 2nd Andhra Pradesh Science Congress (APSC – 2016) held at PB Siddhartha College of Arts & Science, organized by AP Akademi of Sciences in association with Dr. NTR University if Health Sciences, Acharya Nagarjuna University & Krishna University on 7th – 9th November 2016.</li>
                            <li>Attended One Week National Workshop on “Emerging Trends and Challenges to Enhance Quality in Higher Education” organized by IQAC, JMJ College for Women, Tenali from 1st to 7th November 2016.</li>
                            <li>Participated in the UGC Funded One Day National Workshop on “Research & Innovations: Issues & Challenges” organized by IQAC, KBN College on 22nd October, 2016.</li>
                            <li>Participated in Two Day National Seminar on Advances in the synthesis of Nano materials & their Multi-Dimensional Applications in Chemical & Bio – Sciences (NANCBS – 2016) organized by Dept. of Chemistry, Andhra Loyola College, Vijayawada on 14th& 15th September 2016.</li>
                            <li>Participated in Two Day DBT Sponsored National Seminar on Emerging Trends in Environment & Sustainable Development” organized by Andhra Loyola College, Vijayawada on 2nd& 3rd September, 2016.</li>
                            <li>Participated in a UGC funded One Day State level Seminar on “Molecular & Bio – Chemical Insights in Aquaculture” organized by Depts. of Biochemistry & Zoology of SRR & CVR Govt. Degree College, Vijayawada on 19th July 2016.</li>
                        </ul>
                        <ul>
                            <h3 style={{ textDecoration: "underline" }}>2015-16:</h3>

                            <li>Participated in Twoday Regional Level Orientation Programme on CBCS Skill Development Courses (Human Values and Professional Ethics & Environmental Studies) organized by College Development Council Krishna Univeristy-Machilipatnam (in association with CCE) at KTR Women’s College, Gudivada on 3rd November 2015.</li>
                            <li>Participated in National Workshop on “Human Values & Professional Ethics – Essential for individual and society Organised by Value Education Cell & Department of Telugu  KBN College, Vja 24th& 25th July 2015.</li>
                            <li>Participated in Two day Faculty Development program on 2nd& 3rd June 2015 at KBNC.</li>
                        </ul>
                        <ul>
                            <h3 style={{ textDecoration: "underline" }}>2014-15:</h3>

                            <li>Participated in UGC sponsored National Seminar on ‘Sustainable Environment through Green Energy” organized by Dept. of Environmental Sciences Andhra Loyola College, Vijayawada on 27th&28th Feb 2015</li>
                            <li>Participated in the UGC Sponsored National Seminar on “Recent Trends and Practices in Ornamental Fishery” organized by Dept. of Zoology, Andhra Loyola College, Vijayawada on 22nd24thJanuary, 2015</li>
                            <li>Participated in UGC sponsored National Seminar on “Recent Trends in Aqua Culture for Sustainable Environment” at St. Theresa’s College, Eluru on 8th& 9th September 2014.</li>
                            <li>Participated in UGC – SAP  - DRS sponsored National seminar  on “Biodiversity Conservation of Mangrove Ecosystems in India-Present status & Future Prospective” organized by Dept. of Botany & Micro biology, Acharya Nagarjuna University on 21st& 22nd July, 2014.</li>
                        </ul>
                        <ul>
                            <h3 style={{ textDecoration: "underline" }}>2013-14:</h3>

                            <li>Participated at National Seminar on “Conservation of Animal Biodiversity and Environmental Monitoring” organized by Department Of Zoology of Vikram Simhapuri University –P.G. Centre, Kavali, and A. P. India held on 11th-12th March 2014.</li>
                            <li>Participated at UGC sponsored National Seminar on Green Chemistry- its impact on Environmental Protection on 6th Feb. 2014 at C. R. Reddy Autonomous College, Eluru organized by the Departments of Chemistry, Botany & Zoology.</li>
                            <li>Participated in the State Level Workshop on “Chemistry and Career Prospects” organized by KBN College on 30th November, 2013.</li>
                            <li>Participated in National Seminar on Recent Trends in Aqua Culture for Sustainable Environment organized by St. Theresa’s Autonomous College for Women, Eluru and sponsored by Ministry of Earth Sciences, Govt. of India on 22nd& 23rdNov 2013.</li>
                        </ul>
                        <ul>
                            <h3 style={{ textDecoration: "underline" }}>2012-2013:</h3>

                            <li>Participated in the UGC Sponsored Short Term Course on Quality Assessment in Higher Education and C-content Development conducted by UGC Academic Staff – Bharathiar University – Coimbatore, Tamilnadu. On 12.03.2013 to 15.03.2013.</li>
                            <li>Participated in the Workshop on “Better by the Day” organized by KBN College, Vijayawada on 27th& 28th March, 2013.</li>
                        </ul>
                        <div>
                            <img src='https://drive.google.com/uc?id=1rKcEioPLWYRLLEWsLoph9crTdyXFCHm3' alt='gif img' style={{ border: "1px solid red", height: "300px", width: "300px" }} />
                            <img src='https://drive.google.com/uc?id=1bhMZi0_Vi-ScvV7KYsbzyuUdOK_kj-Nl' alt='gif img' style={{ border: "1px solid red", height: "300px", width: "300px" }} />
                        </div>






                    </Box>
                </AccordionDetails>
            </Accordion>
            <Accordion square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary
                    expandIcon={expanded === 'panel2' ? <RemoveIcon style={{ color: "white" }} /> : <AddIcon style={{ color: "white" }} />}
                    style={{ backgroundColor: "darkblue", color: "white" }}
                >
                    <Typography >Dr. A. Samba Naik</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Box>
                        <h2 style={{ textDecoration: "underline" }}>ACADEMIC YEAR 2019-2020</h2>
                        <ul>
                            <li>Participated in the Orientation Programme on “Research Promotion” organized by Research Promotion & Monitoring Cell, KBN College, Vijayawada on 21st September,2019.</li>
                            <li>Participated in the Invited Talk on “National Education Policy-2019” organized by Internal Quality Assurance Cell, KBN College, Vijayawada on 7th September, 2019.</li>
                            <li>Participated in the UGC International Conference on “Innovations & Research Advances in Aquaculture, Fisheries and Exploration of Deep Sea Fishing” organized by K.G.R.L.College (A), Vijayawada on 28th & 29th August,2019.</li>
                            <li>Participated in the Awareness Programme on “Submission of Patents” organized by Research Promotion & Monitoring Cell, KBN College, Vijayawada on 31st July, 2019.</li>
                            <li>Participated in the Three Day Faculty Development Programme on “Innovative Pedagogy and Effective Teaching” organized by Internal Quality Assurance Cell, KBN College,Vijayawada on from 30th May, 2019 to 1st June,2019.</li>
                        </ul>
                    </Box>
                </AccordionDetails>
            </Accordion>
            <Accordion square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary
                    expandIcon={expanded === 'panel3' ? <RemoveIcon style={{ color: "white" }} /> : <AddIcon style={{ color: "white" }} />}
                    style={{ backgroundColor: "darkblue", color: "white" }}
                >
                    <Typography >Dr. G. Sakunthala </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Box>
                        <h2 style={{ textDecoration: "underline" }}>ACADEMIC YEAR 2019-2020:</h2>
                        <ul>
                            <li>Participated in the UGC International Conference on “Innovations & Research Advances in Aquaculture, Fisheries and Exploration of Deep Sea Fishing” organized by K.G.R.L. College (A), Vijayawada on 28th & 29th August, 2019.</li>
                            <li>Participated in the Three Day Faculty Development Programme on “Innovative Pedagogy and Effective Teaching” organized by Internal Quality Assurance Cell, KBN College, Vijayawada on from 30th May, 2019 to 1st June, 2019.</li>
                        </ul>
                        <h2 style={{ textDecoration: "underline" }}>Any Other:</h2>
                        <ul>
                            <li>Acted as Judge for Dr. Sudha Science Quest – 2018-19 organized by St. Johns’ Public School, Vijayawada on 15th December, 2018.</li>
                            <li>Acted as Judge for Science Expo of Student Projects at Ravindra Bharathi Public School, Vijayawada on 28th February, 2018.</li>
                            <li>Acted as Judge for 45th Jawaharlal Nehru National Science, Mathematics and Environment Exhibition for Children at Z.P. Boys High School, Gannavaram on 29th December, 2017.</li>
                        </ul>
                        <h2 style={{ textDecoration: "underline" }}>Publications:</h2>
                        <ul>
                            <li>Published a Paper entitled “A Harmony in Family Relationships Understanding between Man and Society” in the Global Journal for Research Analysis. ISSN NO 2277 – 8160, Impact Factor 5.516, Special Issue September, 2017.</li>
                            <li>Published a paper entitled “The specific role of liver in expelling Ancylostoma caninum larvae from the host system. The Bioscan 6(2): 255-256 on 2011.</li>
                            <li>Published a paper entitled “Abdominal muscle LDH in mice during immune stimulation and induced hepatitis B. The Bioscan. 6(2): 229-232 on 2011.</li>
                            <li>Published a paper entitled “Serum level of IgG and worm load in male Swiss albino mice inoculated with L3 larvae of Ancylostoma canium. The Bioscan, 7(1): 65-67 on 2012</li>
                            <li>Published a paper entitled “Serum IgE Level in Mice infected with Single doses of Ancylostoma caninum Larvae. The Bioscan on 2013. Pg. No. 1107-1109.</li>
                            <li>Published a paper entitled “Changes in the level of Protein and Glycogen in liver of one week old Plymouth Rock broilers during experimental  aflotoxicosis in the International Journal of Advanced Research in Biological Sciences ISSN No. 2348-8069 Volume 1, Issue 2, Pg No. 90-92.</li>
                            <li>Published a paper entitled “Impact of immune stimulant on Stomach Protein and DNA activity during Hepatitis B Infection in Mice” in the International Journal of Sciences Research and Technology ISSN No. 2321-9262 Volume 2, Issue 2, Pg No. 13-17.</li>
                        </ul>
                        <h2 style={{ textDecoration: "underline" }}>Paper presentations:</h2>
                        <ul>
                            <li>Presented a paper entitled “A Harmony in Family Relationships Understanding between Man and Society” in the UGC Funded One Day National Seminar on “Human Values Essential for Ideal Society & Blissful Life” organized by Value Education Cell, KBN College, Vijayawada on 30th June, 2017.</li>
                            <li>Presented a paper entitled “Abdominal Muscle LDH in Mice treated with Immunex – DS during induced Hepatitis B” in the International Conference on Biodiversity & Toxicology from 12th – 14th, February, 2011.</li>
                            <li>Presented a paper entitled “The Specific Role of Liver in Expelling Ancylostoma caninum Larvae from the Host System” in the International Conference on Biodiversity & Toxicology from 12th – 14th, February, 2011.</li>
                        </ul>
                        <h2 style={{ textDecoration: "underline" }}>Participation:</h2>
                        <ul>
                            <li>Participated in the UGC Sponsored National Workshop on “Benefits and Challenges of Interdisciplinary Research” organized by IQAC, KBN College, Vijayawada on 13th November, 2018.</li>
                            <li>Participated in the National Workshop on “Regulatory Mechanism, Transgenic Technology and Applications in Plants” organized by ANU, Guntur on 2nd & 3rd August, 2018.</li>
                            <li>Participated in the UGC Sponsored (Under Autonomous Funds) One Day National Seminar on “The Role of Chemistry for Sustainable Environment” organized by Department of Chemistry, KBN College, Vijayawada on 16th December, 2017.</li>
                            <li>Participated in the UGC Funded One Day National Workshop on “Research & Innovations: Issues and Challenges” organized by IQAC, KBN College, Vijayawada on 22nd October, 2016.</li>
                            <li>Participated in a UGC Funded One Day State Level Seminar on “Molecular & Bio Chemical Insights in Aquaculture” organized by SRR & CVR Govt. Degree College, Vijayawada on 19th July, 2016.</li>
                        </ul>
                        <div>

                            <img src='https://drive.google.com/uc?id=1qaDhDvNCVFM4G5hjPrH8L8S9LD6zevMa' alt='gif img' style={{ border: "1px solid red", height: "300px", width: "300px" }} />
                            <img src='https://drive.google.com/uc?id=1TvwRK9WqCi-Jx5ltkvYx4veh6cBWIADR' alt='gif img' style={{ border: "1px solid red", height: "300px", width: "300px" }} />


                        </div>
                    </Box>
                </AccordionDetails>
            </Accordion>
            <div>
                <h1>Students</h1>
                <ul>
                    <li style={{ color: "Highlight" }}> <a style={{ color: "Highlight" }} href='https://drive.google.com/uc?id=1iHzw8ZkxQiKwUwHPbArV_94nXOKy-5X1' target='__blank'>STUDENT ACHIVEMENTS(2018-2019)</a></li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href='https://drive.google.com/uc?id=1E4_fcOHVJSd4cOZoO-uAex9-Jy4_YxQ0'>STUDENT ACHIVEMENTS(2017-2018)</a></li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href='https://drive.google.com/uc?id=1xr5oLIOdVyBDBud0qxJHD5wamJ3Kj3Xb' target='__blank'>STUDENT ACHIVEMENTS(2016-2017)</a></li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href='https://drive.google.com/uc?id=1XeBPrqI7IkiWfI9tBozH8hTVoBXSaW3Q' target='__blank'>STUDENT ACHIVEMENTS(2015-2016)</a></li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href='https://drive.google.com/uc?id=1ruGVUoRiGwmAdsJneieM9mZO4c8S6620' target='__blank'>STUDENT ACHIVEMENTS(2014-2015)</a></li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href='https://drive.google.com/uc?id=1_sLy3WcvaA0nXoEUFMmuRaULglTnVW9M' target='__blank'>STUDENT ACHIVEMENTS(2013-2014)</a></li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href='https://drive.google.com/uc?id=1e4el7Ze1OppPf2Zf_P5GJM9Jf1fcZ0KH' target='__blank'>STUDENT ACHIVEMENTS(2012-2013)</a></li>


                </ul>
                <img src='https://drive.google.com/uc?id=1yddS3wQUOtLb7glxflPJcdrNd_yaYeUd' alt='gif img' style={{ border: "1px solid red", height: "300px", width: "300px" }} />






            </div >
        </div>


    );
}

export default ZoologyAchievements;