import React from 'react'
import {getRequiredImgs} from '../../../../../Api/index'

const PhysicsandElectronicesEvents = () => {
    const [apidata,setApiData] = React.useState([])

    const initialLoad = async() =>{
        let govt_folderId = '1WpCtTgT5FulhYSGuXPydtk4RtkIA9BVf';
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
            <h1>Events </h1>
            <div>
                <h1>ACADEMIC YEAR 2021-2022:</h1>
                <ul>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href='https://drive.google.com/uc?id=1rmOywxTjdfIQlldw1X8sznVslYxrbJ5t' target='__blank'>Guest Lecture on ‘Emerging Technologies in Electronics & IoT’on 19th February,2021</a></li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href='https://drive.google.com/uc?id=1QkR3QoaoJseJDXUa0jNiwNOoIZha1kI1' target='__blank'>Three Day Workshop on ‘IOT and RASPBERRY PI’on 20th to 21st December,2021</a></li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href='https://drive.google.com/uc?id=1gLmlh6weWnNqK1EtPalvZcKCP_9pqJPR' target='__blank'>‘National Energy ConservationDay’on 14th December,2021</a></li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href='https://drive.google.com/uc?id=1UH1GF9dpDnnLrU5d6Ui0ErkN2XfcQTnX' target='__blank'>Guest Lecture on ‘5G Mobile Technologies and Internet of Things on 18th November, 2021 Organised by dept Physics& Electronics.</a></li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href='https://drive.google.com/uc?id=1Tn7ZzVEVDbaLzNsnv31zz5eDqPC4k4nb' target='__blank'>Virtual Guest Lecture on ‘Embedded Systems and Programming’on 21st August,2021</a></li>
                </ul>
            </div>
            <div>
                <h1>ACADEMIC YEAR 2020-2021:</h1>
                <ul>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('NATIONAL%20SCIENCE%20DAY-27.2.2021.pdf')}`} target='__blank'>Guest Lecture on ‘How Physics helps in IT?” on the occasion of National Science Day on 27th February, 2021. Resource Person: Dr. G. Sahaya Bhaskar, Associate Professor in Physics, Andhra Loyola College, Vijayawada.</a></li>
                </ul>
            </div>
            <div>
                <h1>ACADEMIC YEAR 2019-2020:</h1>
                <ul>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('CAREER%20GUIDANCE%20PROGRAMME%20-21.12.2019.pdf')}`} target='__blank'>Career Guidance Programme by Prof. M. Siva Kumar, School of Physics, University of Hyderabad on 21st December, 2019.</a></li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('FIELD%20TRIP-21.11.2019.pdf')}`} target='__blank'>Field Trip to Electronics Test and Development Centre, Hyderabad 21th November 2019 </a></li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('GUEST%20LECTURE%20ON%20NANO%20PARTICLES%20IN%20LIQUID%20-%2018TH%20NOVEMBER,%202019.pdf')}`} target='__blank'>Guest Lecture on “Nanoparticles in Liquid Crystals & Liquid Crystalline Nanoparticles”18th  November, 2019 </a></li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('PTTS-16-20.12.2019.pdf')}`} target='__blank'>Mini Physics Training and Talent Search programme(PTTS) Organized by Department of Physics & Electronics On 16th to 20th December 2019.</a></li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('1-RALLY-27.9.2019.pdf')}`} target='__blank'> Rally on “Effects of Using Plastic” on 27thSeptember,2019.</a></li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('2-EXT.LECTURE.pdf')}`} target='__blank'> Two-Day Extension Lectures Programme in Physics on 29th & 30thAugust,2019</a></li>
                    {/* <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href='https://drive.google.com/uc?id=SCIENCE%20EXPO%20-%20PHYSICS%20(21-23.108.2019).pdf' target='__blank'>  Science Expo-2019 on 21st to 23rd August.</a></li> */}
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('3-FIELD%20VISIT%20-%206.8.2019.pdf')}`} target='__blank'> Field Visit to “Nuclear Fuel Complex, Hyderabad” on 6thAugust2019.</a></li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('4-Guest%20Lecture%20-%2027.7.2019.pdf')}`} target='__blank'> Guest Lecture on “Home Automation” on 27th July, 2019</a></li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('5-Career%20Coun.Prm-21.6.2019.pdf')}`} target='__blank'> Career Orientation Programme on 21stJune,2019</a></li>

                </ul>
            </div>
            <div>
                <h1>ACADEMIC YEAR 2018-2019:</h1>
                <ul>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('1-1&2.2.2019.pdf')}`} target='__blank'>Two Days Science Academies Lecture Workshop on “Applications of Quantum Mechanics to Optics” Funded by Indian Academy of Sciences, Bangalore, Indian National Science Academy, Delhi & The National Academy of Sciences, Allahabad on 1st & 2nd February, 2019.</a></li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('2-23.10.2018.pdf')}`} target='__blank'>Guest Lecture on “Internet of Things” (IoT) on 23rd October, 2018.</a></li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('3-17.9.2018.pdf')}`} target='__blank'>Inauguration of “KBN NURSERY” (On the eve of Preservation of Ozone Layer) 17th September, 2018.</a></li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('4-9-11.2018.pdf')}`} target='__blank'>cience Expo–2018 from 9th–11th August,2018.</a></li>
                </ul>
            </div>
            <div>
                <h1>ACADEMIC YEAR 2017-2018:</h1>
                <ul>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('1-28.02.2018.pdf')}`} target='__blank'>A Guest Lecture on “Science & Technology for Sustainable Future” was organized in view of National Science Day on 28th February 2018. Resource Person: Sri L. S. R. Ch. V. K. Nageswara Rao, Lecturer in Physics, CRR College, Autonomous.</a></li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('2-22.02.2018.pdf')}`} target='__blank'>Guest Lecture on “Thermo Dynamics Potentials and Maxwell Equations” on 22nd February, 2018. Resource Person: Sri P. Bayapu Reddy, Lecturer in Physics, Govt. Degree College for Men (A), Kadapa.</a></li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('3-3.2.2018.pdf')}`} target='__blank'>Field Trip to Kona, Cold Storage Nunna on 3rd February, 2018.</a></li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('4-11.1.2018%20(2).pdf')}`} target='__blank'>Field Trip to APCOST, Regional Science Centre, Bhavanipuram, Vijayawada on 11th January, 2018.</a></li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('5.%20%2019.12.2017-%2021.12.2017.pdf')}`} target='__blank'>UGC Sponsored (Under Autonomous Grants) Three Day National Workshop on ‘AUTOMATION THROUGH IoT – Level I’ from 19th December to 21st December 2017.</a></li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('6-14.12.2017.pdf')}`} target='__blank'>A Guest Lecture on “Environmental Protection – The Fundamental Responsibility of Civic Society” by Sri. Satish on 14th December 2017 on the occasion of “National Energy Conservation Day”.</a></li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('7-15.9.2017.pdf')}`} target='__blank'>Community Awareness Programme on “No Vehicle Day” on 15th September, 2017.</a></li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('8-16.9.2017.pdf')}`} target='__blank'>A Rally on the occasion of International Day for the Preservation of Ozone Layer on 16th September 2017.</a></li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('9-16.9.2017.pdf')}`} target='__blank'>A Guest Lecture by Dr. P. Brahmaji Rao, Associate Professor, Department of Environmental Science, Acharya Nagarjuna University, Guntur on 16th September 2017.</a></li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('10-5.6.2017.pdf')}`} target='__blank'>World Environmental Day Celebrations on 5th June 2017.
                    </a></li>

                </ul>
            </div>
            <div>
                <h1>ACADEMIC YEAR 2016-2017:</h1>
                <ul>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('11-28.2.2017.pdf')}`} target='__blank'>Guest Lecture on Physics in technology on the occasion of National Science Day on 28.02.2017. Resource Person: Dr. G. Sahaya Bhaskaran, Reader in Physics, Andhra Loyola College, Vijayawada.</a></li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('12-21.12.2016.pdf')}`} target='__blank'>Guest Lecture on “Energy Conservation” on the occasion of Energy Conservation Week from 14th – 20th December, 2016 Resource Person: Prof. C. Rambabu, Retd. Principal, Professor of Chemistry, University College of Science, Acharya Nagarjuna University, Guntur.</a></li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('13-20.12.2016.pdf')}`} target='__blank'>Rally on the occasion of Energy Conservation Week from 14th – 20th December in association with APSPDCL on 20th December, 2016.</a></li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('14-20.10.2016.pdf')}`} target='__blank'>Guest Lecture on “Rocket launching” on the occasion of Space week on 28th October, 2016.</a></li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href='https://drive.google.com/uc?id=1dFtV6sMVh31SnuPgnmmGAqRJ-TENdW2G' target='__blank'>UGC Sponsored (Under Autonomous Funds) Three Day National Workshop on “Embedded Systems Design using Arduiuno” from 29th September to 1st October 2016.</a></li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('16-16.9.2016.pdf')}`} target='__blank'>Guest Lecture on “Effect of Vehicle Smoke on Ozone Depletion” by Dr. N. Srinivasa Rao, Lecturer in Physics, D.A.R. College, NUZVID on 16th September, 2016.</a></li>
                </ul>
            </div>
            <div>
                <h1>ACADEMIC YEAR 2015-2016:</h1>
                <ul>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('17-28.2.2016.pdf')}`} target='__blank'>National Science Day Celebrations on 28th February, 2016. Exhibition conducted.</a></li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('18-31.12.2015.pdf')}`} target='__blank'>International year of Light Celebrations on 31st December, 2015.</a></li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('19-21.11.2015.pdf')}`} target='__blank'>Field Trip to Dooradarshan Studio, Vijayawada on 29th December, 2015.</a></li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('19-18.12.2015.pdf')}`} target='__blank'>Guest Lecture on “Physics in Medicine” on 18th December, 2015. Resource Person: Michael Piasecki, Prof. in Physics, Theoretical Physics Department, Institute of Physics J.Długosz University of Czestochowa John Dlucoz University, Poland.</a></li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('21-14&15.12.2015.pdf')}`} target='__blank'>National Energy Conservation Week Celebrations on 14th & 15th December, 2015</a></li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('22-16.09.2015.pdf')}`} target='__blank'>International Day for the Preservation of Ozone Layer on 16th September, 2015. Chief Guest: Prof. K. Hanumantha Rao, Director, IIIT, Nuzvid.</a></li>
                </ul>
            </div>




        </div>
    )
}

export default PhysicsandElectronicesEvents;