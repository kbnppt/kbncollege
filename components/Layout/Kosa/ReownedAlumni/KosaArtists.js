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

const KosaArtists = () => {
	const classes = useStyles();

  return (
    <div>
		<h2 className={classes.teluguHeading}>Alumni in Film Industry</h2>
        <Grid container spacing={3}>
        	<Grid item xs={12} className={classes.facultyImages}>
				<Image 
					src={'/images/ReownedAlumniImages/ArtistsImages/kosaImg56.jpg'} 
					alt="" 
					width={1300} 
					height={1400} 
				/>
				<Image 
					src={'/images/ReownedAlumniImages/ArtistsImages/kosaImg57.jpg'} 
					alt="" 
					width={1300} 
					height={1400} 
				/>
				<Image 
					src={'/images/ReownedAlumniImages/ArtistsImages/kosaImg58.jpg'} 
					alt="" 
					width={1300} 
					height={1400} 
				/>
				<Image 
					src={'/images/ReownedAlumniImages/ArtistsImages/kosaImg59.jpg'} 
					alt="" 
					width={1300} 
					height={1400} 
				/>
				<Image 
					src={'/images/ReownedAlumniImages/ArtistsImages/kosaImg60.jpg'} 
					alt="" 
					width={1300} 
					height={1400} 
				/>
				<Image 
					src={'/images/ReownedAlumniImages/ArtistsImages/kosaImg61.png'} 
					alt="" 
					width={1300} 
					height={1400} 
				/>
            </Grid>
        </Grid>
    </div>
  )
}

export default KosaArtists