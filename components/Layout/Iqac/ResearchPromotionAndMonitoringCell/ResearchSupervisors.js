import React from 'react'
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Avatar from '@material-ui/core/Avatar';

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

function createTable1(sno, name, designation,photo,c1) {
  return { sno, name, designation,photo, c1 };
}

const table1 = [
  createTable1('1','Dr. M. Venkateswara Rao	','Management	','https://drive.google.com/uc?id=1Kg_OJxHccLuqlMU6c3K_apG-wLY0V1ou','https://drive.google.com/file/d/1rzSRrwqUha3wsK4qp7yOd3URj8WVCge_/view?usp=share_link'),
  createTable1('2','Dr. G. Krishnaveni	','Chemistry','https://drive.google.com/uc?id=1QEjilVT1CherMy8zX5XQFlCuUuF6TXJ0','https://drive.google.com/file/d/14xWGsnA1BcIpWXb4ShjkoxNdQpDucDa8/view?usp=share_link'),
  createTable1('3','Dr. K. Kiran Kumar	','Chemistry','https://drive.google.com/uc?id=1JP0bBFFdsKNOY3bZg5STxefrI7WYVm5P','https://drive.google.com/file/d/1z_j-dHjf5Ij0zCocWixe6iLk4P_QFdPN/view?usp=share_link'),
  createTable1('4','Dr. GVSRNSA Sastry	','Commerce','https://drive.google.com/uc?id=1HPmy1cDxser2ZTVpp-IoVwqF4XKgsOVb','https://drive.google.com/file/d/1z8EM6Uty1eDu22VgWZuvIPx4zNuoxDOd/view?usp=share_link'),
  createTable1('5','Dr. K. Siva Prakasa Rao	','Commerce','https://drive.google.com/uc?id=1hI0tPCt56uZvoTyMMgLwCjwnAHrGCalX','https://drive.google.com/file/d/1mwBh-3WjJMycbGxCMegwIth95wRmCL3R/view?usp=share_link'),
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

const ResearchSupervisors = () => {
  const classes = useStyles();

  return (
    <div>
      <h3>LIST OF RESEARCH SUPERVISORS</h3>

      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">
              S.NO	
              </StyledTableCell>
              <StyledTableCell align="center">
              NAME
              </StyledTableCell>
              <StyledTableCell align="center">
              DEPARTMENT	
              </StyledTableCell> 
              <StyledTableCell align="center" colSpan={1} />
              <StyledTableCell align="center">
              RESEARCH SCHOLARS
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {table1.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell>{row.sno}</StyledTableCell>
                <StyledTableCell align="center">
                  <div>{row?.name}</div>
                </StyledTableCell>
                <StyledTableCell align="center">
                  {row.designation}
                </StyledTableCell>
                <StyledTableCell align="center">
                  <Avatar alt="KBN" src={row?.photo} className={classes.large} />
                </StyledTableCell>
                <StyledTableCell align="center">
                  <a href={row.c1} target='_blank'>View</a>
                </StyledTableCell>

              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}
export default ResearchSupervisors