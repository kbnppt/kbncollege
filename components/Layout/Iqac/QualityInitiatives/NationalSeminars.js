import { Divider } from '@material-ui/core'
import React, { Fragment, useState } from 'react'
import BulletLineLinkCom from '../../../HeadingComponent/BulletLineLinkCom'
import {getRequiredImgs} from '../../../Api/index'

const NationalSeminars = () => {
  const [apidata,setApiData] = React.useState([])

  const initialLoad = async() =>{
      let govt_folderId = '143xU71U5dpOaKiEntJeh24WR-yM7BfcU';
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
    {link:`https://drive.google.com/uc?id=${getImgData('NAAC%20SPONOSRED%20CONFERENCE%20REPORT%20NAAC%20OFFICE%20(2).pdf')}`,textData:'NAAC Sponsored two day National Seminar on Impact of Best Practices in Quality Enhancement in Higher Education Institutions 4th & 5th December, 2020.'},
    {link:`https://drive.google.com/uc?id=${getImgData('1-18&19.3.2019.pdf')}`,textData:'ICSSR – SRC Sponsored Two Day National Seminar on “Modern Methods & Effectiveness of Tribal Programmes – Suggest Necessary Measures in the Light of Findings” on 18th & 19th March, 2019.'},
    {link:`https://drive.google.com/uc?id=${getImgData('2-28&29.11.2018.pdf')}`,textData:'UGC Sponsored National Seminar on “Cyber Security” on 28th& 29th November, 2018.'},
    {link:`https://drive.google.com/uc?id=${getImgData('3-28&29.9.2018.pdf')}`,textData:'UGC Sponsored National Symposium on “Emerging Trends in Organic Chemistry” on 28th & 29th September, 2018.'},
    {link:`https://drive.google.com/uc?id=${getImgData('1-16.12.2017.pdf')}`,textData:'UGC Sponsored National Seminar on “ఆధునిక తెలుగు సాహిత్యంలో వచన కవిత్వం – సామాజిక వికాసం” on 16th December, 2017'},
    {link:`https://drive.google.com/uc?id=${getImgData('2-13&%2014.12.2017.pdf')}`,textData:'UGC Sponsored Two Day National Seminar on “The Role of Chemist for Sustainable Environment” on 13th & 14th December, 2017'},
    {link:`https://drive.google.com/uc?id=${getImgData('4-23.9.2017.pdf')}`,textData:'UGC Sponsored One Day Seminar on “GST: A New Dawn to Tax Regime” on 23rd September, 2017.'},
    {link:`https://drive.google.com/uc?id=${getImgData('5-23.9.2017(2).pdf')}`,textData:'UGC Sponsored One Day National Seminar on “Rajbasha Hindi: Anuvad ki Samasyaen” on 23rd September, 2017.'},
    {link:`https://drive.google.com/uc?id=${getImgData('6-21&22.7.2017.pdf')}`,textData:'UGC Sponsored National Seminar on “Women Empowerment: Media, Cinema & Theatre – Prospects & Challenges” on 21st & 22nd July, 2017.'},
    {link:`https://drive.google.com/uc?id=${getImgData('7-30.6.2017.pdf')}`,textData:'UGC Sponsored (Under Autonomous Funds) One Day National Seminar on “Humanism – Essential for Ideal Society & Blissful Life” (NSHUM – 2017) on 30th June, 2017.'},
    {link:`https://drive.google.com/uc?id=${getImgData('8-27.3.2017.pdf')}`,textData:'National Seminar on The Science Behind Ageing: Can Science Modulate the Process on 27th March, 2017.'},
    {link:`https://drive.google.com/uc?id=${getImgData('9-25&26.11.16.pdf')}`,textData:'UGC Sponsored (Under Autonomous Grants) National Seminar on E- Tailing : Trends, Challenges & Opportunities on 25th & 26th November, 2016.'},
    {link:`https://drive.google.com/uc?id=${getImgData('10-28.11.2015.pdf')}`,textData:'UGC Sponsored One Day National Conference on Advances in Mathematical Science on 28th November, 2015.'},
    {link:`https://drive.google.com/uc?id=${getImgData('11-22&23.11.2015.pdf')}`,textData:'Two Day National Seminar on Samakaleen Sahitya Ki Vaichariki on 22nd & 23rd November, 2015.'},
    {link:`https://drive.google.com/uc?id=${getImgData('12-18&19.9.2015.pdf')}`,textData:'UGC Sponsored Two Day National Seminar on Advances in Chemical Science on 18th & 19th September, 2015.'},
    {link:`https://drive.google.com/uc?id=${getImgData('13-12&13.03.2015.pdf')}`,textData:'UGC Sponsored Two-Day National Seminar on “Importance of Sports to improve the quality of Education NSISQE-2015 on 12th & 13th March, 2015.'},
    {link:`https://drive.google.com/uc?id=${getImgData('14-12&%2013th%20Dec-Computers.pdf')}`,textData:'UGC Sponsored Twoday National Seminar on “Ethical Hacking- An inevitable Tool for a secured Organization” NSEH-2014 on 12th & 13th December, 2014'},
    {link:`https://drive.google.com/uc?id=${getImgData('15-22.11.2014.pdf')}`,textData:'Oneday National Seminar on Hindi ‘Mahaveer Prasad Dwivedi : Vyaktitva Evam Sahitya’ on 22nd November, 2014.'},
    {link:`https://drive.google.com/uc?id=${getImgData('16-15&16.10.2014%20F.pdf')}`,textData:'UGC Sponsored Two- Day National Seminar on Development of Advanced Materials in Physics & Electronics and their applications – NSDAMPE-2014 on 15th & 16th October, 2014.'},
    {link:`https://drive.google.com/uc?id=${getImgData('17-21.7.2014%20f.pdf')}`,textData:'One Day National Seminar on “Enhancement and Sustenance of Quality among Students & Teachers: Role of Support Services” NSESQ- 2014 on 21st July, 2014.'},
    {link:`https://drive.google.com/uc?id=${getImgData('18-14%20&%2015.122012.pdf')}`,textData:'UGC Sponsored Twoday National Seminar on “Significance of Green Strategies for Environment Protection” on 14th & 15th December, 2012.'},
    {link:`https://drive.google.com/uc?id=${getImgData('19-29.11.12.pdf')}`,textData:'UGC Sponsored Twoday National Seminar on “Climate Change a Challenge to Sustainable Development on 29th November, 2012.'},
  ])
  return (
    <div>
      <h2>National Seminars</h2>
      <Divider />
      
      {apidata.length > 0 && state.map((ele,i)=>{
        return<Fragment key={i}>
          <BulletLineLinkCom link={ele?.link} textData={ele?.textData} />
        </Fragment>
      })}

    </div>
  )
}

export default NationalSeminars