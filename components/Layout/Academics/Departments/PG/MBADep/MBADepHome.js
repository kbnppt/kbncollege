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

const MBADepHome = () => {
    const classes = useStyles();

    return <div>
        <h2 className={classes.teluguHeadingMain}>DEPARTMENT OF MBA</h2>
        <h3 className={classes.teluguHeading}>VISION</h3>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
                To make MBA a Distinctive, Research Oriented and Professional Programme.
            </p>
        </div>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
                To be a leader in Management Education through
                <p style={{ margin: '0' }}><b>a.</b> strong business partnerships,</p>
                <p style={{ margin: '0' }}><b>b.</b> focusing on technology and innovation,</p>
                <p style={{ margin: '0' }}><b>c.</b> promoting entrepreneurial programs and developing international initiatives and alliances.</p>
            </p>
        </div>
        <h3 className={classes.teluguHeading}>MISSION</h3>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
                To educate tomorrow’s leaders through the active integration of teaching, training and research,
            </p>
        </div>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
                To create an innovative and intellectual environment with a focus on leadership and management in a technology-rich, global marketplace
            </p>
        </div>
        <h3 className={classes.teluguHeading}>PROGRAM OUTCOMES</h3>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
                To have leadership and team membership skills needed for implementing and coordinating organizational activities and managing change.
            </p>
        </div>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
                To have an understanding of how global competitive environments are changing business practice.
            </p>
        </div>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
                To have the ability to integrate business knowledge and management techniques to aid planning and control in a changing environment.
            </p>
        </div>
        <h3 className={classes.teluguHeading}>PROGRAM SPECIFIC OUTCOMES</h3>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
                Equip students with necessary knowledge and managerial skills and competencies to occupy positions of management and administration in business, industry, public system and the government.
            </p>
        </div>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
                Develop the ability to examine and analyse the impact of the changing environment and to respond appropriately at tactical and strategic level.
            </p>
        </div>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
                Understand business management concepts and their applications to domestic and global business setting.
            </p>
        </div>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
                Develop essential decision making, critical and creative thinking, leadership and entrepreneurial abilities.
            </p>
        </div>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
                Inculcate appropriate ethical values and attitudes among students to function effectively in the work environment.
            </p>
        </div>
        <div className={classes.objectivesContent} style={{ marginBottom: '20px' }}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
                Apply conceptual business foundations to solve practical decision-making problems, both individually and as part of teams using techniques such as case analysis, projects and assignments.
            </p>
        </div>
        <a href='#' className={classes.teluguContent} style={{ color: 'blue' }}>SWAYAM 2017-2018</a>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/lj4yIiSr1jw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style={{ marginTop: '10px' }}></iframe>
        <p className={classes.teluguContent}>Meet the CEO Programme</p>
        <p className={classes.teluguContent} style={{ paddingBottom: '10px' }}>Organized by Department of MBA</p>
        <a href='#' className={classes.teluguContent} style={{ color: 'blue' }}>MBA INDUSTRY CONSULTANCY-LATEST FOR WEBSITE</a>
    </div>;
};

export default MBADepHome;
