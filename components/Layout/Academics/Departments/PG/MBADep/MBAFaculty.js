import React from 'react'
import {getRequiredImgs} from '../../../../../Api/index'

const MBAFaculty = () => {

    const [apidata,setApiData] = React.useState([])
    const [apidata1,setApiData1] = React.useState([])

    const initialLoad = async() =>{
        let folderId = '1vjXqZcv6LhNTNZKjGVLF8WXNUjHgYzpS';
        let folderId1 = '1JbUgzvpwZ4crNMNaSh7j_v95JCV8Xi5e'
        let data = await getRequiredImgs(folderId);
        let data1 = await getRequiredImgs(folderId1);
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

        <div style={{ display: "flex", justifyContent: 'space-between', flexWrap: 'wrap' }}>
            <div>
                <img src={`https://drive.google.com/uc?id=${getImgData1('venkataramana.PNG')}`} alt='Faculty' style={{ height: '200px', width: '200px' }} />
                <div style={{ textAlign: 'center' }}>
                    <a href={`https://drive.google.com/uc?id=${getImgData('1-Dr. S. VENKATA RAMANA.pdf')}`} target='__blank'> <h3>Dr.S.VENKATA RAMANA</h3></a>
                    <p>Faculty</p>
                </div>
            </div>

            <div>
                <img src={`https://drive.google.com/uc?id=${getImgData1('prabhakar.PNG')}`} alt='Faculty' style={{ height: '200px', width: '200px' }} />
                <div style={{ textAlign: 'center' }}>
                    <a href={`https://drive.google.com/uc?id=${getImgData('0-B.Prabhakar.pdf')}`} target='__blank'> <h3>B.PRABHAKAR</h3></a>
                    <p>Faculty</p>
                </div>
            </div>
            <div>
                <img src={`https://drive.google.com/uc?id=${getImgData1('venkatesh.png')}`} alt='Faculty' style={{ height: '200px', width: '200px' }} />
                <div style={{ textAlign: 'center' }}>
                    <a href={`https://drive.google.com/uc?id=${getImgData('attachments/3-S.Venkatesh.pdf')}`} target='__blank'> <h3>S.Venkatesh</h3></a>
                    <p>Faculty</p>
                </div>
            </div>
            <div>
                <img src='https://drive.google.com/uc?id=1t8TJlBtTMaHOPu3TW2OJ7e3Pl4WzBe0i' alt='Faculty' style={{ height: '200px', width: '200px' }} />
                <div style={{ textAlign: 'center' }}>
                    <a href={`https://drive.google.com/uc?id=${getImgData('4- D. LAKSHMI PRATYSUAH.pdf')}`} target='__blank'> <h3>D.L.PRATYUSHA</h3></a>
                    <p>Faculty</p>
                </div>
            </div>
            <div>
                <img src={`https://drive.google.com/uc?id=${getImgData1('ravikiran.PNG')}`} alt='Faculty' style={{ height: '200px', width: '200px' }} />
                <div style={{ textAlign: 'center' }}>
                    <a href={`https://drive.google.com/uc?id=${getImgData('5-A. RAVI KIRAN.pdf')}`} target='__blank'> <h3>A.Ravi Kiran</h3></a>
                    <p>Faculty</p>
                </div>
            </div>
            <div>
                <img src='https://drive.google.com/uc?id=1n6NfivYZAYEaTk0r9JrExfunk8aCNhmh' alt='Faculty' style={{ height: '200px', width: '200px' }} />
                <div style={{ textAlign: 'center' }}>
                    <a href={`https://drive.google.com/uc?id=${getImgData('6-Y. JAGADEESH.pdf')}`} target='__blank'> <h3>Y.JAGADEESH</h3></a>
                    <p>Faculty</p>
                </div>
            </div>
            <div>
                <img src={`https://drive.google.com/uc?id=${getImgData1('pavankumar.PNG')}`} alt='Faculty' style={{ height: '200px', width: '200px' }} />
                <div style={{ textAlign: 'center' }}>
                    <a href={`https://drive.google.com/uc?id=${getImgData('7-D. PAVAN KUMAR.pdf')}`} target='__blank'> <h3>D.PAVAN KUMAR</h3></a>
                    <p>Faculty</p>
                </div>
            </div>
            <div>
                <img src={`https://drive.google.com/uc?id=${getImgData1('suresh.PNG')}`} alt='Faculty' style={{ height: '200px', width: '200px' }} />
                <div style={{ textAlign: 'center' }}>
                    <a href={`https://drive.google.com/uc?id=${getImgData('8-S. SURESH BABU.pdf')}`} target='__blank'> <h3>S.SURESH BABU</h3></a>
                    <p>Faculty</p>
                </div>
            </div>
            <div>
                <img src={`https://drive.google.com/uc?id=${getImgData1('ravindranadh.PNG')}`} alt='Faculty' style={{ height: '200px', width: '200px' }} />
                <div style={{ textAlign: 'center' }}>
                    <a href={`https://drive.google.com/uc?id=${getImgData('9-CH. RAVINDRANATH.pdf')}`} target='__blank'> <h3>CH.RAVINDRANATH</h3></a>
                    <p>Faculty</p>
                </div>
            </div>
            <div>
                <img src={`https://drive.google.com/uc?id=${getImgData1('sailajav.PNG')}`} alt='Faculty' style={{ height: '200px', width: '200px' }} />
                <div style={{ textAlign: 'center' }}>
                    <a href={`https://drive.google.com/uc?id=${getImgData('10-V. SAILAJA.pdf')}`} target='__blank'> <h3>V.SAILAJA</h3></a>
                    <p>Faculty</p>
                </div>
            </div>
            <div>
                <img src={`https://drive.google.com/uc?id=${getImgData1('hemanthkumar.PNG')}`} alt='Faculty' style={{ height: '200px', width: '200px' }} />
                <div style={{ textAlign: 'center' }}>
                    <a href={`https://drive.google.com/uc?id=${getImgData('11- N. HEMANTH KUMAR.pdf')}`} target='__blank'> <h3>N.HEMANTH KUMAR</h3></a>
                    <p>Faculty</p>
                </div>
            </div>
            <div>
                <img src={`https://drive.google.com/uc?id=${getImgData1('m.venkateswararao.PNG')}`} alt='Faculty' style={{ height: '200px', width: '200px' }} />
                <div style={{ textAlign: 'center' }}>
                    <a href={`https://drive.google.com/uc?id=${getImgData('12-Dr. M. VENKATESWARA RAO.pdf')}`} target='__blank'> <h3>Dr.M.VENKATESWARA RAO</h3></a>
                    <p>Faculty</p>
                </div>
            </div>
            <div>
                <img src={`https://drive.google.com/uc?id=${getImgData1('a.srinivasrao.PNG')}`} alt='Faculty' style={{ height: '200px', width: '200px' }} />
                <div style={{ textAlign: 'center' }}>
                    <a href={`https://drive.google.com/uc?id=${getImgData('13-Dr. A. SRINIVASA RAO.pdf')}`} target='__blank'> <h3>Dr.A.SRINIVASA RAO</h3></a>
                    <p>Faculty</p>
                </div>
            </div>
        </div>



    )
}

export default MBAFaculty;
