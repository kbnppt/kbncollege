import React from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { withWidth } from "@material-ui/core";
import { blue } from "@material-ui/core/colors";

const MathsandStatisticsAchivements = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <div>
      <h1 style={{ textDecoration: "underline" }}> STAFF</h1>
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
          <Typography>M.LAKSHMI PRASANNA</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box>
            <h2 style={{ textDecoration: "underline" }}>2019-2020:</h2>
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
                    <p>NATURE OF ACTIVITY</p>
                  </th>
                  <th>
                    <p>PARTICULARS</p>
                  </th>
                  <th>
                    <p>VENUE</p>
                  </th>
                </tr>

                <tr style={{ textAlign: "center" }}>
                  <td>
                    <p>1</p>
                  </td>
                  <td>
                    <p>11th – 13th September, 2019</p>
                  </td>
                  <td>
                    <p>A short term on “Math with Mat Lab”</p>
                  </td>
                  <td>
                    <p>Acted as a Convenor for the short term course</p>
                  </td>
                  <td>
                    <p>KBN College VJA </p>
                  </td>
                </tr>
                <tr style={{ textAlign: "center" }}>
                  <td>
                    <p>2</p>
                  </td>
                  <td>
                    <p>21st – 23rd August, 2019</p>
                  </td>
                  <td>
                    <p>An event “Science Expo” organised by KBN college</p>
                  </td>
                  <td>
                    <p>Participated </p>
                  </td>
                  <td>
                    <p>KBN College VJA </p>
                  </td>
                </tr>
              </tbody>
            </table>
            <h2 style={{ textDecoration: "underline" }}>2018-2019:</h2>
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
                    <p>NATURE OF ACTIVITY</p>
                  </th>
                  <th>
                    <p>PARTICULARS</p>
                  </th>
                  <th>
                    <p>VENUE</p>
                  </th>
                </tr>

                <tr style={{ textAlign: "center" }}>
                  <td>
                    <p>1</p>
                  </td>
                  <td>
                    <p>10th – 14th December, 2018</p>
                  </td>
                  <td>
                    <p>
                      “Mini Mathematical Training and Talent Search” Programme
                      funded by NBHM
                    </p>
                  </td>
                  <td>
                    <p>Participated</p>
                  </td>
                  <td>
                    <p>KBN College VJA </p>
                  </td>
                </tr>
                <tr style={{ textAlign: "center" }}>
                  <td>
                    <p>2</p>
                  </td>
                  <td>
                    <p>22nd December, 2018</p>
                  </td>
                  <td>
                    <p>National Mathematics Day Celebrations</p>
                  </td>
                  <td>
                    <p>Participated </p>
                  </td>
                  <td>
                    <p>KBN College VJA </p>
                  </td>
                </tr>
                <tr style={{ textAlign: "center" }}>
                  <td>
                    <p>3</p>
                  </td>
                  <td>
                    <p>4th & 5th October, 2018</p>
                  </td>
                  <td>
                    <p>
                      Two – Day Science Academies Lecture Workshop on “Fluid
                      Mechanics”
                    </p>
                  </td>
                  <td>
                    <p>Participated </p>
                  </td>
                  <td>
                    <p>KBN College VJA </p>
                  </td>
                </tr>
                <tr style={{ textAlign: "center" }}>
                  <td>
                    <p>4</p>
                  </td>
                  <td>
                    <p>27th – 29th August, 2018</p>
                  </td>
                  <td>
                    <p>
                      A UGC sponsored Three – Day workshop on “R- Programming”
                    </p>
                  </td>
                  <td>
                    <p>Participated </p>
                  </td>
                  <td>
                    <p>KBN College VJA </p>
                  </td>
                </tr>
                <tr style={{ textAlign: "center" }}>
                  <td>
                    <p>5</p>
                  </td>
                  <td>
                    <p>9th – 11th August, 2018</p>
                  </td>
                  <td>
                    <p>An event “Science Expo” organised by KBN College</p>
                  </td>
                  <td>
                    <p>Participated </p>
                  </td>
                  <td>
                    <p>KBN College VJA </p>
                  </td>
                </tr>
              </tbody>
            </table>
            <h2 style={{ textDecoration: "underline" }}>2017-2018:</h2>
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
                    <p>NATURE OF ACTIVITY</p>
                  </th>
                  <th>
                    <p>PARTICULARS</p>
                  </th>
                  <th>
                    <p>VENUE</p>
                  </th>
                </tr>

                <tr style={{ textAlign: "center" }}>
                  <td>
                    <p>1</p>
                  </td>
                  <td>
                    <p>29\07\2017</p>
                  </td>
                  <td>
                    <p>National Statistical Day Celebrations</p>
                  </td>
                  <td>
                    <p>Participation</p>
                  </td>
                  <td>
                    <p>K.B.N college, Vijayawada</p>
                  </td>
                </tr>
                <tr style={{ textAlign: "center" }}>
                  <td>
                    <p>2</p>
                  </td>
                  <td>
                    <p>5\8\2017 to 7\8\2017</p>
                  </td>
                  <td>
                    <p>
                      Three day state level workshop on “Statistical pacakage
                      for the social sciences”
                    </p>
                  </td>
                  <td>
                    <p>Participation </p>
                  </td>
                  <td>
                    <p>K.B.N college, Vijayawada</p>
                  </td>
                </tr>
                <tr style={{ textAlign: "center" }}>
                  <td>
                    <p>3</p>
                  </td>
                  <td>
                    <p>21\01\2018</p>
                  </td>
                  <td>
                    <p>MATHUS EVENT</p>
                  </td>
                  <td>
                    <p>Participation </p>
                  </td>
                  <td>
                    <p>K.B.N college, Vijayawada</p>
                  </td>
                </tr>
              </tbody>
            </table>
            <h2 style={{ textDecoration: "underline" }}>2016-2017:</h2>
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
                    <p>Staff Activities</p>
                  </th>
                  <th>
                    <p>PARTICULARS</p>
                  </th>
                  <th>
                    <p>VENUE</p>
                  </th>
                </tr>

                <tr style={{ textAlign: "center" }}>
                  <td>
                    <p>1</p>
                  </td>
                  <td>
                    <p>22-12-16</p>
                  </td>
                  <td>
                    <p>
                      Department of Mathematics Organized Maths Orientation
                      Programme in Association with Andhra Pradesh Maths forum
                      to Aided School Teachers
                    </p>
                  </td>
                  <td>
                    <p>Actively Participated for the Programme</p>
                  </td>
                  <td>
                    <p>K.B.N College Vijayawada</p>
                  </td>
                </tr>
                <tr style={{ textAlign: "center" }}>
                  <td>
                    <p>2</p>
                  </td>
                  <td>
                    <p>22-02-17</p>
                  </td>
                  <td>
                    <p>
                      An Event “MATHUS” conducted by the Department of
                      Mathematics and Statistics
                    </p>
                  </td>
                  <td>
                    <p>Actively Participated for the Programme</p>
                  </td>
                  <td>
                    <p>K.B.N College Vijayawada</p>
                  </td>
                </tr>
              </tbody>
            </table>
            <h2 style={{ textDecoration: "underline" }}>2015-2016:</h2>
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
                    <p>Staff Activities</p>
                  </th>
                  <th>
                    <p>PARTICULARS</p>
                  </th>
                  <th>
                    <p>VENUE</p>
                  </th>
                </tr>

                <tr style={{ textAlign: "center" }}>
                  <td>
                    <p>1</p>
                  </td>
                  <td>
                    <p>2-6-15to 3-6-15</p>
                  </td>
                  <td>
                    <p>
                      A faculty development programme by Sri.Gampa Nageswara Rao
                      Garu
                    </p>
                  </td>
                  <td>
                    <p>Participated</p>
                  </td>
                  <td>
                    <p>K.B.N College Vijayawada</p>
                  </td>
                </tr>
                <tr style={{ textAlign: "center" }}>
                  <td>
                    <p>2</p>
                  </td>
                  <td>
                    <p>23-7-15</p>
                  </td>
                  <td>
                    <p>
                      A board of studies meeting in Montessori Mahila kalasala
                    </p>
                  </td>
                  <td>
                    <p>Attended for board of studies meeting</p>
                  </td>
                  <td>
                    <p>Montessori Mahila klasala Vijayawada</p>
                  </td>
                </tr>
                <tr style={{ textAlign: "center" }}>
                  <td>
                    <p>3</p>
                  </td>
                  <td>
                    <p>4-9-15</p>
                  </td>
                  <td>
                    <p>
                      An event “Mathus” conducted by the dept of mathematics &
                      statistics
                    </p>
                  </td>
                  <td>
                    <p>Participated </p>
                  </td>
                  <td>
                    <p>K.B.N College Vijayawada</p>
                  </td>
                </tr>
                <tr style={{ textAlign: "center" }}>
                  <td>
                    <p>4</p>
                  </td>
                  <td>
                    <p>16-11-15 to 20-11-15</p>
                  </td>
                  <td>
                    <p>
                      A short course on “Math with Mat lab” organized by the
                      dept of mathematics & statistics{" "}
                    </p>
                  </td>
                  <td>
                    <p>Actively participated</p>
                  </td>
                  <td>
                    <p>K.B.N College Vijayawada</p>
                  </td>
                </tr>
                <tr style={{ textAlign: "center" }}>
                  <td>
                    <p>5</p>
                  </td>
                  <td>
                    <p>28-11-15</p>
                  </td>
                  <td>
                    <p>
                      A UGC sponsored one day national conference on “Advances
                      in Mathematical Sciences”(AIMS-2015) by the dept of
                      mathematics & statistics
                    </p>
                  </td>
                  <td>
                    <p>Actively participated in one day national conference</p>
                  </td>
                  <td>
                    <p>K.B.N College Vijayawada</p>
                  </td>
                </tr>
                <tr style={{ textAlign: "center" }}>
                  <td>
                    <p>5</p>
                  </td>
                  <td>
                    <p>14-12-5 to 19-12-15</p>
                  </td>
                  <td>
                    <p>
                      Mini-Mathematics training and talent search programme
                      founded by national board of higher mathematics which is
                      organized by the dept of mathematics & statistics
                    </p>
                  </td>
                  <td>
                    <p>Actively involved in the programme</p>
                  </td>
                  <td>
                    <p>K.B.N College Vijayawada</p>
                  </td>
                </tr>
              </tbody>
            </table>

            <h2 style={{ textDecoration: "underline" }}>2014-2015:</h2>
            <ul>
                <li>Has participated in the Faculty-Development ProgrammeOrganised by Sri GampaNageswaraRao, TCI Senator, FirStep Education at KBN College,Vijayawada on 2nd&3rd June 2015.                </li>
                <li> Has participated in Two-Day National Seminar on “Recent Trends In Algebra and Its Applications” (NWRTAA-2015) Organised by Dept. of Mathematics On 19th& 20th Feb 2015.
               </li>

            </ul>

          </Box>
        </AccordionDetails>
      </Accordion>
      
      <div>
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
            <Typography>CH.RADHIKA </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box>
            <h2 style={{ textDecoration: "underline" }}>2019-2020:</h2>
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
                    <p>NATURE OF ACTIVITY</p>
                  </th>
                  <th>
                    <p>PARTICULARS</p>
                  </th>
                  <th>
                    <p>VENUE</p>
                  </th>
                </tr>

                <tr style={{ textAlign: "center" }}>
                  <td>
                    <p>1</p>
                  </td>
                  <td>
                    <p>11th – 13th September, 2019

</p>
                  </td>
                  <td>
                    <p>A short term on “Math with Mat Lab”</p>
                  </td>
                  <td>
                    <p>Acted as a Convenor for the short term course</p>
                  </td>
                  <td>
                    <p>KBN College VJA </p>
                  </td>
                </tr>
                <tr style={{ textAlign: "center" }}>
                  <td>
                    <p>2</p>
                  </td>
                  <td>
                    <p>21st – 23rd August, 2019</p>
                  </td>
                  <td>
                    <p>An event “Science Expo” organised by KBN college</p>
                  </td>
                  <td>
                    <p>Participated </p>
                  </td>
                  <td>
                    <p>KBN College VJA </p>
                  </td>
                </tr>
              </tbody>
            </table>
            <h2 style={{ textDecoration: "underline" }}>2018-2019:</h2>
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
                    <p>NATURE OF ACTIVITY</p>
                  </th>
                  <th>
                    <p>PARTICULARS</p>
                  </th>
                  <th>
                    <p>VENUE</p>
                  </th>
                </tr>

                <tr style={{ textAlign: "center" }}>
                  <td>
                    <p>1</p>
                  </td>
                  <td>
                    <p>10th – 14th December, 2018</p>
                  </td>
                  <td>
                    <p>
                      “Mini Mathematical Training and Talent Search” Programme
                      funded by NBHM
                    </p>
                  </td>
                  <td>
                    <p>Participated</p>
                  </td>
                  <td>
                    <p>KBN College VJA </p>
                  </td>
                </tr>
                <tr style={{ textAlign: "center" }}>
                  <td>
                    <p>2</p>
                  </td>
                  <td>
                    <p>22nd December, 2018</p>
                  </td>
                  <td>
                    <p>National Mathematics Day Celebrations</p>
                  </td>
                  <td>
                    <p>Participated </p>
                  </td>
                  <td>
                    <p>KBN College VJA </p>
                  </td>
                </tr>
                <tr style={{ textAlign: "center" }}>
                  <td>
                    <p>3</p>
                  </td>
                  <td>
                    <p>4th & 5th October, 2018</p>
                  </td>
                  <td>
                    <p>
                      Two – Day Science Academies Lecture Workshop on “Fluid
                      Mechanics”
                    </p>
                  </td>
                  <td>
                    <p>Participated </p>
                  </td>
                  <td>
                    <p>KBN College VJA </p>
                  </td>
                </tr>
                <tr style={{ textAlign: "center" }}>
                  <td>
                    <p>4</p>
                  </td>
                  <td>
                    <p>27th – 29th August, 2018</p>
                  </td>
                  <td>
                    <p>
                      A UGC sponsored Three – Day workshop on “R- Programming”
                    </p>
                  </td>
                  <td>
                    <p>Participated </p>
                  </td>
                  <td>
                    <p>KBN College VJA </p>
                  </td>
                </tr>
                <tr style={{ textAlign: "center" }}>
                  <td>
                    <p>5</p>
                  </td>
                  <td>
                    <p>9th – 11th August, 2018</p>
                  </td>
                  <td>
                    <p>An event “Science Expo” organised by KBN College</p>
                  </td>
                  <td>
                    <p>Participated </p>
                  </td>
                  <td>
                    <p>KBN College VJA </p>
                  </td>
                </tr>
              </tbody>
            </table>
            </Box>
          </AccordionDetails>
        </Accordion>
      </div>
      <div>
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
            <Typography>L. VIJAY KUMAR </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box>
              <h2 style={{ textDecoration: "underline" }}>2019-2020:</h2>
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
                    <p>NATURE OF ACTIVITY</p>
                  </th>
                  <th>
                    <p>PARTICULARS</p>
                  </th>
                  <th>
                    <p>VENUE</p>
                  </th>
                </tr>

                <tr style={{ textAlign: "center" }}>
                  <td>
                    <p>1</p>
                  </td>
                  <td>
                    <p>11th – 13th September, 2019</p>
                  </td>
                  <td>
                    <p>A short term on “Math with Mat Lab”</p>
                  </td>
                  <td>
                    <p>Acted as a Convenor for the short term course</p>
                  </td>
                  <td>
                    <p>KBN College VJA </p>
                  </td>
                </tr>
                <tr style={{ textAlign: "center" }}>
                  <td>
                    <p>2</p>
                  </td>
                  <td>
                    <p>21st – 23rd August, 2019</p>
                  </td>
                  <td>
                    <p>An event “Science Expo” organised by KBN college</p>
                  </td>
                  <td>
                    <p>Participated </p>
                  </td>
                  <td>
                    <p>KBN College VJA </p>
                  </td>
                </tr>
              </tbody>
            </table>
            <h2 style={{ textDecoration: "underline" }}>2018-2019:</h2>
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
                    <p>NATURE OF ACTIVITY</p>
                  </th>
                  <th>
                    <p>PARTICULARS</p>
                  </th>
                  <th>
                    <p>VENUE</p>
                  </th>
                </tr>

                <tr style={{ textAlign: "center" }}>
                  <td>
                    <p>1</p>
                  </td>
                  <td>
                    <p>10th – 14th December, 2018</p>
                  </td>
                  <td>
                    <p>
                      “Mini Mathematical Training and Talent Search” Programme
                      funded by NBHM
                    </p>
                  </td>
                  <td>
                    <p>Participated</p>
                  </td>
                  <td>
                    <p>KBN College VJA </p>
                  </td>
                </tr>
                <tr style={{ textAlign: "center" }}>
                  <td>
                    <p>2</p>
                  </td>
                  <td>
                    <p>22nd December, 2018</p>
                  </td>
                  <td>
                    <p>National Mathematics Day Celebrations</p>
                  </td>
                  <td>
                    <p>Participated </p>
                  </td>
                  <td>
                    <p>KBN College VJA </p>
                  </td>
                </tr>
                <tr style={{ textAlign: "center" }}>
                  <td>
                    <p>3</p>
                  </td>
                  <td>
                    <p>4th & 5th October, 2018</p>
                  </td>
                  <td>
                    <p>
                      Two – Day Science Academies Lecture Workshop on “Fluid
                      Mechanics”
                    </p>
                  </td>
                  <td>
                    <p>Participated </p>
                  </td>
                  <td>
                    <p>KBN College VJA </p>
                  </td>
                </tr>
                <tr style={{ textAlign: "center" }}>
                  <td>
                    <p>4</p>
                  </td>
                  <td>
                    <p>27th – 29th August, 2018</p>
                  </td>
                  <td>
                    <p>
                      A UGC sponsored Three – Day workshop on “R- Programming”
                    </p>
                  </td>
                  <td>
                    <p>Participated </p>
                  </td>
                  <td>
                    <p>KBN College VJA </p>
                  </td>
                </tr>
                <tr style={{ textAlign: "center" }}>
                  <td>
                    <p>5</p>
                  </td>
                  <td>
                    <p>9th – 11th August, 2018</p>
                  </td>
                  <td>
                    <p>An event “Science Expo” organised by KBN College</p>
                  </td>
                  <td>
                    <p>Participated </p>
                  </td>
                  <td>
                    <p>KBN College VJA </p>
                  </td>
                </tr>
                <tr style={{ textAlign: "center" }}>
                  <td>
                    <p>6</p>
                  </td>
                  <td>
                    <p>6th July, 2018</p>
                  </td>
                  <td>
                    <p>Career Counselling Programme to III MSCS Students.</p>
                  </td>
                  <td>
                    <p>Resource Person</p>
                  </td>
                  <td>
                    <p>KBN College VJA </p>
                  </td>
                </tr>
              </tbody>
            </table>
            <h2 style={{ textDecoration: "underline" }}>2017-2018:</h2>
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
                    <p>NATURE OF ACTIVITY</p>
                  </th>
                  <th>
                    <p>PARTICULARS</p>
                  </th>
                  <th>
                    <p>VENUE</p>
                  </th>
                </tr>

                <tr style={{ textAlign: "center" }}>
                  <td>
                    <p>1</p>
                  </td>
                  <td>
                    <p>16\09\2017 to 18\09\2017</p>
                  </td>
                  <td>
                    <p>A Three day residencial training programme on “actuarial Science, Basic Applied Statistics & Economics” Conducted by APHRDI</p>
                  </td>
                  <td>
                    <p>Participation</p>
                  </td>
                  <td>
                    <p>APHRDI, Bapatla</p>
                  </td>
                </tr>
                <tr style={{ textAlign: "center" }}>
                  <td>
                    <p>2</p>
                  </td>
                  <td>
                    <p>29\07\2017</p>
                  </td>
                  <td>
                    <p>National Statistical Day Celebrations</p>
                  </td>
                  <td>
                    <p>Participation</p>
                  </td>
                  <td>
                    <p>K.B.N college, Vijayawada</p>
                  </td>
                </tr>
                <tr style={{ textAlign: "center" }}>
                  <td>
                    <p>3</p>
                  </td>
                  <td>
                    <p>5\8\2017 to 7\8\2017</p>
                  </td>
                  <td>
                    <p>
                      Three day state level workshop on “Statistical pacakage
                      for the social sciences”
                    </p>
                  </td>
                  <td>
                    <p>Participation </p>
                  </td>
                  <td>
                    <p>K.B.N college, Vijayawada</p>
                  </td>
                </tr>
                <tr style={{ textAlign: "center" }}>
                  <td>
                    <p>4</p>
                  </td>
                  <td>
                    <p>21\01\2018</p>
                  </td>
                  <td>
                    <p>MATHUS EVENT</p>
                  </td>
                  <td>
                    <p>Participation </p>
                  </td>
                  <td>
                    <p>K.B.N college, Vijayawada</p>
                  </td>
                </tr>
              </tbody>
            </table>
            <h2 style={{ textDecoration: "underline" }}>2016-2017:</h2>
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
                    <p>Staff Activities</p>
                  </th>
                  <th>
                    <p>PARTICULARS</p>
                  </th>
                  <th>
                    <p>VENUE</p>
                  </th>
                </tr>

                <tr style={{ textAlign: "center" }}>
                  <td>
                    <p>1</p>
                  </td>
                  <td>
                    <p>22-12-16</p>
                  </td>
                  <td>
                    <p>
                      Department of Mathematics Organized Maths Orientation
                      Programme in Association with Andhra Pradesh Maths forum
                      to Aided School Teachers
                    </p>
                  </td>
                  <td>
                    <p>Actively Participated for the Programme</p>
                  </td>
                  <td>
                    <p>K.B.N College Vijayawada</p>
                  </td>
                </tr>
                <tr style={{ textAlign: "center" }}>
                  <td>
                    <p>2</p>
                  </td>
                  <td>
                    <p>22-02-17</p>
                  </td>
                  <td>
                    <p>
                      An Event “MATHUS” conducted by the Department of
                      Mathematics and Statistics
                    </p>
                  </td>
                  <td>
                    <p>Actively Participated for the Programme</p>
                  </td>
                  <td>
                    <p>K.B.N College Vijayawada</p>
                  </td>
                </tr>
              </tbody>
            </table>

            </Box>
          </AccordionDetails>
        </Accordion>
      </div>
      <div>
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
            <Typography> G.SURYANARAYANA </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box>
            <h2 style={{ textDecoration: "underline" }}>2019-2020:</h2>
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
                    <p>NATURE OF ACTIVITY</p>
                  </th>
                  <th>
                    <p>PARTICULARS</p>
                  </th>
                  <th>
                    <p>VENUE</p>
                  </th>
                </tr>

                <tr style={{ textAlign: "center" }}>
                  <td>
                    <p>1</p>
                  </td>
                  <td>
                    <p>11th – 13th September, 2019</p>
                  </td>
                  <td>
                    <p>A short term on “Math with Mat Lab”</p>
                  </td>
                  <td>
                    <p>Acted as a Convenor for the short term course</p>
                  </td>
                  <td>
                    <p>KBN College VJA </p>
                  </td>
                </tr>
                <tr style={{ textAlign: "center" }}>
                  <td>
                    <p>2</p>
                  </td>
                  <td>
                    <p>21st – 23rd August, 2019</p>
                  </td>
                  <td>
                    <p>An event “Science Expo” organised by KBN college</p>
                  </td>
                  <td>
                    <p>Participated </p>
                  </td>
                  <td>
                    <p>KBN College VJA </p>
                  </td>
                </tr>
              </tbody>
            </table>
            <h2 style={{ textDecoration: "underline" }}>2018-2019:</h2>
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
                    <p>NATURE OF ACTIVITY</p>
                  </th>
                  <th>
                    <p>PARTICULARS</p>
                  </th>
                  <th>
                    <p>VENUE</p>
                  </th>
                </tr>

                <tr style={{ textAlign: "center" }}>
                  <td>
                    <p>1</p>
                  </td>
                  <td>
                    <p>10th – 14th December, 2018</p>
                  </td>
                  <td>
                    <p>
                      “Mini Mathematical Training and Talent Search” Programme
                      funded by NBHM
                    </p>
                  </td>
                  <td>
                    <p>Participated</p>
                  </td>
                  <td>
                    <p>KBN College VJA </p>
                  </td>
                </tr>
                <tr style={{ textAlign: "center" }}>
                  <td>
                    <p>2</p>
                  </td>
                  <td>
                    <p>22nd December, 2018</p>
                  </td>
                  <td>
                    <p>National Mathematics Day Celebrations</p>
                  </td>
                  <td>
                    <p>Participated </p>
                  </td>
                  <td>
                    <p>KBN College VJA </p>
                  </td>
                </tr>
                <tr style={{ textAlign: "center" }}>
                  <td>
                    <p>3</p>
                  </td>
                  <td>
                    <p>4th & 5th October, 2018</p>
                  </td>
                  <td>
                    <p>
                      Two – Day Science Academies Lecture Workshop on “Fluid
                      Mechanics”
                    </p>
                  </td>
                  <td>
                    <p>Participated </p>
                  </td>
                  <td>
                    <p>KBN College VJA </p>
                  </td>
                </tr>
                <tr style={{ textAlign: "center" }}>
                  <td>
                    <p>4</p>
                  </td>
                  <td>
                    <p>27th – 29th August, 2018</p>
                  </td>
                  <td>
                    <p>
                      A UGC sponsored Three – Day workshop on “R- Programming”
                    </p>
                  </td>
                  <td>
                    <p>Participated </p>
                  </td>
                  <td>
                    <p>KBN College VJA </p>
                  </td>
                </tr>
                <tr style={{ textAlign: "center" }}>
                  <td>
                    <p>5</p>
                  </td>
                  <td>
                    <p>9th – 11th August, 2018</p>
                  </td>
                  <td>
                    <p>An event “Science Expo” organised by KBN College</p>
                  </td>
                  <td>
                    <p>Participated </p>
                  </td>
                  <td>
                    <p>KBN College VJA </p>
                  </td>
                </tr>
              </tbody>
            </table>
            <h2 style={{ textDecoration: "underline" }}>2017-2018:</h2>
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
                    <p>NATURE OF ACTIVITY</p>
                  </th>
                  <th>
                    <p>PARTICULARS</p>
                  </th>
                  <th>
                    <p>VENUE</p>
                  </th>
                </tr>

                <tr style={{ textAlign: "center" }}>
                  <td>
                    <p>1</p>
                  </td>
                  <td>
                    <p>29\07\2017</p>
                  </td>
                  <td>
                    <p>National Statistical Day Celebrations</p>
                  </td>
                  <td>
                    <p>Participation</p>
                  </td>
                  <td>
                    <p>K.B.N college, Vijayawada</p>
                  </td>
                </tr>
                <tr style={{ textAlign: "center" }}>
                  <td>
                    <p>2</p>
                  </td>
                  <td>
                    <p>5\8\2017 to 7\8\2017</p>
                  </td>
                  <td>
                    <p>
                      Three day state level workshop on “Statistical pacakage
                      for the social sciences”
                    </p>
                  </td>
                  <td>
                    <p>Participation </p>
                  </td>
                  <td>
                    <p>K.B.N college, Vijayawada</p>
                  </td>
                </tr>
                <tr style={{ textAlign: "center" }}>
                  <td>
                    <p>3</p>
                  </td>
                  <td>
                    <p>21\01\2018</p>
                  </td>
                  <td>
                    <p>MATHUS EVENT</p>
                  </td>
                  <td>
                    <p>Participation </p>
                  </td>
                  <td>
                    <p>K.B.N college, Vijayawada</p>
                  </td>
                </tr>
              </tbody>
            </table>
            <h2 style={{ textDecoration: "underline" }}>2016-2017:</h2>
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
                    <p>Staff Activities</p>
                  </th>
                  <th>
                    <p>PARTICULARS</p>
                  </th>
                  <th>
                    <p>VENUE</p>
                  </th>
                </tr>

                <tr style={{ textAlign: "center" }}>
                  <td>
                    <p>1</p>
                  </td>
                  <td>
                    <p>22-12-16</p>
                  </td>
                  <td>
                    <p>
                      Department of Mathematics Organized Maths Orientation
                      Programme in Association with Andhra Pradesh Maths forum
                      to Aided School Teachers
                    </p>
                  </td>
                  <td>
                    <p>Actively Participated for the Programme</p>
                  </td>
                  <td>
                    <p>K.B.N College Vijayawada</p>
                  </td>
                </tr>
                <tr style={{ textAlign: "center" }}>
                  <td>
                    <p>2</p>
                  </td>
                  <td>
                    <p>22-02-17</p>
                  </td>
                  <td>
                    <p>
                      An Event “MATHUS” conducted by the Department of
                      Mathematics and Statistics
                    </p>
                  </td>
                  <td>
                    <p>Actively Participated for the Programme</p>
                  </td>
                  <td>
                    <p>K.B.N College Vijayawada</p>
                  </td>
                </tr>
              </tbody>
            </table>
                        </Box>
          </AccordionDetails>
        </Accordion>
      </div>
      <div>
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
            <Typography> K.VANAMA DEVI </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box>
            <h2 style={{ textDecoration: "underline" }}>2019-2020:</h2>
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
                    <p>NATURE OF ACTIVITY</p>
                  </th>
                  <th>
                    <p>PARTICULARS</p>
                  </th>
                  <th>
                    <p>VENUE</p>
                  </th>
                </tr>

                <tr style={{ textAlign: "center" }}>
                  <td>
                    <p>1</p>
                  </td>
                  <td>
                    <p>11th – 13th September, 2019</p>
                  </td>
                  <td>
                    <p>A short term on “Math with Mat Lab”</p>
                  </td>
                  <td>
                    <p>Acted as a Convenor for the short term course</p>
                  </td>
                  <td>
                    <p>KBN College VJA </p>
                  </td>
                </tr>
                <tr style={{ textAlign: "center" }}>
                  <td>
                    <p>2</p>
                  </td>
                  <td>
                    <p>21st – 23rd August, 2019</p>
                  </td>
                  <td>
                    <p>An event “Science Expo” organised by KBN college</p>
                  </td>
                  <td>
                    <p>Participated </p>
                  </td>
                  <td>
                    <p>KBN College VJA </p>
                  </td>
                </tr>
              </tbody>
            </table>
            <h2 style={{ textDecoration: "underline" }}>2018-2019:</h2>
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
                    <p>NATURE OF ACTIVITY</p>
                  </th>
                  <th>
                    <p>PARTICULARS</p>
                  </th>
                  <th>
                    <p>VENUE</p>
                  </th>
                </tr>

               
                <tr style={{ textAlign: "center" }}>
                  <td>
                    <p>1</p>
                  </td>
                  <td>
                    <p>22nd December, 2018</p>
                  </td>
                  <td>
                    <p>National Mathematics Day Celebrations</p>
                  </td>
                  <td>
                    <p>Participated </p>
                  </td>
                  <td>
                    <p>KBN College VJA </p>
                  </td>
                </tr>
                <tr style={{ textAlign: "center" }}>
                  <td>
                    <p>2</p>
                  </td>
                  <td>
                    <p>10th – 14th December, 2018</p>
                  </td>
                  <td>
                    <p>
                      “Mini Mathematical Training and Talent Search” Programme
                      funded by NBHM
                    </p>
                  </td>
                  <td>
                    <p>Participated</p>
                  </td>
                  <td>
                    <p>KBN College VJA </p>
                  </td>
                </tr>
                <tr style={{ textAlign: "center" }}>
                  <td>
                    <p>3</p>
                  </td>
                  <td>
                    <p>4th & 5th October, 2018</p>
                  </td>
                  <td>
                    <p>
                      Two – Day Science Academies Lecture Workshop on “Fluid
                      Mechanics”
                    </p>
                  </td>
                  <td>
                    <p>Participated </p>
                  </td>
                  <td>
                    <p>KBN College VJA </p>
                  </td>
                </tr>
                <tr style={{ textAlign: "center" }}>
                  <td>
                    <p>4</p>
                  </td>
                  <td>
                    <p>27th – 29th August, 2018</p>
                  </td>
                  <td>
                    <p>
                      A UGC sponsored Three – Day workshop on “R- Programming”
                    </p>
                  </td>
                  <td>
                    <p>Participated </p>
                  </td>
                  <td>
                    <p>KBN College VJA </p>
                  </td>
                </tr>
                <tr style={{ textAlign: "center" }}>
                  <td>
                    <p>5</p>
                  </td>
                  <td>
                    <p>9th – 11th August, 2018</p>
                  </td>
                  <td>
                    <p>An event “Science Expo” organised by KBN College</p>
                  </td>
                  <td>
                    <p>Participated </p>
                  </td>
                  <td>
                    <p>KBN College VJA </p>
                  </td>
                </tr>
              </tbody>
            </table>
            <h2 style={{ textDecoration: "underline" }}>2012-2013:</h2>
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
                    <p>Activity</p>
                  </th>
                  <th>
                    <p>Workshop/Seminar</p>
                  </th>
                  <th>
                    <p>Topic</p>
                  </th>
                  <th>
                    <p>VENUE</p>
                  </th>
                </tr>

                <tr style={{ textAlign: "center" }}>
                  <td>
                    <p>1</p>
                  </td>
                  <td>
                    <p>10-Nov-12</p>
                  </td>
                  <td>
                    <p>
                    Participation
                    </p>
                  </td>
                  <td>
                    <p>Workshop</p>
                  </td>
                  <td>
                    <p>Application of Mathematics.</p>
                  </td>
                  <td>
                    <p>Nalanda Degree College Vijayawada</p>
                  </td>
                </tr>
                <tr style={{ textAlign: "center" }}>
                  <td>
                    <p>2</p>
                  </td>
                  <td>
                    <p>23-7-15</p>
                  </td>
                  <td>
                    <p>
                      A board of studies meeting in Montessori Mahila kalasala
                    </p>
                  </td>
                  <td>
                    <p>Attended for board of studies meeting</p>
                  </td>
                  <td>
                    <p>Montessori Mahila klasala Vijayawada</p>
                  </td>
                </tr>
                <tr style={{ textAlign: "center" }}>
                  <td>
                    <p>3</p>
                  </td>
                  <td>
                    <p>4-9-15</p>
                  </td>
                  <td>
                    <p>
                      An event “Mathus” conducted by the dept of mathematics &
                      statistics
                    </p>
                  </td>
                  <td>
                    <p>Participated </p>
                  </td>
                  <td>
                    <p>K.B.N College Vijayawada</p>
                  </td>
                </tr>
                <tr style={{ textAlign: "center" }}>
                  <td>
                    <p>4</p>
                  </td>
                  <td>
                    <p>16-11-15 to 20-11-15</p>
                  </td>
                  <td>
                    <p>
                      A short course on “Math with Mat lab” organized by the
                      dept of mathematics & statistics{" "}
                    </p>
                  </td>
                  <td>
                    <p>Actively participated</p>
                  </td>
                  <td>
                    <p>K.B.N College Vijayawada</p>
                  </td>
                </tr>
                <tr style={{ textAlign: "center" }}>
                  <td>
                    <p>5</p>
                  </td>
                  <td>
                    <p>28-11-15</p>
                  </td>
                  <td>
                    <p>
                      A UGC sponsored one day national conference on “Advances
                      in Mathematical Sciences”(AIMS-2015) by the dept of
                      mathematics & statistics
                    </p>
                  </td>
                  <td>
                    <p>Actively participated in one day national conference</p>
                  </td>
                  <td>
                    <p>K.B.N College Vijayawada</p>
                  </td>
                </tr>
                <tr style={{ textAlign: "center" }}>
                  <td>
                    <p>5</p>
                  </td>
                  <td>
                    <p>14-12-5 to 19-12-15</p>
                  </td>
                  <td>
                    <p>
                      Mini-Mathematics training and talent search programme
                      founded by national board of higher mathematics which is
                      organized by the dept of mathematics & statistics
                    </p>
                  </td>
                  <td>
                    <p>Actively involved in the programme</p>
                  </td>
                  <td>
                    <p>K.B.N College Vijayawada</p>
                  </td>
                </tr>
              </tbody>
            </table>
            </Box>
          </AccordionDetails>
        </Accordion>
      </div>
      <div>
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
            <Typography>A.S.V. PRASAD </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box>
             
            </Box>
          </AccordionDetails>
        </Accordion>
      </div>
      <div>
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
            <Typography>Y. RAVI BABU</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box>
              
            </Box>
          </AccordionDetails>
        </Accordion>
      </div>
      <div>
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
            <Typography>CH. MAHINDAH</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box>
              
            </Box>
          </AccordionDetails>
        </Accordion>
      </div>
      <div>
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
            <Typography>K.PRADEEP SAI</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box>
              
            </Box>
          </AccordionDetails>
        </Accordion>
      </div>
      <div>
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
            <Typography>V.N.V.S.S.S. RAMANJANEYULU V. MANJULA</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box>
              
            </Box>
          </AccordionDetails>
        </Accordion>
      </div>
      <div>
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
            <Typography> V. MANJULA</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box>
              
            </Box>
          </AccordionDetails>
        </Accordion>
      </div>
      <div>
        <h1 style={{ textDecoration: "underline" }}>STUDENTS </h1>
        <h2>STUDENT ACHIEVEMENTS of M.C.A.</h2>
        <ul>
          <li style={{ color: "Highlight" }}>
            <a
              style={{ color: "Highlight" }}
              href="https://drive.google.com/uc?id=1MkuRp5j0HuXgSWahyv4SkTc64j1NXitp"
            >
              STUDENT ACHIVEMENTS(2017-2018)
            </a>
          </li>
          <li style={{ color: "Highlight" }}>
            <a
              style={{ color: "Highlight" }}
              href="https://drive.google.com/uc?id=18486rX4YwU9bA5LC7YG64bU_PizSjlRi"
              target="__blank"
            >
              STUDENT ACHIVEMENTS(2016-2017)
            </a>
          </li>
          <li style={{ color: "Highlight" }}>
            <a
              style={{ color: "Highlight" }}
              href="https://drive.google.com/uc?id=14qfxMSAJa4duQUb0cOYf6rwd90yT-Qrq"
              target="__blank"
            >
              STUDENT ACHIVEMENTS(2015-2016)
            </a>
          </li>
          <li style={{ color: "Highlight" }}>
            <a
              style={{ color: "Highlight" }}
              href="https://drive.google.com/uc?id=1BcXFV4em6NROhjQVrv0sdNOabOyKimv9"
              target="__blank"
            >
              STUDENT ACHIVEMENTS(2014-2015)
            </a>
          </li>
          <li style={{ color: "Highlight" }}>
            <a
              style={{ color: "Highlight" }}
              href="https://drive.google.com/uc?id=1UnZVDdn_MoqsV8pjy_tQSOTNUqF68aaf"
              target="__blank"
            >
              STUDENT ACHIVEMENTS(2013-2014)
            </a>
          </li>
          <li style={{ color: "Highlight" }}>
            <a
              style={{ color: "Highlight" }}
              href="https://drive.google.com/uc?id=1jpZ_a_APAMIYZo6xaB5TajnQMNUPbccF"
              target="__blank"
            >
              STUDENT ACHIEVEMENTS(2012-2013)
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MathsandStatisticsAchivements;
