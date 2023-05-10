import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Box from '@material-ui/core/Box'
import BulletLineCom from '../../../../../HeadingComponent/BulletLineCom'


const MSCOOrganicAchivements = () => {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };
    return (
        <div>
            <h2 style={{ textAlign: "center", color: "#2e69d6" }}>DEPARTMENT OF M.SC (CHEMISTRY)</h2>
            <div>
                <h2 style={{ textDecoration: "underline" }}> Staff</h2>
                <Accordion square expanded={expanded === 'panel0'} onChange={handleChange('panel0')}>
                    <AccordionSummary
                        expandIcon={expanded === 'panel0' ? <RemoveIcon style={{ color: "white" }} /> : <AddIcon style={{ color: "white" }} />}
                        style={{ backgroundColor: "darkblue", color: "white" }}
                    >
                        <Typography >Dr.G.Krishnaveni</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Box>
                            <h3 style={{ textDecoration: "underline" }}>ACADEMIC YEAR 2021-2022</h3>
                            <div>
                                <ul>
                                    <p>Published a research article in UGC care listed and in SCOPUS indexed journal entitled on Simultaneous Estimation of Aflatoxins (B1, B2, G1 and G2) by Liquid Chromatography Coupled with Mass Spectrometry (LC-MS) in Asian Journal of chemistry, 2021, 33(3): 521-526</p>

                                    <li>Attended a workshop on ENVIORMENTAL SUSTAINABILITY organized by Govt. Degree college, Men, Srikakulam, on 28-01-22.</li>
                                    <li>Participated in Virtual FDP on PROMOTING QUALITY RESEARCH, SKILLS & INNOVATION IN HIGHER EDUCATION organized by DEPT OF MATHEMATICS & ZOOLOGY, IQAC,JMJ COLLEGE FOR WOMEN(TENALI), 7-3-22 to 11-3-22.</li>
                                    <li>Attended a webinar on international seminar and published a book chapter ART OF EDUCATION AND TEACHING COMMUNICATION SKILLS in ICSSR sponsored seminar on SOCIAL INNOVATION& ENTERPRENEURSHIP IN INDIA, organized by department of Commerce & Management on 25th and 26th Feb, 2022.</li>
                                    <li>Participated in National webinar on PRINCIPLES OF ORGANIC SPECTROSCOPY & ITS APPLICATIONS, organized by department of Chemistry KRISHNA University in association with department of chemistry KBN college(A) on 12-02-2022.</li>
                                    <li>Delivered a Guest lectured on SEPERATION TECHNIQUES to B.Sc chemistry students at Andhra Loyola College on 20-11-2021.</li>
                                    <li>Delivered a guest lecture on COORDINATION CHEMISTRY to B.Sc., Chemistry students at Samata Degree College, Visakhapatnam on 09-11-2021.</li>
                                    <li>Awarded GURU SPANDANA AWARD from SPANDANA EDA INTERNATIONAL FOUNDATION, Guntur on 07-10-2021.</li>
                                    <li>Attended a webinar on ANTIBIOTIC DISCOVERY STRATEGIES IN THE ERA OF DRUG RESISTANCE organized by DEPT OF CHEMISTRY, PB SIDHARTA COLLEGE OF ARTS & SCIENCE, on 27-09-21.</li>
                                    <li>Attended a webinar on VIRTUAL INTERNATIONAL CONFERENCE ON MULTI FUNCTIONAL ADVANCED MATERIALS organized by DEPT OF CHEMISTRY, JVM’S DEGREE COLLEGE, on 09 & 10-08-21.</li>
                                    <li>Attended a Faculty Development Program on MATERAILS FOR PHOTONIC APPILICATIONS organised by MAHATAMA GANDHI INSTITUTION OF TECHNOLOGY from 9th to 13-08-21.</li>
                                    <li>Attended a Faculty development Program on CHEMISTRY FOR SOCIETAL ADAVANCEMENTS organised by department of chemistry, KL UNIVERSITY from 26th to 31-07-21.</li>
                                    <li>Attended a webinar on EMERING TECHNIQUES ON POLYMERS organized by DIVISION OF CHEMISTRY, DEPT OF SCIENCE & HUMANITIES, VFSTR on 12-06-2021.</li>
                                </ul>
                            </div>
                            <div>
                                <h3 style={{ textDecoration: "underline" }}>ACADEMIC YEAR 2020-2021</h3>
                                <ul>
                                    <li>Attended a webinar on MIGRANT WOMEN WORKERS: ISSUES AND CHALLENGES, organized by UGC WOMEN STUDY CENTRE, K.B.N COLLEGE, on 05-10-2020.</li>
                                    <li>Attended a webinar on WOMENS NUTRIUTION IN IMMUNE RESPONSE AGAINST COVID-19 organized by UGC WOMEN STUDY CENTRE, K.B.N COLLEGE on 25-08-20.</li>
                                    <li>Attended a webinar on TRENDING CHEMICAL RESEARCH & APPLICATIONS organized by ANDHRA CHRISTIAN COLLEGE, GUNTUR from 07 TO 20-08-20.</li>
                                    <li>Attended a webinar on CHEMISTRY OF SEMI CONDUCTORS, NANO PARTCALS, LABORATORY TODISPLAY IN INDUSTRIES (TV&LED’S) organized by ANDHRA LOYALA COLLEGE on 06-08-20.</li>
                                    <li>Attended a webinar on NAAC ASSESSMENT & ACCREDITATION PROCESS organized by KRISHNA UNIVERSITY (MACHILIPATNAM) on 04-08-20.</li>
                                    <li>Attended a webinar on ICT TOOLS TO TEACH CHEMITSRY WITH SIMULATIONS CHEMISTRY LAB organized by DEPT OF CHEMISTRY, PB SIDHARTA COLLEGE OF ARTS & SCIENCE on 27-07-20.</li>
                                    <li>Attended a Faculty Development Program on RECENT ADAVANCES IN APPLIED CHEMISTRY organised by department of chemistry, QIS COLLEGE OF ENGINEERING & TECHNOLOGY from 6th to 10-07-20.</li>
                                    <li>Attended a webinar on FUNCTIONALIZED QUIOXALINES AS SIRT 1 INHIBITORS organized by DPT OFCHEMISTRY, PB SIDHARTA COLLEGE OF ARTS & SCIENCE, on 27-06-20.</li>
                                    <li>Attended a Faculty development Program on INDIRECT EFFECT OF COVID-19 OUT BREAK ON THE ENVIRONMENT AND SOCIETY organised by department of chemistry J.M.J COLLEGE FOR WOMEN (TENALI) from 10th to 12-06-20.</li>
                                    <li>Awarded BEST WOMEN TEACHER AWARD from SC, ST, BC & MINORITY VIDHYARTHI SAMIKYA on 03-01-2020.</li>
                                </ul>
                            </div>
                            <div>
                                <h3 style={{ textDecoration: "underline" }}>ACADEMIC YEAR 2019-2020</h3>
                                <ul>
                                    <li>Presented a paper A “ Click and Cross–Coupling” Approach in One–Pot synthesis of Fused 1,2,3–Triazoles in National seminar on "TWO DAY NATIONAL SEMINAR ON CHEMICAL SPECIATION IN BIOLOGY AND MARINE ENVIRONMENT(CSBME-2019) 29th & 30th September, 2019" organising by School of Chemistry Andhra University, Visakhapatnam on the occasion of Superannuation of Prof. G. Nageswara Rao, Former Vice-Chancellor, Andhra University In Association with Association of Chemistry Teachers (ACT), Mumbai & Andhra Pradesh Akademi of Sciences (APAS), Amavarathi.</li>
                                    <li>Acted as Jury member in the “Amaravathi Balotsavam Science Fair -2019” on 30th August, held at SRR and CVR Gov. Degree College (A) from 29th to 31st August, 2019.</li>
                                    <li>Participated in National work shop on Contemporary Nano; Synthesis Characterisation & Applications on 22nd August 2019 organised by Dept. of Chemistry CH.S.D.ST. Theresa’s college for Women (A), Eluru, AP.</li>
                                    <li>Published a book Chapter–14, “Bio-Waste Material Utilization for Water defluorination & Statistical investigation of Ground water in Nalgonda District” in: Recent Trends in Physics, Chemistry & Allied Sciences (ISSBN: 978–93–86435–86–6), pp: 75–82, 2019, International Multidisciplinary Research Foundation, Vijayawada.</li>
                                </ul>
                            </div>
                            <div>
                                <h3 style={{ textDecoration: "underline" }}>ACADEMIC YEAR 2018-2019</h3>
                                <h3>Publications :</h3>
                                <ul>
                                    <li>Published a paper entitled “A Review on Contamination, Effects and Analysis of Aflatoxins in Different Food Products” in International Journal of Pharmacy and Biological Sciences-IJPBSTM, ISSN (O): 2230-7605 (P): 2321-3272, Volume 9, Issue 2, I. F. : 0.888 & Pg. No. 371-378 April, 2019.</li>
                                    <li>Published a paper entitled “Identification & HPLC Quantification of Aflatoxins in Ground nut (Arachis Hypogaea L.) samples collected in Rayalaseema Area, Andhra Pradesh” in International Journal of Pharmaceutical Sciences & Research, ISSN No.: 2320-5148, Volume 10, Issue 3, January – March, 2019.</li>
                                    <li>Published a paper entitled “New Extractive Spectrophotometric Method Development and Validation for the Estimation” in the Asian Journal of Organic & Medicinal Chemistry, ISSN No. 2456-8937 , Volume 4, Issue 1, January – March, 2019.</li>
                                </ul>
                            </div>
                            <div>
                                <h3>Paper Presentations & Participation:</h3>
                                <ul>
                                    <li>Presented a paper titled “Simultaneous spectrophotometric assay method of Nitrofuration and phenazopyridine” in International Conference on Recent Developments and Applications of Physico Chemical Characterisation Techniques at JKC College, Guntur on 4th January 2019.</li>
                                    <li>Participated in UGC Sponsored one day international conference on “Domestic Violence” organised by Women Empowerment Cell & IQAC on 13th December 2018 at SDMS Mahila Kalasala, Vijayawada.</li>
                                    <li>Participated in the UGC Sponsored national Workshop on Intellectual Property rights-Issues & Challenges” organised by Department of MBA, KBN college on 23rd November, 2018.</li>
                                </ul>
                            </div>
                            <div>
                                <h3 style={{ textDecoration: "underline" }}>ACADEMIC YEAR 2017-2018</h3>
                                <h3>Publications :</h3>
                                <ul>
                                    <li>Published a research paper titied Air pollution tolerance Index of selected plants in Vijayawada city A.P in International Journal of GreenPharmacy 2017;December, S 887-S881. PISS:0973-8258. EISSN:1998-4103. Impact factor:0.68 UGC No.22851 and Scopus Indexed.</li>
                                    <li>Published a research paper titled “Identification and HPLC Quantification of Aflatoxins in Red Chilli (Capsicum annuum L.) in Guntur, Andhra Pradesh, India” in UGC approved,Thomson Reuters and Scopus indexed Journal – Asian Journal of pharmaceutics - Vol 11, No 04 December (2017) E-ISSN : 1998-409X and P-ISSN: 0973-8398</li>
                                    <li>Published a research paper titled “Stability Indicating Development and Validation of Ultraviolet Spectrophotometric Methods for the Simultaneous Estimationof Bromhexine and Cephalexin in their Combined Dosage Form” in UGC approved, Thomson Reuters and Scopus indexed Journal – Asian Journal of pharmaceutics - Vol 11, No 04 December (2017) E-ISSN :1998-409X and P-ISSN: 0973-8398</li>
                                    <li>Published an article on “First derivative UV–Spectrophotometric Method for the simultaneous estimation of Neomycine and Betamethasone in their combined dosage form” in IJRRPAS, (2016) December Vol.6 Issue.1 Pg:1381-1386, ISSN:2249-1236</li>
                                    <li>Published an article on “Seasonal Variations In Physico-Chemical Characteristics Of Ground Water Collected From Kondapalli Santhi Nagar Near Vijayawada Thermal Power Plant (Vtps) “in Rasayan Journal of ChemistryVol. 9 | No. 4 |858 - 863| October - December | 2016 ISSN: 0974-1496 | e-ISSN: 0976-0083 | CODEN: RJCABP</li>
                                    <li>Published an article on “Phytochemical screening and quantitative analysis of hexane, acetone, methanol & water extracts of Salicornia virginica by UV-spectrophotometry” in Der Pharmacia Lettre,October 2016, 8 (16):52-56, ISSN 0975-5071</li>
                                    <li>Published one research article. ”Physico chemical properties and heavy metal content of water collected from Ibrahimpatnam near by VTPS-Vijayawada’’.In the Journal of Pharma and Bioscience” 2015 July ;6(3):(p)42-49.ISSN 0975-6299 SCI Mago Journal Rank 0.288 Impact factor 5.121*</li>
                                    <li>Published a paper “Seasonal Variations in Physicochemical Characteristics of ground water collected from Kondapalli near by VTPS-Vijayawada” in the International Journal of Der Pharma Chemicals, ,2015; July 7(3):221-225 ISSN No. 0975-413X</li>
                                    <li>Published a paper “Estimation of Chemical Constituents in Branches of Tephrosia Purpurea” in the International Journal of advanced Research in Chemical Science, Volume 2, Issue 2A, February 2015, 91-94. ISSN No. 2349-039X(Print).</li>
                                    <li>Published an article “Determination and estimation of phytochemical constituents present in Pongamia Pinneta leaf extract in Fire Journal of natural and applied Sciences, 1(2), 2014, September 181-191.</li>
                                    <li>Published an article “Identification and estimation of phytochemicals from the plant Pedicularis Bicornuta leaf extract by UV Spectroscopy” in the journal Research desk June 2014, 3(1), 410-418.</li>
                                    <li>Published a paper “Simple, Sensitive, Specific and validated colorimetric method development for the quantitative estimation of Melphalan Hydrochloride in the bulk and pharmaceutical dosage forms” in the journal “South Pasific Journal of Pharma and Bioscience”June 2014, 2(1), 110-117.</li>
                                    <li>Published an article “Simultaneous Determination Of Famotidine And Ibuprofen In Combined Pharmaceutical Dosage Form By Rp-Hplc Method”inInternational Journal of Pharma and Biosciences, 2013 July; 4(3): (P) 655 – 662.</li>
                                    <li>Published an article “Method Development and Validation for Simultaneous Determination of Ezetimibe and Simvastatin in Combined Pharmaceutical Dosage form by RP-HPLC” in International Journal of Pharmaceutical and life sciences, Volume 2, Issue 2, March 2013.</li>
                                    <li>Published an article “RPHPLC Method Development and Validation for Simultaneous Estimation Dextromethorphn and Quindine” in JPR Vol.5, Issue 8 , pp. 4212 – 4215 on Aug. 2012.</li>
                                </ul>
                            </div>
                            <div>
                                <h3>Paper Presentations</h3>


                                <table className="table table-bordered">
                                    <tbody>


                                        <tr>
                                            <td >
                                                <p>1</p>
                                            </td>
                                            <td rowSpan={2}>
                                                <p>2012-13</p>
                                            </td>

                                            <td>
                                                <p>Presented on Global warming and its impact” in the UGC Sponsored National seminar on “ Climate Change a Challenge to Sustainable Development"</p>
                                            </td>

                                            <td >
                                                <p>Dept of zoology, KBN College, Vijayawada</p>
                                            </td>

                                            <td>
                                                <p>Vijayawada,29th and 30th November 2012.</p>
                                            </td>



                                        </tr>















                                        <tr>
                                            <td >
                                                <p>2</p>
                                            </td>
                                            <td>
                                                <p>Environmental effect of Agrochemicals” at the UGC Sponsored national conference on “Impact Of Pesticides And Persistent Organic Pollutants On Environment And Sustainability Of The Environment”  ,</p>
                                            </td>
                                            <td >
                                                <p>Dept. of Chemistry, Govt. womens College</p>
                                            </td>
                                            <td>
                                                <p>Guntur on 30th Nov and 1st December 2012</p>
                                            </td>



                                        </tr>




                                        <tr>
                                            <td >
                                                <p>3</p>
                                            </td>
                                            <td rowSpan={'2'}>
                                                <p>2013-14</p>
                                            </td>

                                            <td>
                                                <p>participated in the seminar on the “Role of Chemistry in Drug Discovery”</p>
                                            </td>
                                            <td >
                                                <p>Krishna University and Royal Society of Chemistry (London)-DS, held at Siddhartha Academy</p>
                                            </td>

                                            <td>
                                                <p>Vijayawada on 6th July 2013</p>
                                            </td>


                                        </tr>
                                        <tr>
                                            <td >
                                                <p>4</p>
                                            </td>
                                            <td>
                                                <p>presented a paper on  “Green Solvent and Ionic Liquids: Formulating for the Sustainable Future” in UGC Sponsored National workshop on “Green Chemistry, Its Need and Role In Our Society”,</p>
                                            </td>
                                            <td >
                                                <p>Department of Chemistry, Dharma Apparao College</p>
                                            </td>

                                            <td>
                                                <p>Nuzvid on 10th and 11th February, 2014.</p>
                                            </td>


                                        </tr>
                                        <tr>
                                            <td >
                                                <p>5</p>
                                            </td>
                                            <td rowSpan={'5'}>
                                                <p>2014-15</p>
                                            </td>
                                            <td>
                                                <p>presented a paper on “Importance of Environmentally Friendly Technologies” in the UGC sponsored two day national seminar “Sustainable Future through Green Chemistry”,</p>
                                            </td>
                                            <td >
                                                <p>Ch.S.D.St. Theresa’s Autonomous college for women</p>
                                            </td>

                                            <td>
                                                <p>Eluru, West Godavari on 11th and 12th July 2014.</p>
                                            </td>


                                        </tr>
                                        <tr>
                                            <td >
                                                <p>6</p>
                                            </td>
                                            <td>
                                                <p> presented a paper on “Role of Teachers and Students in Quality Education” in one day national seminar on “Enhancement and Sustenance of  Quality among Students and Teachers”</p>
                                            </td>
                                            <td >
                                                <p>IQAC, KBN College</p>
                                            </td>
                                            <td>
                                                <p>Vijayawada on 21st July 2014s</p>
                                            </td>


                                        </tr>
                                        <tr>
                                            <td >
                                                <p>7</p>
                                            </td>
                                            <td>
                                                <p>presented a paper on “Organic and Inorganic Hybrid Polymer Materials” in the UGC sponsored two day national seminar “Development of Advanced Materials in physics and electronics and their applications in day to day life”</p>
                                            </td>
                                            <td >
                                                <p>organised by Department of Physics, KBN College</p>
                                            </td>

                                            <td>
                                                <p>Vijayawada on  15th and 16th October 2014.</p>
                                            </td>


                                        </tr>
                                        <tr>
                                            <td >
                                                <p>8</p>
                                            </td>

                                            <td>
                                                <p>Presented a paper” Molecular Modelling Advancement and application”,  in a two day DST – SERB Sponsored international conference on “GENOMICs AND STEM CELLS” in collaboration with SARC Hyderabad, India </p>
                                            </td>
                                            <td >
                                                <p>Departments of Zoology, Botany and Chemistry, KBN College</p>
                                            </td>

                                            <td>
                                                <p>Vijayawada on 6th and 7th January, 2015</p>
                                            </td>
                                        </tr>


                                        <tr>
                                            <td >
                                                <p>9</p>
                                            </td>

                                            <td>
                                                <p>presented a paper on “Estimation of Chemical Constituents in Branches of Tephrosia Purpurea” in the UGC sponsored two day National seminar on Recent Trends in Synthetic Organic and 15Natural Product Chemistry”,</p>
                                            </td>
                                            <td >
                                                <p>Department of Chemistry, Nobel College</p>
                                            </td>

                                            <td>
                                                <p>Machilipatnam on 20th and 21st February 2015.</p>
                                            </td>


                                        </tr>
                                        <tr>
                                            <td >
                                                <p>10</p>
                                            </td>
                                            <td >
                                                <p>2015-16</p>
                                            </td>
                                            <td>
                                                <p>Presented  a paper on “Nanotechnology and the environment” in a two day UGC Sponsored National Seminar  on “Shaping the future with Nano Sciences” in collaboration with Krishna University, Machilipatnam</p>
                                            </td>
                                            <td >
                                                <p>P.B. Siddhardha College of arts & science</p>
                                            </td>

                                            <td>
                                                <p>Vijayawada, 19th and 20th August, 2015</p>
                                            </td>


                                        </tr>
                                        <tr>
                                            <td >
                                                <p>11</p>
                                            </td>
                                            <td rowSpan={'2'}>
                                                <p>2016-17</p>
                                            </td>
                                            <td>
                                                <p>presented a paper on “Nano Materials” in the DBT sponsored a Two Day National seminar on “Advances in the Synthesis of Nanomaterials and their Multi Dimensional Applications in Chemical & Bio-Sciences” (NANCBS-16) held on.</p>
                                            </td>
                                            <td >
                                                <p>Andhra Loyola College</p>
                                            </td>

                                            <td>
                                                <p>Vijayawada 14th & 15th September, 2016</p>
                                            </td>


                                        </tr>
                                        <tr>
                                            <td >
                                                <p>12</p>
                                            </td>
                                            <td>
                                                <p>presented a paper on “Seasonal Variations in Physicochemical Characteristics of Ground water collected from santhinagar-nearby VTPS, Vijayawada” in AP Science Congress.</p>
                                            </td>
                                            <td >
                                                <p>PB Siddhartha College</p>
                                            </td>

                                            <td>
                                                <p>Vijayawada 7-9th November, 2016</p>
                                            </td>
                                        </tr>




                                        <tr>
                                            <td >
                                                <p>13</p>
                                            </td>
                                            <td >
                                                <p>2017-18</p>
                                            </td>
                                            <td>
                                                <p>presented a paper title “ Green sysnthesi and Anti-Bacterial activity of copper nano partricles using ethanol and water leaf extaract of “Murraya koenigii” in UGC Sponsored two day National seminar on “Recent trends in Chemistry and Physics of materials”</p>
                                            </td>
                                            <td >
                                                <p> SRR and CVR Govt. Degree College,</p>
                                            </td>

                                            <td>
                                                <p>Vijayawada on 15thsep,2017.</p>
                                            </td>

                                        </tr>
                                    </tbody>
                                </table>


                            </div>
                            <div>
                                <h3>Other Qualifications</h3>
                                <ul>
                                    <li>G. Krishnaveni, Head, PG. Dept. of Chemistry was awarded Ph.D on “RP-HPLC Method Development and validation for the quantification of Some selected drugs in Tablet Dosage forms” by ANU under the guidance of Prof. P.V.V.Satyanarayana, Retd. Professor of ANU on 22nd July 2014</li>
                                    <li>G. Krishnaveni, Head, PG. Dept of Chemistry Qualified State Eligibility Test(SET) conducted by AP State Government in the year of 2012</li>
                                </ul>
                                <h3>Major and Minor Research projects</h3>
                                <ul>
                                    <li>Dr. G. Krishnaveni has completed one minor Research Project titled Identification of VTPS Pollution Effect on Surrounding Villages with a project grant of Rs. 75,000/- by UGC The duration of the project is two years i.e. from 2013-2015</li>
                                </ul>
                            </div>

                            <div>

                                <img src='https://drive.google.com/uc?id=1zbi9duZCIjCvr_LF_68BLA7SS5bplBVt' alt='image' style={{ height: '500px', width: '600px' }} />

                            </div>
                            <div>
                                <img src='https://drive.google.com/uc?id=1MKMsNqeuUe2govRjlc22Ng1KuFPONC-Y' alt='image' style={{ height: '500px', width: '600px' }} />
                            </div>
                            <div>
                                <h3>Extension Lectures</h3>
                                <ul>
                                    <li>Dr. G.Krishnaveni delivered a guest lecture on “ Ozone Preservation and Environment Protection “ in Kondapalli Thathi Reddy Womens College(KTR), Gudiwada, Krishna District , A.P.</li>
                                    <li>Dr. G. Krishnaveni gave an extension lecture on reactive intermediates in Maris Stella college on 15th July, 2017.</li>
                                    <li>G. Krishnaveni, Lecturer in M.Sc Chemistry, delivered a guest lecture on “ Heterocyclic Compounds” in Andhra Loyola College, Vijayawada on 5th August 2013.</li>
                                </ul>
                            </div>
                            <div>
                                <img src='https://drive.google.com/uc?id=15BWTPI9-bchxLyRAPLbMZ_HaMB5nUGnE' alt='image' style={{ height: '400px', width: '600px' }} />
                            </div>



                        </Box>
                    </AccordionDetails>
                </Accordion>

            </div>

            <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                    expandIcon={expanded === 'panel1' ? <RemoveIcon style={{ color: "white" }} /> : <AddIcon style={{ color: "white" }} />}
                    style={{ backgroundColor: "darkblue", color: "white" }}
                >
                    <Typography >Sri T. Bhagya Kumar</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Box>
                        <BulletLineCom data='Acted as Judge for AP State Level 24th National Children’s Science Congress – 2016 at Kethanakonda, Ibrahimpatnam, Krishna District on 3rd & 4th December, 2016.' />
                        <BulletLineCom data='Acted as Resource Person for Delivering a Guest Lecture on “Fundamental of Solid State Chemistry” at SDMS Mahila Kalasal on 4th September, 2014.' />
                        <BulletLineCom data='Acted as Co-ordinator for State Level Workshop on “Chemistry Carrier Prospectus organized by KBN College on 30th November, 2013.' />
                        <BulletLineCom data='Acted as a Member in INSPIRE – 2013 from 07.10.2013 to 11.10.2013 organized by KBN College, Vijayawada.' />
                        <BulletLineCom data='Acted as Convenor for UGC Sponsored National Seminar on “Significance of Green Strategies for Environmental Protection” organized by KBN College, Vijayawada on December, 2012.' />


                        <h4>Paper presentations:</h4>
                        <BulletLineCom data='Presented a paper on “Corporate Social Responsibility – Environmental Management” in International Seminar on Corporate Social Responsibility organized by KBN College on 19th - 21st February, 2016.'/>
                        <BulletLineCom data='Presented a paper in the National seminar on Shaping the Future with Nano Sciences held at PB Siddhartha College of Arts & Sciences, Vijayawada on 19th & 20th August, 2015.'/>
                        <BulletLineCom data='Presented a paper entitled “Homology Modelling” in the International Conference on Genomics & Stem Cells organized by Department of Zoology, Botany & Chemistry, KBN College on 6th & 7th January, 2015.'/>
                        <BulletLineCom data='Presented a paper entitled “Sustainable Development through Women Entrepreneurship” in the International Seminar on Women Entrepreneurship Perspective organized by KBN College on 6th & 7th August, 2014.'/>
                        <BulletLineCom data='Presented a paper entitled “HPLC Methods of Analysis” in the National Seminar on Chemical Sciences organized by Acharya Nagarjuna University on December, 2013.'/>
                        
                        
                        <h5>Participation:</h5>
                        <BulletLineCom data='Participated in the State Level Workshop on Cluster Practical at AG & SG Siddhartha College, Vuyyuru on 6th January, 2018.'/>
                        <BulletLineCom data='Participated in the National Workshop on “Space Dynamics” organized by SIR CR Reddy College, Eluru from 4th – 6th October, 2017.'/>
                        <BulletLineCom data='Participated in the Faculty Development Programme on New Market Oriented Restructured Courses under RUSA AC Reforms Three Day Residential Training Programme on “Analytical and Industrial Chemistry” organized by APHRDI, Bapatla from 31st July – 2nd August, 2017.'/>
                        <BulletLineCom data='Participated in Two Day National Workshop on Human Values & Professional Ethics organized by KBN College, Vijayawada on 24th & 25th July, 2015.'/>
                        <BulletLineCom data='Participated in the UGC Sponsored National Seminar on Impact of Chemical Fertilizers – Use of Bio – Fertilizers for Environmental Protection organized by SSN College, Narasaraopet on 11th & 12th December, 2014.'/>                    
                        <BulletLineCom data='Participated in the National Seminar on “The Role of Natural Product Chemistry in Drug Discovery” organized by Krishna University, Machilipatnam on 11th & 12th September, 2014.'/>
                        <BulletLineCom data='Participated in the National Seminar on “Enhancement and Sustenance of Quality among Students & Teachers: Role of Support Services” organized by KBN College on 21st July, 2014.'/>
                        <BulletLineCom data='Participated in the National Seminar on “Sustainable Future through Green Chemistry” organized by Ch S. D. Theresa’s College, Eluru on 11th & 12th July, 2014.'/>
                        <BulletLineCom data='Participated in the National Seminar on “Significance of Green Strategies for Environmental Protection” organized by KBN College, Vijayawada on December, 2012.'/>
                        <BulletLineCom data='Participated in the National Conference on “Impact of pesticide of persisted organic pollutions on Environment and Sustainability of the environment” organized by Govt. College for Women on November, 2012.'/> 
                        <BulletLineCom data='Participated in the National Seminar on “Role of Chemistry in the present era” organized by Department of Chemistry, Krishna University, Machilipatnam on August, 2012.'/>
                    </Box>
                </AccordionDetails>
            </Accordion>


            <Accordion square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary
                    expandIcon={expanded === 'panel2' ? <RemoveIcon style={{ color: "white" }} /> : <AddIcon style={{ color: "white" }} />}
                    style={{ backgroundColor: "darkblue", color: "white" }}
                >
                    <Typography >O.Sailaja</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Box>
                        <div>
                            <h3 style={{ textDecoration: "underline" }}>ACADEMIC YEAR 2019-2020</h3>
                            <ul>
                                <li>Presented three models as mentor in the “Amaravathi Balotsavam Science Fair -2019” held at SRR and CVR Gov. Degree College (A) from 29th to 31st August, 2019.</li>
                                <li>Participated in National work shop on Contemporary Nano; Synthesis Characterisation & Applications on 22nd August 2019 organised by Dept. of Chemistry CH.S.D.ST. Theresa’s College for Women (A), Eluru, AP.</li>
                            </ul>
                        </div>
                        <div>
                            <h3 style={{ textDecoration: "underline" }}>ACADEMIC YEAR 2018-2019</h3>
                            <h3>Publications:</h3>
                            <ul>
                                <li>Published a paper entitled “A Review on Contamination, Effects and Analysis of Aflatoxins in Different Food Products” in International Journal of Pharmacy and Biological Sciences-IJPBSTM, ISSN (O): 2230-7605 (P): 2321-3272, Volume 9, Issue 2, I. F. : 0.888 & Pg. No. 371-378 April, 2019.</li>
                                <li>Published a paper entitled “Identification & HPLC Quantification of Aflatoxins in Ground nut (Arachis Hypogaea L.) samples collected in Rayalaseema Area, Andhra Pradesh” in International Journal of Pharmaceutical Sciences & Research, ISSN No.: 2320-5148, Volume 10, Issue 3, January – March, 2019.</li>
                            </ul>
                            <h3>Participation:</h3>
                            <ul>
                                <li>Participated in the UGC Sponsored national Workshop on Intellectual Property rights-Issues & Challenges” organised by Department of MBA, KBN college on 23rd November, 2018.</li>
                                <li>Participated in UGC Sponsored one day international conference on “Domestic Violence” organised by Women Empowerment Cell & IQAC on 13th December 2018 at SDMS Mahila kalasala, Vijayawada.</li>
                                <li>Presented a paper titled “Simultaneous spectrophotometric assay method of Nitrofuration and phenazopyridine” in International Conference on Recent Developments and Applications of Physico Chemical Characterisation Techniques at JKC College, Guntur on 4th January 2019.</li>
                            </ul>
                        </div>
                        <div>
                            <h3 style={{ textDecoration: "underline" }}>ACADEMIC YEAR 2017-2018</h3>
                            <h3>Publications</h3>
                            <ul>
                                <li>Published a research paper titled “Identification and HPLC Quantification of Aflatoxins in Red Chilli (Capsicum annuum L.) in Guntur, Andhra Pradesh, India” in UGC approved,Thomson Reuters and Scopus indexed Journal – Asian Journal of pharmaceutics - Vol 11, No 04 December (2017) E-ISSN : 1998-409X and P-ISSN: 0973-8398.</li>
                                <li>Published an article on “First derivative UV–Spectrophotometric Method for the simultaneous estimation of Neomycine and Betamethasone in their combined dosage form” in IJRRPAS,(2016) December Vol.6 Issue.1 Pg:1381-1386, ISSN:2249-1236.</li>
                                <li>Published an article on “Seasonal Variations In Physico-Chemical Characteristics Of Ground Water Collected From Kondapalli Santhi Nagar Near Vijayawada Thermal Power Plant (Vtps) “in Rasayan Journal of ChemistryVol. 9 | No. 4 |858 - 863| October - December | 2016 ISSN: 0974-1496 | e-ISSN: 0976-0083 | CODEN: RJCABP.</li>
                                <li>Published an article on “Phytochemical screening and quantitative analysis of hexane, acetone, methanol & water extracts of Salicornia virginica by UV-spectrophotometry” in Der Pharmacia Lettre,October 2016, 8 (16):52-56, ISSN 0975-5071.</li>
                                <li>Published research article on ‘’Physico chemical properties and heavy metal content of water collected from Ibrahimpatnam near by VTPS-Vijayawada’’.In the Journal of Pharma and Bioscience” 2015 July ;6(3):(p)42-49.ISSN 0975-6299 SCI Mago Journal Rank 0.288 Impact factor 5.121*.</li>
                                <li>Published a paper “Seasonal Variations in Physicochemical Characteristics of ground water collected from Kondapalli near by VTPS-Vijayawada” in the International Journal of Der Pharma Chemicals, ,2015; July 7(3):221-225 ISSN No. 0975-413X</li>
                                <li>Published a paper “Priliminary PhytochemicalScreening &Quantitative estimation of the leaf extract of IxoraCoccinea in the IJARCS.ISSN No 2349-039X. Feb 2015.</li>
                                <li>Published an article “RP-HPLC Method Development and Validation for the estimation of Clobazamin in the tablet dosage form’’in the Asso Assian J Sci Tech 2014 September 1(2),153-160 ISSN No-2349-4964</li>
                                <li>Phytochemical&antioxidant studies of the aerial parts of urena lobatal in Int.J.A.P.S.BMS,2014 September vol3(2) ISSN No 2277-9280.</li>
                                <li>Published a paper “Determination and estimation of phytochemical constituents present in Pongamia Pinneta leaf extract in Fire Journal of natural and applied Sciences, 1(2), 2014, September 181-191.</li>
                                <li>Published a paper “Simple, Sensitive, Specific and validated colorimetric method development for the quantitative estimation of Melphalan Hydrochloride in the bulk and pharmaceutical dosage forms” in the journal “South Pasific Journal of Pharma and Bioscience”June 2014, 2(1), 110-117.</li>
                                <li>Published an article “Identification and estimation of phytochemicals from the plant Pedicularis Bicornuta leaf extract by UV Spectroscopy” in the journal Research desk June 2014, 3(1), 410-418.</li>
                            </ul>
                            <h3>Papers Presented in Seminars</h3>
                            <table className="table table-bordered">
                                <tbody>
                                    <tr>
                                        <td >
                                            <p>1</p>
                                        </td>
                                        <td rowSpan={2}>
                                            <p>2012-13</p>
                                        </td>

                                        <td>
                                            <p>Presented on “Global warming and its impact” in the UGC Sponsored National seminar on “ Climate Change a Challenge to Sustainable Development”</p>
                                        </td>

                                        <td >
                                            <p>Dept of zoology, KBN College.</p>
                                        </td>

                                        <td>
                                            <p>Vijayawada on 29th and 30th November 2012.</p>
                                        </td>


                                    </tr>
                                    <tr>
                                        <td >
                                            <p>2</p>
                                        </td>

                                        <td>
                                            <p>Presented on Environmental effect of Agrochemicals” at the UGC Sponsored national conference on “Impact Of Pesticides And Persistent Organic Pollutants On Environment And Sustainability Of The Environment” ,</p>
                                        </td>

                                        <td >
                                            <p>Dept. of Chemistry, Govt. Women’s College.</p>
                                        </td>

                                        <td>
                                            <p>Guntur on 30th Nov and 1st December 2012.</p>
                                        </td>


                                    </tr>
                                    <tr>
                                        <td >
                                            <p>3</p>
                                        </td>
                                        <td rowSpan={3}>
                                            <p>2013-14</p>
                                        </td>

                                        <td>
                                            <p>participated in the seminar on the “Role of Chemistry in Drug Discovery”,</p>
                                        </td>

                                        <td >
                                            <p>Krishna University and Royal Society of Chemistry (London)-DS, held at Siddhartha Academy.</p>
                                        </td>

                                        <td>
                                            <p>Vijayawada on 6th July 2013.</p>
                                        </td>


                                    </tr>
                                    <tr>
                                        <td >
                                            <p>4</p>
                                        </td>

                                        <td>
                                            <p> presented a paper on  “Green Solvent and Ionic Liquids: Formulating for the Sustainable Future” in UGC Sponsored National workshop on “Green Chemistry, Its Need and Role In Our Society”,</p>
                                        </td>

                                        <td >
                                            <p>Department of Chemistry, Dharma Apparao College.</p>
                                        </td>

                                        <td>
                                            <p>Nuzvid on 10th and 11th February, 2014.</p>
                                        </td>


                                    </tr>
                                    <tr>
                                        <td >
                                            <p>5</p>
                                        </td>

                                        <td>
                                            <p> presented a paper on “Importance of Environmentally Friendly Technologies” in the UGC sponsored two day national seminar “Sustainable Future through Green Chemistry”.</p>
                                        </td>

                                        <td >
                                            <p>Ch.S.D.St. Theresa’s Autonomous college for women.</p>
                                        </td>

                                        <td>
                                            <p> Eluru, West Godavari on 11th and 12th July 2014.</p>
                                        </td>


                                    </tr>
                                    <tr>
                                        <td >
                                            <p>6</p>
                                        </td>
                                        <td rowSpan={4}>
                                            <p>2014-15</p>
                                        </td>

                                        <td>
                                            <p>presented a paper on “Purpose of Education and teaching Communication Skills” in one day national seminar on “Enhancement and Sustenance of  Quality among Students and Teachers” .</p>
                                        </td>

                                        <td >
                                            <p>IQAC, KBN College.</p>
                                        </td>

                                        <td>
                                            <p>Vijayawada on 21st July 2014.</p>
                                        </td>


                                    </tr>
                                    <tr>
                                        <td >
                                            <p>7</p>
                                        </td>

                                        <td>
                                            <p> presented a paper on “Organic and Inorganic Hybrid Polymer Materials” in the UGC sponsored two day national seminar “Development of Advanced Materials in physics and electronics and their applications in day to day life”.</p>
                                        </td>

                                        <td >
                                            <p>Departmen of Physics, KBN College.</p>
                                        </td>

                                        <td>
                                            <p>Vijayawada, 15th and 16th October 2014.</p>
                                        </td>


                                    </tr>
                                    <tr>
                                        <td >
                                            <p>8</p>
                                        </td>

                                        <td>
                                            <p>Presented a paper on” Protein Peptide Interactions evolutionize Drug Development”., in a two day DST – SERB Sponsored international conference on “GENOMICs AND STEM CELLS” in collaboration with SARC Hyderabad, India.</p>
                                        </td>

                                        <td >
                                            <p>Departments of Zoology, Botany and Chemistry, KBN College.</p>
                                        </td>

                                        <td>
                                            <p>6th and 7th January, 2015 at Vijayawada.</p>
                                        </td>


                                    </tr>
                                    <tr>
                                        <td >
                                            <p>9</p>
                                        </td>

                                        <td>
                                            <p>presented a paper on “Preliminary phytochemical screening and quantitative estimation of the leaf extract of Ixora Coccinea” in the UGC sponsored two day National seminar on Recent Trends in Synthetic Organic and Natural Product Chemistry”.</p>
                                        </td>

                                        <td >
                                            <p>Nobel College.</p>
                                        </td>

                                        <td>
                                            <p>Machilipatnam on 20th and 21st February 2015.</p>
                                        </td>


                                    </tr>
                                    <tr>
                                        <td >
                                            <p>10</p>
                                        </td>
                                        <td>
                                            <p>2015-16</p>
                                        </td>

                                        <td>
                                            <p>Presented a paper on “Applications of Nano particles in biology & Science” in a two day UGC Sponsored National Seminar  on “Shaping the future with Nano Sciences” in collaboration with Krishna University, Machilipatnam .</p>
                                        </td>

                                        <td >
                                            <p>P.B.Siddhardha College of arts & science.</p>
                                        </td>

                                        <td>
                                            <p>Vijayawada, 19th and 20thAugust, 2015.</p>
                                        </td>


                                    </tr>
                                    <tr>
                                        <td >
                                            <p>11</p>
                                        </td>
                                        <td>
                                            <p>2016-17</p>
                                        </td>

                                        <td>
                                            <p>presented a paper on “ Physicochemical Characteristics of Ground water collected from Guntapalli-nearby VTPS, Vijayawada.” in AP Science Congress.</p>
                                        </td>

                                        <td >
                                            <p>PB Siddhartha College.</p>
                                        </td>

                                        <td>
                                            <p>Vijayawada 7-9th November, 2016.</p>
                                        </td>


                                    </tr>
                                </tbody>
                            </table>


                        </div>
                    </Box>
                </AccordionDetails>
            </Accordion>



            <Accordion square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary
                    expandIcon={expanded === 'panel3' ? <RemoveIcon style={{ color: "white" }} /> : <AddIcon style={{ color: "white" }} />}
                    style={{ backgroundColor: "darkblue", color: "white" }}
                >
                    <Typography>Sri K. P. T. Vijaya Bhaskar</Typography>
                </AccordionSummary>
                <AccordionDetails>
                   <Box>
                   <h3>Any Other</h3>
                   <BulletLineCom data='Organizer for National Pollution Day Programme on 2nd December, 2017.'/>   
                   <BulletLineCom data='Acted as Judge for Dr. Sudha Science Quest – 2017 organized by St. John’s School, Satyanarayanapuram, Vijayawada on 29th November, 2017.'/>
                   <BulletLineCom data='Organizer for Communal Harmony Week Programme organized by KBN College on from 19th – 25th November, 2017.'/>
                   <BulletLineCom data='Attended ANO Conference on 30th August, 2017.'/>
                   <BulletLineCom data='Attended NCC Conference on 12th April, 2017'/>
                   <BulletLineCom data='Attended for Annual ADM Inspection of 17 Andhra BN, Vijayawada for the training year 2016-17 on 25th January, 2017.'/>
                   <BulletLineCom data='Attended as Chief Guest for Water – Tree Awareness Programme on November, 2016 organized by St. Johns’ Public School, Vijayawada'/>
                   <BulletLineCom data='Attended NCC Conference on 20th April, 2016.'/>
                   <BulletLineCom data='Attended NCC Conference on 20th April, 2016.'/>
                   <BulletLineCom data='Worked as Counsellor for CFN Course in IGNOU, Study Centre, Vijayawada.'/>
                   <BulletLineCom data='Successfully completed PRCN Course S. No. PRCN/SD156DC26, from 15th September 2014- 13th December, 2014 at NCC OTA Kamptee with ‘A’ Grade.'/>
                   <h3>As BOS Member</h3>
                   <BulletLineCom data='BOS Member – SVRM College, Nagaram from 2017-18 to 2018-19'/>
                   <h3>Paper Presentations</h3>
                   <BulletLineCom data='Presented a Paper entitled “Rational Drug Designing” in the Two Day DST – SERB Sponsored International Conference “Genomics & Stem Cells” in collaboration with SARC, Hyderabad – India organized by KBN College, Vijayawada on 6th & 7th January, 2015.'/>
                   <BulletLineCom data='Presented a Paper entitled “Bio – Inorganic Chemistry” in the UGC Sponsored Two Day National Seminar on Advances in Chemical Science organized by KBN College on 18th & 19th September, 2015.'/>
                   <BulletLineCom data='Presented a Paper Entitled “Pollution & Its Control Measures” in the National Seminar on Climate Change – A Challenge to Sustainable Development organized by KBN College, Vijayawada on 29th & 30th November, 2012.'/>
                   <h3>Participation</h3>
                   <BulletLineCom data='Participated in the National Workshop on “Space Dynamics” organized by SIR CR Reddy College, Eluru from 4th – 6th October, 2017.'/>
                   <BulletLineCom data='Participated in the State Level Workshop on Cluster Practical at AG & SG Siddhartha College, Vuyyuru on 6th January, 2018.'/>
                   <BulletLineCom data='Participated in the National Workshop on “Instrumental Methods of Chemical Analysis” organized by KBN College, Vijayawada on 15th & 16th December, 2016.'/>
                   <BulletLineCom data='Participated in the UGC Funded One Day National Workshop on “Research & Innovations: Issues & Challenges” organized by IQAC, KBN College, Vijayawada on 22nd October, 2016.'/>
                   <BulletLineCom data='Participated in the Faculty Development Programme held on 2nd & 3rd June, 2015 organized by KBN College, Vijayawada.'/>
                   <BulletLineCom data='Participated in the Training of Trainers on Life Skills and Personality Development organized by RGNIYD, Tamilnadu from 11 – 14 November 2014.'/>
                   <BulletLineCom data='Participated in the Faculty Development Workshop for College Teachers organized by KBN College on 15th & 16th March, 2013.'/>
                   <BulletLineCom data='Participated in the National Seminar on “Green Chemistry – Our Life & Our Future” organized by Mahathma Gandhi College, Guntur on 9th December, 2011.'/>
                   </Box>
                </AccordionDetails>
            </Accordion>


        </div>
    )
}

export default MSCOOrganicAchivements;