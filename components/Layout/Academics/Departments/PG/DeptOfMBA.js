
import React from 'react';
import DepartmentInner from '../../../../MainSidebar/DepartmentInner';
import MBADepHome from './MBADep/MBADepHome';
import MBAAbout from './MBADep/MBAAbout';
import MBAFaculty from './MBADep/MBAFaculty';
import MBAAchievements from './MBADep/MBAAchievements';
import MBAEvents from './MBADep/MBAEvents';
import MBALabs from './MBADep/MBALabs';
import MBAMore from './MBADep/MBAMore';
import {getRequiredImgs} from '../../../../Api/index'


const DeptOfMBA = () => {

    const [apidata,setApiData] = React.useState([])

    const initialLoad = async() =>{
        let folderId = '16LVDml8_lkIfPictlaErXLGPKQlAOeZ0';
        let data = await getRequiredImgs(folderId);
        // console.log('__data',data)
        setApiData(data?.files)
    }


    React.useEffect(()=>{
        initialLoad()
    },[])


    const data = [
        { id: 1, title: 'Home', componentInfo: <MBADepHome /> },
        { id: 2, title: 'About', componentInfo: <MBAAbout /> },
        { id: 3, title: 'Faculty', componentInfo: <MBAFaculty /> },
        { id: 4, title: 'Achivements', componentInfo: <MBAAchievements data={apidata} /> },
        { id: 5, title: 'Events', componentInfo: <MBAEvents data={apidata} /> },
        { id: 6, title: 'Labs', componentInfo: <MBALabs /> },
        { id: 7, title: 'KMore', componentInfo: <MBAMore data={apidata} /> },
    ];

    return <div>
        <DepartmentInner data={data} />
    </div>;
};

export default DeptOfMBA;
