import React from "react";
import {getRequiredImgs} from '../../../../../Api/index'

const PhysicalEducationEvents = () => {
  const [apidata,setApiData] = React.useState([])

  const initialLoad = async() =>{
      let govt_folderId = '1hHuKyZla9FnZ-vnA_i2zaLDYI24C78Kk';
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
    <div>
      <div>
        <h2 style={{ textDecoration: "underline" }}>ACADEMIC YEAR 2020-2021</h2>
        <ul>
          <li style={{ color: "Highlight" }}>
            <a
              style={{ color: "Highlight" }}
              href={`https://drive.google.com/uc?id=${getImgData("YOGA%20DAY%20CELEBRATIONS-21.06.2020.pdf")}`}
              target="__blank"
            >
              YOGA Day Celebrations on 21st June, 2020.
            </a>{" "}
          </li>
        </ul>
      </div>
      <div>
        <h2 style={{ textDecoration: "underline" }}>ACADEMIC YEAR 2019-2020</h2>
        <ul>
          <li style={{ color: "Highlight" }}>
            <a
              style={{ color: "Highlight" }}
              href={`https://drive.google.com/uc?id=${getImgData("1-KRISHNA%20UNIVERSITY%20HANDBALL%20TOURNMENT%20-%202019-20.pdf")}`}
              target="__blank"
            >
              Krishna University Handball (W) Tournament on 30th October, 2019.
            </a>{" "}
          </li>
          <li style={{ color: "Highlight" }}>
            <a
              style={{ color: "Highlight" }}
              href={`https://drive.google.com/uc?id=${getImgData("2-AWARENESS%20PROGRAMME%20ON%20SPORTS%20INJURIES%20-%2029.9.2019.pdf")}`}
              target="__blank"
            >
              Awareness Programme on “Sports Injuries” on 29th September, 2019.
            </a>{" "}
          </li>
          <li style={{ color: "Highlight" }}>
            <a
              style={{ color: "Highlight" }}
              href={`https://drive.google.com/uc?id=${getImgData("NATIONAL%20SPORTS%20DAY.pdf")}`}
              target="__blank"
            >
              National Sports Day (Fit India Movement) on 29th August, 2019.
            </a>{" "}
          </li>
          <li style={{ color: "Highlight" }}>
            <a
              style={{ color: "Highlight" }}
              href={`https://drive.google.com/uc?id=${getImgData("4-INTERNATIONAL%20YOGA%20DAY%20-%2021.6.2019.pdf")}`}
              target="__blank"
            >
              World Yoga Day Celebrations on 21st June, 2019.
            </a>{" "}
          </li>
        </ul>
      </div>

      <h2 style={{ textDecoration: "underline" }}>ACADEMIC YEAR 2018-2019</h2>
      <ul>
        <li style={{ color: "Highlight" }}>
          <a
            style={{ color: "Highlight" }}
            href={`https://drive.google.com/uc?id=${getImgData("1-31.5.2019.pdf")}`}
            target="__blank"
          >
            FREE SUMMER COACHING CAMP–2018-19 VALEDICTORY SESSION 31ST MAY, 2019
            Organized by: Department of Physical Education.
          </a>{" "}
        </li>
        <li style={{ color: "Highlight" }}>
          <a
            style={{ color: "Highlight" }}
            href={`https://drive.google.com/uc?id=${getImgData("2-10.12.2018.pdf")}`}
            target="__blank"
          >
            Krishna University Inter–Collegiate Handball (W) Tournament–2018-19
            Organized by: Department of Physical Education on 10th
            December,2018.{" "}
          </a>{" "}
        </li>
        <li style={{ color: "Highlight" }}>
          <a
            style={{ color: "Highlight" }}
            href={`https://drive.google.com/uc?id=${getImgData("3-30-3.6.2018.pdf")}`}
            target="__blank"
          >
            3rd ANDHRA PRADESH YOUTH BASKET BALL Tournament–2018-19 Organized
            by:Department of Physical Education 30th May to 3rd June,2018.
          </a>{" "}
        </li>
      </ul>
      <h2 style={{ textDecoration: "underline" }}>ACADEMIC YEAR 2017-2018</h2>
      <ul>
        <li style={{ color: "Highlight" }}>
          <a
            style={{ color: "Highlight" }}
            href={`https://drive.google.com/uc?id=${getImgData("1.pdf")}`}
            target="__blank"
          >
            Krishna University Inter Collegiate Chess (Men & Women) Tournament.
          </a>{" "}
        </li>
        <li style={{ color: "Highlight" }}>
          <a
            style={{ color: "Highlight" }}
            href={`https://drive.google.com/uc?id=${getImgData("2.pdf")}`}
            target="__blank"
          >
            Krishna University Inter Collegiate Handball (Women) Tournament.
          </a>{" "}
        </li>
        <li style={{ color: "Highlight" }}>
          <a
            style={{ color: "Highlight" }}
            href={`https://drive.google.com/uc?id=${getImgData("3.pdf")}`}
            target="__blank"
          >
            Krishna University Inter Collegiate Judo (Men) Tournament.{" "}
          </a>{" "}
        </li>
        <li style={{ color: "Highlight" }}>
          <a
            style={{ color: "Highlight" }}
            href={`https://drive.google.com/uc?id=${getImgData("4-Summer%20Coachig%20camp-17-18.pdf")}`}
            target="__blank"
          >
            Summer Coaching Camp in Cricket, Handball, Chess, Basket Ball &
            Skating.
          </a>{" "}
        </li>
      </ul>
      <h2 style={{ textDecoration: "underline" }}>ACADEMIC YEAR 2016-2017</h2>
      <ul>
        <li style={{ color: "Highlight" }}>
          <a
            style={{ color: "Highlight" }}
            href={`https://drive.google.com/uc?id=${getImgData("5.pdf")}`}
            target="__blank"
          >
            Krishna University Inter Collegiate Table Tennis (Men & Women)
            Tournament.{" "}
          </a>{" "}
        </li>
        <li style={{ color: "Highlight" }}>
          <a
            style={{ color: "Highlight" }}
            href={`https://drive.google.com/uc?id=${getImgData("6.pdf")}`}
            target="__blank"
          >
            Krishna University Inter Collegiate Handball (Women) Tournament.
          </a>{" "}
        </li>
        <li style={{ color: "Highlight" }}>
          <a
            style={{ color: "Highlight" }}
            href={`https://drive.google.com/uc?id=${getImgData("7.pdf")}`}
            target="__blank"
          >
            Summer Coaching Camp in Cricket, Handball, Chess, Basket Ball &
            Table Tennis.
          </a>{" "}
        </li>
      </ul>
      <h2 style={{ textDecoration: "underline" }}>ACADEMIC YEAR 2015-2016</h2>
      <ul>
        <li style={{ color: "Highlight" }}>
          <a
            style={{ color: "Highlight" }}
            href={`https://drive.google.com/uc?id=${getImgData("8.pdf")}`}
            target="__blank"
          >
            Krishna University Inter Collegiate Handball (Women) Tournament.
          </a>{" "}
        </li>
        <li style={{ color: "Highlight" }}>
          <a
            style={{ color: "Highlight" }}
            href={`https://drive.google.com/uc?id=${getImgData("9.pdf")}`}
            target="__blank"
          >
            Krishna University Inter Collegiate Weight Lifting, Power lifting
            (Men) & Best Physique (Men) Tournament.
          </a>{" "}
        </li>
        <li style={{ color: "Highlight" }}>
          <a style={{ color: "Highlight" }} href="###" target="__blank">
            Summer Coaching Camp in Cricket, Handball, Basket Ball, Chess &
            Table Tennis.
          </a>{" "}
        </li>
      </ul>
      <h2 style={{ textDecoration: "underline" }}>ACADEMIC YEAR 2014-2015</h2>
      <ul>
        <li style={{ color: "Highlight" }}>
          <a
            style={{ color: "Highlight" }}
            href={`https://drive.google.com/uc?id=${getImgData("11.pdf")}`}
            target="__blank"
          >
            Krishna University Inter Collegiate Handball (Men & Women)
            Tournament.
          </a>{" "}
        </li>
        <li style={{ color: "Highlight" }}>
          <a
            style={{ color: "Highlight" }}
            href={`https://drive.google.com/uc?id=${getImgData("12.pdf")}`}
            target="__blank"
          >
            Krishna University Inter Collegiate Basketball (Men) Tournament.
          </a>{" "}
        </li>
        <li style={{ color: "Highlight" }}>
          <a
            style={{ color: "Highlight" }}
            href={`https://drive.google.com/uc?id=${getImgData("13-12&13.03.2015.pdf")}`}
            target="__blank"
          >
            UGC Sponsored National Seminar on "Importance of Sports to Improve
            the Quality Education on 12th & 13th March, 2015.
          </a>{" "}
        </li>
        <li style={{ color: "Highlight" }}>
          <a style={{ color: "Highlight" }} href="###" target="__blank">
            Summer Coaching Camp in Cricket, Handball, Chess, Table Tennis &
            Basket Ball.
          </a>{" "}
        </li>
      </ul>

      <h2 style={{ textDecoration: "underline" }}>ACADEMIC YEAR 2013-2014</h2>
      <ul>
        <li style={{ color: "Highlight" }}>
          <a
            style={{ color: "Highlight" }}
            href={`https://drive.google.com/uc?id=${getImgData("15.pdf")}`}
            target="__blank"
          >
            Krishna University Inter Collegiate Handball (Women) Tournament.
          </a>{" "}
        </li>
        <li style={{ color: "Highlight" }}>
          <a style={{ color: "Highlight" }} href="##" target="__blank">
            Summer Coaching Camp in Cricket, Handball, Chess, Table Tennis &
            Basket Ball.
          </a>{" "}
        </li>
      </ul>
    </div>
  );
};

export default PhysicalEducationEvents;
