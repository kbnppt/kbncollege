import React from 'react'
import { Container, makeStyles } from '@material-ui/core';
import Header from '../../Header/MainNavigation';
import HeadingComponent from '../../Headings/index';
import VerticalTabs from '../../MainSidebar/MainSidebar';
import HorizontalCutomTabs from '../../MainSidebar/HorizontalBar';
import ExaminationCell from './ExaminationCell';
import EvaluationProcess from './EvaluationProcess';
import CourseStructure from './CourseStructure';
import StudentOnlineServices from './StudentOnlineServices';
import AcademicCalendar from './AcademicCalendar';
import ContactComponent from './ExaminationContact';
import TimeTable from './Examinations/TimeTable';
import ResultsandAnalysis from './Examinations/ResultsandAnalysis';
import ModelPapers from './Examinations/ModelPapers';
import MalPapers from './Examinations/MalPapers';

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'relative',
        textAlign:'justify'
    },
    allBlocks: {
        height: '210px',
        padding: '4rem 0',
        background: '#050e3e',
        [theme.breakpoints.down("sm")]: {
            height: '300px',
        },
        [theme.breakpoints.down("xs")]: {
            height: '370px',
        },
    },
    headerStyle: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '2rem 0 1rem 0',
        textAlign: 'center',
        background: '#050e3e',
        color: '#fff',
        textTransform: 'uppercase'
    },
    verticalTabsRoot: {
        display: 'block',
        padding: '2rem 0',
        width: '100%',
        [theme.breakpoints.down("sm")]: {
            display: 'none'
        },
    },
    horizontalTabsRoot: {
        display: 'none',
        [theme.breakpoints.down("sm")]: {
            display: 'block'
        },
    }
}));

const Index = () => {
    const classes = useStyles();

    const data = [
        { id: 1, title: 'Examination Cell', componentInfo: <ExaminationCell /> },
        { id: 2, title: 'Evaluation Process', componentInfo: <EvaluationProcess /> },
        {
            id: 3, title: 'Examinations', subTitles: [
                { id: 1, title: 'TimeTable',componentInfo: <TimeTable /> },
                { id: 2, title: 'Results & Analysis',componentInfo: <ResultsandAnalysis /> },
                { id: 3, title: 'Model Papers',componentInfo: <ModelPapers /> },
                { id: 4, title: 'MalPractice',componentInfo: <MalPapers /> },
            ] 
        },
        { id: 4, title: 'Course Structure', componentInfo: <CourseStructure /> },
        { id: 5, title: 'Student Online Services', componentInfo: <StudentOnlineServices /> },
        { id: 6, title: 'Academic Calendar', componentInfo: <AcademicCalendar /> },
        { id: 7, title: 'Examination Contact', componentInfo: <ContactComponent /> }
    ];

    return (
        <div className={classes.root}>
            <Header />
            <div className={classes.headerStyle}>
                <Container>
                    <HeadingComponent data1="Examination Cell" data2="" Color={true} />
                </Container>
            </div>
            <div className={classes.horizontalTabsRoot}>
                <HorizontalCutomTabs data={data} shadowProp={true} />
            </div>
            <Container>
                <div className={classes.verticalTabsRoot}>
                    <VerticalTabs data={data} />
                </div>
            </Container>

        </div>
    )
}

export default Index;