import React from 'react'
import { Container, makeStyles } from '@material-ui/core';
import Header from '../../Header/MainNavigation';
import HeadingComponent from '../../Headings/index';
import VerticalTabs from '../../MainSidebar/MainSidebar';
import HorizontalCutomTabs from '../../MainSidebar/HorizontalBar';
import HistoryCollege from './HistoryofCollege';
import VisionMission from './VisionMission';
import GoalsObjectives from './GoalsObjectives';
import Certificates from './Certificates';
import CodeofConduct from './CodeofConduct';
import DigitalLibrary from './CampusAtGlance/DigitalLibrary';
import Bank from './CampusAtGlance/Bank';
import BoysHostel from './CampusAtGlance/BoysHostel';
import Canteen from './CampusAtGlance/Canteen';
import Divyangian from './CampusAtGlance/Divyangian';
import GirlsHostel from './CampusAtGlance/GirlsHostel';
import HomeoClinic from './CampusAtGlance/HomeoClinic';
import ICTFacilities from './CampusAtGlance/ICTFacilities';
import IndoorSports from './CampusAtGlance/IndoorSports';
import Infrastructure from './CampusAtGlance/Infrastructure';
import Kalanikethan from './CampusAtGlance/Kalanikethan';
import LanguageLab from './CampusAtGlance/LanguageLab';
import Museums from './CampusAtGlance/Museums';
import OutdoorSports from './CampusAtGlance/OutdoorSports';
import UtilityStore from './CampusAtGlance/UtilityStore';
import YogaCentre from './CampusAtGlance/YogaCentre';
import AnnualReports from './AnnualReports'

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
        { id: 1, title: 'History of the College', componentInfo: <HistoryCollege /> },
        { id: 2, title: 'Vision & Mission', componentInfo: <VisionMission /> },
        {
            id: 3, title: 'Campus at a Glance', subTitles: [
                { id: 1, title: 'Digital Library', componentInfo: <DigitalLibrary /> },
                { id: 2, title: 'Museums', componentInfo: <Museums /> },
                { id: 3, title: 'Indoor Sports', componentInfo: <IndoorSports /> },
                { id: 4, title: 'Outdoor Sports', componentInfo: <OutdoorSports /> },
                { id: 5, title: 'Infrastructure', componentInfo: <Infrastructure /> },
                { id: 6, title: 'Bank', componentInfo: <Bank /> },
                { id: 7, title: 'Canteen', componentInfo: <Canteen /> },
                { id: 8, title: 'Divyangian', componentInfo: <Divyangian /> },
                { id: 9, title: 'ICT Facilities', componentInfo: <ICTFacilities /> },
                { id: 10, title: 'Utility Store', componentInfo: <UtilityStore /> },
                { id: 11, title: 'Language Lab', componentInfo: <LanguageLab /> },
                { id: 12, title: 'Homeo Clinic', componentInfo: <HomeoClinic /> },
                { id: 13, title: 'Kalanikethan', componentInfo: <Kalanikethan /> },
                { id: 14, title: 'Girls Hostel', componentInfo: <GirlsHostel /> },
                { id: 15, title: 'Boys Hostel', componentInfo: <BoysHostel /> },
                { id: 16, title: 'Yoga & Meditation Centre', componentInfo: <YogaCentre /> }
            ]
        },
        { id: 4, title: 'Goals & Objectives', componentInfo: <GoalsObjectives /> },
        { id: 5, title: 'Code of Conduct', componentInfo: <CodeofConduct /> },
        { id: 6, title: 'KBNC Certificates', componentInfo: <Certificates /> },
        { id: 7, title: 'Annual Report', componentInfo: <AnnualReports /> },
    ];

    return (
        <>
            <Header />
            {/* <div className={classes.allBlocks} /> */}
            <div className={classes.headerStyle}>
                <Container>
                    <HeadingComponent data1="about" data2="kbn" Color={true} />
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

        </>
    )
}

export default Index;