import React from 'react'
import {getRequiredImgs} from '../../../../../Api/index'

const TelEvents = () => {

    const [apidata,setApiData] = React.useState([])

    const initialLoad = async() =>{
        let govt_folderId = '11Q9j2gngzsDAJuic7v3MEnuxngowGDMi';
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
            <h1>ACADEMIC YEAR 2020-2021:</h1>
            <ul>
                <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('PHOTOS%20&%20REPORT.pdf')}`} target='__blank'>Guest Lecture on “తెలుగు భాషా అభ్యున్నతి” (అంతర్జాతీయ మాతృ భాషాదినోత్సవాన్ని పురస్కరించుకొని) on 20th February, 2021. ముఖ్య అతిధి: డా. గుమ్మా సాంబశివ రావు, విశ్రాంత ఆంధ్ర ఉపన్యాసకులు, ఆంద్ర లయోలా కళాశాల, విజయవాడ.</a></li>
            </ul>
            <h1>ACADEMIC YEAR 2019-2020</h1>
            <ul>
                <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('1-GUEST%20LECTURE%20ON%2020TH%20FEBRUARY,%202020.pdf')}`} target='__blank'>ప్రపంచ మాతృ భాషాదినోత్సవాన్ని పురస్కరించుకొని “తెలుగు భాషా పరిరక్షణలో జానపద సాహిత్యము” అను అంశంపై సదస్సు on 20th ఫిబ్రవరి, 2020.</a> </li>
                <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('2-ALUMNI%20GUEST%20LECTURE%20-%2017.2.2020.pdf')}`} target='__blank'>Alumni Guest Lecture on “మానవాభ్యున్నతికి మాతృభాష - ఆవశ్యకత” on 17th ఫిబ్రవరి, 2020.</a> </li>
                <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('PRAVACHANAM%20BY%20Dr.%20G.%20NARASIMHA%20RAO%20-%2017&18.10.2019.pdf')}`} target='__blank'>PRAVACHANAM BY Dr. G. NARASIMHA RAO On 17th&18th October 2019</a> </li>
                <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('1-MATHRU%20BASHA%20DINOSTHAVAM%20PHOTOS-28.8.pdf')}`} target='__blank'>Matru Basha Dinosthavam on 28th August, 2019</a> </li>
                <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('2-SCIENCE%20EXPO-2019.pdf')}`} target='__blank'>Science Expo – Dept. of Telugu from 21st to 23rdAugust,2019.</a> </li>
                <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('3-CAREER%20ORIENTATION%20PROGRAMME.pdf')}`} target='__blank'>Career Orientation Programme on 26th, 27th & 28thJune,2019.</a> </li>
            </ul>
            <h1>ACADEMIC YEAR 2018-2019</h1>
            <ul>
                <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('Matrubashadinosthavam19feb2019.pdf')}`} target='__blank'>గిడుగు రామమూర్తి పంతులు జయంతి ఉత్సవం Seminar on“తెలుగు భాషా విశిష్టత” on 29th Aust, 20</a> </li>
                <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('GUEST%20LECTURE%2019.2.2019.pdf')}`} target='__blank'>Guest Lecture on “మన భాష - మన శ్వాస” (In view of International Mother Language Day) on 19th February, 2019.</a> </li>
                <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('Matrubashadinosthavam19feb2019.pdf')}`} target='__blank'>గిడుగు రామమూర్తి పంతులు జయంతి ఉత్సవం Seminar on“తెలుగు భాషా విశిష్టత” on 29th August, 2018.</a> </li>
                <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('Asthavadhanam%20-%2025.6.2018.pdf')}`} target='__blank'>Ashtavadhanam on 25th June, 2018.
                </a> </li>
            </ul>
            <h1>ACADEMIC YEAR 2017-2018</h1>
            <ul>
                <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('7-16.12.2017.pdf')}`} target='__blank'>UGC Sponsored One Day National Seminar on “Aadhunika Telugu Sahityamulo Vachana Kavitvam Samajika Vikasam” on 16.12.2017</a> </li>
                <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('6-9.8.2017.pdf')}`} target='__blank'>Guest Lecture on “Bharatha desa Ounnathayam - Visleshana” on 09.08.2017 by Sriman. Vishwanadha Garu, Akhanda Bharath Munch, State Convenor, Chhattisgarh
                </a> </li>
            </ul>
            <h1>ACADEMIC YEAR 2016-2017</h1>
            <ul>
                <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('5-21.2.2017.pdf')}`} target='__blank'>Guest Lecture on "Telugu Sahityamlo Prakriya Vybhavam” on the occasion of World Mother Language Day on 21-02-2017 by Sri Valiveti Venkata Siva Rama Krishna Murthy, Sanskrit & Telugu Lecturer, Vijayawada.</a> </li>
            </ul>
            <h1>ACADEMIC YEAR 2014-2015</h1>
            <ul>
                <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('4-23.8.2014.pdf')}`} target='__blank'>On the occasion of Telugu Basha Dinosthavam & Rao Bahadur Gidugu Rama Murthy Panthulu gari jayanthi “Telugu Basha Parirakshana – Yuvatha Patra” on 23-08-2014 by Dr. P. Syamala Nanda Prasad, (Avadana Sekhara, Kaasi Kavi), Principal, SAS Jr. College, Vijayawada</a> </li>
                <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('5-21.2.2017.pdf')}`} target='__blank'> Guest Lecture on "Guru Prasasthyamu” On the occasion of Vyasa Poornima (Guru Poornima) on 12-07-2014 by Brahmasri Ch.Narasimha Deekshitha Sarma, Madhura Kavi, Kavikula Samrat, Jyothisha-Aagama Vidwamsulu, Achammpeta.
                </a> </li>
            </ul>
            <h1>ACADEMIC YEAR 2013-2014</h1>
            <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('2-21.9.2013.pdf')}`} target='__blank'>Guest Lecture on 'Gurajada-Bhavachaitanyam” On the occasion of Mahakavi Gurajada Jayanthi on 21-09-2013 by Dr.Ramasuri, Retd.HOD of Telugu, MR College, Vijayanagaram</a> </li><li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('1-17.8.2013.pdf')}`} target='__blank'>Faculty development programme on “Human Values” on 17.08.2013 by Sri Malla Pragada Srimanarayana Murthy, Arsha Vidya Panditha</a> </li>

        </div>


    )
}

export default TelEvents