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


const PhysicsandElectronicesAchivements = () => {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <div>
            <Accordion square expanded={expanded === 'panel0'} onChange={handleChange('panel0')}>
                <AccordionSummary
                    expandIcon={expanded === 'panel0' ? <RemoveIcon style={{ color: "white" }} /> : <AddIcon style={{ color: "white" }} />}
                    style={{ backgroundColor: "darkblue", color: "white" }}
                >
                    <Typography >Dr. PB Sandhya Sri</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Box>
                        <div>
                            <h2 style={{ textDecoration: "underline" }}>ACADEMIC YEAR 2018-2019:</h2>
                            <ul>
                                <li>Participated in Two – Day Science Academies Lecture Workshop on organised by Department of Physics & Electronics on “Applications of Quantum Mechanics to Optics” on 1st & 2nd February, 2019.</li>
                                <li>Published a paper entitled “Reuse than Recycle- for a Better Tomorrow” in UGC listed journals ISSN: 2455-3085 on 25th January, 2019 with an impact of 5.214.</li>
                                <li>Participated in the One Day National Workshop on “Benefits and Challenges of Inter Disciplinary Research” organised by Internal Quality Assurance Cell (IQAC) K.B.N. College (Autonomous) on 13th November,2018.</li>
                                <li>Participated in Two – Day Science Academies Lecture Workshop on “Fluid Mechanics” organised by Department of Mathematics on 4th & 5th October, 2018.</li>
                            </ul>
                        </div>
                        <div>
                            <h2 style={{ textDecoration: "underline" }}>Awards:</h2>
                            <ul>
                                <li>Best Women 2016 award by Praja Chaitanya Sankharavam</li>
                            </ul>
                        </div>
                        <div>
                            <h2 style={{ textDecoration: "underline" }}>Membership:</h2>
                            <ul>
                                <li>Member in Indian Association of Physics Teachers(IAPT)</li>
                                <li>Nominated by SCERT as mentors for DST programme the “one day training programme for teachers of INSPIRE awardees”.</li>
                                <li>Member in Indian Society of Systems for Science and Engineering.</li>
                                <li>Academic Audit Advisor</li>
                            </ul>
                        </div>
                        <div>
                            <h2 style={{ textDecoration: "underline" }}>Books Authored:</h2>
                            <ul>
                                <li>Author for the text book “ Electricity Magnetism & Electronics – A Kedarnath Publication</li>
                            </ul>
                        </div>
                        <div>
                            <h2 style={{ textDecoration: "underline" }}>Research:</h2>
                            <ul>
                                <li>Google Scholar Citations:88</li>
                                <li>H- index:6</li>
                                <li>i10 index:3</li>
                            </ul>
                        </div>
                        <div>
                            <h2 style={{ textDecoration: "underline" }}>Any other:</h2>
                            <ul>
                                <h3 style={{ textDecoration: "underline" }}>2017-2018:</h3>
                                <li>Acted as a Jury member for Dr.Sudha Science Quest – 2017 organized by St. John’s High School, Satyanarayanapuram branch, Vijayawada on 29th November, 2017.</li>
                                <li>Acted as a Jury member for Dr.Sudha Science Quest – 2017 conducted by St. John’s High School, Gunadala branch, Vijayawada on 30th November, 2017.</li>
                                <li>Visiting faculty to DAR College, NUZVID and dealt the Topic “Special Theory of Relativity” for I year Students in 2017-18</li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <h3 style={{ textDecoration: "underline" }}>2016-2017:</h3>
                                <li>Invited Speaker for “Training to the Guide Teacher of Awardees on 25th July 2016 organised by SCERT at Andhra Loyola College, Vijayawada.</li>
                                <li>Invited Speaker for “Training to the Guide Teacher of Awardees on 28th  July 2016 organised by SCERT at Guntur.</li>
                                <li>Invited Speaker for “Training to the Guide Teacher of Awardees on 29th July 2016 organised by SCERT at Regional Science Centre, Eluru.</li>
                                <li>Invited Speaker for “Training to the Guide Teacher of Awardees on 6th 7th August 2016 organised by SCERT at St.Theresa High school, Ongole.</li>
                                <li>Acted as a Jury member for INSPIRE District Level Project Exhibition on 27th & 28th October 2016 at St. Vincent Palloti High School, Peadana.</li>
                                <li>Acted as Evaluator for 24th National Children’s Science Congress -2016” held on 25th November 2016 at Regional Science Centre Bhavanipuram, Vijayawada.</li>
                                <li>Acted as a Jury member for Dr.Sudha Science Quest – 2016 organized by St. John’s High School, Bhavanipuram branch, Vijayawada on 29th November, 2016.</li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <h3 style={{ textDecoration: "underline" }}>2015-2016:</h3>
                                <li>Acted as a Jury member for District Level INSPIRE Exhibition -2015 at Donbosco Highschool, Guntupalli Vijayawada from 7th to 9th September, 2015.</li>
                                <li>Acted as a Jury member for State Level INSPIRE Exhibition -2015 at KBN College, Vijayawada from 21st to 23rd September, 2015.</li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <h3 style={{ textDecoration: "underline" }}>2014-2015:</h3>
                                <li>Acted as judge for 22nd National Children’s Science Congress – 2014 conducted at Regional Science Center, Vijayawada on 28th October 2014</li>
                                <li>Acted as judge for JNNSME Science Exhibition for children– District level at KBN College, Vijayawada from 14th to 16th November 2014.</li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <h3 style={{ textDecoration: "underline" }}>2013-2014:</h3>
                                <li>Acted as a Jury member for 41st JNNSMEE District Level Exhibition -2014 at KBC ZP (B)  Highschool, Patamata,  Vijayawada on 31st December 2013.</li>
                                <li>Acted as a Jury member for 41st JNNSMEE State Level Exhibition -2014 at Bishop Grassi Highschool Vijayawada from 5th to 7th January 2014.</li>
                            </ul>
                        </div>
                        <div>
                            <h3 style={{ textDecoration: "underline" }}>Paper Publications:</h3>
                            <p> insetion of table</p>
                        </div>
                        <div>
                            <h3 style={{ textDecoration: "underline" }}>Paper Publications:</h3>
                            <p> insetion of table</p>
                        </div>
                        <div>
                            <h3 style={{ textDecoration: "underline" }}>Paper Publications:</h3>
                            <p> insetion of table</p>
                        </div>
                        <div>
                            <h3 style={{ textDecoration: "underline" }}>Paper Publications:</h3>
                            <p> insetion of table</p>
                        </div>
                        <div>
                            <h3 style={{ textDecoration: "underline" }}>Paper Publications:</h3>
                            <p> insetion of table</p>
                        </div>
                        <div>
                            <h3 style={{ textDecoration: "underline" }}>Paper Publications:</h3>
                            <p> insetion of table</p>
                        </div>
                        <div>
                            <h2 style={{ textDecoration: "underline" }}>Paper Presentations:</h2>
                            <ul>
                                <h3 style={{ textDecoration: "underline" }}>2017-2018:</h3>
                                <li>Presented a paper entitled “Bioactive Biomaterials – Present & Future” in Two Day National Seminar on “Recent Trends in Chemistry & Physics of Materials” organised by Department of Chemistry, SRR & CVR Govt. Degree College, Vijayawada, on 15th & 16th September 2017.</li>
                                <li>Presented a paper “Green Chemistry & Applications” in UGC & APSCHE National Workshop on Recent Advances in Chemistry and Environmental Sciences organised by Department of Chemistry of JMJ College, Tenali from 13th to 14th November 2017.</li>
                                <li>Presented a paper entitled “theoretical velocities of .... UGC sponsored Two Day National National Seminar on Physics & Chemistry of Non – Crystalline Materials organised by Department of Physics of KVR College, Nandigama on 1st& 2nd December 2017.</li>
                                <li>Presented a paper entitled “Environmental Accounting – A Tangle Tool for Sustainable Development” in ICSSR  sponsored Two Day National Seminar on Green Accounting –Issues & Implementations organised by Research Promotion & Monitoring Cell, KBN College on 8st& 9nd December 2017.</li>
                                <li>Presented a paper entitled “Energy Recovery Ventilators” in UGC sponsored Two Day National Seminar on The Role of Chemist for Sustainable Environment organised by Department of Chemistry, KBN College on 13th& 14th December 2017.</li>
                                <li>Presented a paper entitled “Plastic Bottle Garden” in UGC sponsored Two Day National Seminar on Environmental Pollution – Public Responsibility organised by Department of Chemistry, Andhra Loyola College on 31st January & 1st February 2018.</li>
                                <li>Presented a paper entitled “Bio Photonics” in the UGC sponsored One Day National Seminar on “Hyperspace of Objects(IoT) and Microcontrollers organised by Department of Computer Science & Physics on 25th January 2018</li>
                                <li>Presented a paper “Global Warming – Global Warning” in the Two Day International Conference on “Materials for Energy & Environmental Protection” organised by Departments of Physics, Chemistry & Electronics of CRR College on 12h & 13th February 2018.
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <h3 style={{ textDecoration: "underline" }}>2016-2017:</h3>
                                <li>Presented a paper entitled “Nano Insulation Materials- An Effective Solution for Radiation absorption” in UGC Sponsored Two Day National Seminar “Advances in the Synthesis of Nano materials and their Multi-Dimensional Applications in Chemical & Bio – Sciences” organised by Andhra Loyola College, Vijayawada, on 14th& 15th September 2016.</li>
                                <li>Presented a paper entitled “ Methods of Waste Disposal” in UGC Sponsored Two Day National Seminar on “Solid Waste Management” organised G. Dept. of Chemistry, S.R.R. & C.V.R. Govt. Degree & P.G. College, Vijayawada, 16th& 17th September 2016.</li>
                                <li>Presented a paper entitled ” Pollution free Environment as Humanright”  in UGC Sponsored Two Day National Seminar on “Environmental Protection & Sustainable Development” organised by Depts. of Chemistry, Botany & Zoology of SIR CRR College, on 22nd& 23rd September, 2016.</li>
                                <li>Presented a paper entitled ” Space Junk – A Threat to Future” in one day Regional Seminar on “Advances in Atmospheric & Space Physics” by Department of Physics, PB Siddhartha College, Vijayawada on 26th September 2016.</li>
                                <li>Presented a paper entitled ” Compost – The Future’s Energy Source” in UGC Sponsored Two Day National Seminar on “Energy & Ecology” by Department of Physics, SIR CRR College, on 4th & 5th October, 2016.</li>
                                <li>Presented a paper entitled “Graphene – An Emerging Electronic Material” in UGC sponsored Two day National seminar on “Smart Materials” organised by Department of Physics, JMJ College, Tenali, on 30th November and 1st December 2016.</li>
                                <li>Presented a paper entitled “Use Redlich – Kister Polynomial in fitting Excess Parameters” in UGC sponsored Two day National seminar on “Emerging Trends in Mathematics” organised by Department of Mathematics, CRR Autonomous College, Eluru, on 8th & 9th December 2016.</li>
                                <li>Presented a paper entitled ”Erase e Waste – Salvage Future” in UGC Sponsored Three Day International Conference NAAFES-2016 organised by Departments of Botany, Biotechnology & Microbiology Andhra Loyola College, Vijayawada on 22-24th December 2016.
                                </li>
                                <li>Presented a paper entitled “ Thermo Acoustic Properties of Industrially Useful Binary Fluid Mixtures of NMP at Different Temperatures” in DBT & IAPT sponsored Two day National Seminar on “Advances in Biomaterials and Characterisation Techniques” organised by Department of Physics, Andhra Loyola College, on 20th & 21st January 2017.</li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <h3 style={{ textDecoration: "underline" }}>2015-2016:</h3>
                                <li>Presented a paper entitled “Chi Square Test for Goodness of Fit” in the UGC sponsored Two Day National Seminar organised by Department of Mathematics, KBN College, Vijayawada August 2015.</li>
                                <li>Presented a paper entitled “FT- IR Spectral Analysis of Molecular Interactions in the Binary Mistures of Anisic Aldehyde and Alcohols” in the UGC sponsored Two Day National Conference organised by Department of Chemistry, Govt. College, Rajahmundry 21st & 22nd August 2015.</li>
                                <li>Presented a paper in UGC Two Day Sponsored National Seminar on “Recent developments in Nano Technology & Nano Science”on 31st August and 1st September 2015.</li>
                                <li>Presented a paper entitled “Correlation of Redlich – Kister Polynomial” in UGC Sponsored Two Day National Seminar on Recent Advances in Pure and Applied Mathematics organised by PG Department of Mathematics PB Siddartha College, Vijayawada on 9th & 10th September 2015.</li>
                                <li>Presented a paper entitled “Green Cellular Networks – Issues & Challenges” in UGC Sponsored Two Day National Seminar on Advances in Chemical Sciences organised by Department of Chemistry KBN College, Vijayawada on 18th & 19th September 2015.</li>
                                <li>Presented a paper entitled “Mobile Phone Usage – Effect on Health” in Two Day National Seminar on “Recent Trends in Applied Physics” organised by Department of Physics, KRK Govt. Degree College, Addanki  on 16th & 17th  December 2015.</li>
                                <li>Presented a paper entitled “Methods to Reduce Corporate Social Irresponsibility” in Three Day International Seminar on “Corporate Social Responsibility Initiatives for Inclusive and Sustainable Development” organised by Department of Commerce & Management, KBN College, Vijayawada from 19th & 21st February 2016.</li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <h3 style={{ textDecoration: "underline" }}>2014-2015:</h3>
                                <li>Presented a paper entitled “Creativity in Leadership” in One Day National Seminar on “Enhancement and Sustenance of Quality among Students & Teachers: Role of Support Services” organised by IQAC, KBN College, on 21st July 2014.</li>
                                <li>Presented a paper entitled “Problems Faced by Working Women in India – an Overview” in UGC sponsored Two Day International Seminar on “Women Entrepreneurship – an Overview” organised by Department of Commerce & Management, KBN College, on 6th & 7th August 2014.</li>
                                <li>Presented a paper entitled “Mind & Professional Ethics – Historical Phylosophy” in UGC sponsored Two Day National Seminar on “Human Values & Professional Ethics in degree Colleges” organised by Department of Economics & Political Science, Govt.Degree College, Tiruvur, on 21st &22nd August 2014.</li>
                                <li>Presented a paper entitled “Recent Advancements in Solar Power Satellites” in UGC sponsored Two Day National Seminar on “Applications, Advances & Challenges in space Research” organised by Department of Physics, PB Siddhartha College, Vijayawada, on 19th & 20th September 2014.</li>
                                <li>Presented a paper entitled “Smart Materials – Military Applications” in UGC sponsored Two Day National Seminar on “Development of Advanced Materials in Physics & Electronics and Their Applications” organised by Department of Physics & Electronics, KBN College, Vijayawada, on 15th & 16th October 2014.</li>
                                <li>Presented a paper entitled “Nano Technology – Environmental Applications ” in UGC sponsored Two Day National Conference on “Advanced Technology Oriented Materilas” organised by Department of Physics, Crystal Growth & Nano Science Centre, Government College, Rajahmundry, on 8th & 9th December 2014.</li>
                                <li>Presented a paper entitled “Ethical Hacking & Counter Measures” in UGC sponsored Two Day National Seminar on “Ethical hacking – An inevitable Tool for a Secured Organisation” organised by Department of Computer Science & Applications, KBN College, Vijayawada, on 12th & 13th October 2014.</li>
                                <li>Presented a paper entitled “Mathematics – The Language of Physics” in UGC sponsored Two Day National Seminar on “Recent Developments in Mathematics & Its Applications” organised by Department of Mathematics, Acharya Nagarjuna University, Guntur on 22nd &23rd December 2014.</li>
                                <li>Presented a paper entitled “Theoretical Evaluation of Ultrasonic Velocities in Binary Liquid Mixtures of anisic Aldehyde with Salicylates at Different Temperatures Using Different Theories” in UGC sponsored Two Day National Seminar on “Multifunctional Materials Synthesis and Applications” organised by Department of Physics, Hindu College, Machilipatnam on 23rd & 24th January 2015.</li>
                                <li>Presented a paper entitled “Conservation of Ozone Layer – A prerequisite Responsibility” in UGC sponsored Two Day National Seminar on “Global Trends in Earth’s Climate – From Recent Trends” organised by Department of Physics, Ch.S.D.Theresa’s College, Eluru on 3rd & 4th February 2015.</li>
                                <li>Presented a paper entitled “Psychosomatic Diseases in Working Women in India Due to Stress ” in UGC sponsored Two Day National Seminar on “Nutritional Challenges for Psychosomatic Stressed women” organised by Department of Foods & Nutritional Sciences, Acharya Nagarjuna University, Guntur on 4th & 5th February 2015.</li>
                                <li>Presented a paper entitled “Lennard Jones Potentials ............. at Different Temperatures” in UGC sponsored Two Day National Conference on “Emerging Frontiers of Materials Science” organised by Department of Physics, Maris Stella College, Vijayawada on 12th & 13th February 2015.</li>
                                <li>Presented a paper entitled “Gender Studies – Its Need” in UGC sponsored Two Day National Seminar on “Women Education in India” organised by Department of Political Science & Women Empowerment Cell, Nobel College, Machilipatnam on 13th & 14th February 2015.</li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <h3 style={{ textDecoration: "underline" }}>2013-2014:</h3>
                                <li>Presented a paper entitled “Tribal Women – Economic Empowerment” in UGC sponsored Two Day National Seminar on “The Status of Tribal Women in Inda – Issues, Challenges & Strategies for Empowerment” organised by Department of Sociology & Social Work, Acharya Nagarjuna University, Guntur on 7th & 8th February 2014..</li>
                                <li>Presented a paper entitled “Reducing Soil Pollution using green Chemistry Principles” in UGC sponsored Two Day National Seminar on “Green Chemistry – Its Need and Role in Society” organised by Department of Chemistry, DAR College, Nuzvid on10th & 11th February 2014.</li>
                                <li>Presented a paper entitled “Advanced Technology for detection of chemical Hazards” in UGC sponsored Regional Seminar on “Recent Trends in Climatic Changes” organised by Department of Physics, YN College, Narsapur, 22nd February 2014.</li>
                                <li>Presented a paper entitled “Gender Mainstreaming in Education” in UGC sponsored Two Day National Seminar on “Gender Mainstreaming – Issues & Strategies for Empowerment” organised by Centre for Study of Social Exclusion and Inclusive policy, Andhra University, Visakhapatnam on 5th & 6th March 2014.</li>
                                <li>Presented a paper entitled “Eradication of Poverty- Fundamental Responsibility of Civic Society” in One Day National Seminar on “Human Development, Inclusive growth and Human Rights of the Poor: National & International Perspective ” organised by Dr.B.R.Ambedkar College of Law, Andhra University, Visakhapatnam on 29th April 2014.</li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <h3 style={{ textDecoration: "underline" }}>2012-2013:</h3>
                                <li>Presented a paper entitled “Pollution Free Environment through Metal Cleaning” in AP Science Congress at Acharya Nagarjuna University, Guntur held from 14th to 16th November 2012.</li>
                                <li>Presented a paper entitled “Applications of Mathematics in Environmental Studies” in National Conference on Applications of Mathematics in Engineering, Physical and Life Sciences & XXI Congress of APSMS held at Sri Venkateswara University, Tirupati from 7th to 9th December 2012.</li>
                                <li>Presented a paper entitled “Study of ................. at Different Temperatures” in UGC Sponsored Two Day National Seminar on Modern Trends in Mathematical and Physical Sciences, organised by Department of Mathematics, DAR College, Nuzvid, on 20th & 21st January 2012.</li>
                                <li>Presented a papers entitled “Applications of Nano Materials for Better Future” & Industrial Applicaations of Carbon Based Nano Materials in UGC Sponsored Two Day National Seminar on Nano Materials & Their applications, organised by Department of Physics, DAR College, Nuzvid, on 10th & 11th December 2009.21.</li>
                            </ul>
                        </div>

                        <h2 style={{ textDecoration: "underline" }}>Participation:</h2>
                        <div>
                            <ul>
                                <h3 style={{ textDecoration: "underline" }}>2017-2018:</h3>
                                <h4 style={{ textDecoration: "underline" }}>Seminars & Workshops</h4>
                                <li>Participated in One Week Orientation Programme on “Future Trends in Quality Enhancement of Professional Academic Skill in HEIs” organised by IQAC KBN College, Vijayawada, from 5th to 11th August 2017.</li>
                                <li>Participated in National Seminar on “Social Responsibility and Ethics in Higher Education” organised by IQAC, VSR & NVR College, Tenali 1st September 2017.</li>
                                <li>Participated in National Workshop on “Space Dynamics organised” by science departments of Sir CRR College, Eluru from 4th to 6th October 2017.</li>
                                <li>Participated in IAPT & DBT sponsored one week National Workshop on “Practical Skills for New Cluster electives in Physics” organised by Department of Physics of Andhra Loyola College, Vijayawada from 16th to 21st  October 2017.</li>
                                <li>Participated in Two Day Faculty Orientation Programme in Computational Methods & Programming in C organised by Department of Physics of PB Siddhartha College, Vijayawada from 20th to 21st November 2017.</li>
                                <li>Participated in UGC  sponsored One Day National Workshop on “Intellectual Property Rights” organised by Research Promotion & Monitoring Cell,, KBN College on 22nd February 2018.</li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <h3 style={{ textDecoration: "underline" }}>2016-2017:</h3>
                                <li>Participated in One Week Orientation Programme on “Curriculum Reforms to Enrich Quality in Higher Education” organised by IQAC, VSR & NVR College, Tenali from 7th to 13th September 2016</li>
                                <li>Participated in One Week Faculty Development Programme on “Human Values & Professional Ethics” organised by IQAC, SSN College, Narasaraopet from 17th to 23th September 2016</li>
                                <li>Participated in UGC Sponsored One Day National Workshop organised by IQAC, KBN College, Vijayawada, on 22nd October 2016.</li>
                                <li>Participated in One Week National Workshop on “Emerging Trends & Challenges to Enhance Quality in Higher Education” organised by IQAC, JMJ College, Tenali from 1st to 7th November 2016.</li>
                                <li>Participated in UGC sponsored One Week National Workshop on “Promotion of Ethics & Human Values” organised by Department of Political Sciences, SVRM College, Nagaram, from 21st to 27th November 2016.</li>
                                <li>Participated in UGC sponsored International Conference on “Emerging Trends in Chemical Pharmaceutical Environmental Sciences & Technology” organised by Department of Chemistry, PR Govt. College, Kakinada on 24th & 25th January 2017.</li>
                                <li>Participated in UGC Sponsored One Day National Workshop on “ Role of Human Values in Higher Education for Personal & Professional Excellence” by IQAC, Maris Stella College, Vijayawada on 1st February 2017</li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <h3 style={{ textDecoration: "underline" }}>2015-2016:</h3>
                                <li>Participated in Two Day Faculty Development Programme organised by KBN College, Vijayawada on 2nd & 3rd June 2015.</li>
                                <li>Participated in UGC sponsored Two Day National Workshop on “Human Values & Professional Ethics – Essential for Individual and Society” organised by Value Education Cell & Department of Telugu on 24th & 25th July 2015.</li>
                                <li>Participated in UGC sponsored Two Day National Seminar on “Emerging Techniques in Physics Teaching and Training ” organised by Department of Physics on 7th & 8th August 2015.</li>
                                <li>Participated in sponsored by APHE & RUSA One Day National Workshop on “Standardizing Question Paper Setting Under CBCS Pattern” organised by Value Education Cell & Department of Telugu on 27th August 2015.</li>
                                <li>Participated in Two Day National Workshop on “Intelligent Robotics” organised by Department of Computer Science & Electronics on 21st & 22nd August 2015.</li>
                                <li>Participated in Faculty Development Programme organised by Crystal Growth & Ano science Research Centre, Govt. College, Rajahmundry 20th November 2015.</li>
                                <li>Participated in Two Day National Seminar on “Advances in Material Sciences” organised by Department of Electronics & Instrumentation Technology on 25th & 26th November 2015.</li>
                                <li>Participated in One Day National Workshop on “Computational Physics” organised by Department of Physics on 24th February 2016.</li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li>Participated in UGC, DST, APSCHE sponsored Three Day International Seminar on “Glasses and Other Functional Materials” organised by Department of Physics, Acharya Nagarjuna University, Guntur from 11th to 13th December 2014.</li>

                            </ul>

                            <img src=' /images/kbnnewimg/all/1v48P6wazbtv5jwUyACK2hguWfs3uIv8e' alt='gif image' height={'500px'} width={'600px'} />
                        </div>



                    </Box>
                </AccordionDetails>
            </Accordion>

            <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                    expandIcon={expanded === 'panel1' ? <RemoveIcon style={{ color: "white" }} /> : <AddIcon style={{ color: "white" }} />}
                    style={{ backgroundColor: "darkblue", color: "white" }}
                >
                    <Typography >Ch. Nagabhushanam</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Box>
                        <div>
                            <h2 style={{ textDecoration: "underline" }}> 2018-2019:</h2>
                            <ul>
                                <h3 style={{ textDecoration: "underline" }}>ACADEMIC YEAR 2018-2019:</h3>
                                <li>Participated in Two – Day Science Academies Lecture Workshop on organised by Department of Physics & Electronics on “Applications of Quantum Mechanics to Optics” on 1st & 2nd February, 2019.</li>
                                <li>Presented a paper on “Cyber Crime and Its Prevention In India” in the UGC Sponsored National Seminar NSCS-2018, Organized by Department of Computer science, KBN College on 28th & 29th November, 2018, ISBN No:978-81-936640-1-8.</li>
                                <li>Published a paper on “Home Automation Using IOT” in the IJOER-ONLINE ISSN: 2321-7758 Vol.6.Issue.5., September, 2018 with an impact of 5.8701.</li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <h3 style={{ textDecoration: "underline" }}>Paper Presentations:</h3>
                                <li>Presented a paper on “Corporate Social Responsibility Public Sector Vs. Private Sector: A Myth or Reality” in the UGC Sponsored International Seminar organized by Dept. of Commerce & Management from 19th – 21st February, 2016.</li>
                                <li>Presented a paper on “Issues in electronic security infrastructure in banking system” in the National seminar on Ethical Hacking – An Inevitable tool for a Secured Organization Organized by Department of Computer Science & Applications, KBN College on 12th and 13th December, 2014.</li>
                                <li>Presented a paper on “E-Security in Banking System” in the National Seminar on Cyber Security with Special Focus on Cyber Crimes and Cyber Laws, Organized by Department of Computer science, PB Siddhartha on 15th and 16th November, 2014.</li>
                                <li>Presented a Paper on “Organic LED & its Modern Technologies” in the National Seminar on Development of Advanced Materials in Physics & Electronics and their Applications Organized by Department of Physics & Electronics, KBN College on 15th & 16th October, 2014.</li>
                                <li>Presented a Paper on “Women Values and Ethics Competence in Professional Ethics” in the National seminar on Human Values and Professional Ethics in Degree College organized by Department of Economics & Political Science, Government Degree College, Tiruvuru on 21st and 22nd August, 2014.</li>
                                <li>Presented a Paper on “Women Entrepreneurship finding voice & vision” in the International Seminar on “Women Entrepreneurship – A Global Perspective” Organized by Department of Commerce & Management on 6th and 7th August, 2014.</li>
                                <li>Presented a Paper on “Role of Teachers & Students in Enhancing Quality” in the National Seminar on “Enhancement and Sustenance of Quality among Students and Teachers: Role f Support Services organized by IQAC, KBN College on 21st July, 2014.</li>
                                <li>Presented a Paper on “The Use of Innovative Tools in Teacher Education” in the National Seminar on “Enhancement and Sustenance of Quality among Students and Teachers: Role f Support Services organized by IQAC, KBN College on 21st July, 2014</li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <h3 style={{ textDecoration: "underline" }}>Participation:</h3>
                                <li>Participated in the National Workshop on “Space Dynamics” organized by Sir CR Reddy College, Eluru from 4th – 6th October, 2017.</li>
                                <li>Attended One Week Orientation Programme on “Future trends in quality enhancement of professional and academic skills to HEI” conducted by IQAC on 5th to 11th August 2017.</li>
                                <li>Participated in the Two Day National Workshop on “Research & innovations” conducted by IQAC on 22nd October 2016.</li>
                                <li>Participated in the Two Day National Workshop on “Intelligent robotics” conducted by Dept of Computer Science, at KBN College, Vijayawada on 22nd Aug, 2015.</li>
                                <li>Attended workshop on “Human Values and Professional Ethics-essential for individual and society” organized by Value Education Cell & Dept. of Telugu on 25th July 2015.</li>
                                <li>Participated in the Faculty Development Programme organized by KBN College, Vijayawada on 2nd & 3rd June, 2015.</li>
                                <li>Participated in the “Applications, Advances & Challenges in Space Research” Organized by Department of Physics, PB Siddhartha on 19th and 20th September, 2014.</li>

                            </ul>
                        </div>
                        {/* <div>
                            <h2>insertoon of Table</h2>
                        </div> */}

                    </Box>
                </AccordionDetails>
            </Accordion>

            <div>
                <h1>STUDENT ACHIEVEMENTS</h1>
                <ul>
                    {/* <li style={{ color: "Highlight" }}> <a style={{ color: "Highlight" }} href='/images/kbnnewimg/all/ach/PG_MCA/physics/STUDENT%20ACHIVEMENTS%20-2018-19-physics.pdf' target='__blank'>STUDENT ACHIVEMENTS(2018-2019)</a></li> */}
                    <li style={{ color: "Highlight" }}> <a style={{ color: "Highlight" }} target='__blank'>STUDENT ACHIVEMENTS(2018-2019)</a></li>
                </ul>
            </div>
        </div>
    )
}

export default PhysicsandElectronicesAchivements;
