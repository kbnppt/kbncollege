import React from 'react'
import {getRequiredImgs} from '../../../../../Api/index'

const EngMore = () => {

    const [apidata,setApiData] = React.useState([])

    const initialLoad = async() =>{
        let govt_folderId = '1OT1owd9RPNYAegQu7YqNbH_upQKR67f_';
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
            <h1 style={{ textAlign: 'center' }}>DEPARTMENT OF ENGLISH</h1>

            <div>
                <h2 style={{ textDecoration: 'underline' }}>Best Practices</h2>
                <ul>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('BEST%20PRACTICE2019.pdf')}`} target='__blank'>Best Practice</a> </li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('english_BestPractice1.pdf')}`} target='__blank'>Department Library</a> </li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('english_BestPracticeII.pdf')}`} target='__blank'>Helping Students to participate in Debates, Elocution, Essay Writing and Story Telling Competitions</a> </li>
                </ul>
            </div>
            <div>
                <h2 style={{ textDecoration: 'underline' }}>Innovative Practices</h2>
                <ul>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('Innovative%20Practice.pdf')}`} target='__blank'>INNOVATIVE PRACTICE</a> </li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('english_InnovativePractice-I.pdf')}`} target='__blank'>Interpersonal Skills</a> </li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('english_InnovativePractice_II.pdf')}`} target='__blank'>Language Laboratory</a> </li>
                </ul>
            </div>
            <div>
                <h2>Add -on Programms</h2>
                <table className="table table-bordered" >
                    <tbody>
                        <tr>
                            <td >
                                <p><strong>S. No</strong></p>
                            </td>
                            <td >
                                <p><strong>YEAR</strong></p>
                            </td>
                            <td>
                                <p><strong>TOPIC</strong></p>
                            </td>
                            <td >
                                <p><strong>Period</strong></p>
                            </td>
                            <td>
                                <p><strong>CODE</strong></p>
                            </td>
                            <td>
                                <p><strong>Resource Person</strong></p>
                            </td>
                            <td >
                                <p><strong>Class</strong></p>
                            </td>

                        </tr>
                        <tr>
                            <td >
                                <p>1</p>
                            </td>
                            <td >
                                <p>2021-22</p>
                            </td>
                            <td>
                                <p>Communication Skills in English</p>
                            </td>
                            <td >
                                <p>1-12-2022 to 6-12-2022</p>
                            </td>
                            <td>
                                <p><strong>AOCENG501</strong></p>
                            </td>
                            <td>
                                <p>Smt K.Radha</p>
                            </td>
                            <td >
                                <p>II Year Degree</p>
                            </td>

                        </tr>
                        <tr>
                            <td >
                                <p>2</p>
                            </td>
                            <td >
                                <p>2020-21</p>
                            </td>
                            <td>
                                <p>Communicative English</p>
                            </td>
                            <td >
                                <p>14-11-2020 to 18-12-2020</p>
                            </td>
                            <td>
                                <p><strong>AOCENG401</strong></p>
                            </td>
                            <td>
                                <p>Dr Ch. Anuradha</p>
                            </td>
                            <td >
                                <p>II Year Degree</p>
                            </td>

                        </tr>
                        <tr>
                            <td >
                                <p>3</p>
                            </td>
                            <td >
                                <p>2019-20</p>
                            </td>
                            <td>
                                <p>Communication Skills in English</p>
                            </td>
                            <td >
                                <p>1-07-2019 to 3-08-2019</p>
                            </td>
                            <td>
                                <p><strong>AOCENG301</strong></p>
                            </td>
                            <td>
                                <p>Sri E. varaprasad</p>
                            </td>
                            <td >
                                <p>II Year Degree</p>
                            </td>

                        </tr>




                        <tr>
                            <td >
                                <p>4</p>
                            </td>
                            <td >
                                <p>2018-19</p>
                            </td>
                            <td>
                                <p>Communicative English</p>
                            </td>
                            <td >
                                <p>02.07.2018-31.07.2018</p>
                            </td>
                            <td>
                                <p><strong>AOCENG201</strong></p>
                            </td>
                            <td>
                                <p>E.KALAVATHI</p>
                            </td>
                            <td >
                                <p>II Year Degree</p>
                            </td>

                        </tr>
                        <tr>
                            <td >
                                <p>5</p>
                            </td>
                            <td >
                                <p>2017-18</p>
                            </td>
                            <td>
                                <p>Communicative English</p>
                            </td>
                            <td >
                                <p>01.07.2017-31.07.2017</p>
                            </td>
                            <td>
                                <p><strong>AOCENG102</strong></p>
                            </td>
                            <td>
                                <p>Ms.G.Visali</p>
                            </td>
                            <td >
                                <p>II Year Degree</p>
                            </td>

                        </tr>




                        <tr>
                            <td >
                                <p>6</p>
                            </td>
                            <td >
                                <p>2016-17</p>
                            </td>
                            <td>
                                <p>Communication skills</p>
                            </td>
                            <td >
                                <p>01.07.2016-31.07.2016</p>
                            </td>
                            <td>
                                <p><strong>AOCENG101</strong></p>
                            </td>
                            <td>
                                <p>Mr.E.Vara Prasad</p>
                            </td>
                            <td >
                                <p>II Year Degree</p>
                            </td>

                        </tr>
                        <tr>
                            <td >
                                <p>7</p>
                            </td>
                            <td >
                                <p>2015-16</p>
                            </td>
                            <td>
                                <p>Communication skills</p>
                            </td>
                            <td >
                                <p>01.07.2015-31.07.2015</p>
                            </td>
                            <td>
                                <p><strong>AOCENG101</strong></p>
                            </td>
                            <td>
                                <p>Mrs.S.Santha Kumari</p>
                            </td>
                            <td >
                                <p>II Year Degree</p>
                            </td>

                        </tr>
                        <tr>
                            <td >
                                <p>8</p>
                            </td>
                            <td >
                                <p>2014-15</p>
                            </td>
                            <td>
                                <p>Communication skills</p>
                            </td>
                            <td >
                                <p>01.07.2014-31.07.2014</p>
                            </td>
                            <td>
                                <p><strong>AOCENG101</strong></p>
                            </td>
                            <td>
                                <p>Dr. Ch.Anuradha</p>
                            </td>
                            <td >
                                <p>II Year Degree</p>
                            </td>

                        </tr>
                        <tr>
                            <td >
                                <p>9</p>
                            </td>
                            <td >
                                <p>2013-14</p>
                            </td>
                            <td>
                                <p>Communication skills</p>
                            </td>
                            <td >
                                <p>01.07.2013-31.07.2013</p>
                            </td>
                            <td>
                                <p><strong>AOCENG101</strong></p>
                            </td>
                            <td>
                                <p>Mr.N.Victor David Dinakaran</p>
                            </td>
                            <td >
                                <p>II Year Degree</p>
                            </td>

                        </tr>
                        <tr>
                            <td >
                                <p>10</p>
                            </td>
                            <td >
                                <p>2012-13</p>
                            </td>
                            <td>
                                <p>Communication skills</p>
                            </td>
                            <td >
                                <p>02.07.2012-31.07.2012</p>
                            </td>
                            <td>
                                <p><strong>AOCENG101</strong></p>
                            </td>
                            <td>
                                <p>Mr.N.Victor David Dinakaran</p>
                            </td>
                            <td >
                                <p>II Year Degree</p>
                            </td>

                        </tr>
                    </tbody>
                </table>
            </div>
            <div>
                <h2 style={{ textDecoration: 'underline' }}>Consultancey Services</h2>
                <ul>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('consultancy.pdf')}`} target='__blank'>consultancy services</a> </li>
                </ul>
            </div>
            <div>
                <h2 style={{ textDecoration: 'underline' }}>BOS</h2>
                <ul>
                    {/* <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href='/images/kbnnewimg/all/ach/mainimgs/BOS%20-%20ENGLISH%20-%202019-20.pdf' target='__blank'>BOS CERTIFICATE 2019-20</a> </li> */}
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('BOSENGLISH2018-2019.pdf')}`} target='__blank'>BOS CERTIFICATE 2018-2019</a> </li>

                </ul>
            </div>
            <div>
                <h2 style={{ textDecoration: 'underline' }}>Videos</h2>
            </div>

        </div>
    )
}

export default EngMore