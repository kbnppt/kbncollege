import React from 'react';
import AnimatedNumber from "animated-number-react";
import styles from './counter.module.css';
import { FaUsers, FaGraduationCap, FaCalendarAlt } from "react-icons/fa";
// import Link from 'next/link';

const Index = () => {
    const [count, setCount] = React.useState({
        clients: 150,
        placements: 2000,
        events: 200,
    });

    const formatValue = (value) => `${Number(value).toFixed(0)}+ `;
    return (
        <div className={styles.counter}>
            <div className={styles.clients}>
                <FaUsers className={styles.countericons} />
                <div style={{ paddingLeft: "10px" }}>
                    <AnimatedNumber
                        className={styles.record}
                        value={13}
                        formatValue={formatValue}
                        duration={5500}
                    />
                </div>
                <p>Faculty With PHD</p>
            </div>
            <div className={styles.clients}>
                <FaGraduationCap className={styles.countericons} />
                <div style={{ paddingLeft: "10px" }}>
                    <AnimatedNumber
                        className={styles.record}
                        value={4}
                        formatValue={formatValue}
                        duration={5500}
                    />
                </div>
                <p>Acre Campus</p>
            </div>
            <div className={styles.clients}>
                <FaUsers className={styles.countericons} />
                <div style={{ paddingLeft: "15px" }}>
                    <AnimatedNumber
                        className={styles.record}
                        value={25}
                        formatValue={formatValue}
                        duration={5500}
                    />
                </div>
                <p>Labs & Museum Centers</p>
            </div>
            <div className={styles.clients}>
                <FaCalendarAlt className={styles.countericons} />
                <div style={{ paddingLeft: "10px" }}>
                    <AnimatedNumber
                        className={styles.record}
                        value={100}
                        formatValue={formatValue}
                        duration={5500}
                    />
                </div>
                <p>Indexed Publications</p>
            </div>
        </div>

    )
}

export default Index
