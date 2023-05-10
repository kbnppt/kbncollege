import React from 'react'
import {getRequiredImgs} from '../../../../../Api/index'

const EngEvents = () => {

    const [apidata,setApiData] = React.useState([])

    const initialLoad = async() =>{
        let govt_folderId = '1OT1owd9RPNYAegQu7YqNbH_upQKR67f_';
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
                <h2 style={{ textDecoration: 'underline' }}>2021-2022:</h2>
                <ul>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href='https://drive.google.com/uc?id=1isP4YeHHZLHlRB_C_v1qzeXW9BrY7NDm' target='__blank'>Guest Lecture on "Enhancing Coversational Skills" On 16th December,2021</a> </li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href='https://drive.google.com/uc?id=1isP4YeHHZLHlRB_C_v1qzeXW9BrY7NDm' target='__blank'>Guest Lecture on "Strategies to Improve Reading and Speaking Competence " On 31st August,2022</a> </li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href='https://drive.google.com/uc?id=1isP4YeHHZLHlRB_C_v1qzeXW9BrY7NDm' target='__blank'>Online Guest Lecture on "Conceptualizing effective Strategies for Speaking Effficiency" On 10th July,2022</a> </li>

                </ul>
            </div>
            <div>
                <h2 style={{ textDecoration: 'underline' }}>2020-2021:</h2>
                <ul>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href='https://drive.google.com/uc?id=1twTAoTJ4UIfUysjQi5_7oK-_Guxw2QPJ' target='__blank'>Three Day workshop on "Connect with Work (Communication & Employability Skills Training Program) " On 5th to 7th April,2021</a> </li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('ENGLISH%20GUEST%20LECTURE-22.2.2021.pdf')}`} target='__blank'>Guest Lecture (Virtual) on ‘Communication Skills: The Need of the Hour in the Present Job Market On 22-02-2021</a> </li>

                </ul>
            </div>
            <div>
                <h2 style={{ textDecoration: 'underline' }}>2019-2020:</h2>
                <ul>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('GUEST%20LECTURE%20ON%201.2.2020.pdf')}`} target='__blank'>Alumni Guest Lecture on “Technical English for Professional Aspirants” 1st February, 2020 Organized by: Department of English</a> </li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('1-WORKSHOP%20ON%2014.9.2019.pdf')}`} target='__blank'>UGC Sponsored (Under Autonomous Funds) One Day National Workshop on “Building Communicative Competence in English Language” on 14 th September, 2019.</a> </li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('2-SCIENCE%20EXPO%20-%202019.pdf')}`} target='__blank'>Science Expo – 2019 from 21st to 23rd August,2019.</a> </li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('3-GUEST%20LECTURE%20ON%2015.7.2019.pdf')}`} target='__blank'>Guest Lecture on “Presentation Skills” on 15thJuly,2019.</a> </li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('ENGLISH%20CAREER%20ORIENETATION%20PROGRAMME-21.6.19-1.7.19.pdf')}`} target='__blank'>Career Orientation Programme
                    </a> </li>

                </ul>
            </div>
            <div>
                <h2 style={{ textDecoration: 'underline' }}>2018-2019:</h2>
                <ul>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('1-14.9.2019.pdf')}`} target='__blank'>UGC Sponsored (Under Autonomous Grants) One Day National Workshop on “Building Communicative Competence in English Language” In Collaboration with KrishnaUniversity, Machilipatnam On 14th September, 2019 Organized by Department of English.</a> </li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('2-15.7.2019.pdf')}`} target='__blank'>Guest Lecture on “Presentation Skills” Organized by Department of English on 15th July, 2019</a> </li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('1-AWARENESS%20PRGM.pdf')}`} target='__blank'>COMMUNITY AWARENESS PROGRAMME ON " IMPOTANCE OF ENGLISH" ON 17/04/2019</a> </li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href='https://drive.google.com/uc?id=1oxiAihPN63_hLC6UKW0H4IxwEwfV44AD' target='__blank'>UGC Sponsored (Under Autonomous Grants) One Day National Workshop on ““ESL CLASSROOMS: MEETING CURRICULAR AND CORPORATE GOALS”Organized by: Department of English 21st August, 2018
                    </a> </li>
                </ul>
            </div>
            <div>
                <h2 style={{ textDecoration: 'underline' }}>2017-2018:</h2>
                <ul>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('1-6.1.2018.pdf')}`} target='__blank'>Guest Lecture on “Inter Cultural contexts with reference to Ngugi Wa Thiango” by Dr. Kennedy Ondiba Ong’aro on 6th January, 2018.</a> </li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href='https://drive.google.com/uc?id=1kisBDaCF7CNgEkfJCiHW-49ZOWWhJjLs' target='__blank'>UGC Sponsored (Under Autonomous Grants) One Day National Workshop on “English Accent Training: A Trainer Training Programme” in collaboration with Krishna University, Machilipatnam on 25th November, 2017.</a> </li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('3-6.8.17.pdf')}`} target='__blank'>Guest Lecture on “Communicative English” on 6th August, 2017.
                    </a> </li>

                </ul>
            </div>
            <div>
                <h2 style={{ textDecoration: 'underline' }}>2016-2017:</h2>
                <ul>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('4-8.2.2017.pdf')}`} target='__blank'>Guest Lecture on “How to face Interview in Multi-National Companies” by Mary Casas Knapp, Senior Career Consultant, School of Business, University of Mayami, Florida, USA. On 8th February, 2017.</a> </li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('5-30.01.2017.pdf')}`} target='__blank'>Guest lecture “Remembering Shakespeare” In commemoration of 400th Death Anniversary of Literary Genius, William Shakespeare. By Prof. T. Viswanadha Rao, Retired Prof. of English, Andhra University PG Centre, Kakinada, East Godavari Dist., A.P. on 30th January, 2017.</a> </li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href='https://drive.google.com/uc?id=1UjWmfyqFQucpLUZbcHMTbKaM-Ifvxqms' target='__blank'>A One Day Regional Awareness Workshop on “New Curriculum for General English and Communication & Soft Skills” was organised in collaboration with the Department of English, Krishna University, Machilipatnam on 6th August, 2016. Funded by Orient Black Swan Pvt. Ltd., Hyderabad.

                    </a> </li>

                </ul>
            </div>
            <div>
                <h2 style={{ textDecoration: 'underline' }}>2015-2016:</h2>
                <ul>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('7-23.12.2015.pdf')}`} target='__blank'>Guest lecture on “Role of Effective Communication in the Competitive World” By Dr. M. Syam Sundar, Dept. of English, PVP Siddhartha Institute of Technology, Kanuru, Vijayawada. On 23rd of December, 2015.
                    </a> </li>
                </ul>
            </div>
            <div>
                <h2 style={{ textDecoration: 'underline' }}>2013-2014:</h2>
                <ul>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href='https://drive.google.com/uc?id=1Z3RZmTcA_5FaaiFbHwEA-1CvMVjW8Pta' target='__blank'>One Day National Workshop on “Interactive Teaching and Professional Development in English Language Teachers” Organized by Department of English on 11th November, 2013.</a> </li>
                </ul>
            </div>
        </div>
    )
}

export default EngEvents