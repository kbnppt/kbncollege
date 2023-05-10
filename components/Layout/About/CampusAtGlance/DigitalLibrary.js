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
        paddingTop:'10px'
     },
     HeadingMain:{
        //  fontSize:'35px',
         color:'blue',
         margin:'0px',
         paddingTop:'10px',
         paddingBottom:'15px'
     }
   
 }));
 
const DigitalLibrary = () => {
  const classes = useStyles();

  return <div>
        <h3 className={classes.teluguHeading}>Digital Library</h3>
        <p className={classes.teluguContent}>
        It is noted that the basic characteristic of a good academic library is its total identification with its institution because the measure of its excellence is determined by the extent to which its resources and services support the academic pursuits of the institution.
        </p>
        <p className={classes.teluguContent}>
        The UG & PG library has a shelving capacity of more than 56,900 books which is regarded as an asset to any educational institution. Indeed, it is a treasure house to knowledge seekers. Amenities include a peaceful inner circle, comfortable seating for the students, and Wi-Fi accessible inviting reading areas.
        </p>
        <h2 className={classes.HeadingMain}>Library</h2>
        <Image src={'/images/library.gif'} alt="" width={600} height={600} />
  </div>;
};

export default DigitalLibrary;
