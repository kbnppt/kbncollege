import React from 'react'
import { Container, makeStyles } from '@material-ui/core';
import Header from '../../Header/MainNavigation';
import HeadingComponent from '../../Headings/index';
import VerticalTabs from '../../MainSidebar/MainSidebar';
import HorizontalCutomTabs from '../../MainSidebar/HorizontalBar';
import EResources from './EResources';
import KBNLMS from './KBNLMS';
import UnderGraduate from './Syllabus/UnderGraduate';
import PostGraduateComponent from './Syllabus/PostGraduate';
import Diploma from './Syllabus/Diploma';
import DeptOfTelugu from './Departments/UG/DeptOfTelugu';
import DeptOfEnglish from './Departments/UG/DeptOfEnglish';
import DeptOfHindi from './Departments/UG/DeptOfHindi';
import DeptOfBotany from './Departments/UG/DeptOfBotany';
import DeptOfZoology from './Departments/UG/DeptOfZoology';
import DeptOfMathsandStatistics from './Departments/UG/DeptOfMathsandStatistics';
import DeptOfPhysicsandElectronics from './Departments/UG/DeptOfPhysicsandElectronics';
import DeptOfCSandApplications from './Departments/UG/DeptOfCSandApplications';
import DeptOfChemistry from './Departments/UG/DeptOfChemistry';
import DeptOfLibrary from './Departments/UG/DeptOfLibrary';
import DeptOfMBA from './Departments/PG/DeptOfMBA';
import DeptOfMCA from './Departments/PG/DeptOfMCA';
import DeptOfMCOM from './Departments/PG/DeptOfMCOM';
import DeptOfMSCCS from './Departments/PG/DeptOfMSCCS';
import DeptOfMSCOrganic from './Departments/PG/DeptOfMSCOrganic';
import CommerceAndManagementAbout from './Departments/UG/CommerceAndManagement/CommerceAndManagementAbout';
import Ugccareer from './Syllabus/Ugccareer';
import Vetc from './Syllabus/Vetc';
import DeptOfCommerceAndManagement from './Departments/UG/CommerceAndManagement/DeptOfCommerceAndManagement';
import DeptOfPhysicalEducation from "./Departments/UG/PhysicalEducationDep/DepOfPhysicalEducation"



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
        [theme.breakpoints.down("sm")]: {
            display: 'block'
        },
    }
}));

const Index = () => {
    const classes = useStyles();

    const data = [
        {
            id: 1, title: 'Syllabus', subTitles: [
                { id: 1, title: 'Undergraduate Programmes', componentInfo: <UnderGraduate /> },
                { id: 2, title: 'Post Graduate Programmes', componentInfo: <PostGraduateComponent /> },
                { id: 3, title: 'Diploma Programmes', componentInfo: <Diploma /> },
                { id: 3, title: 'UGC Career Oriented Courses', componentInfo: <Ugccareer /> },
                { id: 3, title: 'Vocational Education Training Courses', componentInfo: <Vetc /> },
            ]
        },
        {
            id: 2, title: 'Departments', subTitles: [
                { id: 1, title: 'Department of Telugu', componentInfo: <DeptOfTelugu /> },
                { id: 2, title: 'Department of English', componentInfo: <DeptOfEnglish /> },
                { id: 3, title: 'Department of Hindi', componentInfo: <DeptOfHindi /> },
                { id: 4, title: 'Department of Botany', componentInfo: <DeptOfBotany /> },
                { id: 5, title: 'Department of Zoology', componentInfo: <DeptOfZoology /> },
                { id: 6, title: 'Department of Chemistry', componentInfo: <DeptOfChemistry /> },
                { id: 7, title: 'Department of Mathematics & Statistics', componentInfo: <DeptOfMathsandStatistics /> },
                { id: 8, title: 'Department of Physics & Electronics', componentInfo: <DeptOfPhysicsandElectronics /> },
                { id: 9, title: 'Department of Computer Science & Applications', componentInfo: <DeptOfCSandApplications /> },
                { id: 10, title: 'Department of Library Science', componentInfo: <DeptOfLibrary /> },
                { id: 11, title: 'Department of Commerce and Management', componentInfo: <DeptOfCommerceAndManagement /> },
                { id: 12, title: 'Department of Physical Education', componentInfo: <DeptOfPhysicalEducation /> },
                { id: 13, title: 'Department of MBA', componentInfo: <DeptOfMBA /> },
                // { id: 14, title: 'Department of M.Sc(CS)', componentInfo: <DeptOfMSCCS /> },
                { id: 15, title: 'Department of MCA', componentInfo: <DeptOfMCA /> },
                // { id: 16, title: 'Department of M.COM', componentInfo: <DeptOfMCOM /> },
                { id: 17, title: 'Department of M.Sc(Organic & Analytical Chemistry)', componentInfo: <DeptOfMSCOrganic /> },
                
            ]
        },
        { id: 3, title: 'KBNLMS', componentInfo: <KBNLMS /> },
        { id: 4, title: 'e Resources', componentInfo: <EResources /> },
    ];

    return (
        <div className={classes.root}>
            <Header />
            {/* <div className={classes.allBlocks} /> */}
            <div className={classes.headerStyle}>
                <Container>
                    <HeadingComponent data1="Academics" data2="" Color={true} />
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