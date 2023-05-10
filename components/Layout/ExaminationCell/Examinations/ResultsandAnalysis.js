import React from "react";
import { makeStyles, withStyles } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  ugHeading: {
    //fontSize:'36px',
    color: "#003494",
    textAlign: "center",
  },
});

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
    // '&:hover': {
    //     backgroundColor: '#bdbdbd87'
    // }
  },
}))(TableRow);

function createData(sno, name, designation, syllabus) {
  return { sno, name, designation, syllabus };
}

const yearRanking = [
  createData(
    "2020-2021",
    "",
    ["CLICK HERE"],
    "https://drive.google.com/file/d/1-UXrw3fV6L22WU3H5eK6vp9xXX-dpiJ5/view?usp=share_link"
  ),
  createData(
    "2019-2020",
    "",
    ["CLICK HERE"],
    "https://drive.google.com/file/d/1Az6PLZ6d5RHQOG-fqCbvxtl-8A2bP3p5/view?usp=share_link"
  ),
  createData(
    "2018-2019",
    "",
    ["CLICK HERE"],
    "https://drive.google.com/file/d/1h3xYojefLZg7fxlsTNOM9vBCGH9ylWBH/view?usp=share_link"
  ),
  createData("2017-2018", "", ["CLICK HERE"], ""),
  createData("2016-2017", "", ["CLICK HERE"], ""),
  createData("2015-2016", "", ["CLICK HERE"], ""),
  createData("2014-2015", "", ["CLICK HERE"], ""),
  createData("2013-2014", "", ["CLICK HERE"], ""),
];

const ResultsandAnalysis = () => {
  const classes = useStyles();

  return (
    <div>
      <h2 className={classes.ugHeading}>RESULT ANALYSIS</h2>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            {/* <TableRow>
                        <StyledTableCell colSpan={6} style={{ fontSize: '22px' }} align="center">Part-1</StyledTableCell>
                    </TableRow> */}
            <TableRow>
              <StyledTableCell
                style={{
                  fontSize: "22px",
                  borderRight: "1px solid #e0e0e0",
                  borderTop: "1px solid #e0e0e0",
                }}
                colSpan={5}
              >
                YEAR
              </StyledTableCell>
              <StyledTableCell colSpan={2} style={{ fontSize: "22px" }}>
                LINK
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {yearRanking.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell style={{ fontSize: "18px" }}>
                  {row.sno}
                </StyledTableCell>
                <StyledTableCell
                  style={{ fontSize: "18px", borderRight: "1px solid #e0e0e0" }}
                  colSpan={4}
                >
                  <div style={{ paddingRight: "130px" }}>
                    <a href="https://drive.google.com/file/d/1-UXrw3fV6L22WU3H5eK6vp9xXX-dpiJ5/view?usp=share_link">
                      {row.name[0]}
                    </a>
                  </div>
                </StyledTableCell>
                <StyledTableCell
                  style={{ fontSize: "18px", color: "blue" }}
                  colSpan={2}
                >
                  <div style={{ paddingBottom: "0px" }}>
                    <a href={row?.syllabus} target="__blank">
                      {row.designation[0]}
                    </a>
                  </div>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ResultsandAnalysis;
