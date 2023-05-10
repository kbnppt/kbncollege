import React from 'react'
import { makeStyles } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const useStyles = makeStyles((theme) => ({
    teluguHeading:{
        // fontSize:'23px',
        color:'green',
        margin:'0',
        paddingTop:'12px',
        fontWeight:'normal'

    },
    objectivesContent: {
        display: 'flex',
        paddingTop: '12px',
    },
    arrowIcon: {
        marginTop: '4px',
        marginRight: '10px'
    },
    arrowwithContent: {
      // fontSize: '22px',
        margin: '0px',
        color:'#337ab7',
        "&:hover": {
            textDecoration:'underline',
            color: 'grey'
          }
    },
}));

const AcademicCalendar = () => {
  const classes = useStyles();

    return (
        <div>
            <h2 className={classes.teluguHeading}>ACADEMIC CALENDAR</h2>
            <div className={classes.objectivesContent}>
                <ArrowForwardIosIcon className={classes.arrowIcon} />
                <a href='https://drive.google.com/uc?id=12YrLO9m0LkrwpkRr3ug2kojhxarn2neS' className={classes.arrowwithContent} target={'__blank'} >
                2020-21
                </a>
            </div>
            <div className={classes.objectivesContent}>
                <ArrowForwardIosIcon className={classes.arrowIcon} />
                <a href='https://drive.google.com/uc?id=14hz2sbiUA8YjbubiNciFkN1NehC_npKW' className={classes.arrowwithContent} target={'__blank'} >
                2019-20
                </a>
            </div>
            <div className={classes.objectivesContent}>
                <ArrowForwardIosIcon className={classes.arrowIcon} />
                <a href='https://drive.google.com/uc?id=1JP6ozZ-ElfC8bdrTguIT33ppPF-05cAB' className={classes.arrowwithContent} target={'__blank'} >
                2018-19
                </a>
            </div>
            <div className={classes.objectivesContent}>
                <ArrowForwardIosIcon className={classes.arrowIcon} />
                <a href='https://drive.google.com/uc?id=1_uQuyKtE2WJcwJhfSRoltTcyQRZISQ6Z' className={classes.arrowwithContent}>
                2017-18
                </a>
            </div>
            <div className={classes.objectivesContent}>
                <ArrowForwardIosIcon className={classes.arrowIcon} />
                <a href='https://drive.google.com/uc?id=1l0N9Vzush8y6g7uSpkq_iq_hlHkhySzo' className={classes.arrowwithContent}>
                2016-17
                </a>
            </div>
            <div className={classes.objectivesContent}>
                <ArrowForwardIosIcon className={classes.arrowIcon} />
                <a href='https://drive.google.com/uc?id=1rp2oBUW1v3aph3Fz2GlEKXrcStqKLB6i' className={classes.arrowwithContent}>
                2015-16
                </a>
            </div>
        </div>
    )
}

export default AcademicCalendar