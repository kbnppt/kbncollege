import { Divider } from '@material-ui/core'
import React, { Fragment, useState } from 'react'
import BulletLineLinkCom from '../../../HeadingComponent/BulletLineLinkCom'
import {getRequiredImgs} from '../../../Api/index';

const Workshops = () => {

  const [apidata,setApiData] = React.useState([])

    const initialLoad = async() =>{
        let govt_folderId = '1j_H6RpJH8wMe0RfweV6kWrpGaIyGqfa1';
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

  const [state,setState] =useState([
    {link:`https://drive.google.com/uc?id=${getImgData('1-1&2.3.2019.pdf')}`,textData:'Two Day National Workshop on “Mobile Application – Development with Android” (NWMADA-2019) organized by PG Department of Computer Science & Applications on 1st & 2nd March, 2019.'},
    {link:`https://drive.google.com/uc?id=${getImgData('2-1&2.2.2019.pdf')}`,textData:'Science Academies’ Lecture Workshop on “Applications of Quantum Mechanics to Optics” organized by Department of Physics & Electronics on 1st & 2nd February, 2019.'},
    {link:`https://drive.google.com/uc?id=${getImgData('3-21&22.11.2018.pdf')}`,textData:'Science Academies’ Lecture Workshop on “Biodiversity Conservation & Human Welfare” organized by Department of Botany on 21st & 22nd December, 2018.'},
    {link:`https://drive.google.com/uc?id=${getImgData('4-23.11.2018.pdf')}`,textData:'UGC Sponsored Workshop on “Intellectual Property Rights” organized by PG Department of Commerce & Business Administration on 23rd November, 2018.'},
    {link:`https://drive.google.com/uc?id=${getImgData('5-15.11.2018.pdf')}`,textData:'Pre – Event Lecture Series Road Show and Exhibition on “Nano-Science Technology” organized by Department of Chemistry on 15th November, 2018.'},
    {link:`https://drive.google.com/uc?id=${getImgData('6-13.11.2018.pdf')}`,textData:'UGC Sponsored (Under Autonomous Grants) National Workshop on “Benefits & Challenges of Interdisciplinary Research” organized by Internal Quality Assurance Cell on 13th November, 2018.'},
    {link:`https://drive.google.com/uc?id=${getImgData('7-4&5.10.2018.pdf')}`,textData:'Science Academies’ Lecture Workshop on “Fluid Mechanics” organized by Department of Mathematics & Statistics on 4th & 5th October, 2018.'},
    {link:`https://drive.google.com/uc?id=${getImgData('8-24&25.9.2018.pdf')}`,textData:'UGC Sponsored Two Day National Workshop on “Data Analytics using R- Programming” organized by Department of Computer Science & Applications on 24th & 25th September, 2018.'},
    {link:`https://drive.google.com/uc?id=${getImgData('9-27.8.2018.pdf')}`,textData:'Three Day Workshop on “R – Programming” organized by Department of Mathematics & Statistics from 27th – 29th August, 2018.'},
    {link:`https://drive.google.com/uc?id=${getImgData('10-21.8.2018.pdf')}`,textData:'UGC Sponsored One Day National Workshop on “ESL Classrooms: Meeting Curricular and Corporate Goals” on 21st August, 2018.'},
    {link:`https://drive.google.com/uc?id=${getImgData('11-30.06.2018.pdf')}`,textData:'UGC Sponsored One Day National Workshop on “Self Realisation for Blissful Life & Harmonious Relationships” organized by Value Education Cell on 30th June, 2018.'},
    {link:`https://drive.google.com/uc?id=${getImgData('12-25.6.2018.pdf')}`,textData:'ASTHAVADHANAM Programme on 25th June, 2018 organized by Department of Telugu.'},
    {link:`https://drive.google.com/uc?id=${getImgData('1-25.11.2017.pdf')}`,textData:'UGC Sponsored (Under Autonomous Grants) One Day Workshop on “English Accent Training: A Trainer Training Programme” on 25th November, 2017 organized by Department of English.'},
    {link:`https://drive.google.com/uc?id=${getImgData('2-28&29.7.2017.pdf')}`,textData:'UGC Sponsored Two Day National Workshop on “Logistics & Supply Chain Management” on 28th & 29th July, 2017 organized by Department of Commerce & Management.'},
    {link:`https://drive.google.com/uc?id=${getImgData('3-15&16.12.2016.pdf')}`,textData:'Two Day National Workshop on “Instrumental Methods of Chemical Analysis” (IMCA- 2016) – A Skill development Initiative for Students on 15th & 16th December, 2016 organized by Department of Chemistry (PG & UG).'},
    {link:`https://drive.google.com/uc?id=${getImgData('4-29-1.10.2016.pdf')}`,textData:'A National Workshop on “Embedded Systems Design using Arduino” from 29th September – 1st October, 2016 organized by Department of Physics & Electronics'},
    {link:`https://drive.google.com/uc?id=${getImgData('5-26&27.10.2016.pdf')}`,textData:'A National Workshop on “Image Processing Using R Programming on 26th & 27th October, 2016 organized by Departments of M.Sc (CS) & MCA.'},
    {link:`https://drive.google.com/uc?id=${getImgData('6-22.10.2016%20(2).pdf')}`,textData:'One Day National Workshop on “Research and Innovations: Issues and Challenges” (NWRIIC – 2016) on 22nd October, 2016 organized by Internal Quality Assurance Cell.'},
    {link:`https://drive.google.com/uc?id=${getImgData('7-6.8.2016.pdf')}`,textData:'One Day Regional Workshop on “New Curriculum for General English and Communication & Soft Skills (In association with KRU) on 6th August, 2016 organized by Department of English.'},
    {link:`https://drive.google.com/uc?id=${getImgData('8-11&12.7.2016.pdf')}`,textData:'Two Day Workshop on CCNA (Routing & Switching) on 11th-12th July 2016 organized by Department of Computers.'},
    {link:`https://drive.google.com/uc?id=${getImgData('9-21&22.8.2015.pdf')}`,textData:'National Workshop on Intelligent Robotics on 21st & 22nd August, 2015 organized by Departments of Computer Science & Electronics.'},
    {link:`https://drive.google.com/uc?id=${getImgData('10%20-%2024&25.7.2015.pdf')}`,textData:'National Workshop on Human Values & Professional Ethics-Essential for Individual Society on 24th 25th July, 2015 organized by Value Education Cell & Department of Telugu.'},
    {link:`https://drive.google.com/uc?id=${getImgData('11-19&20.02.2015.pdf')}`,textData:'UGC Sponsored Two-Day National Workshop on “Recent Trends in Algebra and its Applications” on 19th & 20th February, 2015 organized by Department of Mathematics.'},
    {link:`https://drive.google.com/uc?id=${getImgData('12-5&6.9.2014.pdf')}`,textData:'Two Day National Workshop on “Android App Development” on 5th & 6th September, 2014 organized by Department of Computers.'},
    {link:`https://drive.google.com/uc?id=${getImgData('13-20.01.2014.pdf')}`,textData:'One day Workshop on “Content Writing in Telugu Wikipedia” on 16th December, 2013 & 20th January, 2014 organized by Department of Computer Science & Applications.'},
    {link:`https://drive.google.com/uc?id=${getImgData('14-30.11.2013.pdf')}`,textData:'A State Level Workshop on “Chemistry and Career Prospects” organized by Department of Chemistry on 30th November, 2013.'},
    {link:`https://drive.google.com/uc?id=${getImgData('15-27.11.13.pdf')}`,textData:'One Day National Workshop on “Data Ware Housing & Data Mining” organized by Department of Computer Science on 27th November, 2013.'},
    {link:`https://drive.google.com/uc?id=${getImgData('17-11.11.13.pdf')}`,textData:'One Day National Workshop on Interactive teaching and Professional Development in English language for teachers on 11th November, 2013 organized by Department of English.'},
    {link:`https://drive.google.com/uc?id=${getImgData('19-21.2.13.pdf')}`,textData:'Five Day Sensitivity Awareness Motivation Workshop on “Capacity Building of Women Managers in Higher Education” from 21st – 25th February, 2013 organized by Department of Commerce & Management.'},
  ])

  return (
    <div>
      <h2>Workshops</h2>
      <Divider />
      
      {apidata?.length > 0 && state.map((ele,i)=>{
        return<Fragment key={i}>
          <BulletLineLinkCom link={ele?.link} textData={ele?.textData} />
        </Fragment>
      })}
    </div>
  )
}

export default Workshops