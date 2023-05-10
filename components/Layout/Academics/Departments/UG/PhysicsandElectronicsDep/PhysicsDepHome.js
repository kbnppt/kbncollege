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

const PhysicsDepHome = () => {
    const classes = useStyles();

    return <div>
        <h2 className={classes.teluguHeadingMain}>DEPARTMENT OF PHYSICS & ELECTRONICS</h2>
        <h3 className={classes.teluguHeading}>VISION</h3>
        <p className={classes.teluguContent}>
            To build a foundation for eminence and encourage the progress of the institution as a leading institution by igniting and promoting enthusiasm, interest and passion in the study of physics & electronics.
        </p>
        <h3 className={classes.teluguHeading}>MISSION</h3>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
                To make vital contributions in areas such as faculty, modern labs and demonstrate a high level of competence in the study physics
            </p>
        </div>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
                To develop constant improvement of the excellence of scientific research, the development of innovative curricula and techniques based on research and the latest scientific discoveries, greater international visibility and recognition of the Department, as well as the increasing impact on the development of the economy and society as a whole.
            </p>
        </div>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
                To promote the highest ethical principles in scientific research, critical thinking, openness to social, scientific, technological and educational changes.
            </p>
        </div>
        <h3 className={classes.teluguHeading}>PHYSICS - PROGRAM OUTCOMES:</h3>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
                <b>PO1:</b> To apply scientific methods and processes by formulating questions, designing investigations and synthesizing data to draw conclusions and make scientifically‐based decisions
            </p>
        </div>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
                <b>PO2:</b> To generate and interpret scientific data using quantitative, qualitative and analytical methodologies and techniques
            </p>
        </div>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
                <b>PO3:</b> To apply the core concepts of math, physics, chemistry and biology to a chosen scientific discipline
            </p>
        </div>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
                <b>PO4:</b> To demonstrate knowledge of the ethical, economic and social implications of scientific discovery and technological innovation
            </p>
        </div>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
                <b>PO5:</b> To interpret current scientific concepts and gaps in knowledge in light of the historical development of a chosen discipline
            </p>
        </div>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
                <b>PO6:</b> To apply contemporary research methods, skills and techniques to conduct independent inquiry in a chosen scientific discipline
            </p>
        </div>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
                <b>PO7:</b> To provide education in physics of the highest quality at the undergraduate level and generate graduates of the calibre sought by industries and public service as well as academic teachers and researchers of the future.
            </p>
        </div>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
                <b>PO8:</b>  To attract outstanding students from all backgrounds.
            </p>
        </div>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
                <b>PO9:</b> To provide an intellectually stimulating environment in which the students have the opportunity to develop their skills and enthusiasms to the best of their potential.
            </p>
        </div>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
                <b>PO10:</b> To maintain the highest academic standards in undergraduate teaching.
            </p>
        </div>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
                <b>PO11:</b> To impart the skills required to gather information from resources and use them.
            </p>
        </div>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
                <b>PO12:</b> To equip the students in methodology related to physic
            </p>
        </div>
        <h3 className={classes.teluguHeading}>PHYSICS - PROGRAM SPECIFIC OUTCOMES</h3>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
                <b>PSO1:</b> Recognize the relationship between the conceptual description of nature and its mathematical expression
            </p>
        </div>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
                <b>PSO2:</b> Develop the mathematical description of these principles that can be used to develop devices, structures, and technologies that are useful for mankind.
            </p>
        </div>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
                <b>PSO3:</b> Use the mathematical description of these principles to develop problem solving skills that will benefit your future career.
            </p>
        </div>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
                <b>PSO4:</b> Experience and deeply understand selected fundamental principles and the key vocabulary to describe it.
            </p>
        </div>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
                <b>PSO5:</b> Develop skills in oral and written communication, and following written instruction.
            </p>
        </div>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
                <b>PSO6:</b> Develop a notebook of checkout questions, purposes, strategies, and acceptable outcomes.
            </p>
        </div>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
                <b>PSO7:</b> To provide education in physics of the highest quality at the undergraduate level and generate graduates of the calibre sought by industries and public service as well as academic teachers and researchers of the future.
            </p>
        </div>
        <h3 className={classes.teluguHeading}>ELECTRONICS - PROGRAM OUTCOMES:</h3>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
                <b>PO1:</b> Having an ability to apply mathematics and science in engineering applications.
            </p>
        </div>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
                <b>PO2:</b>  Having an ability to design and conduct experiments, as well as to analyse and interpret data, and synthesis of information.
            </p>
        </div>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
                <b>PO3:</b> Having an ability to use techniques, skills, resources and modern engineering and IT tools necessary for engineering practice.
            </p>
        </div>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
                <b>PO4:</b>  Having ability to design a component or a product applying all the relevant standards and with realistic constraints, including public health, safety, culture, society and environment.
            </p>
        </div>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
                <b>PO5:</b> Having a real time hands on experience on projects that help to learn more analytically.
            </p>
        </div>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
                <b>PO6:</b> Having adaptive thinking and adaptability in relation to environmental context and sustainable development.
            </p>
        </div>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
                <b>PO7:</b> Having a clear understanding of professional and ethical responsibility.
            </p>
        </div>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
                <b>PO8:</b> Having a clear understanding about the technology used to build these kinds of devices, how they communicate, how they store data, and the kinds of distributed systems needed to support them.
            </p>
        </div>
        <h3 className={classes.teluguHeading}>ELECTRONICS - PROGRAM SPECIFIC OUTCOMES:</h3>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
                <b>PSO1:</b> Competent, and innovative with a strong cognizance in the area of sensors, IoT, data science, controllers and signal processing through the application of acquired knowledge and skills
            </p>
        </div>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
                <b>PSO2:</b> Apply advanced techniques and tools of sensing and computation to solve multi-disciplinary challenges in industry and society.
            </p>
        </div>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
                <b>PSO3:</b> To exhibit independent and collaborative research with strategic planning, while demonstrating the professional and ethical responsibilities of the engineering profession.
            </p>
        </div>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
                <b>PSO4:</b> Effective usage of IoT deployment for different sectors.
            </p>
        </div>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
                <b>PSO5:</b> Developing and modifying code for various sensor based applications using wireless sensor modules and working with variety of modules like environmental and security module.
            </p>
        </div>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
                <b>PSO6:</b> Exploring the features of predictive data analytics for IoT applications.
            </p>
        </div>
    </div>;
};

export default PhysicsDepHome;
