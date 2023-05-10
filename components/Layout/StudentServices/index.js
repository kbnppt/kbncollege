import React from 'react'
import { Container, makeStyles } from '@material-ui/core';
import Header from '../../Header/MainNavigation';
import HeadingComponent from '../../Headings/index';
import VerticalTabs from '../../MainSidebar/MainSidebar';
import HorizontalCutomTabs from '../../MainSidebar/HorizontalBar';
import UNNTBharatAbhiyan from './UNNTBharatAbhiyan';
import UGCWomenStudies from './UGCWomenStudies';
import OnlineServices from './OnlineServices';
import RedRibbonClub from './RedRibbonClub';
import ConsumerClub from './ConsumerClub';
import NCC from './NCC';
import NSS from './NSS';
import DramaticAssociation from './DramaticAssociation';
import EcoClub from './EcoClub';
import AntiRagging from '../StudentServices/Statutroy Cells/AntiRagging';
import GrievanceRedressal from '../StudentServices/Statutroy Cells/Grievance&Redressal';
import Scst from '../StudentServices/Statutroy Cells/SC ST';
import Obc from './Statutroy Cells/OBC';
import Minority from './Statutroy Cells/Minority';
import Icc from './Statutroy Cells/ICC';
import WardCounsellingSystem from './WardCounsellingSystem'



const useStyles = makeStyles((theme) => ({
    root: {
        position: 'relative'
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
        { id: 1, title: 'online services', componentInfo: <OnlineServices /> },
        { id: 2, title: 'UNNT BHARAT ABHIYAN 2.0', componentInfo: <UNNTBharatAbhiyan /> },
        { id: 3, title: "UGC Women's Studies Center", componentInfo: <UGCWomenStudies /> },
        {
            id: 4, title: "Statutroy Cells", subTitles: [
                { id: 1, title: 'Grievance & Redressal Cell', componentInfo: <GrievanceRedressal /> },
                { id: 2, title: 'Anti-Ragging Cell', componentInfo: <AntiRagging /> },
                { id: 3, title: 'SC/ST Cell', componentInfo: <Scst /> },
                { id: 4, title: 'OBC Cell', componentInfo: <Obc /> },
                { id: 5, title: 'Minority Cell', componentInfo: <Minority /> },
                { id: 5, title: 'Internal Complaints Committee', componentInfo: <Icc /> },

            ]
        },
        { id: 5, title: 'Red Ribbon Club', componentInfo: <RedRibbonClub /> },
        { id: 6, title: 'Consumer Club', componentInfo: <ConsumerClub /> },
        { id: 7, title: 'NCC', componentInfo: <NCC /> },
        { id: 8, title: 'NSS', componentInfo: <NSS /> },
        { id: 9, title: 'Dramatic Association', componentInfo: <DramaticAssociation /> },
        { id: 10, title: 'Eco Club', componentInfo: <EcoClub /> },
        { id: 11, title: 'Ward Counselling System', componentInfo: <WardCounsellingSystem /> },
    ];

    return (
        <div className={classes.root}>
            <Header />
            <div className={classes.headerStyle}>
                <Container>
                    <HeadingComponent data1="student" data2="services" Color={true} />
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