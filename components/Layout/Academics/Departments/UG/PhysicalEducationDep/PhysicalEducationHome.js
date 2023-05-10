import React from "react";
import { makeStyles } from "@material-ui/core";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const useStyles = makeStyles((theme) => ({
  teluguHeadingMain: {
    //fontSize:'36px',
    textAlign: "center",
    color: "#2e69d6",
  },
  teluguHeading: {
    // fontSize: '23px',
    color: "green",
    margin: "0",
    paddingTop: "12px",
  },
  objectivesContent: {
    display: "flex",
    paddingTop: "12px",
  },
  arrowIcon: {
    marginTop: "4px",
    marginRight: "10px",
  },
  arrowwithContent: {
    // fontSize: '22px',
    margin: "0px",
  },
  teluguContent: {
    // fontSize: '22px',
    margin: "0",
    paddingTop: "10px",
  },
}));

const DepOfPhysicalEducation = () => {
  const classes = useStyles();

  return (
    <div>
      <h2 className={classes.teluguHeadingMain}>
        DEPARTMENT OF PHYSICAL EDUCATION
      </h2>
      <p className={classes.teluguContent}>
        The Department of Physical Education came into existence along with th
        establishment of the college in the year 1965 in view of the play field
        available in a campus of 3000 sq.mts. Since then it has been making
        rapid strides in the field of Physical Education presenting a good
        number of athletes, sportsmen at University, State and National level
        which, indeed, speaks of the sincere and dedicated service of the
        management and faculty of Physical Education.
      </p>
      <p className={classes.teluguContent}>
        The first and foremost person who rendered yeoman service for the
        development of the department is Sri. P.Seetharamaiah B.A., D.P.Ed. The
        preeminent person was the first HOD under whose tenure, the department
        progressed in leaps and bounds. Besides creating a vaible department. He
        played a vital role in shaping the sports career of many a student.
      </p>
      <p className={classes.teluguContent}>
        Mr. M.Subba Rao all India weight lifter and winner of National Bronze
        medal, Mr.P.Balarama Krishna participant in Handball in International
        competition and Mr.M.Sudhakar University individual champion for 2 years
        representing the University in All India Inter University Athletic meet
        for successive 3 years.
      </p>
      <p className={classes.teluguContent}>
        Mr.G.Yeswanth Kumar Gold Medalist in All India University Handball
        (South – West Zone) tournament and Mr.L.S.S.Bharath Kumar Junior
        Nationals Handball Gold Medalist and Senior National Handball South Zone
        III Place.
      </p>
      <p className={classes.teluguContent}>
        Mr.T.S.Aditya Junior National Ball Badminton Gold Medalist and Star of
        India awarder, Mr.Sk.Feroz, Kum.Sk.Munthaz Begam, Kum.P.Manohari and
        S.Keerti are National Level Table Tennis Players are individual
        champions are PRIDE OF OUR INSTITUTION.
      </p>
      <p className={classes.teluguContent}>
        Our Handball team has the credit of achieving the University
        Championship for 16 times, Table Tennis (Men & Women) 5 times and one
        time Chess Championship producing umpteen National Level participants in
        Junior and senior levels, a par excellence in the field of sports and
        games.
      </p>
      <p className={classes.teluguContent}>
        Our young enthusiastic sportsmen of 51 in number have the credit of
        participating in different sports and games in All India Inter
        University Competitions. With the back ground of many achievements and
        laurels, the management and the Physical Education department are rather
        encouraged to provide more and better facilitties and infrastructural
        network to produce still greater stalwarts from our institution in the
        horizon of sports and games.
      </p>
    </div>
  );
};

export default DepOfPhysicalEducation;
