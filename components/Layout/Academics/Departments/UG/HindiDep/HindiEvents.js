import React from 'react'
import {getRequiredImgs} from '../../../../../Api/index'

const HindiEvents = () => {

    const [apidata,setApiData] = React.useState([])

    const initialLoad = async() =>{
        let govt_folderId = '126qJeo0HJr2csIbatS5W_vcbneQjcCYK';
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
            <div>
                <h2 style={{ textDecoration: 'underline' }}>ACADEMIC YEAR 2019-2020:</h2>
                <ul>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('HINDI%20DAY%20PHOTOS%20-%2014.9.pdf')}`} target='__blank'>Hindi Day on 14th September, 2019.</a> </li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('SCIENCE%20EXPO%20-%20PHOTOS.pdf')}`} target='__blank'>Science Expo – 21st to 23rd August, 2019.</a> </li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('COP-%20HINDI-PHOTOS.pdf')}`} target='__blank'>Career Orientation Programme on 30th June, 2019.</a> </li>

                </ul>
            </div>
            <div>
                <h2 style={{ textDecoration: 'underline' }}>ACADEMIC YEAR 2018-2019:</h2>
                <ul>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('EVENT%20-%20HINDI%20DAY%20-%2014.9.2018.pdf')}`} target='__blank'>Celebrated Hindi Day on 14th September, 2018.</a> </li>
                </ul>
            </div>
            <div>
                <h2 style={{ textDecoration: 'underline' }}>ACADEMIC YEAR 2017-2018</h2>
                <ul>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href='https://drive.google.com/uc?id=1OxXbmOZM3jxsip0WS_vysBzE4lebXXbQ' target='__blank'>National Seminar on “RAJBHASHA HINDI: ANUVAD KI SAMASYAEN on 23rd September, 2017.</a> </li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('2-14.9.17.pdf')}`} target='__blank'>Celebrated Hindi Day on 14th September, 2017.</a> </li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('3-9.8.17.pdf')}`} target='__blank'>Guest Lecture on “Importance of Grammar” on 9th August, 2017.</a> </li>
                </ul>
            </div>
            <div>
                <h2 style={{ textDecoration: 'underline' }}>ACADEMIC YEAR 2016-2017:</h2>
                <ul>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('4-%2014.9.16.pdf')}`} target='__blank'>Celebrated Hindi Day on 14th September, 2016.</a> </li>
                </ul>
            </div>
            <div>
                <h2 style={{ textDecoration: 'underline' }}>ACADEMIC YEAR 2015-2016</h2>
                <ul>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href='https://drive.google.com/uc?id=1c1YQSZ4E2W0TFFiuqfTZSneMRjhacg3L' target='__blank'>Two-Day Hindi National Seminar on “SAMAKALEEN SAHITYA KI VAICHARIKI” in Collaboration with AKSHARA (Saahiti – Sanskritik – Seva Peetham) and Acharya Nagarjuna Univeristy, Guntur on 22nd & 23rd November 2015.</a> </li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('6%20-%2014.9.2015.pdf')}`} target='__blank'>Celebrated Hindi Day on 14th September, 2015.</a> </li>
                </ul>
            </div>
            <div>
                <h2 style={{ textDecoration: 'underline' }}>ACADEMIC YEAR 2014-2015</h2>
                <ul>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href='https://drive.google.com/uc?id=1TS4HKEbBQjz8WYC4IXMD_2ADvk7ySrck' target='__blank'>One day National Seminar on “Mahaveer Prasad Diwedi Vyatha Evam Sathiya” on 22nd November, 2014.</a> </li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('8%20-%2014.9.2014.pdf')}`} target='__blank'>Celebrated Hindi Day on 14th September, 2014.</a> </li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('9-%2026.7.14.pdf')}`} target='__blank'>Guest Lecture on “Hindi Sahityam- History-Significance” on 26th July, 2014. Resource person Sri. P. Maruthi Rao, HOD, Hindi PB Siddhartha College.</a> </li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('10-17.7.14%20-%20Guest%20Lecture.pdf')}`} target='__blank'>Guest Lecture on “Hindi Language – Job Opportunities” on 17th July, 2014 Resource person Dr. P. Srinivasa Rao, Convener of south Indian Hindi Prachara sabha.</a> </li>
                </ul>
            </div>
            <div>
                <h2 style={{ textDecoration: 'underline' }}>ACADEMIC YEAR 2013-2014:</h2>
                <ul>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('11-14.9.13.pdf')}`} target='__blank'>Celebrated Hindi Day on 14th September, 2013</a> </li>
                </ul>
            </div>
            <div>
                <h2 style={{ textDecoration: 'underline' }}>ACADEMIC YEAR 2012-2013:</h2>
                <ul>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('1.14.9.2012-13.pdf')}`} target='__blank'>Guest Lecture on Importance of Hindi</a> </li>
                </ul>
            </div>
        </div>
    )
}

export default HindiEvents