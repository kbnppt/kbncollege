import { Divider } from '@material-ui/core'
import React, { Fragment, useState } from 'react'
import BulletLineLinkCom from '../../../HeadingComponent/BulletLineLinkCom'

const ParentsMeet = () => {
  const [state,setState] =useState([
    {link:'https://drive.google.com/file/d/1jo-MYdUbZIaMRZyzktdBA7o1jrtNDsgq/view?usp=share_link',textData:'Academic Year: 2019-20 – 10th to 13th July, 2019'},
    {link:'https://drive.google.com/file/d/11EwIkfkutardukmKB-PLdWqwa6DquHqS/view?usp=sharing',textData:'Academic Year: 2018-19 – 30th August 2018'},
    {link:'https://drive.google.com/file/d/1u2pbmoDdlKROYuiNk84TkHra1m6xQegt/view?usp=share_link',textData:'Academic Year: 2017-18 – 17th July, 2017'},
    {link:'https://drive.google.com/file/d/1iSv0CvgeqCIObA3kTRun4EXdsRWJb5l3/view?usp=share_link',textData:'Academic Year: 2016-17 – 19th September, 2016'},
    {link:'https://drive.google.com/file/d/1gdxnqrOTwxJJHnpFkkPbS0EnQP358_A9/view?usp=share_link',textData:'Academic Year: 2015-16 – 14th September, 2015'},
    {link:'https://drive.google.com/file/d/1_efFim13GEnjUQ22JJn7lI4ML1ZCAzBZ/view?usp=share_link',textData:'Academic Year: 2014-15 – 19th September, 2014'},
  ])
  
  return (
    <div>
      <h2>Parents Meet</h2>
      <Divider />

      {state.map((ele,i)=>{
        return<Fragment key={i}>
          <BulletLineLinkCom link={ele?.link} textData={ele?.textData} />
        </Fragment>
      })}
    </div>
  )
}

export default ParentsMeet