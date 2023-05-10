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

const ChemistryHome = () => {
    const classes = useStyles();

    return <div>
        <h2 className={classes.teluguHeadingMain}>DEPARTMENT OF CHEMISTRY</h2>
        <h3 className={classes.teluguHeading}>VISION</h3>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
                To provide career guidance counseling and information regarding job opportunities at various levels.
            </p>
        </div>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
                To enhance & develop analytical abilities of the students through the participation in the workshops, competitions, curricular and co-curricular activities.
            </p>
        </div>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
                To be a leading department in Chemistry, delivering high Quality teaching & community services.
            </p>
        </div>
        <h3 className={classes.teluguHeading}>MISSION</h3>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
                The Chemistry Department is committed in helping each student to achieve personal and academic potential.
            </p>
        </div>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
                Provides a High Quality Education for the students.
            </p>
        </div>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
                Promotes frequent interactions between faculty and students.
            </p>
        </div>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
                To develop independent thought & high ethical standards.
            </p>
        </div>
        <h3 className={classes.teluguHeading}>PROGRAM OUTCOMES</h3>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
                <b>PO1:</b> Theory and Knowledge: After completion of the course, students are able to recognize and apply the principles of atomic and molecular structure to predict chemical properties and chemical reactivity.
            </p>
        </div>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
                <b>PO2:</b> Laboratory Skills: Upon completion of a degree, chemistry majors are able to employ critical thinking and scientific inquiry in the performance, design, interpretation and documentation of laboratory experiments, at a level suitable to succeed at an entry-level position in chemical industry or a chemistry related fields.
            </p>
        </div>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
                <b>PO3:</b> Quantitative Skills: Upon completion of a chemistry degree, chemistry majors are able to interpret and analyse quantitative data.
            </p>
        </div>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
                <b>PO4:</b> Instrumentation: Upon completion of a BSc in Chemistry degree, students are able to understand theoretical concepts of instruments that are commonly used in most chemistry fields as well as interpret and use data generated in instrumental chemical analyses.
            </p>
        </div>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
                <b>PO5:</b> Demonstrate competency in the laboratory and calculation skills expected of a practicing chemist. (Reproduce and extend experiments from the primary literature, design experimental protocols, troubleshoot experimental procedures and equipment. Use equipment widely found in employment and graduate school (pHmeter,colorimeter.conductometer.potentiometer,uvvisspectrophotometer,etc)
            </p>
        </div>
        <h3 className={classes.teluguHeading}>PROGRAMME SPECIFIC OUTCOMES:</h3>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
                <b>PSO1:</b> The fundamental properties of atoms, molecules and the various states of matter with an emphasis on the particulate nature of matter & the idea of a amole and the use of stoichiometry
            </p>
        </div>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
                <b>PSO2:</b> Fundamental atomic structure and the periodicity of elements in the periodic table & the fundamentals of acid/base reactions, redox reactions and precipitation reactions
            </p>
        </div>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
                <b>PSO3:</b> The “Gas Laws” governing the physical / chemical behaviour of gases
            </p>
        </div>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
                <b>PSO4:</b> The bonding fundamentals for both ionic and covalent compounds, including electronegative, bond distances and bond energies using MO diagrams and thermodynamic data
            </p>
        </div>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
                <b>PSO5:</b> The bonding models , structures, reactive and applications of coordination complexes, boron hydrides, metal carbonyls and organometallics
            </p>
        </div>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
                <b>PSO6:</b>  The use of nuclear magnetic spectroscopy, mass spectroscopy and infrared spectroscopy for organic structure elucidation
            </p>
        </div>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
                <b>PSO7:</b> The fundamentals of electronic structure and bonding in conjugated and aromatic systems & the fundamental electronic structure and bonding in carbonyl compounds
            </p>
        </div>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
                <b>PSO8:</b>  Chemical kinetics; how reaction rates are measured and represented in rate laws, and applications of chemical kinetics in studying enzyme mechanisms
            </p>
        </div>
        <div className={classes.objectivesContent}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
            <p className={classes.arrowwithContent}>
                <b>PSO9:</b> Chemical bonding from the valence bond model and molecular orbital theory.
            </p>
        </div>
    </div>;
};

export default ChemistryHome;
