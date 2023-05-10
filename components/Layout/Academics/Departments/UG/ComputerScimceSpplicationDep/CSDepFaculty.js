import React from 'react'
import {getRequiredImgs} from '../../../../../Api/index'

const CSDepFaculty = () => {
    const [apidata,setApiData] = React.useState([])
    const [apidata1,setApiData1] = React.useState([])

    const initialLoad = async() =>{
        let govt_folderId = '1vjXqZcv6LhNTNZKjGVLF8WXNUjHgYzpS';
        let govt_folderId1 = '1JbUgzvpwZ4crNMNaSh7j_v95JCV8Xi5e';
        let data = await getRequiredImgs(govt_folderId);
        let data1 = await getRequiredImgs(govt_folderId1);
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
        let value = data;
        let filterValue = apidata1?.find((e)=>e?.name.toLocaleLowerCase().trim() == value.toLocaleLowerCase().trim());
        if(filterValue){
            return filterValue?.id
        }
        return '1mOfBNITDbkyBcSwLI0A87bJY5nvNNm4E'
    }


    return (
        <div>
            <div style={{ display: "flex", justifyContent: 'space-between', flexWrap: 'wrap' }}>
                <div>
                    <img src={`https://drive.google.com/uc?id=${getImgData1('plramesh.png')}`} alt='Faculty' style={{ height: '200px', width: '200px' }} />
                    <div style={{ textAlign: 'center' }}>
                        <a href={`https://drive.google.com/uc?id=${getImgData('PL RAMESH -11.4.2022.pdf')}`} > <h3>P L RAMESH</h3></a>
                        <p>Faculty</p>
                    </div>
                </div>
                <div>
                    <img src={`https://drive.google.com/uc?id=${getImgData1('ravindra.jpg')}`} alt='Faculty' style={{ height: '200px', width: '200px' }} />
                    <div style={{ textAlign: 'center' }}>
                        <a href={`https://drive.google.com/uc?id=${getImgData('2-P. RAVINDRA.pdf')}`} > <h3>P. RAVINDRA</h3></a>
                        <p>Faculty</p>
                    </div>
                </div>
                <div>
                    <img src={`https://drive.google.com/uc?id=${getImgData1('vasu.png')}`} alt='Faculty' style={{ height: '200px', width: '200px' }} />
                    <div style={{ textAlign: 'center' }}>
                        <a href={`https://drive.google.com/uc?id=${getImgData('3-S. VASU.pdf')}`} > <h3>S.VASU</h3></a>
                        <p>Faculty</p>
                    </div>
                </div>
                <div>
                    <img src={`https://drive.google.com/uc?id=${getImgData1('suresh.png')}`} alt='Faculty' style={{ height: '200px', width: '200px' }} />
                    <div style={{ textAlign: 'center' }}>
                        <a href={`https://drive.google.com/uc?id=${getImgData('4-V. SURESH.pdf')}`} > <h3>V.SURESH</h3></a>
                        <p>Faculty</p>
                    </div>
                </div>
                <div>
                    <img src={`https://drive.google.com/uc?id=${getImgData1('swathi@cse.png')}`} alt='Faculty' style={{ height: '200px', width: '200px' }} />
                    <div style={{ textAlign: 'center' }}>
                        <a href={`https://drive.google.com/uc?id=${getImgData('5-P. SWATHI.pdf')}`} > <h3>P SWATHI</h3></a>
                        <p>Faculty</p>
                    </div>
                </div>
                <div>
                    <img src={`https://drive.google.com/uc?id=${getImgData1('bangarulakshmi.png')}`} alt='Faculty' style={{ height: '200px', width: '200px' }} />
                    <div style={{ textAlign: 'center' }}>
                        <a href={`https://drive.google.com/uc?id=${getImgData('6-K. BANGARU LAKSHMI.pdf')}`} > <h3>V.BANGARU LAKSHMI</h3></a>
                        <p>Faculty</p>
                    </div>
                </div>
                <div>
                    <img src={`https://drive.google.com/uc?id=1q_UTpB2A2iSHOocO94YyY2g27ieDixRk`} alt='Faculty' style={{ height: '200px', width: '200px' }} />
                    <div style={{ textAlign: 'center' }}>
                        <a href={`https://drive.google.com/uc?id=${getImgData('7-M. KALA DEVI.pdf')}`} > <h3>M.KALA DEVI</h3></a>
                        <p>Faculty</p>
                    </div>
                </div>

                <div>
                    <img src={`https://drive.google.com/uc?id=${getImgData1('YSR.PNG')}`} alt='Faculty' style={{ height: '200px', width: '200px' }} />
                    <div style={{ textAlign: 'center' }}>
                        <a href={`https://drive.google.com/uc?id=${getImgData('YSR -COMPUTERS.pdf')}`} > <h3>Y SRINIVASA RAO</h3></a>
                        <p>Faculty</p>
                    </div>
                </div>
                <div>
                    <img src={`https://drive.google.com/uc?id=${getImgData1('gowthamip.PNG')}`} alt='Faculty' style={{ height: '200px', width: '200px' }} />
                    <div style={{ textAlign: 'center' }}>
                        <a href={`https://drive.google.com/uc?id=${getImgData('P. GOWTHAMI DEVI.pdf')}`} > <h3>P. GOWTHAMI DEVI</h3></a>
                        <p>Faculty</p>
                    </div>
                </div>
                <div>
                    <img src={`https://drive.google.com/uc?id=${getImgData1('gowthamip.PNG')}`} alt='Faculty' style={{ height: '200px', width: '200px' }} />
                    <div style={{ textAlign: 'center' }}>
                        <a href={`https://drive.google.com/uc?id=${getImgData('P. GOWTHAMI DEVI.pdf')}`} > <h3>K.V.L.N PRASAD</h3></a>
                        <p>Faculty</p>
                    </div>
                </div>

                <div>
                    <img src={`https://drive.google.com/uc?id=${getImgData1('asiya.PNG')}`} alt='Faculty' style={{ height: '200px', width: '200px' }} />
                    <div style={{ textAlign: 'center' }}>
                        <a href={`https://drive.google.com/uc?id=${getImgData('10-SK. ASIYA BEGUM.pdf')}`} > <h3>SK. ASIYA BEGUM</h3></a>
                        <p>Faculty</p>
                    </div>
                </div>
                <div>
                    <img src={`https://drive.google.com/uc?id=${getImgData1('madhuri.PNG')}`} alt='Faculty' style={{ height: '200px', width: '200px' }} />
                    <div style={{ textAlign: 'center' }}>
                        <a href={`https://drive.google.com/uc?id=${getImgData('11-G. MADHURI.pdf')}`} > <h3>G. MADHURI</h3></a>
                        <p>Faculty</p>
                    </div>
                </div>
                <div>
                    <img src={`https://drive.google.com/uc?id=${getImgData1('tejasri.PNG')}`} alt='Faculty' style={{ height: '200px', width: '200px' }} />
                    <div style={{ textAlign: 'center' }}>
                        <a href={`https://drive.google.com/uc?id=${getImgData('12-O. TEJA SRI.pdf')}`} > <h3>O.TEJA SRI</h3></a>
                        <p>Faculty</p>
                    </div>
                </div>
                <div>
                    <img src={`https://drive.google.com/uc?id=${getImgData1('santhibabu.PNG')}`} alt='Faculty' style={{ height: '200px', width: '200px' }} />
                    <div style={{ textAlign: 'center' }}>
                        <a href={`https://drive.google.com/uc?id=${getImgData('13-M. SANTHI BABU.pdf')}`} > <h3>M. SANTHI BABU</h3></a>
                        <p>Faculty</p>
                    </div>
                </div>
                <div>
                    <img src={`https://drive.google.com/uc?id=${getImgData1('madhusudhana.PNG')}`} alt='Faculty' style={{ height: '200px', width: '200px' }} />
                    <div style={{ textAlign: 'center' }}>
                        <a href={`https://drive.google.com/uc?id=${getImgData('14-B. MADHU SUDHANA RAO.pdf')}`} > <h3>B.MADHU SUDHANA RAO</h3></a>
                        <p>Faculty</p>
                    </div>
                </div>

                <div>
                    <img src={`https://drive.google.com/uc?id=${getImgData1('balaji.PNG')}`} alt='Faculty' style={{ height: '200px', width: '200px' }} />
                    <div style={{ textAlign: 'center' }}>
                        <a href={`https://drive.google.com/uc?id=${getImgData('15-J. BALAJI.pdf')}`} > <h3>J. BALAJI</h3></a>
                        <p>Faculty</p>
                    </div>
                </div>

                <div>
                    <img src={`https://drive.google.com/uc?id=${getImgData1('manaswini.PNG')}`} alt='Faculty' style={{ height: '200px', width: '200px' }} />
                    <div style={{ textAlign: 'center' }}>
                        <a href={`https://drive.google.com/uc?id=${getImgData('16-NVL MANASWINI.pdf')}`} > <h3>NVL MANASWINI</h3></a>
                        <p>Faculty</p>
                    </div>
                </div>

                <div>
                    <img src={`https://drive.google.com/uc?id=1hbB9eWjcp3Ab_LQT6ZBpoxWqYHDryJot`} alt='Faculty' style={{ height: '200px', width: '200px' }} />
                    <div style={{ textAlign: 'center' }}>
                        <a href={`https://drive.google.com/uc?id=${getImgData('17-ARUNA.pdf')}`} > <h3>ARUNA</h3></a>
                        <p>Faculty</p>
                    </div>
                </div>




            </div>
        </div>
    )
}

export default CSDepFaculty;