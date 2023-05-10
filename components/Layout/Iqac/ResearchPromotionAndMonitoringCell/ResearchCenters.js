import { Card } from '@material-ui/core'
import React from 'react'
import CustomGifComp from '../../../HeadingComponent/CustomGifComp'

const ResearchCenters = () => {
  return (
    <div>
      <Card variant="outlined">
        <CustomGifComp srcData='https://drive.google.com/uc?id=/12dvaxvqbIOJlTHg0W4FI4N7YGfvnpFi9' />
      </Card>

      <div style={{marginTop:'20px'}}>
        <li style={{fontSize:'18px',fontWeight:'bold'}}><a href='https://drive.google.com/file/d/1UcXhlPbAno1vH4XOKsrWH3EgBeNIJb3J/view?usp=share_link' target={'_blank'} style={{color:'#ab2421'}}>COMMERCE</a></li>
        <li style={{fontSize:'18px',fontWeight:'bold'}}><a href='https://drive.google.com/file/d/13XaX7fJaibL1GIliiby2vEVVd1DZzGzj/view?usp=share_link' target={'_blank'} style={{color:'#009846'}}>CHEMISTRY</a></li>
        <li style={{fontSize:'18px',fontWeight:'bold'}}><a href='https://drive.google.com/file/d/1neEFIzNkVvF7PCEOwGfsn2-9aWDXr_9i/view?usp=share_link' target={'_blank'} style={{color:'#008dd2'}}>MANAGEMENT</a></li>
      </div>
    </div>
  )
}
export default ResearchCenters