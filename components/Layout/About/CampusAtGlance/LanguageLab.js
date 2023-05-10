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
      // paddingBottom:'10px'
   },
}));

const LanguageLab = () => {
  const classes = useStyles();

  return <div>
      <h3 className={classes.teluguHeading}>LANGUAGE LAB</h3>
      <p className={classes.teluguContent}>We provide Language lab to our students because labs are important in mastering a language. It's not just about being able to read and understand words, but also to master the spoken language. Language laboratories are essential. They are also necessary for language learning. This provides an avenue for the students to improve the way they pronounce the words and be corrected by the teacher whenever necessary.</p>
      <Image src={'/images/languagelab.gif'} alt="" width={1360} height={940} />
  </div>;
};

export default LanguageLab;
