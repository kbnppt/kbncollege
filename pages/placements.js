import React from 'react'
import { Container, makeStyles } from '@material-ui/core';
import Header from '../components/Header/MainNavigation';
import HeadingComponent from '../components/Headings/index';
import Card from '@material-ui/core/Card';
import Head from 'next/head';
import Footer from '../components/Footer/animatedfooter';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Image from 'next/image';
import {getRequiredImgs} from '../components/Api/index'

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
        textAlign:'justify',
        padding:'8px',
        [theme.breakpoints.down("sm")]: {
            display: 'block'
        },
    },
    cardRoot: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    placementHeading: {
        // fontSize: '35px',
        margin: '0px',
        color: '#07358a'
    },
    contentOne: {
        fontSize: '1rem'
    },
    objectivesContent: {
        display: 'flex',
        paddingTop: '12px'
    },
    arrowIcon: {
        marginTop: '4px',
        marginRight: '10px'
    },
    arrowwithContent: {
        fontSize: '1rem',
        margin: '0px'
    },
    camDriveContent: {
        fontSize: '1rem',
        margin: '0px',
        color: '#4c81b7'
    },
    galleryMain: {
        border: '1px solid #07358a',
        backgroundColor: '#07358a'
    },
    galleryHeading: {
        margin: '5px',
        textAlign: 'center',
        textTransform: 'uppercase',
        fontSize: '28px',
        color: 'white'
    },
    recruitersMain: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '30px'

    },
    GalleryStyle:{
        margin:'5px'
      }

}));

const Index = () => {
    const classes = useStyles();

    const [apidata,setApiData] = React.useState([])

    const initialLoad = async() =>{
        let folderId = '14Tgauy6Bt_2YwNpjjJwBc2sXtkY3n71X';
        let data = await getRequiredImgs(folderId);
        setApiData(data?.files)
    }


    React.useEffect(()=>{
        initialLoad()
    },[])


    const getImgData1 = (data) =>{
        let value = data?.split('%20')?.join(' ');
        let filterValue = apidata?.find((e)=>e?.name == value);
        if(filterValue){
            return filterValue?.id
        }
        return '1mOfBNITDbkyBcSwLI0A87bJY5nvNNm4E'
    }

    return (
        <>
            <Head>
                <title>Placements - Kakaraparti Bhavanarayana College (Autonomous)</title>
            </Head>
            <main>
                <div className={classes.root}>
                    <Header />
                               {/* <div className={classes.allBlocks} /> */}
                    <div className={classes.headerStyle}>
                        <Container>
                            <HeadingComponent data1="Placements" data2="" Color={true} />
                        </Container>
                    </div>
                    <div className={classes.horizontalTabsRoot}>
                    <div>
                            <h2 className={classes.placementHeading}>PLACEMENT CELL</h2>
                            <p className={classes.contentOne}>
                                The Placement & Guidance cell of KBN College strives to train every student for enriching them with communication skills, reasoning and mathematical skills to face competition and to conduct placement drives and to provide their dream career and build their bright future. It helps each student in exploring placement opportunities by inviting various companies for campus recruitment of students who are in the final year of the programme and are likely to graduate at the end of the academic year.
                            </p>
                            <p className={classes.contentOne}>
                                The Placement Cell organizes career guidance programmes for all the students starting from first year. The cell arranges training programmes like Mock Interviews, Group Discussions, Communication Skills Workshop etc., . It also invites HR Managers from different industries to conduct training programmes for final year students.
                            </p>
                            <h2 className={classes.placementHeading}>Objectives</h2>
                            <div className={classes.objectivesContent}>
                                <ArrowForwardIosIcon className={classes.arrowIcon} />
                                <p className={classes.arrowwithContent}>To bring awareness among the graduate and post-graduate students on career planning and Higher Education.</p>
                            </div>
                            <div className={classes.objectivesContent}>
                                <ArrowForwardIosIcon className={classes.arrowIcon} />
                                <p className={classes.arrowwithContent}>To initiate and develop attitude and interest in one’s career.</p>
                            </div>
                            <div className={classes.objectivesContent}>
                                <ArrowForwardIosIcon className={classes.arrowIcon} />
                                <p className={classes.arrowwithContent}>To provide information for future opportunities.</p>
                            </div>
                            <div className={classes.objectivesContent}>
                                <ArrowForwardIosIcon className={classes.arrowIcon} />
                                <p className={classes.arrowwithContent}>To develop creative thinking and innovative attitude among the student community.</p>
                            </div>
                            <div className={classes.objectivesContent}>
                                <ArrowForwardIosIcon className={classes.arrowIcon} />
                                <p className={classes.arrowwithContent}>To make students self-reliant.</p>
                            </div>
                            <div className={classes.objectivesContent}>
                                <ArrowForwardIosIcon className={classes.arrowIcon} />
                                <p className={classes.arrowwithContent}>To provide information relating to competitive examinations like A.P.P.S.C, S.S.C, Nationalized Banks, R.R.B, etc.</p>
                            </div>
                            <div className={classes.objectivesContent}>
                                <ArrowForwardIosIcon className={classes.arrowIcon} />
                                <p className={classes.arrowwithContent}>To maintain rapport with various employment agencies and help them to conduct campus interviews.</p>
                            </div>
                            <div className={classes.objectivesContent}>
                                <ArrowForwardIosIcon className={classes.arrowIcon} />
                                <p className={classes.arrowwithContent}>To guide the students for enrolling in various job websites like naukri.com and monster india.com/shine.com and apply to various Multi-National Companies online.</p>
                            </div>
                            <h2 className={classes.placementHeading} style={{ marginTop: '25px' }}>SERVICES BY PLACEMENT CELL</h2>
                            <div className={classes.objectivesContent}>
                                <ArrowForwardIosIcon className={classes.arrowIcon} />
                                <p className={classes.arrowwithContent}>Student data was provided to several companies for the purpose of fetching employment to our college students.</p>
                            </div>
                            <div className={classes.objectivesContent}>
                                <ArrowForwardIosIcon className={classes.arrowIcon} />
                                <p className={classes.arrowwithContent}>SMSs were given to the students from time to time informing the walk-ins, Off-Campus drives etc.</p>
                            </div>
                            <div className={classes.objectivesContent}>
                                <ArrowForwardIosIcon className={classes.arrowIcon} />
                                <p className={classes.arrowwithContent}>Deputed our deserved college students to several local companies / shops and establishments for employment.</p>
                            </div>
                            <div className={classes.objectivesContent}>
                                <ArrowForwardIosIcon className={classes.arrowIcon} />
                                <p className={classes.arrowwithContent}>Coordinated for arranging the training classes to the degree students from JKC & APSSDC and also deputed the students to JKC sponsored campus drives.</p>
                            </div>
                            <div className={classes.objectivesContent}>
                                <ArrowForwardIosIcon className={classes.arrowIcon} />
                                <p className={classes.arrowwithContent}>Guided and Assisted students to apply On-Line to MNCs and appear On-Line Tests.</p>
                            </div>
                            <div className={classes.objectivesContent}>
                                <ArrowForwardIosIcon className={classes.arrowIcon} />
                                <p className={classes.arrowwithContent}>Guided the students for competitive exams.</p>
                            </div>
                            <h2 className={classes.placementHeading} style={{ marginTop: '25px' }}>Selected Candidates in Campus Drives</h2>
                            <div className={classes.objectivesContent}>
                                <ArrowForwardIosIcon className={classes.arrowIcon} />
                                <a href={`https://drive.google.com/uc?id=${getImgData1("2020-21%20-%20PLACEMENTS.pdf")}`} target={'_blank'} className={classes.camDriveContent}>2020-2021</a>
                            </div>
                            <div className={classes.objectivesContent}>
                                <ArrowForwardIosIcon className={classes.arrowIcon} />
                                <a href={`https://drive.google.com/uc?id=${getImgData1("2019-20%20-%20PLACEMENTS.pdf")}`} target={'_blank'} className={classes.camDriveContent}>2019-2020</a>
                            </div>
                            <div className={classes.objectivesContent}>
                                <ArrowForwardIosIcon className={classes.arrowIcon} />
                                <a href={`https://drive.google.com/uc?id=${getImgData1("2018-19%20-%20PLACEMENTS.pdf")}`} target={'_blank'} className={classes.camDriveContent}>2018-2019</a>
                            </div>
                            <div className={classes.objectivesContent}>
                                <ArrowForwardIosIcon className={classes.arrowIcon} />
                                <a href={`https://drive.google.com/uc?id=${getImgData1("2017-18.pdf")}`} target={'_blank'} className={classes.camDriveContent}>2017-2018</a>
                            </div><div className={classes.objectivesContent}>
                                <ArrowForwardIosIcon className={classes.arrowIcon} />
                                <a href={`https://drive.google.com/uc?id=${getImgData1("2016-17.pdf")}`} target={'_blank'} className={classes.camDriveContent}>2016-2017</a>
                            </div>
                            <div className={classes.objectivesContent}>
                                <ArrowForwardIosIcon className={classes.arrowIcon} />
                                <a href="https://drive.google.com/uc?id=2015-2016_selected_candidates.pdf" target={'_blank'} className={classes.camDriveContent}>2015-2016</a>
                            </div>
                            <div className={classes.objectivesContent}>
                                <ArrowForwardIosIcon className={classes.arrowIcon} />
                                <a href={`https://drive.google.com/uc?id=${getImgData1("2014-15.pdf")}`} target={'_blank'} className={classes.camDriveContent}>2014-2015</a>
                            </div>
                            <div className={classes.objectivesContent}>
                                <ArrowForwardIosIcon className={classes.arrowIcon} />
                                <a href={`https://drive.google.com/uc?id=${getImgData1("2013-14.pdf")}`} target={'_blank'} className={classes.camDriveContent}>2013-2014</a>
                            </div>
                            <div className={classes.objectivesContent}>
                                <ArrowForwardIosIcon className={classes.arrowIcon} />
                                <a href="https://drive.google.com/file/d/1Sv_Bjw4o2Sw7wlSijfdcAwYSilctlzLF/view?usp=share_link" target={'_blank'} className={classes.camDriveContent}>2012-2013</a>
                            </div>
                            <h2 className={classes.placementHeading} style={{ marginTop: '25px' }}>Activities</h2>
                            <div className={classes.objectivesContent}>
                                <ArrowForwardIosIcon className={classes.arrowIcon} />
                                <a href={`https://drive.google.com/uc?id=${getImgData1("THREE%20DAY%20TRAINING%20PROGRAMME-5-7-4.2021.pdf")}`} target={'_blank'} className={classes.camDriveContent}>Three Day workshop on "Connect with Work (Communication & Employability Skills Training Program) " On 5th to 7th April,2021</a>
                            </div>
                            <div className={classes.objectivesContent}>
                                <ArrowForwardIosIcon className={classes.arrowIcon} />
                                <a href={`https://drive.google.com/uc?id=${getImgData1("AWARENESS%20PRORAMME-13.2.2020.pdf")}`} target={'_blank'} className={classes.camDriveContent}>Awareness on "Indian Air Force Recruitment" Organized by Placement & Guidance Cell on 13th February, 2020</a>
                            </div>
                            <div className={classes.objectivesContent}>
                                <ArrowForwardIosIcon className={classes.arrowIcon} />
                                <a href={`https://drive.google.com/uc?id=${getImgData1("1-23.3.2018.pdf")}`} target={'_blank'} className={classes.camDriveContent}>Job Mela on 23rd March, 2018</a>
                            </div>
                            <div className={classes.objectivesContent}>
                                <ArrowForwardIosIcon className={classes.arrowIcon} />
                                <a href={`https://drive.google.com/uc?id=${getImgData1("2-23&24.8.2017.pdf")}`} target={'_blank'} className={classes.camDriveContent}>Mock Interview on 23rd & 24th August, 2017</a>
                            </div>
                            <div className={classes.objectivesContent}>
                                <ArrowForwardIosIcon className={classes.arrowIcon} />
                                <a href={`https://drive.google.com/uc?id=${getImgData1("2b%20-%2017&18.7.2017.pdf")}`} target={'_blank'} className={classes.camDriveContent}>Aptitude Classes on 17th & 18th August, 2017</a>
                            </div>
                            <div className={classes.objectivesContent}>
                                <ArrowForwardIosIcon className={classes.arrowIcon} />
                                <a href={`https://drive.google.com/uc?id=${getImgData1("3-20.02.2017.pdf")}`} target={'_blank'} className={classes.camDriveContent}>Guest Lecture on “Job Opportunities in Government Sectors” on 20th February, 2017</a>
                            </div>
                            <div className={classes.objectivesContent}>
                                <ArrowForwardIosIcon className={classes.arrowIcon} />
                                <a href={`https://drive.google.com/uc?id=${getImgData1("4-16.11.2016.pdf")}`} target={'_blank'} className={classes.camDriveContent}>APSSDC Introduction Classes on 16th November, 2016</a>
                            </div>
                            <div className={classes.objectivesContent}>
                                <ArrowForwardIosIcon className={classes.arrowIcon} />
                                <a href={`https://drive.google.com/uc?id=${getImgData1("5-11.11.2016.pdf")}`} target={'_blank'} className={classes.camDriveContent}>Mock Interviews on 11th November, 2016</a>
                            </div>
                            <div className={classes.objectivesContent}>
                                <ArrowForwardIosIcon className={classes.arrowIcon} />
                                <a href={`https://drive.google.com/uc?id=${getImgData1("6-8.11.2016.pdf")}`} target={'_blank'} className={classes.camDriveContent}>Udyogaradam on 8th November, 2016</a>
                            </div>
                            <div className={classes.objectivesContent}>
                                <ArrowForwardIosIcon className={classes.arrowIcon} />
                                <a href={`https://drive.google.com/uc?id=${getImgData1("7-17.10.2015.pdf")}`} target={'_blank'} className={classes.camDriveContent}>Job Mela on 17th October, 2015</a>
                            </div>
                            <div className={classes.objectivesContent}>
                                <ArrowForwardIosIcon className={classes.arrowIcon} />
                                <a href={`https://drive.google.com/uc?id=${getImgData1("8-27.6.2015.pdf")}`} target={'_blank'} className={classes.camDriveContent}>Individual Training Programme on “Goal Setting” on 27th June, 2015</a>
                            </div>
                            <div className={classes.objectivesContent}>
                                <ArrowForwardIosIcon className={classes.arrowIcon} />
                                <a href={`https://drive.google.com/uc?id=${getImgData1("9-27.04.2014.pdf")}`} target={'_blank'} className={classes.camDriveContent}>Placement Drive on 27th April, 2014</a>
                            </div>
                            <div className={classes.objectivesContent}>
                                <ArrowForwardIosIcon className={classes.arrowIcon} />
                                <a href={`https://drive.google.com/uc?id=${getImgData1("10-16.12.2013.pdf")}`} target={'_blank'} className={classes.camDriveContent}>Placement Drive on 16th December, 2013</a>
                            </div>
                            <div className={classes.objectivesContent}>
                                <ArrowForwardIosIcon className={classes.arrowIcon} />
                                <a href={`https://drive.google.com/uc?id=${getImgData1("11-8.12.2013.pdf")}`} target={'_blank'} className={classes.camDriveContent}>Placement Drive on 8th December, 2013</a>
                            </div>
                            <div className={classes.objectivesContent}>
                                <ArrowForwardIosIcon className={classes.arrowIcon} />
                                <a href={`https://drive.google.com/uc?id=${getImgData1("12-28.10.2013.pdf")}`} target={'_blank'} className={classes.camDriveContent}>Placement Drive on 28th October, 2013</a>
                            </div>
                            <div className={classes.objectivesContent}>
                                <ArrowForwardIosIcon className={classes.arrowIcon} />
                                <a href={`https://drive.google.com/uc?id=${getImgData1("13-25.10.2013.pdf")}`} target={'_blank'} className={classes.camDriveContent}>Guest Lecture on “Prospects of Marketing as Career Option” on 25th October, 2013</a>
                            </div>
                        </div>
                    </div>
                    <Container>
                        <div className={classes.verticalTabsRoot}>
                            <h2 className={classes.placementHeading}>PLACEMENT CELL</h2>
                            <p className={classes.contentOne}>
                                The Placement & Guidance cell of KBN College strives to train every student for enriching them with communication skills, reasoning and mathematical skills to face competition and to conduct placement drives and to provide their dream career and build their bright future. It helps each student in exploring placement opportunities by inviting various companies for campus recruitment of students who are in the final year of the programme and are likely to graduate at the end of the academic year.
                            </p>
                            <p className={classes.contentOne}>
                                The Placement Cell organizes career guidance programmes for all the students starting from first year. The cell arranges training programmes like Mock Interviews, Group Discussions, Communication Skills Workshop etc., . It also invites HR Managers from different industries to conduct training programmes for final year students.
                            </p>
                            <h2 className={classes.placementHeading}>Objectives</h2>
                            <div className={classes.objectivesContent}>
                                <ArrowForwardIosIcon className={classes.arrowIcon} />
                                <p className={classes.arrowwithContent}>To bring awareness among the graduate and post-graduate students on career planning and Higher Education.</p>
                            </div>
                            <div className={classes.objectivesContent}>
                                <ArrowForwardIosIcon className={classes.arrowIcon} />
                                <p className={classes.arrowwithContent}>To initiate and develop attitude and interest in one’s career.</p>
                            </div>
                            <div className={classes.objectivesContent}>
                                <ArrowForwardIosIcon className={classes.arrowIcon} />
                                <p className={classes.arrowwithContent}>To provide information for future opportunities.</p>
                            </div>
                            <div className={classes.objectivesContent}>
                                <ArrowForwardIosIcon className={classes.arrowIcon} />
                                <p className={classes.arrowwithContent}>To develop creative thinking and innovative attitude among the student community.</p>
                            </div>
                            <div className={classes.objectivesContent}>
                                <ArrowForwardIosIcon className={classes.arrowIcon} />
                                <p className={classes.arrowwithContent}>To make students self-reliant.</p>
                            </div>
                            <div className={classes.objectivesContent}>
                                <ArrowForwardIosIcon className={classes.arrowIcon} />
                                <p className={classes.arrowwithContent}>To provide information relating to competitive examinations like A.P.P.S.C, S.S.C, Nationalized Banks, R.R.B, etc.</p>
                            </div>
                            <div className={classes.objectivesContent}>
                                <ArrowForwardIosIcon className={classes.arrowIcon} />
                                <p className={classes.arrowwithContent}>To maintain rapport with various employment agencies and help them to conduct campus interviews.</p>
                            </div>
                            <div className={classes.objectivesContent}>
                                <ArrowForwardIosIcon className={classes.arrowIcon} />
                                <p className={classes.arrowwithContent}>To guide the students for enrolling in various job websites like naukri.com and monster india.com/shine.com and apply to various Multi-National Companies online.</p>
                            </div>
                            <h2 className={classes.placementHeading} style={{ marginTop: '25px' }}>SERVICES BY PLACEMENT CELL</h2>
                            <div className={classes.objectivesContent}>
                                <ArrowForwardIosIcon className={classes.arrowIcon} />
                                <p className={classes.arrowwithContent}>Student data was provided to several companies for the purpose of fetching employment to our college students.</p>
                            </div>
                            <div className={classes.objectivesContent}>
                                <ArrowForwardIosIcon className={classes.arrowIcon} />
                                <p className={classes.arrowwithContent}>SMSs were given to the students from time to time informing the walk-ins, Off-Campus drives etc.</p>
                            </div>
                            <div className={classes.objectivesContent}>
                                <ArrowForwardIosIcon className={classes.arrowIcon} />
                                <p className={classes.arrowwithContent}>Deputed our deserved college students to several local companies / shops and establishments for employment.</p>
                            </div>
                            <div className={classes.objectivesContent}>
                                <ArrowForwardIosIcon className={classes.arrowIcon} />
                                <p className={classes.arrowwithContent}>Coordinated for arranging the training classes to the degree students from JKC & APSSDC and also deputed the students to JKC sponsored campus drives.</p>
                            </div>
                            <div className={classes.objectivesContent}>
                                <ArrowForwardIosIcon className={classes.arrowIcon} />
                                <p className={classes.arrowwithContent}>Guided and Assisted students to apply On-Line to MNCs and appear On-Line Tests.</p>
                            </div>
                            <div className={classes.objectivesContent}>
                                <ArrowForwardIosIcon className={classes.arrowIcon} />
                                <p className={classes.arrowwithContent}>Guided the students for competitive exams.</p>
                            </div>
                            <h2 className={classes.placementHeading} style={{ marginTop: '25px' }}>Selected Candidates in Campus Drives</h2>
                            <div className={classes.objectivesContent}>
                                <ArrowForwardIosIcon className={classes.arrowIcon} />
                                <a href={`https://drive.google.com/uc?id=${getImgData1("2020-21%20-%20PLACEMENTS.pdf")}`} target={'_blank'} className={classes.camDriveContent}>2020-2021</a>
                            </div>
                            <div className={classes.objectivesContent}>
                                <ArrowForwardIosIcon className={classes.arrowIcon} />
                                <a href={`https://drive.google.com/uc?id=${getImgData1("2019-20%20-%20PLACEMENTS.pdf")}`} target={'_blank'} className={classes.camDriveContent}>2019-2020</a>
                            </div>
                            <div className={classes.objectivesContent}>
                                <ArrowForwardIosIcon className={classes.arrowIcon} />
                                <a href={`https://drive.google.com/uc?id=${getImgData1("2018-19%20-%20PLACEMENTS.pdf")}`} target={'_blank'} className={classes.camDriveContent}>2018-2019</a>
                            </div>
                            <div className={classes.objectivesContent}>
                                <ArrowForwardIosIcon className={classes.arrowIcon} />
                                <a href={`https://drive.google.com/uc?id=${getImgData1("2017-18.pdf")}`} target={'_blank'} className={classes.camDriveContent}>2017-2018</a>
                            </div><div className={classes.objectivesContent}>
                                <ArrowForwardIosIcon className={classes.arrowIcon} />
                                <a href={`https://drive.google.com/uc?id=${getImgData1("2016-17.pdf")}`} target={'_blank'} className={classes.camDriveContent}>2016-2017</a>
                            </div>
                            <div className={classes.objectivesContent}>
                                <ArrowForwardIosIcon className={classes.arrowIcon} />
                                <a href="https://drive.google.com/file/d/11aAK9_HnbwshaTlp1LddFVEeSEo01D7C/view?usp=share_link" target={'_blank'} className={classes.camDriveContent}>2015-2016</a>
                            </div>
                            <div className={classes.objectivesContent}>
                                <ArrowForwardIosIcon className={classes.arrowIcon} />
                                <a href={`https://drive.google.com/uc?id=${getImgData1("2014-15.pdf")}`} target={'_blank'} className={classes.camDriveContent}>2014-2015</a>
                            </div>
                            <div className={classes.objectivesContent}>
                                <ArrowForwardIosIcon className={classes.arrowIcon} />
                                <a href={`https://drive.google.com/uc?id=${getImgData1("2013-14.pdf")}`} target={'_blank'} className={classes.camDriveContent}>2013-2014</a>
                            </div>
                            <div className={classes.objectivesContent}>
                                <ArrowForwardIosIcon className={classes.arrowIcon} />
                                <a href="https://drive.google.com/uc?id=2012-13_selected_candidates.pdf" target={'_blank'} className={classes.camDriveContent}>2012-2013</a>
                            </div>
                            <h2 className={classes.placementHeading} style={{ marginTop: '25px' }}>Activities</h2>
                            <div className={classes.objectivesContent}>
                                <ArrowForwardIosIcon className={classes.arrowIcon} />
                                <a href={`https://drive.google.com/uc?id=${getImgData1("THREE%20DAY%20TRAINING%20PROGRAMME-5-7-4.2021.pdf")}`} target={'_blank'} className={classes.camDriveContent}>Three Day workshop on "Connect with Work (Communication & Employability Skills Training Program) " On 5th to 7th April,2021</a>
                            </div>
                            <div className={classes.objectivesContent}>
                                <ArrowForwardIosIcon className={classes.arrowIcon} />
                                <a href={`https://drive.google.com/uc?id=${getImgData1("AWARENESS%20PRORAMME-13.2.2020.pdf")}`} target={'_blank'} className={classes.camDriveContent}>Awareness on "Indian Air Force Recruitment" Organized by Placement & Guidance Cell on 13th February, 2020</a>
                            </div>
                            <div className={classes.objectivesContent}>
                                <ArrowForwardIosIcon className={classes.arrowIcon} />
                                <a href={`https://drive.google.com/uc?id=${getImgData1("1-23.3.2018.pdf")}`} target={'_blank'} className={classes.camDriveContent}>Job Mela on 23rd March, 2018</a>
                            </div>
                            <div className={classes.objectivesContent}>
                                <ArrowForwardIosIcon className={classes.arrowIcon} />
                                <a href={`https://drive.google.com/uc?id=${getImgData1("2-23&24.8.2017.pdf")}`} target={'_blank'} className={classes.camDriveContent}>Mock Interview on 23rd & 24th August, 2017</a>
                            </div>
                            <div className={classes.objectivesContent}>
                                <ArrowForwardIosIcon className={classes.arrowIcon} />
                                <a href={`https://drive.google.com/uc?id=${getImgData1("2b%20-%2017&18.7.2017.pdf")}`} target={'_blank'} className={classes.camDriveContent}>Aptitude Classes on 17th & 18th August, 2017</a>
                            </div>
                            <div className={classes.objectivesContent}>
                                <ArrowForwardIosIcon className={classes.arrowIcon} />
                                <a href={`https://drive.google.com/uc?id=${getImgData1("3-20.02.2017.pdf")}`} target={'_blank'} className={classes.camDriveContent}>Guest Lecture on “Job Opportunities in Government Sectors” on 20th February, 2017</a>
                            </div>
                            <div className={classes.objectivesContent}>
                                <ArrowForwardIosIcon className={classes.arrowIcon} />
                                <a href={`https://drive.google.com/uc?id=${getImgData1("4-16.11.2016.pdf")}`} target={'_blank'} className={classes.camDriveContent}>APSSDC Introduction Classes on 16th November, 2016</a>
                            </div>
                            <div className={classes.objectivesContent}>
                                <ArrowForwardIosIcon className={classes.arrowIcon} />
                                <a href={`https://drive.google.com/uc?id=${getImgData1("5-11.11.2016.pdf")}`} target={'_blank'} className={classes.camDriveContent}>Mock Interviews on 11th November, 2016</a>
                            </div>
                            <div className={classes.objectivesContent}>
                                <ArrowForwardIosIcon className={classes.arrowIcon} />
                                <a href={`https://drive.google.com/uc?id=${getImgData1("6-8.11.2016.pdf")}`} target={'_blank'} className={classes.camDriveContent}>Udyogaradam on 8th November, 2016</a>
                            </div>
                            <div className={classes.objectivesContent}>
                                <ArrowForwardIosIcon className={classes.arrowIcon} />
                                <a href={`https://drive.google.com/uc?id=${getImgData1("7-17.10.2015.pdf")}`} target={'_blank'} className={classes.camDriveContent}>Job Mela on 17th October, 2015</a>
                            </div>
                            <div className={classes.objectivesContent}>
                                <ArrowForwardIosIcon className={classes.arrowIcon} />
                                <a href={`https://drive.google.com/uc?id=${getImgData1("8-27.6.2015.pdf")}`} target={'_blank'} className={classes.camDriveContent}>Individual Training Programme on “Goal Setting” on 27th June, 2015</a>
                            </div>
                            <div className={classes.objectivesContent}>
                                <ArrowForwardIosIcon className={classes.arrowIcon} />
                                <a href={`https://drive.google.com/uc?id=${getImgData1("9-27.04.2014.pdf")}`} target={'_blank'} className={classes.camDriveContent}>Placement Drive on 27th April, 2014</a>
                            </div>
                            <div className={classes.objectivesContent}>
                                <ArrowForwardIosIcon className={classes.arrowIcon} />
                                <a href={`https://drive.google.com/uc?id=${getImgData1("10-16.12.2013.pdf")}`} target={'_blank'} className={classes.camDriveContent}>Placement Drive on 16th December, 2013</a>
                            </div>
                            <div className={classes.objectivesContent}>
                                <ArrowForwardIosIcon className={classes.arrowIcon} />
                                <a href={`https://drive.google.com/uc?id=${getImgData1("11-8.12.2013.pdf")}`} target={'_blank'} className={classes.camDriveContent}>Placement Drive on 8th December, 2013</a>
                            </div>
                            <div className={classes.objectivesContent}>
                                <ArrowForwardIosIcon className={classes.arrowIcon} />
                                <a href={`https://drive.google.com/uc?id=${getImgData1("12-28.10.2013.pdf")}`} target={'_blank'} className={classes.camDriveContent}>Placement Drive on 28th October, 2013</a>
                            </div>
                            <div className={classes.objectivesContent}>
                                <ArrowForwardIosIcon className={classes.arrowIcon} />
                                <a href={`https://drive.google.com/uc?id=${getImgData1("13-25.10.2013.pdf")}`} target={'_blank'} className={classes.camDriveContent}>Guest Lecture on “Prospects of Marketing as Career Option” on 25th October, 2013</a>
                            </div>
                        </div>
                    </Container>
                    <div className={classes.galleryMain}>
                        <h2 className={classes.galleryHeading}>Gallery</h2>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-around', margin: '50px 0px',flexWrap:"wrap" }}>
                        <Image src={'/images/placement_img.png'} alt="" width={350} height={200} />
                        <Image src={'/images/speech.JPG'} alt="" width={350} height={200} />
                        <Image src={'/images/speech2.JPG'} alt="" width={350} height={200} />
                        <Image src={'/images/speech4.JPG'} alt="" width={350} height={200} />
                        <div className={classes.GalleryStyle}>
                        <Image src={'/images/Gallery/Placements/WhatsApp Image 2022-05-16 at 5.22.24 PM.jpeg'} alt="" width={350} height={200} />
                        </div >
                        <div className={classes.GalleryStyle}>
                        <Image src={'/images/Gallery/Placements/WhatsApp Image 2022-05-16 at 5.22.25 PM (1).jpeg'} alt="" width={350} height={200} />
                        </div>
                        <div className={classes.GalleryStyle}>
                        <Image src={'/images/Gallery/Placements/WhatsApp Image 2022-05-16 at 5.22.25 PM (2).jpeg'} alt="" width={350} height={200} />
                        </div>
                        <div  className={classes.GalleryStyle}>
                        <Image src={'/images/Gallery/Placements/WhatsApp Image 2022-05-16 at 5.22.25 PM.jpeg'} alt="" width={350} height={200} />
                        </div>
                        <div  className={classes.GalleryStyle}>
                        <Image src={'/images/Gallery/Placements/WhatsApp Image 2022-05-16 at 5.22.26 PM (1).jpeg'} alt="" width={350} height={200} />
                        </div>
                        <div  className={classes.GalleryStyle}>
                        <Image src={'/images/Gallery/Placements/WhatsApp Image 2022-05-16 at 5.22.26 PM.jpeg'} alt="" width={350} height={200} />
                        </div>
                        <div  className={classes.GalleryStyle}>
                        <Image src={'/images/Gallery/Placements/WhatsApp Image 2022-05-16 at 5.22.27 PM.jpeg'} alt="" width={350} height={200} />
                        </div>
                        <div  className={classes.GalleryStyle}>
                        <Image src={'/images/Gallery/Placements/WhatsApp Image 2022-05-16 at 5.22.28 PM (1).jpeg'} alt="" width={350} height={200} />
                        </div>
                        <div  className={classes.GalleryStyle}>
                        <Image src={'/images/Gallery/Placements/WhatsApp Image 2022-05-16 at 5.22.28 PM (2).jpeg'} alt="" width={350} height={200} />
                        </div>
                        <div  className={classes.GalleryStyle}>
                        <Image src={'/images/Gallery/Placements/WhatsApp Image 2022-05-16 at 5.22.28 PM.jpeg'} alt="" width={350} height={200} />
                        </div>
                        <div  className={classes.GalleryStyle}>
                        <Image src={'/images/Gallery/Placements/WhatsApp Image 2022-05-16 at 5.22.29 PM.jpeg'} alt="" width={350} height={200} />
                        </div>
                        <div>
                        <Image src={'/images/Gallery/Placements/WhatsApp Image 2022-05-16 at 5.22.30 PM (1).jpeg'} alt="" width={350} height={200} />
                        </div>
                        <div>
                        <Image src={'/images/Gallery/Placements/WhatsApp Image 2022-05-16 at 5.22.30 PM.jpeg'} alt="" width={350} height={200} />
                        </div>
                    </div>
                    <div className={classes.galleryMain}>
                        <h2 className={classes.galleryHeading}>OUR RECRUITERS</h2>
                    </div>
                    <Container style={{ padding: '30px 0px' }}>
                        <div className={classes.recruitersMain}>
                            <Card variant='outlined'>
                                <Image src={'/images/accenture.jpg'} alt="" width={150} height={100} />
                            </Card>
                            <Card variant='outlined'>
                                <Image src={'/images/axis.png'} alt="" width={150} height={100} />
                            </Card>
                            <Card variant='outlined'>
                                <Image src={'/images/apollo.png'} alt="" width={150} height={100} />
                            </Card>
                            <Card variant='outlined'>
                                <Image src={'/images/delloit.png'} alt="" width={150} height={100} />
                            </Card>
                            <Card variant='outlined'>
                                <Image src={'/images/flipkart.png'} alt="" width={150} height={100} />
                            </Card>
                            <Card variant='outlined'>
                                <Image src={'/images/hcl.png'} alt="" width={150} height={100} />
                            </Card>
                            <Card variant='outlined'>
                                <Image src={'/images/icicibank.png'} alt="" width={150} height={100} />
                            </Card>
                        </div>
                        <div className={classes.recruitersMain}>
                            <Card variant='outlined'>
                                <Image src={'/images/hgs1.jpg'} alt="" width={150} height={100} />
                            </Card>
                            <Card variant='outlined'>
                                <Image src={'/images/justdial.png'} alt="" width={150} height={100} />
                            </Card>
                            <Card variant='outlined'>
                                <Image src={'/images/genpact.png'} alt="" width={150} height={100} />
                            </Card>
                            <Card variant='outlined'>
                                <Image src={'/images/yesbank.png'} alt="" width={150} height={100} />
                            </Card>
                            <Card variant='outlined'>
                                <Image src={'/images/capital.png'} alt="" width={150} height={100} />
                            </Card>
                            <Card variant='outlined'>
                                <Image src={'/images/firstsource.png'} alt="" width={150} height={100} />
                            </Card>
                            <Card variant='outlined'>
                                <Image src={'/images/ilm.png'} alt="" width={150} height={100} />
                            </Card>
                        </div>
                        <div className={classes.recruitersMain}>
                            <Card variant='outlined'>
                                <Image src={'/images/infoyis.png'} alt="" width={150} height={100} />
                            </Card>
                            <Card variant='outlined'>
                                <Image src={'/images/innov.png'} alt="" width={150} height={100} />
                            </Card>
                            <Card variant='outlined'>
                                <Image src={'/images/magna.png'} alt="" width={150} height={100} />
                            </Card>
                            <Card variant='outlined'>
                                <Image src={'/images/paytm.png'} alt="" width={150} height={100} />
                            </Card>
                            <Card variant='outlined'>
                                <Image src={'/images/phasis.png'} alt="" width={150} height={100} />
                            </Card>
                            <Card variant='outlined'>
                                <Image src={'/images/sinvey.png'} alt="" width={150} height={100} />
                            </Card>
                            <Card variant='outlined'>
                                <Image src={'/images/tcs.png'} alt="" width={150} height={100} />
                            </Card>
                        </div>

                    </Container>
                </div>
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    )
}

export default Index;