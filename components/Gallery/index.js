import React from 'react'
// import styles from './gallery.module.css'
// import dynamic from 'next/dynamic';
// import HeadingComponent from '../HeadingComponent/Headings';
import { Button, makeStyles } from '@material-ui/core';
// import Link from 'next/link';
import Headings from '../Headings';
import { useRouter } from 'next/router'

const useStyles = makeStyles((theme) => ({
  banner: {
    padding: "0 1rem 2rem 1rem",
    display: "flex",
    flexDirection: "row",
    width: "80%",
    margin: "0 auto",
    minHeight: "35vh",
    // border: '1px solid red',
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column-reverse",
      alignItems: "center",
      justifyContent: "center",
    },
  },
  buttonStyle: {
    textTransform: "capitalize",
    borderRadius: 0,
    marginTop: " 1rem",
  },
  bannerLeft: {
    width: "40%",
    padding: "3rem 1rem",
    [theme.breakpoints.down("sm")]: { width: "100%" },
  },
  bannerRight: {
    margin: "2rem 2rem 2rem 5rem",
    width: "60%",
    height: "420px",
    overflow: "hidden",
    borderRadius: "6px",
    cursor: "pointer",
    [theme.breakpoints.down("sm")]: { width: "100%", margin: "0" },
    "& img": {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      transition: "transform 1.5s, filter 1s ease-in-out",
      transformOrigin: "center center",
      filter: "brightness(80%)",
    },
    "&:hover img": {
      filter: "brightness(100%)",
      transform: "scale(1.1)",
    },
  },
}))


const Gallery = () => {
  const classes = useStyles();
  const router = useRouter();

  return (
    <>
      {/* <div style={{border:"1px solid blue"}}>
            <HeadingComponent data1="student's" data2="section" Color={false} />  

                </div> */}
      <Headings data1={'About'} data2={'Us'} />
      <div className={classes.banner}>

        <div className={classes.bannerLeft}>
          {/* <h4 style={{ color: '#07358a' }}>ABOUT KBN</h4> */}
          {/* <Headings data1={'About'} data2={'Us'} /> */}
          <h2>Kakaraparti Bhavanarayana College (Autonomous).</h2>
          <p style={{ textAlign: 'justify' }}>
            It is an exuberant outcome of a century old illustrious charitable organization, S.K.P.V.V. Hindu High Schools Society, which for the last 112 years, has been providing education through its eight reputable academic institutions. It is one of the pioneering educational institutions in Vijayawada run with the motto "TEJASWINAVADHITAMASTU" which means“May our Study be Enlightening”.
            {/* The college is known for its perseverance to academic excellence and value-based holistic education. Comprehensive education attained by students of the college enables them to participate in developmental and transformative activities for the benefit of the community and the society at large. */}
          </p>
          <h5 style={{ textAlign: 'justify' }}>
            The College firmly believes in the maxim that service to Man is service to God, especially with regard to education, which is truly the pathway for enlightenment.
          </h5>
          <Button
            // className={classes.buttonStyle}
            variant='contained' color='primary'
            // href="#outlined-buttons"
            onClick={() => router.push('/about')}
          >
            Know More
          </Button>
        </div>
        <div className={classes.bannerRight}>
        <iframe width="100%" height="100%"  src="https://www.youtube.com/embed/as95PutbjX8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          {/* <img src={"./images/img5.jpg"} alt="Picture of the author" /> */}
        </div>
      </div>
    </>
  )
}

export default Gallery;
