/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { makeStyles } from "@material-ui/core";
import { Container } from "@material-ui/core";
import Marquee from "react-fast-marquee";
// import Marquee from "react-simple-marquee";
import CustomSlider from "../../AnimatedSlider/MotionSlider/MotionSlider";
import Placements from "../../Placements";
import { motion } from "framer-motion";
// import Admissions from '../../Admissions';
import News from "../../News";
import Events from "../../Events";
import Awards from "../../Awards";
import Gallery from "../../Gallery";
import Header from "../../Header/MainNavigation";
import Awardees from "../../Awardees";
import StudentSection from "../../StudentSection";
// import cafeteria from "../../../public/images/cafeteria.jpg"
// import About from '../../About';
// import Social from '../../News/social'
import { imagesData } from "../../AnimatedSlider/data/index";
import Headings from "../../Headings";
const CounterComponent = dynamic(() => import("../../Counter/index"), {
  ssr: false,
});
import styles from "./home.module.css";
import MainNavigation from "../../Header/MainNavigation";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
  },
  allBlocks: {
    // textAlign: 'center',
    // border: '1px solid red',
    padding: "1rem 0",
  },
  campusStyles: {
    display: "grid",
    gridTemplateColumns: "auto auto auto auto auto",
    [theme.breakpoints.down("md")]: {
      gridTemplateColumns: "auto auto auto ",
    },
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "auto auto ",
    },
    [theme.breakpoints.down("xs")]: {
      gridTemplateColumns: " auto ",
    },
  },
  walkthroughStyles: {
    position: "relative",
    overflow: "hidden",
  },
  walkthroughImgStyles: {
    width: "100%",
    minHeight: "100%",
    filter: "brightness(80%)",
    // objectFit: cover;
    transition: " transform 2.5s, filter 1s",
    "&:hover": {
      filter: "brightness(100%)",
      transform: "scale(1.1)",
    },
  },
  walkthroughSpanStyles: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    textAlign: "center",
    color: "white",
    background: "rgb(0,0,0,0.7)",
    padding: "1rem 2rem",
    borderRadius: "2px",
  },
  // resPosition: {
  //     height: 212,
  //     [theme.breakpoints.down("sm")]: {
  //         height: 281,
  //     },
  // }
}));

const Index = () => {
  const classes = useStyles();

  const options = {
    nextSlideTime: 6000,
    // swipingThreshold: 100000,
  };
  const postVariants = {
    initial: { scale: 0.96, y: 30, opacity: 0 },
    enter: {
      scale: 1,
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: [0.48, 0.15, 0.25, 0.96] },
    },
    exit: {
      scale: 0.6,
      y: 100,
      opacity: 0,
      transition: { duration: 0.5, ease: [0.48, 0.15, 0.25, 0.96] },
    },
  };

  return (
    <div className={classes.root}>
      {/* Counter */}
      <MainNavigation />
      {/* <Header /> */}
      {/* <div style={{ width: '100%' }} className={styles.resPosition} /> */}
      {/* <marquee>hello world</marquee> */}
      <div style={{ position: "relative" }}>
        <div className="marque">Notifications</div>
        <div className="trianglebottomright" />

        <Marquee
          pauseOnHover={true}
          speed={50}
          style={{ position: "relative" }}
        >
          <ul className="marqueStyles">
            <li>
              <a href="#">UG & PG SEMESTER END EXAMINATION RESULTS</a>
            </li>
            <li>
              <a href="#">UG V SEMESTER END EXAMINATION TIME TABLE</a>
            </li>
            <li>
              <a href="#">PG III & V SEMESTER END EXAMINATION TIME TABLE</a>
            </li>
            <li>
              <a href="#">
                UG II & IV SEMESTER END EXAMINATION TIME TABLE(REGULAR)
              </a>
            </li>
            <li>
              <a href="#">
                UG I, III & V SEMESTER END EXAMINATION TIME TABLE(SUPPLY)
              </a>
            </li>
            <li>
              <a href="#">ONLINE MID - II, IV & VI SEMESTERS SCHEDULE</a>
            </li>
            <li>
              <a href="#">Affidavit submitted for B.Voc. courses</a>
            </li>
            <li>
              <a href="#">IQAC PEER TEAM REPORT - 2019-20</a>
            </li>
            <li>
              <a href="#">UG REMID TIME TABLE</a>
            </li>
          </ul>
        </Marquee>
      </div>

      {/* <AnimatedSlider /> */}
      <CustomSlider data={imagesData} options={options} />

      <div className={classes.allBlocks} style={{ paddingBottom: 0 }}>
        <div className={classes.allBlocks}>
          <div style={{ position: "relative" }}>
            <Gallery />
          </div>
        </div>

        <div className={classes.allBlocks} style={{ background: "#f1f2f6" }}>
          <Events />
        </div>

        <div>
          <News />
        </div>

        <div className={classes.allBlocks}>
          <CounterComponent />
        </div>

        <div>
          <StudentSection />
        </div>

        <div style={{ background: "#f1f2f6", padding: "1.4rem 0 2.1rem 0" }}>
          <Headings data1="Campus" data2=" walk through" />
          <div className={classes.allBlocks}>
            <motion.div
              initial="initial"
              animate="enter"
              exit="exit"
              variants={{ exit: { transition: { staggerChildren: 0.1 } } }}
            >
              <div className={classes.campusStyles}>
              <motion.div className={classes.walkthroughStyles}>
                <a href="/State_of_the_art_Facilities">
                  
                  <img
                    src="./images/accomodation.jpg"
                    alt="State of the art Facilities"
                    className={classes.walkthroughImgStyles}
                  />
                  <span className={classes.walkthroughSpanStyles}>
                  State of the art Facilities
                  </span>
                  </a>

                </motion.div>
                
                <motion.div className={classes.walkthroughStyles}>
                  <a href="/LibraryImage">
                    <img
                      src="./images/library.jpg"
                      alt="library"
                      className={classes.walkthroughImgStyles}
                    />
                    <span className={classes.walkthroughSpanStyles}>
                      Library
                    </span>
                  </a>
                </motion.div>
                <motion.div
                  className={classes.walkthroughStyles}
                  // onClick={() => window.open(`${text.link}`, "_blank")}
                >
                  <a href="/placements">
                    <img
                      src="./images/placements.jpg"
                      alt="placements"
                      className={classes.walkthroughImgStyles}
                    />
                    <span className={classes.walkthroughSpanStyles}>
                      Placements
                    </span>
                  </a>
                </motion.div>
                <motion.div className={classes.walkthroughStyles}>
                  <a href="/SportsFacility">
                    <img
                      src="./images/sports.jpg"
                      alt="sports"
                      className={classes.walkthroughImgStyles}
                    />
                    <span className={classes.walkthroughSpanStyles}>
                      Sports Facilities
                    </span>
                  </a>
                </motion.div>
                
                <motion.div
                  variants={postVariants}
                  className={classes.walkthroughStyles}
                >
                  <a href="/Cafetaria">
                    <img
                      src="./images/cafeteria.jpg"
                      alt="cafeteria"
                      className={classes.walkthroughImgStyles}
                    />
                    <span className={classes.walkthroughSpanStyles}>
                      Cafeteria
                    </span>
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
        {/* <div className={classes.allBlocks}>
                    <Admissions />
                </div> */}
        {/* <div style={{ background: '#f1f2f6' }}>
                    <Container>
                        <div className={classes.allBlocks}>
                            <Awardees />
                        </div>
                    </Container>
                </div> */}
        <div style={{ background: "#f9fafa" }}>
          <Container>
            <div className={classes.allBlocks}>
              <Awards />
            </div>
          </Container>
        </div>
        <div className={classes.allBlocks}>
          <Placements />
        </div>
      </div>
    </div>
  );
};

export default Index;
