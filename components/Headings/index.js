import React from 'react'
import styles from './heading.module.css';

const Headings = ({ data1, data2, para ,Color}) => {
    return (
        <div className={styles.headingContainer}>
            <h3 className={styles.headingTxt} style={{color:Color?"white":"#07358a"}}>{data1}{' '}{data2 ? data2 : ''} </h3>
            {/* <div> */}
            <div className={styles.headingDecoration} style={{backgroundColor:Color?"white":"#98afc7"}}  />
            {/* </div> */}
        </div>
    )
}

export default Headings
