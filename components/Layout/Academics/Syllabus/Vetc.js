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

const Vetc = () => {
    const classes = useStyles();

    return <div>
        <h2 className={classes.ugHeading}>Vocational Education Training Courses</h2>
        <p className={classes.diplomaContent}>
            KBN College provides Vocational Education Training Courses like Computer Fundamentals, M.S.Office & Internet for all I year Degree students, DeskTop Publishing for all II year Degree students and Accounting Packages..Tally for all III Year B.Com Section Students to improve their employability skills. After the completion of the course Certificates will be issued to the students by State Institute of Vocational Education, Commissioner of Intermediate Education, AP, Guntur.
        </p>

        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <a href="attachments/itdp.pdf" target={'__blank'} className={classes.arrowwithContent} style={{ color: 'blue' }}>Computer Fundamentals, M.S.Office & Internet-ITCR(Syllabus)</a>
        </div>

        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <a href="https://www.kbncollege.ac.in/academics.ph" target={'__blank'} className={classes.arrowwithContent} style={{ color: 'blue' }}>DeskTop Publishing-ITDP(Syllabus)</a>
        </div>

        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <a href="https://www.kbncollege.ac.in/academics.ph" target={'__blank'} className={classes.arrowwithContent} style={{ color: 'blue' }}>Accounting Packages-CRAP(Syllabus)</a>
        </div>


    </div>;
};

export default Vetc;
