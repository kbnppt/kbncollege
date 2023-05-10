import React from 'react';
import { makeStyles } from '@material-ui/core';
import Image from 'next/image';

const useStyles = makeStyles((theme) => ({
    teluguHeading:{
              // fontSize:'27px',
        color:'green',
        margin:'0',
        paddingTop:'12px'
    },
    teluguContent:{
        // fontSize:'21px',
        margin:'0',
        paddingTop:'10px',
        paddingBottom:'20px'
     },
 }));

const Canteen = () => {
  const classes = useStyles();

  return <div>
        <h3 className={classes.teluguHeading}>Canteen Facility</h3>
        <p className={classes.teluguContent}>
        Like educational psychologists, we too feel that a good canteen in a college could increase the academic performance of the students. It is a place where they can relax and hang out.
        </p>
        <p className={classes.teluguContent}>
        Food, Fresh and Healthy eating is the policy adopted by our college canteen. Hygienic food is given the priority with minimal charges. Serving time is managed fast not to give a chance for the students to bunk classes.
        </p>
        <Image src={'/images/canteen.gif'} alt="" width={600} height={600} />
  </div>;
};

export default Canteen;
