import React from 'react'
import {getRequiredImgs} from '../../../../../Api/index'

const MCAFaculty = () => {

    const [apidata,setApiData] = React.useState([])
    const [apidata2,setApiData2] = React.useState([])

    const initialLoad = async() =>{
        let folderId1 = '1JbUgzvpwZ4crNMNaSh7j_v95JCV8Xi5e'
        let folderId = '1vjXqZcv6LhNTNZKjGVLF8WXNUjHgYzpS'
        
        let data1 = await getRequiredImgs(folderId1);
        let data2 = await getRequiredImgs(folderId);
        setApiData2(data2?.files)
        setApiData(data1?.files)
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

    const getImgData2 = (data) =>{
        let value = data?.split('%20')?.join(' ');
        let filterValue = apidata2?.find((e)=>e?.name == value);
        if(filterValue){
            return filterValue?.id
        }
        return '1mOfBNITDbkyBcSwLI0A87bJY5nvNNm4E'
    }

    return (
        <div>
            <div style={{ display: "flex", justifyContent: 'space-between', flexWrap: 'wrap' }}>
                <div>
                    <img src={`https://drive.google.com/uc?id=${getImgData('pavan.png')}`} alt='Faculty' style={{ height: '200px', width: '200px' }} />
                    <div style={{ textAlign: 'center' }}>
                        <a href='https://drive.google.com/file/d/1FF-ykJrelM4WczgJGZr5tUoCPai7EDXf/view?usp=share_link' target='__blank'> <h3>M.Ram Pawan Kumar</h3></a>
                        <p>Faculty</p>
                    </div>
                </div>

                <div>
                    <img src={`https://drive.google.com/uc?id=${getImgData('lsravani.jpg')}`} alt='Faculty' style={{ height: '200px', width: '200px' }} />
                    <div style={{ textAlign: 'center' }}>
                        <a href='https://drive.google.com/file/d/1T-fgsJl4hI6VcCZhktoukNKno5mWRQyf/view?usp=share_link' target='__blank'> <h3>L.Sravani</h3></a>
                        <p>Faculty</p>
                    </div>
                </div>
                <div>
                    <img src={`https://drive.google.com/uc?id=${getImgData('YSR.PNG')}`} alt='Faculty' style={{ height: '200px', width: '200px' }} />
                    <div style={{ textAlign: 'center' }}>
                        <a href={`https://drive.google.com/uc?id=${getImgData2('YSR -COMPUTERS.pdf')}`} target='__blank'> <h3>Y SRINIVASA RAO</h3></a>
                        <p>Faculty</p>
                    </div>
                </div>
                <div>
                    <img src={`https://drive.google.com/uc?id=${getImgData('sailaja-MCA.PNG')}`} alt='Faculty' style={{ height: '200px', width: '200px' }} />
                    <div style={{ textAlign: 'center' }}>
                        <a href='https://drive.google.com/file/d/1laDCVEHMOgO3epbSfMGNDHKEH3WkoUpL/view?usp=share_link' target='__blank'> <h3>D. Sailaja</h3></a>
                        <p>Faculty</p>
                    </div>
                </div>
                <div>
                    <img src={`https://drive.google.com/uc?id=${getImgData2('santhibabu.PNG')}`} alt='Faculty' style={{ height: '200px', width: '200px' }} />
                    <div style={{ textAlign: 'center' }}>
                        <a href={`https://drive.google.com/uc?id=${getImgData2('13-M. SANTHI BABU.pdf')}`} target='__blank'> <h3>M. SANTHI BABU</h3></a>
                        <p>Faculty</p>
                    </div>
                </div>
                <div>
                    <img src={`https://drive.google.com/uc?id=${getImgData2('madhusudhana.PNG')}`} alt='Faculty' style={{ height: '200px', width: '200px' }} />
                    <div style={{ textAlign: 'center' }}>
                        <a href={`https://drive.google.com/uc?id=${getImgData2('14-B. MADHU SUDHANA RAO.pdf')}`} target='__blank'> <h3>B.MADHU SUDHANA RAO</h3></a>
                        <p>Faculty</p>
                    </div>
                </div>
                <div>
                    <img src={`https://drive.google.com/uc?id=${getImgData2('madhuri.PNG')}`} alt='Faculty' style={{ height: '200px', width: '200px' }} />
                    <div style={{ textAlign: 'center' }}>
                        <a href={`https://drive.google.com/uc?id=${getImgData2('11-G. MADHURI.pdf')}`} target='__blank'> <h3>G. MADHURI</h3></a>
                        <p>Faculty</p>
                    </div>
                </div>
                <div>
                    <img src={`https://drive.google.com/uc?id=${getImgData('K.Prasad.PNG')}`} alt='Faculty' style={{ height: '200px', width: '200px' }} />
                    <div style={{ textAlign: 'center' }}>
                        <a href={`https://drive.google.com/uc?id=${getImgData2('KVLN PRASAD.pdf')}`} target='__blank'> <h3>K.V.L.N PRASAD</h3></a>
                        <p>Faculty</p>
                    </div>
                </div>
                <div>
                    <img src={`https://drive.google.com/uc?id=${getImgData2('manaswini.PNG')}`} alt='Faculty' style={{ height: '200px', width: '200px' }} />
                    <div style={{ textAlign: 'center' }}>
                        <a href={`https://drive.google.com/uc?id=${getImgData2('16-NVL MANASWINI.pdf')}`} target='__blank'> <h3>NVL MANASWINI</h3></a>
                        <p>Faculty</p>
                    </div>
                </div>
                <div>
                    <img src={`https://drive.google.com/uc?id=${getImgData('sailajav.PNG')}`} alt='Faculty' style={{ height: '200px', width: '200px' }} />
                    <div style={{ textAlign: 'center' }}>
                        <a href={`https://drive.google.com/uc?id=${getImgData2('15-J. BALAJI.pdf')}`} target='__blank'> <h3>J. BALAJI</h3></a>
                        <p>Faculty</p>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default MCAFaculty;