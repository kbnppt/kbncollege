import React from 'react'
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box'
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const MCAAchievements = () => {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (

        <div>
            <h2 style={{ color: '#0048cd', textAlign: 'center' }}>DEPARTMENT OF MCA</h2>
            <div>
                <h1 style={{ textDecoration: "underline" }}> Staff</h1>
                <Accordion square expanded={expanded === 'panel0'} onChange={handleChange('panel0')}>
                    <AccordionSummary
                        expandIcon={expanded === 'panel0' ? <RemoveIcon style={{ color: "white" }} /> : <AddIcon style={{ color: "white" }} />}
                        style={{ backgroundColor: "darkblue", color: "white" }}
                    >
                        <Typography> M.V.T.RAM PAWAN KUMAR </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Box>
                            <h3>PAPER  PUBLICATIONS</h3>
                            <ul>
                                <li>Published a paper on “ Concot of image using open cv and background subtracting “ in International Journal of Research and analytical Reviews(IJRAR), Issue 04, Volume 5, DEC 2018 .</li>
                                <li>Published a paper on “ Big Data for Cyber collateral and its sphere“ ISBN : 978-81-936640-1-8 in national seminar “ Cyber Security“ NSCS-2018 organised by dept. computer science and applications , KBN College on 28 &29th NOV,2018.</li>
                                <li>Presented and Published a paper on “Empiricism of Smart Villages and Its Contraption”, International Journal of Innovative Research in Advance Engineering, Issue 12, Volume3, in an UGC Sponsored International Conference on “Digital India-The Information for ALL” on 2nd & 3rd December, 2016.</li>
                                <li>Presented and published a paper on “A Green Thumb To Fortify Information” presented in the National seminar NSEH-2014 Organized by Department of Computer Science & Applications, KBN College on 12th and 13th December, 2014 in the International Journal of Emerging Technology in Computer Science and Electronics with an ISSN No:0976-1353 Vol.11.Issue 1 (Nov.2014) with an impact factor of 1.078.</li>
                                <li>Published a paper on “Cloud for Next Generation E-Learning TV” presented in the National Seminar Organized by Department of Maths, Andhra Loyola College on 21st and 22nd August, 2014 in the International Journal of Scientific and Innovative Mathematical Research with an ISSN 2347-307x Volume-2 Issue-7(A) with an Impact factor:3.97</li>
                                <li>Presented and published a paper on “Women Entrepreneurship finding perception” presented in the International Seminar INSWEG-2014 Organized by Department of Commerce & Management on 6th and 7th August, 2014 in Global Journal for Research Analysis with an ISSN:2277-8160 Volume 3 Issue:8 with an Impact factor:1.5408</li>
                                <li>Presented and published a paper on “Materiality of self help groups on accreditation of women” presented in the International Seminar INSWEG-2014 Organized by Department of Commerce & Management on 6th and 7th August, 2014 in Global Journal for Research Analysis with an ISSN:2277-8160 Volume 3 Issue:8 with an Impact factor:1.5408.</li>
                            </ul>
                            <h3>PRESENTATIONS</h3>
                            <ul>
                                <li>Participated and successfully completed course Python Developers from mongoDB University on January 12 2021.</li>
                                <li>Participated and successfully completed course SQL Pros from mongoDB University on December 31 2020.</li>
                                <li>Participated and successfully completed course Basics from mongoDB University on December 23 2020.</li>
                                <li>Participate and successfully completed the online workshop on “Tools and Techniques for quality research” organised by National Institute of Technology, Tiruchirapalli from 29/10/2020 to 31/10/2020.</li>
                                <li>Participated in MeitY sponsored online Short Training Course titled “Deep Learning Applications in Image Preocessing under ambit” organised by Department of Electronics and Communication Engineering from October 5-9, 2020.</li>
                                <li>Participated in Short Term Training Programme through ICT mode on “Design and Analysis of Algorithms” organised by National Institute of Technical Teachers Training and Research, Kokata from 24/08/2020 to 28/08/2020.</li>
                                <li>Participated in Short Term Training Programme through ICT mode on “Data Science with R programming” organised by National Institute of Technical Teachers Training and Research, Kokata from 10/08/2020 to 21/08/2020.</li>
                                <li>Participated in Short Term Training Programme through ICT mode on “Writing Research Proposals” organised by National Institute of Technical Teachers Training and Research, Kokata from 03/08/2020 to 07/08/2020.</li>
                                <li>Participated in One Week on Workshop on “Advanced Python Programming” , Organized by Department of Computer Science & Engineering of Chalapathi Institute of Techonology, on 08/06/2020 to 14/06/2020.</li>
                                <li>Participated in One Week National Level Online Short Term Training Program on “Blockchain & it’s Applications” Organized by the Department of CSE in association with NYCI & Brain O Vision Solutions India PVT. LTD., on 10/06/2020 to 15/06/2020.</li>
                                <li>Participated in 3-day Faculty Development Programme Organized by IQAC in KBN college on 30th,31st May and 1st June 2019</li>
                                <li>Participated in UGC sponsored two days national seminar on “ cyber security“ organised by department of computer science and applications KBN College on 28 & 29th NOV 2018.</li>
                                <li>Participated in the one day national workshop on “ Benefits and challenges of interdisciplinary Research organised by Internal Quality Assurance Cell (IQAC)“ , KBN College on 13th NOV 2018.</li>
                                <li>Participated in UGC sponsored two days national workshop on “ Data analytics using R-programming(NWDAR-2018)“ organised by department of computer science application , KBN College, on 24 & 25TH SEP2018</li>
                                <li>Presented and Published a paper on “Empiricism of Smart Villages and Its Contraption”, International Journal of Innovative Research in Advance Engineering, Issue 12, Volume3, in an UGC Sponsored International Conference on “Digital India-The Information for ALL” on 2nd & 3rd December, 2016.</li>
                                <li>Presented and published a paper on “A Green Thumb To Fortify Information” presented in the National seminar NSEH-2014 Organized by Department of Computer Science & Applications, KBN College on 12th and 13th December, 2014 in the International Journal of Emerging Technology in Computer Science and Electronics with an ISSN No:0976-1353 Vol.11.Issue 1 (Nov.2014) with an impact factor of 1.078.</li>
                                <li>Presented a Paper on “Cloud for Next Generation E-Learning TV” presented in the National Seminar Organized by Department of Computer science & Applications, Andhra Loyola College on 11th and 12th August, 2014.</li>
                                <li>Presented and published a paper on “Women Entrepreneurship finding perception” presented in the International Seminar INSWEG-2014 Organized by Department of Commerce & Management on 6th and 7th August, 2014 in Global Journal for Research Analysis with an ISSN:2277-8160 Volume 3 Issue:8 with an Impact factor:1.5408</li>
                                <li>Presented and published a paper on “Materiality of self help groups on accreditation of women” presented in the International Seminar INSWEG-2014 Organized by Department of Commerce & Management on 6th and 7th August, 2014 in Global Journal for Research Analysis with an ISSN:2277-8160 Volume 3 Issue:8 with an Impact factor:1.5408.</li>
                                <li>Presented a paper on “M-Learning and M-Education” Presented in the National Seminar NSESQ-2014 organized by Department of IQAC, KBN College on 21st July, 2014.</li>
                            </ul>

                            <h3>WORKSHOPS AND SEMINARS ATTENDED:</h3>
                            <ul>
                                <li>Attended "Faculty development programme" Organized by M.R.Pai foundation on28th Feb&1st Mar 2015.</li>
                                <li>Attended "Feasible Model for Global firms" organised by commerce & management KBN college on 21ST & 22ND Feb,2016.</li>
                            </ul>

                            <h3>Faculty Development Programmes</h3>
                            <ul>
                                <li>Participated in Two Days Online Faculty Development Program on “Significance of Online Learning Tools Post Covid-19” Organized by Department of Computer Science, Andhra Loyola College in association with Codegnan IT Solutions(OPC) Pvt., LTD., Vijayawada, on 12/06/2020 to 13/06/2020.</li>
                                <li>Participated in One Week National Level Online Faculty Development Program on “Artifical Intelligence & it’s Applications” Organized by the Department of CSE in association with NYCI & Brain O Vision Solutions India PVT. LTD., on 06/06/2020 to 11/06/2020.</li>
                                <li>Participated in One Week Online International Faculty Development Program on “Skilling Teachers for Online Education” Organized by Department of Humanities, UKA TARSADIA University, on 02/06/2020 to 06/06/2020.</li>
                                <li>Participated & Completed Successfully AICTE Training & Learning (ATAL) Academy Online FDP on “Artificial Intelligence” Organized by Central University of Kerala, on 03/06/2020 to 07/06/2020.</li>
                                <li>Participated in “5 days Online “Faculty development programme” on Cyber Security Conducted by Dept. of CSE Vignan Institute of Engineering and Technology Vishakhapatnam from 28th May to 1st June 2020.</li>
                            </ul>

                            <h3>OTHERS</h3>
                            <ul>
                                <li>  M.Ram Pawan Kumar delivered a guest lecture on “Mobile Computing” at JMJ College, Tenali on 01st September, 2015.</li>
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
                        <Typography> L.Sravani </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Box>

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
                        <Typography> Y.Srinivasa Rao </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Box>

                        </Box>
                    </AccordionDetails>
                </Accordion>
            </div>

            <div>
                <Accordion square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                    <AccordionSummary
                        expandIcon={expanded === 'panel3' ? <RemoveIcon style={{ color: "white" }} /> : <AddIcon style={{ color: "white" }} />}
                        style={{ backgroundColor: "darkblue", color: "white" }}
                    >
                        <Typography> D.Sailaja </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Box>

                        </Box>
                    </AccordionDetails>
                </Accordion>
            </div>

            <div>
                <Accordion square expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                    <AccordionSummary
                        expandIcon={expanded === 'panel4' ? <RemoveIcon style={{ color: "white" }} /> : <AddIcon style={{ color: "white" }} />}
                        style={{ backgroundColor: "darkblue", color: "white" }}
                    >
                        <Typography> B.Santhi Babu </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Box>

                        </Box>
                    </AccordionDetails>
                </Accordion>
            </div>

            <div>
                <Accordion square expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                    <AccordionSummary
                        expandIcon={expanded === 'panel5' ? <RemoveIcon style={{ color: "white" }} /> : <AddIcon style={{ color: "white" }} />}
                        style={{ backgroundColor: "darkblue", color: "white" }}
                    >
                        <Typography> B.Madhu Sudhana Rao </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Box>

                        </Box>
                    </AccordionDetails>
                </Accordion>
            </div>

            <div>
                <Accordion square expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                    <AccordionSummary
                        expandIcon={expanded === 'panel6' ? <RemoveIcon style={{ color: "white" }} /> : <AddIcon style={{ color: "white" }} />}
                        style={{ backgroundColor: "darkblue", color: "white" }}
                    >
                        <Typography> G.Madhuri </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Box>

                        </Box>
                    </AccordionDetails>
                </Accordion>
            </div>

            <div>
                <Accordion square expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
                    <AccordionSummary
                        expandIcon={expanded === 'panel7' ? <RemoveIcon style={{ color: "white" }} /> : <AddIcon style={{ color: "white" }} />}
                        style={{ backgroundColor: "darkblue", color: "white" }}
                    >
                        <Typography> K.L.V.N Prasad </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Box>

                        </Box>
                    </AccordionDetails>
                </Accordion>
            </div>

            <div>
                <Accordion square expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
                    <AccordionSummary
                        expandIcon={expanded === 'panel8' ? <RemoveIcon style={{ color: "white" }} /> : <AddIcon style={{ color: "white" }} />}
                        style={{ backgroundColor: "darkblue", color: "white" }}
                    >
                        <Typography> N.L.V Manaswini </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Box>

                        </Box>
                    </AccordionDetails>
                </Accordion>
            </div>

            <div>
                <Accordion square expanded={expanded === 'panel9'} onChange={handleChange('panel9')}>
                    <AccordionSummary
                        expandIcon={expanded === 'panel9' ? <RemoveIcon style={{ color: "white" }} /> : <AddIcon style={{ color: "white" }} />}
                        style={{ backgroundColor: "darkblue", color: "white" }}
                    >
                        <Typography> J.Balaji </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Box>

                        </Box>
                    </AccordionDetails>
                </Accordion>
            </div>

            <div>
                <h1 style={{ textDecoration: "underline" }}> Students</h1>
                <p>B.Vasavi of MCA(2014-2017) got Pratibha Award from the Government of A.P.</p>
                <img src='https://drive.google.com/uc?id=1Jzgk3BZptjb3IpdFvE-9o2VQrf2NH04Z' alt='img' />
                <h2>STUDENT ACHIEVEMENTS of M.C.A.</h2>
                <ul>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href='https://drive.google.com/uc?id=11YVCy_sV4tmvGDIjF5666Z-ZVM4AfyFe' target='__blank'>STUDENT ACHIEVEMENTS(2021-2022)</a> </li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href='https://drive.google.com/uc?id=1HyyXFYKosPbSN-wE2wo-s1Yeu1J0KWNO' target='__blank'>STUDENT ACHIEVEMENTS(2020-2021)</a> </li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href='https://drive.google.com/uc?id=1svfbMuQ3qn7mge_KVBDupiW1D5nsjRz7' target='__blank'>STUDENT ACHIEVEMENTS(2019-2020)</a> </li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href='https://drive.google.com/uc?id=1svfbMuQ3qn7mge_KVBDupiW1D5nsjRz7' target='__blank'>STUDENT ACHIEVEMENTS(2018-2019)</a> </li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href='https://drive.google.com/uc?id=1hFBVf0QEh-shU-Q4w1pkublYRa22cwXm' target='__blank'>STUDENT ACHIEVEMENTS(2017-2018)</a> </li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href='https://drive.google.com/uc?id=1hFBVf0QEh-shU-Q4w1pkublYRa22cwXm' target='__blank'>STUDENT ACHIEVEMENTS(2017-2018)</a> </li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href='https://drive.google.com/uc?id=1rgDHPuY4jHMntqpdXPBO-hA6lp42FAYI' target='__blank'>STUDENT ACHIEVEMENTS(2016-2017)</a> </li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href='https://drive.google.com/uc?id=15IZI9wYzzuVu1kpetIvvlOSg4QhTZAMO' target='__blank'>STUDENT ACHIEVEMENTS(2015-2016)</a> </li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href='https://drive.google.com/uc?id=15IZI9wYzzuVu1kpetIvvlOSg4QhTZAMO' target='__blank'>STUDENT ACHIEVEMENTS(2014-2015)</a> </li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href='https://drive.google.com/uc?id=10dmyaRM2wC6zL0LAKuJVwIFT_8PBrE1d' target='__blank'>STUDENT ACHIEVEMENTS(2013-2014)</a> </li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href='https://drive.google.com/uc?id=1VolPdmDwmJDLcHSn54WjLyplGrOiLncG' target='__blank'>STUDENT ACHIEVEMENTS(2012-2013)</a> </li>
                </ul>
            </div>


        </div>
    )
}

export default MCAAchievements;