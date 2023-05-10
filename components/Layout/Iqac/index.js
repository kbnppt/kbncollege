import React from 'react'
import { Container, makeStyles } from '@material-ui/core';
import Header from '../../Header/MainNavigation';
import HeadingComponent from '../../Headings/index';
import VerticalTabs from '../../MainSidebar/MainSidebar';
import HorizontalCutomTabs from '../../MainSidebar/HorizontalBar';
import AboutIQAC from './AboutIQAC';
import AQARReports from './AQARReports';
import IQACReports from './IQACReports';
import AAAReports from './AAAReports';
import IQACMeeting from './IQACMeeting';
import ResearchPromotion from './ResearchPromotion';
import CollegeActivityRegister from './CollegeActivityRegister';
import FDPPrograms from './QualityInitiatives/FDPPrograms';
import InternationalSeminars from './QualityInitiatives/InternationalSeminars';
import NationalSeminars from './QualityInitiatives/NationalSeminars';
import Workshops from './QualityInitiatives/Workshops';
import AddOnPrograms from './QualityInitiatives/AddOnPrograms';
import BridgeCourses from './QualityInitiatives/BridgeCourses';
import TLIMethods from './QualityInitiatives/TLIMethods';
import InterActionMeets from './QualityInitiatives/InterActionMeets';
import OrientationPrograms from './QualityInitiatives/OrientationPrograms';
import ParentsMeet from './QualityInitiatives/ParentsMeet';
import PatentFiling from './ResearchPromotionAndMonitoringCell/PatentFiling'
import ResearchCenters from './ResearchPromotionAndMonitoringCell/ResearchCenters'
import ResearchSupervisors from './ResearchPromotionAndMonitoringCell/ResearchSupervisors'
import Activities from './ResearchPromotionAndMonitoringCell/Activities'
import MRPPage from './ResearchPromotionAndMonitoringCell/MRPPage'

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
        [theme.breakpoints.down("sm")]: {
            display: 'none'
        },
    },
    horizontalTabsRoot: {
        display: 'none',
        textAlign:'justify',
        [theme.breakpoints.down("sm")]: {
            display: 'block'
        },
    }
}));

const Index = () => {
    const classes = useStyles();

    const data = [
        { id: 1, title: 'About IQAC', componentInfo: <AboutIQAC /> },
        { id: 2, title: 'AQAR Reports', componentInfo: <AQARReports /> },
        { id: 3, title: 'IQAC Reports', componentInfo: <IQACReports /> },
        { id: 4, title: 'AAA Reports', componentInfo: <AAAReports /> },
        { id: 5, title: 'IQAC Minutes of Meeting', componentInfo: <IQACMeeting /> },
        {
            id: 6, title: 'Quality Initiatives', subTitles: [
                { id: 1, title: 'FDP Programmes', componentInfo: <FDPPrograms /> },
                { id: 2, title: 'International Seminars', componentInfo: <InternationalSeminars /> },
                { id: 3, title: 'National Seminars', componentInfo: <NationalSeminars /> },
                { id: 4, title: 'Workshops', componentInfo: <Workshops /> },
                { id: 5, title: 'Add On Programmes', componentInfo: <AddOnPrograms /> },
                { id: 6, title: 'Bridge Courses', componentInfo: <BridgeCourses /> },
                { id: 7, title: 'TLI methods', componentInfo: <TLIMethods /> },
                { id: 8, title: 'Interaction Meets', componentInfo: <InterActionMeets /> },
                { id: 9, title: 'Orientation Programmes', componentInfo: <OrientationPrograms /> },
                { id: 10, title: 'Parents Meet', componentInfo: <ParentsMeet /> },
            ]
        },
        { id: 7, title: 'College Activity Register', componentInfo: <CollegeActivityRegister /> },
        { id: 8, title: 'Research Promotion and Monitoring Cell',subTitles: [
            { id: 1, title: 'Research Policy', componentInfo: <ResearchPromotion /> },
            { id: 2, title: 'MRP Cell', componentInfo: <MRPPage /> },
            { id: 3, title: 'Activities', componentInfo: <Activities /> },
            { id: 4, title: 'Research Centers', componentInfo: <ResearchCenters /> },
            { id: 5, title: 'Research Supervisors', componentInfo: <ResearchSupervisors /> },
            { id: 6, title: 'Patent Filing', componentInfo: <PatentFiling /> },
        ] }
    ];

    return (
        <div className={classes.root}>
            <Header />
            <div className={classes.headerStyle}>
                <Container>
                    <HeadingComponent data1="iqac" data2="" Color={true} />
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