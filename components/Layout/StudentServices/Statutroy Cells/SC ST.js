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
    createData(4, "Sri S. Sivaiah Nayak", "Head, Dept. of Telugu, Convenor"),
    createData(5, "Sri Ch. Ravindranath", "Lecturer in Commerce, Member"),
    createData(6, "Sri B. Mohan Teja", "Lecturer in English, Member"),
    createData(7, "Ms. G. Sneha Latha", "III B.Sc. (MPCS), Student Member"),
    createData(8, "Mr. B. Srinivasa Naik", "III B.Sc. (CBZ), Student Member"),
    createData(9, "MR. Ch. Gopi Chand", "III B.Sc. (MECS), Student Member"),

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
const Scst = () => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };


    return (

        <div>
            <h2>SC/ST Cell</h2>
            <Typography style={{ backgroundColor: 'Orange', marginBottom: '15px' }}>
                Drop your Complaints online
            </Typography>
            <p className={classes.ARcells}>SC/ST Cell</p>
            <div style={{ display: 'flex', marginTop: '5px' }}>
                <p style={{ color: 'gray', fontwidth: '5px' }}>  Name of the Cell : </p>
                <p style={{ color: 'green', fontwidth: '5px', marginLeft: '5px' }}> SC/ST Cell</p>
            </div>
            <p style={{ fontfamily: 'cursive' }}>Year of Establishment: <strong>2010 </strong></p>
            <p style={{ color: 'green', fontwidth: '5px', marginLeft: '5px', fontwidth: '10px' }}> Introduction</p>

            <Typography>
                A special cell for the welfare of Scheduled Caste and Scheduled Tribes of KBN College has come into existence for effective implementation of the programs and policies of reservation. The Cell is advised by a Standing Committee on various policy matters pertaining to academic and non-academic matters under the Chairmanship of the Executive Director. The Institute strives to maintain a work environment wherein faculty and staff members from different community can work in a coherent environment. It is the institutes endeavour to ensure that no kind of caste based discrimination take place at workplace. SC/ST Cell has been created in the college to resolve all the affairs and problems related to the SC/ST students of the college.
            </Typography>
            <p style={{ color: 'green', fontwidth: '5px', marginLeft: '5px', fontwidth: '10px' }}> Objectives</p>

            <Typography>
                1. To aware the SC/ST students regarding various scholarships of State Government and UGC.
            </Typography>
            <Typography>
                2. To take up follow up measures for achieving the objectives and targets laid down for the purpose by   the Government of India and the UGC.
            </Typography>
            <Typography>
                3. To implement the reservation policy for SC/ST in the institute.
            </Typography>
            <Typography>
                4. To collect data regarding the implementation of the policies with regard to admissions.
            </Typography>
            <Typography>
                5. To monitor and evaluate continuously the reservation policy in the institute.
            </Typography>

            <div style={{ color: 'green', fontSize: '20px', padding: '10px' }}>
                Activities/Functions
            </div>
            <div style={{}}>
                Depending upon the nature and gravity of the offence as established, the possible punishments as per AICTE / UGC Section 9 for those found guilty of ragging at the institution level, shall be any one or any combination of the following:
            </div>
            <div style={{ display: 'flex', marginTop: '5px' }}>
                <div>
                    <ArrowForwardIosIcon />
                </div>
                <div>
                    To collect reports and information of State Government and UGS orders on various aspects of education, employment of SC/ST students.
                </div>
            </div>
            <div style={{ display: 'flex', marginTop: '5px' }}>
                <div>
                    <ArrowForwardIosIcon />
                </div>
                <div>
                    To circulate State Government and UGC’s decisions about different scholarship programs.
                </div>
            </div>
            <div style={{ display: 'flex', marginTop: '5px' }}>
                <div>
                    <ArrowForwardIosIcon />
                </div>
                <div>
                    To communicate with the students and motivate them for better future planning.
                </div>
            </div>

            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead className={classes.tableHead}>
                        <TableCell align="center" style={{ color: "white", }} colSpan={5} >
                            SC& ST CELL COMMITTEE
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

export default Scst;
