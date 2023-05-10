import React from 'react';
import { makeStyles } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const useStyles = makeStyles((theme) => ({
    teluguHeadingMain:{
        // fontSize:'30px',
        textAlign:'center',
        color:'#2e69d6'
    },
    teluguHeading:{
        // fontSize:'23px',
        color:'green',
        margin:'0',
        paddingTop:'12px'
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
    teluguContent:{
    //    fontSize:'22px',
       margin:'0',
       paddingTop:'10px'
    }
  
}));

const ComputerHome = () => {
    const classes = useStyles();

    return <div>
        <h2 className={classes.teluguHeadingMain}>DEPARTMENT OF COMPUTER SCIENCE & APPLICATIONS</h2>
        <h3 className={classes.teluguHeading}>VISION</h3>
        <p className={classes.teluguContent}>
        The Department of Computer Science strives for the overall development of the students and promotes scientific bent of mind with a motto “to equip the learners becoming Software Professionals”.
        </p>
        <h3 className={classes.teluguHeading}>MISSION</h3>
        <p className={classes.teluguContent}>
        keeping in view of the growing challenges in IT sector globally The Department of Computer Science designs curriculum suitable to global market needs.It offers Quality Education through constant orientation both in theory and practical using the state of art technology thus fecilitating students secure placements in top 10 IT industries.
        </p>
        <h3 className={classes.teluguHeading}>Program Educational Objectives (PEOs)</h3>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
            <b>PEO1:</b> Graduate will establish himself/herself as effective professionals by solving real world problems using investigative and analytical skills along with the knowledge acquired in the field of Computer Science and Engineering
            </p>
        </div>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
            <b>PEO2:</b> Graduate will demonstrate his/her ability to adapt to rapidly changing environment in advanced areas of Computer Science and scale new height in their profession through lifelong learning
            </p>
        </div>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
            <b>PEO3:</b> Graduate will prove his/her ability to work and communicate effectively as a team member and /or leader to complete the task with minimal resources, meeting deadlines
            </p>
        </div>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
            <b>PEO4:</b> Graduate will embrace professional code of ethics in the profession while deliberately being part of projects which contributes to the society at large without disturbing the ecological balance
            </p>
        </div>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
            <b>PEO5:</b> Graduate will apply the ethical and social aspects of modern computing technology to the design, development, and usage of computing artifacts; and, enhance their skills and embrace new computing technologies through self-directed professional development and post-graduate training or education
            </p>
        </div>
        <h3 className={classes.teluguHeading}>PROGRAMME OUTCOMES:</h3>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
            <b>PO1:</b> An ability to develop solutions to the complex problems in the field of Information Technology
            </p>
        </div>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
            <b>PO2:</b> A focused skill to design computational system according to the needs of industry
            </p>
        </div>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
            <b>PO3:</b> Think critically, follow innovations and developments in science and technology
            </p>
        </div>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
            <b>PO4:</b> Demonstrate knowledge of discrete mathematics and data structures
            </p>
        </div>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
            <b>PO5:</b> Knowledge of probability and statistics, including applications appropriate to computer science
            </p>
        </div>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
            <b>PO6:</b> Design, implement, test, and evaluate a computer system, component, or algorithm to meet desired needs and to solve a computational problem.
            </p>
        </div>
        <h3 className={classes.teluguHeading}>PROGRAMME SPECIFIC OUTCOMES:</h3>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
            <b>PSO1:</b> To collect requirements, analyse, design, implement and test software Systems
            </p>
        </div>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
            <b>PSO2:</b> A focused skill to design computational system according to the needs of industry
            </p>
        </div>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
            <b>PSO3:</b> To have an ability to analyse a problem, and identify and define the computing requirements appropriate to its solution
            </p>
        </div>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
            <b>PSO4:</b> To have an ability to design, implement, and evaluate a computer-based system, process, component, or program to meet desired needs
            </p>
        </div>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
            <b>PSO5:</b> Knowledge of probability and statistics, including applications appropriate to computer science
            </p>
        </div>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
            <b>PSO6:</b>  To have an ability to function effectively on teams to accomplish a common goal
            </p>
        </div>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
            <b>PSO7:</b> To have an understanding of professional, ethical, legal, security and social issues and responsibilities
            </p>
        </div>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
            <b>PSO8:</b> To have an ability to communicate effectively with a range of audiences
            </p>
        </div>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
            <b>PSO9:</b> To have an ability to use current techniques, skills, and tools necessary for computing practice
            </p>
        </div>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
            <b>PSO10:</b> An ability to apply mathematical foundations, algorithmic principles, and computer science theory in the modeling and design of computer-based systems in a way that demonstrates comprehension of the trade-offs involved in design choices
            </p>
        </div>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
            <b>PSO11:</b> To have an ability to apply design and development principles in the construction of software systems of varying complexity
            </p>
        </div>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
            <b>PSO12:</b> To have an ability to develop the ability to build and assess data-based models
            </p>
        </div>
        <h3 className={classes.teluguHeading}>LEARNING OUTCOMES:</h3>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
            <b>LO1:</b> Exhibit problem solving skills. [Problem Solving]
            </p>
        </div>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
            <b>LO2:</b> Have the ability to use techniques, skills and modern development tools necessary for engineering practice. [Techniques/Skills]
            </p>
        </div>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
            <b>LO3:</b> Work effectively on teams. [Team Work]
            </p>
        </div>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
            <b>LO4:</b> Demonstrate the ability to identify and apply concepts of planning the economics and project planning. [Planning]
            </p>
        </div>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
            <b>LO5:</b> Demonstrate knowledge of contemporary global and societal issues and their relationship to professional ethics and developmental solutions. [Ethics/Profession]
            </p>
        </div>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
            <b>LO6:</b> Demonstrate the ability to plan and conduct laboratory experiments and interpret and report the results. [Experiment/Results]
            </p>
        </div>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
            <b>LO7:</b> Exercise strong oral and written communication skills including those needed for technical writing. [Communication]
            </p>
        </div>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
            <b>LO8:</b> Have an awareness of the need for and demonstrate the ability to keep learning throughout life along with an appreciation of diversity in the world and in intellectual areas. [Diversity and LLL].
            </p>
        </div>
    </div>
}

export default ComputerHome