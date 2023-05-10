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

const MSCCSSHome = () => {
    const classes = useStyles();

    return <div>
        <h2 className={classes.teluguHeadingMain}>DEPARTMENT OF M.SC(CS)</h2>
        <h3 className={classes.teluguHeading}>VISION</h3>
        <p className={classes.teluguContent}>To impart sound technical education and produce competent professionals with human values fit for employability, entrepreneurship and research capabilities, to meet the challenges in the globalized knowledge society.</p>
        <h3 className={classes.teluguHeading}>MISSION</h3>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
                To enhance the student knowledge across the discipline of Computer Science and Applications.
            </p>
        </div>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
                Imparting quality education through well-designed curriculum on par with the growing needs of the global IT sector.
            </p>
        </div>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
                To nurture innovative and ethically competent IT professionals fit to meet challenging environments.
            </p>
        </div>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
                Organizing effective interactions among faculty and students and foster networking with alumni, industries for mutual benefit
            </p>
        </div>
        <h3 className={classes.teluguHeading}>PROGRAM EDUCATIONAL OBJECTIVES</h3>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
                To prepare graduates who will achieve peer-recognition: as an individual or in a team through demonstration of good analytical, design and implementation skills.
            </p>
        </div>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
                To prepare graduates who will thrive to pursue life-long learning to fulfil their goals.
            </p>
        </div>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
                To train the students to have a sound foundation in the fundamentals of Computer technology and to be sensitive to the issues prevailing in the society.
            </p>
        </div>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
                Foster Innovation of new ideas, methods and techniques in science and research.
            </p>
        </div>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
                The programme will pursue research, higher education and act with moral values.
            </p>
        </div>
        <h3 className={classes.teluguHeading}>PROGRAM OUTCOMES</h3>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
                Students will be able to demonstrate a broad knowledge of Computer Science which includes data structures, operating systems, computer programming skills, computer organization, algorithm design, and automata theory.
            </p>
        </div>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
                Students will demonstrate the ability to communicate effectively and to work as a team.
            </p>
        </div>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
                Able to systematically review, analyse, assimilate and interpret the body of scientific literature and innovations in their discipline area.
            </p>
        </div>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
                An ability to communicate effectively.
            </p>
        </div>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
                An ability to appreciate the importance of goal setting to recognize the need for life -long learning.
            </p>
        </div>
    </div>;
};

export default MSCCSSHome;
