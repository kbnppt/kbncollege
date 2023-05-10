import React from 'react';
import { makeStyles } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import DepartmentInner from '../../../../MainSidebar/DepartmentInner';
import HindiAbout from './HindiDep/HindiAbout';
import HindiAchivements from './HindiDep/HindiAchivements';
import HindiEvents from './HindiDep/HindiEvents';
import HindiFaculty from './HindiDep/HindiFaculty';
import HindiHome from './HindiDep/HindiHome';
import HindiMore from './HindiDep/HindiMore';

const DeptOfHindi = () => {

    const data = [
        { id: 1, title: 'Home', componentInfo: <HindiHome /> },
        { id: 2, title: 'About', componentInfo: <HindiAbout /> },
        { id: 3, title: 'Faculty', componentInfo: < HindiFaculty /> },
        { id: 4, title: 'Achivements', componentInfo: <HindiAchivements /> },
        { id: 5, title: 'Events', componentInfo: <HindiEvents /> },
        { id: 6, title: 'More', componentInfo: <HindiMore /> },
    ];

    return <div>
        <DepartmentInner data={data} />
    </div>;
}

export default DeptOfHindi;
