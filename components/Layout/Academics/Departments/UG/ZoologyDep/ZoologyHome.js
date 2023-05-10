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

const ZoologyHome = () => {
    const classes = useStyles();

    return (
        <div>
            <h2 className={classes.teluguHeadingMain}>DEPARTMENT OF ZOOLOGY</h2>
            <h3 className={classes.teluguHeading}>VISION</h3>
            <div className={classes.objectivesContent}>
                <ArrowForwardIosIcon className={classes.arrowIcon} />
                <p className={classes.arrowwithContent}>
                    It aims at the all-round development of students.
                </p>
            </div>
            <div className={classes.objectivesContent}>
                <ArrowForwardIosIcon className={classes.arrowIcon} />
                <p className={classes.arrowwithContent}>
                    It instills scientific temper in the minds of the youth.
                </p>
            </div>
            <div className={classes.objectivesContent}>
                <ArrowForwardIosIcon className={classes.arrowIcon} />
                <p className={classes.arrowwithContent}>
                    Provides sound education in Basic Sciences.
                </p>
            </div>
            <div className={classes.objectivesContent}>
                <ArrowForwardIosIcon className={classes.arrowIcon} />
                <p className={classes.arrowwithContent}>
                    Inculcates high values through Liberal Education
                </p>
            </div>
            <h3 className={classes.teluguHeading}>MISSION</h3>
            <div className={classes.objectivesContent}>
                <ArrowForwardIosIcon className={classes.arrowIcon} />
                <p className={classes.arrowwithContent}>To carry out teaching and to adapt the recent teaching methodologies such as:
                    <p style={{ margin: '0' }}>a.Power Point Presentations.</p>
                    <p style={{ margin: '0' }}>b.Interactive method.</p>
                </p>
            </div>
            <div className={classes.objectivesContent}>
                <ArrowForwardIosIcon className={classes.arrowIcon} />
                <p className={classes.arrowwithContent}>
                    To achieve learner autonomy.
                </p>
            </div>
            <div className={classes.objectivesContent}>
                <ArrowForwardIosIcon className={classes.arrowIcon} />
                <p className={classes.arrowwithContent}>
                    Achieving scientific proficiency by doing study projects.
                </p>
            </div>
            <div className={classes.objectivesContent}>
                <ArrowForwardIosIcon className={classes.arrowIcon} />
                <p className={classes.arrowwithContent}>
                    To project the Zoology subject in a simple manner.
                </p>
            </div>
            <div className={classes.objectivesContent}>
                <ArrowForwardIosIcon className={classes.arrowIcon} />
                <p className={classes.arrowwithContent}>
                    To promote Research and learning at the PG Level and beyond
                </p>
            </div>
            <div className={classes.objectivesContent}>
                <ArrowForwardIosIcon className={classes.arrowIcon} />
                <p className={classes.arrowwithContent}>
                    To adapt ourselves to the changing demands of the Society.
                </p>
            </div>
            <div className={classes.objectivesContent}>
                <ArrowForwardIosIcon className={classes.arrowIcon} />
                <p className={classes.arrowwithContent}>
                    To provide inexpensive educational services to the weaker sections of the society.
                </p>
            </div>
            <h3 className={classes.teluguHeading}>PROGRAM OUTCOMES</h3>
            <div className={classes.objectivesContent}>
                <ArrowForwardIosIcon className={classes.arrowIcon} />
                <p className={classes.arrowwithContent}>
                    <b>PO1:</b> Contribute to the acquisition and spread of knowledge and promotion of research.
                </p>
            </div>
            <div className={classes.objectivesContent}>
                <ArrowForwardIosIcon className={classes.arrowIcon} />
                <p className={classes.arrowwithContent}>
                    <b>PO2:</b> Satisfy the intellectual demands of the students and to facilitate their attainment of basic and remarkable scientific skills that firmly establish qualities of self-confidence and self-reliance.
                </p>
            </div>
            <div className={classes.objectivesContent}>
                <ArrowForwardIosIcon className={classes.arrowIcon} />
                <p className={classes.arrowwithContent}>
                    <b>PO3:</b> Sustain student’s motivation and enthusiasm to appreciate different life forms and inspire them in the dissemination of the concept of biodiversity conservation.
                </p>
            </div>
            <div className={classes.objectivesContent}>
                <ArrowForwardIosIcon className={classes.arrowIcon} />
                <p className={classes.arrowwithContent}>
                    <b>PO4:</b> Develop problem solving skills in students and encourage them to carry out innovative research projects there by igniting in them the spirit of knowledge creation.
                </p>
            </div>
            <div className={classes.objectivesContent}>
                <ArrowForwardIosIcon className={classes.arrowIcon} />
                <p className={classes.arrowwithContent}>
                    <b>PO5:</b> Recommend electives and clusters for the Programme to ensure relevance to academic content and to enrich the knowledge that will enable them to make valuable contributions to contemporary biological issues of national and international interest.
                </p>
            </div>
            <div className={classes.objectivesContent}>
                <ArrowForwardIosIcon className={classes.arrowIcon} />
                <p className={classes.arrowwithContent}>
                    <b>PO6:</b> Make the students appreciate the implications of these subjects in further research in Animal Sciences.
                </p>
            </div>
            <div className={classes.objectivesContent}>
                <ArrowForwardIosIcon className={classes.arrowIcon} />
                <p className={classes.arrowwithContent}>
                    <b>PO7:</b> Equip the students for competitive exams like CSIR NET, SET etc. and also to write research proposals for grants.
                </p>
            </div>
            <div className={classes.objectivesContent}>
                <ArrowForwardIosIcon className={classes.arrowIcon} />
                <p className={classes.arrowwithContent}>
                    <b>PO8:</b> Acquire the skills in handling scientific instruments, planning and performing in laboratory experiments and drawing logical inferences from the experiments.
                </p>
            </div>
            <div className={classes.objectivesContent}>
                <ArrowForwardIosIcon className={classes.arrowIcon} />
                <p className={classes.arrowwithContent}>
                    <b>PO9:</b> Broadening the employment opportunities of our graduates as they are better prepared after training to establish themselves as private entrepreneurs or take up employment in related fields.
                </p>
            </div>
            <h3 className={classes.teluguHeading}>PROGRAM SPECIFIC OUTCOMES</h3>
            <div className={classes.objectivesContent}>
                <ArrowForwardIosIcon className={classes.arrowIcon} />
                <p className={classes.arrowwithContent}>
                    <b>PSO1:</b> Understand the nature and basic concepts of chordates, non-chordates, Cell biology, Evolution, Genetics, Embryology, Physiology, Ecology and applications of Biotechnology.
                </p>
            </div>
            <div className={classes.objectivesContent}>
                <ArrowForwardIosIcon className={classes.arrowIcon} />
                <p className={classes.arrowwithContent}>
                    <b>PSO2:</b> Give the student a look into the field of dairy and poultry industry and impress upon his mind about the importance of these industries in service to mankind.
                </p>
            </div>
            <div className={classes.objectivesContent}>
                <ArrowForwardIosIcon className={classes.arrowIcon} />
                <p className={classes.arrowwithContent}>
                    <b>PSO3:</b> Provide knowledge and skills in aquaculture systems, how they work, and how to best manage them as there is a need for qualified and professional people to work in the aquaculture industry
                </p>
            </div>
            <div className={classes.objectivesContent}>
                <ArrowForwardIosIcon className={classes.arrowIcon} />
                <p className={classes.arrowwithContent}>
                    <b>PSO4:</b> Gain knowledge on zoological principles that can be applied to solve problems in conservation and applied biology.
                </p>
            </div>
            <div className={classes.objectivesContent}>
                <ArrowForwardIosIcon className={classes.arrowIcon} />
                <p className={classes.arrowwithContent}>
                    <b>PSO5:</b> Identify the major groups of organisms, be able to classify them within a phylogenic framework, compare and contrast the characteristics of animals that differentiate them from other forms of life
                </p>
            </div>
            <div className={classes.objectivesContent}>
                <ArrowForwardIosIcon className={classes.arrowIcon} />
                <p className={classes.arrowwithContent}>
                    <b>PSO6:</b> Understand the unity of life with the rich diversity of organisms and their ecological and evolutionary significance
                </p>
            </div>
            <div className={classes.objectivesContent}>
                <ArrowForwardIosIcon className={classes.arrowIcon} />
                <p className={classes.arrowwithContent}>
                    <b>PSO7:</b> Apply the scientific method to questions in biology by formulating testable hypothesis, gathering and analyzing the data to assess the degree to which their scientific work supports their hypotheses.
                </p>
            </div>
            <div className={classes.objectivesContent}>
                <ArrowForwardIosIcon className={classes.arrowIcon} />
                <p className={classes.arrowwithContent}>
                    <b>PSO8:</b> Use the evidence of comparative biology to explain how the theory of evolution offers the only scientific explanation for the unity and diversity of life on earth.
                </p>
            </div>
            <div className={classes.objectivesContent}>
                <ArrowForwardIosIcon className={classes.arrowIcon} />
                <p className={classes.arrowwithContent}>
                    <b>PSO9:</b> Acquire basic skills in the observation and study of nature, biological techniques, experimental skills and scientific investigation.
                </p>
            </div>
            <div className={classes.objectivesContent}>
                <ArrowForwardIosIcon className={classes.arrowIcon} />
                <p className={classes.arrowwithContent}>
                    <b>PSO10:</b> Apply the theoretical knowledge gained during the program to the actual practice of laboratory animal science.
                </p>
            </div>
            <div className={classes.objectivesContent}>
                <ArrowForwardIosIcon className={classes.arrowIcon} />
                <p className={classes.arrowwithContent}>
                    <b>PSO11:</b> Explicate the ecological interconnectedness of life on earth by tracing energy and nutrient flows through the environment. They will be able to relate the physical features of the environment to the structure of populations, communities, and ecosystems.
                </p>
            </div>
            <div className={classes.objectivesContent}>
                <ArrowForwardIosIcon className={classes.arrowIcon} />
                <p className={classes.arrowwithContent}>
                    <b>PSO12:</b> Enable self-employment with knowledge and skills in certain applied branches like Medical Lab Technology, Aquaculture, Dairy, Poultry and Biotechnology.
                </p>
            </div>
        </div>
    )
}

export default ZoologyHome;