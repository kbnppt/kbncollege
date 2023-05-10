import React from "react";
import {getRequiredImgs} from '../../../../../Api/index'

const CommerceAndManagementEvents = () => {

  const [apidata,setApiData] = React.useState([])

  const initialLoad = async() =>{
      let folderId = '1pzbL7Jod5kpLbWGhh4PMG08ibIP_I05t';
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
        <h2 style={{ textDecoration: "underline" }}>ACADEMIC YEAR 2022-2023</h2>
        <ul>
          <li style={{ color: "Highlight" }}>
            <a
              style={{ color: "Highlight" }}
              href={`https://drive.google.com/uc?id=${getImgData("Industrial%20Visit%20Report%20to%20FIZIKEM%20LABORATORIES%20Pvt%20Ltd.pdf")}`}
              target="__blank"
            >
              “Industrial Visit Report to FIZIKEM LABORATORIES Pvt Ltd” on 24th
              August,2022.
            </a>{" "}
          </li>
          <li style={{ color: "Highlight" }}>
            <a
              style={{ color: "Highlight" }}
              href={`https://drive.google.com/uc?id=${getImgData("SESSION-KARTHIK%20VARMA-16.8.pdf")}`}
              target="__blank"
            >
              “Lean Entrepreneurship and Minimum Viable Product/Business ” on
              16th August,2022.
            </a>{" "}
          </li>
          <li style={{ color: "Highlight" }}>
            <a
              style={{ color: "Highlight" }}
              href={`https://drive.google.com/uc?id=${getImgData("IIC%20session%20on%20Angel%20Investment%20Venture%20Capital%20Funding%20opportunities%20for%20Early%20Stage%20Entrepreneurs.pdf")}`}
              target="__blank"
            >
              "IIC session on Angel Investment Venture Capital Funding
              opportunities for Early Stage Entrepreneurs" on 16th August,2022
            </a>{" "}
          </li>
        </ul>
      </div>
      <div>
        <h2 style={{ textDecoration: "underline" }}>ACADEMIC YEAR 2021-2022</h2>
        <ul>
          <li style={{ color: "Highlight" }}>
            <a
              style={{ color: "Highlight" }}
              href={`https://drive.google.com/uc?id=${getImgData("Industrial%20Visit%20Report%20to%20Banglore.pdf")}`}
              target="__blank"
            >
              “INDUSTRIAL VISIT REPORT TO BANGLORE”5th to 8th May 2022
            </a>{" "}
          </li>
          <li style={{ color: "Highlight" }}>
            <a
              style={{ color: "Highlight" }}
              href={`https://drive.google.com/uc?id=${getImgData("Guest%20Lecture%20Report%20(4).pdf")}`}
              target="__blank"
            >
              GUEST LECTURE ON “HOW TO PLAN FOR START-UPS LEGAL AND ETHICAL
              STEPS ” 1st April,2022.
            </a>{" "}
          </li>
          <li style={{ color: "Highlight" }}>
            <a
              style={{ color: "Highlight" }}
              href={`https://drive.google.com/uc?id=${getImgData("CAREER%20ORIENTATION%20PROGRAMME%20-%202021-22.pdf")}`}
              target="__blank"
            >
              REPORT ON CAREER ORIENTATION PROGRAMME 2021-22” 25th March,2022.
            </a>{" "}
          </li>
          <li style={{ color: "Highlight" }}>
            <a
              style={{ color: "Highlight" }}
              href={`https://drive.google.com/uc?id=${getImgData("ICSSR%20REPORT%20(2).pdf")}`}
              target="__blank"
            >
              “SIX-DAY WORKSHOP ON FINANCIAL EDUCATION PROGRAMME” FROM 2nd to
              8th March,2022.
            </a>{" "}
          </li>
          <li style={{ color: "Highlight" }}>
            <a
              style={{ color: "Highlight" }}
              href={`https://drive.google.com/uc?id=${getImgData("AWARENESS%20PROGRAMME-31.1.2022.pdf")}`}
              target="__blank"
            >
              AWARENESS TALK ON “EXPOSURE TO IT & SAP ROLE IN BANKING SECTOR”
              31st January,2022.
            </a>{" "}
          </li>
          <li style={{ color: "Highlight" }}>
            <a
              style={{ color: "Highlight" }}
              href={`https://drive.google.com/uc?id=${getImgData("FIELD%20VISIT%20TO%20MODULO%20CERAMICS%20PVT.%20LTD.pdf")}`}
              target="__blank"
            >
              "FIELD VISIT TO MODULO CERAMICS PVT.LTD " 9th December,2021.
            </a>{" "}
          </li>
          <li style={{ color: "Highlight" }}>
            <a
              style={{ color: "Highlight" }}
              href={`https://drive.google.com/uc?id=${getImgData("CONFLUENCIA-8.12.2021.pdf")}`}
              target="__blank"
            >
              {" "}
              "REPORT ON CONFLUENCIA – 2k22 " 8th December,2021.
            </a>{" "}
          </li>
          <li style={{ color: "Highlight" }}>
            <a
              style={{ color: "Highlight" }}
              href={`https://drive.google.com/uc?id=${getImgData("GUEST%20LECTURE%20ON%20OBJETIVES%20&%20IMPORTANCE%20OF%20LOGISTICS.pdf")}`}
              target="__blank"
            >
              {" "}
              " GUEST LECTURE ON OBJETIVES & IMPORTANCE OF LOGISTICS " 17th
              November ,2021.
            </a>{" "}
          </li>
          <li style={{ color: "Highlight" }}>
            <a
              style={{ color: "Highlight" }}
              href={`https://drive.google.com/uc?id=${getImgData("MEET%20THE%20CEO.pdf")}`}
              target="__blank"
            >
              " MEET THE CEO " on 8th november,2021.
            </a>{" "}
          </li>
          <li style={{ color: "Highlight" }}>
            <a
              style={{ color: "Highlight" }}
              href={`https://drive.google.com/uc?id=${getImgData("GUEST%20LECTURE-8.9.2021.pdf")}`}
              target="__blank"
            >
              {" "}
              Guest lecture on "Maximizing Personal productivity &Achieving
              Success" on 8th September,2021.
            </a>{" "}
          </li>
          <li style={{ color: "Highlight" }}>
            <a
              style={{ color: "Highlight" }}
              href={`https://drive.google.com/uc?id=${getImgData("NATIONAL%20WEBINAR%20ON%20ROLE%20OF%20ANALYTICS%20IN%20TALENT.pdf")}`}
              target="__blank"
            >
              {" "}
              "NATIONAL WEBINAR ON ROLE OF ANALYTICS IN TALENT MANAGEMENT" on
              3rd july,2021.
            </a>{" "}
          </li>
        </ul>
      </div>
      <h2 style={{ textDecoration: "underline" }}>ACADEMIC YEAR 2020-2021</h2>
      <ul>
        <li style={{ color: "Highlight" }}>
          <a
            style={{ color: "Highlight" }}
            href={`https://drive.google.com/uc?id=${getImgData("NATIONAL%20LEVEL%20ONLINE%20SEMINAR%20PHOTOS%20WITH%20REPORT-22&23.6.2020.pdf")}`}
            target="__blank"
          >
            UGC Sponsored Two-Day National Webinar on "Changing Dimensions of
            Business Environment in COVID-19 Era-Strategies for formulation and
            Implementation" In Collaboration with Krishna University,
            Machilipatnam from 22nd & 23rd June, 2020.
          </a>{" "}
        </li>
      </ul>
      <h2 style={{ textDecoration: "underline" }}>ACADEMIC YEAR 2019-2020</h2>
      <ul>
        <li style={{ color: "Highlight" }}>
          <a
            style={{ color: "Highlight" }}
            href={`https://drive.google.com/uc?id=${getImgData("MEET%20THE%20CEO%20REPORT-3.3.2020.pdf")}`}
            target="__blank"
          >
            MEET THE CEO on 3rd March, 2020
          </a>{" "}
        </li>
        <li style={{ color: "Highlight" }}>
          <a
            style={{ color: "Highlight" }}
            href={`https://drive.google.com/uc?id=${getImgData("ICSSR%20(IMPRESS)%20SPONOSRED%20INTERNATIONAL%20SEMINAR%20-%2018&19.12.2019.pdf")}`}
            target="__blank"
          >
            ICSSR (IMPRESS) Sponsored Two-Day International Seminar on
            “Strategies for Transforming India – The Way Forward” Organized by
            Department of Commerce & Management On 18th & 19th December,2019.
          </a>{" "}
        </li>
        <li style={{ color: "Highlight" }}>
          <a
            style={{ color: "Highlight" }}
            href={`https://drive.google.com/uc?id=${getImgData("ICSSR%20SPONSORED%20NATIOANL%20SEMINAR%20-%2029&30.11.2019.pdf")}`}
            target="__blank"
          >
            ICSSR (IMPRESS) Sponsored Two – Day National Seminar on “Impact of
            Developmental Programmes for Social Transformation of Scheduled
            Castes & Scheduled Tribes” Organized by Department of Commerce &
            Management 29th & 30th November,2019.
          </a>{" "}
        </li>
        <li style={{ color: "Highlight" }}>
          <a
            style={{ color: "Highlight" }}
            href={`https://drive.google.com/uc?id=${getImgData("1-11.9.2019.pdf")}`}
            target="__blank"
          >
            Guest Lecture on “Parcel Operations in India Post” on 11th
            September, 2019.
          </a>{" "}
        </li>
        <li style={{ color: "Highlight" }}>
          <a
            style={{ color: "Highlight" }}
            href={`https://drive.google.com/uc?id=${getImgData("2-30.8.2019.pdf")}`}
            target="__blank"
          >
            Industrial Visit to Hindusthan Coca-Cola Beverages Pvt. Ltd.,
            Atmakuru, Mangalagiri on 30th August, 2019.
          </a>{" "}
        </li>
        <li style={{ color: "Highlight" }}>
          <a
            style={{ color: "Highlight" }}
            href={`https://drive.google.com/uc?id=${getImgData("3-26.8.2019.pdf")}`}
            target="__blank"
          >
            Guest Lecture on “HR OPERATIONS” on 26th August, 2019.
          </a>{" "}
        </li>
        <li style={{ color: "Highlight" }}>
          <a
            style={{ color: "Highlight" }}
            href={`https://drive.google.com/uc?id=${getImgData("4-25&27.7.2019.pdf")}`}
            target="__blank"
          >
            Guest Lecture on “Young Entrepreneur - Startups” on 25th & 27th
            July, 2019.
          </a>{" "}
        </li>
        <li style={{ color: "Highlight" }}>
          <a
            style={{ color: "Highlight" }}
            href={`https://drive.google.com/uc?id=${getImgData("5-22.7.2019.pdf")}`}
            target="__blank"
          >
            MEET THE CEO on 22nd July, 2019.
          </a>{" "}
        </li>
        <li style={{ color: "Highlight" }}>
          <a
            style={{ color: "Highlight" }}
            href={`https://drive.google.com/uc?id=${getImgData("6-3.7.2019.pdf")}`}
            target="__blank"
          >
            MEET THE CEO on 3rd July, 2019.
          </a>{" "}
        </li>
        <li style={{ color: "Highlight" }}>
          <a
            style={{ color: "Highlight" }}
            href={`https://drive.google.com/uc?id=${getImgData("7-29.6.2019.pdf")}`}
            target="__blank"
          >
            Industrial visit to Hindustan Coca Cola Beverages Pvt. Ltd.,
            Mangalagiri, 29th June, 2019.
          </a>{" "}
        </li>
        <li style={{ color: "Highlight" }}>
          <a
            style={{ color: "Highlight" }}
            href={`https://drive.google.com/uc?id=${getImgData("8-29.6.2019.pdf")}`}
            target="__blank"
          >
            Career Orientation Programme (BBA) on 29th June, 2019.
          </a>{" "}
        </li>
        <li style={{ color: "Highlight" }}>
          <a
            style={{ color: "Highlight" }}
            href={`https://drive.google.com/uc?id=${getImgData("9-25.6.pdf")}`}
            target="__blank"
          >
            Awareness Programme on “INVESTOR EDUCATION” on 25th June, 2019.
          </a>{" "}
        </li>
        <li style={{ color: "Highlight" }}>
          <a
            style={{ color: "Highlight" }}
            href={`https://drive.google.com/uc?id=${getImgData("10-22.6.2019.pdf")}`}
            target="__blank"
          >
            Guest Lecture on “Latest Trends in Logistics & Supply Chain
            Management” on 22nd June, 2019.
          </a>{" "}
        </li>
        <li style={{ color: "Highlight" }}>
          <a
            style={{ color: "Highlight" }}
            href={`https://drive.google.com/uc?id=${getImgData("11-18.6.2019.pdf")}`}
            target="__blank"
          >
            Career Orientation Programme (Logistics) on 18th June, 2019.
          </a>{" "}
        </li>
      </ul>

      <h2 style={{ textDecoration: "underline" }}>ACADEMIC YEAR 2018-2019</h2>
      <ul>
        <li style={{ color: "Highlight" }}>
          <a
            style={{ color: "Highlight" }}
            href={`https://drive.google.com/uc?id=${getImgData("1-18&19.3.2019.pdf")}`}
            target="__blank"
          >
            ICSSR – SRC Sponsored Two Day National Seminar on “Modern Methods
            and Effectiveness of Tribal Programmes – Suggest Necessary Measures
            in the Light of Findings” on 18th & 19th March, 2019.
          </a>{" "}
        </li>
        <li style={{ color: "Highlight" }}>
          <a
            style={{ color: "Highlight" }}
            href={`https://drive.google.com/uc?id=${getImgData("2-26.2.2019.pdf")}`}
            target="__blank"
          >
            Confluencia – 2K19 on 26th February, 2019.
          </a>{" "}
        </li>
        <li style={{ color: "Highlight" }}>
          <a
            style={{ color: "Highlight" }}
            href={`https://drive.google.com/uc?id=${getImgData("3-13.2.2019.pdf")}`}
            target="__blank"
          >
            Meet the Entrepreneur Programme on 13th February, 2019.
          </a>{" "}
        </li>
        <li style={{ color: "Highlight" }}>
          <a
            style={{ color: "Highlight" }}
            href={`https://drive.google.com/uc?id=${getImgData("4-9.2.2019.pdf")}`}
            target="__blank"
          >
            Industrial Visit to “VRL” Logistics on 9th February, 2019.
          </a>{" "}
        </li>
        <li style={{ color: "Highlight" }}>
          <a
            style={{ color: "Highlight" }}
            href={`https://drive.google.com/uc?id=${getImgData("5-29.1.2019.pdf")}`}
            target="__blank"
          >
            Industrial visit to RR Sports, Vijayawada on 29th January, 2019.
          </a>{" "}
        </li>
        <li style={{ color: "Highlight" }}>
          <a
            style={{ color: "Highlight" }}
            href={`https://drive.google.com/uc?id=${getImgData("6-8&9.12.2018.pdf")}`}
            target="__blank"
          >
            NARDECO Property show event on 8th & 9th December, 2018.
          </a>{" "}
        </li>
        <li style={{ color: "Highlight" }}>
          <a
            style={{ color: "Highlight" }}
            href={`https://drive.google.com/uc?id=${getImgData("7-24.11.2018.pdf")}`}
            target="__blank"
          >
            Industrial visit to JOCIL Limited at Perecharla, Guntur District on
            24th November, 2018.
          </a>{" "}
        </li>
        <li style={{ color: "Highlight" }}>
          <a
            style={{ color: "Highlight" }}
            href={`https://drive.google.com/uc?id=${getImgData("8-7.11.2018.pdf")}`}
            target="__blank"
          >
            Student Workshop on “Meet the Entrepreneurs” on 7th November, 2018.
          </a>{" "}
        </li>
        <li style={{ color: "Highlight" }}>
          <a
            style={{ color: "Highlight" }}
            href={`https://drive.google.com/uc?id=${getImgData("9-11.9.2018.pdf")}`}
            target="__blank"
          >
            Student Workshop on “ITR Form Filling” on 11th September, 2018.
          </a>{" "}
        </li>
        <li style={{ color: "Highlight" }}>
          <a
            style={{ color: "Highlight" }}
            href={`https://drive.google.com/uc?id=${getImgData("10-10.8.2018.pdf")}`}
            target="__blank"
          >
            Field Visit to Kakinada Sea Port on 10th August, 2018.
          </a>{" "}
        </li>
        <li style={{ color: "Highlight" }}>
          <a
            style={{ color: "Highlight" }}
            href={`https://drive.google.com/uc?id=${getImgData("11-17.7.2018.pdf")}`}
            target="__blank"
          >
            Forum for Excellence Programme on 17th July, 2018.
          </a>{" "}
        </li>
        <li style={{ color: "Highlight" }}>
          <a
            style={{ color: "Highlight" }}
            href={`https://drive.google.com/uc?id=${getImgData("12-2.7.2018.pdf")}`}
            target="__blank"
          >
            Guest Lecture on “Logistics Management” on 2nd July, 2018.
          </a>{" "}
        </li>
      </ul>
      <h2 style={{ textDecoration: "underline" }}>ACADEMIC YEAR 2017-2018</h2>
      <ul>
        <li style={{ color: "Highlight" }}>
          <a
            style={{ color: "Highlight" }}
            href={`https://drive.google.com/uc?id=${getImgData("1-25.01.2018.pdf")}`}
            target="__blank"
          >
            Confluencia – 2K18, A State Level Management Students Meet organized
            by Dept. of Commerce & Management on 25th January, 2018.
          </a>{" "}
        </li>
        <li style={{ color: "Highlight" }}>
          <a
            style={{ color: "Highlight" }}
            href="https://drive.google.com/uc?id=1cNp6UqTVj0fR-C1w-Ym0YsL393P0N-RX"
            target="__blank"
          >
            UGC Sponsored (Under Autonomous Grants) on International Seminar on
            “GST Practices – A Cross Country Experience” in collaboration with
            Krishna University, Machilipatnam on 5th & 6th January, 2018.
          </a>{" "}
        </li>
        <li style={{ color: "Highlight" }}>
          <a
            style={{ color: "Highlight" }}
            href={`https://drive.google.com/uc?id=${getImgData("3-29.12.2017.pdf")}`}
            target="__blank"
          >
            LACTO COMQUEST – 2K18 Students Meet on 29th December, 2017.
          </a>{" "}
        </li>
        <li style={{ color: "Highlight" }}>
          <a
            style={{ color: "Highlight" }}
            href={`https://drive.google.com/uc?id=${getImgData("4-19.12.2017.pdf")}`}
            target="__blank"
          >
            Field Trip to “Central Tobacco Research Institute” with II & III BBM
            Students on 19th December, 2017.
          </a>{" "}
        </li>
        <li style={{ color: "Highlight" }}>
          <a
            style={{ color: "Highlight" }}
            href={`https://drive.google.com/uc?id=${getImgData("5-29.08.17.pdf")}`}
            target="__blank"
          >
            Awareness Programme on “Seasonal Diseases”. Chief Guest: Sri
            Kamineni Srinivas, Hon’ble Minister for Health & Medical Education,
            A.P on 29th August, 2017.
          </a>{" "}
        </li>
        <li style={{ color: "Highlight" }}>
          <a
            style={{ color: "Highlight" }}
            href="https://drive.google.com/uc?id=1zSz18iGNHOt61fe_KopriQg5VOln2rIN"
            target="__blank"
          >
            UGC Sponsored Two Day National Workshop on “Logistics & Supply Chain
            Management” on 28th & 29th July, 2017.
          </a>{" "}
        </li>
      </ul>
      <h2 style={{ textDecoration: "underline" }}>ACADEMIC YEAR 2016-2017</h2>
      <ul>
        <li style={{ color: "Highlight" }}>
          <a
            style={{ color: "Highlight" }}
            href={`https://drive.google.com/uc?id=${getImgData("7-7.2.2017.pdf")}`}
            target="__blank"
          >
            Guest Lecture on “General Awareness” on 7th February, 2017.
          </a>{" "}
        </li>
        <li style={{ color: "Highlight" }}>
          <a
            style={{ color: "Highlight" }}
            href={`https://drive.google.com/uc?id=${getImgData("8-31.1.2017.pdf")}`}
            target="__blank"
          >
            Confluencia – 2K17, A State Level Management Students Meet organized
            by Dept. of Commerce & Management on 31st January, 2017.
          </a>{" "}
        </li>
        <li style={{ color: "Highlight" }}>
          <a
            style={{ color: "Highlight" }}
            href={`https://drive.google.com/uc?id=${getImgData("9-24.1.17.pdf")}`}
            target="__blank"
          >
            Guest Lecture on “Stock Exchange” on 24th January, 2017.
          </a>{" "}
        </li>
        <li style={{ color: "Highlight" }}>
          <a
            style={{ color: "Highlight" }}
            href={`https://drive.google.com/uc?id=${getImgData("10-23.12.16.pdf")}`}
            target="__blank"
          >
            Field Trip to “Navatha Road Transport”, Kanuru, Vijayawada with II &
            III BBM Students on 23rd December, 2016.
          </a>{" "}
        </li>
        <li style={{ color: "Highlight" }}>
          <a
            style={{ color: "Highlight" }}
            href={`https://drive.google.com/uc?id=${getImgData("11-20.12.16.pdf")}`}
            target="__blank"
          >
            Guest Lecture on “Personality Development” on 20th December, 2016.
          </a>{" "}
        </li>
        <li style={{ color: "Highlight" }}>
          <a
            style={{ color: "Highlight" }}
            href="https://drive.google.com/uc?id=1zJQ-ZBIL8FckkZ76NZK-mdzuwzekPbLH"
            target="__blank"
          >
            UGC Funded One Day National Seminar on “E-TAILING: TRENDS,
            CHALLENGES & OPPORTUNITIES” (NSETCO – 2016) organised by Dept. of
            Commerce & Management on 25th & 26th November, 2016.
          </a>{" "}
        </li>
        <li style={{ color: "Highlight" }}>
          <a
            style={{ color: "Highlight" }}
            href={`https://drive.google.com/uc?id=${getImgData("13-30.9.2016.pdf")}`}
            target="__blank"
          >
            Awareness Programme on “Seasonal Diseases”. Chief Guest: Sri Sri.
            Gowtham Sawang, IPS, Commissioner of Police on 30th September, 2016.
          </a>{" "}
        </li>
      </ul>
      <h2 style={{ textDecoration: "underline" }}>ACADEMIC YEAR 2015-2016</h2>
      <ul>
        <li style={{ color: "Highlight" }}>
          <a
            style={{ color: "Highlight" }}
            href="https://drive.google.com/uc?id=10muxctZGl-1mCkMSMZH4WjBV8m61FyPU"
            target="__blank"
          >
            A Two – Day International Seminar on “Corporate Social
            Responsibility Initiatives for Inclusive and Sustainable
            Development” (ISCSR – 2016) was organised on 20th and 21st February
            2016. Chief Guest: Sri Venkaiah Naidu, Hon’ble Minister Sri. M.
            Venkaiah Naidu Hon’ble Minister for Parliamentary affairs & Urban
            Development, Govt. of India.
          </a>{" "}
        </li>
        <li style={{ color: "Highlight" }}>
          <a
            style={{ color: "Highlight" }}
            href={`https://drive.google.com/uc?id=${getImgData("15-12.12.2015%20-%20Confluencia.pdf")}`}
            target="__blank"
          >
            Confluencia – 2K15, A state level management meet was organised on
            12th December 2015.
          </a>{" "}
        </li>
        <li style={{ color: "Highlight" }}>
          <a
            style={{ color: "Highlight" }}
            href={`https://drive.google.com/uc?id=${getImgData("16-1.12.15.pdf")}`}
            target="__blank"
          >
            Career orientation and guidance programme was organised on 1st
            December 2015. Resource Person: Mr. E Indira Kalyan IPS, Additional
            superintendent of Pilla Bijapur District Chhattisgarh (Alumni of
            KBNC).
          </a>{" "}
        </li>
        <li style={{ color: "Highlight" }}>
          <a
            style={{ color: "Highlight" }}
            href={`https://drive.google.com/uc?id=${getImgData("17-25.11.2015.pdf")}`}
            target="__blank"
          >
            Guest Lecture on “Technology Revolution in State Bank” on 25th
            November 2015.
          </a>{" "}
        </li>
        <li style={{ color: "Highlight" }}>
          <a
            style={{ color: "Highlight" }}
            href={`https://drive.google.com/uc?id=${getImgData("18-28.10.2015%20-%20Awar.%20Prgm.pdf")}`}
            target="__blank"
          >
            Awareness Programme on Dengue and Preventive medicine distribution
            programme was organised on 28th October 2015.
          </a>{" "}
        </li>
        <li style={{ color: "Highlight" }}>
          <a
            style={{ color: "Highlight" }}
            href={`https://drive.google.com/uc?id=${getImgData("19-10.9.2015.pdf")}`}
            target="__blank"
          >
            Field Trip to “Hindustan Coca Cola Beverages Private Limited”
            Vadlamudi Village, Mangalagiri Mandal, Guntur District on 10th
            September, 2015 with the students of II & III BBM.
          </a>{" "}
        </li>
        <li style={{ color: "Highlight" }}>
          <a
            style={{ color: "Highlight" }}
            href={`https://drive.google.com/uc?id=${getImgData("20-29.7.15.pdf")}`}
            target="__blank"
          >
            Field Trip to “Navatha Road Transport”, Kanuru, Vijayawada with III
            B.Com (Logistics) Students on 29th July, 2015.
          </a>{" "}
        </li>
      </ul>
      <h2 style={{ textDecoration: "underline" }}>ACADEMIC YEAR 2014-2015</h2>
      <ul>
        <li style={{ color: "Highlight" }}>
          <a
            style={{ color: "Highlight" }}
            href={`https://drive.google.com/uc?id=${getImgData("21-16.2.2015.pdf")}`}
            target="__blank"
          >
            A Guest Lecture on “Incorporation of Company” to III B.Com and III
            BBM students on 16th February 2015.
          </a>{" "}
        </li>
        <li style={{ color: "Highlight" }}>
          <a
            style={{ color: "Highlight" }}
            href={`https://drive.google.com/uc?id=${getImgData("22-5.2.2015%20-%20Awar.%20Prgm.pdf")}`}
            target="__blank"
          >
            Health awareness programme was organised on 5th February 2015. As a
            part of it preventive medicine (Homes Pills) were distributed.
          </a>{" "}
        </li>
        <li style={{ color: "Highlight" }}>
          <a
            style={{ color: "Highlight" }}
            href={`https://drive.google.com/uc?id=${getImgData("23-28.1.2015%20-%20Confluencia.pdf")}`}
            target="__blank"
          >
            Confluencia – 2015 A State Level Management Meet was organised for
            degree level management students on 28th January 2015.
          </a>{" "}
        </li>
        <li style={{ color: "Highlight" }}>
          <a
            style={{ color: "Highlight" }}
            href={`https://drive.google.com/uc?id=${getImgData("24-22.11.2014.pdf")}`}
            target="__blank"
          >
            Field Trip to APHSSEL – Kondapalli with III & II BBM students on
            22nd November 2014.
          </a>{" "}
        </li>
        <li style={{ color: "Highlight" }}>
          <a
            style={{ color: "Highlight" }}
            href={`https://drive.google.com/uc?id=${getImgData("25-8.10.14.pdf")}`}
            target="__blank"
          >
            Career Awareness and Motivation Programme was organised on 8th
            October 2014.
          </a>{" "}
        </li>
        <li style={{ color: "Highlight" }}>
          <a
            style={{ color: "Highlight" }}
            href={`https://drive.google.com/uc?id=${getImgData("26-17.9.2014-Awar.%20Prgm.pdf")}`}
            target="__blank"
          >
            26. Health awareness programme was organised on 17th September, 2014
            to distribute preventive Homes Medicine Pills for home seasonal
            diseases.
          </a>{" "}
        </li>
        <li style={{ color: "Highlight" }}>
          <a
            style={{ color: "Highlight" }}
            href="https://drive.google.com/uc?id=15XOBwe6TL7tg4URnqR3bzdAngapp44Ty"
            target="__blank"
          >
            A Two-Day International Seminar on “Women Entrepreneurship A Global
            Perspective on 6th & 7th August 2014.
          </a>{" "}
        </li>
        <li style={{ color: "Highlight" }}>
          <a
            style={{ color: "Highlight" }}
            href={`https://drive.google.com/uc?id=${getImgData("28-17.7.2014.pdf")}`}
            target="__blank"
          >
            Guest lecture on “Tax procedure” on 17th July, 2014.
          </a>{" "}
        </li>
      </ul>

      <h2 style={{ textDecoration: "underline" }}>ACADEMIC YEAR 2013-2014</h2>
      <ul>
        <li style={{ color: "Highlight" }}>
          <a
            style={{ color: "Highlight" }}
            href={`https://drive.google.com/uc?id=${getImgData("29-18-2.2014%20Confluencia.pdf")}`}
            target="__blank"
          >
            Confluencia – 2014 A State Level Management Meet was organised for
            degree level management students on 18th February, 2014.
          </a>{" "}
        </li>
        <li style={{ color: "Highlight" }}>
          <a
            style={{ color: "Highlight" }}
            href={`https://drive.google.com/uc?id=${getImgData("30-27.12.2013.pdf")}`}
            target="__blank"
          >
            On 27th December, 2013 one-day field trip was organised students of
            III BBM were taken to KCP Sugars, Vuyyuru.
          </a>{" "}
        </li>
        <li style={{ color: "Highlight" }}>
          <a
            style={{ color: "Highlight" }}
            href={`https://drive.google.com/uc?id=${getImgData("31-17.10.2013.pdf")}`}
            target="__blank"
          >
            Guest Lecture on “Employability through Management Studies”.
            Resource Person: Dr. V Venugopal Reddy, Senior Regional Director,
            IGNOU, Vijayawada on 17th October, 2013.
          </a>{" "}
        </li>
      </ul>

      <h2 style={{ textDecoration: "underline" }}>ACADEMIC YEAR 2012-2013</h2>
      <ul>
        <li style={{ color: "Highlight" }}>
          <a
            style={{ color: "Highlight" }}
            href="https://drive.google.com/uc?id=1jC5RjgYPr67ryLIt_nmV8BEKRQfjGKRd"
            target="__blank"
          >
            UGC Sponsored National Workshop Sensitivity/Awareness/Motivation
            (SAM) under “Capacity Building of Women Managers in Higher
            Education” from 21st February to 25th 2013.
          </a>{" "}
        </li>
        <li style={{ color: "Highlight" }}>
          <a
            style={{ color: "Highlight" }}
            href={`https://drive.google.com/uc?id=${getImgData("33-6.10.2012-Awar.%20Prgm.pdf")}`}
            target="__blank"
          >
            Organized an Awareness Programme on “Dengue” on 6th October 2012.
          </a>{" "}
        </li>
        <li style={{ color: "Highlight" }}>
          <a
            style={{ color: "Highlight" }}
            href={`https://drive.google.com/uc?id=${getImgData("34-10.10.2012-g.l.pdf")}`}
            target="__blank"
          >
            A Guest Lecture on “Dynamic Changes in Business Finance”. Resource
            Person: Dr. J Rajesh Chowdary MBA; Ph.D HOD, Business Administration
            PB Siddhartha College on 10th October, 2012.
          </a>{" "}
        </li>
        <li style={{ color: "Highlight" }}>
          <a
            style={{ color: "Highlight" }}
            href={`https://drive.google.com/uc?id=${getImgData("35-25.8.2012-G.L.pdf")}`}
            target="__blank"
          >
            A Guest Lecture on “The Consumer Protection Act-1986” on 25th August
            2012. Resource Person: C.S Y V Rao Practicing Company secretary, Y V
            Rao Associates, HYD.
          </a>{" "}
        </li>
        <li style={{ color: "Highlight" }}>
          <a
            style={{ color: "Highlight" }}
            href={`https://drive.google.com/uc?id=${getImgData("36-6.7.2012-g.L.pdf")}`}
            target="__blank"
          >
            Guest lecture on “Career Prospects in Logistics” on 6th July, 2012.
          </a>{" "}
        </li>
        <li style={{ color: "Highlight" }}>
          <a
            style={{ color: "Highlight" }}
            href="https://drive.google.com/uc?id=1GlQL3EiGJhqfsHmTo2-LVNzI8FadynYJ"
            target="__blank"
          >
            Diploma in Event Management.
          </a>{" "}
        </li>
      </ul>

      <table>
        <tbody style={{ display: "center" }}>
          <tr style={{ display: "center" }}>
            <td>
              <strong>YEAR</strong>
            </td>
            <td>
              <strong>TOPIC</strong>
            </td>
            <td>
              <strong>PERIOD</strong>
            </td>
            <td>
              <strong>CODE</strong>
            </td>
            <td>
              <strong>RESOURCE PERSON</strong>
            </td>
            <td>
              <strong>CLASS</strong>
            </td>
          </tr>
          <tr style={{ display: "center" }}>
            <td>
              <p>2021-22</p>
            </td>
            <td>
              <p>Tourism in India – Opportunities and Challenges</p>
            </td>
            <td>
              <p>23-2-2022 TO 31-3-2022</p>
            </td>
            <td>
              <p>AOCCOM119</p>
            </td>
            <td>
              <p>Dr.M.Venkateswara Rao</p>
            </td>
            <td>
              <p>II B.Com TP</p>
            </td>
          </tr>
          <tr style={{ display: "center" }}>
            <td>
              <p>2020-21</p>
            </td>
            <td>
              <p>Women Entrepreneurship- Objectives and Challenges</p>
            </td>
            <td>
              <p>22-2-2021 to 30-3-2021</p>
            </td>
            <td>
              <p>AOCCOM118</p>
            </td>
            <td>
              <p>Dr.M.Venkateswara Rao</p>
            </td>
            <td>
              <p>III B.Com (2)</p>
            </td>
          </tr>
          <tr style={{ display: "center" }}>
            <td>
              <p>2020-21</p>
            </td>
            <td>
              <p>Digital Marketing</p>
            </td>
            <td>
              <p>01-12-2019-30-12-2019</p>
            </td>
            <td>
              <p>AOCCOM117</p>
            </td>
            <td>
              <p>Dr.M.Venkateswara Rao</p>
            </td>
            <td>
              <p>III BBA</p>
            </td>
          </tr>
          <tr style={{ display: "center" }}>
            <td>
              <p>2019-20</p>
            </td>
            <td>
              <p>Entrepreneurship Development Program</p>
            </td>
            <td>
              <p>01-02-2020 to 5-3-2020</p>
            </td>
            <td>
              <p>AOCCOM116</p>
            </td>
            <td>
              <p>Sri.P.Muralidhar</p>
            </td>
            <td>
              <p>III B.Com (TP)</p>
            </td>
          </tr>
          <tr style={{ display: "center" }}>
            <td>
              <p>2018-19</p>
            </td>
            <td>
              <p>Digital India</p>
            </td>
            <td>
              <p>10.12.2018 -21.01.2019</p>
            </td>
            <td>
              <p>AOCCOM 114</p>
            </td>
            <td>
              <p>N. Hemanth Kumar</p>
            </td>
            <td>
              <p>III B.Com (TP)</p>
            </td>
          </tr>
          <tr style={{ display: "center" }}>
            <td>
              <p>2018-19</p>
            </td>
            <td>
              <p>E-Banking</p>
            </td>
            <td>
              <p>02.07.2018-28.08.2018</p>
            </td>
            <td>
              <p>AOCCOM113</p>
            </td>
            <td>
              <p>Dr.K.Siva Prakasa Rao</p>
            </td>
            <td>
              <p>III B.Com (TP)</p>
            </td>
          </tr>
          <tr style={{ display: "center" }}>
            <td>
              <p>2017-18</p>
            </td>
            <td>
              <p>GST registration and filing of returns</p>
            </td>
            <td>
              <p>18.10.17 to 24.11.17</p>
            </td>
            <td>
              <p>AOCCOM 602</p>
            </td>
            <td>
              <p>T.V.V.G.Krishna</p>
            </td>
            <td>
              <p>III B.Com (TP)</p>
            </td>
          </tr>

          <tr style={{ display: "center" }}>
            <td>
              <p>2016-17</p>
            </td>
            <td>
              <p>Digital India</p>
            </td>
            <td>
              <p>18.10.16 to 08.11.16</p>
            </td>
            <td>
              <p>AOCCOM502</p>
            </td>
            <td>
              <p>T.V.V.G.Krishna</p>
            </td>
            <td>
              <p>II & III B.Com. (Computers)</p>
            </td>
          </tr>
          <tr style={{ display: "center" }}>
            <td>
              <p>2016-17</p>
            </td>
            <td>
              <p>Business Environment</p>
            </td>
            <td>
              <p>12.07.16 to 28.07.16</p>
            </td>
            <td>
              <p>AOCCOM 501</p>
            </td>
            <td>
              <p>K.Eswara Rao</p>
            </td>
            <td>
              <p>III B.Com (Gen)</p>
            </td>
          </tr>

          <tr style={{ display: "center" }}>
            <td>
              <p>2015-16</p>
            </td>
            <td>
              <p>Basic of Mutual Funds</p>
            </td>
            <td>
              <p>21.11.15 to 20.12.15</p>
            </td>
            <td>
              <p>AOCCOM402</p>
            </td>
            <td>
              <p>T.V.V.G.Krishna</p>
            </td>
            <td>
              <p>II B.com (TP)</p>
            </td>
          </tr>
          <tr style={{ display: "center" }}>
            <td>
              <p>2015-16</p>
            </td>
            <td>
              <p>Material Management</p>
            </td>
            <td>
              <p>08.07.15 to 18.08.15</p>
            </td>
            <td>
              <p>AOCCOM401</p>
            </td>
            <td>
              <p>D.Pavan Kumar</p>
            </td>
            <td>
              <p>III BBA</p>
            </td>
          </tr>
          <tr style={{ display: "center" }}>
            <td>
              <p>2014-15</p>
            </td>
            <td>
              <p>Marketing Management</p>
            </td>
            <td>
              <p>07.07.14 to 18.08.14</p>
            </td>
            <td>
              <p>AOCCOM301</p>
            </td>
            <td>
              <p>Dr.B.Ramaiah</p>
            </td>
            <td>
              <p>III B.com (Gen)</p>
            </td>
          </tr>
          <tr style={{ display: "center" }}>
            <td>
              <p>2014-15</p>
            </td>
            <td>
              <p>E-commerce</p>
            </td>
            <td>
              <p>04.09.14 to 06.10.14</p>
            </td>
            <td>
              <p>AOCCOM302</p>
            </td>
            <td>
              <p>K.Eswara Rao</p>
            </td>
            <td>
              <p>III B.com (Computers)</p>
            </td>
          </tr>
          <tr style={{ display: "center" }}>
            <td>
              <p>2013-14</p>
            </td>
            <td>
              <p>Commercial Banks</p>
            </td>
            <td>
              <p>12.07.13 to 06.08.13</p>
            </td>
            <td>
              <p>AOCCOM201</p>
            </td>
            <td>
              <p>Dr.B.Ramaiah</p>
            </td>
            <td>
              <p>II B.com (Gen)</p>
            </td>
          </tr>
          <tr style={{ display: "center" }}>
            <td>
              <p>2013-14</p>
            </td>
            <td>
              <p>Corporate Social Responsibility</p>
            </td>
            <td>
              <p>18.10.13 to 18.11.13</p>
            </td>
            <td>
              <p>AOCCOM202</p>
            </td>
            <td>
              <p>K.Eswara Rao</p>
            </td>
            <td>
              <p>III B.com (All)</p>
            </td>
          </tr>
          <tr style={{ display: "center" }}>
            <td>
              <p>2012-13</p>
            </td>
            <td>
              <p>Entrepreneurship Development</p>
            </td>
            <td>
              <p>06.07.12 to 06.08.12</p>
            </td>
            <td>
              <p>AOCCOM101</p>
            </td>
            <td>
              <p>Dr.B.Ramaiah</p>
            </td>
            <td>
              <p>II B.com (Gen)</p>
            </td>
          </tr>
          <tr style={{ display: "center" }}>
            <td>
              <p>2012-13</p>
            </td>
            <td>
              <p>Basics of Mutual Funds</p>
            </td>
            <td>
              <p>18.10.12 to 24.11.12</p>
            </td>
            <td>
              <p>AOCCOM102</p>
            </td>
            <td>
              <p>Dr.B.Ramaiah</p>
            </td>
            <td>
              <p>II B.com (Gen)</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CommerceAndManagementEvents;
