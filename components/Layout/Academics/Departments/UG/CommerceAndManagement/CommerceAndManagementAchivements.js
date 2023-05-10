import React from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import Box from "@material-ui/core/Box";
import {getRequiredImgs} from '../../../../../Api/index'

const CommerceAndManagementAchivements = () => {

  const [apidata,setApiData] = React.useState([])

  const initialLoad = async() =>{
      let govt_folderId = '1pzbL7Jod5kpLbWGhh4PMG08ibIP_I05t';
      let data = await getRequiredImgs(govt_folderId);
      setApiData(data?.files)
  }


  React.useEffect(()=>{
      initialLoad()
  },[])


  const getImgData = (data) =>{
      let value = data?.split('%20')?.join(' ');
      let filterValue = apidata?.find((e)=>e?.name == value);
      if(filterValue){
          return filterValue?.id
      }
      return '1mOfBNITDbkyBcSwLI0A87bJY5nvNNm4E'
  }

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <div>
      <h2 style={{ textAlign: "center", color: "#2e69d6" }}>
        DEPARTMENT OF COMMERCE & MANAGEMENT
      </h2>
      <div>
        <h2 style={{ textDecoration: "underline" }}> Staff</h2>
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
            <Typography>Dr. K. SIVA PRAKASA RAO</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box>
              <h3 style={{ textDecoration: "underline" }}>
                ACADEMIC YEAR 2018-2019
              </h3>
              <div>
                <ul>
                  <li>
                    Published a paper entitled “The Concept, Evolution & Status
                    of Primitive Tribes in India: A Case Study of Krishna
                    District” in the Conference Proceedings of the ICSSR - SRC
                    Two Day National Seminar on “Modern Methods and
                    Effectiveness Methods and Tribal Programme – Suggest
                    Necessary Measures in the Light of Findings” organized by
                    Dept. of Commerce, KBN College, Vijayawada on 18th & 19th
                    March, 2019.
                  </li>

                  <li>
                    Acted as External Examiner for Viva-Voce Examination of
                    commerce Students of AG & SG Siddhartha College, Vuyyuru on
                    15th March, 2019.
                  </li>
                  <li>
                    Participated in UGC sponsored National Workshop on
                    Intellectual Property Rights – Issues and Challenges,
                    organised by Department of Commerce and Business
                    Administration, KBN College, Vijayawada on 23rd November,
                    2018.
                  </li>
                  <li>
                    Participated in the FDP Programme on “Teaching Methods, Tool
                    & Techniques” organised by KBN College on 6th & 7th June,
                    2018.
                  </li>
                </ul>
              </div>

              <div>
                <h3>Workshops</h3>

                <table
                  className="table table-bordered"
                  style={{ borderCollapse: "collapse" }}
                >
                  <tbody>
                    <tr style={{ alignItems: "center" }}>
                      <th>
                        <p>S. NO</p>
                      </th>
                      {/* <td rowSpan={2}>
                                                <p></p>
                                            </td> */}

                      <th>
                        <p>DATE</p>
                      </th>

                      <th>
                        <p>VENUE</p>
                      </th>

                      <th>
                        <p>SEMINAR/WORKSHOP</p>
                      </th>
                      <th>
                        <p>
                          PARTICIPATED<br></br>/PRESENTED
                        </p>
                      </th>
                    </tr>
                    <tr style={{ textAlign: "center" }}>
                      <td>
                        <p>1</p>
                      </td>
                      <td>
                        <p>6th and 7th October, 2017</p>
                      </td>
                      <td>
                        <p>K.B.N.College Vijayawada.</p>
                      </td>
                      <td>
                        <p>
                          National Workshop on “Transformation Management
                          Students with key competencies”
                        </p>
                      </td>
                      <td>
                        <p>Attended</p>
                      </td>
                    </tr>
                    <tr style={{ textAlign: "center" }}>
                      <td>
                        <p>2</p>
                      </td>
                      <td>
                        <p>22nd and 23rd August, 2017</p>
                      </td>
                      <td>
                        <p>
                          P.B.Siddhardha College of Arts and Science,
                          Vijayawada.
                        </p>
                      </td>
                      <td>
                        <p>National seminar on Innovation Management</p>
                      </td>
                      <td>
                        <p>Participated</p>
                      </td>
                    </tr>
                    <tr style={{ textAlign: "center" }}>
                      <td>
                        <p>3</p>
                      </td>
                      <td>
                        <p>28th and 29th July, 2017</p>
                      </td>
                      <td>
                        <p>K.B.N.College xVijayawada.</p>
                      </td>
                      <td>
                        <p>
                          National workshop on “Logistics and supply chain
                          management”
                        </p>
                      </td>
                      <td>
                        <p>Attended</p>
                      </td>
                    </tr>
                    <tr style={{ textAlign: "center" }}>
                      <td>
                        <p>4</p>
                      </td>
                      <td>
                        <p>21st and 22nd July, 2017</p>
                      </td>
                      <td>
                        <p>K.B.N.College Vijayawada.</p>
                      </td>
                      <td>
                        <p>
                          National seminar on “women empowerment-media, cinema
                          and theatre prospects and challenges”
                        </p>
                      </td>
                      <td>
                        <p>Participated</p>
                      </td>
                    </tr>
                    <tr style={{ textAlign: "center" }}>
                      <td>
                        <p>5</p>
                      </td>
                      <td>
                        <p>25th and 26th November 2016</p>
                      </td>
                      <td>
                        <p>K.B.N.College Vijayawada.</p>
                      </td>
                      <td>
                        <p>
                          Two Day National Seminar on “E-Tailing, Trends,
                          Challenges and Opportunities”
                        </p>
                      </td>
                      <td>
                        <p>Presented a paper titled “e-tailing in India”</p>
                      </td>
                    </tr>
                    <tr style={{ textAlign: "center" }}>
                      <td>
                        <p>6</p>
                      </td>
                      <td>
                        <p>22th October, 2016</p>
                      </td>
                      <td>
                        <p>K.B.N.College Vijayawada.</p>
                      </td>
                      <td>
                        <p>
                          National workshop on “research and innovations-issues
                          and challenges”
                        </p>
                      </td>
                      <td>
                        <p>Attended</p>
                      </td>
                    </tr>
                    <tr style={{ textAlign: "center" }}>
                      <td>
                        <p>7</p>
                      </td>
                      <td>
                        <p>19th and 21st February, 2016</p>
                      </td>
                      <td>
                        <p>K.B.N.College Vijayawada.</p>
                      </td>
                      <td>
                        <p>
                          International Seminar on Corporate Social
                          Responsibility
                        </p>
                      </td>
                      <td>
                        <p>
                          Presented a paper on “A new definition of CSR and
                          sustainability”
                        </p>
                      </td>
                    </tr>
                    <tr style={{ textAlign: "center" }}>
                      <td>
                        <p>8</p>
                      </td>
                      <td>
                        <p>12TH and 13th March, 2015</p>
                      </td>
                      <td>
                        <p>K.B.N.College Vijayawada.</p>
                      </td>
                      <td>
                        <p>
                          National Seminar on importance of Sports to improve
                          the quality of education
                        </p>
                      </td>
                      <td>
                        <p>
                          Presented a paper titled “Educational Value through
                          games and sports”
                        </p>
                      </td>
                    </tr>
                    <tr style={{ textAlign: "center" }}>
                      <td>
                        <p>9</p>
                      </td>
                      <td>
                        <p>31st January 2015</p>
                      </td>
                      <td>
                        <p>RTM Nagpur University, Nagpur.</p>
                      </td>
                      <td>
                        <p>
                          National Level Seminar on Challenges and Opportunities
                          further growth of Indian Financial Sector”
                        </p>
                      </td>
                      <td>
                        <p>
                          Presented a paper titled “Role of private sector banks
                          for financial inclusion”
                        </p>
                      </td>
                    </tr>
                    <tr style={{ textAlign: "center" }}>
                      <td>
                        <p>10</p>
                      </td>
                      <td>
                        <p>19th and 20th December 2014</p>
                      </td>
                      <td>
                        <p>ANU Ongole Campus, Ongole.</p>
                      </td>
                      <td>
                        <p>
                          National Seminar on “Emerging Trends in Insurance
                          Sector in India”
                        </p>
                      </td>
                      <td>
                        <p>Participated</p>
                      </td>
                    </tr>
                    <tr style={{ textAlign: "center" }}>
                      <td>
                        <p>11</p>
                      </td>
                      <td>
                        <p>12th and 13th December, 2014</p>
                      </td>
                      <td>
                        <p>K.B.N.College,IQAC Vijayawada.</p>
                      </td>
                      <td>
                        <p>
                          Seminar on Ethical Hacking an inevitable tool for a
                          secured organisation
                        </p>
                      </td>
                      <td>
                        <p>
                          Presented a paper title competent and ethical concerns
                          of human beliefs.
                        </p>
                      </td>
                    </tr>
                    <tr style={{ textAlign: "center" }}>
                      <td>
                        <p>12</p>
                      </td>
                      <td>
                        <p>30th and 31st October 2014</p>
                      </td>
                      <td>
                        <p>KVR., KVR AND MKR College, Khajipalem</p>
                      </td>
                      <td>
                        <p>
                          National Seminar on Emerging Trends in India Banking
                          Sector
                        </p>
                      </td>
                      <td>
                        <p>
                          Presented a paper titled “Problems of RRBs in India”
                        </p>
                      </td>
                    </tr>
                    <tr style={{ textAlign: "center" }}>
                      <td>
                        <p>13</p>
                      </td>
                      <td>
                        <p>18th and 19th October 2014</p>
                      </td>
                      <td>
                        <p>SKSD Mahila Kalasala, Tanuku.</p>
                      </td>
                      <td>
                        <p>
                          National Seminar on “ Financial inclusion Strategies-
                          Role of self-help groups and Micro Finance”
                        </p>
                      </td>
                      <td>
                        <p>
                          Presented a paper titled “Need of knowledge in
                          information system for micro finance”
                        </p>
                      </td>
                    </tr>
                    <tr style={{ textAlign: "center" }}>
                      <td>
                        <p>14</p>
                      </td>
                      <td>
                        <p>27th and 28th August, 2014</p>
                      </td>
                      <td>
                        <p>V.R.K.Memorial College, Nagaram</p>
                      </td>
                      <td>
                        <p>
                          Seminar on Special Economic Zones in India – the
                          prospects and challenges
                        </p>
                      </td>
                      <td>
                        <p>Participated</p>
                      </td>
                    </tr>
                    <tr style={{ textAlign: "center" }}>
                      <td>
                        <p>15</p>
                      </td>
                      <td>
                        <p>6th and 7th August, 2014</p>
                      </td>
                      <td>
                        <p>K.B.N.College Vijayawada.</p>
                      </td>
                      <td>
                        <p>
                          International seminar on “Women entrepreneurship – a
                          global perspective
                        </p>
                      </td>
                      <td>
                        <p>
                          Presented a paper titled “Women entrepreneurship in
                          India”
                        </p>
                      </td>
                    </tr>
                    <tr style={{ textAlign: "center" }}>
                      <td>
                        <p>16</p>
                      </td>
                      <td>
                        <p>21st July, 2014</p>
                      </td>
                      <td>
                        <p>K.B.N.College, IQAC Vijayawada.</p>
                      </td>
                      <td>
                        <p>
                          Seminar on Enhancement and Sustenance of Quality among
                          students and teachers
                        </p>
                      </td>
                      <td>
                        <p>
                          Presented a paper titled Higher education in India
                          –Issues and challenges.
                        </p>
                      </td>
                    </tr>
                    <tr style={{ textAlign: "center" }}>
                      <td>
                        <p>17</p>
                      </td>
                      <td>
                        <p>15th March, 2014</p>
                      </td>
                      <td>
                        <p>K.B.N.P.G.College, Vijayawada.</p>
                      </td>
                      <td>
                        <p>
                          National Seminar on Retail Banking Trends and
                          Challenges
                        </p>
                      </td>
                      <td>
                        <p>
                          Presented a paper titled “Indian retail Banking
                          industry – opportunities and challenges
                        </p>
                      </td>
                    </tr>
                    <tr style={{ textAlign: "center" }}>
                      <td>
                        <p>18</p>
                      </td>
                      <td>
                        <p>13th February, 2014</p>
                      </td>
                      <td>
                        <p>C.R.Reddy Autonomous College, Eluru</p>
                      </td>
                      <td>
                        <p>
                          Seminar on “Banking and Insurance – Contemporary
                          issues”x
                        </p>
                      </td>
                      <td>
                        <p>Participated</p>
                      </td>
                    </tr>
                    <tr style={{ textAlign: "center" }}>
                      <td>
                        <p>19</p>
                      </td>
                      <td>
                        <p>8th and 9th March, 2013</p>
                      </td>
                      <td>
                        <p>Noble College , Machilipatnam</p>
                      </td>
                      <td>
                        <p>
                          Seminar on “Inclusive Banking System in India-
                          problems and prospects
                        </p>
                      </td>
                      <td>
                        <p>
                          Presented a paper tilted “Performance – evaluation of
                          RRBs in India”
                        </p>
                      </td>
                    </tr>
                    <tr style={{ textAlign: "center" }}>
                      <td>
                        <p>20</p>
                      </td>
                      <td>
                        <p>11th and 12th February, 2013</p>
                      </td>
                      <td>
                        <p>Siva Sivani Institute of Technology Hyderabad</p>
                      </td>
                      <td>
                        <p>
                          International seminar on “Innovative marketing
                          strategies for emerging markets – what next?”
                        </p>
                      </td>
                      <td>
                        <p>
                          Presented a paper titled “Milk marketing and
                          strategies a case study of Krishna District Milk
                          Producers Co-operative Union Limited.
                        </p>
                      </td>
                    </tr>
                    <tr style={{ textAlign: "center" }}>
                      <td>
                        <p>21</p>
                      </td>
                      <td>
                        <p>30th and 31st January, 2013</p>
                      </td>
                      <td>
                        <p>S.V.University, Tirupathi</p>
                      </td>
                      <td>
                        <p>
                          International Seminar on Corporate Governance-emerging
                          issues and global challenges
                        </p>
                      </td>
                      <td>
                        <p>
                          Presented a paper title “An analysis of Corporate
                          Governance Practices in the banking sector in India”
                        </p>
                      </td>
                    </tr>
                    <tr style={{ textAlign: "center" }}>
                      <td>
                        <p>22</p>
                      </td>
                      <td>
                        <p>29th January, 2013</p>
                      </td>
                      <td>
                        <p>Andhra University, Visakhapatnam</p>
                      </td>
                      <td>
                        <p>
                          International seminar on “Comparative literature -
                          social justice”
                        </p>
                      </td>
                      <td>
                        <p>
                          Presented a paper title “An approach to women
                          empowerment and social justice in India”
                        </p>
                      </td>
                    </tr>
                    <tr style={{ textAlign: "center" }}>
                      <td>
                        <p>23</p>
                      </td>
                      <td>
                        <p>22nd and 23rd December, 2012</p>
                      </td>
                      <td>
                        <p>S.V.University, Tirupathi</p>
                      </td>
                      <td>
                        <p>
                          Seminar on “Risk and Insurance Management –
                          contemporary issues and challenges
                        </p>
                      </td>
                      <td>
                        <p>
                          Presented a paper titled “The changing trends in life
                          insurance industry in India”
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <h2 style={{ textDecoration: "underline" }}>Publications:</h2>
              <div>
                <table class="table table-bordered  ">
                  <tbody>
                    <tr style={{ textAlign: "center" }}>
                      <td>
                        <p>
                          <strong>Journal Type</strong>
                        </p>
                        {/* <p><strong>&nbsp;</strong></p> */}
                      </td>
                      <td>
                        <p>
                          <strong>Journal Name</strong>
                        </p>
                      </td>
                      <td>
                        <p>
                          <strong>ISSN No.</strong>
                        </p>
                      </td>
                      <td>
                        <p>
                          <strong>
                            Vol. &amp; <br></br>Issue <br></br> No.
                          </strong>
                        </p>
                      </td>
                      <td>
                        <p>
                          <strong>Page No.</strong>
                        </p>
                      </td>
                      <td>
                        <p>
                          <strong>Title</strong>
                        </p>
                      </td>
                      <td>
                        <p>
                          <strong>
                            Citation<br></br> Index
                          </strong>
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>-</p>
                      </td>
                      <td>
                        <p>
                          Journal of Advanced Research in Commerce and
                          Management Studies
                        </p>
                      </td>
                      <td>
                        <p>52394-837X</p>
                      </td>
                      <td>
                        <p>Volume III Spl. Issue 2016</p>
                      </td>
                      <td>
                        <p>173-177</p>
                      </td>
                      <td>
                        <p>e-tailing a bright future for India</p>
                      </td>
                      <td>
                        <p></p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>-</p>
                      </td>
                      <td>
                        <p>
                          SS International Journal of Multi-disciplinary
                          Research
                        </p>
                      </td>
                      <td>
                        <p>2395-7964</p>
                      </td>
                      <td>
                        <p>Volume II Issue 4 2016</p>
                      </td>
                      <td>
                        <p>92-97</p>
                      </td>
                      <td>
                        <p>
                          Corporate social responsibility and Sustainable
                          Business: Leadership{" "}
                        </p>
                      </td>
                      <td>
                        <p></p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>-</p>
                      </td>
                      <td>
                        <p>
                          International Journal of Law-Education, Social and
                          Sports Studies
                        </p>
                        <p>&nbsp;</p>
                      </td>
                      <td>
                        <p>2394-9724</p>
                      </td>
                      <td>
                        <p>Volume II Spl. Issue 2015</p>
                      </td>
                      <td>
                        <p>100-102</p>
                      </td>
                      <td>
                        <p>Importance of Sports and games in School</p>
                      </td>
                      <td>
                        <p></p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>UGC List:8899 Scopus, web of Science</p>
                      </td>
                      <td>
                        <p>
                          International Journal of Research and Business
                          Innovation
                        </p>
                        {/* <p>&nbsp;</p> */}
                      </td>
                      <td>
                        <p>2321-5615</p>
                      </td>
                      <td>
                        <p>Volume III Issue II 2015</p>
                      </td>
                      <td>
                        <p>15-17</p>
                      </td>
                      <td>
                        <p>Chilli’s Marketing in Andhra Pradesh</p>
                      </td>
                      <td>
                        <p></p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>UGC List:49177</p>
                      </td>
                      <td>
                        <p>Global Journal for Research Analysis</p>
                      </td>
                      <td>
                        <p>2277-8160</p>
                      </td>
                      <td>
                        <p> Volume III Issue 8 Aug 2014</p>
                        {/* <p>&nbsp;</p> */}
                      </td>
                      <td>
                        <p>72-75</p>
                      </td>
                      <td>
                        <p>
                          Women Entrepreneurship in India – problems and
                          prospects
                        </p>
                      </td>
                      <td>
                        <p></p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>UGC List:49177</p>
                      </td>
                      <td>
                        <p>Global Journal for Research Analysis</p>
                      </td>
                      <td>
                        <p>2277-8160</p>
                      </td>
                      <td>
                        <p>Volume III Issue 12 Dec 2014</p>
                      </td>
                      <td>
                        <p>15-16</p>
                      </td>
                      <td>
                        <p>Identifying variables in the research design</p>
                      </td>
                      <td>
                        <p></p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>-</p>
                      </td>
                      <td>
                        <p>
                          International Journal of emerging technology in
                          Computer Science and Electronics
                        </p>
                      </td>
                      <td>
                        <p>0975-1353</p>
                      </td>
                      <td>
                        <p>Volume 11 Issue 2 2014</p>
                      </td>
                      <td>
                        <p>86-91</p>
                      </td>
                      <td>
                        <p>
                          Immerse constructive of foreign culture over Indian
                          Human
                        </p>
                      </td>
                      <td>
                        <p>&nbsp;</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>&nbsp;</p>
                      </td>
                      <td>
                        <p>Contemporary trends in practices of marketing</p>
                      </td>
                      <td>
                        <p>978-81-928453-2-6 </p>
                      </td>
                      <td>
                        <p>First edition 2014</p>
                      </td>
                      <td>
                        <p>17-20</p>
                      </td>
                      <td>
                        <p>
                          A study on marketing strategies in educational
                          institutions at Vijayawada
                        </p>
                      </td>
                      <td>
                        <p></p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>&nbsp;</p>
                      </td>
                      <td>
                        <p>
                          Transforming organisations through talent management
                        </p>
                      </td>
                      <td>
                        <p>978-93-83241-63-7 </p>
                      </td>
                      <td>
                        <p>First edition 2014</p>
                      </td>
                      <td>
                        <p>365-368</p>
                      </td>
                      <td>
                        <p>Talent management in HR</p>
                      </td>
                      <td>
                        <p></p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>&nbsp;</p>
                      </td>
                      <td>
                        <p>
                          Innovative market strategies for emerging markets what
                          next
                        </p>
                      </td>
                      <td>
                        <p>978-81-905242-0-4 </p>
                      </td>
                      <td>
                        <p>First edition 2013</p>
                      </td>
                      <td>
                        <p>180-184</p>
                      </td>
                      <td>
                        <p>
                          Milk market strategies – A case study of the Krishna
                          District Milk Producers Co-operative Union Limited
                        </p>
                      </td>
                      <td>
                        <p></p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>&nbsp;</p>
                      </td>
                      <td>
                        <p>Managerial developments in the modern era</p>
                      </td>
                      <td>
                        <p>978-93-81208-19-9 </p>
                      </td>
                      <td>
                        <p>-</p>
                      </td>
                      <td>
                        <p>66-68</p>
                      </td>
                      <td>
                        <p>
                          Services marketing – impact on experienced economy
                        </p>
                      </td>
                      <td>
                        <p></p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>&nbsp;</p>
                      </td>
                      <td>
                        <p>
                          International Journal of Research in management
                          studies
                        </p>
                      </td>
                      <td>
                        <p>ISSN:2321-4864 Feb 2014 Vol-1 Issue-7x </p>
                      </td>
                      <td>
                        <p></p>
                      </td>
                      <td>
                        <p>172-177</p>
                      </td>
                      <td>
                        <p>
                          Indian Retail Banking Industry opportunities &
                          Challenges
                        </p>
                      </td>
                      <td>
                        <p></p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div>
                <h3>Other Qualifications</h3>
                <ul>
                  <li>
                    G. Krishnaveni, Head, PG. Dept. of Chemistry was awarded
                    Ph.D on “RP-HPLC Method Development and validation for the
                    quantification of Some selected drugs in Tablet Dosage
                    forms” by ANU under the guidance of Prof.
                    P.V.V.Satyanarayana, Retd. Professor of ANU on 22nd July
                    2014
                  </li>
                  <li>
                    G. Krishnaveni, Head, PG. Dept of Chemistry Qualified State
                    Eligibility Test(SET) conducted by AP State Government in
                    the year of 2012
                  </li>
                </ul>
                <h3>Major and Minor Research projects</h3>
                <ul>
                  <li>
                    Dr. G. Krishnaveni has completed one minor Research Project
                    titled Identification of VTPS Pollution Effect on
                    Surrounding Villages with a project grant of Rs. 75,000/- by
                    UGC The duration of the project is two years i.e. from
                    2013-2015
                  </li>
                </ul>
              </div>

              <div>
                <img
                  src="https://drive.google.com/uc?id=1zbi9duZCIjCvr_LF_68BLA7SS5bplBVt"
                  alt="image"
                  style={{ height: "500px", width: "600px" }}
                />
              </div>
              <div>
                <img
                  src="https://drive.google.com/uc?id=1MKMsNqeuUe2govRjlc22Ng1KuFPONC-Y"
                  alt="image"
                  style={{ height: "500px", width: "600px" }}
                />
              </div>
              <div>
                <h3>Extension Lectures</h3>
                <ul>
                  <li>
                    Dr. G.Krishnaveni delivered a guest lecture on “ Ozone
                    Preservation and Environment Protection “ in Kondapalli
                    Thathi Reddy Womens College(KTR), Gudiwada, Krishna District
                    , A.P.
                  </li>
                  <li>
                    Dr. G. Krishnaveni gave an extension lecture on reactive
                    intermediates in Maris Stella college on 15th July, 2017.
                  </li>
                  <li>
                    G. Krishnaveni, Lecturer in M.Sc Chemistry, delivered a
                    guest lecture on “ Heterocyclic Compounds” in Andhra Loyola
                    College, Vijayawada on 5th August 2013.
                  </li>
                </ul>
              </div>
              <div>
                <img
                  src="https://drive.google.com/uc?id=15BWTPI9-bchxLyRAPLbMZ_HaMB5nUGnE"
                  alt="image"
                  style={{ height: "400px", width: "600px" }}
                />
              </div>
            </Box>
          </AccordionDetails>
        </Accordion>
      </div>
      <Accordion
        square
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={
            expanded === "panel1" ? (
              <RemoveIcon style={{ color: "white" }} />
            ) : (
              <AddIcon style={{ color: "white" }} />
            )
          }
          style={{ backgroundColor: "darkblue", color: "white" }}
        >
          <Typography>Ch. Srinivasa Reddy</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box>
            <h3 style={{ textDecoration: "underline" }}>
              ACADEMIC YEAR 2018-2019
            </h3>
            <div>
              <ul>
                <li>
                  Participated in FDP Programme on “Teaching Methods, Tool &
                  Techniques” organised by KBN College on 6th & 7th June, 2018.
                </li>
              </ul>
            </div>

            <div>
              <h3>Workshops</h3>

              <table
                className="table table-bordered"
                style={{ borderCollapse: "collapse" }}
              >
                <tbody>
                  <tr style={{ alignItems: "center" }}>
                    <th>
                      <p>S. NO</p>
                    </th>
                    <th>
                      <p>DATE</p>
                    </th>
                    <th>
                      <p>VENUE</p>
                    </th>
                    <th>
                      <p>SEMINAR/WORKSHOP</p>
                    </th>
                    <th>
                      <p>
                        PARTICIPATED<br></br>/PRESENTED
                      </p>
                    </th>
                  </tr>

                  <tr style={{ textAlign: "center" }}>
                    <td>
                      <p>1</p>
                    </td>
                    <td>
                      <p>22nd October, 2016</p>
                    </td>
                    <td>
                      <p>
                        One Day National Workshop on “Research & Innovations:
                        Issues & Challenges” (NWRIIC – 2016)
                      </p>
                    </td>
                    <td>
                      <p>IQAC, KBNC, VZA</p>
                    </td>
                    <td>
                      <p>Participated </p>
                    </td>
                  </tr>
                  <tr style={{ textAlign: "center" }}>
                    <td>
                      <p>2</p>
                    </td>
                    <td>
                      <p>22nd & 23rd October 2015</p>
                    </td>
                    <td>
                      <p>
                        National Seminar on “Management Education: New
                        Initiatives for Value Addition”
                      </p>
                    </td>
                    <td>
                      <p>KBN College, Vijayawada</p>
                    </td>
                    <td>
                      <p>Participated </p>
                    </td>
                  </tr>
                  <tr style={{ textAlign: "center" }}>
                    <td>
                      <p>3</p>
                    </td>
                    <td>
                      <p>24th – 25th July, 2015</p>
                    </td>
                    <td>
                      <p>
                        National Workshop on Human Values & Professional Ethics
                        – essential for Individual & Society
                      </p>
                    </td>
                    <td>
                      <p>KBNC, VZA</p>
                    </td>
                    <td>
                      <p>Participated </p>
                    </td>
                  </tr>
                  <tr style={{ textAlign: "center" }}>
                    <td>
                      <p>4</p>
                    </td>
                    <td>
                      <p>27th & 28th March 2013</p>
                    </td>
                    <td>
                      <p>Two Day Workshop on Better by the Day</p>
                    </td>
                    <td>
                      <p>KBNC, Vijayawada</p>
                    </td>
                    <td>
                      <p>Participated </p>
                    </td>
                  </tr>
                  <tr style={{ textAlign: "center" }}>
                    <td>
                      <p>5</p>
                    </td>
                    <td>
                      <p>25th & 26th June, 2011</p>
                    </td>
                    <td>
                      <p>
                        National Workshop on “Research Methods in Commerce &
                        Management Studies”
                      </p>
                    </td>
                    <td>
                      <p>
                        Depts. of Commerce & Business Administration, KBN
                        College, Vijayawada
                      </p>
                    </td>
                    <td>
                      <p>Participated </p>
                    </td>
                  </tr>
                  <tr style={{ textAlign: "center" }}>
                    <td>
                      <p>6</p>
                    </td>
                    <td>
                      <p>2nd and 3rd December 2016</p>
                    </td>
                    <td>
                      <p>K.B.N.College Vijayawada.</p>
                    </td>
                    <td>
                      <p>
                        Two Day International Conference on “Digital India- The
                        Information for All”{" "}
                      </p>
                    </td>
                    <td>
                      <p>Participated </p>
                    </td>
                  </tr>
                  <tr style={{ textAlign: "center" }}>
                    <td>
                      <p>7</p>
                    </td>
                    <td>
                      <p>25th and 26th November 2016</p>
                    </td>
                    <td>
                      <p>K.B.N.College Vijayawada. </p>
                    </td>
                    <td>
                      <p>
                        Two Day National Seminar on “E-Tailing, Trends,
                        Challenges and Opportunities”
                      </p>
                    </td>
                    <td>
                      <p>Participated </p>
                    </td>
                  </tr>
                  <tr style={{ textAlign: "center" }}>
                    <td>
                      <p>8</p>
                    </td>
                    <td>
                      <p>22nd October 2016</p>
                    </td>
                    <td>
                      <p>K.B.N.College Vijayawada.</p>
                    </td>
                    <td>
                      <p>
                        One Day National Workshop on “Research and Innovation:
                        Issues and Challenges”
                      </p>
                    </td>
                    <td>
                      <p>Participated </p>
                    </td>
                  </tr>
                  <tr style={{ textAlign: "center" }}>
                    <td>
                      <p>9</p>
                    </td>
                    <td>
                      <p>24th and 25th July 2015</p>
                    </td>
                    <td>
                      <p>K.B.N.College(Autonomous) Vijayawada.</p>
                    </td>
                    <td>
                      <p>
                        Two Day National Workshop on “Human Values and
                        Professional Ethics-Essential for Individual and
                        society”{" "}
                      </p>
                    </td>
                    <td>
                      <p>Participated </p>
                    </td>
                  </tr>
                  <tr style={{ textAlign: "center" }}>
                    <td>
                      <p>10</p>
                    </td>
                    <td>
                      <p>2nd and 3rd June 2015</p>
                    </td>
                    <td>
                      <p>K.B.N.College Vijayawada.</p>
                    </td>
                    <td>
                      <p>Two Day Faculty Development Programme</p>
                    </td>
                    <td>
                      <p>Participated </p>
                    </td>
                  </tr>
                  <tr style={{ textAlign: "center" }}>
                    <td>
                      <p>11</p>
                    </td>
                    <td>
                      <p>15th and 16th February 2015</p>
                    </td>
                    <td>
                      <p>SDSD Mahila Kalasala (UG,PG), Tanuku.</p>
                    </td>
                    <td>
                      <p>
                        Two Day Vocational Seminar on “Women Entrepreneurship in
                        India- The status of Imperatives”
                      </p>
                    </td>
                    <td>
                      <p>
                        Presented a Paper title “Good corporate governance in
                        India and challenges”
                      </p>
                    </td>
                  </tr>
                  <tr style={{ textAlign: "center" }}>
                    <td>
                      <p>12</p>
                    </td>
                    <td>
                      <p>31st January 2015</p>
                    </td>
                    <td>
                      <p>RTM Nagpur University, Nagpur. </p>
                    </td>
                    <td>
                      <p>
                        National Level Seminar on Challenges and Opportunities
                        further growth of Indian Financial Sector”
                      </p>
                    </td>
                    <td>
                      <p>
                        Presented a paper titled “Mutual Funds Growth, Risks and
                        Importance”{" "}
                      </p>
                    </td>
                  </tr>
                  <tr style={{ textAlign: "center" }}>
                    <td>
                      <p>13</p>
                    </td>
                    <td>
                      <p>19th and 20th December 2014</p>
                    </td>
                    <td>
                      <p>ANU Ongole Campus, Ongole.</p>
                    </td>
                    <td>
                      <p>
                        National Seminar on “Emerging Trends in Insurance Sector
                        in India”
                      </p>
                    </td>
                    <td>
                      <p>
                        Presented a paper titled “Policy Holders Protection in
                        Insurance Sector”
                      </p>
                    </td>
                  </tr>
                  <tr style={{ textAlign: "center" }}>
                    <td>
                      <p>14</p>
                    </td>
                    <td>
                      <p>18th November 2014</p>
                    </td>
                    <td>
                      <p>KVR., KVR AND MKR College, Khajipalem</p>
                    </td>
                    <td>
                      <p>
                        National Seminar on Emerging Trends in India Banking
                        Sector{" "}
                      </p>
                    </td>
                    <td>
                      <p>
                        Presented a paper titled “Impact of online banking on
                        employees in Banking Sector”
                      </p>
                    </td>
                  </tr>
                  <tr style={{ textAlign: "center" }}>
                    <td>
                      <p>15</p>
                    </td>
                    <td>
                      <p>30th and 31st October 2014</p>
                    </td>
                    <td>
                      <p>KVR., KVR AND MKR College, Khajipalem</p>
                    </td>
                    <td>
                      <p>
                        National Seminar on Emerging Trends in India Banking
                        Sector
                      </p>
                    </td>
                    <td>
                      <p>
                        Presented a paper titled “Impact of online banking on
                        employees in Banking Sector”
                      </p>
                    </td>
                  </tr>
                  <tr style={{ textAlign: "center" }}>
                    <td>
                      <p>16</p>
                    </td>
                    <td>
                      <p>6th and 7th August 2014</p>
                    </td>
                    <td>
                      <p>K.B.N.College Vijayawada.</p>
                    </td>
                    <td>
                      <p>
                        International Seminar on “Women Entrepreneurship- A
                        global perspective”
                      </p>
                    </td>
                    <td>
                      <p>
                        Presented a paper titled “Women involvement in dairy
                        co-operatives in India”
                      </p>
                    </td>
                  </tr>
                  <tr style={{ textAlign: "center" }}>
                    <td>
                      <p>17</p>
                    </td>
                    <td>
                      <p>24th April, 2014</p>
                    </td>
                    <td>
                      <p>Krishna University, Machilipatnam</p>
                    </td>
                    <td>
                      <p>
                        National Seminar on “Foreign Direct Investment in
                        Service Sector in emerging economy-Opportunities and
                        Challenges”
                      </p>
                    </td>
                    <td>
                      <p>
                        Presented a paper titled “Foreign Direct Investment in
                        Service Sector in emerging economy-Opportunities and
                        Challenges”
                      </p>
                    </td>
                  </tr>
                  <tr style={{ textAlign: "center" }}>
                    <td>
                      <p>18</p>
                    </td>
                    <td>
                      <p>15th March 2014</p>
                    </td>
                    <td>
                      <p>K.B.N.College</p>
                    </td>
                    <td>
                      <p>
                        National Seminar on Retail Banking Trends and Challenges
                      </p>
                    </td>
                    <td>
                      <p>
                        Presented a paper titled “Human Resource Management of
                        the Organistion in Retail Banking”
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h2 style={{ textDecoration: "underline" }}>Papers Published:</h2>
            <div>
              <table class="table table-bordered  ">
                <tbody>
                  <tr style={{ textAlign: "center" }}>
                    <td>
                      <p>
                        <strong>Journal Type</strong>
                      </p>
                      {/* <p><strong>&nbsp;</strong></p> */}
                    </td>
                    <td>
                      <p>
                        <strong>Journal Name</strong>
                      </p>
                    </td>
                    <td>
                      <p>
                        <strong>ISSN No.</strong>
                      </p>
                    </td>
                    <td>
                      <p>
                        <strong>
                          Vol. &amp; <br></br>Issue <br></br> No.
                        </strong>
                      </p>
                    </td>
                    <td>
                      <p>
                        <strong>Page No.</strong>
                      </p>
                    </td>
                    <td>
                      <p>
                        <strong>Title</strong>
                      </p>
                    </td>
                    <td>
                      <p>
                        <strong>
                          Citation<br></br> Index
                        </strong>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Scopus</p>
                    </td>
                    <td>
                      <p>International Journal of Multidisciplinary Research</p>
                    </td>
                    <td>
                      <p>2395-7964</p>
                    </td>
                    <td>
                      <p>Volume 2 Issue 6 2016</p>
                    </td>
                    <td>
                      <p>-</p>
                    </td>
                    <td>
                      <p>
                        Corporate Social Responsibility – The key role of human
                        resource
                      </p>
                    </td>
                    <td>
                      <p></p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>UGC List 49177</p>
                    </td>
                    <td>
                      <p>Global Journal for research analysis</p>
                    </td>
                    <td>
                      <p>2277-8160</p>
                    </td>
                    <td>
                      <p>Volume 3 20 Aug, 2014</p>
                    </td>
                    <td>
                      <p>-</p>
                    </td>
                    <td>
                      <p>Women involvement in dairy cooperatives in India</p>
                    </td>
                    <td>
                      <p>1.5408</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
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
          <Typography>Dr.G V Sastry</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box>
            <div>
              <h3 style={{ textDecoration: "underline" }}>
                ACADEMIC YEAR 2018-2019
              </h3>
              <ul>
                <li>
                  Qualified Online examination on “Emotional Intelligence” from
                  NPTEL. Funded by the Ministry of HRD Government of India
                  January to March, 2019, (8 weeks course).
                </li>
                <li>
                  Participated UGC Sponsored National Workshop on Intellectual
                  property Rights – issues and challenges (in collaboration with
                  Krishna University) organised by Commerce and Business
                  administrative PG Department KBN College Vijayawada on 23rd
                  November, 2018.
                </li>
                <li>
                  Qualified Online examination on “Stress Management” from
                  NPTEL. Funded by the Ministry of HRD Government of India
                  August to September, 2018 (4 weeks course).
                </li>
              </ul>
            </div>
            <div>
              <h3>Publications:</h3>

              <table class="table table-bordered  ">
                <tbody>
                  <tr style={{ textAlign: "center" }}>
                    <td>
                      <p>
                        <strong>
                          Journal Type (UGC Listed, Scopus, Web of Science)
                        </strong>
                      </p>
                      {/* <p><strong>&nbsp;</strong></p> */}
                    </td>
                    <td>
                      <p>
                        <strong>Journal Name</strong>
                      </p>
                    </td>
                    <td>
                      <p>
                        <strong>Title</strong>
                      </p>
                    </td>
                    <td>
                      <p>
                        <strong>ISSN / ISBN No.</strong>
                      </p>
                    </td>
                    <td>
                      <p>
                        <strong>
                          Vol. &amp; <br></br>Issue <br></br> No.
                        </strong>
                      </p>
                    </td>
                    <td>
                      <p>
                        <strong>Date &amp;Page No.</strong>
                      </p>
                    </td>
                    <td>
                      <p>
                        <strong>Impact Factor</strong>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>UGC Journal No. 48541</p>
                    </td>
                    <td>
                      <p>
                        International Research Journal of Management and
                        Commerce
                      </p>
                    </td>
                    <td>
                      <p>
                        Performing Training Needs and Advance Work Plan Through
                        Scheduled Performance Appraisal System
                      </p>
                    </td>
                    <td>
                      <p>2348-9766</p>
                    </td>
                    <td>
                      <p>4(12)</p>
                    </td>
                    <td>
                      <p>Dec, 2017 Pg. No. 92-108</p>
                    </td>
                    <td>
                      <p>5.564</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>UGC Journal No.49194</p>
                    </td>
                    <td>
                      <p>
                        International Research Journal of Human Resources and
                        Social Sciences
                      </p>
                    </td>
                    <td>
                      <p>
                        Role of Performance Appraisal System in Enhancing
                        competence and Identifying Strengths of Employees at
                        Visakhapatnam Steel Plant, Andhra Pradesh, India
                      </p>
                    </td>
                    <td>
                      <p>2349-4085(O) and 2394-4218 (P)</p>
                    </td>
                    <td>
                      <p>4(11)</p>
                    </td>
                    <td>
                      <p>Nov, 2017 Pg:1-17</p>
                    </td>
                    <td>
                      <p>5.414</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p></p>
                    </td>
                    <td>
                      <p>
                        International Journal of Innovative Research in
                        Information Security
                      </p>
                    </td>
                    <td>
                      <p>
                        E-Governance – Reforming Government through technology:
                        A Digital India initiative
                      </p>
                    </td>
                    <td>
                      <p>2349-7009</p>
                    </td>
                    <td>
                      <p>3(9)</p>
                    </td>
                    <td>
                      <p>Dec, 2016,Pg. No.1-4</p>
                    </td>
                    <td>
                      <p>3.391</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p></p>
                    </td>
                    <td>
                      <p>International Journal of Multidisciplinary Research</p>
                    </td>
                    <td>
                      <p>
                        An analysis of volunteering activities in education
                        sector by Lanco Foundation under corporate social
                        responsibility.
                      </p>
                    </td>
                    <td>
                      <p>2395-7964</p>
                    </td>
                    <td>
                      <p>2(5)</p>
                    </td>
                    <td>
                      <p>2016 Pg. No. 111-121</p>
                    </td>
                    <td>
                      <p>2.96</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>UGC List: 49177</p>
                    </td>
                    <td>
                      <p>Global Journal Research Analysis</p>
                    </td>
                    <td>
                      <p>
                        Women participation in Agribusiness in select
                        Horticulture Markets.
                      </p>
                    </td>
                    <td>
                      <p>2277-8160</p>
                    </td>
                    <td>
                      <p>3(8)</p>
                    </td>
                    <td>
                      <p>August, 2014 Pg. No. 44-46</p>
                    </td>
                    <td>
                      <p>1.5408</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p></p>
                    </td>
                    <td>
                      <p>Transforming organizations and Talent Management</p>
                    </td>
                    <td>
                      <p>Creating work culture in Talent Management</p>
                    </td>
                    <td>
                      <p>978-93-83241-63-7</p>
                    </td>
                    <td>
                      <p>-</p>
                    </td>
                    <td>
                      <p>2014 Pg. No. 542-547</p>
                    </td>
                    <td>
                      <p>-</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p></p>
                    </td>
                    <td>
                      <p>International Journal Research Management Studies</p>
                    </td>
                    <td>
                      <p>
                        Indian Retail Banking Indian Retail Banking-Emerging
                        prospects and defies.
                      </p>
                    </td>
                    <td>
                      <p>2321-4864</p>
                    </td>
                    <td>
                      <p>1(7)</p>
                    </td>
                    <td>
                      <p>February, 2014 Pg. No. 202-205</p>
                    </td>
                    <td>
                      <p>-</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div>
              <h3 style={{ textDecoration: "underline" }}>Participations:</h3>
              <table className="table table-bordered">
                <tbody>
                  <tr style={{ textAlign: "center" }}>
                    <td>
                      <p>
                        <strong>DATE</strong>
                      </p>
                    </td>
                    <td>
                      <p>
                        <strong>VENUE</strong>
                      </p>
                    </td>
                    <td>
                      <p>
                        <strong>SEMINAR/WORKSHOP</strong>
                      </p>
                    </td>
                    <td>
                      <p>
                        <strong>PARTICIPATED/PRESENTED</strong>
                      </p>
                    </td>
                  </tr>
                  <tr rowSpan={3}>01.04.2017-31.03.2018</tr>
                  <tr>
                    <td>
                      <p>5th & 6th January, 2018</p>
                    </td>

                    <td>
                      <p>KBN College, Vijayawada </p>
                    </td>

                    <td>
                      <p>
                        UGC Sponsored (Under Autonomous Grants) international
                        Seminar on “GST Practices – A Cross Country Experience”
                        (ISGST – 2018).
                      </p>
                    </td>

                    <td>
                      <p>Participated (Co-Convenor).</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>6th & 7th November, 2017</p>
                    </td>
                    <td>
                      <p>ANU, Nagarjuna Nagar</p>
                    </td>

                    <td>
                      <p>
                        UGC SAP Sponsored Two Day Workshop on Case methods
                        learning a tool for analytical development skills
                      </p>
                    </td>
                    <td>
                      <p>Participated</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>28th & 29th July, 2017</p>
                    </td>

                    <td>
                      <p>KBN College, Vijayawada</p>
                    </td>

                    <td>
                      <p>
                        Two Day National Workshop on “Logistics & Supply Chain
                        Management”.
                      </p>
                    </td>

                    <td>
                      <p>Participated</p>
                    </td>
                  </tr>
                  <tr>1.4.2016 TO 31.3.2017</tr>
                  <tr>
                    <td>
                      <p>5th January 2017</p>
                    </td>
                    <td rowSpan={4}>
                      <p>ANU Nagarjuna Nagar, Guntur.</p>
                    </td>

                    <td>
                      <p>
                        Faculty Development programme on GST and Students
                        Employability.
                      </p>
                    </td>

                    <td>
                      <p>Participated.</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>2nd and 3rd December 2016</p>
                    </td>

                    <td>
                      <p>K.B.N.College Vijayawada.</p>
                    </td>

                    <td>
                      <p>
                        Two Day International Conference on “Digital India- The
                        Information for All”.
                      </p>
                    </td>

                    <td>
                      <p>
                        Presented a paper Titled “e-governance- Reforming
                        Government through Technology- A Digital India-
                        Initiative”.
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>25th and 26th November 2016</p>
                    </td>

                    <td>
                      <p>K.B.N.College Vijayawada.</p>
                    </td>

                    <td>
                      <p>
                        Two Day National Seminar on “E-Tailing, Trends,
                        Challenges and Opportunities”.
                      </p>
                    </td>

                    <td>
                      <p>Participated.</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>22nd October 2016.</p>
                    </td>

                    <td>
                      <p>K.B.N.College Vijayawada.</p>
                    </td>

                    <td>
                      <p>
                        One Day National Workshop on “Research and Innovation:
                        Issues and Challenges”.
                      </p>
                    </td>

                    <td>
                      <p>Participated.</p>
                    </td>
                  </tr>
                  <tr>1.4.2015 TO 31.3.2016</tr>
                  <tr>
                    <td>
                      <p>19th and 21st February, 2016</p>
                    </td>
                    <td>
                      <p>K.B.N.College Vijayawada.</p>
                    </td>

                    <td>
                      <p>
                        Two Day International Seminar on “Corporate Social
                        Responsibility initiatives for Inclusion and Sustainable
                        Development”.
                      </p>
                    </td>

                    <td>
                      <p>
                        Presented a paper titled “An Analysis of Volunteering
                        Activities in Educational Society by Lanco Foundation
                        under CSR”.
                      </p>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <p>24th and 25th July 2015</p>
                    </td>
                    <td>
                      <p>K.B.N.College(Autonomous) Vijayawada.</p>
                    </td>

                    <td>
                      <p>
                        Two Day National Workshop on “Human Values and
                        Professional Ethics-Essential for Individual and
                        society”.
                      </p>
                    </td>

                    <td>
                      <p>Participated.</p>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <p>2nd and 3rd June 2015.</p>
                    </td>
                    <td>
                      <p>K.B.N.College Vijayawada.</p>
                    </td>

                    <td>
                      <p>Two Day Faculty Development Programme.</p>
                    </td>

                    <td>
                      <p>Participated.</p>
                    </td>
                  </tr>
                  <tr>1.4.2014 TO 31.3.2015</tr>
                  <tr>
                    <td>
                      <p>15th and 16th February 2015.</p>
                    </td>
                    <td>
                      <p>SDSD Mahila Kalasala (UG,PG), Tanuku.</p>
                    </td>

                    <td>
                      <p>
                        Two Day Vocational Seminar on “Women Entrepreneurship in
                        India- The status of Imperatives”.
                      </p>
                    </td>

                    <td>
                      <p>Presented a Paper.</p>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <p>31st January 2015.</p>
                    </td>
                    <td>
                      <p>RTM Nagpur University, Nagpur.</p>
                    </td>

                    <td>
                      <p>
                        National Level Seminar on Challenges and Opportunities
                        further growth of Indian Financial Sector”.
                      </p>
                    </td>

                    <td>
                      <p>
                        Presented a paper titled “Mutual Funds Growth, Risks and
                        Importance”.
                      </p>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <p>19th and 20th December 2014.</p>
                    </td>
                    <td>
                      <p>ANU Ongole Campus, Ongole.</p>
                    </td>

                    <td>
                      <p>
                        National Seminar on “Emerging Trends in Insurance Sector
                        in India”.
                      </p>
                    </td>

                    <td>
                      <p>
                        Presented a paper titled “Policy Holders Protection in
                        Insurance Sector”.
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>18th November 2014.</p>
                    </td>
                    <td>
                      <p>V.R.Siddhartha Engineering College.</p>
                    </td>

                    <td>
                      <p>
                        One Day International Seminar on Transforming
                        organizations Through Talent Management.
                      </p>
                    </td>

                    <td>
                      <p>
                        Presented a paper titled “Creating a work Culture in
                        Talent Management”.
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>18th and 19th October 2014.</p>
                    </td>
                    <td>
                      <p>SKSD Mahila Kalasala, Tanuku.</p>
                    </td>

                    <td>
                      <p>
                        National Seminar on “ Financial inclusion Strategies-
                        Role of self-help groups and Micro Finance”.
                      </p>
                    </td>

                    <td>
                      <p>
                        Presented a paper titled “The Future of Microfinance:
                        Opportunities and Challenges for Financial inclusion”.
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>30th and 31st October 2014.</p>
                    </td>
                    <td>
                      <p>KVR., KVR AND MKR College, Khajipalem.</p>
                    </td>

                    <td>
                      <p>
                        National Seminar on Emerging Trends in India Banking
                        Sector.
                      </p>
                    </td>

                    <td>
                      <p>
                        Presented a paper titled “Impact of online banking on
                        employees in Banking Sector”.
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>6th and 7th August 2014.</p>
                    </td>
                    <td>
                      <p>K.B.N.College Vijayawada.</p>
                    </td>

                    <td>
                      <p>
                        International Seminar on “Women Entrepreneurship- A
                        global perspective”.
                      </p>
                    </td>

                    <td>
                      <p>
                        Presented a paper titled “A study on Women participation
                        in Agriculture in Selected Horticulture Markets”.
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>21st July 2014.</p>
                    </td>
                    <td>
                      <p>K.B.N.College Vijayawada.</p>
                    </td>

                    <td>
                      <p>
                        National Seminar on “ Enhancement and sustenance of
                        quality among students and Teachers: Role of Support
                        Services”.
                      </p>
                    </td>

                    <td>
                      <p>Participated.</p>
                    </td>
                  </tr>
                  <tr>1.4.2013 to 31.3.2014</tr>
                  <tr>
                    <td>
                      <p>20th and 21st February 2014.</p>
                    </td>
                    <td>
                      <p>IGNOU Regional Centre, Vijayawada.</p>
                    </td>

                    <td>
                      <p>
                        Orientation programme for Academic Counsellor of IGNOU.
                      </p>
                    </td>

                    <td>
                      <p>Participated.</p>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <p>15th March 2014.</p>
                    </td>
                    <td>
                      <p>-</p>
                    </td>

                    <td>
                      <p>
                        National Seminar on Retail Banking Trends and
                        Challenges.
                      </p>
                    </td>

                    <td>
                      <p>
                        Presented a paper titled “Indian Retail Banking-
                        Emerging Prospects and Defines”.
                      </p>
                    </td>
                  </tr>
                  <tr>1.4.2012 TO 31.3.2013</tr>
                  <tr>
                    <td>
                      <p>27th and 28th March 2013.</p>
                    </td>
                    <td>
                      <p>K.B.N.College Vijayawada.</p>
                    </td>

                    <td>
                      <p>
                        Two Day Workshop for Teaching Faculty on Enhancing
                        Personality and Soft skills in Association with M.R.Pai
                        Foundation Mumbai.
                      </p>
                    </td>

                    <td>
                      <p>Participated.</p>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <p>15th and 16th March 2013.</p>
                    </td>
                    <td>
                      <p>K.B.N.College Vijayawada.</p>
                    </td>
                    <td>
                      <p>
                        Two Day Faculty Development Workshop for College
                        lecturers.
                      </p>
                    </td>
                    <td>
                      <p>Participated.</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p> 13th and 14th October 2012.</p>
                    </td>
                    <td>
                      <p>IGNOU Regional Centre, Vijayawada.</p>
                    </td>

                    <td>
                      <p>
                        Two days orientation programme on open distance
                        learning.
                      </p>
                    </td>

                    <td>
                      <p>Participated.</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
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
          <Typography>Vijaybabu Tekkem</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box>
            <div>
              <h3 style={{ textDecoration: "underline" }}>
                ACADEMIC YEAR 2018-2019
              </h3>
              <ul>
                <li>
                Participated in the ICSSR - SRC Two Day National Seminar on “Modern Methods and Effectiveness Methods and Tribal Programme – Suggest Necessary Measures in the Light of Findings” organized by Dept. of Commerce, KBN College, Vijayawada on 18th & 19th March,2019.
                </li>
                <li>
                Participated in UGC sponsored National Workshop on Intellectual Property Rights – issued and challenges, organised by Department of Commerce and Business administration, KBN College, Vijayawada on 23rd November,2018.
                </li>
                <li>
                Participated in FDP Programme on “Teaching Methods, Tool & Techniques” organised by KBN College on 6th & 7th June, 2018.
                </li>
              </ul>
            </div>
            <div>
              <h3>National Seminars attended: 7</h3>
              <ul>
                <li>
                Participated in a Two Day UGC Sponsored National Seminar on “Emerging.
                </li>
                <li>
                Trends in Indian Banking Sector” organised by the Department of Commerce, K.V.R., K.V.R. & M.K.R. College, Khajipalem, Guntur, held on 30 – 31 October, 2014.                </li>
                <li>
                Participated in a One Day UGC Sponsored “IGNITE 2015 - A National Level Seminar on Challenges And Opportunities for the Growth of Indian Financial Sector” organised by the Department of Business Management, Rashtrasant Tukadoji Maharaj Nagpur University in Collaboration with NIT Graduate School of Management, Nagpur, held on 31 January, 2015.                </li>
                <li>
                Participated in a Two Day UGC Sponsored National Seminar on “Women Entrepreneurship in India – The Status and Imperatives” organised by the Department of Commerce, S.K.S.D Mahila Kalasala (UG&PG), Tanuku, held on 15 – 16 October, 2015.                </li>
                <li>
                Participated in a Two Day UGC Sponsored National Seminar on “e-tailing: Trends, Challenges & Opportunities” organised by the Department of Commerce and Management, K.B.N College, Vijayawada, held on 25 - 26 November, 2016.                </li>
                <li>
                Participated in a Two Day UGC Sponsored National Seminar on “Innovation Management – A Strategic Imperative for Growth” organised by the Department of Commerce & Business Administration, P.B. Siddhartha College of Arts & Science , Vijayawada, held on 22 - 23 August, 2017.                </li>
                <li>
                Participated in a Two-Day Seminar on “Emerging Trends in Consumer Law - Redressal Mechanisms” organised jointly by the NALSAR University of Law, Hyderabad & Smt. V.D. Siddhartha Law College, Vijayawada, under the aegis of Ministry of Consumer Affairs, Food and Public Distribution, New Delhi, Held on 28 – 29 October, 2017
                </li>
              </ul>
            </div>

            <div>
              <h3>International Seminars attended: 2</h3>
              <ul>
                <li>
                Participated in a Two Day UGC Sponsored International National Seminar on “Women Entrepreneurship – A Global Perspective (INSWEG-2014)” organised by the Department of Commerce and Management, K.B.N College, Vijayawada held on 6 – 7 August, 2014.
                </li>
                <li>Participated in a Two Day UGC Sponsored International National Seminar on “Corporate Social Responsibility Initiatives for Inclusive and Sustainable Development (ISCSR-2016)” organised by the Department of Commerce and Management, K.B.N College, Vijayawada held on 19 - 21 February, 2016.</li>
              </ul>
            </div>
            <div>
              <h3>National Workshops attended: 5</h3>
              <ul>
                <li>
                Participated in a Two Day UGC Sponsored National Workshop on “Research Methods in Commerce and Management Studies” organised by the Departments of Commerce and Business Administration, K.B.N College, Vijayawada, held on 25 – 26 June, 2011.
                </li>
                <li>
                Participated in a Three Day District Level Programme on “A Foundation Course in Human Values and Professional Ethics” for Lecturers organised by S.R.R & C.R.R Government Degree College, Vijayawada, from 25.09.2014 to 27.09.2014.              
                </li>
                <li>
                Participated in a Two Day UGC Sponsored National Workshop on “Human Values and Professional Ethics – Essential for Individual and Society” organised by Value Education Cell & Department of Telugu, K.B.N College, Vijayawada, held on 24 – 25 July, 2015.                </li>
                <li>
                Participated in a One Day National Workshop on “Research and Innovations: Issues and Challenges” organised by IQAC, K.B.N College, Vijayawada, held on 22 October, 2016.</li>
                <li>
                Participated in a Two Day UGC Sponsored National Workshop on “Logistics & Supply Chain Management” organised by the Department of Commerce and Management, K.B.N College, Vijayawada, held on 28 – 29 July, 2017. </li>
                <li>
                Participated in a One Day Faculty Development Programme on “GST & Students’ Employability” organised by Department of Commerce, Acharya Nagarjuna University, Guntur, and ICA Edu Skills Pvt. Ltd. on 05 January, 2017.
                </li>
              </ul>
            </div>
            
            <div>
              <h3>Papers Published</h3>
              <table className="table table-bordered">
                <tbody>
                  <tr>
                    <td>
                      <strong>Journal Type (UGC Listed, Scopus, Web of Science)</strong>
                    </td>
                    <td>
                      <strong>Journal Name</strong>
                    </td>

                    <td>
                      <strong>ISSN No.</strong>
                    </td>

                    <td>
                      <strong>Vol. & Issue No.</strong>
                    </td>

                    <td>
                      <strong>Page No.</strong>
                    </td>
                    <td>
                      <strong>Title</strong>
                    </td>
                    <td>
                      <strong>Citation Index</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Listed and Indexed with International ISSN Directory, Paris</p>
                    </td>
                    <td>
                      <p>
                      Global Journal for Research Analysis.
                      </p>
                    </td>

                    <td>
                      <p>ISSN No 2277 - 8160.</p>
                    </td>

                    <td>
                      <p>Volume: 3 Issue: 8 August 2014.</p>
                    </td>

                    <td>
                      <p>30 - 32</p>
                    </td>
                    <td>
                      <p>A Study on Slow Progress of Women Entrepreneurs in India</p>
                    </td>
                    <td>
                      <p>No : 12</p>
                    </td>


                  </tr>
                  <tr>
                    <td>
                      <p>Index Copernicus Google Scholar DRJI Open Access Journals Sensei Scholar Science Central IISS J GATE Mendeley Advanced Science</p>
                    </td>
                    <td>
                      <p>
                      SS International Journal of Multidisciplinary Research.
                      </p>
                    </td>

                    <td>
                      <p>ISSN No 2395 - 7964.</p>
                    </td>

                    <td>
                      <p>Volume: 2 Issue: 4 2016</p>
                    </td>

                    <td>
                      <p>92 - 97</p>
                    </td>
                    <td>
                      <p>Corporate Social Responsibility and Sustainable Business: Leadership Tasks and Functions</p>
                    </td>
                    <td>
                      <p> No: 13</p>
                    </td>
                  </tr>
                  </tbody>
                  </table>
                  </div>
                            </Box>
        </AccordionDetails>
      </Accordion>

      <Accordion
        square
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary
          expandIcon={
            expanded === "panel4" ? (
              <RemoveIcon style={{ color: "white" }} />
            ) : (
              <AddIcon style={{ color: "white" }} />
            )
          }
          style={{ backgroundColor: "darkblue", color: "white" }}
        >
          <Typography>Doppa Pavan Kumar</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box>
            <div>
              <h3 style={{ textDecoration: "underline" }}>
                ACADEMIC YEAR 2018-2019
              </h3>
              <ul>
                <li>
                Participated in the ICSSR - SRC Two Day National Seminar on “Modern Methods and Effectiveness Methods and Tribal Programme – Suggest Necessary Measures in the Light of Findings” organized by Dept. of Commerce, KBN College, Vijayawada on 18th & 19th March, 2019.                </li>
                <li>
                Participated in UGC sponsored National Workshop on Intellectual Property Rights – issued and challenges, organised by Department of Commerce and Business administration, KBN College, Vijayawada on 23rd November, 2018.                </li>
                <li>
                Participated in FDP Programme on “Teaching Methods, Tool & Techniques” organised by KBN College on 6th & 7th June, 2018.
                </li>
              </ul>
            </div>
            <div>
              <h3>Workshops</h3>
             
              <table className="table table-bordered">
                <tbody>
                  <tr>
                    <td>
                      <strong>DATE</strong>
                    </td>
                    <td>
                      <strong>VENUE</strong>
                    </td>

                    <td>
                      <strong>SEMINAR/WORKSHOP</strong>
                    </td>

                    <td>
                      <strong>PARTICIPATED/ATTENDED</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>28th and 29th July, 2017.</p>
                    </td>
                    <td>
                      <p>
                      K.B.N.College Vijayawada. </p>
                    </td>

                    <td>
                      <p>National workshop on “Logistics and supply chain management”.</p>
                    </td>

                    <td>
                      <p>Attended.</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>21st and 22nd July, 2017.</p>
                    </td>
                    <td>
                      <p>
                      K.B.N.College Vijayawada. </p>
                    </td>

                    <td>
                      <p>National seminar on “women empowerment-media, cinema and theatre prospects and challenges”.</p>
                    </td>

                    <td>
                      <p>Participated.</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>25th and 26th November 2016.</p>
                    </td>
                    <td>
                      <p>
                      K.B.N.College Vijayawada. </p>
                    </td>

                    <td>
                      <p>Two Day National Seminar on “E-Tailing, Trends, Challenges and Opportunities”.</p>
                    </td>

                    <td>
                      <p>Presented a paper titled “e-tailing in India”.</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>22th October, 2016.</p>
                    </td>
                    <td>
                      <p>
                      K.B.N.College Vijayawada. </p>
                    </td>

                    <td>
                      <p>National workshop on “research and innovations-issues and challenges”.</p>
                    </td>

                    <td>
                      <p>Attended.</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>19th and 21st February, 2016.</p>
                    </td>
                    <td>
                      <p>
                      K.B.N.College Vijayawada. </p>
                    </td>

                    <td>
                      <p>International Seminar on Corporate Social Responsibility.</p>
                    </td>

                    <td>
                      <p>Presented a paper on “A new definition of CSR and sustainability”.</p>
                    </td>
                  </tr>
                  </tbody>
                  </table>
                  </div>
                  <div>
              <h3>Papers Published</h3>
             
              <table className="table table-bordered">
                <tbody>
                  <tr>
                    <td>
                      <strong>Journal Type (UGC Listed, Scopus, Web of Science)</strong>
                    </td>
                    <td>
                      <strong>Journal Name</strong>
                    </td>

                    <td>
                      <strong>ISSN No.</strong>
                    </td>

                    <td>
                      <strong>Vol. & Issue No.</strong>
                    </td>
                    
                    <td>
                      <strong>Page No.</strong>
                    </td>
                    
                    <td>
                      <strong>Title</strong>
                    </td>
                    
                    <td>
                      <strong>Citation Index</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>-</p>
                    </td>
                    <td>
                      <p>
                      Journal of Advanced Research in Commerce and Management Studies</p>
                    </td>

                    <td>
                      <p>52394-837X.</p>
                    </td>

                    <td>
                      <p>Volume III Spl. Issue 2016.</p>
                    </td>
                    <td>
                      <p>226-233.</p>
                    </td>
                    <td>
                      <p>e-tailing in India.</p>
                    </td>
                    <td>
                      <p>-</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>-</p>
                    </td>
                    <td>
                      <p>
                      SS International Journal of Multi-disciplinary Research.</p>
                    </td>

                    <td>
                      <p>2395-7964.</p>
                    </td>

                    <td>
                      <p>Volume II Issue 4 2016.</p>
                    </td>
                    <td>
                      <p>73-74.</p>
                    </td>
                    <td>
                      <p>A new definition of CSR and Sustainability.</p>
                    </td>
                    <td>
                      <p>-</p>
                    </td>
                  </tr>
                  
                  </tbody>
                  </table>
                  </div>
                            </Box>
        </AccordionDetails>
      </Accordion>

      <Accordion
        square
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
      >
        <AccordionSummary
          expandIcon={
            expanded === "panel5" ? (
              <RemoveIcon style={{ color: "white" }} />
            ) : (
              <AddIcon style={{ color: "white" }} />
            )
          }
          style={{ backgroundColor: "darkblue", color: "white" }}
        >
          <Typography>B.V. Manohar Babu</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box>
            <div>
              <h3 style={{ textDecoration: "underline" }}>
                ACADEMIC YEAR 2018-2019
              </h3>
              <ul>
                <li>
                Participated in the ICSSR - SRC Two Day National Seminar on “Modern Methods and Effectiveness Methods and Tribal Programme – Suggest Necessary Measures in the Light of Findings” Organized by Dept. of Commerce, KBN College, Vijayawada on 18th & 19thMarch,2019.  </li>
                <li>
                Participated in FDP Programme on “Teaching Methods, Tool & Techniques” Organised by KBN College on 6th & 7th June, 2018.</li>
              </ul>
            </div>
            <div>
              <h3>Workshops</h3>
             
              <table className="table table-bordered">
                <tbody>
                  <tr>
                    <td>
                      <strong>DATE</strong>
                    </td>
                    <td>
                      <strong>VENUE</strong>
                    </td>

                    <td>
                      <strong>SEMINAR/WORKSHOP</strong>
                    </td>

                    <td>
                      <strong>PARTICIPATED/ATTENDED</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>28th and 29th July, 2017.</p>
                    </td>
                    <td>
                      <p>
                      K.B.N.College Vijayawada. </p>
                    </td>

                    <td>
                      <p>National workshop on “Logistics and supply chain management”.</p>
                    </td>

                    <td>
                      <p>Attended.</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>25th and 26th November 2016.</p>
                    </td>
                    <td>
                      <p>
                      K.B.N.College Vijayawada. </p>
                    </td>

                    <td>
                      <p>Two Day National Seminar on “E-Tailing, Trends, Challenges and Opportunities”.</p>
                    </td>

                    <td>
                      <p>Participated.</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>22th October, 2016.</p>
                    </td>
                    <td>
                      <p>
                      K.B.N.College Vijayawada. </p>
                    </td>

                    <td>
                      <p>National workshop on “research and innovations-issues and challenges”.</p>
                    </td>

                    <td>
                      <p>Attended.</p>
                    </td>
                  </tr>
                 
                  </tbody>
                  </table>
                  </div>
                            </Box>
        </AccordionDetails>
      </Accordion>

      <Accordion
        square
        expanded={expanded === "panel6"}
        onChange={handleChange("panel6")}
      >
        <AccordionSummary
          expandIcon={
            expanded === "panel6" ? (
              <RemoveIcon style={{ color: "white" }} />
            ) : (
              <AddIcon style={{ color: "white" }} />
            )
          }
          style={{ backgroundColor: "darkblue", color: "white" }}
        >
          <Typography>N. Hemanth Kumar </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box>
            <div>
              <h3 style={{ textDecoration: "underline" }}>
                ACADEMIC YEAR 2018-2019
              </h3>
              <ul>
                <li>
                Published a paper entitled “The Concept, Evolution & Status of Primitive Tribes in India: A Case Study of Krishna District” in the Conference Proceedings of the ICSSR - SRC Two Day National Seminar on “Modern Methods and Effectiveness Methods and Tribal Programme – Suggest Necessary Measures in the Light of Findings” organized by Dept. of Commerce, KBN College, Vijayawada on 18th & 19th March, 2019.</li>
                <li>
                Participated in FDP Programme on “Teaching Methods, Tool & Techniques” organised by KBN College on 6th & 7th June, 2018.</li>
              </ul>
            </div>
            <div>
              <h3>Workshops</h3>
             
              <table className="table table-bordered">
                <tbody>
                  <tr>
                    <td>
                      <strong>DATE</strong>
                    </td>
                    <td>
                      <strong>VENUE</strong>
                    </td>

                    <td>
                      <strong>SEMINAR/WORKSHOP</strong>
                    </td>

                    <td>
                      <strong>PARTICIPATED/ATTENDED</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>28th and 29th July, 2017.</p>
                    </td>
                    <td>
                      <p>
                      K.B.N.College Vijayawada. </p>
                    </td>

                    <td>
                      <p>National workshop on “Logistics and supply chain management”.</p>
                    </td>

                    <td>
                      <p>Attended.</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>25th and 26th November 2016.</p>
                    </td>
                    <td>
                      <p>
                      K.B.N.College Vijayawada. </p>
                    </td>

                    <td>
                      <p>Two Day National Seminar on “E-Tailing, Trends, Challenges and Opportunities”.</p>
                    </td>

                    <td>
                      <p>Participated.</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>22th October, 2016.</p>
                    </td>
                    <td>
                      <p>
                      K.B.N.College Vijayawada. </p>
                    </td>

                    <td>
                      <p>National workshop on “research and innovations-issues and challenges”.</p>
                    </td>

                    <td>
                      <p>Attended.</p>
                    </td>
                  </tr>
                 
                  </tbody>
                  </table>
                  </div>
                            </Box>
        </AccordionDetails>
      </Accordion>

      <Accordion
        square
        expanded={expanded === "panel7"}
        onChange={handleChange("panel7")}
      >
        <AccordionSummary
          expandIcon={
            expanded === "panel7" ? (
              <RemoveIcon style={{ color: "white" }} />
            ) : (
              <AddIcon style={{ color: "white" }} />
            )
          }
          style={{ backgroundColor: "darkblue", color: "white" }}
        >
          <Typography>M.Venkateswara Rao </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box>
            
                            </Box>
        </AccordionDetails>
      </Accordion>

      <Accordion
        square
        expanded={expanded === "panel8"}
        onChange={handleChange("panel8")}
      >
        <AccordionSummary
          expandIcon={
            expanded === "panel8" ? (
              <RemoveIcon style={{ color: "white" }} />
            ) : (
              <AddIcon style={{ color: "white" }} />
            )
          }
          style={{ backgroundColor: "darkblue", color: "white" }}
        >
          <Typography>V.Sesha Giri Rao </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box>
            
                            </Box>
        </AccordionDetails>
      </Accordion>

      <Accordion
        square
        expanded={expanded === "panel9"}
        onChange={handleChange("panel9")}
      >
        <AccordionSummary
          expandIcon={
            expanded === "panel9" ? (
              <RemoveIcon style={{ color: "white" }} />
            ) : (
              <AddIcon style={{ color: "white" }} />
            )
          }
          style={{ backgroundColor: "darkblue", color: "white" }}
        >
          <Typography>V.Sailaja </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box>
            
                            </Box>
        </AccordionDetails>
      </Accordion>

      <Accordion
        square
        expanded={expanded === "panel10"}
        onChange={handleChange("panel10")}
      >
        <AccordionSummary
          expandIcon={
            expanded === "panel10" ? (
              <RemoveIcon style={{ color: "white" }} />
            ) : (
              <AddIcon style={{ color: "white" }} />
            )
          }
          style={{ backgroundColor: "darkblue", color: "white" }}
        >
          <Typography>K. Venkata Ratnam</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box>
            
                            </Box>
        </AccordionDetails>
      </Accordion>

      <Accordion
        square
        expanded={expanded === "panel11"}
        onChange={handleChange("panel11")}
      >
        <AccordionSummary
          expandIcon={
            expanded === "panel11" ? (
              <RemoveIcon style={{ color: "white" }} />
            ) : (
              <AddIcon style={{ color: "white" }} />
            )
          }
          style={{ backgroundColor: "darkblue", color: "white" }}
        >
          <Typography>K.Swaroopa Rani</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box>
            
                            </Box>
        </AccordionDetails>
      </Accordion>

      <Accordion
        square
        expanded={expanded === "panel12"}
        onChange={handleChange("panel12")}
      >
        <AccordionSummary
          expandIcon={
            expanded === "panel12" ? (
              <RemoveIcon style={{ color: "white" }} />
            ) : (
              <AddIcon style={{ color: "white" }} />
            )
          }
          style={{ backgroundColor: "darkblue", color: "white" }}
        >
          <Typography>D.Vyshnavi</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box>
            
                            </Box>
        </AccordionDetails>
      </Accordion>

      <Accordion
        square
        expanded={expanded === "panel13"}
        onChange={handleChange("panel13")}
      >
        <AccordionSummary
          expandIcon={
            expanded === "panel13" ? (
              <RemoveIcon style={{ color: "white" }} />
            ) : (
              <AddIcon style={{ color: "white" }} />
            )
          }
          style={{ backgroundColor: "darkblue", color: "white" }}
        >
          <Typography>P L V D.Lavanya</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box>
            
                            </Box>
        </AccordionDetails>
      </Accordion>

      <Accordion
        square
        expanded={expanded === "panel14"}
        onChange={handleChange("panel14")}
      >
        <AccordionSummary
          expandIcon={
            expanded === "panel14" ? (
              <RemoveIcon style={{ color: "white" }} />
            ) : (
              <AddIcon style={{ color: "white" }} />
            )
          }
          style={{ backgroundColor: "darkblue", color: "white" }}
        >
          <Typography>V.Mani</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box>
            
                            </Box>
        </AccordionDetails>
      </Accordion>

      <Accordion
        square
        expanded={expanded === "panel14"}
        onChange={handleChange("panel14")}
      >
        <AccordionSummary
          expandIcon={
            expanded === "panel14" ? (
              <RemoveIcon style={{ color: "white" }} />
            ) : (
              <AddIcon style={{ color: "white" }} />
            )
          }
          style={{ backgroundColor: "darkblue", color: "white" }}
        >
          <Typography>S.Sesha Talpa Sai</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box>
            
                            </Box>
        </AccordionDetails>
      </Accordion>


      <div>
                <h1 style={{ textDecoration: "underline" }}> Students</h1>
                <h2>Students Achivements</h2>
                <ul>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('STUDENT%20ACHIEVEMENTS%20-%202021-22.pdf')}`} target='__blank'>STUDENT ACHIEVEMENTS(2021-2022)</a> </li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('STUDENT%20ACHIEVEMENTS%20-%202019-20.pdf')}`} target='__blank'>STUDENT ACHIEVEMENTS(2019-2020)</a> </li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('STUDENT%20ACHIEVEMENTS%20-%202018-19.pdf')}`} target='__blank'>STUDENT ACHIEVEMENTS(2018-2019)</a> </li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('2017-18%20Ac.pdf')}`} target='__blank'>STUDENT ACHIEVEMENTS(2017-2018)</a> </li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('2016-17%20Ac.pdf')}`} target='__blank'>STUDENT ACHIEVEMENTS(2016-2017)</a> </li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('2015-16%20Ac.pdf')}`} target='__blank'>STUDENT ACHIEVEMENTS(2015-2016)</a> </li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('2014-15%20Ac.pdf')}`} target='__blank'>STUDENT ACHIEVEMENTS(2014-2015)</a> </li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('2013-14%20Ac.pdf')}`} target='__blank'>STUDENT ACHIEVEMENTS(2013-2014)</a> </li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('2012-13%20Ac.pdf')}`} target='__blank'>STUDENT ACHIEVEMENTS(2012-2013)</a> </li>

                </ul>
            </div>
    </div>
  );
};

export default CommerceAndManagementAchivements;
