import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { Card } from '@material-ui/core';
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

function createTable1(sno, name, designation) {
  return { sno, name, designation };
}

const table1 = [
  createTable1(1, 'Dr. V. Narayana Rao', 'Principal –Chairman'),
  createTable1(2, 'Sri P. L. Ramesh', 'Vice-Principal –Vice-Chairman'),
  createTable1(3, 'Sri Vijayababu Tekkem', 'Vice-Principal –Vice-Chairman'),
  createTable1(4, 'Sri Sk. Ismaiel Ali Basha', 'Head, Dept. of Botany, Convenor'),
  createTable1(5, 'Dr. Sk. Chand Basha  ', 'Head, Dept. of Zoology, Member'),
  createTable1(6, 'Dr. T. Bhagya Kumar', 'Lecturer in Chemistry, Member'),
  createTable1(7, 'Mr. M. Dinesh', 'III B.Sc. (CBZ), Student Member'),
  createTable1(8, 'Ms. T. Durga Siva Sree', 'III B.Sc. (CBZ), Student Member'),
  createTable1(9, 'Mr. P. Durga Ganesh', 'II B.Sc. (CBZ), Student Member'),
  createTable1(10, 'Ms. K. Hemalatha', 'II B.Sc. (CBZ), Student Member  '),
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

const EcoClub = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <h2>Eco Club</h2>
      <h3>Year of Establishment: 2012</h3>
      <h4>      Importance of the Club:</h4>
      <p>
        ECO club plays an important role in creating Environmental awareness among the future generation. It is a platform where we get knowledge about environment. It also enables the student to be sensitive towards environmental problems. It educates the students about their environment. It creates a clean and green consciousness among the students and through various innovative methods. It involves them in efforts to preserve environment.
      </p>
      <Card style={{ padding: '1rem' }}>
        <p>Details of the Convenor: Ms. Ch. Radhika ,Head, Dept. of Botany</p>
        <p>Number:
          8977015719</p>
        <p>Mail id:
          chalamalasettiradhika@gmail.com</p>
      </Card>

      <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')} style={{ margin: '1rem 0' }}>
        <AccordionSummary
          expandIcon={expanded === 'panel1' ? <RemoveIcon style={{ color: "white" }} /> : <AddIcon style={{ color: "white" }} />}
          style={{ backgroundColor: "darkblue", color: "white" }}
        >
          <Typography >Green Audit Report</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div>
            Green Audit Report
          </div>
        </AccordionDetails>
      </Accordion>

      <Accordion square expanded={expanded === 'panel2'} onChange={handleChange('panel2')} style={{ margin: '1rem 0' }}>
        <AccordionSummary
          expandIcon={expanded === 'panel2' ? <RemoveIcon style={{ color: "white" }} /> : <AddIcon style={{ color: "white" }} />}
          style={{ backgroundColor: "darkblue", color: "white" }}
        >
          <Typography >Plastic Garden</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div>
            <img src='./gif/plastic.gif' alt='' style={{ height: 'auto', width: '300px' }} />
          </div>
        </AccordionDetails>
      </Accordion>

      <Accordion square expanded={expanded === 'panel3'} onChange={handleChange('panel3')} style={{ margin: '1rem 0' }}>
        <AccordionSummary
          expandIcon={expanded === 'panel3' ? <RemoveIcon style={{ color: "white" }} /> : <AddIcon style={{ color: "white" }} />}
          style={{ backgroundColor: "darkblue", color: "white" }}
        >
          <Typography >Ganapathi Vanam</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div>
            <img src='./gif/ganapathi.gif' alt='' style={{ height: 'auto', width: '300px' }} />
          </div>
        </AccordionDetails>
      </Accordion>

      <Accordion square expanded={expanded === 'panel4'} onChange={handleChange('panel4')} style={{ margin: '1rem 0' }}>
        <AccordionSummary
          expandIcon={expanded === 'panel4' ? <RemoveIcon style={{ color: "white" }} /> : <AddIcon style={{ color: "white" }} />}
          style={{ backgroundColor: "darkblue", color: "white" }}
        >
          <Typography >Danvantari Vanam</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div>
            <img src='./gif/danvan.gif' alt='' style={{ height: 'auto', width: '300px' }} />

          </div>
        </AccordionDetails>
      </Accordion>

      <Accordion square expanded={expanded === 'panel5'} onChange={handleChange('panel5')} style={{ margin: '1rem 0' }}>
        <AccordionSummary
          expandIcon={expanded === 'panel5' ? <RemoveIcon style={{ color: "white" }} /> : <AddIcon style={{ color: "white" }} />}
          style={{ backgroundColor: "darkblue", color: "white" }}
        >
          <Typography >Rain Harvesting Pit</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div>
            <img src='./gif/rain.gif' alt='' style={{ height: 'auto', width: '300px' }} />
          </div>
        </AccordionDetails>
      </Accordion>

      <Accordion square expanded={expanded === 'panel6'} onChange={handleChange('panel6')} style={{ margin: '1rem 0' }}>
        <AccordionSummary
          expandIcon={expanded === 'panel6' ? <RemoveIcon style={{ color: "white" }} /> : <AddIcon style={{ color: "white" }} />}
          style={{ backgroundColor: "darkblue", color: "white" }}
        >
          <Typography >Cycle Stand</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div>
            <img src='./gif/cycle.gif' alt='' style={{ height: 'auto', width: '300px' }} />
          </div>
        </AccordionDetails>
      </Accordion>

      <Accordion square expanded={expanded === 'panel7'} onChange={handleChange('panel7')} style={{ margin: '1rem 0' }}>
        <AccordionSummary
          expandIcon={expanded === 'panel7' ? <RemoveIcon style={{ color: "white" }} /> : <AddIcon style={{ color: "white" }} />}
          style={{ backgroundColor: "darkblue", color: "white" }}
        >
          <Typography >Paper Cutter Machine</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div>
            <img src='./gif/paper.gif' alt='' style={{ height: 'auto', width: '300px' }} />
          </div>
        </AccordionDetails>
      </Accordion>

      <Accordion square expanded={expanded === 'panel8'} onChange={handleChange('panel8')} style={{ margin: '1rem 0' }}>
        <AccordionSummary
          expandIcon={expanded === 'panel8' ? <RemoveIcon style={{ color: "white" }} /> : <AddIcon style={{ color: "white" }} />}
          style={{ backgroundColor: "darkblue", color: "white" }}
        >
          <Typography >ECO-CLUB Activities</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div>
            ECO-CLUB Activities
          </div>
        </AccordionDetails>
      </Accordion>

      <h4>List of Members in the Cell:</h4>

      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell colSpan={3} align="center">ECO-CLUB COMMITTEE</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {table1.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell>
                  {row.sno}
                </StyledTableCell>
                <StyledTableCell align="left">
                  <div>{row?.name}</div>
                </StyledTableCell>
                <StyledTableCell align="left">{row.designation}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default EcoClub;
