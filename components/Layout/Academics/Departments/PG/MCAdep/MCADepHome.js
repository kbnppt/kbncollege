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

const MCADepHome = () => {
    const classes = useStyles();

    return <div>
        <h2 className={classes.teluguHeadingMain}>DEPARTMENT OF MCA</h2>
        <h3 className={classes.teluguHeading}>VISION</h3>
        <p className={classes.teluguContent}>
            To envision being the pioneers who understand educational challenges and market demands, and create top quality successful and sustainable programs and curricula for our students
        </p>
        <h3 className={classes.teluguHeading}>MISSION</h3>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
                To offer a high-quality education in the science of computing, as well as to produce graduates that are knowledgeable, articulate, principled, innovative, confident, and able to think critically.
            </p>
        </div>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
                To prepare computing graduates who are highly sought after, productive and well- respected for their work, and who contribute to new developments in computing technology.
            </p>
        </div>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
                Provide appropriate foundation in computing for their education, research and experiences after graduation, consistent with computing’s increasingly fundamental role in the society.
            </p>
        </div>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
                Engages in outreach activities that promote a spirit of cooperation between college and community
            </p>
        </div>
        <h3 className={classes.teluguHeading}>PROGRAM EDUCATIONAL OBJECTIVES</h3>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
                To impart knowledge and training in the recent advancements and modern trends and technologies in the field of computer applications with aim to develop working knowledge about computers effectively in developing commercial and scientific applications.
            </p>
        </div>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
                To enable the students to have a holistic approach to become a thorough professional in the field IT.
            </p>
        </div>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
                To prepare graduates who will be successful professionals in industry, government, academia, research, entrepreneurial pursuit and consulting firms.
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
                To prepare graduates who will contribute to society as broadly educated, expressive, ethical and responsible citizens with proven expertise.
            </p>
        </div>
        <h3 className={classes.teluguHeading}>PROGRAM OUTCOMES</h3>
        <p className={classes.teluguContent}>At the completion of program the student develops:</p>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
                An ability to identify, critically analyse, formulate and develop computer applications.
            </p>
        </div>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
                An ability to apply knowledge of mathematics and computer science in practice.
            </p>
        </div>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
                An ability to select modern computing tools and techniques and use them with ease.
            </p>
        </div>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
                An ability to design a computing system to meet desired needs within realistic constraints such as safety, security and applicability.
            </p>
        </div>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
                An ability to functions professionally with ethical responsibility as an individual as well as in multidisciplinary teams with positive attitude.
            </p>
        </div>
    </div>;
};

export default MCADepHome;
