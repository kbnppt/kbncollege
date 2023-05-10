import React from 'react'
import {getRequiredImgs} from '../../../../../Api/index'

const MathsandStatisticksEvents = () => {

    const [apidata,setApiData] = React.useState([])

    const initialLoad = async() =>{
        let govt_folderId = '1dNMDQcao2k2mcS9PC9KmicdyMu89jxV8';
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
                <h2 style={{ textDecoration: 'underline' }}>ACADEMIC YEAR 2021-2022:</h2>
                <ul>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('PHOTOS%20&%20REPORT-22.3.2022.pdf')}`} target='__blank'>Guest Lecture on ‘PUZZLES ON PUZZLES YOU’, The famous Indian Mathematician, Shakuntala Devi on 2nd March, 2022.</a> </li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('PHOTOS%20&%20REPORT-22.12.pdf')}`} target='__blank'>NATIONAL MATHEMATICS DAY CELEBRATIONSon 22nd December 2021.</a> </li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('PHOTOS%20&%20REPORT-MOU%20EXCHANGE%20WITH%20SIR%20CR%20R.pdf')}`} target='__blank'>"Student, Faculty & MoU Exchange Programme Between Dept. of Mathematics & Statistics And Dept. of Mathematics, SIR CR Reddy College, Eluru " on 30th November, 2021.</a> </li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('PHOTOS%20&%20REPORT-26.11.pdf')}`} target='__blank'>Guest Lecture on "Applications of Real Analysis" on 26th November, 2021.</a> </li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('REPORT%20&%20PHOTOS.pdf')}`} target='__blank'>Career Awareness Programme on"Opportunities in Machine Learning" Organised by dept Mathematics and Statistics on 20th November, 2021.</a> </li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('PHOTOS%20&%20REPORT-20.9.pdf')}`} target='__blank'>Virtual Guest Lecture on "Applications of Differential Equations" on 20th September, 2021.</a> </li>
                </ul>
            </div>
            <div>
                <h2 style={{ textDecoration: 'underline' }}>ACADEMIC YEAR 2020-2021:</h2>
                <ul>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('MATHS%20WEBINAR%20-%2015-20.06.pdf')}`} target='__blank'>UGC Sponsored Six-Day National Webinar on "Discovering Statistics using R" from 15th -20th June, 2020.</a> </li>
                </ul>
            </div>
            <div>
                <h2 style={{ textDecoration: 'underline' }}>ACADEMIC YEAR 2019-2020:</h2>
                <ul>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('MTUSS%20-%202019-%20PHOTOS.pdf')}`} target='__blank'>Mini Mathematics Training For UG Statistics Students(MTUSS-2019) from 2nd to 15th December, 2019.</a> </li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('1-%20GUEST%20LECTURE%20-%201.10.2019.pdf')}`} target='__blank'>Guest Lecture on Page Rank: A Query-Dependent Modification & Its Computation Organized By Dept.of Mathematics & Statistics on 1st October,2019.</a> </li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('2-THREE%20DAY%20MAT%20LAB-%2011-13TH%20SEPTEMBER,%202019.pdf')}`} target='__blank'>Three-day Workshop on "MATLAb" Organized by: Department of Mathematics & Statistics On 11th - 13th September,2019.</a> </li>
                </ul>
            </div>
            <div>
                <h2 style={{ textDecoration: 'underline' }}>ACADEMIC YEAR 2018-2019:</h2>
                <ul>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('1-22.12.2018.pdf')}`} target='__blank'>National Mathematics Day Celebrations (Srinivasa Ramanujan Birth Anniversary) on 22nd December, 2018.</a> </li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('2-10-15.12.2018.pdf')}`} target='__blank'>Mini Mathematical Training and Talent Search Programme 2018 (Mini MTTS) from 10th – 15th December, 2018.</a> </li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('3-4&5.10.2018.pdf')}`} target='__blank'>Science Academies Lecture Workshop on “Fluid Mechanics” on 4th & 5th October, 2018.</a> </li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('4-27.8.2018.pdf')}`} target='__blank'>Three Day Workshop on “R–Programming” (Under Autonomous Funds) 27th – 29th August, 2018.</a> </li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('5-9-11.8.2018.pdf')}`} target='__blank'>Science Expo–2018 from 9th–11th August, 2018.</a> </li>
                </ul>
            </div>

            <div>
                <h2 style={{ textDecoration: 'underline' }}>ACADEMIC YEAR 2017-2018:</h2>
                <ul>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('1-22.2.2018.pdf')}`} target='__blank'>Guest Lecture on “Structure in Mathematics” on 22nd February, 2018. Resource Person: Sri S. Nagendra, Lecturer in Mathematics, Govt. College for Men (A), Kadapa.</a> </li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('2-23.1.2018.pdf')}`} target='__blank'>“Math Us” event on 23rd January, 2018.</a> </li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('3-22.12.2017.pdf')}`} target='__blank'>National Mathematics Day Celebrations on 22nd December, 2017.</a> </li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('4-5-7.8.2017.pdf')}`} target='__blank'>3-Day State Level Workshop on “SPSS” from 5th – 7th August, 2017.</a> </li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('5-29.6.2017.pdf')}`} target='__blank'>Observed & Celebrated “National Statistics Day” on 29th June, 2017.</a> </li>
                </ul>
            </div>
            <div>
                <h2 style={{ textDecoration: 'underline' }}>ACADEMIC YEAR 2016-2017:</h2>
                <ul>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('1-22.2.2018.pdf')}`} target='__blank'>Math Us” Event on 21st February, 2017.</a> </li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('2-23.1.2018.pdf')}`} target='__blank'>A Guest Lecture on “Career in Statistics. Resource Person: P. Sita Rama Swamy” on 21st January, 2017.</a> </li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('3-22.12.2017.pdf')}`} target='__blank'>Orientation Programme to Aided School Teachers on 22nd December, 2016</a> </li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('4-5-7.8.2017.pdf')}`} target='__blank'>A Guest lecture on “Graph Theory” on 23rd September, 2016.</a> </li>

                </ul>
            </div>
            <div>
                <h2 style={{ textDecoration: 'underline' }}>ACADEMIC YEAR 2015-2016:</h2>
                <ul>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('10-27.11.2015.pdf')}`} target='__blank'>A Guest Lecture on “Inner Product Spaces” on 27th November, 2015.</a> </li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('11-14-19.11.2015.pdf')}`} target='__blank'>Mini MTTS Programme from 14th – 19th December, 2015.</a> </li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href='https://drive.google.com/uc?id=12Yd2abwmP8mvOFNUZ_Y7cdSJ0MCjJpSW' target='__blank'>One Day Workshop on ”AIMS” on 28th November, 2015</a> </li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('13-16.11.2015%20to%2020.11.2015.pdf')}`} target='__blank'>“Math with Mat Lab” from 16th – 20th November, 2015</a> </li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('14-4.9.2015.pdf')}`} target='__blank'>“Math Us” Event on 4th September, 2015.</a> </li>
                </ul>
            </div><div>
                <h2 style={{ textDecoration: 'underline' }}>ACADEMIC YEAR 2014-2015:</h2>
                <ul>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href='https://drive.google.com/uc?id=19I17EkuS6NM6Avnr8zJgYic7gldZE-mn' target='__blank'>UGC Sponsored Two Day National Workshop on “Applications of Algebra” on 19th & 20th February, 2015.</a> </li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('16-2.12.2014.pdf')}`} target='__blank'>A Guest Lecture on “Game Theory” on 2nd December, 2014.</a> </li>
                </ul>
            </div>
            <div>
                <h2 style={{ textDecoration: 'underline' }}>ACADEMIC YEAR 2013-2014:</h2>
                <ul>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('MATHS%20WEBINAR%20-%2015-20.06.pdf')}`} target='__blank'>A Guest lecture on “Indian Science – History of Mathematics” on 11th July, 2013.</a> </li>
                </ul>
            </div>

        </div>
    )
}

export default MathsandStatisticksEvents;