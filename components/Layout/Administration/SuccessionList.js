import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';

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

function createData(sno, name, designation, from, photo) {
    return { sno, name, designation, from, photo };
}

const rows = [
    createData(1, 'Sri S. Sundaram, M.A., LLB', 'PRINCIPAL', '05.06.1965 - 30.06.1983', 'https://drive.google.com/uc?id=1WF2qtUb004uFhT3eFOSl-N1A2fEIr_2G'),
    createData(2, 'Sri G.V.V. R. Ramanujam, M.Sc.', 'PRINCIPAL', '01.07.1983 - 31.05.1991', 'https://drive.google.com/uc?id=14_gnFT0Z9Lp3kcjCXp-comaedotEDG8-'),
    createData(3, 'Dr. K. R. Satyanarayana, M.Com., Ph.D', 'PRINCIPAL - FAC', '15.06.1992 - 03.06.1994', 'https://drive.google.com/uc?id=1ALNqqNcE7Fpqn564PQ21OSLPqxDK8czy'),
    createData(4, 'Sri J. Yerreswara Rao, B.Sc. (Hons)', 'PRINCIPAL - FAC', '04.06.1994 - 31.05.1996', 'https://drive.google.com/uc?id=1QsQr6xe-3SU-l13Q4eJO0Xo34p8S2RW6'),
    createData(5, 'Sri G. Rama Subba Reddy, M.A', 'PRINCIPAL', '01.06.1996 - 30.06.2001', 'https://drive.google.com/uc?id=1dd4OGVZ1cj0rGHqVNNx27vuSkK3ujuxM'),
    createData(6, 'Sri T. Sarat Chandra Babu, M.Sc., M.Phil', 'PRINCIPAL - FAC', '01.07.2001-30.06.2002', 'https://drive.google.com/uc?id=1MAknWhFF2oA4Z9cohw8XEhwK4qgfYJ00'),
    createData(7, 'Sri A. Gurunadha Rao, M.Sc.', 'PRINCIPAL - FAC', '01.07.2002 - 31.01.2003', 'https://drive.google.com/uc?id=1AsbaMRnQNeX3TekzWtIVBOuTtf_qfHFp'),
    createData(8, 'Sri G. Narasimha Rao, M.Com.', 'PRINCIPAL', '01.02.2003 - 14.10.2005 & 01.04.2006 - 30.04-2006', 'https://drive.google.com/uc?id=1jcPGlh1WtVG_D0qT8GXC5tZJcuc0jbEH'),
    createData(9, 'Dr. S. Sasikala, M.Sc., Ph.D', 'PRINCIPAL-FAC', '15.10.2005 - 31.03.2006', 'https://drive.google.com/uc?id=1_7k1yI9n__YnGAfuB2xMHhNSXYRiLR7L'),
    createData(10, 'Sri A.V.S. Prasada Rao, M.Com.', 'PRINCIPAL', '01.05.2006-30.06.2008', 'https://drive.google.com/uc?id=1tCZDHeSOBAmdWr9KcA4zV95JVS-pmJ8Q'),
    createData(11, 'Smt. V. Subhashini, M.Sc., M.Phil', 'PRINCIPAL - FAC', '01.07.2008-14.08.2009', 'https://drive.google.com/uc?id=1-vWrKykKNI09GZKZ77mryIJMqnNHsvAV'),
    createData(12, 'Dr. P. Krishna Murthy, M.Sc., M.Phil., Ph.D', 'PRINCIPAL', '15.08.2009 - 31.08.2016', 'https://drive.google.com/uc?id=1ptRq4GGXur3xo29LUCeVvKCxGOSpPW7g'),
    createData(13, 'Dr. V. Narayana Rao, M.Com., Ph.D', 'PRINCIPAL - FAC', '01.09.2016 - 31.08.2020', 'https://drive.google.com/uc?id=1FEuWpkVvCAdR6Kzw0qL76M8VbcVsqORl'),
    createData(14, 'Sri.E.VaraPrasad, M.A.,M.Phil.,', 'PRINCIPAL - FAC', '01.09.2020 - Till date', 'https://drive.google.com/uc?id=1gkKMlCCePeD_l-0F1pGt5LmjAO7iZIBy'),
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

const SuccessionList = () => {
    const classes = useStyles();

    return (
        <div>
            <h3>Governing Body</h3>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Sno</StyledTableCell>
                            <StyledTableCell align="left">Name</StyledTableCell>
                            <StyledTableCell align="left">Designation</StyledTableCell>
                            <StyledTableCell align="left">From - To</StyledTableCell>
                            <StyledTableCell align="center">Photo</StyledTableCell>
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
                                <StyledTableCell align="left">{row.designation}</StyledTableCell>
                                <StyledTableCell align="left">{row.from}</StyledTableCell>
                                <StyledTableCell align="center">
                                    <Avatar alt="KBN" src={row?.photo} className={classes.large} />
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default SuccessionList;
