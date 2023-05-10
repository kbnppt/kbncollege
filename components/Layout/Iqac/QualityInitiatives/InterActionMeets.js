import { Divider } from '@material-ui/core'
import React, { Fragment, useState } from 'react'
import BulletLineLinkCom from '../../../HeadingComponent/BulletLineLinkCom'

const InterActionMeets = () => {
  const [state,setState] =useState([
    {link:'https://drive.google.com/file/d/11DxDNV4DomoGPnLR5JiODqr9Y_ERR590/view?usp=share_link',textData:'Interaction meet with Sri M. KRISHNA TEJA, IAS, on 27.9.2018.'},
    {link:'https://drive.google.com/file/d/1vl34hLeM-CvCauOyO-q5EinCYj0f1Sd7/view?usp=share_link',textData:'Interaction meet with Sri.V.V.Lakshmi Narayana,I.P.S., on 24th June, 2017.'},
    {link:'https://drive.google.com/file/d/1SBF_iiVlsM1lrliYelgKmI4p3mOVQRDo/view?usp=share_link',textData:'Students meet with Ms.Smriti Irani, HRD Minister on 07.06.2016'},
  ])
  return (
    <div>
      <h2>Interaction Meets</h2>
      <Divider />

      {state.map((ele,i)=>{
        return<Fragment key={i}>
          <BulletLineLinkCom link={ele?.link} textData={ele?.textData} />
        </Fragment>
      })}
    </div>
  )
}

export default InterActionMeets