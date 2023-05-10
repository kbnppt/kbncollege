import React from "react";
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

function createTable1(sno, name, designation,c1,c2,c3, c4) {
  return { sno, name, designation, c1,c2,c3, c4 };
}

const table1 = [
  createTable1(`The Phonetics of English and the Spoken English: A Phonetic Study on the abilities of English Lecturers in Andhra Pradesh`,`Dr.H.NARENDRA KUMAR`,`Non-Government`,`English`,`2021`,`Rs.40,000`,`12 months`),
  createTable1(`Mango Fruit Detection & Counting using CNN`,`P. RAVINDRA`,`Non-Government`,`Computer Science`,`2021`,`Rs.40,000`,`12 months`),
  createTable1(`Coastal Lagoons, Esturies and Coral Reefs: Vital Coastal Ecosystems providing a wide array of services and its threats`,`Dr. SK. CHAND BASHA`,`Non-Government`,`ZOOLOGY`,`2020`,`Rs.40,000`,`12 months`),
  createTable1(`Simultaneous Estimation of Aflatoxins (B1, B2, G1, and G2 by Liquid Chromatography coupled with Mass Sepctrometry (LC-MS) in Corn Samples)`,`Dr.G.KRISHNAVENI`,`Non-Government`,`CHEMISTRY`,`2020`,`Rs.40,000`,`12 months`),
  createTable1(`A Modified Feistel Cipher to encrypt the Text information using DNA Codons with XOR Operation`,`Mrs. P. Bharathi Devi`,`KBN College Management`,`Computer Science`,`2017`,`Rs.33,000`,`18 months`),
  createTable1(`Decision Support System for Rural Health Care and Diagnosing Services.`,`Mrs. Shamim`,`KBN College Management`,`Computer Science`,`2017`,`Rs.33,000`,`18 months`),
  createTable1(`A Study on Employee Welfare and Social Security Benefits in Power Sector with Special Reference to Krishna District.`,`Ms. D. Lakshmi Pratyusha`,`KBN College Management`,`MBA`,`2017`,`Rs.33,000`,`18 months`),
  createTable1(`Simultaneous UV Spectrophotometric and First order derivative determination of combination drugs and their stability studies`,`Dr. K. Kiran Kumar`,`KBN College Management`,`Chemistry`,`2017`,`Rs.18,000`,`18 months`),
  createTable1(`Studies on Air Pollution Tolerance of Selected Plants in Vijayawada City, India`,`Dr. G. Krishnaveni`,`KBN College Management`,`Chemistry`,`2017`,`Rs.10,000`,`18 months`),
  createTable1(`Performance Analysis of MAC layer on Saturation Throughput`,`B. Gantaiah`,`KBN College Management`,`Computer Science`,`2017`,`Rs.30,000`,`18 months`),
  createTable1(`Customer Switching Behaviour in Telecommunication Sector with Special Reference to Vijayawada in Andhra Pradesh`,`S. Venkatesh`,`KBN College Management`,`MBA`,`2017`,`Rs.30,000`,`18 months`),
  createTable1(`Stability indicating RP-HPLC method for simultaneous determination of Neomycine and Betamethasone`,`M. Siva Kishore`,`KBN College Management`,`Chemistry`,`2017`,`Rs.19,000`,`18 months`),
  createTable1(`A Study on the quality of work life in Narla Tata Rao Thermal Power Station (NTTPS), Vijayawada`,`A. Ravi Kiran`,`KBN College Management`,`MBA`,`2017`,`Rs.30,000`,`18 months`),
  createTable1(`A Study on Job Satisfaction of Women Employees in South Central Railways`,`V.G.V. Rajani`,`KBN College Management`,`18 Months &  MBA`,`2017`,`Rs.30,000`,`18 months`),
  createTable1(`Invitation to Collaborate`,`Ch. Suhasini`,`KBN College Management`,`Computer Science`,`2017`,`Rs.30,000`,`18 months`),
  createTable1(`A Study on Risk Management with Option Strategies with references to IT Sector`,`M. Tulasinadh`,`KBN College Management`,`MBA`,`2017`,`Rs.30,000`,`18 months`),
  createTable1(`Emotional Intelligence among Nurses in Private Hospital of Vijayawada – An Empirical Study`,`I.A.R. Rajeswari`,`KBN College Management`,`MBA`,`2017`,`Rs.30,000`,`18 months`),
  createTable1(`Role of E-Smart Villages in India`,`V. T. Ram Pavan Kumar`,`KBN College Management`,`Computer Science`,`2017`,`Rs.30,000`,`18 months`),
  createTable1(`Financial Inclusion in Rural India - A Casw Study of Ambapuram Village of Andhra Pradesh`,`Prof. V. Jyothi`,`KBN College Management`,`MBA`,`2017`,`Rs.35,000`,`18 months`),
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

const Management = () => {
  const classes = useStyles();

  return (
    <div>
      <h4>Management</h4>

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
                
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
export default Management;
