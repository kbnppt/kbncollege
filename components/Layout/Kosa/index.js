import React from 'react'
import { Container, makeStyles } from '@material-ui/core';
import Header from '../../Header/MainNavigation';
import HeadingComponent from '../../Headings/index';
import VerticalTabs from '../../MainSidebar/MainSidebar';
import HorizontalCutomTabs from '../../MainSidebar/HorizontalBar';
import KosaAboutComponent from './KosaAbout';
import KosaCommitte from './KosaCommitte';
import KosaAluminiRegistrationForm from './KosaAluminiRegistrationForm';
import KosaSociety from './KosaSociety';
// import KosaRenownedAlumin from './KosaRenownedAlumin';
import KosaActivities from './KosaActivities';
import KosaIndex from './KosaIndex';
import KosaFaculty from './ReownedAlumni/KosaFaculty';
import KosaPoliticians from './ReownedAlumni/KosaPoliticians';
import Kosa from './ReownedAlumni/Kosa';
import KosaGovtSector from './ReownedAlumni/KosaGovtSector';
import KosaDoctors from './ReownedAlumni/KosaDoctors';
import KosaArtists from './ReownedAlumni/KosaArtists';

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
        { id: 1, title: 'Kosa Home', componentInfo: <KosaIndex /> },
        { id: 2, title: 'About Alumni', componentInfo: <KosaAboutComponent /> },
        {
            id: 3, title: 'Committe', componentInfo: <KosaCommitte />
        },
        { id: 4, title: 'Alumni Registration Form', componentInfo: <KosaAluminiRegistrationForm /> },
        { id: 5, title: 'Society Reg Form', componentInfo: <KosaSociety /> },
        { id: 6, title: 'Renowened Alumni',subTitles: [
            { id: 1, title: 'Working as Faculty',componentInfo: <KosaFaculty /> },
            { id: 2, title: 'Politicians',componentInfo: <KosaPoliticians /> },
            { id: 3, title: 'KOSA',componentInfo: <Kosa /> },
            { id: 4, title: 'Govt.Sector',componentInfo: <KosaGovtSector /> },
            { id: 5, title: 'Doctors',componentInfo: <KosaDoctors /> },
            { id: 6, title: 'Artists',componentInfo: <KosaArtists /> },
        ] 
     },
        { id: 7, title: 'Activities', componentInfo: <KosaActivities /> }
    ];

    return (
        <div className={classes.root}>
            <Header />
                       {/* <div className={classes.allBlocks} /> */}
            <div className={classes.headerStyle}>
                <Container>
                    <HeadingComponent data1="Kosa" data2="" Color={true} />
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