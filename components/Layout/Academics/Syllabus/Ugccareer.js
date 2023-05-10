import React from 'react';
import { makeStyles } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const useStyles = makeStyles({
    ugHeading: {
        fontSize: '28px',
        color: '#003494'
    },
    diplomaHeading: {
        fontSize: '26px',
        color: 'green',
        marginBottom: '10px'
    },
    diplomaContent: {
        fontSize: '16px',
        margin: '0',
        marginTop: '10px'
    },
    objectivesContent: {
        display: 'flex',
        paddingTop: '12px'
    },
    arrowIcon: {
        marginTop: '4px',
        marginRight: '10px'
    },
    arrowwithContent: {
        fontSize: '18px',
        margin: '0px'
    },
})

const Ugccareer = () => {
    const classes = useStyles();

    return <div style={{textAlign:'justify'}}>
        <h2 className={classes.ugHeading}>UGC Career Oriented Courses</h2>
        <p className={classes.diplomaHeading}>Preface</p>
        <p className={classes.diplomaContent}>
            The UGC during Xth Plan decided to recast the vocationalisation programme at undergraduate level under a modified scheme of CAREER ORIENTED PROGRMAME. The UGC has introduced a flexible system of certificate/diploma/advanced diploma programme, which run parallel to the conventional B.A., B.Com. and B.Sc. degrees. The Universities/colleges may formulate their own, ‘Need-Based’, Career-oriented courses.
            lp of the subject experts.

        </p>
        <p className={classes.diplomaContent}>

            The syllabi as per guidelines of the UGC on the scheme of courses may be prepared by the universities/colleges on their own keeping in view the subject specific academic needs and market requirements, with the he
        </p>
        <p className={classes.diplomaContent}>

            <i>Under this scheme KBN College is offering the following UGC Career Oriented Courses.</i>

        </p>

        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <a href="https://www.kbncollege.ac.in/academics.ph" target={'__blank'} className={classes.arrowwithContent} style={{ color: 'blue' }}>Communication Skills(Syllabus)</a>
        </div>

        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <a href="https://www.kbncollege.ac.in/academics.ph" target={'__blank'} className={classes.arrowwithContent} style={{ color: 'blue' }}>Multimedia Skills(Syllabus)</a>
        </div>

        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <a href="https://www.kbncollege.ac.in/academics.ph" target={'__blank'} className={classes.arrowwithContent} style={{ color: 'blue' }}>Accounting Packages(Syllabus)</a>
        </div>

        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <a href="https://www.kbncollege.ac.in/academics.ph" target={'__blank'} className={classes.arrowwithContent} style={{ color: 'blue' }}>Hardware Technology(Syllabus)</a>
        </div>

        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <a href="https://www.kbncollege.ac.in/academics.ph" target={'__blank'} className={classes.arrowwithContent} style={{ color: 'blue' }}>Business Process Outsourcing(Syllabus) </a>
        </div>

        <p className={classes.diplomaHeading}>OBJECTIVE</p>
        <p className={classes.diplomaContent}>
            The objective of the scheme is to introduce career and market-oriented, skill enhancing add-on courses that have utility for job, self-employment and empowerment of the students. At the end of three years, the students will be equipped with a Certificate/Diploma/Advanced diploma in an add-on orientation course along with a conventional degree in Science/Arts/Commerce.
        </p>

    </div>;
};

export default Ugccareer;
