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

const IndoorSports = () => {
  const classes = useStyles();

  return <div>
      <h3 className={classes.teluguHeading}>Indoor Sports</h3>
      <div className={classes.objectivesContent}>
          <ArrowForwardIosIcon className={classes.arrowIcon} />
          <p className={classes.arrowwithContent}>
          2 International Stag Table Tennis Tables.
          </p>
      </div>
      <div className={classes.objectivesContent}>
          <ArrowForwardIosIcon className={classes.arrowIcon} />
          <p className={classes.arrowwithContent}>
          Table Tennis Robo machine was installed to teach new techniques.
          </p>
      </div>
      <div className={classes.objectivesContent}>
          <ArrowForwardIosIcon className={classes.arrowIcon} />
          <p className={classes.arrowwithContent}>
          Badminton court with flood lights.
          </p>
      </div>
      <div className={classes.objectivesContent}>
          <ArrowForwardIosIcon className={classes.arrowIcon} />
          <p className={classes.arrowwithContent}>
          Provision for carom boards and chess and other indoor games.
          </p>
      </div>
      <div className={classes.objectivesContent}>
          <ArrowForwardIosIcon className={classes.arrowIcon} />
          <p className={classes.arrowwithContent}>
          Physiotherapy equipment also available to provide first aid to the injured
          </p>
      </div>
      <Image src={'/images/indoor.gif'} alt="" width={600} height={600} />
      <Image src={'/images/tennis_robo1.jpg'} alt="" width={600} height={600} />
  </div>;
};

export default IndoorSports;
