import React from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {
  withStyles,
  Theme,
  createStyles,
  makeStyles,
} from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { withWidth } from "@material-ui/core";
import { blue } from "@material-ui/core/colors";
import MSCOOrganicAchivements from "../../PG/MSCOOrganicDep/MSCOOrganicAchivements";

const ChemistryAchivements = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <div>
      {/* <MSCOOrganicAchivements /> */}
      <h1 style={{ textDecoration: "underline" }}> Staff</h1>
      <Accordion
        square
        expanded={expanded === "panel0"}
        onChange={handleChange("panel0")}
      >
        <AccordionSummary
          expandIcon={
            expanded === "panel0" ? (
              <RemoveIcon style={{ color: "white" }} />
            ) : (
              <AddIcon style={{ color: "white" }} />
            )
          }
          style={{ backgroundColor: "darkblue", color: "white" }}
        >
          <Typography>Dr.G.Krishnaveni</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box>
            <h2 style={{ textDecoration: "underline" }}>
              ACADEMIC YEAR 2021-2022:
            </h2>
            <ul>
              <li>
                Published a research article in UGC care listed and in SCOPUS
                indexed journal entitled on Simultaneous Estimation of
                Aflatoxins (B1, B2, G1 and G2) by Liquid Chromatography Coupled
                with Mass Spectrometry (LC-MS) in Asian Journal of chemistry,
                2021, 33(3): 521-526.
              </li>
              <li>
                Attended a workshop on ENVIORMENTAL SUSTAINABILITY organized by
                Govt. Degree college, Men, Srikakulam, on 28-01-22.
              </li>
              <li>
                Participated in Virtual FDP on PROMOTING QUALITY RESEARCH,
                SKILLS & INNOVATION IN HIGHER EDUCATION organized by DEPT OF
                MATHEMATICS & ZOOLOGY, IQAC,JMJ COLLEGE FOR WOMEN(TENALI),
                7-3-22 to 11-3-22.
              </li>
              <li>
                Attended a webinar on international seminar and published a book
                chapter ART OF EDUCATION AND TEACHING COMMUNICATION SKILLS in
                ICSSR sponsored seminar on SOCIAL INNOVATION& ENTERPRENEURSHIP
                IN INDIA, organized by department of Commerce & Management on
                25th and 26th Feb, 2022.
              </li>
              <li>
                Participated in National webinar on PRINCIPLES OF ORGANIC
                SPECTROSCOPY & ITS APPLICATIONS, organized by department of
                Chemistry KRISHNA University in association with department of
                chemistry KBN college(A) on 12-02-2022.
              </li>
              <li>
                Delivered a Guest lectured on SEPERATION TECHNIQUES to B.Sc
                chemistry students at Andhra Loyola College on 20-11-2021.
              </li>
              <li>
                Delivered a guest lecture on COORDINATION CHEMISTRY to B.Sc.,
                Chemistry students at Samata Degree College, Visakhapatnam on
                09-11-2021.{" "}
              </li>
              <li>
                Awarded GURU SPANDANA AWARD from SPANDANA EDA INTERNATIONAL
                FOUNDATION, Guntur on 07-10-2021.{" "}
              </li>
              <li>
                Attended a webinar on ANTIBIOTIC DISCOVERY STRATEGIES IN THE ERA
                OF DRUG RESISTANCE organized by DEPT OF CHEMISTRY, PB SIDHARTA
                COLLEGE OF ARTS & SCIENCE, on 27-09-21.{" "}
              </li>
              <li>
                Attended a webinar on VIRTUAL INTERNATIONAL CONFERENCE ON MULTI
                FUNCTIONAL ADVANCED MATERIALS organized by DEPT OF CHEMISTRY,
                JVM’S DEGREE COLLEGE, on 09 & 10-08-21.{" "}
              </li>
              <li>
                Attended a Faculty Development Program on MATERAILS FOR PHOTONIC
                APPILICATIONS organised by MAHATAMA GANDHI INSTITUTION OF
                TECHNOLOGY from 9th to 13-08-21.
              </li>
              <li>
                Attended a Faculty development Program on CHEMISTRY FOR SOCIETAL
                ADAVANCEMENTS organised by department of chemistry, KL
                UNIVERSITY from 26th to 31-07-21.
              </li>
              <li>
                Attended a webinar on EMERING TECHNIQUES ON POLYMERS organized
                by DIVISION OF CHEMISTRY, DEPT OF SCIENCE & HUMANITIES, VFSTR on
                12-06-2021.
              </li>
            </ul>
            <h2 style={{ textDecoration: "underline" }}>
              ACADEMIC YEAR 2020-2021:
            </h2>
            <ul>
              <li>
                Attended a webinar on MIGRANT WOMEN WORKERS: ISSUES AND
                CHALLENGES, organized by UGC WOMEN STUDY CENTRE, K.B.N COLLEGE,
                on 05-10-2020.
              </li>
              <li>
                Attended a webinar on WOMENS NUTRIUTION IN IMMUNE RESPONSE
                AGAINST COVID-19 organized by UGC WOMEN STUDY CENTRE, K.B.N
                COLLEGE on 25-08-20.
              </li>
              <li>
                Attended a webinar on TRENDING CHEMICAL RESEARCH & APPLICATIONS
                organized by ANDHRA CHRISTIAN COLLEGE, GUNTUR from 07 TO
                20-08-20.
              </li>
              <li>
                Attended a webinar on CHEMISTRY OF SEMI CONDUCTORS, NANO
                PARTCALS, LABORATORY TODISPLAY IN INDUSTRIES (TV&LED’S)
                organized by ANDHRA LOYALA COLLEGE on 06-08-20.
              </li>
              <li>
                Attended a webinar on NAAC ASSESSMENT & ACCREDITATION PROCESS
                organized by KRISHNA UNIVERSITY (MACHILIPATNAM) on 04-08-20.
              </li>
              <li>
                Attended a webinar on ICT TOOLS TO TEACH CHEMITSRY WITH
                SIMULATIONS CHEMISTRY LAB organized by DEPT OF CHEMISTRY, PB
                SIDHARTA COLLEGE OF ARTS & SCIENCE on 27-07-20.
              </li>
              <li>
                Attended a Faculty Development Program on RECENT ADAVANCES IN
                APPLIED CHEMISTRY organised by department of chemistry, QIS
                COLLEGE OF ENGINEERING & TECHNOLOGY from 6th to 10-07-20.
              </li>
              <li>
                Attended a webinar on FUNCTIONALIZED QUIOXALINES AS SIRT 1
                INHIBITORS organized by DPT OFCHEMISTRY, PB SIDHARTA COLLEGE OF
                ARTS & SCIENCE, on 27-06-20.
              </li>
              <li>
                Attended a Faculty development Program on INDIRECT EFFECT OF
                COVID-19 OUT BREAK ON THE ENVIRONMENT AND SOCIETY organised by
                department of chemistry J.M.J COLLEGE FOR WOMEN (TENALI) from
                10th to 12-06-20.
              </li>
              <li>
                Awarded BEST WOMEN TEACHER AWARD from SC, ST, BC & MINORITY
                VIDHYARTHI SAMIKYA on 03-01-2020.
              </li>
            </ul>
            <h2 style={{ textDecoration: "underline" }}>
              ACADEMIC YEAR 2019-2020:
            </h2>
            <ul>
              <li>
                Presented a paper A “ Click and Cross–Coupling” Approach in
                One–Pot synthesis of Fused 1,2,3–Triazoles in National seminar
                on "TWO DAY NATIONAL SEMINAR ON CHEMICAL SPECIATION IN BIOLOGY
                AND MARINE ENVIRONMENT(CSBME-2019) 29th & 30th September, 2019"
                organising by School of Chemistry Andhra University,
                Visakhapatnam on the occasion of Superannuation of Prof. G.
                Nageswara Rao, Former Vice-Chancellor, Andhra University In
                Association with Association of Chemistry Teachers (ACT), Mumbai
                & Andhra Pradesh Akademi of Sciences (APAS), Amavarathi.
              </li>
              <li>
                Acted as Jury member in the “Amaravathi Balotsavam Science Fair
                -2019” on 30th August, held at SRR and CVR Gov. Degree College
                (A) from 29th to 31st August, 2019.
              </li>
              <li>
                Participated in National work shop on Contemporary Nano;
                Synthesis Characterisation & Applications on 22nd August 2019
                organised by Dept. of Chemistry CH.S.D.ST. Theresa’s college for
                Women (A), Eluru, AP.
              </li>
              <li>
                Published a book Chapter–14, “Bio-Waste Material Utilization for
                Water defluorination & Statistical investigation of Ground water
                in Nalgonda District” in: Recent Trends in Physics, Chemistry &
                Allied Sciences (ISSBN: 978–93–86435–86–6), pp: 75–82, 2019,
                International Multidisciplinary Research Foundation, Vijayawada.
              </li>
            </ul>
            <h2 style={{ textDecoration: "underline" }}>
              ACADEMIC YEAR 2018-2019:
            </h2>
            <h4 style={{ textDecoration: "underline" }}>Publications</h4>
            <ul>
              <li>
                Published a paper entitled “A Review on Contamination, Effects
                and Analysis of Aflatoxins in Different Food Products” in
                International Journal of Pharmacy and Biological
                Sciences-IJPBSTM, ISSN (O): 2230-7605 (P): 2321-3272, Volume 9,
                Issue 2, I. F. : 0.888 & Pg. No. 371-378 April, 2019.
              </li>
              <li>
                Published a paper entitled “Identification & HPLC Quantification
                of Aflatoxins in Ground nut (Arachis Hypogaea L.) samples
                collected in Rayalaseema Area, Andhra Pradesh” in International
                Journal of Pharmaceutical Sciences & Research, ISSN No.:
                2320-5148, Volume 10, Issue 3, January – March, 2019.
              </li>
              <li>
                Published a paper entitled “New Extractive Spectrophotometric
                Method Development and Validation for the Estimation” in the
                Asian Journal of Organic & Medicinal Chemistry, ISSN No.
                2456-8937 , Volume 4, Issue 1, January – March, 2019.
              </li>
            </ul>
            <h4 style={{ textDecoration: "underline" }}>
              Paper Presentations & Participation:
            </h4>
            <ul>
              <li>
                Presented a paper titled “Simultaneous spectrophotometric assay
                method of Nitrofuration and phenazopyridine” in International
                Conference on Recent Developments and Applications of Physico
                Chemical Characterisation Techniques at JKC College, Guntur on
                4th January 2019.
              </li>
              <li>
                Participated in UGC Sponsored one day international conference
                on “Domestic Violence” organised by Women Empowerment Cell &
                IQAC on 13th December 2018 at SDMS Mahila Kalasala, Vijayawada.
              </li>
              <li>
                Participated in the UGC Sponsored national Workshop on
                Intellectual Property rights-Issues & Challenges” organised by
                Department of MBA, KBN college on 23rd November, 2018.
              </li>
            </ul>
            <h2 style={{ textDecoration: "underline" }}>
              ACADEMIC YEAR 2017-2018:
            </h2>
            <h4 style={{ textDecoration: "underline" }}>Publications</h4>
            <ul>
              <li>
                Published a research paper titied Air pollution tolerance Index
                of selected plants in Vijayawada city A.P in International
                Journal of GreenPharmacy 2017;December, S 887-S881.
                PISS:0973-8258. EISSN:1998-4103. Impact factor:0.68 UGC No.22851
                and Scopus Indexed.
              </li>
              <li>
                Published a research paper titled “Identification and HPLC
                Quantification of Aflatoxins in Red Chilli (Capsicum annuum L.)
                in Guntur, Andhra Pradesh, India” in UGC approved,Thomson
                Reuters and Scopus indexed Journal – Asian Journal of
                pharmaceutics - Vol 11, No 04 December (2017) E-ISSN : 1998-409X
                and P-ISSN: 0973-8398.
              </li>
              <li>
                Published a research paper titled “Stability Indicating
                Development and Validation of Ultraviolet Spectrophotometric
                Methods for the Simultaneous Estimationof Bromhexine and
                Cephalexin in their Combined Dosage Form” in UGC approved,
                Thomson Reuters and Scopus indexed Journal – Asian Journal of
                pharmaceutics - Vol 11, No 04 December (2017) E-ISSN :1998-409X
                and P-ISSN: 0973-8398.
              </li>
              <li>
                Published an article on “First derivative UV–Spectrophotometric
                Method for the simultaneous estimation of Neomycine and
                Betamethasone in their combined dosage form” in IJRRPAS, (2016)
                December Vol.6 Issue.1 Pg:1381-1386, ISSN:2249-1236
              </li>
              <li>
                Published an article on “Seasonal Variations In Physico-Chemical
                Characteristics Of Ground Water Collected From Kondapalli Santhi
                Nagar Near Vijayawada Thermal Power Plant (Vtps) “in Rasayan
                Journal of ChemistryVol. 9 | No. 4 |858 - 863| October -
                December | 2016 ISSN: 0974-1496 | e-ISSN: 0976-0083 | CODEN:
                RJCABP.
              </li>
              <li>
                Published an article on “Phytochemical screening and
                quantitative analysis of hexane, acetone, methanol & water
                extracts of Salicornia virginica by UV-spectrophotometry” in Der
                Pharmacia Lettre,October 2016, 8 (16):52-56, ISSN 0975-5071
              </li>
              <li>
                Published one research article. ”Physico chemical properties and
                heavy metal content of water collected from Ibrahimpatnam near
                by VTPS-Vijayawada’’.In the Journal of Pharma and Bioscience”
                2015 July ;6(3):(p)42-49.ISSN 0975-6299 SCI Mago Journal Rank
                0.288 Impact factor 5.121*
              </li>
              <li>
                Published a paper “Seasonal Variations in Physicochemical
                Characteristics of ground water collected from Kondapalli near
                by VTPS-Vijayawada” in the International Journal of Der Pharma
                Chemicals, ,2015; July 7(3):221-225 ISSN No. 0975-413X
              </li>
              <li>
                Published a paper “Estimation of Chemical Constituents in
                Branches of Tephrosia Purpurea” in the International Journal of
                advanced Research in Chemical Science, Volume 2, Issue 2A,
                February 2015, 91-94. ISSN No. 2349-039X(Print)
              </li>
              <li>
                Published an article “Determination and estimation of
                phytochemical constituents present in Pongamia Pinneta leaf
                extract in Fire Journal of natural and applied Sciences, 1(2),
                2014, September 181-191
              </li>
              <li>
                Published an article “Identification and estimation of
                phytochemicals from the plant Pedicularis Bicornuta leaf extract
                by UV Spectroscopy” in the journal Research desk June 2014,
                3(1), 410-418
              </li>
              <li>
                Published a paper “Simple, Sensitive, Specific and validated
                colorimetric method development for the quantitative estimation
                of Melphalan Hydrochloride in the bulk and pharmaceutical dosage
                forms” in the journal “South Pasific Journal of Pharma and
                Bioscience”June 2014, 2(1), 110-117
              </li>
              <li>
                Published an article “Simultaneous Determination Of Famotidine
                And Ibuprofen In Combined Pharmaceutical Dosage Form By Rp-Hplc
                Method”inInternational Journal of Pharma and Biosciences, 2013
                July; 4(3): (P) 655 – 662
              </li>
              <li>
                Published an article “Method Development and Validation for
                Simultaneous Determination of Ezetimibe and Simvastatin in
                Combined Pharmaceutical Dosage form by RP-HPLC” in International
                Journal of Pharmaceutical and life sciences, Volume 2, Issue 2,
                March 2013
              </li>
              <li>
                Published an article “RPHPLC Method Development and Validation
                for Simultaneous Estimation Dextromethorphn and Quindine” in JPR
                Vol.5, Issue 8 , pp. 4212 – 4215 on Aug. 2012.
              </li>
            </ul>
            <h4 style={{ textDecoration: "underline" }}>
              paper Presentationsp
            </h4>
          </Box>
        </AccordionDetails>
      </Accordion>

      <Accordion
        square
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={
            expanded === "panel3" ? (
              <RemoveIcon style={{ color: "white" }} />
            ) : (
              <AddIcon style={{ color: "white" }} />
            )
          }
          style={{ backgroundColor: "darkblue", color: "white" }}
        >
          <Typography>O. Sailaja</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box>
            <h2 style={{ textDecoration: "underline" }}>AnyOther:</h2>
            <ul>
              <li>
                Organizer for National Pollution Day Programme on 2nd December,
                2017.
              </li>
              <li>
                Acted as Judge for Dr. Sudha Science Quest – 2017 organized by
                St. John’s School, Satyanarayanapuram, Vijayawada on 29th
                November, 2017.
              </li>
              <li>
                Organizer for Communal Harmony Week Programme organized by KBN
                College on from 19th – 25th November, 2017.
              </li>
              <li>Attended ANO Conference on 30th August, 2017.</li>
              <li>Attended NCC Conference on 12th April, 2017</li>
              <li>
                Attended for Annual ADM Inspection of 17 Andhra BN, Vijayawada
                for the training year 2016-17 on 25th January, 2017.
              </li>
              <li>
                Attended as Chief Guest for Water – Tree Awareness Programme on
                November, 2016 organized by St. Johns’ Public School, Vijayawada
              </li>
              <li>Attended NCC Conference on 20th April, 2016.</li>
              <li>
                Board Member, NCC “C” Certificate Examination on 23rd February,
                2015.
              </li>
              <li>
                Worked as Counsellor for CFN Course in IGNOU, Study Centre,
                Vijayawada.
              </li>
              <li>
                Successfully completed PRCN Course S. No. PRCN/SD156DC26, from
                15th September 2014- 13th December, 2014 at NCC OTA Kamptee with
                ‘A’ Grade.
              </li>
            </ul>
            <h2 style={{ textDecoration: "underline" }}>As BOS Member:</h2>
            <ul>
              <li>
                BOS Member – SVRM College, Nagaram from 2017-18 to 2018-19
              </li>
            </ul>
            <h2 style={{ textDecoration: "underline" }}>
              Paper Presentation :
            </h2>
            <ul>
              <li>
                Presented a Paper entitled “Rational Drug Designing” in the Two
                Day DST – SERB Sponsored International Conference “Genomics &
                Stem Cells” in collaboration with SARC, Hyderabad – India
                organized by KBN College, Vijayawada on 6th & 7th January, 2015.
              </li>
              <li>
                Presented a Paper entitled “Bio – Inorganic Chemistry” in the
                UGC Sponsored Two Day National Seminar on Advances in Chemical
                Science organized by KBN College on 18th & 19th September, 2015.
              </li>
              <li>
                Presented a Paper Entitled “Pollution & Its Control Measures” in
                the National Seminar on Climate Change – A Challenge to
                Sustainable Development organized by KBN College, Vijayawada on
                29th & 30th November, 2012.
              </li>
            </ul>
            <h2 style={{ textDecoration: "underline" }}>Participation :</h2>
            <ul>
              <li>
                Participated in the State Level Workshop on Cluster Practical at
                AG & SG Siddhartha College, Vuyyuru on 6th January, 2018.
              </li>
              <li>
                Participated in the National Workshop on “Space Dynamics”
                organized by SIR CR Reddy College, Eluru from 4th – 6th October,
                2017.
              </li>
              <li>
                Participated in the National Workshop on “Instrumental Methods
                of Chemical Analysis” organized by KBN College, Vijayawada on
                15th & 16th December, 2016.
              </li>
              <li>
                Participated in the UGC Funded One Day National Workshop on
                “Research & Innovations: Issues & Challenges” organized by IQAC,
                KBN College, Vijayawada on 22nd October, 2016.
              </li>
              <li>
                Participated in the Faculty Development Programme held on 2nd &
                3rd June, 2015 organized by KBN College, Vijayawada.
              </li>
              <li>
                Participated in the Training of Trainers on Life Skills and
                Personality Development organized by RGNIYD, Tamilnadu from 11 –
                14 November 2014.
              </li>
              <li>
                Participated in the Faculty Development Workshop for College
                Teachers organized by KBN College on 15th & 16th March, 2013.
              </li>
              <li>
                Participated in the National Seminar on “Green Chemistry – Our
                Life & Our Future” organized by Mahathma Gandhi College, Guntur
                on 9th December, 2011.
              </li>
            </ul>
          </Box>
        </AccordionDetails>
      </Accordion>

      <Accordion
        square
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={
            expanded === "panel2" ? (
              <RemoveIcon style={{ color: "white" }} />
            ) : (
              <AddIcon style={{ color: "white" }} />
            )
          }
          style={{ backgroundColor: "darkblue", color: "white" }}
        >
          <Typography>Dr. K. Kiran Kumar</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box>
            <div>
              <h3 style={{ textDecoration: "underline" }}>
                ACADEMIC YEAR 2021-2022
              </h3>
              <ul>
                <li>
                  Published a book chapter on (2022) Art of Education and
                  Teaching Communication Skills. ISBN : 978-81-947453-1-0.,
                  Volume(6), pp. 99-101. In ICSSR sponcered international
                  seminar organized by department of commerce and Management,
                  KBN College(A).
                </li>
                <li>
                  Attended a Faculty development Programme on Quality Research,
                  Skills and Innovation in Higher Education on 7th - 11th March
                  2022 organized by the Internal Quality Assurance Cell (IQAC),
                  Department of Mathematics and Zoology, JMJ College for Women
                  (Autonomous), Tenali.
                </li>
                <li>
                  Having Number of Citations: 96 with h–index – 7 with i–10
                  index 4.
                </li>
                <li>
                  Participated in Three Day International Webinar on Recent
                  Innovations in Pharmaceutical and Applied Sciences on 17th -
                  19th March 2022 organized by the Department of Chemistry, JMJ
                  College for Women (Autonomous), Tenali.
                </li>
                <li>
                  Participated in Five Day International Webinar on Promoting
                  Quality Research, Skills and Innovation in Higher Education on
                  7th - 11th March 2022 organized by the Internal Quality
                  Assurance Cell (IQAC), Department of Mathematics and Zoology,
                  JMJ College for Women (Autonomous), Tenali.
                </li>
                <li>
                  Participated in the E-Conference on “Principles of Organic
                  Spectroscopy and its Applications” Organised by Department of
                  Chemistry AG & SG College in Association with IQAC held on 12
                  -02-2022.
                </li>
                <li>
                  Participated in one day International virtual conference on
                  Research Methodologies of Contemporary Times: Exploring
                  English Language, Literature and Teaching Organized by
                  Department of English, SRR & CVR Government Degree College
                  (Autonomous), Vijayawada, Andhra Pradesh, India on 05th
                  February 2022.
                </li>
                <li>
                  Participated in International Webinar entitled “HOW TO
                  OVERCOME FROM CORONA WAVES” on 28th December, 2021 Organized
                  by IQAC & Department of Commerce.
                </li>
                <li>
                  Participated in the National Webinar on “Impact of Pesticides
                  & Fertilizers on Plants & Human Health” on 07th December, 2021
                </li>
                <li>
                  Participated in a one-day International webinar on “Antibiotic
                  Discovery Strategies in the Era of Drug Resistance” on 27th
                  September 2021, organised by Department of Chemistry, P. B.
                  Siddhartha College of Arts & Science, Vijayawada.
                </li>
                <li>
                  Participated in one day National Webinar on “NANO MATERIALS
                  AND THEIR APPLICATIONS” organized by department of chemistry,
                  Krishna University, Machilipatnam and in association with
                  K.B.N. college, Vijayawada on 3rd August 2021.
                </li>
                <li>
                  Participated in the One Day National Webinar on “Raman
                  Spectroscopy A Versatile Tool For Chemical & Biological
                  Research” Organized by the Department of Chemistry, Andhra
                  Loyola College(A), Vijayawada on 28th June, 2021
                </li>
                <li>
                  Participated in Webinar on “Tips on Literature Search &
                  Writing Scientific Papers” in organised by Research &
                  Development Cell, P. B. Siddhartha College of Arts & Science,
                  Vijayawada on 24th June, 2021.
                </li>
                <li>
                  participation in the one-day national webinar on "Emerging
                  Techniques in Polymers", organized by Division of Chemistry,
                  Department of Sciences and Humanities (S&H), VFSTR (deemed to
                  be University) on 12th June 2021.
                </li>
              </ul>
            </div>
            <div>
              <h3>Faculty Development Programmes:</h3>
              <ul>
                <li>
                  Participated in Five-day faculty development programme on
                  “Advance concepts in chemistry” under DBT– Star college
                  scheme, organized by department of chemistry, BHAVAN’S
                  VIVEKANANDA COLLEGE, Secundra bad, from k22 to 26th November
                  2021.
                </li>
              </ul>
            </div>

            <div>
              <h3>As Resource Person:</h3>
              <ul>
                <li>
                  Guest Lecture delivered at Ch. S. D. St. Thesresa’s College
                  for Women (A) in 2017.
                </li>
                <li>Guest Lecture delivered at JKC College, Guntur in 2017.</li>
                <li>
                  Guest Lecture delevered at KVR College Nandigama on 16th
                  February, 2018.
                </li>
                <li>
                  Guest Lecture delivered at Ch. S. D. St Theresa’s College
                  Women (A) on 2nd February, 2018.
                </li>
                <li>
                  Delevered a Guest lecture at Govt. Arts College (A),
                  Rajamahendravaram on 20th February, 2018.
                </li>
              </ul>
            </div>
            <div>
              <img
                src="https://drive.google.com/uc?id=1glJdbtUrDju0qIX9yK5d4fLzzqVDBQG_"
                alt="img"
                style={{ heigh: "400px", width: "600px" }}
              />
            </div>

            <div>
              <h3 style={{ textDecoration: "underline" }}>
                ACADEMIC YEAR 2020-2021
              </h3>
              <ul>
                <li>
                  Delivered a guest lecture on “Treatment of Analytical data” to
                  the first year M.Sc Students at JKC College, Guntur on
                  22–03–2021.
                </li>
                <li>
                  Delivered a series of lectures on “Aromaticity” to the First
                  year M.Sc Chemistry students at SRR & CVR Govt. College from
                  04–03-2021 to 09–03–2021.
                </li>
                <li>
                  Delivered a series of lectures on “ISOLATION AND PURIFICATION
                  TECHNIQUES OF PHYTOPHARMACEUTICALS” to the First year Pharmacy
                  students in VIJAYA INSTITUTE OF PHRAMACEUTICALS SCIENCES FOR
                  WOMEN from 28-01-2021 to 31-01-2021.
                </li>
                <li>
                  Presented a paper “ Isopropyl Alcohol: Health and
                  Environmental Issues” in International E-Conference on “ Green
                  Chemistry for Sustainable Development” organized by Jointly
                  Department of Chemistry, Janardan Rai Nagar Rajastan
                  Vidyapeet(Deemed to be University, Udaipur) and Royal Society
                  of Chemistry, London(WIS) on 25-26, June 2020.
                </li>
                <li>
                  participated in the 5 Day Online National Level Faculty
                  Development Program on “Recent Advances in Applied Chemistry:
                  RAAC-2020” organised by Chemistry division of Basic Sciences &
                  Humanities Department, QIS College of Engineering and
                  Technology, Ongole during 06-07-2020 to 10-07-2020.
                </li>
                <li>
                  Participated in the International E–Symposium on “New
                  Frontiers in Chemical Sciences” (GITAM – IEON – 2020) With a
                  theme of “ Catalysis, materials and Cyber securitie in
                  Chemical secotor” Organized by department of chemistry, GITAM
                  School of Sciences, GITAM (Deemed to be Univeristy), Banglore
                  on 20th – 22nd July, 2020.
                </li>
                <li>
                  Attended two days State level webinar on ‘’Use of
                  Spectroscopic Techniques For Structure Elucidation’’ during
                  22/07/2020 to 23/07/2020 Organized by AISSMS College Of
                  Pharmacy, Pune.
                </li>
                <li>
                  Attending National Webinar on “ Recent Advances In Modern
                  Analytical Techniques” 22 - 24 , June 2020 Organized By
                  Placement Cell, A.U. College of Science & Technology, Andhra
                  University And Perkinelmer India Pvt. Ltd.
                </li>
                <li>
                  Participated in the National Webinar on “ICT Tools to Teach
                  Chemistry Online with Simulation Chemistry Labs” organized by
                  Department of Chemistry, PB Siddhartha college of Arts &
                  Sciences on 27-07-2020.
                </li>
                <li>
                  Attended Short Term Training Programme through ICT Mode on
                  Writing Research Proposals organised by this institute from
                  03/08/2020 to 07/08/2020 [ duration: 1 Week ]
                </li>
                <li>
                  Participated in the National webinar on NAAC ASSESSMENT AND
                  ACCREDITATIONPROCESS Organised by Krishna University,
                  Machilipatnam, in association with NAAC, Bengalore on
                  04-08-2020.
                </li>
              </ul>
            </div>

            <div>
              <h3>Certificates Obtained in 2020-21</h3>
              <img
                src="https://drive.google.com/uc?id=1TvwRK9WqCi-Jx5ltkvYx4veh6cBWIADR"
                alt="img"
                style={{ heigh: "600px", width: "600px" }}
              />
            </div>
            <div>
              <h3>ACADEMIC YEAR 2019-2020</h3>
              <ul>
                <li>
                  Completed SWYAM ARPIT ONLINE COURSE CERTIFICATION on Online
                  Refresher Course In Chemistry For Higher Education during the
                  period of 01-08-2019 to 31-12-2019.
                </li>
                <li>
                  Participated and qualified in the national level Quiz
                  Compitation on Research methodology held by online mode
                  organised by Association of Chemistry Teachers(ACT), Kavaitri
                  Bahinabai Chaudari North Maharastra University, Jalagaon on
                  14-05-2020.
                </li>
                <li>
                  Published a book chapter: 13, Design of a Domestic
                  Defluoridizing Unit. In: Subramanian B., Chen SS., Reddy K.
                  (eds) Emerging Technologies for Agriculture and Environment.
                  Lecture Notes on Multidisciplinary Industrial Engineering
                  (Print ISSBN978–981–13–7967–3 Online ISBN978–981–13–7968–0)
                  Springer, Singapore, pp 173–183.
                  https://doi.org/10.1007/978-981-13-7968-0_13 in 2019.
                </li>
                <li>
                  Presented a paper in international seminar on Presented a
                  paper A “ Click and Cross–Coupling” Approach in One–Pot
                  synthesis of Fused 1,2,3–Triazoles in National seminar on "TWO
                  DAY NATIONAL SEMINAR ON CHEMICAL SPECIATION IN BIOLOGY AND
                  MARINE ENVIRONMENT(CSBME-2019) Sept 29-30th September, 2019
                  Organising by School of Chemistry Andhra University,
                  Visakhapatnam on the occasion of Superannuation of Prof. G.
                  Nageswara Rao, Former Vice-Chancellor, Andhra University In
                  Association with Association of Chemistry Teachers (ACT),
                  Mumbai & ANDHRA PRADESH AKADEMI OF SCIENCES (APAS),
                  AMAVARATHI.
                </li>
                <li>
                  Paper Presented “ Bio-Waste Material Utilization for Water
                  defluorination & Statistical investigation of Ground water in
                  Nalgonda District” in International forum on Recent Trends in
                  Physics, Chemistry & Allied Sciences for Sustainable
                  Development– 2019, held at Ch.S.D.St. Theresas’s College fpr
                  Women(A), Eluru, AP, India. & IMRF Institute of higher
                  education & Research in India on September 27th to 29th, 2019.
                </li>
                <li>
                  Acted as Jury member in State Science Seminar – 2019 on
                  “Periodic Table of Chemical Elements Impact on Human Welfare”
                  held at SCERT, AP, Amaravathi on 24th September, 2019.
                </li>
                <li>
                  Acted as Jury member in the “Amaravathi Balotsavam Science
                  Fair -2019” on 29th & 30th August, held at SRR and CVR Gov.
                  Degree College (A) from 29th to 31st August, 2019.
                </li>
                <li>
                  Participated in National work shop on Contemporary Nano;
                  Synthesis Characterisation & Applications on 22nd August 2019
                  organised by Dept. of Chemistry CH.S.D.ST. Theresa’s College
                  for Women.
                </li>
                <li>
                  Completed Public Speaking Course of study offered by RITX, an
                  online learning initiative Rochester Institute of Technology.
                  ID: 70258716CC7a4f49ba3857f6016c.
                </li>
                <li>
                  Published a book Chapter–14, “ Bio-Waste Material Utilization
                  for Water defluorination & Statistical investigation of Ground
                  water in Nalgonda District” in: Recent Trends in Physics,
                  Chemistry & Allied Sciences(ISSBN: 978–93–86435–86–6), pp:
                  75–82, 2019, International Multidisciplinary Research
                  Foundation, Vijayawada.
                </li>
              </ul>
            </div>

            <div>
              <h3>Certificates Obtained in 2019</h3>
              <img
                src="https://drive.google.com/uc?id=18eolRg5XE3mG_XKilEkBtlB-G3Z06qjc"
                alt="img"
                style={{ heigh: "700px", width: "700px" }}
              />
            </div>

            <div>
              <h3>ACADEMIC YEAR 2018-2019</h3>
              <h4>Publications:</h4>
              <ul>
                <li>
                  Published a paper entitled “Piperacillin Estimation by
                  Ion-Associative Complex Formation” in the Asian Journal of
                  Pharmaceutical & Clinical Research, ISSN No. (P) 0974-2441 &
                  (O): 2455-3891, Volume 12, Issue 3, Pg. No.159-163, 2019.
                </li>
                <li>
                  Published a paper entitled “Ion-Associative Complex formation
                  for estimation of piperacillin” in the International Journal
                  of Research in Pharmaceutical Sciences, ISSN No.: 0975-7538,
                  Volume 10, Issue 1, Pg. No.117-124, December, 2018.
                </li>
                <li>
                  Published a paper entitled “New Extractive Spectrophotometric
                  Method Development and Validation for the Estimation” in the
                  Asian Journal of Organic & Medicinal Chemistry, ISSN No.
                  2456-8937 , Volume 4, Issue 1, January – March, 2019.
                </li>
                <li>
                  Published a paper entitled “Determination of Satranidazole
                  through Ion-Associative Complex Reaction” in the Asian Journal
                  of Organic & Medicinal Chemistry, ISSN No. 2456-8937, Volume
                  4, Issue 1, January – March, 2019.
                </li>
              </ul>
              <h4>Paper Presentations & Participation:</h4>
              <ul>
                <li>
                  Presented a paper titled on “Simultaneous spectrophotometric
                  assay method of Nitrofuration and phenazopyridine” in
                  international conference on on Recent Developments and
                  Applications of Physico Chemical Characterisation Techniques
                  at JKC College, Guntur on 4th January 2019.
                </li>
                <li>
                  Dr. K. Kiran Kumar presented a paper titled Biowaste material
                  for de fluoridation of water – A statistical review in
                  international conference on Innovative and Emerging
                  Technologies for Farming –Energy and Environment – water
                  organised by Vellore Institute of Technology, Vellore from
                  12th to 14th October , 2018.
                </li>
                <li>
                  Participated in the UGC Sponsored national Workshop on
                  Intellectual Property rights-Issues & Challenges” organised by
                  Department of MBA, KBN college on 23rd November, 2018.
                </li>
                <li>
                  Dr. K. Kiran Kumar attended Science Academies Refresher Course
                  on Up skilling of Chemistry Teacher on Latest Pedagogical
                  Tools for Impactful Teaching jointly organised by Science
                  Academies and department of Science & Humanities at Vignan
                  University from 27th November to 11th December, 2018.
                </li>
              </ul>
            </div>
            <div>
              <h3>ACADEMIC YEAR 2017-2018</h3>
              <h4>Publications</h4>
              <table className="table table-bordered">
                <tbody>
                  <tr>
                    <td>
                      <p>SNo</p>
                    </td>
                    <td>
                      <p>Title of the Research Paper</p>
                    </td>

                    <td>
                      <p>Year, Volume and Page No’s</p>
                    </td>

                    <td>
                      <p>Name of the Journal</p>
                    </td>

                    <td>
                      <p>ISSN</p>
                    </td>
                    <td>
                      <p>Indexed in</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>1</p>
                    </td>
                    <td>
                      <p>
                        Air pollution tolerance index of selected plants in
                        Vijayawada city, Andhrapradesh.
                      </p>
                    </td>

                    <td>
                      <p>2017,11(4): S877- S881.</p>
                    </td>

                    <td>
                      <p>International journal of Green Pharmacy.</p>
                    </td>

                    <td>
                      <p>E-ISSN - 1998-4103</p>
                    </td>
                    <td>
                      <p>Scopus</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>2</p>
                    </td>
                    <td>
                      <p>
                        Stability indicating development and validation of
                        Ultraviolet Spectrophotometric methods for the
                        simultaneous estimation of Bromhexine and Cephalexin in
                        their combined dosge form.
                      </p>
                    </td>

                    <td>
                      <p>2017,11(4): S938- S941</p>
                    </td>

                    <td>
                      <p>Asian journal of Pharmaceutics</p>
                    </td>

                    <td>
                      <p>E-ISSN - 1998-409X</p>
                    </td>
                    <td>
                      <p>Scopus Thomson Roters</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>3</p>
                    </td>
                    <td>
                      <p>
                        First derivative UV–Spectrophotometric method for the
                        simultaneous estimation of Neomycin and Betamethasone in
                        their combined dosage form
                      </p>
                    </td>

                    <td>
                      <p>2016,6(1),1318-1386</p>
                    </td>

                    <td>
                      <p>IJRRPAS</p>
                    </td>

                    <td>
                      <p>ISSN2249–1236</p>
                    </td>
                    <td>
                      <p>Scopus</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>4</p>
                    </td>
                    <td>
                      <p>
                        Seasonal variations in physic-chemical characterstics of
                        ground water collected from Kondapalli santhi nagar near
                        Vijayawada Thermal Power Plant(VTPS).
                      </p>
                    </td>

                    <td>
                      <p>2016,9(4),858-863.</p>
                    </td>

                    <td>
                      <p>Rasayan journal of Chemistry.</p>
                    </td>

                    <td>
                      <p>0974-1496</p>
                    </td>
                    <td>
                      <p>Scopus Elsevier</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>5</p>
                    </td>
                    <td>
                      <p>
                        Phytochemical screening and quantitative analysis of
                        hexane, acetone, methanol & water extracts of Salicornia
                        virginica by UV-spectrophotometry.
                      </p>
                    </td>

                    <td>
                      <p>2016,8(16).52-56</p>
                    </td>

                    <td>
                      <p>Der Pharmacia Lettre.</p>
                    </td>

                    <td>
                      <p>0975-5071</p>
                    </td>
                    <td>
                      <p>Scopus</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>6</p>
                    </td>
                    <td>
                      <p>
                        Seasonal variations in physico-chemical characteristics
                        of ground water collected from Kondapalli nearby
                        VTPS-Vijayawada.
                      </p>
                    </td>

                    <td>
                      <p>2015,7(3),221-225.</p>
                    </td>

                    <td>
                      <p>Der Pharma Chemica.</p>
                    </td>

                    <td>
                      <p>0975-413X</p>
                    </td>
                    <td>
                      <p>Scopus</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>7</p>
                    </td>
                    <td>
                      <p>
                        Visible spectrophotometric determination of Losartan
                        potassium in pure and dosage forms by ion-ion
                        association reactions using BCP and BPB reagents.
                      </p>
                    </td>

                    <td>
                      <p>2015,7(1),75-80.</p>
                    </td>

                    <td>
                      <p>Der Pharmacia Lettre.</p>
                    </td>

                    <td>
                      <p>0975-5071</p>
                    </td>
                    <td>
                      <p>Scopus</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>8</p>
                    </td>
                    <td>
                      <p>
                        Spectrophotometric determination of Losortan Potassium
                        through ion association reaction,
                      </p>
                    </td>

                    <td>
                      <p>2014,6(5),171-177.</p>
                    </td>

                    <td>
                      <p>Der Pharma Chemica.</p>
                    </td>

                    <td>
                      <p>0975-413X</p>
                    </td>
                    <td>
                      <p>Scopus</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>9</p>
                    </td>
                    <td>
                      <p>
                        Determination of Bendamustine Hydrochloride in Pure and
                        Dosage Forms by Ion-Associative Complex Formation.
                      </p>
                    </td>

                    <td>
                      <p>2014,30(2),905-910.</p>
                    </td>

                    <td>
                      <p>Oriental Journal of Chemistry</p>
                    </td>

                    <td>
                      <p>0970-020 X</p>
                    </td>
                    <td>
                      <p>Scopus Elsevier SCIE Thomson Reuters</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>10</p>
                    </td>
                    <td>
                      <p>
                        Extractive Spectrophotometric Determination of
                        Nicergoline Through Ion-pair Complexation Reaction.
                      </p>
                    </td>

                    <td>
                      <p>2013,29(1),263-269.</p>
                    </td>

                    <td>
                      <p>Oriental Journal of Chemistry</p>
                    </td>

                    <td>
                      <p>0970-020 X</p>
                    </td>
                    <td>
                      <p>Scopus Elsevier SCIE Thomson Reuters</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>11</p>
                    </td>
                    <td>
                      <p>
                        A Validated RP-HPLC Method for the Determination of
                        Bendamustine hydrochloride in Tablet Dosage Form using
                        Gemcitabine hydrochloride as Internal Standard.
                      </p>
                    </td>

                    <td>
                      <p>2012,37(3),133-139.</p>
                    </td>

                    <td>
                      <p>FABAD Journal of Pharmaceutical Sciences.</p>
                    </td>

                    <td>
                      <p>1300-4182</p>
                    </td>
                    <td>
                      <p>Scopus Elsevier SCIE</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>12</p>
                    </td>
                    <td>
                      <p>
                        A Validated RP-HPLC Method for the Estimation of
                        Lapatinib in Tablet Dosage form using Gemcitabine
                        Hydrochloride as an Internal Standard.
                      </p>
                    </td>

                    <td>
                      <p>2012,74(6),580-583.</p>
                    </td>

                    <td>
                      <p>Indian Journal of Pharmaceutical Sciences</p>
                    </td>

                    <td>
                      <p>0250-474X</p>
                    </td>
                    <td>
                      <p>Scopus SCIE Pumed</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>13</p>
                    </td>
                    <td>
                      <p>
                        A Validated RP-HPLC Method for The Estimation of
                        Melphalan In Tablet Dosage Forms.
                      </p>
                    </td>

                    <td>
                      <p>2011,4(4),863-867.</p>
                    </td>

                    <td>
                      <p>Rasayan Journal of Chemistry</p>
                    </td>

                    <td>
                      <p>0974-1496</p>
                    </td>
                    <td>
                      <p>Scopus Elsevier</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>14</p>
                    </td>
                    <td>
                      <p>
                        Development And Validation Of HPLC Method for the
                        Estimation of Nicergoline in Marketed Formulations.
                      </p>
                    </td>

                    <td>
                      <p>2011,4(4),885-889.</p>
                    </td>

                    <td>
                      <p>Rasayan Journal of Chemistry</p>
                    </td>

                    <td>
                      <p>0974-1496</p>
                    </td>
                    <td>
                      <p>Scopus Elsevier</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>15</p>
                    </td>
                    <td>
                      <p>
                        Reverse Phase High Performance Liquid Chromatographic
                        Method For The Determination of Satranidazole In
                        Pharmaceutical Formulations.
                      </p>
                    </td>

                    <td>
                      <p>2011,4(3),681-685.</p>
                    </td>

                    <td>
                      <p>Rasayan Journal of Chemistry</p>
                    </td>

                    <td>
                      <p>0974-1496</p>
                    </td>
                    <td>
                      <p>Scopus Elsevier</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div>
              <h4>Paper Presentations in Seminars</h4>
              <ul>
                <li>
                  Colorimetric estimation of Lapatinib. In UGC funded one day
                  national seminar on Recent trends in Medicinal chemistry.
                  Organized by department of chemistry PG & UG, JKC College,
                  Gunture on 21st Feb, 2018
                </li>
                <li>
                  Bio Materials. In UGC sponcered two day national seminar on
                  “Recent trends in Chemistry and Physics of materials”
                  Organized by department of Physics and Chemistry on 15th and
                  16th spetember,2017
                </li>
                <li>
                  Antibacterrial activity of Green Synthesis of Iron Nano
                  particles using water leaf extracts of menthapoperita and
                  cinnamon. In National seminar on Recent Trends in Chemical
                  Speciation, Kinetics and Nanomaterials(RTCSKN-2017). Organized
                  by Department of Inorganic &Analytical Chemistry, Andhra
                  University, during 3rd and 4th March, 2017
                </li>
                <li>
                  Spectrophotometric determination of Lopinavir through Ion
                  Association Reaction. In A.P. Science Congress held on 7th ,
                  8th and 9th November, 2016 at P.B. Sidhartha college,
                  Vijayawada. Organized by Dr. N.T.R. University of
                  HealthSciences, Acharya Nagarjuna University and Krishna
                  University
                </li>
                <li>
                  Spectrophotometric determination of Satranidazole by using
                  chromogenic reagent PDAB & PDAC. In A.P. Science Congress held
                  on 7th , 8th and 9th November, 2016 at P.B. Sidhartha college,
                  Vijayawada. Organized by Dr. N.T.R. University of
                  HealthSciences, Acharya Nagarjuna University and Krishna
                  University
                </li>
                <li>
                  Seasonal variations in Physico-Chemical characterstics of
                  ground water collected from Santinagar near by
                  VTPS–Vijayawada, In A.P. Science Congress held on 7th , 8th
                  and 9th November, 2016 at P.B. Sidhartha college, Vijayawada.
                  Organized by Dr. N.T.R. University of HealthSciences, Acharya
                  Nagarjuna University and Krishna University
                </li>
                <li>
                  Applications of Nano particles as Hydrogels, DBT Sponcered two
                  day national seminar on “Advances in the synthesis of
                  Nanomaterials and their Multidimensional Applications in
                  Chemical & Bio–Sciences” organized by department of Chemistry,
                  held on 14th –15th Dept, 2016 at Andhra Loyola College,
                  vijayawada
                </li>
                <li>
                  Nanomaterials, in DBT Sponcered two day national seminar on
                  “Advances in the synthesis of Nanomaterials and their
                  Multidimensional Applications in Chemical & Bio–Sciences”
                  organized by department of Chemistry, held on 14th –15th Dept,
                  2016 at Andhra Loyola College, Vijayawada
                </li>
                <li>
                  Visible Spectrophotometric Estimation of Bendamustine
                  Hydrochloride in Pure and Dosage Forms. Organized by
                  department of Chemistry, K.B.N. College, Vijayawada, held on
                  18th and 19th Sep, 2015
                </li>
                <li>
                  New Analytical method for the Determination of Lapatinib,
                  Nicergoline and Bendamustine in tablet and dosage forms.
                  Organized by department of Chemistry, K.B.N. College,
                  Vijayawada, held on 18th and 19th Sep, 2015
                </li>
                <li>
                  Extractive Spectrophotometric Determination of Nicergoline
                  Through Charge Transfer Complexation Reaction. Organized by
                  department of Chemistry, K.B.N. College, Vijayawada, held on
                  18th and 19th Sep, 2015
                </li>
                <li>
                  Nano Technology and Instrumentstion, in UGC sponcered two day
                  National seminar on “ Shaping the future with Nano Sciences”
                  Organized by department of chemistry, P.B. Siddartha College,
                  Vijayawadaa held on 19th–20th August, 2015
                </li>
                <li>
                  Stem Cell Therapy- a vital role in medicine history, in two
                  day DST-SERB Sponsored international Conference on “Genomics &
                  Stem Cells”. Organized by department of Zoology, Botany &
                  Chemistry held on 6th & 7th January, 2015 at KBN College,
                  Vijayawada-1
                </li>
                <li>
                  Purpose of education & teaching communication skills, in one
                  day national seminar on “Enhancement and Sustenance of Quality
                  among students and teachers: Role of Support Services”
                  organized by Internal Quality Assurance Cell, KBN College on
                  21st July, 2014
                </li>
                <li>
                  Bio–Fertilizers and use, in U.G.C. Sponcered two day national
                  seminar on “Impacts of chemical fertitizers – use of Bio
                  fertilizers for Environmental protection”., organized by
                  department of chemistry, S.S.& N College., Narsarao pet, on
                  11th & 12th December, 2014
                </li>
                <li>
                  Smartmaterials & its applications in day to day life. In UGC
                  Sponsored national seminar on “Development of Advanced
                  Materials in Physics & Electronics and their Applications”.
                  Organized by department of Physics & Electronics K.B.N.
                  College, Vijayawada–1., on 15th & 16th October, 2014
                </li>
                <li>
                  Presented a poster on Estimation of drugs using chromogenic
                  reagents, in national seminar on “MODERENTRENDS IN CHEMICAL
                  SCIENCES”. Organized by the department of chemistry, Acharya
                  Nagarjuna University, on 20th and 21st December, 2013
                </li>
                <li>
                  Significances of Green chemistry, in U.G.C. Sponsored national
                  Seminar on “SIGNIFICANCES OF GREEN STRATEGIES FOR
                  ENVIRONMENTAL PROTECTION”, Organized by Department of
                  Chemistry K.B.N. College, Vijayawada-1., on 14th & 15th
                  December 2012
                </li>
                <li>
                  Use of Pesticides & Human health Effects., in U.G.C. Sponcered
                  national conference on “ Impact of Pesticided and Persistent
                  Organic Pollutants on Environment and Sustainability of
                  Environment. Organized my department of chemistry at Govt.
                  Degree College for Women Guntur on 30th Nov and 1sr Dec.2012
                </li>
                <li>
                  Principles of Green Chemistry., in National seminar on Green
                  chemistryand sustainable development. Organized by department
                  of chemistry, Govt. Degree Colleege for women, Guntur. On 7th
                  & 8th January, 2011
                </li>
                <li>
                  A new RP¬–PHLC method for the estimation of bendamustine
                  hydrochloride in tablet dosage form., in National seminar on
                  NEW ADVENTS IN CHEMISTRY, ON 19th December,2011 organized by
                  department of chemistry, JKC College, Guntur
                </li>
                <li>
                  A Validated RP¬–HPLC method for the estimation of lapatinib.,
                  in National seminar on NEW ADVENTS IN CHEMISTRY, organized by
                  department of chemistry, JKC College, Guntur, ON 19th
                  December, 2011
                </li>
                <li>
                  A validated RP-HPLC method for the estimation of melphalan in
                  tablet dosage forms., in national seminar on CHEMISTRY OUR
                  LIFE, OUR FUTURE., organized by department of chemistry,
                  Krishna University., Dr. M.R.AR. Campus, Nuzvid. On 29th
                  December, 2011
                </li>
                <li>
                  Water and soil remediation using nanoparticulate metal
                  oxides., in national seminar on CHEMISTRY OUR LIFE, OUR
                  FUTURE., organized by department of chemistry, Krishna
                  University., Dr. M.R.AR. Campus, Nuzvid. On 29th December,
                  2011
                </li>
                <li>
                  Extractive spectrophotometric methods for the assay of
                  Nicergoline and strranidazole in bulk and pharmaceutical
                  formulations, in national seminar on “CHEMISTRY OUR LIFE, OUR
                  FUTURE”. Organized by department of chemistry, Krishna
                  University., Dr. M.R.AR. Campus, Nuzvid. On 29th December,
                  2011
                </li>
                <li>
                  Nano Materials and their Applications, U.G.C. National Seminar
                  on “Nano Materials and their Applications”, organized by
                  department of Physics, DHARMA APPARAO COLLEGE, Nuzvid. on 10 &
                  11th December, 2009
                </li>
                <li>
                  De–Fluoridation of Ground water using activated carbons, in
                  National seminar on ‘Environmental Hazards and sustainable
                  development”. Govt. Degree College, Pentapadu, Tadepalligudem,
                  W.G. District., on 11-09-2009
                </li>
                <li>
                  Importance of chemistry in daily life., National seminar on
                  Emerging trends in chemistry “ Special Emphasis on Pharma
                  industry”. Organized by the Department of chemistry,
                  Government degree and P.G. College, Tuni., East Godavari
                  District. on 28th July, 2008
                </li>
              </ul>
            </div>
            <div>
              <h3>Other Qualification</h3>
              <ul>
                <li>
                  K. Kiran Kumar, Lecturer PG. Dept. of Chemistry was awarded
                  Ph.D on “RP-HPLC Method Development and validation of New
                  Visible Spectrpphotometric and RP-HPLC assay methods for
                  selected drugs in pure and dosage forms” by ANU under the
                  guidance of Prof. R. Venkatanadh, Professor of Chemistry
                  Vignan,s University on 14th Feb, 2015
                </li>
              </ul>
            </div>
            <div>
              <h3>Major and Minor Research projects</h3>
              <ul>
                <li>
                  Dr. K. Kiran Kumar, Assistant professor, PG. Dept of
                  Chemistry, sanctioned a minor research project “A Click and
                  cross coupling Approach in One-pot Synthesis of Fused
                  1,2,3-Triazoles” by UGC in the month of June 2017
                </li>
              </ul>
            </div>
            <div>
              <img
                src="https://drive.google.com/uc?id=1rBX_n9fNIsgH7JW6NEDpJrZ-v7lMKeU2"
                alt="img"
                style={{ heigh: "700px", width: "700px" }}
              />
            </div>
            <div>
              <h3>Extension Lectures</h3>
              <ul>
                <li>
                  Dr.K. Kiran Kumar delivered a guest lecture on “ Group theory”
                  in St. Theresas’s College for Womens Autonomous College,
                  Eluru, West Godavari District , A.P on 22nd Feb, 2018
                </li>
                <li>
                  Dr. K. Kiran Kumar gave an extension lecture on Grpup Theory
                  and its Chemical Applications in KVR collegen Nandigama,
                  Krishna district on 16th Feb, 2018
                </li>
              </ul>
            </div>
            <div>
              <h3>Participated in seminars</h3>
              <ul>
                <li>
                  Participated in One day UGC Sponsored National work shop on
                  Spectroscopy and Analysing Spectral Data, organized by
                  department of Chemistry KBN College, on 25th spetember, 2017.
                </li>
                <li>
                  Participated in Two day UGC Sponsored National Work shop on
                  Instrumental methods of Chemical Analysis, Organized by
                  department of Chemistry, KBN College, on 15th & 16th December,
                  2016.
                </li>
                <li>
                  Participated in Two days UGC Sponsored National Work shop on
                  Analytical Techniques in Research and Analysis. Organized by
                  department of chemistry, JNTUA College of Engineering,
                  Pulivendula. On 27th & 28th December, 2013.
                </li>
                <li>
                  Participated in National Seminar on Green Chemistry Our life
                  and Our future. Organized by department of Chemistry, Mahatma
                  Gandhi College, Guntur. On 9th December, 2011.
                </li>
                <li>
                  Participated in UGC Sponsored National Seminar on The changing
                  Face of Chemistry. Organized by IQAC & Department of
                  Chemistry, on 26th November, 2011.
                </li>
                <li>
                  Participated in National Seminar on Recent Advances in
                  Chemical Biology. Organized by Vignan Chemical Association,
                  Vignans PG College, Guntur, on 27th February, 2010.
                </li>
                <li>
                  Participated in National level workshop on Radio Chemistry,
                  Jointly organized by the Indian Association of Nuclear
                  Chemistrs and Allied Scientists and department of Chemistry,
                  Andhra Loyola College, on 23rd October, 2009.
                </li>
                <li>
                  Participated in Three days UGC Sponsored National Seminar on
                  Importanc of Knowledge of Chemistry in Modern Branches of
                  sciences and Technology. Organized by department of Chemistry,
                  Acharya Nagarjuna University, Guntur. On 3rd to 5th August,
                  2009.
                </li>
                <li>
                  Participated in Two days National Seminar on Experimental
                  techniques and tools in chemical laboratories. Organized by
                  department of chemistry, Mahatma Gandhi College, Guntur. On
                  1at & 2nd November, 2008.
                </li>
                <li>
                  Participated in Two days UGC Sponsored National Symposium on
                  BIRCH AND BROWN contributions to development of organic
                  chemistry. Organized by department of chemistry, TJPS College,
                  Guntur. On 11th & 12th September, 2008.
                </li>
                <li>
                  Participated in National seminar / Workshop on Vedic Sciences.
                  Organized by Acharya Nagarjuna University. On 5th February,
                  2008.
                </li>
                <li>
                  Participated in Three days UGC, CSIR, BRNS, DBT, AERB, DRDO
                  Sponsored National Seminar on Advances in Amorphous materials.
                  Organized by department of Physics, Acharya nagarjuna
                  University PG Centre, Nuzvid. On 1-3 February, 2007.
                </li>
                <li>
                  Participated in Two days UGC Sponsored National Seminar on
                  Cyclone,Earthquake, Tsunami & Disaster Management. Organized
                  by CH.S.D.ST. Theresa’s Autonomous College for Women, Eluru.
                  On 31st and 1st August, 2006.
                </li>
                <li>
                  Participated in Two days UGC Sponsored National Seminar on
                  Environmental pollution with special reference to pesticide
                  pollution. Organized by department of chemistry UG & PG, P.B.
                  Siddhartha College of Art & Sciences, on 28th & 29th July,
                  2006.
                </li>
                <li>
                  Participated in Two day UGC Sponsored State level Seminar on
                  Emerging Trends in Renewable Energy Sources. Organized by
                  department of Chemistry, St.Theresa’s College for Women,
                  Eluru. On 28th and 29th March, 2005.
                </li>
                <li>
                  Participated in Regional conference of Indian Council of
                  Chemists on Analysis of Pollutants in the environment and
                  Defluoridation Techniques. Organized by the department of
                  Chemistry, Acharya Nagarjuna University P.G. Centre, NUZVID on
                  23rd January, 2005.
                </li>
              </ul>
            </div>
            <div>
              <h3>Orientation Course</h3>
              <p>
                Attended Four weeks UGC SPONSORED ORIENTATION COURSE, Organized
                by UGC- Academic Staff College, Jawaharlal Nehru Technological
                University, Hyderabad, Andhrapradesh, from 07-05-2007 to
                02-06-207.
              </p>
            </div>
            <div>
              <h3>Faculty development Programme</h3>
              <p>
                Attended Faculty development Programme sponsored by GODREJ
                Industries LTD and Conducted by M.R. Pai Foundation jointly with
                Forum of free enterprise on 28th February & 1st March 2015 at
                KBN College, Vijayawada.
              </p>
            </div>
            <div>
              <h3>Books Publications</h3>
              <p>
                Appointed as a panel member of Lesson writers in Acharya
                Nagarjuna University and Published Two Practical manuals
                Practical-II: Organic Chemistry and Practical-III: Physical
                Chemistry for 1st M.Sc Chemistry students for Centre for
                Distance Education, Acharya Nagarjuna University in the year
                2007.
              </p>
            </div>
            <div>
              <img
                src="https://drive.google.com/uc?id=1fvkR0EMyHE_p1_bssuXpio9qwvSX9fNa"
                alt="img"
                style={{ heigh: "700px", width: "600px" }}
              />
            </div>
          </Box>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default ChemistryAchivements;
