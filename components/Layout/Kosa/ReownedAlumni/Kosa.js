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

const Kosa = () => {
	const classes = useStyles();
  return (
    <div>
        <h2 className={classes.teluguHeading}>KBN OLD STUDENTS ASSOCIATION(KOSA)</h2>
      <Grid container spacing={3}>
          <Grid item xs={12} className={classes.facultyImages}>
				<Image 
					src={'/images/ReownedAlumniImages/KosaImages/kosaImg33.jpg'} 
					alt="" 
					width={1300} 
					height={1400} 
				/>
				<Image 
					src={'/images/ReownedAlumniImages/KosaImages/kosaImg34.jpg'} 
					alt="" 
					width={1300} 
					height={1400} 
				/>
				<Image 
					src={'/images/ReownedAlumniImages/KosaImages/kosaImg35.jpg'} 
					alt="" 
					width={1300} 
					height={1400} 
				/>
				<Image 
					src={'/images/ReownedAlumniImages/KosaImages/kosaImg36.jpg'} 
					alt="" 
					width={1300} 
					height={1400} 
				/>
				<Image 
					src={'/images/ReownedAlumniImages/KosaImages/kosaImg37.jpg'} 
					alt="" 
					width={1300} 
					height={1400} 
				/>
				<Image 
					src={'/images/ReownedAlumniImages/KosaImages/kosaImg38.jpg'} 
					alt="" 
					width={1300} 
					height={1400} 
				/>
            </Grid>
			<Grid item xs={12} className={classes.facultyImages} style={{margin:'0'}}>
				<Image 
					src={'/images/ReownedAlumniImages/KosaImages/kosaImg39.jpg'} 
					alt="" 
					width={1300} 
					height={1400} 
				/>
				<Image 
					src={'/images/ReownedAlumniImages/KosaImages/kosaImg40.jpg'} 
					alt="" 
					width={1300} 
					height={1400} 
				/>
				<Image 
					src={'/images/ReownedAlumniImages/KosaImages/kosaImg41.jpg'} 
					alt="" 
					width={1300} 
					height={1400} 
				/>
				<Image 
					src={'/images/ReownedAlumniImages/KosaImages/kosaImg42.jpg'} 
					alt="" 
					width={1300} 
					height={1400} 
				/>
				<Image 
					src={'/images/ReownedAlumniImages/KosaImages/kosaImg43.jpg'} 
					alt="" 
					width={1300} 
					height={1400} 
				/>
				<Image 
					src={'/images/ReownedAlumniImages/KosaImages/kosaImg44.jpg'} 
					alt="" 
					width={1300} 
					height={1400} 
				/>
            </Grid>
			<Grid item xs={4} className={classes.facultyImages} style={{margin:'0'}}>
				<Image 
					src={'/images/ReownedAlumniImages/KosaImages/kosaImg45.jpg'} 
					alt="" 
					width={1300} 
					height={1400} 
				/>
				<Image 
					src={'/images/ReownedAlumniImages/KosaImages/kosaImg46.jpg'} 
					alt="" 
					width={1300} 
					height={1400} 
				/>
            </Grid>
        </Grid>
    </div>
  )
}

export default Kosa