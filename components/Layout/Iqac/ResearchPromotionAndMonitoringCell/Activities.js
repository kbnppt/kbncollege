import React from 'react'
import Divider from '@material-ui/core/Divider';
import { getRequiredImgs } from '../../../Api';

const Activities = () => {
  
  const [apidata,setApiData] = React.useState([])

    const initialLoad = async() =>{
        let govt_folderId = '1nC1sqRB7pb0fOLUcsHKcP79XDBivz7al';
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

  return (
    <div style={{textAlign:'justify'}}>
      <h3>Activities</h3>
      <Divider />
      <h4 style={{color:'green'}}>ACADEMIC YEAR 2022-23</h4>
      <li style={{color:'#337ab7',marginBottom:'10px'}}><a href={`https://drive.google.com/uc?id=${getImgData('AGRICULTURAL%20DRONES-13%20TO%2015%20OCTOBER,%202022.pdf')}`}  target='_blank'>WORKSHOP ON CUSTOMIZATION OF COMMERCIALIZED AGRICULTURAL DRONES on13th TO 15th OCTOBER, 2022</a></li>
      <li style={{color:'#337ab7',marginBottom:'10px'}}>
        <a href={`https://drive.google.com/uc?id=${getImgData('ACIC%20WORKSHOP%20-%20JULY,%202022.pdf')}`}  target='_blank'>
      ACIC WORKSHOP on JULY, 2022
        </a>
      </li>
      <Divider />

      <h4 style={{color:'green'}}>
      ACADEMIC YEAR 2021-22
        </h4>
      <li style={{color:'#337ab7',marginBottom:'10px'}}>
        <a href='https://u.pcloud.link/publink/show?code=XZNBmMVZV65Py2IV48bMt0Wt1GD32k4Sej9X'  target='_blank'>
        Awareness on <b>IPR</b>
        </a>
      </li>
      <li style={{color:'#337ab7',marginBottom:'10px'}}>
        <a href={`https://drive.google.com/uc?id=${getImgData('IPR%20WORKSHOP-28.2.2022-RESEARCH%20PROMOTION%20&%20MONITORING%20CELL.pdf')}`}  target='_blank'>
        Webinar on <b>‘IPR(Intellectual Property Rights)’</b> on 28th February, 2022.
        </a>
      </li>

      <Divider />
      <h4 style={{color:'green'}}>
      ACADEMIC YEAR 2020-21
        </h4>
      <li style={{color:'#337ab7',marginBottom:'10px'}}>
        <a href={`https://drive.google.com/uc?id=${getImgData('NATIONAL%20WEBINAR%20ON%20IPR-30.3.pdf')}`}  target='_blank'>
        One Day National Webinar on <b>‘AN OVERVIEW OF IPR(IMPORTANCE AND IMPACT OF PATENTS )’</b> on 30th March, 2021.
        </a>
      </li>

      <Divider />
      <h4 style={{color:'green'}}>
      ACADEMIC YEAR 2019-20
        </h4>
      <li style={{color:'#337ab7',marginBottom:'10px'}}>
        <a href={`https://drive.google.com/uc?id=${getImgData('IPR%20WORKSHOP%20-%2011.3.2020.pdf')}`}  target='_blank'>
        One Day National Workshop (Under Autonomous Funds) on ‘Intellectual Property Rights’ on 11th March, 2019.
        </a>
      </li>
      <li style={{color:'#337ab7',marginBottom:'10px'}}>
        <a href={`https://drive.google.com/uc?id=${getImgData('ORIENTATION%20PROGRAMME%20ON%20RESEARCH%20PROMOTION%20.pdf')}`}  target='_blank'>
        ORIENTATION PROGRAMME ON RESEARCH PROMOTION ON 21stSEPTEMBER 2019
        </a>
      </li>
      <li style={{color:'#337ab7',marginBottom:'10px'}}>
        <a href={`https://drive.google.com/uc?id=${getImgData('patentbybhagavan.pdf')}`}  target='_blank'>
        Awareness programme on "Submission of Patents" Organized by Research Promotion & Monitoring Cell on 31stJuly 2019
        </a>
      </li>


      <Divider />
      <h4 style={{color:'green'}}>
      ACADEMIC YEAR 2018-19
        </h4>
      <li style={{color:'#337ab7',marginBottom:'10px'}}>
        <a href={`https://drive.google.com/uc?id=${getImgData('IntellectualPropertyRights.pdf')}`}  target='_blank'>
        UGC Sponsored One Day National Workshop on ”Intellectual Property Rights” (IPRs) Organized by: Research Promotion and Monitoring Cell 22nd February,2018
        </a>
      </li>
      <li style={{color:'#337ab7',marginBottom:'10px'}}>
        <a href='https://drive.google.com/file/d/1cl2uFZb9t3qiUvWuxfVpxmXKm0419ARC/view?usp=share_link'  target='_blank'>
        ICSSR Sponsored Two Day National Seminar on “Green Accounting – Issues & Implementation” in collaboration with Krishna University, Machilipatnam on 8th&9th December, 2017.

        </a>
      </li>

    </div>
  )
}
export default Activities