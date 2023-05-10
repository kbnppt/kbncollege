import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: '#07358a',
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    '&:hover': {
      backgroundColor: '#bdbdbd87'
    }
  },
}))(TableRow);

function createData(sno, name, attachments, fee, paymentLink, fillForm) {
  return { sno, name, attachments, fee, paymentLink, fillForm };
}

const rows = [
  createData(1, 'Study Certificate	', 'ID CARD	', 'REGULAR:20 & PASSED-OUTS:50', 'https://payments.billdesk.com/bdcollect/bd/kbc/2772', 'https://docs.google.com/forms/d/e/1FAIpQLSeQE6zxX7YvvLeke5u65blGmdKLAkj-nVdKOfM44xmFIIDDeg/viewform'),
  createData(2, 'Transfer Certificate(UG)', ' ID Card, 10th Class Marks Memo(LONG MEMO), Provisional Certificate/CMM & VI SEM MARKS MEMO/HALLTICKET', '----', '----', 'https://docs.google.com/forms/d/e/1FAIpQLSdVr1JlIsED1JcpkLjap_z446ZGHMD2mHxdsjqG5X-o3rDwiA/viewform'),
  createData(3, 'Transfer Certificate(PG)', 'NO DUE,10th Class Marks Memo & Provisional Certificate', '----', '----', 'https://docs.google.com/forms/d/e/1FAIpQLSfdT8EQkA3oyfEDbbpbvZ_vzbA5QD6FNsuUZFYLfzE5y5IdHA/viewform'),
  createData(4, 'Migration', 'ID CARD	,PROVISIONAL CERTIFICATE and  TRANSFER CERTIFICATE', '150', 'https://payments.billdesk.com/bdcollect/bd/kbc/2772', 'https://docs.google.com/forms/d/e/1FAIpQLSc4sX6Eijyumg8h8tkueeEq7AH1ROr_Usy7GJonq9-A5uF0CQ/viewform'),
  createData(5, 'Migration(PG)', 'ID CARD &	PROVISIONAL CERTIFICATE', '150', 'https://payments.billdesk.com/bdcollect/bd/kbc/2772', 'https://docs.google.com/forms/d/e/1FAIpQLSer-A7q5WO3jY66Sb0NCTfuEfFrMD5BIEJr_a2Tr1Yow3fifQ/viewform'),
  createData(6, 'Bonafide Certificate  (regular students only)', 'ID CARD	& SSC', '----', '----', 'https://docs.google.com/forms/d/e/1FAIpQLSe32Ha_KY4Lyw9quDV1GIfMbj6fcowMvbC7xjr-Daby8AIZ8Q/viewform'),
  createData(7, 'Medium of instruction Certificate   (passedout students only)', 'ID CARD	& PROVISIONAL CERTIFICATE', '----', '----', 'https://docs.google.com/forms/d/e/1FAIpQLSdJ0WvHAsjrz9WVB-2dyCO7p5K-SJ4H0i5NBQraWAdYCC8Fnw/viewform'),
];

const useStyles = makeStyles((theme) => ({
  table: {
    width: "100%",
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

const OnlineServices = () => {
  const classes = useStyles();

  return (
    <div>
      <h3>Online Services</h3>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Sno</StyledTableCell>
              <StyledTableCell align="left">Online Services</StyledTableCell>
              <StyledTableCell align="left">ATTACHMENTS NOTE: (UPLOAD JPG/PDF LESS THAN 10MB)</StyledTableCell>
              <StyledTableCell align="left">FEE</StyledTableCell>
              <StyledTableCell align="left">PAYMENT LINK	</StyledTableCell>
              <StyledTableCell align="left">FILL THE FORM</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell>
                  {row.sno}
                </StyledTableCell>
                <StyledTableCell align="left">
                  <div>{row?.name}</div>
                </StyledTableCell>
                <StyledTableCell align="left">{row.attachments}</StyledTableCell>
                <StyledTableCell align="left">{row.fee}</StyledTableCell>
                <StyledTableCell align="left">
                  <a href={row.paymentLink} target={"__blank"}>CLICK HERE</a>

                </StyledTableCell>
                <StyledTableCell align="left"><a href={row.fillForm} target={"__blank"}>CLICK HERE</a></StyledTableCell>



              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default OnlineServices;
