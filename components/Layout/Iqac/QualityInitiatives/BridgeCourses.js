import { Divider } from '@material-ui/core'
import React from 'react'
import BulletLineLinkCom from '../../../HeadingComponent/BulletLineLinkCom'

const BridgeCourses = () => {
  return (
    <div>
      <h2>Bridge Courses</h2>
      <Divider />
      <BulletLineLinkCom link={'https://drive.google.com/file/d/1VeomRo9er_wIGf61D8ZwKN2pHVnqCl3G/view?usp=share_link'} textData={'Click here for List of Bridge Courses'} />
    </div>
  )
}

export default BridgeCourses