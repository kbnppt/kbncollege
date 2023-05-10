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
const UtilityStore = () => {
  const classes = useStyles();

  return <div>
      <h3 className={classes.teluguHeading}>UTILITY STORE</h3>
      <p className={classes.teluguContent} style={{marginBottom:'20px'}}>
      The utility store in the college campus provides all the stationery required to students & staff. The students can also avail the facility of photocopy in the utility store. Timings are from 9.00 am to 5.00 pm in all working days. The Stationery shop stocks all curriculum requirements for students and classroom stationery for staff. Discounted prices are available for the whole year. Our prices are very competitive.
      </p>
      <Image src={'/images/stationery.gif'} alt="" width={600} height={600} />
  </div>;
};

export default UtilityStore;
