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

const HomeoClinic = () => {
  const classes = useStyles();

  return <div>
        <h3 className={classes.teluguHeading}>HOMEO CLINIC</h3>
        <p className={classes.teluguContent}>
        Homeopathy treats the whole person and not just the illness. A substance that causes symptoms in a healthy person can be used to treat these symptoms when they occur in an ill person. Homeopathic medicine increases its curative powers and avoids unwanted side effects. It is a complete system that treats mental, emotional and physical illnesses. Because we believe the mind and body operate as one, so when we use this method of treatment to our students it not only cures them from their very illness but also to the full (body and soul.). It’s our pleasure Dr.Kishore Kumar, Homoeopathist, looks after out Homeo Clinic from 3pm to 5 pm to our college teaching staff, non-teaching staff, students and outside of the college persons with free of cost.
        </p>
        <Image src={'/images/homeoclinic.gif'} alt="" width={600} height={600} />
  </div>;
};

export default HomeoClinic;
