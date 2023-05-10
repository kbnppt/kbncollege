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

const MathamaticsDepHome = () => {
    const classes = useStyles();

    return <div>
        <h2 className={classes.teluguHeadingMain}>DEPARTMENT OF MATHEMATICS & STATISTICS</h2>
        <h3 className={classes.teluguHeading}>VISION</h3>
        <p className={classes.teluguContent}>
            The Department of Mathematics aspires for maintaining the highest standards of excellence in teaching,learning and evaluation.The department strives to set bench mark standard for its expertise in the teaching of mathematics.
        </p>
        <h3 className={classes.teluguHeading}>MISSION</h3>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
                The Department of Mathematics will offer courses and programs of study that will ensure that the learner will be able to contribute to the contemporary society.
            </p>
        </div>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
                The student will acquire compitiency to critically assess numerical and graphical information learn to formulate strategies for solving problems.
            </p>
        </div>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
                The Department, through its faculty, will continue to contribute to the body of knowledge of the discipline, whether in traditional research, applied research, or research in the teaching of mathematics.
            </p>
        </div>
        <h3 className={classes.teluguHeading}>MATHEMATICS - PROGRAMME OUTCOMES:</h3>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
                <b>PO1:</b> To create interest to learn mathematics.
            </p>
        </div>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
                <b>PO2:</b> To develop mathematical skills to understand practical applications.
            </p>
        </div>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
                <b>PO3:</b> To develop scientific reasons and proofs in daily applications of mathematics.
            </p>
        </div>
        <h3 className={classes.teluguHeading}>STATISTICS - PROGRAMME OUTCOMES:</h3>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
                <b>PO1:</b> To understand the basic theoretical and applied principles of statistics.
            </p>
        </div>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
                <b>PO2:</b> To develop and communicate key statistical concepts to non-statisticians
            </p>
        </div>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
                <b>PO3:</b> Use of statistical knowledge to identify and solve problems.
            </p>
        </div>
        <h3 className={classes.teluguHeading}>MATHEMATICS - PROGRAMME SPECIFIC OUTCOMES</h3>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
                <b>PSO1:</b> Student is equipped with mathematical modeling ability, problem solving skills, creative, talent and power of communication necessary for various kinds of employment.
            </p>
        </div>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
                <b>PSO2:</b> Know when there is a need for information, to be able to identify, locate, evaluate and effectively use that information for the issue or problem at hand.
            </p>
        </div>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
                <b>PSO3:</b> Formulate and develop mathematical arguments in a logical manner.
            </p>
        </div>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
                <b>PSO4:</b> Acquire good knowledge and understanding in advanced areas of mathematics and statistics, chosen by the student from the given courses
            </p>
        </div>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
                <b>PSO5:</b> Understand, formulate and use quantitative models arising in social science, business and other contexts.
            </p>
        </div>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
                <b>PSO6:</b> Gain experience investigating the real world problems and learn to how to apply mathematical ideas and models to those problems.
            </p>
        </div>
        <h3 className={classes.teluguHeading}>STATISTICS - PROGRAMME SPECIFIC OUTCOMES:</h3>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
                <b>PSO1:</b> Understand the nature of Data and the basic skills of graphical representation
            </p>
        </div>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
                <b>PSO2:</b> The student should be able to understand the distribution theory and be able to apply them to in practical problems
            </p>
        </div>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
                <b>PSO3:</b> Identify the association between the variable and also formulate the mathematical relationship between them
            </p>
        </div>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
                <b>PSO4:</b> They may have a brief idea about the inferential statistics and may draw inference to the industrial problems also.
            </p>
        </div>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
                <b>PSO5:</b> Be able to give solutions to the industrial problems by using Operations research Techniques.
            </p>
        </div>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
                <b>PSO6:</b> Predict the Future values basing on the past observations after eliminating the fluctuations
            </p>
        </div>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
                <b>PSO7:</b> Apply data science concepts and methods to solve problems in real-world contexts and will communicate these solutions effectively
            </p>
        </div>
    </div>
}

export default MathamaticsDepHome;
