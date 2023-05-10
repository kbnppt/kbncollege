import React from 'react';
import { makeStyles } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Image from 'next/image';

const useStyles = makeStyles((theme) => ({
    teluguHeading:{
        // fontSize:'23px',
        color:'green',
        margin:'0',
        paddingTop:'12px'
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
        margin: '0px'
    },

}));

const ICTFacilities = () => {
  const classes = useStyles();

  return <div>
      <h3 className={classes.teluguHeading} style={{paddingBottom:'10px'}}>Information and Communication Technology</h3>
      <a href='#' style={{fontSize:'25px',color:'blue'}}>ICT Class Rooms</a>
      <div className={classes.objectivesContent}>
          <ArrowForwardIosIcon className={classes.arrowIcon} />
          <p className={classes.arrowwithContent}>
          Number of classrooms with LCD facilities :39 Rooms
          </p>
      </div>
      <div className={classes.objectivesContent}>
          <ArrowForwardIosIcon className={classes.arrowIcon} />
          <p className={classes.arrowwithContent}>
          Number of classrooms with Wi-Fi/LAN facilities : 39 rooms - Wi-Fi enabled campus
          </p>
      </div>
      <div className={classes.objectivesContent} style={{paddingBottom:'15px'}}>
          <ArrowForwardIosIcon className={classes.arrowIcon} />
          <p className={classes.arrowwithContent}>
          Number of seminar halls with ICT facilities: 3 (VIVEKANANDA, NETAJI & Seminar hall-3)
          </p>
      </div>
      <Image src={'/images/ict.gif'} alt="" width={600} height={600} />
  </div>;
};

export default ICTFacilities;
