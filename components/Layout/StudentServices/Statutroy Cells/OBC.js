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
    createData(1, "Dr. V. Narayana Rao", "Principal –Chairman"),
    createData(2, "Sri P. L. Ramesh", "Vice-Principal –Vice-Chairman"),
    createData(3, "Dr. M. Venkateswara Rao", "Vice-Principal –Vice-Chairman"),
    createData(4, "Sri D. Pavan Kumar", "Lecturer in Commerce, Convenor"),
    createData(5, "Sri P. Vishnu Vardhan", "Lecturer in Electronics, Member"),
    createData(6, "Sri A. Gopala Krishna", "Lecturer in Commerce, Member"),
    createData(7, "Ms. G. Tejeswari", "III B.Com. (Gen), Student Member"),
    createData(8, "Mr. Y. Karun", "III B.Com. (Comp.), Student Member"),
    createData(9, "Ms. P. Padma Latha", "III B.Sc. (MPC), Student Member"),

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
const Obc = () => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };


    return (

        <div>
            <h2>OBC Cell</h2>
            <Typography style={{ backgroundColor: 'Orange', marginBottom: '15px' }}>
                Drop your Complaints online
            </Typography>
            <p className={classes.ARcells}>OBC Cell</p>
            <div style={{ display: 'flex', marginTop: '5px' }}>
                <p style={{ color: 'gray', fontwidth: '5px' }}>  Name of the Cell : </p>
                <p style={{ color: 'green', fontwidth: '5px', marginLeft: '5px' }}> OBC Cell</p>
            </div>
            <p style={{ fontfamily: 'cursive' }}>Year of Establishment: <strong>2010 </strong></p>
            <p style={{ color: 'green', fontwidth: '5px', marginLeft: '5px', fontwidth: '10px' }}> Main Objectives:</p>



            <div style={{ display: 'flex', marginTop: '5px' }}>
                <div>
                    <ArrowForwardIosIcon />
                </div>
                <div>
                    To collect reports and information regarding the Government of India and the UGC orders on various aspects of education, training and employment of OBC.
                </div>
            </div>
            <div style={{ display: 'flex', marginTop: '5px' }}>
                <div>
                    <ArrowForwardIosIcon />
                </div>
                <div>
                    To circulate Government of India orders and UGC’s decision and to collect information in respect of appointing, training these communities in teaching and non-teaching posts in the institution.
                </div>
            </div>
            <div style={{ display: 'flex', marginTop: '5px' }}>
                <div>
                    <ArrowForwardIosIcon />
                </div>
                <div>
                    To collect statistics on OBC students and employees.
                </div>
            </div>
            <div style={{ display: 'flex', marginTop: '5px' }}>
                <div>
                    <ArrowForwardIosIcon />
                </div>
                <div>
                    To monitor the working of the remedial coaching scheme in the college for students including minority students.                </div>
            </div>
            <div style={{ display: 'flex', marginTop: '5px' }}>
                <div>
                    <ArrowForwardIosIcon />
                </div>
                <div>
                    To function as a Grievances Redressal cell for the Grievances of OBC students including minority students and employees                </div>
            </div>

            <TableContainer component={Paper} style={{ marginTop: '15px' }}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead className={classes.tableHead}>
                        <TableCell align="center" style={{ color: "white", }} colSpan={5} >
                            OBC CELL
                        </TableCell>
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

export default Obc;
