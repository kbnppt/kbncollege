import React from 'react'
import { Container, makeStyles } from '@material-ui/core';
import Header from '../../Header/MainNavigation';
import HeadingComponent from '../../Headings/index';
import VerticalTabs from '../../MainSidebar/MainSidebar';
import HorizontalCutomTabs from '../../MainSidebar/HorizontalBar';
import Organisation from './organisation';
import Statutory from './Statutory';
import PolicyDocuments from './PolicyDocuments';
import StrategicPlan from './StrategicPlan';
import PrincipalDesk from './PrincipalDesk';
import SuccessionList from './SuccessionList';
import Decentralisation from './Decentralisation';
import BOSmembers from './BOSmembers';

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
        { id: 1, title: 'Organization Structure', componentInfo: <Organisation /> },
        { id: 2, title: 'Statutory Bodies', componentInfo: <Statutory /> },
        { id: 3, title: 'Decentralization of Admin', componentInfo: <Decentralisation /> },
        { id: 4, title: 'BOS Members', componentInfo: <BOSmembers /> },
        { id: 5, title: 'Policy Documents', componentInfo: <PolicyDocuments /> },
        { id: 6, title: 'Strategic Plan', componentInfo: <StrategicPlan /> },
        { id: 7, title: "Principal's Desk", componentInfo: <PrincipalDesk /> },
        { id: 8, title: 'Succession List of Principals', componentInfo: <SuccessionList /> }
    ];

    return (
        <div className={classes.root}>
            <Header />
                       {/* <div className={classes.allBlocks} /> */}
            <div className={classes.headerStyle}>
                <Container>
                    <HeadingComponent data1="administration" data2="" Color={true} />
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