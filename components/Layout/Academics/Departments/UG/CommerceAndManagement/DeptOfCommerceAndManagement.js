
import React from 'react';
import DepartmentInner from '../../../../../MainSidebar/DepartmentInner';
import CommerceAndManagementAbout from './CommerceAndManagementAbout';
import CommerceAndManagementFaculty from './CommerceAndManagementFaculty';
import CommerceAndManagementHome from './CommerceAndManagementHome';
import CommerceAndManagementAchivements from './CommerceAndManagementAchivements';
import CommerceAndManagementLabs from './CommerceAndManagementLabs';
import CommerceAndManagementEvents from './CommerceAndManagementEvents';
import CommerceAndManagementMore from './CommerceAndManagementMore';


const DeptOfCommerceAndManagement = () => {

    const data = [
        { id: 1, title: 'Home', componentInfo: <CommerceAndManagementHome /> },
        { id: 2, title: 'About', componentInfo: <CommerceAndManagementAbout /> },
        { id: 3, title: 'Faculty', componentInfo: <CommerceAndManagementFaculty /> },
        { id: 4, title: 'Achivements', componentInfo: <CommerceAndManagementAchivements /> },
        { id: 5, title: 'Events', componentInfo: <CommerceAndManagementEvents /> },
        { id: 6, title: 'Labs', componentInfo: <CommerceAndManagementLabs /> },
        { id: 7, title: 'KMore', componentInfo: <CommerceAndManagementMore /> },

    ];

    return <div>
        <DepartmentInner data={data} />
    </div>;
};

export default DeptOfCommerceAndManagement;
