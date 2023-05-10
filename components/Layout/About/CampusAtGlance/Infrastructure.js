import React from 'react';
import { makeStyles } from '@material-ui/core';
import Image from 'next/image';

const useStyles = makeStyles((theme) => ({
    teluguHeading:{
        // fontSize:'23px',
        color:'green',
        margin:'0',
        paddingTop:'12px',
        paddingBottom:'15px'
    },
}));

const Infrastructure = () => {
  const classes = useStyles();

  return <div>
      <h3 className={classes.teluguHeading}>Infrastructure</h3>
      <Image src={'/images/infra.gif'} alt="" width={1360} height={940} />
  </div>;
};

export default Infrastructure;
