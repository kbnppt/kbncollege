import React from 'react';
import styles from './placements.module.css';
import accenture from '../../public/images/accenture.jpg';
import axis from '../../public/images/axis.png';
import genpact from '../../public/images/genpact.png';
import flipkart from '../../public/images/flipkart.png';
import hcl from '../../public/images/hcl.png';
import hgs from '../../public/images/hgs1.jpg';
import icicibank from '../../public/images/icicibank.png';
import delloit from '../../public/images/delloit.png'
import justdial from '../../public/images/justdial.png';
import yesbank from '../../public/images/yesbank.png'
import Image from 'next/image';
import HeadingComponent from '../Headings/index'
import Button from '@material-ui/core/Button';
import Marquee from "react-fast-marquee";
import { useRouter } from 'next/router'


const Placements = () => {
  const router = useRouter();

    return (
        <div className={styles.container}>
            {/* <div className={styles.placements}> */}
            <HeadingComponent data1='Our' data2='Recruiters' />
            {/* <p>Our </p><a href='#' style={{color:'#b05329'}}>&nbsp;50+ leading universities and companies</a> */}
            {/* </div> */}
            <div style={{ paddingBottom: '40px' }}>
                <Marquee pauseOnHover={true} speed={50} style={{ position: 'relative', background: 'none', height: '150px' }}>
                    {/* <ul className='marqueStyles'> */}

                    <div style={{ padding: ' 0 2rem ' }}>
                        <Image src={genpact} alt="" width={160} height={140} />
                    </div>
                    <div style={{ padding: ' 0 2rem ' }}>
                        <Image src={delloit} alt="" width={160} height={140} />
                    </div>
                    <div style={{ padding: ' 0 2rem ' }}>
                        <Image src={hcl} alt="" width={120} height={75} />
                    </div>
                    <div style={{ padding: ' 0 2rem ' }}>
                        <Image src={hgs} alt="" width={160} height={100} />
                    </div>
                    <div style={{ padding: ' 0 2rem ' }}>
                        <Image src={yesbank} alt="" width={120} height={80} />
                    </div>
                    <div style={{ padding: ' 0 2rem ' }}>
                        <Image src={justdial} alt="" width={160} height={120} />
                    </div>
                    <div style={{ padding: ' 0 2rem ' }}>
                        <Image src={icicibank} alt="" width={140} height={100} />
                    </div>

                    {/* </ul> */}
                </Marquee>
                {/* <Image src={hgs} alt="" width={100} height={60} />
                <Image src={genpact} alt="" width={100} height={60} />
                <Image src={delloit} alt="" width={100} height={60} />
                <Image src={hcl} alt="" width={100} height={60} />
                <Image src={yesbank} alt="" width={100} height={60} />
                <Image src={justdial} alt="" width={100} height={60} />
                <Image src={icicibank} alt="" width={100} height={60} /> */}
            </div>
            <div style={{textAlign:'center'}}>
                <Button variant='contained' color='primary'
                    // href="#outlined-buttons" 
                    onClick={() => router.push('/placements')}
                    >
                    See More
                </Button>

            </div>
        </div>
    )
}

export default Placements
