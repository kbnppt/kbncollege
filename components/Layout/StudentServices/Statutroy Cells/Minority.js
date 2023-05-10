import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { withStyles, Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
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
    },
}))(TableRow);

function createData(num, name, desg) {
    return { num, name, desg };
}

const rows = [
    createData("NAME", "DESIGNATION"),
    createData("Dr. V. Narayana Rao", "Principal –Chairman"),
    createData("Sri P. L. Ramesh", "Vice-Principal –Vice-Chairman"),
    createData("Dr. M. Venkateswara Rao", "Vice-Principal –Vice-Chairman"),
    createData("Smt.Shamim, Head, Dept. of M.Sc (CS)", "Convenor"),
];

const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
    tableHead: {
        fontWeight: "bold",
        backgroundColor: "darkblue",

    },
    ARcells: {
        color: 'blue',
        fontSize: '20px',
        marginTop: '-10px'
    }
});
const Minority = () => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };


    return (

        <div>
            <h2>Minority Cell</h2>
            <Typography style={{ backgroundColor: 'Orange', marginBottom: '15px' }}>
                Drop your Complaints online
            </Typography>
            <p className={classes.ARcells}>Minority Cell</p>
            <div style={{ display: 'flex', marginTop: '5px' }}>
                <p style={{ color: 'gray', fontwidth: '5px' }}>  Name of the Cell : </p>
                <p style={{ color: 'green', fontwidth: '5px', marginLeft: '5px' }}> Minority Cell</p>
            </div>
            <p style={{ fontfamily: 'cursive' }}>Year of Establishment: <strong>2010 </strong></p>
            <p style={{ color: 'green', fontwidth: '5px', marginLeft: '5px', fontwidth: '10px' }}> Introduction</p>

            <Typography>
                KBN College is committed to provide an environment that support diversity and respects everyone regardless of colour, religious belief or cultures and also commits to ensuring protection of everyone including minorities and acting as per the provisions of constitution of India in such matters. The minority cell of the college was established in 2010 with the purpose of uplifting the minority community in the college and empowering them.
            </Typography>
            <Typography style={{ color: 'green', fontwidth: '5px', marginLeft: '5px', fontwidth: '10px' }}> Main Objectives:
            </Typography>

            <div style={{ display: 'flex', marginTop: '5px' }}>
                <div>
                    <ArrowForwardIosIcon />
                </div>
                <div>
                    To ensure provisions for an environment where all such students feel safe and secure
                </div>
            </div>
            <div style={{ display: 'flex', marginTop: '5px' }}>
                <div>
                    <ArrowForwardIosIcon />
                </div>
                <div>
                    To empower the faculty and students belong to minority and other backward communities
                </div>
            </div>
            <div style={{ display: 'flex', marginTop: '5px' }}>
                <div>
                    <ArrowForwardIosIcon />
                </div>
                <div>
                    To facilitate financial support to students from minority communities from government agencies and other sources                </div>
            </div>
            <div style={{ display: 'flex', marginTop: '5px' }}>
                <div>
                    <ArrowForwardIosIcon />
                </div>
                <div>
                    To encourage to enroll for career orientation programmes which would empower and equip them with the necessary skills to choose a career option.
                </div>
            </div>
            <div style={{ display: 'flex', marginTop: '5px' }}>
                <div>
                    <ArrowForwardIosIcon />
                </div>
                <div>
                    To handle the issues and short and long-term needs of the minorities.
                </div>
            </div>
            <Typography style={{ color: 'green', fontwidth: '5px', marginLeft: '5px', fontwidth: '10px' }}> Activities of the Cell:
            </Typography>

            <div style={{ display: 'flex', marginTop: '5px' }}>
                <div>
                    <ArrowForwardIosIcon />
                </div>
                <div>
                    The cell is committed to provide assistance to the minority students along with Scheduled / Scheduled Tribe students through Counselling, personality development, development of communication skill, remedial coaching & tutorial classes.                </div>
            </div>
            <div style={{ display: 'flex', marginTop: '5px' }}>
                <div>
                    <ArrowForwardIosIcon />
                </div>
                <div>
                    The cell is actively engaged in coordinating and resolves the problems in the matter of conduct of remedial coaching and other measures with a view to see that the education system succeeds in bringing to a level qualitatively as well as qualitatively indistinguishable from the level of the rest of the society.
                </div>
            </div>
            <div style={{ display: 'flex', marginTop: '5px' }}>
                <div>
                    <ArrowForwardIosIcon />
                </div>
                <div>
                    The cell organizes career guidance classes with the help of Placement Cell.
                </div>
            </div>
            <div style={{ display: 'flex', marginTop: '5px' }}>
                <div>
                    <ArrowForwardIosIcon />
                </div>
                <div>
                    Free coaching for higher studies through ICET, KRUCET etc.
                </div>
            </div>
            <div style={{ display: 'flex', marginTop: '5px' }}>
                <div>
                    <ArrowForwardIosIcon />
                </div>
                <div>
                    Free coaching for higher competitive exams like UPSC, APPSC, RRB and Bank exams.
                </div>
            </div>
            <Typography style={{ color: 'green', fontwidth: '5px', margin: '10px', fontwidth: '10px' }}>
                <strong> List of members in the Committee </strong>
            </Typography>


            <TableContainer component={Paper} style={{ marginTop: '15px' }}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead className={classes.tableHead}>
                        {/* <TableCell align="center" style={{ color: "white", }} colSpan={5} >
                            OBC CELL
                        </TableCell> */}
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <StyledTableRow key={row.name}>
                                <StyledTableCell component="th" scope="row">
                                    {row.num}
                                </StyledTableCell>
                                <StyledTableCell align="left">{row.name}</StyledTableCell>
                                <StyledTableCell align="left">{row.desg}</StyledTableCell>

                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>


        </div>

    );
};

export default Minority;
