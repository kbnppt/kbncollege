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

const GirlsHostel = () => {
  const classes = useStyles();

  return <div>
        <h3 className={classes.teluguHeading}>GIRLS HOSTEL</h3>
        <p className={classes.teluguContent}>
        KBN provides hostel for the girl students giving priority to the safety and security of the girls.
        </p>
        <p className={classes.teluguContent}>
        The college hostel is meant for discipline & studies. The hostel has well furnished and spacious rooms to feel homely and also spacious mess where girls can have hygenic food. The rooms are spacious and considering the needs of young girls.The mess bill is based on a dividing system among the hostelers.
        No student will be allowed to absent herself from a class without specific permission from the warden.Phone calls from outsiders, other than parents of students, are strictly prohibited.
        </p>
        <p className={classes.teluguContent}>
        Usually students will be permitted to go home only if the college is closed for a vacation.
        </p>
        <Image src={'/images/girlshostel.gif'} alt="" width={600} height={600} />
  </div>;
};

export default GirlsHostel;
