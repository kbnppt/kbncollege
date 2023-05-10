import React from 'react'
// import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const BulletLineCom = (props) => {
  return (
    <div style={{display:'flex',alignItems:'center'}}>
        {/* <ArrowForwardIosIcon />  */}
        <NavigateNextIcon /> 
        <div style={{textAlign:'justify',margin:'10px 0'}}>{props.data}</div>
    </div>
  )
}

export default BulletLineCom