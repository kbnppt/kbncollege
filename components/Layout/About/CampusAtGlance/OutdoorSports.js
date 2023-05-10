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

const OutdoorSports = () => {
  const classes = useStyles();

  return <div>
      <h3 className={classes.teluguHeading}>Outdoor Sports</h3>
      <div className={classes.objectivesContent}>
          <ArrowForwardIosIcon className={classes.arrowIcon} />
          <p className={classes.arrowwithContent}>
          Total number Cricket nets for coaching – 2. One Pitch is made of red clay and the second with Concrete
          </p>
      </div>
      <div className={classes.objectivesContent}>
          <ArrowForwardIosIcon className={classes.arrowIcon} />
          <p className={classes.arrowwithContent}>
          A Cricket bowling machine for practice session.
          </p>
      </div>
      <div className={classes.objectivesContent}>
          <ArrowForwardIosIcon className={classes.arrowIcon} />
          <p className={classes.arrowwithContent}>
          Hand ball court with Iron goal posts, with rounded iron crossbar. The court is of red soil. Having net enclosure upto a height of 10 ft. around the court
          </p>
      </div>
      <div className={classes.objectivesContent}>
          <ArrowForwardIosIcon className={classes.arrowIcon} />
          <p className={classes.arrowwithContent}>
          Parallel bar and Horizontal bars
          </p>
      </div>
      <div className={classes.objectivesContent}>
          <ArrowForwardIosIcon className={classes.arrowIcon} />
          <p className={classes.arrowwithContent}>
          Separate Courts for Kabbadi, Kho-Kho, Volley ball, and Ball Badminton
          </p>
      </div>
      <div className={classes.objectivesContent}>
          <ArrowForwardIosIcon className={classes.arrowIcon} />
          <p className={classes.arrowwithContent}>
          Volley ball court is made of Red clay with permanent iron posts
          </p>
      </div>
      <div className={classes.objectivesContent}>
          <ArrowForwardIosIcon className={classes.arrowIcon} />
          <p className={classes.arrowwithContent}>
          Kho-Kho court is made of with Red clay with permanent Wood posts fixed.
          </p>
      </div>
      <div className={classes.objectivesContent} style={{marginBottom:'15px'}}>
          <ArrowForwardIosIcon className={classes.arrowIcon} />
          <p className={classes.arrowwithContent}>
          Basketball Court with Concrete flooring and cement posts and LED Flood lights
          </p>
      </div>
      <Image src={'/images/outdoorsportsmach.gif'} alt="" width={600} height={600} />
  </div>;
};

export default OutdoorSports;
