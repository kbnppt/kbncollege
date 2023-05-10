import React from 'react'
import { makeStyles, withStyles } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { Divider } from '@material-ui/core'
import {getRequiredImgs} from '../../Api/index';

const useStyles = makeStyles((theme) => ({
    HeadingMain: {
        //fontSize:'36px',
        // textAlign:'center',
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
        margin: '0px',
        color: '#337AB7',
        '&:hover': {
            textDecoration: 'underline',
            color: 'grey'
        }
    },
    teluguContent: {
        // fontSize: '22px',
        margin: '0',
        paddingBottom: '10px'
    },
    AQARLinks: {
        fontSize: '20px',
        color: '#337AB7',
        '&:hover': {
            textDecoration: 'underline'
        }
    },
    divider: {
        marginTop: '25px',
        marginBottom: '25px'
    },
    arrowContent: {
        // fontSize: '22px',
        margin: '0px',
    }

}));

const CollegeActivityRegister = () => {
    const classes = useStyles();

    const [apidata,setApiData] = React.useState([])

    const initialLoad = async() =>{
        let govt_folderId = '1Dc-SVr-9nZxhCf5svxAbpAma3a80Sogh';
        let data = await getRequiredImgs(govt_folderId);
        setApiData(data?.files)
    }


    React.useEffect(()=>{
        initialLoad()
    },[])


    const getImgData = (data) =>{
        let value = data?.split('%20')?.join(' ');
        let filterValue = apidata?.find((e)=>e?.name == value);
        if(filterValue){
            return filterValue?.id
        }
        return '1mOfBNITDbkyBcSwLI0A87bJY5nvNNm4E'
    }    

    return (
        <div>

            <h2 className={classes.HeadingMain}>Faculty Development Programs</h2>
            <Divider />
            <div className={classes.objectivesContent}>
                <ArrowForwardIosIcon className={classes.arrowIcon} />
                <a href={`https://drive.google.com/uc?id=${getImgData('ONE-WEEK%20VIRTUAL%20FDP%20ON%20RESEARCH%20DESIGN,%20ETHICS%20&%20METRICS-18-23%20OCTOBER,%202021.pdf')}`} target='__blank' className={classes.arrowwithContent}>ONE-WEEK VIRTUAL FDP ON "RESEARCH DESIGN, ETHICS & METRICS" on 18th to 23rd OCTOBER, 2021</a>
            </div>
            <div className={classes.objectivesContent}>
                <ArrowForwardIosIcon className={classes.arrowIcon} />
                <a href={`https://drive.google.com/uc?id=${getImgData('NAAC%20SPONOSRED%20CONFERENCE%20ON%20IMAPCT%20OF%20BEST%20PRACTICES%20IN%20QUALITY%20ENHANCEMENT%20IN%20HIGHER%20EDUCATION%20INSTITUTIONS%20-%204&5%20DECEMBER,%202020.pdf')}`} target='__blank' className={classes.arrowwithContent}>NAAC SPONOSRED CONFERENCE ON "IMAPCT OF BEST PRACTICES IN QUALITY ENHANCEMENT IN HIGHER EDUCATION INSTITUTIONS" on 4th & 5th DECEMBER, 2020</a>
            </div>
            <div className={classes.objectivesContent}>
                <ArrowForwardIosIcon className={classes.arrowIcon} />
                <a href={`https://drive.google.com/uc?id=${getImgData('Teacher%20Orientation%20&%20Training%20Programme%20on%20%E2%80%98Share%202020%20Academic%20View%E2%80%99%20%20By%20using%20Google%20Meet%20%20G-Suit%20App%20on%208th%20July,%202020.pdf')}`} target='__blank' className={classes.arrowwithContent}>Teacher Orientation & Training Programme on ‘Share 2020 Academic View’ By using Google Meet / G-Suit App on 8th July 2020</a>
            </div>
            <div className={classes.objectivesContent}>
                <ArrowForwardIosIcon className={classes.arrowIcon} />
                <a href={`https://drive.google.com/uc?id=${getImgData('IQAC%20WEBINAR%20-%2010-13.06.2020-KBN%20COLLEGE,%20VIJAYAWADA.pdf')}`} target='__blank' className={classes.arrowwithContent}>UGC Sponsored Four-Day Webinar on "Impact of COVID-19 On Education Sector in India and Strategies to Face the Pandemic from 10th June to 13th June, 2020 Organized by Internal Quality Assurance Cell in collaboration with Andhra Pradesh State Council of Higher Education(APSCHE)</a>
            </div>
            <div className={classes.objectivesContent}>
                <ArrowForwardIosIcon className={classes.arrowIcon} />
                <a href={`https://drive.google.com/uc?id=${getImgData('1-7.9.2019.pdf')}`} target='__blank' className={classes.arrowwithContent}>Invited Talk on “National Education Policy –2019” Organized by Internal Quality Assurance Cell On 07/09/2019</a>
            </div>
            <div className={classes.objectivesContent}>
                <ArrowForwardIosIcon className={classes.arrowIcon} />
                <a href={`https://drive.google.com/uc?id=${getImgData('2-10.8.2019.pdf')}`} target='__blank' className={classes.arrowwithContent}>Three Day Leaders Workshop on "A Powerful & Life Changing Development Programme” 7th,8th & 10thAugust,2019 Organized by Internal Quality Assurance Cell</a>
            </div>
            <div className={classes.objectivesContent}>
                <ArrowForwardIosIcon className={classes.arrowIcon} />
                <a href={`https://drive.google.com/uc?id=${getImgData('3-30.5-1.6-2019.pdf')}`} target='__blank' className={classes.arrowwithContent}>Three – Day Faculty Development Programme on “Innovative Pedagogy & Effective Teaching” 30th May – 1stst June,2019 Organized by IQAC & Research Promotion and Monitoring Cell</a>
            </div>
            <div className={classes.objectivesContent}>
                <ArrowForwardIosIcon className={classes.arrowIcon} />
                <a href={`https://drive.google.com/uc?id=${getImgData('workshops/Faculty%20SENSITIZATION%20PROGRAMME%20-16.2.2019%20.pdf')}`} target='__blank' className={classes.arrowwithContent}>Sensitization Programme on “Triggering Thoughts towards Better Youth Employability” Organized by Internal Quality Assurance Cell 16th February, 2019</a>
            </div>
            <div className={classes.objectivesContent}>
                <ArrowForwardIosIcon className={classes.arrowIcon} />
                <a href={`https://drive.google.com/uc?id=${getImgData('1-15.11.2018fdp.pdf')}`} target='__blank' className={classes.arrowwithContent}>Two Day Faculty Development Programme on “Innovation & Creativity” 14th & 15th November, 2018</a>
            </div>
            <div className={classes.objectivesContent}>
                <ArrowForwardIosIcon className={classes.arrowIcon} />
                <a href='#' target='__blank' className={classes.arrowwithContent}>Three Day Induction program on 29th -31st October,2018 Organized by Internal Quality Assurance Cell</a>
            </div>
            <div className={classes.objectivesContent}>
                <ArrowForwardIosIcon className={classes.arrowIcon} />
                <a href='#' target='__blank' className={classes.arrowwithContent}>Two Day Faculty Development Programme on “Teaching Methods, Tools and Techniques” Organized byInternal Quality Assurance Cell (IQAC) 6th & 7th June, 2018</a>
            </div>
            <div className={classes.objectivesContent}>
                <ArrowForwardIosIcon className={classes.arrowIcon} />
                <a href='#' target='__blank' className={classes.arrowwithContent}>Two Day Faculty Development Programme on “TeachingMethods, Tools and Techniques” Organized by Internal Quality Assurance Cell (IQAC) 6th  & 7th  June, 2018</a>
            </div>
            <div className={classes.objectivesContent}>
                <ArrowForwardIosIcon className={classes.arrowIcon} />
                <a href='#' target='__blank' className={classes.arrowwithContent}>UGC Sponsored (Under CPE Grant) One Week Orientation Programme on “FUTURE TRENDS IN QUALITY ENHANCEMENT OF PROFESSIONAL & ACADEMIC SKILLS IN HEIs” in collaboration with Krishna University, Machilipatnam from 5th – 11th August, 2017</a>
            </div>
            <div className={classes.objectivesContent}>
                <ArrowForwardIosIcon className={classes.arrowIcon} />
                <a href='#' target='__blank' className={classes.arrowwithContent}>Faculty Development Programme on “Skill Development and Effective Teaching in Academia” on 2nd June, 2016. Resource Person:Sri. Alapati Sri Nagesh, International Corporate Trainer, Hyderabad</a>
            </div>
            <div className={classes.objectivesContent}>
                <ArrowForwardIosIcon className={classes.arrowIcon} />
                <a href='#' target='__blank' className={classes.arrowwithContent}>Faculty Development Programme on “Teaching and Work Ethos” on 2nd & 3rd June, 2015. Resource Persons: Sri. Gampa Nageswara Rao, Excel Coach, JCI University, USA & Sri. Jagadish Upadhaya, HR Trainer, Hyderabad.</a>
            </div>
            <div className={classes.objectivesContent}>
                <ArrowForwardIosIcon className={classes.arrowIcon} />
                <a href='#' target='__blank' className={classes.arrowwithContent}>Faculty Development Programme on “Personal and Professional Excellence” on 28th December, 201. Resource Person: Prof. M.C. Das, HOD of Commerce, Andhra Loyola College and Management Consultant</a>
            </div>
            <div className={classes.objectivesContent}>
                <ArrowForwardIosIcon className={classes.arrowIcon} />
                <a href='#' target='__blank' className={classes.arrowwithContent}>Faculty Development Programme on “Human Values & Professional Ethics” on 24th March, 2014. Resource Person: Dr. Illa Ravi, Principal GDC, Avanigadda</a>
            </div>
            <div className={classes.objectivesContent}>
                <ArrowForwardIosIcon className={classes.arrowIcon} />
                <a href='#' target='__blank' className={classes.arrowwithContent}>Faculty Development Programme on “Human Values” on 17th August, 2013. Resource Person: Mallapragada Srimanarayana Murthy</a>
            </div>
            <div className={classes.objectivesContent}>
                <ArrowForwardIosIcon className={classes.arrowIcon} />
                <a href='#' target='__blank' className={classes.arrowwithContent}>Faculty Development Programme on “Enhancing Personality & Soft Skills” on 27th& 28th March 2013. Resource Persons: Mr.Vivek Patki, Freelance Trainer & Dr. Gowri Joshi, Associate Professor School of Business Management, Mumbai</a>
            </div>
            <div className={classes.objectivesContent}>
                <ArrowForwardIosIcon className={classes.arrowIcon} />
                <a href='#' target='__blank' className={classes.arrowwithContent}>Faculty Development Programme on “Promoting Excellence in Teaching” on 15th & 16th March 2013. Resource Person: Prof. M.C. Das, HOD of Commerce, Andhra Loyola College and Management Consultant</a>
            </div>

        </div>
    )
}

export default CollegeActivityRegister