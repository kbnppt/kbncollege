import React from 'react'

const MBAEvents = (props) => {

    const [apidata,setApiData] = React.useState(props?.data)

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
                <h3 style={{ textDecoration: 'underline' }}>ACADEMIC YEAR 2021-2022</h3>
                <ul>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href='https://drive.google.com/uc?id=14gOnWyuyLrgBQx8gW5xgpj7E2MzNUtFE' target='__blank'>"Meet the CEO" 23rd March 2022</a> </li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href='https://drive.google.com/uc?id=1ac1Kr6ggeaNXiWIkGN0S_i9V3X2BiVDX' target='__blank'>Guest Lecture on “CURRENT TRENDS IN CAPITAL MARKETS AND IMPORTANCE OF DUE DILIGENCE IN INVESTING” on 09th March 2022.</a> </li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href='https://drive.google.com/uc?id=1WrSi_4YH01sTwV6TgwtSVS35dCBYYYUq' target='__blank'>TRAINING PROGRAMME "FINANCIAL EDUCATION FOR YOUNG CITIZENS" on 7th and 8th March,2022</a> </li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href='https://drive.google.com/uc?id=1j2mcwH8ETKi9MQM2iCjhTGtDkULRda5J' target='__blank'>"BUSINESS ANALYTICS AND RESEARCH METHODOLOGY" on 17th February,2022</a> </li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href='https://drive.google.com/uc?id=1zpTcFQ8POKrynl-7W8AyEFyyINMxybY0' target='__blank'>Three Day Workshop on Digital Marketing on 16th to 18th December,2021</a> </li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href='https://drive.google.com/uc?id=10atloecQMKYieCxTcIbSKqkthJ2mUAiy' target='__blank'>Awareness Programme onDigital Marketing on 06th December, 2021.</a> </li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href='https://drive.google.com/uc?id=10atloecQMKYieCxTcIbSKqkthJ2mUAiy' target='__blank'>INDUSTRIAL STUDY VISIT TO SRI ANANTHA LAKSHMI SPINNING MILLS PVT. LTD, CHILAKALURIPETA,GUNTUR on 14th November,2021</a> </li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href='https://drive.google.com/uc?id=1S-3HQilrFcU2Bri1jO-Phi8H9hFnUrQT' target='__blank'>"MEET THE CEO PROGRAMME " on 24th September,2021.</a> </li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href='https://drive.google.com/uc?id=1mkioCIk9raZYPLXiho9UQSREjVvGoi8y' target='__blank'>VIRTUAL GUEST LECTURE on “Corporate Finance: Concepts & Applications in the Context of Managerial Decision Making” on 17th September,2021</a> </li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href='https://drive.google.com/uc?id=1mOfBNITDbkyBcSwLI0A87bJY5nvNNm4E' target='__blank'>VIRTUAL AWARENESS PROGRAM ON “SAVINGS & INVESTMENT AVENUES” on 26th June,2021.</a> </li>
                </ul>
            </div>
            <div>
                <h3 style={{ textDecoration: 'underline' }}>ACADEMIC YEAR 2020-2021:</h3>
                <ul>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('MBA%20WORKSHOP%20ON%20EMERGING%20TRENDS%20&%20GST-23%20MARCH,%202021.pdf')}`} target='__blank'>WORKSHOP ON "EMERGING TRENDS IN HR & HOW TO BE FUTURE READY” ON 23rd March 2021</a> </li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('2-Guest%20Lecture%20Report%20-%2019-01-2021.pdf')}`} target='__blank'>GUEST LECTURE on “ECONOMIC ISSUES AND CHALLENGES DURING AND AFTER COVID-19”</a> </li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('1-Guest%20Lecture%20Report%20-%2028-12-2020.pdf')}`} target='__blank'>GUEST LECTURE on “BUILDING NEXT GENERATION LEADERSHIPCHALLENGES IN TODAY’S GLOBAL BUSINESS ERA</a> </li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('1-WEBINAR%20ON%2023RD%20JUNE,%202020%20BY%20Dr.%20LALITHA%20RAMA%20KRISHNA.pdf')}`} target='__blank'>ONLINE GUEST LECTURE (WEBINAR) ON ‘STRATEGIC MANAGEMENT’ ON 23rd JUNE, 2020</a> </li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('2-WEBINAR%20ON%2019TH%20JUNE,%202020%20BY%20Dr.%20KRISHNA%20MOHAN.pdf')}`} target='__blank'>WEBINAR ON ‘BEHAVIOUR AND MARKETING RESEARCH’ BY DR. KRISHNA MOHAN ON 19th JUNE, 2020</a> </li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('3-WEBINAR%20(GUEST%20LECTURE)%20BY%20SATISH%20KAMATH%20ON%2015TH%20JUNE,%202020.pdf')}`} target='__blank'>ONLINE LECTURE ON “CHANGING PRIORITIES OF RESIDENTIAL, COMMERCIAL AND INDUSTRIAL MARKETS” BY Mr. SATISH KAMAT ON 15th JUNE, 2020.</a> </li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href='https://drive.google.com/file/d/13cquKFPn0jqqfFYMDrsxOgBU2GErxt9v/view?usp=share_link' target='__blank'>WEBINAR ON “SALES DISTRIBUTION” ON 6th JUNE. 2020</a> </li>

                </ul>
            </div>
            <div>
                <h3 style={{ textDecoration: 'underline' }}>ACADEMIC YEAR 2019-2020:</h3>
                <ul>
                    {/* <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href='/images/kbnnewimg/all/ach/dramatic/mathsevents/MTUSS%20-%202019-%20PHOTOS.pdf' target='__blank'>/images/kbnnewimg/all/ach/dramatic/mbaevents/UGC%20Sponsored%20One-Day%20National%20Webinar%20on%2028TH%20MAY,%202020.pdf</a> </li> */}
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('MEET%20THE%20CEO-22.2.2020.pdf')}`} target='__blank'>MEET THE CEO 22nd February, 2020</a> </li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('MEET%20THE%20CEO-25.1.2020.pdf')}`} target='__blank'>MEET THE CEO 25th January, 2020</a> </li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('1-GUEST%20LECTURE%20ON%2023.1.2020.pdf')}`} target='__blank'>GUEST LECTURE ON 23.1.2020</a> </li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('2-Guest%20Lecture%20on%20%E2%80%9CHR%20&%20Industry%20Expectations%20&%20Communication%20Skills%E2%80%9D%20on%2010th%20January,%202020.pdf')}`} target='__blank'>Guest Lecture on “HR & Industry Expectations & Communication Skills” on 10th January, 2020</a> </li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('3.Visiting%20Professor%20Lecture%20Session%20by%20Prof.%20Lalitha%20Rama%20Krishnan,%20Dean,%20Dept.%20of%20Management%20Studies,%20Pondicherry%20University%20on%206th%20&%207th%20January,%202020.pdf')}`} target='__blank'>Visiting Professor Lecture Session by Prof. Lalitha Rama Krishnan, Dean, Dept. of Management Studies, Pondicherry University on 6th & 7th January, 2020</a> </li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('4-MEET%20THE%20CEO%20PROGRAMME%20ON%2025TH%20NOVEMBER,%202019.pdf')}`} target='__blank'>MEET THE CEO PROGRAMME ON 25TH NOVEMBER, 2019</a> </li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('1-18.11.2019-GUEST%20LECTURE.pdf')}`} target='__blank'>Guest Lecture on “Entrepreneurship Development” on 18thNovember,2019</a> </li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('6-INDUSTRIAL%20VISIT%20TO%20TULASI%20SEEDS%20PVT.%20LTD.,%20GUNTUR%20-%2016.11.2019.pdf')}`} target='__blank'>INDUSTRIAL VISIT TO TULASI SEEDS PVT. LTD., GUNTUR - 16.11.2019</a> </li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('7.Guest%20Lecture%20on%20%E2%80%9CKnow%20Your%20Goals%E2%80%9D%20by%20Prof.%20V.%20Jyothi,%20Former%20Director,%20KBN%20PG%20Centre%20on%202nd%20November,%202019.pdf')}`} target='__blank'>Guest Lecture on “Know Your Goals” by Prof. V. Jyothi, Former Director, KBN PG Centre on 2nd November, 2019</a> </li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('2-31.10.2019-MEET%20THE%20CEO.pdf')}`} target='__blank'>MEET THE CEO on 31stOctober,2019.</a> </li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('VISITING17&18.10.2020.pdf')}`} target='__blank'>VISITING PROFESSOR LECTURE SESSION - 17&18.10.2020</a> </li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('4-15.10.2019-GUEST%20LECTURE.pdf')}`} target='__blank'>Guest Lecture on “HUMAN RIGHTS IN SOCIETY” on 15thOctober,2019.</a> </li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('5-3.10.2019-%20Guest%20lecture.pdf')}`} target='__blank'>Guest Lecture on “SEBI” on 3rdOctober,2019.</a> </li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('6-1.10.2019-COUNSELLING%20SESSION.pdf')}`} target='__blank'>Counselling Session on 1stOctober,2019 by Smt. Kalyani,Psychologist.</a> </li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('7-23-27.9.2019-INDUSTRIAL%20TOUR.pdf')}`} target='__blank'>Industrial Study Tour–2019– 23rd to 27thSeptember,2019(COIMBATORE–KODAICANAL-OOTY.</a> </li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('8-25.9.2019-STEM%20CELLS%20REGISTRATION.pdf')}`} target='__blank'>Stem Cells Donor Registration Awareness Camp on 25thSeptember,2019.</a> </li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('9-21.9.2019-MEE%20THE%20CEO.pdf')}`} target='__blank'>MEET THE CEO on 21stSeptember,2019.</a> </li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('1-14.9.pdf')}`} target='__blank'>PANEL DISCUSSION ON: FINANACIAL RECESSION –IMPACT ON INDIAN ECONOMY ON 14.9.2019</a> </li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('VISITING12&13.9.20219.pdf')}`} target='__blank'>VISITING PROFESSOR LECTURE SESSION - 12&13.9.20219</a> </li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('3-9.9.pdf')}`} target='__blank'>GUEST LECTURE BY Mr.K.V.S.PRAKASH RAO, ON 09-09-2019</a> </li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('4-27.8.pdf')}`} target='__blank'>GUEST LECTURE BY Mr.VG.SRINIVASARAO, ON 27-08-2019</a> </li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('5-27.8.pdf')}`} target='__blank'>GUEST LECTURE by DR. V.JYOTHI, ON 27-08-2019</a> </li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('8-26.8.pdf')}`} target='__blank'>ADVISORY COUNCIL MEMBERS INTERACTION ON 26-08-2019</a> </li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('6-16.8.pdf')}`} target='__blank'>PROF.V.KRISHNA MOHAN’S LECTURE SESSION ON 16.08.19</a> </li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('7-6.8.pdf')}`} target='__blank'>LOCAL VISIT TO SEBI VIJAYAWADA OFFICE 6TH AUGUST 2019</a> </li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('9-1.8.pdf')}`} target='__blank'>PROF.S.TEKI’S LECTURE SESSION ON 01.08.19</a> </li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('10-9.7.pdf')}`} target='__blank'>Dr. KALYANI, PSYCHOLOGIST–COUNSELING SESSION ON 09-07-2019</a> </li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('11-5.7.pdf')}`} target='__blank'>BUDGET REVIEW ON 05.07.19</a> </li>
                </ul>
            </div>
            <div>
                <h3 style={{ textDecoration: 'underline' }}>ACADEMIC YEAR 2018-2019:</h3>
                <ul>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('1-EVENT%201.pdf')}`} target='__blank'>The Department of Commerce & Business Administration of KBN College PG Centre organized MAST-2019 (Management Aptitude and Skills Test), A State Level Management Student Meet on 23rd March 2019.</a> </li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('2-EVENT%202.%20PHOTO.pdf')}`} target='__blank'>Meet the CEO Programme for MBA First year students on 02-02-2019 by Sri A. Gopi Raja, CEO , Fopple drone technologies Pvt Ltd.</a> </li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('3-EVENT%203.pdf')}`} target='__blank'>MEET THE CEO’ programme on 29.12.18, Sri Prasad, CEO of Three Edge Solutions, Chennai.</a> </li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('4-EVENT%204.pdf')}`} target='__blank'>UGC Sponsored One Day Workshop is organized on “Intellectual Property Rights Issues and Challenges” in collaboration with Krishna University on 23rd November, 2018.The Resource persons are Prof.KVSSarma. NALSAR University, Hyderabad, Prof C.S.N.Raju, Emeritus Professor, AcharyaNagarjuna University, Dr.Narasimha Reddy, University of Hyderabad, Dr.P.Veerabrahmachary, Dept of Bio–Technology,Krishna University</a> </li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('5-event%205.pdf')}`} target='__blank'>The department organized MEET THE CEO programme for MBA First year students on 03-11-2018 by inviting Dasri.Rmakrishna garu MD, Efftronics India Ltd. Science is not being properly understood and applied in India.</a> </li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('6-event%206.pdf')}`}>Guest lecture by Prof. R. Sivaram Prasad, HOD, Department of Commerce and Management studies Acharya Nagarjuna Unversity on 26.10.2018 for MBA first year students on Digital Marketing.</a> </li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('7-EVENT%207.pdf')}`} target='__blank'>Industry visit to Bangalore, Mysore, Ooty, and Coimbatore from 24.09.2018 to 30.09.2018 for MBA final students. Visited industries like Karnataka Soaps in Mysore and Benchmark Tea factory in Ooty.</a> </li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('8-EVENT%208.pdf')}`} target='__blank'>Guest lecture by Dr.MS.Chakravarthy Associate Professor,SamaraUniversity, Ethopia on “Business Analytics” (2 sessions) for MBA first year students on, 07th, and 08 th of September, 2018. He explained the concept of business analytics and its importance to the students.</a> </li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('9-EVENT%209.pdf')}`} target='__blank'>Guest lecture on 25-08-18 for MBA students by Sri. Ramakrishna Tadepalli.Project Delivery Executive IBM, India, on “Discover strengths and succeed through your strengths”.</a> </li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('10-event%2010.pdf')}`} target='__blank'>Sri.Rajesh Murthy Founder, Lead institute of Personality Development, Hyderabad, addressing all PG students on Goal setting, Reading memory skills adaptability, Conflict management in a changing world, on 17-07-2018. He delivered on the topic of “The Day your life turns around”.</a> </li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('11-event%2011.pdf')}`} target='__blank'>Guest talk by Sri.V.Balamohandas, Former Vice- Chancellor of Acharya Nagarjuna University, Guntur o 17-07-2018 on “Evolution of Management Education in India”, for MBA Final students </a> </li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('12-EVENT%2012.pdf')}`} target='__blank'>Guest talk by Sri. A. Sudhkar, General Manager, District Industries Centre Government of AP on 13-07-2018 on “How to become an Entrepreneur” for MBA final students.</a> </li>

                </ul>
            </div>


        </div>
    )
}

export default MBAEvents;
