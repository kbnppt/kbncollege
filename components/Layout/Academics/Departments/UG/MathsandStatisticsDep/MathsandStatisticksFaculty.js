import React from 'react'
import {getRequiredImgs} from '../../../../../Api/index'

const MathsandStatisticksFaculty = () => {

    const [apidata,setApiData] = React.useState([])
    const [apidata1,setApiData1] = React.useState([])

    const initialLoad = async() =>{
        let govt_folderId = '1vjXqZcv6LhNTNZKjGVLF8WXNUjHgYzpS';
        let govt_sector1 = '1JbUgzvpwZ4crNMNaSh7j_v95JCV8Xi5e'
        let data = await getRequiredImgs(govt_folderId);
        let data1 = await getRequiredImgs(govt_sector1);
        setApiData(data?.files)
        setApiData1(data1?.files)
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

    const getImgData1 = (data) =>{
        let value = data?.split('%20')?.join(' ');
        let filterValue = apidata1?.find((e)=>e?.name == value);
        if(filterValue){
            return filterValue?.id
        }
        return '1mOfBNITDbkyBcSwLI0A87bJY5nvNNm4E'
    }

    return (

        <div style={{ display: "flex", justifyContent: 'space-between', flexWrap: 'wrap' }} >
            <div>
                <img src={`https://drive.google.com/uc?id=${getImgData1('lakshmiprasanna.png')}`} alt='Faculty' style={{ height: '200px', width: '200px' }} />
                <div style={{ textAlign: "center" }}>
                    <a href={`https://drive.google.com/uc?id=${getImgData('1-staff profile - M.L prasanna.pdf')}`} target='__blank'> <h3>M L PRASANNA</h3></a>
                    <p>Faculty</p>
                </div>
            </div>
            <div >
                <div>
                    <img src={`https://drive.google.com/uc?id=${getImgData1('radika.png')}`} alt='Faculty' style={{ height: '200px', width: '200px' }} />
                    <div style={{ textAlign: 'center' }}>
                        <a href={`https://drive.google.com/uc?id=${getImgData('2-Radhika madam profile.pdf')}`} target='__blank'> <h3>CH RADHIKA</h3></a>
                        <p>Faculty</p>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <img src={`https://drive.google.com/uc?id=${getImgData1('vijay.png')}`} alt='Faculty' style={{ height: '200px', width: '200px' }} />
                    <div style={{ textAlign: 'center' }}>
                        <a href={`https://drive.google.com/uc?id=${getImgData('3-vijay profile.pdf')}`} target='__blank'> <h3>L VIJAY KUMAR</h3></a>
                        <p>Faculty</p>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <img src={`https://drive.google.com/uc?id=${getImgData1('suryanarayana.png')}`} alt='Faculty' style={{ height: '200px', width: '200px' }} />
                    <div style={{ textAlign: 'center' }}>
                        <a href={`https://drive.google.com/uc?id=${getImgData('4-Staff Profile SURYANARAYANA.pdf')}`} target='__blank'> <h3>G SURYA NARAYANA</h3></a>
                        <p>Faculty</p>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <img src={`https://drive.google.com/uc?id=${getImgData1('vanamadevi.png')}`} alt='Faculty' style={{ height: '200px', width: '200px' }} />
                    <div style={{ textAlign: 'center' }}>
                        <a href={`https://drive.google.com/uc?id=${getImgData('5-Staff Profile vanama.pdf')}`} target='__blank'> <h3>K VANAM</h3></a>
                        <p>Faculty</p>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <img src={`https://drive.google.com/uc?id=${getImgData1('mahinadh.png')}`} alt='Faculty' style={{ height: '200px', width: '200px' }} />
                    <div style={{ textAlign: 'center' }}>
                        <a href={`https://drive.google.com/uc?id=${getImgData('6-Mahinadh profile.pdf')}`} target='__blank'> <h3>CH MAHINADH</h3></a>
                        <p>Faculty</p>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <img src={`https://drive.google.com/uc?id=${getImgData1('rahamthulla.png')}`} alt='Faculty' style={{ height: '200px', width: '200px' }} />
                    <div style={{ textAlign: 'center' }}>
                        <a href={`https://drive.google.com/uc?id=${getImgData('7-SRT PROFILE.pdf')}`} target='__blank'> <h3>SHAIK RAHAMTHULLA</h3></a>
                        <p>Faculty</p>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <img src={`https://drive.google.com/uc?id=${getImgData1('jayabarathi.png')}`} alt='Faculty' style={{ height: '200px', width: '200px' }} />
                    <div style={{ textAlign: 'center' }}>
                        <a href={`https://drive.google.com/uc?id=${getImgData('8-Staff Profile jaya bharathi.pdf')}`} target='__blank'> <h3>S JAYA BHARATHI</h3></a>
                        <p>Faculty</p>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <img src={`https://drive.google.com/uc?id=${getImgData1('kamalabegam1.png')}`} alt='Faculty' style={{ height: '200px', width: '200px' }} />
                    <div style={{ textAlign: 'center' }}>
                        <a href={`https://drive.google.com/uc?id=${getImgData('9-Staff Profile Kalma.pdf')}`} target='__blank'> <h3>P.KALMA BEGUM</h3></a>
                        <p>Faculty</p>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <img src={`https://drive.google.com/uc?id=${getImgData1('sitaratnam.png')}`} alt='Faculty' style={{ height: '200px', width: '200px' }} />
                    <div style={{ textAlign: 'center' }}>
                        <a href={`https://drive.google.com/uc?id=${getImgData('10-Staff Profile Sita.pdf')}`} target='__blank'> <h3>G.SITA RATNAM</h3></a>
                        <p>Faculty</p>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <img src={`https://drive.google.com/uc?id=${getImgData1('sowjanya.png')}`} alt='Faculty' style={{ height: '200px', width: '200px' }} />
                    <div style={{ textAlign: 'center' }}>
                        <a href={`https://drive.google.com/uc?id=${getImgData('11-sowjanya madam profile.pdf')}`} target='__blank'> <h3>K SOWJANYA</h3></a>
                        <p>Faculty</p>
                    </div>
                </div>
            </div>

            <div>
                <div>
                    <img src={`https://drive.google.com/uc?id=${getImgData1('shalini.png')}`} alt='Faculty' style={{ height: '200px', width: '200px' }} />
                    <div style={{ textAlign: 'center' }}>
                        <a href={`https://drive.google.com/uc?id=${getImgData('12-staff profile shalini.pdf')}`} target='__blank'> <h3>CH SHALINI</h3></a>
                        <p>Faculty</p>
                    </div>
                </div>
            </div>


        </div>





    )
}

export default MathsandStatisticksFaculty;