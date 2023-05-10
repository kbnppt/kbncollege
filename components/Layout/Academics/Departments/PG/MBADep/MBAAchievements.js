import React from 'react'
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';


const MBAAchievements = (props) => {

    // const [apidata,setApiData] = React.useState(props?.data)

    // const getImgData = (data) =>{
    //     let value = data?.split('%20')?.join(' ');
    //     let filterValue = apidata?.find((e)=>e?.name == value);
    //     if(filterValue){
    //         return filterValue?.id
    //     }
    //     return '1mOfBNITDbkyBcSwLI0A87bJY5nvNNm4E'
    // }

    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (

        <div>
            <h1 style={{ textDecoration: "underline" }}> STAFF</h1>
            <Accordion square expanded={expanded === 'panel0'} onChange={handleChange('panel0')}>
                <AccordionSummary
                    expandIcon={expanded === 'panel0' ? <RemoveIcon style={{ color: "white" }} /> : <AddIcon style={{ color: "white" }} />}
                    style={{ backgroundColor: "darkblue", color: "white" }}
                >
                    <Typography >S.VENKATESH</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Box>
                        <h2 style={{ textDecoration: "underline" }}>ACADEMIC YEAR 2019-2020</h2>

                        <h4> Faculty Development Programme</h4>
                        <ul>
                            <li>Participated in 3-day Faculty Development Programme on “INNOVATIVE PEDAGOGY & EFFECTIVE TEACHING”, Organized by IQAC in KBN College held on 30th, 31st May and 1st June, 2019.</li>
                        </ul>
                        <h4> Online Course</h4>
                        <ul>
                            <li>S. Venkatesh, Director of PG Courses, has successfully completed and received a passing grade in “SKILLS105X: PUBLIC SPEAKING”, a course of study offered by RITx, an online learning initiative of Rochester Institute of Technology, May 3, 2019.</li>
                        </ul>
                        <h4> PRESENTATIONS</h4>
                        <ul>
                            <li>Participated and Presented a paper on “Impact of Corporate Social Responsibility on Consumer Behaviour” in two- day International Seminar on “ Corporate Social Responsibility Initiatives for Inclusive and Sustainable Development”(ISCSR-2016) on 19th Feb,2016. Sponsored by UGC , Organized by Dept. Of Commerce and Management ,K.B.N.College (Autonomon ous).</li>
                            <li>Participated &Presented a paper on Performance Appraisal Adjuvanting Employee Career on 12th &13th Dec,2015 in the Two-Day National seminar on Human Resource Management : Exploring  New Dimensions held at Bommidala Dept. Of  Human Resource Management , ANU, Guntur.</li>
                            <li>Participated and Presented a paper on “challenges and areas in operating system research and development” in Two-day National Seminar on “ Ethical Hacking- An Inevitable tool for asecured organisation” on 12,13 December 2014. organised by the Dept. of Computer Science and Applications, KBN College Vijayawada.</li>
                            <li>Participated and presented a paper on “Talent Management services in public sector banks”</li>
                            <li>In One-day international seminar on “Transforming organisations through talentManagement” on 18th November 2014. organised by VR Siddartha Engineering College, Dept of Business Administration.</li>
                            <li>Presented and published a paper on “women Entrepreneurship opportunities and challenges”in TwoDay International Seminaron Women Entrepreneurship Global Perspective on 6,7 August 2014. organised by KBN College (Autonomous).</li>
                            <li>Presented paper on “A focus on counselling “ in one day national seminar on “enhancement and sustenance of quality among students and teachers on 21 July 2014. organised by IQAC, KBN College.</li>
                            <li>Participated &presented a paper on Trends in Packaging on 28th,March,2014 National Seminar on Brand Management in Indian Industry, Organised by Dept. of Business Management, V.R.Siddhartha Engineering College</li>
                            <li>Participated &presented a paper on Retail Banking in India –Challenges & Oppurtunities on 15th,March,2014 National Seminar on Retai Banking Trends & Challenges</li>
                            <li>Participated &presented a paper on Participative Management Avenuing Employee Empowerment on 22nd,23rd,Feb,2013 Two-Day National Seminar ,Sponsored by UGC &ICCR, Organised by BommidalaDept. of HRM, ANU.</li>
                            <li>Participated &presented a paper on Micro Finance in Two One day National Seminar on Inclusive Banking System in India : Problems and Prospects on 8th & 9th March 2013. Organised by Dept. of Commerce Noble College (Autonomous) Machilipatnam. Sponsored by UGC.</li>
                            <li>Participated &presented a paper on conservation of natural resources in Two day National Seminar on Climate Change – A Challenge to sustainable Development, NSCCST-2012 in collaboration with ANU, APPCB and APCOST on 29th & 30th November 2012. Organised by Dept. of Zoology. KBN Colllege (Autonomous).</li>
                        </ul>
                        <h4> OTHER ACTIVITIES</h4>
                        <ul>
                            <li>Participated in the “work shop cum seminar to actualize the potential of PG Autonomy” and presented a paper on “Curriculum Design and Developmkent” on 2nd &3rd June,2017. Organized by IQAC, Andhra Loyola college, Vijayawada.</li>
                            <li>Participated &Presented a paper on Performance Appraisal Adjuvanting Employee Career on 12th &13th Dec,2015 in the Two-Day National seminar on Human Resource Management : Exploring  New Dimensions held at Bommidala Dept. Of  Human Resource Management , ANU, Guntur.</li>
                            <li>Participated in the one week orientation programme on “Future Trends in Quality Enhancement of Professional and Academic skills in HEIS” on 5th -11th August, 2017. Organised by IQAC, KBN college (Autonomous), Vijayawada, A.P. in collaboration with Krishna University, Machilipatnam, Sponsored by UGC.</li>
                            <li>Participated in the UGC Funded One Day National Workshop on “ Researchand Innovations: Issues and Challenges (NWRIIC-2016) on 22nd Oct, 2016. Organized by IQAC, KBN College, Vijayawada.</li>
                            <li>Participated FDP on Engaging Pedagogies in Teaching on 28TH Feb & 1ST March,2015. Organised by MR PAI Foundation. Sponsored by Godrej Industries Limited.</li>
                            <li>Participated &presented a paper on Emerging Trends in Global Business on 29th,30th ,March,2014 Two-day National Workshop ,Organised by Dept. of International Business Studies of ANU.</li>
                            <li>Participated Faculty Developmentworkshop for College Teachers on 15th & 16th March 2013. Organised by KBN college (Autonomous).</li>
                        </ul>
                        <h4> PUBLICATIONS</h4>
                        <ul>
                            <li>A paper on “E-Retailing” published in national journal of  “Journal of advanced research in commerce in management studies” on Nov,2016 with (ISSN.NO) 2394-837X, Vol-3,s2 and page numbers are 110-120.</li>
                            <li>A paper on “Impact of corporate social responsibility on consumer behavior ” published in international journal of  “SS International Journal of Multidisciplinary Research” on Feb,2016 with (ISSN.NO) 2395-7964, Volume-2, , issue- 2 and page numbers are  163-167 (IM.F-2.96).</li>
                            <li>A paper on “Performance Appraisal Adjudicating Employee Career” published in the book of  “Human Resource Management :Exploring New Dimensions” on  Dec12,2015 with (ISBN.NO) 978-93-85100-54-3,  page numbers are 73-76.</li>
                            <li>A paper on “Talent Management services in Public Sector Banks” published in book of“Transforming Organisations through talent management”  on 18th November 2014 with (ISBN.NO) 978-93-83241-63-7 and page numbers are  464-470.</li>
                            <li>A paper on “Challenges and Areas in Operating System Research and Development” published in international journal of  “Emerging Technology in computer science and Electronics”  on November-2014 with (ISSN.NO) 0976-1353, volume -11 & issue-2 and page numbers are  1-4.</li>
                            <li>A paper on “Women Entrepreneur – Opportunities and Challenges” published in international journal of  “Global Journal For Research Analysis”  on 6th ,7th August 2014 with (ISSN.NO) 2277-8160, volume -3 & issue-8(special issue) and page numbers are  41-42. IM.F-1.5408.</li>
                            <li>A paper on “Participative Management avenuing Employee Empowerment” published in book of  “Emerging Trends in Industrial Relations”  on Feb,2014 with (ISBN.NO) 978-81-926819-5-5 and page numbers are 443-446.</li>
                            <li>A paper on “Retail Banking in India-Challenges & Opportunities” published in international journal of  “Research in Management studies”  on Feb,2014 with (ISSN.NO) 2321-4864, , volume-1  & issue-7 and page numbers are 153-158.</li>
                            <li>A paper on “Participative Management avenuing Employee Empowerment” published in book of  “"Emerging Trends in Industrial Relations” on Feb,2013 with (ISBN.NO) 978-81-926819-5-5 page numbers are 443-446.</li>
                        </ul>

                    </Box>
                </AccordionDetails>
            </Accordion>
            <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                    expandIcon={expanded === 'panel1' ? <RemoveIcon style={{ color: "white" }} /> : <AddIcon style={{ color: "white" }} />}
                    style={{ backgroundColor: "darkblue", color: "white" }}
                >
                    <Typography >D. L. PRATYUSHA</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Box>
                        <h2 style={{ textDecoration: "underline" }}>ACADEMIC YEAR 2019-2020</h2>

                        <h4> Faculty Development Programme</h4>
                        <ul>
                            <li>Participated in 3-day Faculty Development Programme on “INNOVATIVE PEDAGOGY & EFFECTIVE TEACHING”, Organized by IQAC in KBN College held on 30th, 31st May and 1st June, 2019.</li>
                        </ul>
                        <h4> Online Course</h4>
                        <ul>
                            <li>D.L. Pratusha, Assistant Professor, has successfully completed and received a passing grade in “SKILLS105X: PUBLIC SPEAKING”, a course of study offered by RITx, an online learning initiative of Rochester Institute of Technology, July 22, 2019.</li>
                        </ul>


                    </Box>
                </AccordionDetails>
            </Accordion>

            <Accordion square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary
                    expandIcon={expanded === 'panel3' ? <RemoveIcon style={{ color: "white" }} /> : <AddIcon style={{ color: "white" }} />}
                    style={{ backgroundColor: "darkblue", color: "white" }}
                >
                    <Typography >A. RAVI KIRAN</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Box>
                        <h2 style={{ textDecoration: "underline" }}>ACADEMIC YEAR 2019-2020</h2>

                        <h4> Faculty Development Programme</h4>
                        <ul>
                            <li>Participated in 3-day Faculty Development Programme on “INNOVATIVE PEDAGOGY & EFFECTIVE TEACHING”, Organized by IQAC in KBN College held on 30th, 31st May and 1st June, 2019.</li>
                        </ul>
                        <h4>National Seminar</h4>
                        <ul>
                            <li>Participated and presented the paper entitled “Intellectual Property Rights on Service Sector”, “ Challenges & Opportunities”, Organized by Departments of commerce (UG & PG) Economics (UG & PG) & Management Studies (PG) held on 27th & 28th September, 2019.</li>
                        </ul>
                        <h4>Online Course</h4>
                        <ul>
                            <li>A. Ravi Kiran, HOD of M.com, has successfully completed and received a passing grade in “SKILLS105X: PUBLIC SPEAKING”, a course of study offered by RITx, an online learning initiative of Rochester Institute of Technology, July 5, 2019.</li>
                        </ul>
                        <h3>2018-2019:</h3>
                        <h4>Publications</h4>
                        <ul>
                            <li>Paper Published entitled “An Empirical study on “Job Satisfaction” with special reference to INCAP Ltd,” in the International Journal of Emerging Technology and Innovative Research. ISSN No. 2349-5162, Vol,.5, Issue 11, Page No. 387-396 in 2018.</li>
                        </ul>
                        <h4>Paper Presentations</h4>
                        <ul>
                            <li>Presented a paper entitled “Digital Marketing – An Advertisement on various platforms” in two days National Seminar, organized by Department of International Business Studies, Acharya Nagarjuna University, Guntur, on 22nd & 23rd March 2019.</li>
                            <li>A paper presented on “Ital India: Opportunities & Challenges ” in the National Seminar on” Challenges of new India – Realizing a Billion Aspirations”, Organised by PG Dept. of Business Administration, Prasad V. Potluri Siddhrtha Institute of technology on 30thJan, 2018.Sponsored by UGC.</li>
                            <li>A paper presented on “Rural Women Entrepreneurship in India – Problems and challenges” Two- Day National Seminar on”Econmy and Entrepreneurship”, Organised by PG Dept. of Commerce and Management, VRS&YRN College, vodarevu, chirala.on 27th -28th Oct, 2017.Sponsored by UGC.</li>
                            <li>Participated and Presented a paper on “Impact of Corporate Social Responsibility on Consumer Behaviour” in two- day International Seminar on “ Corporate Social Responsibility Initiatives for Inclusive and Sustainable Development”(ISCSR-2016) on 19th- 21st Feb,2016. Sponsored by UGC , Organized by Dept. Of Commerce and Management ,K.B.N.College (Autonomous).</li>
                            <li>Presented a paper on “ Talent management services in public sector banks in ne day international seminar on Transformation organisation through talent Management on 18-11-2014. organised by VR Siddarth college of Engineering and technology.</li>
                            <li>Presented a paper on “women Entrepreneurship opportunities  and challenges”  in International seminar on Women Entrepreneurship – A Global Perspectives on 6-7 August 2014. sponsored by UGC.</li>
                            <li>A paper on “E-Retailing” published in national journal of  “Journal of advanced research in commerce in management studies” on Nov,2016 with (ISSN.NO) 2394-837X, Vol-3,s2 and page numbers are 83-93.</li>
                            <li>A paper on “Impact of corporate social responsibility on consumer behavior” published in international journal of  “SS International Journal of Multidisciplinary Research” on Feb,2016 with (ISSN.NO) 2395-7964, Volume-2, , issue- 2 and page numbers are  163-167 (IM.F-2.96).</li>
                            <li>A paper on “Talent Management Practices in Public Sector” published in the book of  “Human Resource Management :Exploring New Dimensions” on  Dec12,2015 with (ISBN.NO) 978-93-85100-54-3,  page numbers are 654-656.</li>
                            <li>A paper on “Corporate Citizenship Building Corporate Image” published in book of  “Industrial Relations And Human Relations In The Era of Globalization”  on 5th -8th Feb,2015 with (ISBN.NO) 978-93-85100-05-5 and page numbers are  473-476.</li>
                            <li>A paper on “Talent Management services in Public Sector Banks” published in book of“Transforming Organisations through talent management”  on 18th November 2014with (ISBN.NO) 978-93-83241-63-7 and page numbers are  464-470.</li>
                            <li>A paper on “Network Forensics” published in international journal of  “Emerging Technology in computer science and Electronics”  on November-2014 with (ISSN.NO) 0976-1353, volume-11  & issue-2 and page numbers are  61-66.</li>
                            <li>A paper on “Women Entrepreneur – Opportunities and Challenges” published in international journal of  “Global Journal For Research Analysis”  on 6th ,7th August 2014 with (ISSN.NO) 2277-8160, volume -3 & issue-8(special issue) and page numbers are  41-42. IM.F-1.5408.</li>
                            <li>A paper on “Trends in Packaging” published in book of  “Brand Management in Indian Industry”  on March,2014 with (ISBN.NO) 978-18383241-32-3and page numbers are 282-285.</li>
                            <li>A paper on “Retail Banking in India-Challenges & Opportunities” published in international journal of  “Research in Management studies”  on Feb,2014 with (ISSN.NO) 2321-4864, , volume-1  & issue-7 and page numbers are 153-158.</li>
                        </ul>
                        <h4>Participation</h4>
                        <ul>
                            <li>Participated in UGC Sponsored two days National Workshop on “Stress Management in Corporate Happiness Management” organized by Department of HRM, Acharya Nagarjuna University, Guntur, on 8th & 9th February 2019.</li>
                            <li>Participated in UGC Sponsored one day National Workshop on “Benefits and Challenges of Interdisciplinary Research” organized by IQAC, KBN College, Vijayawada on 13th November 2018</li>
                            <li>Participated in Five days FDP on “Zoho & Insta EMI” organized by AP Skill Development Corporation (APSSDC) from 22nd October 2018 to 26th October 2018.</li>
                            <li>Participated in Two day FDP on “Perspectives of Pedagogy – The role of Case Study in Management Education” organized by the Department of Business and Management Studies, Gudlavalleru Engineering College, Gudlavalleru on 17th & 18th August 2018</li>
                            <li>Participated &Presented a paper on Talent Management Practices in Public Sector Banks in the Two-Day National seminar on Human Resource Management : Exploring  New Dimensions held at Bommidala Dept. Of  Human Resource Management , ANU, Guntur on 12th &13th Dec,2015.</li>
                            <li>Participated and Presented a paper on “Corporate Citizen ship building Corporate Image in Three-day National Seminar on “INDUSTRIAL RELATIONS AND HUMANRELATIONS IN THE ERA OF GLOBALISATION” on 5th -8thFeb,2015. organised by of Human Resourse Management,ANU,Guntur.</li>
                            <li>Participated and Presented a paper on “Network Forensics“ in Two-day National Seminar on “ Ethical Hacking- An Inevitable tool for asecured organisation” on 12,13 December 2014. organised by the Dept. of Computer Science and Applications, KBN College Vijayawada. sponsored by UGC.</li>
                            <li>Presented a paper on “ Higher education prospecting Indian economic System” in one day National seminar on enhancement and substance of quality among students and teachers: Role of support services”on 21-07-2014. organised by IQAC, KBN College.</li>
                            <li>Participated &presented a paper on Corporate Social Responsibility, road map for 21st Century Corporates in One-day National Seminar on Corporate Governance in India- Evolution and Challeges on 3rd April 2013. Organised by Dept. of MBA Montessoi Mahila Kalasala.</li>
                            <li>Participated &presented a paper on Challenges in Managing Talent in One day National Seminar on Talent Management in Knowledge Economy on 23rd March 2013. Organised by Dept. of Business Administration,P.B. Siddartha College of Arts and Sciences.</li>
                            <li>Participated &presented a paper on Micro Finance in Two One day National Seminar on Inclusive Banking System in India : Problems and Prospects on 8th & 9th March 2013. Organised by Dept. of Commerce Noble College (Autonomous) Machilipatnam.</li>
                        </ul>
                        <h4>Awards</h4>
                        <ul>
                            <li>APSET-2013, qualified held on 24-nov-2013 for assistant professor /lectureship date of issue :16-april-2014 in Osmania university on 16th -april-2014 on Management </li>
                        </ul>
                        <h4>OTHER ACTIVITIES</h4>
                        <ul>
                            <li>Participated in the UGC Funded One Day National Workshop on “ Researchand Innovations: Issues and Challenges (NWRIIC-2016) on 22nd Oct, 2016. Organized by IQAC, KBN College, Vijayawada.</li>
                            <li>Participated &presented a paper on Emerging Trends in Global Business on 29th,30th ,March,2014 Two-day National Workshop ,Organised by Dept. of International Business Studies of ANU. Sponsored by UGC.</li>
                            <li>Participated in FDP on Engaging Pedagogies in Teaching on 28TH Feb & 1ST March,2015. Organised by MR PAI Foundation. Sponsored by Godrej Industries Limited.</li>
                        </ul>


                    </Box>
                </AccordionDetails>
            </Accordion>
            <Accordion square expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary
                    expandIcon={expanded === 'panel4' ? <RemoveIcon style={{ color: "white" }} /> : <AddIcon style={{ color: "white" }} />}
                    style={{ backgroundColor: "darkblue", color: "white" }}
                >
                    <Typography >Dr. A. SRINIVASA RAO</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Box>
                        <h2 style={{ textDecoration: "underline" }}>ACADEMIC YEAR 2019-2020</h2>

                        <h4> Faculty Development Programme</h4>
                        <ul>
                            <li>Participated in 3-day Faculty Development Programme on “INNOVATIVE PEDAGOGY & EFFECTIVE TEACHING”, Organized by IQAC in KBN College held on 30th, 31st May and 1st June, 2019.</li>
                        </ul>
                        <h4> Online Course</h4>
                        <ul>
                            <li>D.L. Pratusha, Assistant Professor, has successfully completed and received a passing grade in “SKILLS105X: PUBLIC SPEAKING”, a course of study offered by RITx, an online learning initiative of Rochester Institute of Technology, July 22, 2019.</li>
                        </ul>


                    </Box>
                </AccordionDetails>
            </Accordion>
            <div>
                <h1 style={{ textDecoration: 'underline' }}>STUDENTS </h1>

                <h2>STUDENT ACHIEVEMENTS</h2>
                <ul>

                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href='https://drive.google.com/uc?id=1E7dsoVNS9IuPBye5Yj6CFu2JoJQGQ-y7' target='_blank'>STUDENT ACHIEVEMENTS(2021-2022)</a></li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href='https://drive.google.com/uc?id=1a9p47Yjh9kQ-4jOhDZ7AduI4vUQNqS7y' target='__blank'>STUDENT ACHIEVEMENTS(2019-2020)</a></li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href='https://drive.google.com/uc?id=1dnsnfc7-xbmrz2ASdibuV4B3UMoxS9cb' target='__blank'>STUDENT ACHIEVEMENTS(2018-2019)</a></li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href='https://drive.google.com/uc?id=1Q6zgX9BybYIim6tektwqbgJnX32suwUa' target='__blank'>SWAYAM 2017-2018</a></li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href='https://drive.google.com/uc?id=1Q6zgX9BybYIim6tektwqbgJnX32suwUa' target='__blank'>STUDENT ACHIEVEMENTS(2017-2018)</a></li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href='https://drive.google.com/uc?id=1-St9jvNi9MUsT_OZZRncHNF6Qpf-u4Dd' target='__blank'>STUDENT ACHIEVEMENTS(2016-2017)</a></li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href='https://drive.google.com/uc?id=1N1BS-181ofmE4j8hRqI2Z_uMCPk7Qh3Q' target='__blank'>STUDENT ACHIEVEMENTS(2015-2016)</a></li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href='https://drive.google.com/uc?id=1Gm6WsYvO4H53KGs3-XC4YfKiXLZinzEK' target='_blank'>STUDENT ACHIEVEMENTS(2014-2015)</a></li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href='https://drive.google.com/uc?id=1Yd1j92xsCbYDNFJ6qcg-CTqRo1uQc4Ej' target='_blank'>STUDENT ACHIEVEMENTS(2013-2014)</a></li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href='https://www.kbncollege.ac.in/attachments/#######################' target='_blank'>STUDENT ACHIEVEMENTS(2012-2013)</a></li>

                </ul>
            </div>

        </div>
    )
}

export default MBAAchievements;