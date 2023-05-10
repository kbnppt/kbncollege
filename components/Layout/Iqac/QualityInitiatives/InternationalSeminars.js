import { Divider } from '@material-ui/core'
import React, { Fragment, useState } from 'react'
import BulletLineLinkCom from '../../../HeadingComponent/BulletLineLinkCom'

const InternationalSeminars = () => {
  const [state,setState] =useState([
    {link:'https://drive.google.com/file/d/1cNp6UqTVj0fR-C1w-Ym0YsL393P0N-RX/view?usp=share_link',textData:'UGC Sponsored International Seminar on “GST Practices – A Cross Country Experience” on 5th & 6th January, 2018'},
    {link:'https://drive.google.com/file/d/1wv90epGc6KdPBGs9mjCv4M7U1Kqtm2cE/view?usp=share_link',textData:'UGC Sponsored International Seminar on Digital India- Information for All (ICDIA – 2016) on 2nd & 3rd December 2016'},
    {link:'https://drive.google.com/file/d/1b7VXmU4iKvJptBCmt9DDy8LmG6hHHuzb/view?usp=share_link',textData:'UGC Sponsored International Seminar on “Corporate Social Responsibility Initiatives for Inclusive and Sustainable Development” on 19th-21st February 2016'},
    {link:'https://drive.google.com/file/d/1-ZNo2nREySqRhWxVuQ7aVO6D2FcszKit/view?usp=share_link',textData:'DST – SERB Sponsored Two Day International Conference on “Genomics & Stem Cells” ICGSC-2015 on 6th & 7th January, 2015'},
    {link:'https://drive.google.com/file/d/15XOBwe6TL7tg4URnqR3bzdAngapp44Ty/view?usp=share_link',textData:'UGC Sponsored Two day International Seminar on “Women Entrepreneurship – A Global Perspective” INSWEG - 2014 on 6th & 7th August 2014'},
  ])
  
  return (
    <div>
      <h2>International Seminars</h2>
      <Divider />
      
      {state.map((ele,i)=>{
        return<Fragment key={i}>
          <BulletLineLinkCom link={ele?.link} textData={ele?.textData} />
        </Fragment>
      })}

    </div>
  )
}

export default InternationalSeminars