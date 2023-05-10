import React from 'react'
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#07358a",
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    "&:hover": {
      backgroundColor: "#bdbdbd87",
    },
  },
}))(TableRow);

function createTable1(sno, name, designation,c1,c2,c3, c4,c5,c6) {
  return { sno, name, designation, c1,c2,c3, c4,c5,c6 };
}

const table1 = [
  createTable1(
    `“Comparative study on impact of stress on job deliverables and stress management abilities in secondary school and college teachers” `,
   `GVSRNISA Sastry`,
    `Government`, `Commerce`, `October, 2016`, `Rs.1,70,000`, `18 months`, `Link`, `Report link`),
  createTable1(
    `A Clock Crossing Coupling  approach in one post Synthesis of fused 1-2-3 Triazoles`,
     `Dr. K. Kiran Kumar`,  `Government`,`Chemistry`, `October, 2016`, `Rs.1,10,000`, `18 months`,`Link`, `Report link`),
  createTable1(
    `“Reflective learning practice to enhance the quality of education using cognitive learning techniques”`,
     `K. Anilambica`,
      `Government`, 
      `Commerce & Management`,
      `January, 2015`, `Rs.60,000`,  `18 months`,``, ``),
  createTable1(
    `“A Comparative analysis of consumer perception on brand preferences   of two-wheelers in rural & urban markets  in Vijayawada of Krishna district, A.P `,
     `B. Prabhakar`, `Government`, `Business Administration`,
     `January, 2015`,
      `Rs.95,000`,  `18 months`,``, ``),
  createTable1(
    `“Emotional intelligence- A study in Banks”`,
     `Dr. Mazharunnisa Begum`, `Government`, `Business Administration`,`January, 2015`, `Rs.1,00,000`,  `18 months`,``, ``),
  createTable1(
    `Evaluation of excess properties in  Binary organic liquid mixtures`,
     `J. Panduranga Rao`, `Government`, `Physics`,`January, 2015`, `Rs.1,70,000`,  `18 months`,``, ``),
  createTable1(`Post almost Distributive lattices`, `Dr. K. Naveen Kumar`, `Government`, `Mathematics`,`March, 2014`, `Rs. 3,25,000`,  `18 months`,``, ``),
  createTable1(`“Challenges and opportunities of women entrepreneurs in AP with special reference to Krishna Dist.” `,
   `Mrs. A Krishna Priya`,
    `Government`, `Commerce`,`March 2012`, `Rs.80,000 – 00`,  `18 months`,``, ``),
  createTable1(`“Identification of VTPS Pollution effect on  surrounding villages”`, `Dr. G. Krishna Veni`, `Government`, `Chemistry`,`March 2012`, `Rs.75,000 – 00`,  `18 months`,``, ``),
  createTable1(`“PLL Based frequency synthesizer for wireless Application”`, `Dr. P. Krishna Murthy`, `Government`, `Physics`,`February 2012`, `Rs.1,70,000`,  `18 months`,``, ``),
  createTable1(`“Understanding the fallacies in Telugu? Regional medium students  communication/writing skills: A Remedial Approach”`, `Dr. Ch. Anuradha`, `Government`, `English`,`February 2012`, `Rs.1,00,000`,  `18 months`,``, ``),
];

const useStyles = makeStyles((theme) => ({
  table: {
    width: "100%",
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  stylesText: {
    textAlign: "justify",
  },
}));

 const OtherFundingAgencies = () => {
  const classes = useStyles();

  return (
    <div>
      <h4>MINOR RESEARCH PROJECTS SANCTIONED BY UNIVERSITY GRANTS COMMISSION (UGC)</h4>
      
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">
                Name of the Project/ Endowments, Chairs
              </StyledTableCell>
              <StyledTableCell align="center">
                Name of the Principal Investigator/ Co Investigator
              </StyledTableCell>
              <StyledTableCell align="center">
                Type (Government/Non-Government)
              </StyledTableCell>
              <StyledTableCell align="center">
                Department of Principal Investigator/ Co Investigator
              </StyledTableCell>
              <StyledTableCell align="center">Year of Award</StyledTableCell>
              <StyledTableCell align="center">
                Funds provided (INR in lakhs)
              </StyledTableCell>
              <StyledTableCell align="center">
                Duration of the project
              </StyledTableCell>
              <StyledTableCell align="center">Link</StyledTableCell>
              <StyledTableCell align="center">UGCReports</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {table1.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell>{row.sno}</StyledTableCell>
                <StyledTableCell align="left">
                  <div>{row?.name}</div>
                </StyledTableCell>
                <StyledTableCell align="left">
                  {row.designation}
                </StyledTableCell>
                <StyledTableCell align="left">
                  {row.c1}
                </StyledTableCell>
                <StyledTableCell align="left">
                  {row.c2}
                </StyledTableCell>
                <StyledTableCell align="left">
                  {row.c3}
                </StyledTableCell>
                <StyledTableCell align="left">
                  {row.c4}
                </StyledTableCell>
                <StyledTableCell align="left">
                  {row.c5}
                </StyledTableCell>
                <StyledTableCell align="left">
                  {row.c6}
                </StyledTableCell>
                
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}
export default OtherFundingAgencies