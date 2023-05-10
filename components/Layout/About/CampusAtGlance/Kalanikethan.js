import React from 'react';
import { makeStyles } from '@material-ui/core';
import Image from 'next/image';

const useStyles = makeStyles((theme) => ({
    teluguHeading:{
        // fontSize:'23px',
        color:'green',
        margin:'0',
        paddingTop:'12px',
    },
    teluguContent:{
      // fontSize:'21px',
      margin:'0',
      paddingTop:'10px',
      paddingBottom:'20px'
   },
}));

const Kalanikethan = () => {
  const classes = useStyles();

  return <div>
      <h3 className={classes.teluguHeading}>Kalanikethan</h3>
      <p className={classes.teluguContent}>It is an open air theatre where all occasions of college celebrated in every time.</p>
      <Image src={'/images/kalanikethan.gif'} alt="" width={600} height={600} />
  </div>;
};

export default Kalanikethan;
