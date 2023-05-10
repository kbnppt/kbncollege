import React from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import Box from "@material-ui/core/Box";

const PhysicalEducationAchivements = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <div>
      <h2 style={{ textAlign: "center", color: "#2e69d6" }}>
      DEPARTMENT OF PHYSICAL EDUCATION
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
            <Typography>D.HEMACHANDRA RAO</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box>
             
            </Box>
          </AccordionDetails>
        </Accordion>
      </div>
      


      <div>
                <h1 style={{ textDecoration: "underline" }}> Students</h1>
                <h2>Students Achivements</h2>
                <h4>STUDENT ACHIEVEMENTS(2021-2022)</h4>

                <ul>
                    <li>Mr P. Bharath Kumar I B. Com.TP, bagged Silver Medal in National Power Lifting Champion ship held at Gazia Waranasi, U.P. State INDIA. The Record in Squad lift 210 kgs. and total cleared record is 525 Kgs, on 21st March, 2021.  </li>
                    <li>Men Handball Players participated and bagged Bronze medal in A.P. State Seniors Handball Championship held at Kakinada from 19th to 21st March, 2021.  </li>
                    <li> Ms. R.Kajol Sunar l B. Com. (Gen), participated National Level Table Tennis Championship held at Madhya Pradesh, Indoor on 14th March, 2021. </li>
                    <li> KBN College Handball team represented Krishna District Women Handball Team in Senior AP State Women’s Handball Championship held at Nandyal, Kurnool District on 8th March, 2021 and secured 3rd Place. </li>
                    <li>Mr. P. Arun Reddy, III B.Sc. (MECS), Mr. L. Bharath Manikanta Raju, II B.Com., students selected for AP State Swimming Championship to be held at West Godavari District on 28th February, 2021. Mr. P. Arun Reddy got All India Inter-University 10th Rank and Mr. L. Bharath Manikanta Raju won Silver Medal National Level Water polo.  </li>
                    <li> Ms. R.Kajol Sunar l B. Com. (Gen), participated in 82nd Senior National Table Tennis Championship at Haryana, played against the MP state and won the match 3_2 points. She also won the match played against Jharkhand state and she entered into the qualified round on 16th February, 2021. </li>

                </ul>
            </div>
    </div>
  );
};

export default PhysicalEducationAchivements;
