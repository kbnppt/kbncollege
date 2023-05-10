import React from 'react'
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const BulletLineLinkCom = (props) => {
  return (
    <div style={{display:'flex',alignItems:'center'}}>
        <NavigateNextIcon /> 
        <a href={props?.link} target='_blank' style={{textAlign:'justify',margin:'10px 0',color:'#337AB7'}}>{props?.textData}</a>
    </div>
  )
}

export default BulletLineLinkCom