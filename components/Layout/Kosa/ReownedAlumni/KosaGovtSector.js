import React from 'react'
import { makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Image from 'next/image';

const useStyles = makeStyles((theme) => ({
  teluguHeading:{
      //fontSize:'36px',
      color:'#0048cd',
      margin:'0',
      paddingTop:'12px',
      fontWeight:'normal'
  },
  facultyImages:{
    marginTop:'25px',
    display:'flex'
  }
  
}));

const KosaGovtSector = () => {
  const classes = useStyles();

  return (
    <div>
      <h2 className={classes.teluguHeading}>Alumni in Govt Sector</h2>
        <Grid container spacing={3}>
        	<Grid item xs={6} className={classes.facultyImages}>
				<Image 
					src={'/images/ReownedAlumniImages/GovtSectorImages/kosaImg47.jpg'} 
					alt="" 
					width={1300} 
					height={1400} 
				/>
				<Image 
					src={'/images/ReownedAlumniImages/GovtSectorImages/kosaImg48.jpg'} 
					alt="" 
					width={1300} 
					height={1400} 
				/>
				<Image 
					src={'/images/ReownedAlumniImages/GovtSectorImages/kosaImg49.jpg'} 
					alt="" 
					width={1300} 
					height={1400} 
				/>
            </Grid>
        </Grid>
    </div>
  )
}

export default KosaGovtSector