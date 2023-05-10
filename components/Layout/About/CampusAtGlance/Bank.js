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

const Bank = () => {
  const classes = useStyles();

  return <div>
        <h3 className={classes.teluguHeading}>Bank</h3>
        <p className={classes.teluguContent}>
        Banks play an important role as go-between, in the financial system. Banks are where people can safely deposit their savings.
        </p>
        <p className={classes.teluguContent}>
        We have State Bank of India in our Campus for our student’s scholarship needs. Each student holds a passbook with an account number and a debit card to access their account. Students scholarships are credited in their respective accounts, so that they can access to them when needed.
        </p>
        <Image src={'/images/bank.gif'} alt="" width={1360} height={940} />
  </div>;
};

export default Bank;
