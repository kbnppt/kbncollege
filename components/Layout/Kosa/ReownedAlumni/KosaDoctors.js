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

const KosaDoctors = () => {
	const classes = useStyles();
  return (
    <div>
      <h2 className={classes.teluguHeading}>Alumni as Doctors</h2>
        <Grid container spacing={3}>
        	<Grid item xs={12} className={classes.facultyImages}>
				<Image 
					src={'/images/ReownedAlumniImages/DoctorsImages/kosaImg50.png'} 
					alt="" 
					width={1300} 
					height={1400} 
				/>
				<Image 
					src={'/images/ReownedAlumniImages/DoctorsImages/kosaImg51.png'} 
					alt="" 
					width={1300} 
					height={1400} 
				/>
				<Image 
					src={'/images/ReownedAlumniImages/DoctorsImages/kosaImg52.jpg'} 
					alt="" 
					width={1300} 
					height={1400} 
				/>
				<Image 
					src={'/images/ReownedAlumniImages/DoctorsImages/kosaImg53.jpg'} 
					alt="" 
					width={1300} 
					height={1400} 
				/>
				<Image 
					src={'/images/ReownedAlumniImages/DoctorsImages/kosaImg54.jpg'} 
					alt="" 
					width={1300} 
					height={1400} 
				/>
				<Image 
					src={'/images/ReownedAlumniImages/DoctorsImages/kosaImg55.jpg'} 
					alt="" 
					width={1300} 
					height={1400} 
				/>
            </Grid>
        </Grid>
    </div>
  )
}

export default KosaDoctors