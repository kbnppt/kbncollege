import React from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { makeStyles, withStyles } from '@material-ui/core';

const useStyles = makeStyles({
    ugHeading: {
        //fontSize:'36px',
        color: '#003494',
        textAlign: 'center'
    },
    modelPapersHeading: {
        fontSize: '18px',
        borderRight: '1px solid #e0e0e0',
        fontWeight: 'bold',
        backgroundColor: '#07358a',
        color: 'white !important',
        padding: '30px 15px'
    },
    semisterYear: {
        fontSize: '18px !important',
        borderRight: '1px solid #e0e0e0',
        fontWeight: 'bold',
        backgroundColor: '#07358a',
        color: 'white'
    },
    semisterLinks: {
        fontSize: '18px !important',
        color: 'blue',
        borderRight: '1px solid #e0e0e0'
    }
})

const StyledTableCell = withStyles((theme) => ({
    head: {
        // backgroundColor: '#07358a',
        color: theme.palette.common.black,
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
        // '&:hover': {
        //     backgroundColor: '#bdbdbd87'
        // }
    },
}))(TableRow);

function createData(semister, semisterone, semistertwo, semisterthree, semisterfour, semisterfive, semistersix) {
    return { semister, semisterone, semistertwo, semisterthree, semisterfour, semisterfive, semistersix };
}

const ugcourse = [
    createData('2020 -2021', [''], ['https://drive.google.com/file/d/1tICzNV1Ney6Yjuwsvka0mrV_JxozwNEx/view'], ['https://drive.google.com/file/d/1Q9pBI3ahXbsNQsy1RhjAx5xnkMtVquH2/view'], ['https://drive.google.com/file/d/1hWkolDDJ66LYn4JHCyVe9ahGT0OylYJ9/view'], ['https://drive.google.com/file/d/1BAxRiDRhVlq8xBoC0PkoOby-59siJQVj/view'], ['https://drive.google.com/file/d/1OTzHU--YlzLtVDSFjRJbQrkYojmL4HeF/view']),
    createData('2019 -2020', ['https://drive.google.com/file/d/18909sT8G_pMAsTiNbVwB2WhDQWfr2H9b/view'], ['https://drive.google.com/file/d/14u50olHFz6ejMqH7vuxBazn_wH-FvEVD/view?ts=5fdad2f0'], ['https://drive.google.com/file/d/1oRdfGWoiE0V2XZsSm6eiqnpoz86tEVzJ/view'], ['https://drive.google.com/file/d/1dM1zKJtjdG7AupmTymVUuViKW7Ctpamz/view?ts=5fdad30d'], ['https://drive.google.com/file/d/14kXavSjZ4zlTsBvRIb8n_UHCajvsJxcY/view'], ['https://drive.google.com/file/d/1ayD0klydPi915ASJFKq2AkjKhlqDUfjy/view?ts=5fdad331']),
    createData('2018 -2019', [''], ['https://drive.google.com/file/d/1udmlyzB-tbzAU_kbMYCpSRK7sQ0V7Dw1/view'], ['https://drive.google.com/file/d/1r7jL5vd8Y1B0-nvTf97k3hKWePZ8eRvh/view'], ['https://drive.google.com/file/d/1Ceo-oMQCHoSfG1LVwbMGI2OpDKUK3wG6/view'], ['https://drive.google.com/file/d/1pKoBCBiaELJxxt85_UIsAPPGx9O8_vJ1/view'], ['https://drive.google.com/file/d/1quouZEsOE_hQSZe8TG5eH4Y4nyUSCExN/view']),
    createData('2017 -2018', ['https://drive.google.com/file/d/1ebpK1DS19BaUV_W_RvvEWwKm_JMlZoM7/view'], ['https://drive.google.com/file/d/1nN-fkX-jqdly2G4SxeX2LjHAHCa6uMM6/view'], ['https://drive.google.com/file/d/1HtQWbs_ttp4dtS59GNE22rJydJk3ZXTh/view'], ['https://drive.google.com/file/d/17-AWA0MQhprN1a5tBBbzZtu8CadWgk-J/view'], ['https://drive.google.com/file/d/14yAiHPawJguHCFI0JAIcbi1S47bIsgmk/view'], ['https://drive.google.com/file/d/1VZBQxEwhLmu8fQL1bicfq-I-hdqwEBzK/view']),
    createData('2016 -2017', ['https://drive.google.com/file/d/1dIBdb0bW8PG0dQz0YCMqdp8sCKZqT1XZ/view'], ['https://drive.google.com/file/d/152cv-WgUXGsPUKgohRyGweOkK9UZ-txi/view'], ['https://drive.google.com/file/d/1KxXldY0JxegxiPTd-xw8WQAy9j8kLIX0/view'], ['https://drive.google.com/file/d/1R5V0bnPdKgplhkXJDgWOatO7_nCqAYHZ/view'], ['https://drive.google.com/file/d/10gse5nbFcjiJYc54M7934x4CdOpjHSW_/view'], ['https://drive.google.com/file/d/1rhOruEnVNjs7dNltwgS7maPdFtc65fTT/view']),
    createData('2015 -2016', ['https://drive.google.com/file/d/1OcL1gcdnIMp3AIBKf3VEZiXGycdAP-Ez/view'], ['https://drive.google.com/file/d/148jFFibO1uKkJFsyyMgr_gQJa7qfd9F4/view'], ['https://drive.google.com/file/d/12l6zhlEFM6JsKb6cVQ5geDt98DAsdXeR/view'], ['https://drive.google.com/file/d/1-WMlY_lWKXW16cUHXGi70E2N9a4g0Rrh/view'], ['https://drive.google.com/file/d/1tmQ_QCqH3MZYD1uKDVKc5lc0NuZzZKxE/view'], ['https://drive.google.com/file/d/1P_eQU2as6rvY8HOVwPjIahHPppqRGGBL/view']),
    createData('2014 -2015', ['https://drive.google.com/file/d/1l8tjR5qHLIWuaoM4T33ucN9_mp0i-sBB/view'], ['https://drive.google.com/file/d/1nN-fkX-jqdly2G4SxeX2LjHAHCa6uMM6/view'], ['https://drive.google.com/file/d/1HtQWbs_ttp4dtS59GNE22rJydJk3ZXTh/view'], ['https://drive.google.com/file/d/17-AWA0MQhprN1a5tBBbzZtu8CadWgk-J/view'], ['https://drive.google.com/file/d/14yAiHPawJguHCFI0JAIcbi1S47bIsgmk/view'], ['https://drive.google.com/file/d/1VZBQxEwhLmu8fQL1bicfq-I-hdqwEBzK/view']),

];
const pgcourse = [
    createData('2020 -2021', [''], ['https://drive.google.com/file/d/1U2snZw4ii_YVRik8Rf9EzNOSJ1LtXrMM/view'], ['https://drive.google.com/file/d/1bUK1bXiy4WLgkVFERyvDvDUil0eBcz6L/view'], [''], ['https://drive.google.com/file/d/1WI54KUZqGMBzq6cNGGiztpYhF7s3phcM/view'], ['-']),
    createData('2019 -2020', ['https://drive.google.com/file/d/1auHOPeaLXRDrP5HFV8meGrXUTRCMj8B3/view'], [''], ['https://drive.google.com/file/d/1dTDP6DDIHJ0-HYnHokikoBzxyww0IU7Z/view'], [''], ['https://drive.google.com/file/d/1mRWRkPnimDa4xMKARHAwAjfRS0m5gcBf/view'], ['-']),
    createData('2018 -2019', ['https://drive.google.com/file/d/1xLWvD4okP46ApOGaEokmPGlBqhk5MFrX/view'], ['https://drive.google.com/file/d/1sxkfpCP8edwMpT4G-cML4_VRhyPDbam_/view'], ['https://drive.google.com/file/d/1qYSBSVcBEKlj-j82r3bMQj_2ZaQlFXz0/view'], ['https://drive.google.com/file/d/1WkYu7c0toFh53qK1v3uwvJTPGeFfURTl/view'], ['https://www.kbncollege.ac.in/attachments/previousQuestions/2018_2019/PG/.pdf'], ['-']),

];

const ModelPapers = () => {
    const classes = useStyles();

    return (
        <div>
            <h2 className={classes.ugHeading}>UG</h2>
            <TableContainer component={Paper} >
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell className={classes.modelPapersHeading}>SEMESTER/YEAR</StyledTableCell>
                            <StyledTableCell className={classes.modelPapersHeading}>I&#160;SEMESTER</StyledTableCell>
                            <StyledTableCell className={classes.modelPapersHeading}>II&#160;SEMESTER</StyledTableCell>
                            <StyledTableCell className={classes.modelPapersHeading}>III&#160;SEMESTER</StyledTableCell>
                            <StyledTableCell className={classes.modelPapersHeading}>IV&#160;SEMESTER</StyledTableCell>
                            <StyledTableCell className={classes.modelPapersHeading}>V&#160;SEMESTER</StyledTableCell>
                            <StyledTableCell className={classes.modelPapersHeading}>VI&#160;SEMESTER</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {ugcourse.map((row) => (
                            <StyledTableRow key={row.name}>
                                <StyledTableCell align="center" className={classes.semisterYear}>
                                    {row.semister}
                                </StyledTableCell>
                                <StyledTableCell align="center" className={classes.semisterLinks}>
                                    <div><a href={row.semisterone} target='__blank'>VIEW</a></div>
                                </StyledTableCell>
                                <StyledTableCell align="center" className={classes.semisterLinks} >
                                    <div><a href={row.semistertwo} target='__blank'>VIEW</a></div>
                                </StyledTableCell>
                                <StyledTableCell align="center" className={classes.semisterLinks} >
                                    <div><a href={row.semisterthree} target='__blank'>VIEW</a></div>
                                </StyledTableCell>
                                <StyledTableCell align="center" className={classes.semisterLinks} >
                                    <div><a href={row.semisterfour} target='__blank'>VIEW</a></div>
                                </StyledTableCell>
                                <StyledTableCell align="center" className={classes.semisterLinks} >
                                    <div><a href={row.semisterfive} target='__blank'>VIEW</a></div>
                                </StyledTableCell>
                                <StyledTableCell align="center" className={classes.semisterLinks} >
                                    <div><a href={row.semistersix} target='__blank'>VIEW</a></div>
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <h2 className={classes.ugHeading}>PG</h2>
            <TableContainer component={Paper} >
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell className={classes.modelPapersHeading} >SEMESTER/YEAR</StyledTableCell>
                            <StyledTableCell className={classes.modelPapersHeading}>I&#160;SEMESTER</StyledTableCell>
                            <StyledTableCell className={classes.modelPapersHeading}>II&#160;SEMESTER</StyledTableCell>
                            <StyledTableCell className={classes.modelPapersHeading}>III&#160;SEMESTER</StyledTableCell>
                            <StyledTableCell className={classes.modelPapersHeading}>IV&#160;SEMESTER</StyledTableCell>
                            <StyledTableCell className={classes.modelPapersHeading}>V&#160;SEMESTER</StyledTableCell>
                            <StyledTableCell className={classes.modelPapersHeading}>VI&#160;SEMESTER</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {pgcourse.map((row) => (
                            <StyledTableRow key={row.name}>
                                <StyledTableCell align="center" className={classes.semisterYear}>
                                    {row.semister}
                                </StyledTableCell>
                                <StyledTableCell align="center" className={classes.semisterLinks} >
                                    <div ><a href={row.semisterone} target={'__blank'} >VIEW</a></div>
                                </StyledTableCell>
                                <StyledTableCell align="center" className={classes.semisterLinks} >
                                    <div><a href={row.semistertwo} target={'__blank'} >VIEW</a></div>
                                </StyledTableCell>
                                <StyledTableCell align="center" className={classes.semisterLinks} >
                                    <div><a href={row.semisterthree} target={'__blank'} >VIEW</a></div>
                                </StyledTableCell>
                                <StyledTableCell align="center" className={classes.semisterLinks} >
                                    <div><a href={row.semisterfour} target={'__blank'} >VIEW</a></div>
                                </StyledTableCell>
                                <StyledTableCell align="center" className={classes.semisterLinks} >
                                    <div><a href={row.semisterfive} target={'__blank'} >VIEW</a></div>
                                </StyledTableCell>
                                <StyledTableCell align="center" style={{ fontSize: '18px', color: 'blue', borderRight: '1px solid #e0e0e0' }} >
                                    <div><a href={row.semistersix}>-</a></div>
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default ModelPapers