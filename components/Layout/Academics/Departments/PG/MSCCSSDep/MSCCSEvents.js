import React from 'react'
import {getRequiredImgs} from '../../../../../Api/index'

const MSCCSEvents = () => {
    const [apidata,setApiData] = React.useState([])

    const initialLoad = async() =>{
        let folderId = '16LVDml8_lkIfPictlaErXLGPKQlAOeZ0';
        let data = await getRequiredImgs(folderId);
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
            <div>
                <h2 style={{ textDecoration: 'underline' }}>ACADEMIC YEAR 2020-2021</h2>
                <ul>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href='https://drive.google.com/file/d/1MQ_MEo-mIUiaUtD9W7T4jvx9YquIjokM/view?usp=share_link' target='__blank'>Guest Lecture on Personal Grooming in Professional Development for Corporate Sector on 28th December, 2020</a> </li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href='https://drive.google.com/file/d/1Rpqmc4XfKdGN_FAlD6zyf1QrIWzr8qjA/view?usp=share_link' target='__blank'>AWARENESS TALK ON “CYBER SECURITY” (In commemoration of World Literacy Day) on 2nd December, 2020</a> </li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('ALUMNI%20INTERACTION-25.7.pdf')}`} target='__blank'>ALUMNI INTERACTION-25.7.2020</a> </li>

                </ul>
            </div>
            <div>
                <h2 style={{ textDecoration: 'underline' }}>ACADEMIC YEAR 2019-2020</h2>
                <ul>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href='https://drive.google.com/file/d/1MP6mw4blnWrG7XPBVDzHGcO_WT6sUi0T/view?usp=share_link' target='__blank'>UGC Sponsored Two-Day National Webinar on “Data Science using Python ” Organized by: Department of Computer Science & Applications on 26th & 27th May, 2020 in collaboration with Krishna University & in association RAK Analytics Solutions Pvt. Ltd.,</a> </li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href='https://drive.google.com/file/d/1UZ9vLvfb3GllhKmqOAl90aJ_TS9Posc6/view?usp=share_link' target='__blank'>UGC Sponsored Two-Day National Workshop on “Data Analytics using Python ” Organized by: Department of Computer Science & Applications 3rd& 4thJanuary,2020</a> </li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href='https://drive.google.com/file/d/1IBf6qHSQ2QA2W0iIBjHxXqjkZlQoZhZ3/view?usp=share_link' target='__blank'>OUTREACH PROGRAMME - COMPUTER LITERACY DAY - 2ND DECEMBER, 2019</a> </li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('1-18.9.2019.pdf')}`} target='__blank'>Webinar Presentation on “RPA-Robotics Process Automation” on 18th September, 2019</a> </li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('2-17.9.2019.pdf')}`} target='__blank'>Industry Interaction on “Business 4.0” on 17th September, 2019.</a> </li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('3-14.9.2019.pdf')}`} target='__blank'>Guest lecture on “Career Guidance & Fundamental of Programming” on 14th September, 2019.</a> </li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('4-14.9.2019.pdf')}`} target='__blank'>Industrial Visit to KAYNES Technologies from 9th September, 2019 to 14th September, 2019.</a> </li>
                </ul>
            </div>
            <h2 style={{ textDecoration: 'underline' }}>ACADEMIC YEAR 2018-2019</h2>
            <ul>
                <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href='https://drive.google.com/file/d/1atX8IRP7_qSLF--D8c5-BV7b5MjpDeRt/view?usp=share_link' target='__blank'>Two Day National Workshop on “Mobile Application – Development with Android” (NWMADA-2019) organized by PG Department of Computer Science & Applications on 1st & 2nd March, 2019.</a> </li>
                <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('1.%2028%20&%2029-11-18.pdf')}`} target='__blank'>UGC Sponsored National Seminar on “Cyber Security” organized by Department of Computer Science & Applications on 28th & 29th November, 2018</a> </li>
                <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('2.%20%2024%20&%2025-9-18.pdf')}`} target='__blank'>UGC Sponsored Two Day National Workshop on “Data Analytics using R-Programming” on 24th & 25th September, 2018.</a> </li>
                <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('3.%20%2018-8-18.pdf')}`} target='__blank'>Techno Banquet – 2018 (A National Level Technical Meet) organized by Department of Computer Science & Applications on 18th August, 2018.</a> </li>
                <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('GUEST%20LECTURE%20ON%20AI.pdf')}`} target='__blank'>Guest Lecture on Recent Trend in AI by Dr.M.Ravi Shankar, Professor, Department of CSE, Vaagdevi College of Engineering, Warangal</a> </li>
                <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('GUEST%20LECTURE%20ON%20WT.pdf')}`} target='__blank'>Guest Lecture on WebTechnologies by Sri.Y.Vijaya Bhaskar Reddy, Department of CSE, Vardhman Institute of Technology, Hyderabad</a> </li>
            </ul>
            <h2 style={{ textDecoration: 'underline' }}>ACADEMIC YEAR 2017-2018</h2>
            <ul>
                <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('National%20Science%20Day.pdf')}`} target='__blank'>NATIONAL SCIENCE DAY CELEBRATIONS-2018</a> </li>
                <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('tb2018.pdf')}`} target='__blank'>National Level Technical Meet Techno Banquet-2018 on 20th January, 2018.</a> </li>
                <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('GUEST%20LECTURE%20ON%20PROGRAMMING%20FUNDAMENTALS.pdf')}`} target='__blank'>Guest Lecture on “Fundmentals on Programming” by N.Sriram, Assoc.Professor, Department of CSE, KL University on 19th September, 2017.</a> </li>
                <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('nwds2017.pdf')}`} target='__blank'>UGC Sponsored Two-Day National level workshop on DataSciene in collaboration with Krishna University, Machilipatnam on 15-16 September, 2017.</a> </li>
                <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('iot.pdf')}`} target='__blank'>A Two-Day National Level Workshop on IoT on 11-12 July, 2017.</a> </li>
            </ul>

            <h2 style={{ textDecoration: 'underline' }}>ACADEMIC YEAR 2016-2017</h2>
            <ul>
                <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('cloud.pdf')}`} target='__blank'>Mr.T.Anji Reddy, Senior Tech Leader, Syntel Corportation,USA delivered a lecture on “Cloud Computing” on 27 th February, 2016.</a> </li>
                <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('tb2017.pdf')}`} target='__blank'>STATE LEVEL TECHNICAL MEET TECHNO BANQUET-2017 ON 18th FEBRUARY, 2017.</a> </li>
                <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('GUEST%20LECTURE%20ON%20NETWORK%20SECURITY.pdf')}`} target='__blank'>Dr.E.Suresh Babu, Associate Professor, KL University delivered a lecture on “Network Security Applications” on 28 th January, 2016.</a> </li>
                <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href='https://drive.google.com/file/d/1lVNqlvkIAjzb3o7399fibaq-Cbr4C6wS/view?usp=sharing' target='__blank'>UGC SPONSORED TWO DAY INTERNATIONAL CONFERENCE ON ‘DIGITAL INDIA – THE INFORMATION FOR ALL’ ON 2ND & 3RD DECEMBER, 2016.</a> </li>
                <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('IMAGE%20PROCESSING.pdf')}`} target='__blank'>TWO DAY NATIONAL WORKSHOP ON IMAGE PROCESSING USING R-PROGRAMMING ON 26TH & 27TH OCTOBER, 2016.</a> </li>
                <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('CCNA%20WORKSHOP.pdf')}`} target='__blank'>A TWO DAY WORKSHOP ON CCNA(ROUTING & SWITCHING) ON 11TH & 12TH JULY, 2016.</a> </li>
            </ul>
            <h2 style={{ textDecoration: 'underline' }}>ACADEMIC YEAR 2015-2016</h2>
            <ul>
                <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href='https://drive.google.com/file/d/1_G-TAYlaM-e4op3jKPmDd6_9nduCuGqc/view?usp=share_link' target='__blank'>UGC Sponsored National Seminar on ETHICAL HACKING an inevitable tool for a secured organization on 12th and 13th December 2015.</a> </li>
                <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('tb2015.pdf')}`} target='__blank'>National Level Technical Meet Techno Banquet-2015 on 2nd December, 2015.</a> </li>
                <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('NWIR.pdf')}`} target='__blank'>UGC-Sponsored 2-Day National Workshop On “Intelligent Robotics” In Association With Innovative Technology Labz, New Delhi On 21-22 August, 2015.</a> </li>
                <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href='##' target='__blank'>Smt.UmaMaheswari, Technical Architect, NIIT delivered a guest lecture on SAP on 10th October 2015.</a> </li>
                <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('Guest%20Lecture%20on%20network%20security.pdf')}`} target='__blank'>Smt.V.Sujata Lakshmi,AssocProf, RVR & JC College of Engineering, Guntur delivered a guest lecture on Network Security on 25th july 2015.</a> </li>
                <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href='##' target='__blank'>A Guest Lecture on Mobile Technology on 20/09/2014 by Assoc. Professor ASIT College</a> </li>
                <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('GUEST%20LECTURE%20ON%20WEB%20TECHNOLOGIES.pdf')}`} target='__blank'>A Guest Lecture on Web Technologies on 16/07/2014 by Assoc. Professor LBRCE College
                </a> </li>
            </ul>
            <h2 style={{ textDecoration: 'underline' }}>ACADEMIC YEAR 2014-2015</h2>
            <ul>
                <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('ASPIRE%202015.pdf')}`} target='__blank'>A State Level Meet for all Degree final year students on 24th January, 2015</a> </li>
                <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('Two1.pdf')}`} target='__blank'>A National Level Workshop Android App Development (Tryst-2014) By Robotryst, Iit Delhi On 5th & 6th September, 2014.
                </a> </li>
            </ul>
            <h2 style={{ textDecoration: 'underline' }}>ACADEMIC YEAR 2013-2014</h2>
            <ul>
                <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('contentwriting.pdf')}`} target='__blank'>ADVANCED CONTENT WRITING TRAINING PROGRAMME” BY WIKIPEDIA, TELUGU ON 15TH & 16TH FEBRUARY, 2014.</a> </li>
                <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href='##' target='__blank'>A Guest Lecture on Java-netBeans by N.Phanindra, Testing Trainee,Wipro, Bangalore on 02nd Feb 2014.</a> </li>
                <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href='##' target='__blank'>A Guest Lecture on e-Products for social networking sites by D.Mohan Sudarshan, Program Analyst, Quinax,Mumbai on 5th Jan 2014.</a> </li>
                <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('dmw.pdf')}`} target='__blank'>NATIONAL WORKSHOP ON “DATA WARESHOUSING AND MINING” ON 27TH NOVEMBER, 2013.</a> </li>
            </ul>
            <h2 style={{ textDecoration: 'underline' }}>ACADEMIC YEAR 2012-2013</h2>
            <ul>
                <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('A%20Guest%20Lecture%20on%20Data%20WareHousing%20and%20Mining2013.pdf')}`} target='__blank'>A Guest Lecture on Data WareHousing and Mining by P.Nilesh Kumar purohit,technical manager,Mahindra Sathyam, on 1st Mar 2013.</a> </li>
                <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href='##' target='__blank'>Techno Banquet 2013 Organized by 30th January, 2013</a> </li>
                <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('A%20Guest%20Lecture%20on%20Motivation.pdf')}`} target='__blank'>A Guest Lecture on Motivation by Kotaiah,Lions club member, Vijayawada on 29th dec 2012.</a> </li>
                <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('A%20Guest%20Lecture%20on%20Communication%20skill%20karthik.pdf')}`} target='__blank'>A Guest Lecture on Communication skills by karthik,HR, Chennai on 4th Sep 2012.</a> </li>
                <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('A%20Guest%20Lecture%20on%20Security%20of%20information.pdf')}`} target='__blank'>A Guest Lecture on Security of information by A.Murali.M.Rao,Joint Director,IGNOU, New Delhi on 25th aug 2012.</a> </li>
                <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('A%20Guest%20Lecture%20on%20Communication%20skills.pdf')}`} target='__blank'>A Guest Lecture on Communication skills by B.Bhanu Prakash,HR,Syntel, Chennai on 5th aug 2012.</a> </li>
                <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('A%20Guest%20Lecture%20on%20DAA.pdf')}`} target='__blank'>A Guest Lecture on DAA by Hemalatha,HOD in RCCE,Eluru on 6th august 2012.</a> </li>
                <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('A%20Guest%20Lecture%20on%20Software%20Engineering%20techniques.pdf')}`} target='__blank'>A Guest Lecture on Software Engineering techniques by T.Anjireddy, Techlead, Syntel, Chennai on 4th aug 2012.</a> </li>
                <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('A%20Guest%20Lecture%20on%20intrusion.pdf')}`} target='__blank'>A Guest Lecture on Intrusion Detection system using machine learning" by Professor Naga raju, Dept of CSE, ANUCET 18th sep 2012.</a> </li>
            </ul>



        </div>

    )
}

export default MSCCSEvents;