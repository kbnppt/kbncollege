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

const LibraryHome = () => {
    const classes = useStyles();

    return <div>
        <h2 className={classes.teluguHeadingMain}>DEPARTMENT OF LIBRARY SCIENCE</h2>
        <h3 className={classes.teluguHeading}>VISION</h3>
        <p className={classes.teluguContent}>
            The Library will be recognized as an accessible and exceptional center of research, learning and creativity focused on student success.We will provide the best of contemporary and traditional research tools,unique local resources,and state of the art facilities to the student community and worked to ensure that all its members are proficient information users. We will be leaders in developing and utilizing the talent of every one who works in the library achieve excellency in service to students and to our teaching community.
        </p>
        <h3 className={classes.teluguHeading}>MISSION STATEMENT</h3>
        <p className={classes.teluguContent}>
            WE BRING PEOPLE AND INFORMATION TOGETHER
        </p>
        <p className={classes.teluguContent}>
            The Library’s mission is to provide comprehensive resources and services in support of the research, teaching, and learning methods of the college community.To fulfil this mission
        </p>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
                Understand the research, teaching and learning needs of its users.
            </p>
        </div>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
                Build collections and create tools to support research, teaching, and learning.
            </p>
        </div>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
                Provide access to and promote the discovery and use of local and external information resource.
            </p>
        </div>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
                Ensure the preservation and long –lasting availability of Library collections and resources.
            </p>
        </div>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
                Create hospitable physical and virtual environments for study, teaching, and research.
            </p>
        </div>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
                Collaborate with other members of the university to enrich the research and learning community.
            </p>
        </div>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
                Advance local national and international library and information initiatives.
            </p>
        </div>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
                Develop encourage, and sustain expertise, skill, commitment and an innovate spirit in its staff
            </p>
        </div>
    </div>;
};

export default LibraryHome;
