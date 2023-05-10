import React from 'react'
import {getRequiredImgs} from '../../../../../Api/index'

const MSCOOrganicEvents = () => {

  const [apidata,setApiData] = React.useState([])

    const initialLoad = async() =>{
        let folderId = '1ehc-7GfsDI7i0qKOIsorITsmvZ-VfVTk';
        let data = await getRequiredImgs(folderId);
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
    <div>
      <div>
                <h2 style={{textAlign:'center', color:'#2e69d6'}}>DEPARTMENT OF M.SC (CHEMISTRY)</h2>
                <h2 style={{ textDecoration: 'underline' }}>ACADEMIC YEAR 2021-2022</h2>
                <ul>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('Workshop%20on%20HPLC%20and%20GC.pdf')}`} target='__blank'>Four Day Workshop on"High performance Liquid Chromatography and Gas Chromatography " on 23rd to 26th March,2022</a></li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('Science%20Day%20report%20(1).pdf')}`} target='__blank'>"National Science Day " on 28th February,2022</a></li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('Workshop%20Report.pdf')}`} target='__blank'>Workshop on “Synthetic Strategies” on 10th January,2022</a></li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('Guest%20Lecture%20by%20Pardha%20saradhi.pdf')}`} target='__blank'>Expert Talk on "Current Research Opportunities in Material Science- A Backbone of Mordern Technology" on 18th December,2021</a></li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('Ozone%20Day.pdf')}`} target='__blank'>Virtual Awareness Talk on "Impacts of Deplication of Ozone Layer" on 16th September,2021</a></li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('GUEST%20LECTURE-4.9.pdf')}`} target='__blank'>Online Guest Lecture on Organometallic Chemistry on 4th September,2021</a></li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('NATIONAL%20WEBINAR%20ON%20NANO%20MATERIALS%20-3.7.2021.pdf')}`} target='__blank'>One-Day National Webinar on ‘Nano Materials & Their Applications’ on 3rd August,2021</a></li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('CAREER%20GUIDANCE%20PROGRAMME-1.8.2021.pdf')}`} target='__blank'>Career Orientation Programme on 'WHAT NEXT' on 1st August,2021</a></li>
               </ul>
            </div>
            <div>
                <h2 style={{ textDecoration: 'underline' }}>ACADEMIC YEAR 2020-2021</h2>
                <ul>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('GUEST%20LECTURE%20ON%20COMPUTETATIONAL%20CHEMISTRY-2.1.2021.pdf')}`} target='__blank'>Guest Lecture on Computational Chemistry on 2nd January,2021</a></li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('Webinar%20%20-%2026.06.pdf')}`} target='__blank'>"Webinar on Importance of Natural Products and their contribution to health and Society</a></li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href='https://drive.google.com/file/d/1u30-XLLXYbqvIf6vn8dHJ50w68D9yrIe/view?usp=share_link' target='__blank'>Online Guest Lecture (Webinar) on ‘IR Spectroscopy’ on 16th June, 2020</a></li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href='https://drive.google.com/file/d/1axSUbhl8OKAwKS-nY5WDkcHi4zGv2Pgd/view?usp=share_link' target='__blank'>Online Guest Lecture on ‘Methods for Determining Reaction Mechanism; on 8th June, 2020</a></li>
                   
               </ul>
            </div>
            <div>
            <h2 style={{textDecoration: 'underline'}}>Academic Year 2019-2020</h2>
            <ul>
            <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href='https://drive.google.com/file/d/1NSCr_0PCk9CnqpP02Ny9nhgCIP70XBPh/view?usp=share_link' target='__blank'>Online Guest Lecture on ‘Proton NMR Spectroscopy’ on 30th May, 2020.</a></li>
            <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('1-GUEST%20LECTUER%20-%2010.2.2020.pdf')}`} target='__blank'>Guest Lecture on “Stereochemistry” on 10th February, 2020</a></li>
            <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('2-GUEST%20LECTURE%20-%204.1.2020.pdf')}`} target='__blank'>Guest lecture on “2D NMR Spectroscopy” on 4th January, 2020</a></li>
            <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('3-FIELD%20TRIP%20-%2010-13.12.2019.pdf')}`} target='__blank'>Industrial Visit to Central Food Technological Research Institute, Bengaluru from 10th – 13th December, 2019</a></li>
            <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('4-GUEST%20LECTURE%20-%2018.9.2019.pdf')}`} target='__blank'>Guest Lecture on “Liquid Crystal” on 18th September, 2019</a></li>
            <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('1%20(2).pdf')}`} target='__blank'>Flash Mob on International day for the Preservation of the Ozone Layer i.e on 16th September, 2019.</a></li>
            <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('2.pdf')}`} target='__blank'>UGC Funded One Week National Workshop on “Tools and Techniques for Industrial Applications” from 9th to 15th September, 2019.</a></li>
            <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('3.pdf')}`} target='__blank'>Guest lecture on “Chromatographic Techniques” on 30th August, 2019.</a></li>
            <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('4.pdf')}`} target='__blank'>An Interactive session on Inorganic chemistry and Career opportunities on 29th August, 2019..</a></li>
            <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('5%20(9).pdf')}`} target='__blank'>Science EXPO-2019 from 21st to 23rd August, 2019..</a></li>
            <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('6.pdf')}`} target='__blank'>Guest lecture on “Advances in Separation Techniques” on 2nd August, 2019..</a></li>
            <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('7.pdf')}`} target='__blank'>Guest lecture on “Chemical Kinetics” on 20th July, 2019..</a></li>
            </ul> 
            </div>
            <div>
            <h2 style={{textDecoration: 'underline'}}>Academic Year 2018-2019</h2>
            <ul>
            <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('1%2015-11-18.pdf')}`} target='__blank'>Pre-Event Lecture Series, Road show and Exhibition on Nano Science & Technology on 15th November 2018.</a></li>
            <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('2.%2024-10-18.pdf')}`} target='__blank'>Guest lecture on Chemistry in Biology at Hyderabad on 24th October, 2018..</a></li>
            <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('3.%2028%20&%2029-9-18.pdf')}`} target='__blank'>UGC Sponsored Two day National Symposium on “Emerging Trends in Organic Chemistry” from 28th to 29th September 2018.</a></li>
            <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('4.%2018-9-18.pdf')}`} target='__blank'>Guest lecture on NMR spectroscopy by Dr. Beeraiah Beri Associate professor, IIT, Chennai on 18th September 2018..</a></li>
            <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('5.%2016-08-18.pdf')}`} target='__blank'>Scientific Talk on Chemical Sensors for Speciation Studies by Dr. A.V. Ramana Reddy, Scientist, BARC, Mumbai on 16th August 2018.</a></li>
            <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('6.%2028-8-18.pdf')}`} target='__blank'>Guest Lecture on Crystal field theory by Dr. Y. Lakshmana Kumar on 28th July 2018.</a></li>
            </ul>
            </div>

            <div>
            <h2 style={{textDecoration: 'underline'}}>Academic Year 2017-2018</h2>
            <ul>
            <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('KTP%20Sir.pdf')}`} target='__blank'>Guest Lecture on Nano Chemistry and Molecular Motors on 31st March, 2018.</a></li>
            <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('National%20Science%20Day.pdf')}`} target='__blank'>National Science Day Celebrations-2018.</a></li>
            <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('1-2017-18.pdf')}`} target='__blank'>Guest lecture on “Metal Clusters” by Dr. M. Rama Assistant Prof. Department of Chemistry St’Theresas College, Eluru on 17th February 2018.</a></li>
            <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('')}`} target='__blank'>Guest Lecture on “Role of Metal ions on Biological Dynamics of Soil” by Dr. V. Amrutha Valli, Assistant Professor, Dept. of Botany and Microbiology, ANU on 14th Dec 2017.</a></li>
            <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('3-2017-18.pdf')}`} target='__blank'>UGC Funded One Day National Workshop on “Spectroscopy and Analysing Spectral Data” on 25th September 2017.</a></li>
            <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('4-2017-18.pdf')}`} target='__blank'>Industrial visit to RACHEM Pharma Ltd, Muktyala Village, Jaggayapet mandal, Krishna District on 16th sep, 2017.</a></li>
            <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('5-2017-18.pdf')}`} target='__blank'>Guest lecture on “2D-NMR” by Dr.N. Madhavi Asst. Prof.J.K.C. College, Guntur on 8th September, 2017.</a></li>
            <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('6-2017-18.pdf')}`} target='__blank'>Guest lecture on “Disconnection Approach” by Dr. B. Haribabu, Asst. Prof. Acharya Naagarjuna University on 1st August, 2017</a></li>
            <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('7-2017-18.pdf')}`} target='__blank'>Guest lecture on “Women Entrepreneurship” by Mrs. Sadineni Yamini – President –South India Non Government Charities trust, Limca book of record holder on 26thjuly, 2017.</a></li>
            </ul>
            </div>

            <div>
            <h2 style={{textDecoration: 'underline'}}>Academic Year 2016-2017</h2>
            <ul>
            <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('1-2016-17.pdf')}`} target='__blank'>Guest Lecture by Prof. P.V.V. Satyanarayana, Rtd. Professor, ANU. on “Stereochemistry” on 2nd February 2017.</a></li>
            <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('2-2016-17.pdf')}`} target='__blank'>UGC Funded Two day National Workshop on “Instrumental Methods of Chemical Analysis” on 15th & 16th December 2016.</a></li>
            <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('6-2016-17.pdf')}`} target='__blank'>Industrial Visit to “Jocil Ltd, pericharla, Guntur District” on 29th October 2016.</a></li>
            <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('7-2016-17.pdf')}`} target='__blank'>Organized “International Day for the Preservation of Ozone Layer” on 16th September 2016.</a></li>
            <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('8-2016-17.pdf')}`} target='__blank'>Guest Lecture by Prof. R. Venkatnadh, Research Co-ordinator, GITAM University, Bangalore on “Healing of Ozone Layer” on 16th September 2016.</a></li>
            </ul>
            </div>

            <div>
            <h2 style={{textDecoration: 'underline'}}>Academic Year 2015-2016</h2>
            <ul>
            <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('1-2015-16.pdf')}`} target='__blank'>Department of PG Chemistry (Ist & IInd year) has visited KCP Sugar factory, Vuyyuru on 22nd February 2016.</a></li>
            <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('2-2015-16.pdf')}`} target='__blank'>Organised a guest lecture on “Electrodes and Electrode Potentials” by Dr. K. Balamurakikrishna, Asst. Professor, Dept. Of Chemistry, ANU, Guntur on 30th Jan 2016 .</a></li>
            <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('3-2015-16.pdf')}`} target='__blank'>Celebrated World Soil Day on 5-12-2015 on the occasion of International year of soil 2015.</a></li>
            <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('4-2015-16.pdf')}`} target='__blank'>Organised a guest lecture on “Natural Product Chemistry” by Dr. C. A. Jyothirmayee, Reader, Dept. Of Chemistry, St. Theresa College, Eluru on 10th October 2015 .</a></li>
            <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href='https://drive.google.com/file/d/1StkPed-XZHoI_mOdjLMBCVUGGjL0IsCa/view?usp=share_link' target='__blank'>organised a UGC Sponsored Two-day National seminar “Advances in Chemical Science” (NSACS-2015) on 18-19 September 2015.</a></li>
            <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('6-2015-16.pdf')}`} target='__blank'>Organised a guest lecture on “Coordination Compounds and their stability” by Dr. K.Thirumala Prasad, Associate Professor DVR & Dr.HS MIC College of Technology. Department of chemistry Kanchikicharla on 21-08-2015.</a></li>
            <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('7-2015-16.pdf')}`} target='__blank'>Organised a seminar on “Chemical industry Challenges, avenues and Environment” on 30th July 2015.</a></li>
             </ul>
            </div>

            <div>
            <h2 style={{textDecoration: 'underline'}}>Academic Year 2014-2015</h2>
            <ul>
            <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('1-2014-15.pdf')}`} target='__blank'>A guest lecture on “Sulphonate Esters: the Modern perspective of Coupling Reagents”” by Dr. P. Nanibabu, Research associate, Center for Nano and Soft matter Sciences, Jalahalli, Bangalore on 30th January 2015.</a></li>
            <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('2-2014-15.pdf')}`} target='__blank'>Organised Aspire-2015, a State Level Meet for all Degree final year students on 24th January 2015.</a></li>
            <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('3-2014-15.pdf')}`} target='__blank'>guest lecture on “Stereochemistry” by Dr. T.E. Divakar, Department of chemistry, Nobel College, Machilipatnam on 30th December 2014.</a></li>
            <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('4-2014-15.pdf')}`} target='__blank'>A guest lecture on “Polymer Chemistry” by Prof. C. Rambabu, Department of chemistry, ANU on 16th October 2014.</a></li>
            <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('5-2014-15.pdf')}`} target='__blank'>Organised International day for the preservation of Ozone layer on 16th September 2014.</a></li>
            <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('6-2014-15.pdf')}`} target='__blank'>A guest lecture on “Reaction Mechanism in Inorganic Metal Complexes” by Prof. L.N. Sarada, Chairman, BOS, Department of chemistry, Osmania University, Hyderabad 12th September 2014.</a></li>
            <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('7-2014-15.pdf')}`} target='__blank'>A guest lecture on “Advances in Isolation of Natural Products” by Dr. R. Venkatnath, Head, School of Biotechnology, Vignan University on 26th July 2014.</a></li>
            <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('8-2014-15.pdf')}`} target='__blank'>Community awareness programme on “Role of youth in pollution free India” on 8th July 2014 on the occasion of World population day (11-7-2014).</a></li>  
            </ul>
            </div>

            <div>
            <h2 style={{textDecoration: 'underline'}}>Academic Year 2013-2014</h2>
            <ul>
            <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('separationmethods.pdf')}`} target='__blank'>Organized a Guest Lecture on “Separation methods” by Retd. Prof. G.S. Murthy, Andhra University on 17th July 2013</a></li>
            <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('pg_che_13_14_carrier.pdf')}`} target='__blank'>A State Level Workshop “Chemistry and Career Prospects” on 30th November 2013</a></li>
            <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href='####################################################################' target='__blank'>1st M.Sc. and 2nd M.Sc. Chemistry students visited Cystron Lab, Autonagar, and Vijayawada on 23-12-2014</a></li>
            <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('guestspect.pdf')}`} target='__blank'>Organized a Guest Lecture on “Principles of Spectroscopy” Prof. C.V. Nageswara rao, NRI College of Engineering and Technology, Kanchikacharla on 8th March 2014</a></li>
            </ul>
            </div>

            <div>
            <h2 style={{textDecoration: 'underline'}}>Academic Year 2012-2013</h2>
            <ul>
            <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href='####################################################################' target='__blank'>Guest lecture on “Cow Based organic Farming and its Potential Relation to Environment” by Prof. G.S. Murty(Retd) Andhra University, Vizag on 22nd January 2013.</a></li>
            <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('One%20month%20Workshop%202012-13.pdf')}`} target='__blank'>Workshop on “Pharma Quality Control” from 7-1-2013 to 12-2-2013.</a></li>
            <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href='https://drive.google.com/file/d/1JSsEllLK7v25CT-R9TUV7XcLvPxmQ6Ve/view?usp=share_link' target='__blank'>Two day UGC sponsored National Seminar on “Significance of Green Strategies for Environmental protection” on 14th and 15th December 2012.</a></li>
            <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href='####################################################################' target='__blank'>A Guest lecture on “Chromatography” by Prof. M.V.V.S.S.S. Sarma, Al-Ameer PG College, Rajahmundry on 29th November 2012.</a></li>
            <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href='####################################################################' target='__blank'>The 2nd M.Sc Chemistry students has visited Nifty Labss,Kondapalli, Vijayawada on 2nd Sptember 2012.</a></li>
            <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href='####################################################################' target='__blank'>A Guest Lecture on “Nanochemistry” by Dr. K.T.Prasad, Associative professor, MIC College of Technology, Kanchikicharla on 1st September 2012.</a></li>
            <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('awarenesswc.pdf')}`} target='__blank'>Awareness programme on “Water Conservation and Management” on 21st July 2012.</a></li>
            <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('Diabetis%202012-13.pdf')}`} target='__blank'>Awareness programme on “Diabetis” on 25th June 2012.</a></li>
            <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('PG%20Chemistry%20Innovative%20activity%202012-13.pdf')}`} target='__blank'>The department has conducted an Innovative programme “Extraction of chemical constituents from medicinal plants” to the final M.Sc Chemistry students.</a></li>
            </ul>
            </div>

  
           
          


    </div>
  )
}

export default MSCOOrganicEvents;
