import React from 'react';
import { makeStyles } from '@material-ui/core';
import Image from 'next/image';

const useStyles = makeStyles((theme) => ({
  teluguHeading:{
    // fontSize:'23px',
    color:'green',
    margin:'0',
    // paddingTop:'12px'
  },
  teluguContent:{
    // fontSize:'22px',
    margin:'0',
    paddingTop:'10px'
 }

}));

const YogaCentre = () => {
  const classes = useStyles();

  return <div>
      <h3 className={classes.teluguHeading}>YOGA & MEDITATION</h3>
      <p className={classes.teluguContent} style={{marginBottom:'20px'}}>
      As our college offers Diploma course in Yoga, a Yoga Centre was established with all facilities including LCD projector to show the videos in yoga. In addition Venkateswara Yoga centre is functioning in the college from 2012 onwards to reduce the stress and strain of the faculty and students.
      </p>
      <Image src={'/images/yoga.gif'} alt="" width={600} height={600} />
  </div>;
};

export default YogaCentre;
