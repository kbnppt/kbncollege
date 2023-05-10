import React from 'react'
import styles from './admissions.module.css'
import office from '../../public/images/office.jpg'
import Image from 'next/image';
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";


const Admissions = () => {
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.admissionsmain}>
                    <h3 className={styles.heading}>Admissions 2021</h3>
                    <Link href='/'>KLEEE-2021 Results</Link>
                    <Link href='/'>Admission Counselling Schedule-AY 2021-2022</Link>
                    <Link href='/'>Ph.D admission 2021-2022 provisional list of candidates for Odd Semister.</Link>
                    <Link href='/'>Online Counselling Registration.Click Here</Link>
                    <Link href='/'>Ph.D admission are open throughout the year for NRI&/8217;s,Foriegn Nationals,industry people and Govern Officials </Link>
                    <Link href='/' >Ph.D admission Notification for 2021-2022 (Odd Semister)</Link>
                </div>
                <div className={styles.imgmain}>
                    <Image src={office} alt="" height={2500}/>
                </div>
            </div>
        </div>
    )
}

export default Admissions
