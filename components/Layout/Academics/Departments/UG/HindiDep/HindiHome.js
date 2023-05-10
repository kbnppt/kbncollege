import React from 'react';
import { makeStyles } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const useStyles = makeStyles((theme) => ({
    teluguHeadingMain: {
      //fontSize:'36px',
        textAlign: 'center',
        color: '#2e69d6'
    },
    teluguHeading: {
              // fontSize: '23px',
        color: 'green',
        margin: '0',
        paddingTop: '12px'
    },
    objectivesContent: {
        display: 'flex',
        paddingTop: '12px',
    },
    arrowIcon: {
        marginTop: '4px',
        marginRight: '10px'
    },
    arrowwithContent: {
      // fontSize: '22px',
        margin: '0px'
    },
    teluguContent: {
      // fontSize: '22px',
        margin: '0',
        paddingTop: '10px'
    }

}));


const HindiHome = () => {
    const classes = useStyles();

    return <div>
        <h2 className={classes.teluguHeadingMain}>DEPARTMENT OF HINDI</h2>
        <h3 className={classes.teluguHeading}>Vision</h3>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
                The department envisions implementation of Hindi as an official language and promote Hindi language and Literature in the Non Hindi speaking area.</p>
        </div>
        <h3 className={classes.teluguHeading}>Mission</h3>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
                The mission of the department is to train the student to become a competent speaker in Hindi.
            </p>
        </div>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
                to teach Hindi comprehensively in accordance with the three language formula.
            </p>
        </div>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
                to acquiant the student with the developments of Modern Hindi language.
            </p>
        </div>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
                to introduce the student to the various geners of Hindi literature.
            </p>
        </div>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
                to empower the student as to become a good translator.
            </p>
        </div>
        <h3 className={classes.teluguHeading}>Programme Ouctomes</h3>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
                <b>PO1:</b> To preserve and promote India’s linguistic interests related to Hindi language and to instil human values inherent in its literature.
            </p>
        </div>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
                <b>PO2:</b> To provide civic and cultural education through quality publications, seminars, and conventions, and to generate interest in the learning of Hindi among younger generation by assisting and persuading educational institutions such as High Schools, Colleges, and Universities include in Hindi in the curriculum.
            </p>
        </div>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
                <b>PO1:</b> To establish and promote a centre of eminent Hindi scholars to encourage them to write and translate prominent works in Hindi.
            </p>
        </div>
        <h3 className={classes.teluguHeading}>Programme Specific Outcomes</h3>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
                <b>PSO1:</b> Improved comprehensive ability
            </p>
        </div>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
                <b>PSO2:</b> Writing skills
            </p>
        </div>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
                <b>PSO3:</b> Inculcation of human values.
            </p>
        </div>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
                <b>PSO4:</b> Knowledge of grammar.
            </p>
        </div>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
                <b>PSO5:</b> Cultural adaptability.
            </p>
        </div>
    </div>;
};

export default HindiHome;