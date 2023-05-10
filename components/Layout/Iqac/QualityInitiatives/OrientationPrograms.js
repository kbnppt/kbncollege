import { Divider } from '@material-ui/core'
import React, { Fragment, useState } from 'react'
import BulletLineLinkCom from '../../../HeadingComponent/BulletLineLinkCom';
import {getRequiredImgs} from '../../../Api/index'

const OrientationPrograms = () => {

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

  const [state,setState] =useState([
    {link:`https://drive.google.com/uc?id=${getImgData('DEEKSHARAMBH%20-%20STUDENT%20INDUCTION%20PROGRAMME-7-9-2.pdf')}`,textData:"A Student Induction Programme 'DEEKSHARAMBH' Organized by: Internal Quality Assurance Cell on 7th January, 2022"},
    {link:`https://drive.google.com/uc?id=${getImgData('ORIE.PROGRM-PHOTOS%20&%20REPORT.pdf')}`,textData:"One-Day Faculty Orientation Programme'ABOUT TEACHING METHODOLOGIES' Organized by: Internal Quality Assurance Cell on 3rd December, 2021"},
    {link:`https://drive.google.com/uc?id=${getImgData('SHARE%202020%20ACADEMIC%20VIEW.pdf')}`,textData:"Teacher Orientation & Training Programme on 'Share 2020 Academic View' By Using G-Suit on 8th July, 2020"},
    {link:`https://drive.google.com/uc?id=${getImgData('CAPACITY%20BUILDING%20CLASSES%20-%201.6.2020-13.6.2020-REPORT.pdf')}`,textData:"Capacity Building Classes for All UG & PG Students from 1st June to 13th June, 2020"},
    {link:`https://drive.google.com/uc?id=${getImgData('OBE%20PRGM%20PHOTOS-2.3.2020.pdf')}`,textData:"GUIDELINES FOR FILLING UP FORMAT-III & Outcome Based Education on 2nd March, 2020"},
    {link:`https://drive.google.com/uc?id=${getImgData('TOT%20PROGRAMME%20ON%20PEDAGOGY%20TOOLS-17.12.2019.pdf')}`,textData:"Teacher Orientation Programme on Pedagogy Tools organized by IQAC on 17th December, 2019"},
    {link:`https://drive.google.com/uc?id=${getImgData('THREE-DAY-INDUCTION%20MEET-3-5.7.2019.pdf')}`,textData:'Student Induction Programme from 3rd to 5th July, 2019.'},
    {link:`https://drive.google.com/uc?id=${getImgData('STUDENTS%20ORIENTATION%20PROGRAMME.pdf')}`,textData:'STUDENTS ORIENTATION PROGRAMME ORGANIZED BY WARD COUNSELLING COMMITTEE 16TH JULY, 2018'},
    {link:`https://drive.google.com/uc?id=${getImgData('1-5.3.2018.pdf')}`,textData:'Orientation Programme on Solid Waste Management” on 5th March, 2018.'},
    {link:`https://drive.google.com/uc?id=${getImgData('2-25.1.2018.pdf')}`,textData:'Celebrations of Voter’s Day on 25th January, 2018.'},
    {link:`https://drive.google.com/uc?id=${getImgData('3-2.12.2017.pdf')}`,textData:'National Pollution Prevention Day on 2nd December, 2017.'},
    {link:`https://drive.google.com/uc?id=${getImgData('4-1-12.2017.pdf')}`,textData:'World Aids Day on 1st December, 2017.'},
    {link:`https://drive.google.com/uc?id=${getImgData('5-16.9.2017%20(Autosaved%20final).pdf')}`,textData:'Awareness Programme on Preservation of Ozone Layer on 16th September, 2016.'},
    {link:`https://drive.google.com/uc?id=${getImgData('6-30.8.2017.pdf')}`,textData:'Disaster Management Training Programme from 30th August to1st September, 2017.'},
    {link:`https://drive.google.com/uc?id=${getImgData('7-11&12.08.17.pdf')}`,textData:'Awareness Programme on “Save the Rivers” on 11th & 12th August, 2017.'},
    {link:`https://drive.google.com/uc?id=${getImgData('8-29.12.2016.pdf')}`,textData:'Motivational Talk on “Be the Change” on 29th December, 2016.'},
    {link:`https://drive.google.com/uc?id=${getImgData('9-27.12.2016.pdf')}`,textData:'Awareness Programme on Demonetization on 27th December, 2016.'},
    {link:`https://drive.google.com/uc?id=${getImgData('10-8.12.16.pdf')}`,textData:'Awareness Programme on Legal Requirements for Discharging Accounting Policies on 8th December, 2016.'},
    {link:`https://drive.google.com/uc?id=${getImgData('11-31.10.2016.pdf')}`,textData:'Celebrations of National Integration Day (In view of Sardhar Vallabhai Patel Birth Anniversary) on 31st October, 2016.'},
    {link:`https://drive.google.com/uc?id=${getImgData('12-2.10.2016.pdf')}`,textData:'Sadhbhavana Yatra Rally on 2nd October, 2016.'},
    {link:`https://drive.google.com/uc?id=${getImgData('13-27.07.16.pdf')}`,textData:'Programme on Right to Information Act on 27th July, 2016.'},
    {link:`https://drive.google.com/uc?id=${getImgData('14-8.7.2016.pdf')}`,textData:'Orientation Programme on “Research Paper Publications & Consultancy Services’ on 8th July, 2016.'},
    {link:`https://drive.google.com/uc?id=${getImgData('15-15.3.2016.pdf')}`,textData:'Programme on Meet the Executive on 15th March, 2016.'},
    {link:`https://drive.google.com/uc?id=${getImgData('16-5.12.2015.pdf')}`,textData:'World Soil Day Celebrations on 5th December, 2015.'},
    {link:`https://drive.google.com/uc?id=${getImgData('17-25.11.2015.pdf')}`,textData:'Programme on “Technology Revolution in State Bank of India” on 25th November, 2015.'},
    {link:`https://drive.google.com/uc?id=${getImgData('18-1&211.2015.pdf')}`,textData:'Swachh Bharath Programme on 1st & 2nd November, 2015.'},
    {link:`https://drive.google.com/uc?id=${getImgData('19-31.10.2015.pdf')}`,textData:'Programme on Necessity of Teacher Guide in Personality Development on 31st October, 2015.'},
    {link:`https://drive.google.com/uc?id=${getImgData('20-28.10.2015.pdf')}`,textData:'Awareness Programme on Dengue Preventive Medicine distribution on 28th October, 2015.'},
    {link:`https://drive.google.com/uc?id=${getImgData('21-8.3.2015.pdf')}`,textData:'International Women’s Day Celebrations on 8th March, 2015.'},
    {link:`https://drive.google.com/uc?id=${getImgData('22-28.2.2015.pdf')}`,textData:'National Science Day Celebration on 28th February, 2015.'},
    {link:`https://drive.google.com/uc?id=${getImgData('23-23.7.2014.pdf')}`,textData:'Right to Information Act meeting on 23rd July, 2014.'},
    {link:`https://drive.google.com/uc?id=${getImgData('24-21-26.1.2014.pdf')}`,textData:'Road Safety Week Celebrations (21st – 26th January, 2014).'},
    {link:`https://drive.google.com/uc?id=${getImgData('25-8.9.2013.pdf')}`,textData:'International Literacy Day Celebrations on 8th September, 2013.'},
    {link:`https://drive.google.com/uc?id=${getImgData('26-21.7.2012.pdf')}`,textData:'Awareness Programme on Water Conservation & Management on 21st July, 2012.'},
    {link:`https://drive.google.com/uc?id=${getImgData('27-29.12.2012.pdf')}`,textData:'Programme on Career Guidance on 28th June, 2012.'},
  ])
  return (
    <div>
      <h2>Orientation Programs</h2>
      <Divider />
      
      {apidata?.length > 0 && state.map((ele,i)=>{
        return<Fragment key={i}>
          <BulletLineLinkCom link={ele?.link} textData={ele?.textData} />
        </Fragment>
      })}
    </div>
  )
}

export default OrientationPrograms