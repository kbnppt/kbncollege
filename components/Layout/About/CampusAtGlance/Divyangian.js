import React from 'react';
import { makeStyles } from '@material-ui/core';
import Image from 'next/image';

const useStyles = makeStyles((theme) => ({
    teluguHeading:{
              // fontSize:'27px',
        color:'green',
        margin:'0',
        paddingTop:'12px',
        paddingBottom:'15px'
    },
}));

const Divyangian = () => {
  const classes = useStyles();

  return <div>
      <h3 className={classes.teluguHeading}>Facilities For Divyangian</h3>
      <Image src={'/images/divyan.gif'} alt="" width={1360} height={940} />
      <Image src={'/images/Wheel Chairs.gif'} alt="" width={1360} height={940} />
      
  </div>;
};

export default Divyangian;
