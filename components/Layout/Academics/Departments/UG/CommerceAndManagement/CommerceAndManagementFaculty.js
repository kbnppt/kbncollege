import React from 'react'
import {getRequiredImgs} from '../../../../../Api/index'

const CommerceAndManagementFaculty = () => {

    const [apidata,setApiData] = React.useState([])
    const [apidata1,setApiData1] = React.useState([])

    const initialLoad = async() =>{
        let govt_folderId = '1JbUgzvpwZ4crNMNaSh7j_v95JCV8Xi5e';
        let folderId1 = '1vjXqZcv6LhNTNZKjGVLF8WXNUjHgYzpS'
        let data = await getRequiredImgs(govt_folderId);
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
        <div>
            <div>
                <div style={{ display: "flex", justifyContent: 'space-between',flexWrap:'wrap' }}>
                    <div>
                        <img src={`https://drive.google.com/uc?id=${getImgData('Narayanarao-P.PNG')}`} alt='Faculty' style={{ height: '200px', width: '200px', borderRadius:'50px' }} />
                        <div style={{ textAlign: 'center' }}>
                            <a href={`https://drive.google.com/uc?id=${getImgData1('1-Dr.V.Narayana Rao.pdf')}`} target='__blank'> <h3>Dr.V.Narayana Rao</h3></a>
                            <p>Faculty</p>
                        </div>
                    </div>
                    <div>
                        <img src={`https://drive.google.com/uc?id=${getImgData('m.venkateswararao.PNG')}`} alt='Faculty' style={{ height: '200px', width: '200px', borderRadius:'50px' }} />
                        <div style={{ textAlign: 'center' }}>
                            <a href={`https://drive.google.com/uc?id=${getImgData1('12-Dr. M. VENKATESWARA RAO.pdf')}`} target='__blank'> <h3>Dr.M.VENKATESWARA RAO</h3></a>
                            <p>Faculty</p>
                        </div>
                    </div>
                    <div>
                        <img src={`https://drive.google.com/uc?id=${getImgData('sastry.png')}`} alt='Faculty' style={{ height: '200px', width: '200px', borderRadius:'50px' }} />
                        <div style={{ textAlign: 'center' }}>
                            <a href={`https://drive.google.com/uc?id=${getImgData1('3-Dr.GVSRNSA SASTRY.pdf')}`} target='__blank'> <h3>Dr.G V S R N S A SASTRY</h3></a>
                            <p>Faculty</p>
                        </div>
                    </div>
                    <div>
                        <img src={`https://drive.google.com/uc?id=${getImgData('ch,srinivasreddy.PNG')}`} alt='Faculty' style={{ height: '200px', width: '200px', borderRadius:'50px' }} />
                        <div style={{ textAlign: 'center' }}>
                            <a href={`https://drive.google.com/uc?id=${getImgData1('4-CH.SRINIVASA REDDY.pdf')}`} target='__blank'> <h3>CH.SRINIVASA REDDY</h3></a>
                            <p>Faculty</p>
                        </div>
                    </div>
                    <div>
                        <img src={`https://drive.google.com/uc?id=${getImgData('seshagiri.jpg')}`} alt='Faculty' style={{ height: '200px', width: '200px', borderRadius:'50px' }} />
                        <div style={{ textAlign: 'center' }}>
                            <a href={`https://drive.google.com/uc?id=${getImgData1('.pdf')}`} target='__blank'> <h3>V. SESHAGIRI RAO</h3></a>
                            <p>Faculty</p>
                        </div>
                    </div>
                    <div>
                        <img src={`https://drive.google.com/uc?id=${getImgData('sivaprakasa.PNG')}`} alt='Faculty' style={{ height: '200px', width: '200px', borderRadius:'50px' }} />
                        <div style={{ textAlign: 'center' }}>
                            <a href={`https://drive.google.com/uc?id=${getImgData1('6-Dr.K.SIVA PRAKASA RAO.pdf')}`} target='__blank'> <h3>Dr.K.SIVA PRAKASA RAO</h3></a>
                            <p>Faculty</p>
                        </div>
                    </div>
                    <div>
                        <img src={`https://drive.google.com/uc?id=${getImgData('vijay_babu.png')}`} alt='Faculty' style={{ height: '200px', width: '200px', borderRadius:'50px' }} />
                        <div style={{ textAlign: 'center' }}>
                            <a href={`https://drive.google.com/uc?id=${getImgData1('7-TEKKEM VIJAYABABU.pdf')}`} target='__blank'> <h3>T VIJAYA BABU</h3></a>
                            <p>Faculty</p>
                        </div>
                    </div>
                    <div>
                        <img src={`https://drive.google.com/uc?id=${getImgData('pavankumar.PNG')}`} alt='Faculty' style={{ height: '200px', width: '200px', borderRadius:'50px' }} />
                        <div style={{ textAlign: 'center' }}>
                            <a href={`https://drive.google.com/uc?id=${getImgData1('7-D. PAVAN KUMAR.pdf')}`} target='__blank'> <h3>D.PAVAN KUMAR</h3></a>
                            <p>Faculty</p>
                        </div>
                    </div>

                    <div>
                        <img src={`https://drive.google.com/uc?id=${getImgData('Mohanrao.PNG')}`} alt='Faculty' style={{ height: '200px', width: '200px', borderRadius:'50px' }} />
                        <div style={{ textAlign: 'center' }}>
                            <a href={`https://drive.google.com/uc?id=${getImgData1('9-B V MANOHAR BABU CV.pdf')}`} target='__blank'> <h3>B V MANOHAR BABU</h3></a>
                            <p>Faculty</p>
                        </div>
                    </div>
                    <div>
                        <img src={`https://drive.google.com/uc?id=${getImgData('ravinadh.PNG')}`} alt='Faculty' style={{ height: '200px', width: '200px', borderRadius:'50px' }} />
                        <div style={{ textAlign: 'center' }}>
                            <a href={`https://drive.google.com/uc?id=${getImgData1('10-CH.RAVINDRANATH.pdf')}`} target='__blank'> <h3>CH.RAVINDRANATH</h3></a>
                            <p>Faculty</p>
                        </div>
                    </div>
                    <div>
                        <img src={`https://drive.google.com/uc?id=${getImgData('hemanthkumar.PNG')}`} alt='Faculty' style={{ height: '200px', width: '200px', borderRadius:'50px' }} />
                        <div style={{ textAlign: 'center' }}>
                            <a href={`https://drive.google.com/uc?id=${getImgData1('11- N. HEMANTH KUMAR.pdf')}`} target='__blank'> <h3>N.HEMANTH KUMAR</h3></a>
                            <p>Faculty</p>
                        </div>
                    </div>

                    <div>
                        <img src={`https://drive.google.com/uc?id=${getImgData('gopalakrishna.PNG')}`} alt='Faculty' style={{ height: '200px', width: '200px', borderRadius:'50px' }} />
                        <div style={{ textAlign: 'center' }}>
                            <a href={`https://drive.google.com/uc?id=${getImgData1('12-A.GOPALA KRISHNA.pdf')}`} target='__blank'> <h3>A.GOPALA KRISHNA</h3></a>
                            <p>Faculty</p>
                        </div>
                    </div>

                    <div>
                        <img src={`https://drive.google.com/uc?id=${getImgData('sailajav.PNG')}`} alt='Faculty' style={{ height: '200px', width: '200px', borderRadius:'50px' }} />
                        <div style={{ textAlign: 'center' }}>
                            <a href={`https://drive.google.com/uc?id=${getImgData1('10-V. SAILAJA.pdf')}`} target='__blank'> <h3>V.SAILAJA</h3></a>
                            <p>Faculty</p>
                        </div>
                    </div>

                    <div>
                        <img src={`https://drive.google.com/uc?id=${getImgData('M. ANANDA SUDHAKAR.jpg')}`} alt='Faculty' style={{ height: '200px', width: '200px', borderRadius:'50px' }} />
                        <div style={{ textAlign: 'center' }}>
                            <a href={`https://drive.google.com/uc?id=${getImgData1('16-M.ANAND SUDHAKAR.pdf')}`} target='__blank'> <h3>M.ANAND SUDHAKAR</h3></a>
                            <p>Faculty</p>
                        </div>
                    </div>

                    <div>
                        <img src={`https://drive.google.com/uc?id=${getImgData('venkakataratnam1.PNG')}`} alt='Faculty' style={{ height: '200px', width: '200px', borderRadius:'50px' }} />
                        <div style={{ textAlign: 'center' }}>
                            <a href={`https://drive.google.com/uc?id=${getImgData1('17-K.VENKATA VRATNAM.pdf')}`} target='__blank'> <h3>K.VENKATA RATNAM</h3></a>
                            <p>Faculty</p>
                        </div>
                    </div>

                    <div>
                        <img src={`https://drive.google.com/uc?id=${getImgData('swaruparani.PNG')}`} alt='Faculty' style={{ height: '200px', width: '200px', borderRadius:'50px' }} />
                        <div style={{ textAlign: 'center' }}>
                            <a href={`https://drive.google.com/uc?id=${getImgData1('18-K.SWAROOPA RANI.pdf')}`} target='__blank'> <h3>K.SWAROOPA RANI</h3></a>
                            <p>Faculty</p>
                        </div>
                    </div>

                    <div>
                        <img src={`https://drive.google.com/uc?id=${getImgData('vyshnavi.PNG')}`} alt='Faculty' style={{ height: '200px', width: '200px', borderRadius:'50px' }} />
                        <div style={{ textAlign: 'center' }}>
                            <a href={`https://drive.google.com/uc?id=${getImgData1('19-p. vyshnavi.pdf')}`} target='__blank'> <h3>P.VYSHNAVI</h3></a>
                            <p>Faculty</p>
                        </div>
                    </div>

                    <div>
                        <img src={`https://drive.google.com/uc?id=${getImgData('lavanya.PNG')}`} alt='Faculty' style={{ height: '200px', width: '200px', borderRadius:'50px' }} />
                        <div style={{ textAlign: 'center' }}>
                            <a href={`https://drive.google.com/uc?id=${getImgData1('20-PLVD LAVANYA.pdf')}`} target='__blank'> <h3>P L V D LAVANYA</h3></a>
                            <p>Faculty</p>
                        </div>
                    </div>

                    <div>
                        <img src={`https://drive.google.com/uc?id=${getImgData('s.mani.PNG')}`} alt='Faculty' style={{ height: '200px', width: '200px', borderRadius:'50px' }} />
                        <div style={{ textAlign: 'center' }}>
                            <a href={`https://drive.google.com/uc?id=${getImgData1('22-V.MANI.pdf')}`} target='__blank'> <h3>V.MANI</h3></a>
                            <p>Faculty</p>
                        </div>
                    </div>

                    <div>
                        <img src={`https://drive.google.com/uc?id=${getImgData('seshatalpa.PNG')}`} alt='Faculty' style={{ height: '200px', width: '200px', borderRadius:'50px' }} />
                        <div style={{ textAlign: 'center' }}>
                            <a href={`https://drive.google.com/uc?id=${getImgData1('23-S.SESHA TALAPA SAI.pdf')}`} target='__blank'> <h3>S.SESHA TALAPA SAI</h3></a>
                            <p>Faculty</p>
                        </div>
                    </div>


                </div>
            </div>

        </div>
    )
}

export default CommerceAndManagementFaculty;