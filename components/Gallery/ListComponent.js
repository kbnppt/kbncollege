/* eslint-disable @next/next/no-img-element */
import React from "react";
import { items } from "./data";
// import { Link } from "react-router-dom";
import { motion } from "framer-motion";
// import Image from 'next/image';
import styles from './gallery.module.css';
// import { useRouter } from 'next/router'

function Card({ state }) {
    // const router = useRouter();
    // console.log(id, 'hello')
    return (
        <li style={{
            position: 'relative',
            padding: '25px',
            height: '460px',
            flex: ' 0 0 40%',
            maxWidth: '40%',
            listStyle: 'none'
        }}
        //   onClick={() => router.push(id)}
        >
            {/* // onClick={() => router.push({ pathname: id, query: { id, title, category } })}> */}
            <div className={styles.card_content_container}>
                <motion.div className={styles.card_content} layoutId={`card-container-${state.id}`}>
                    <motion.div
                        className={styles.card_image_container}
                        layoutId={`card-image-container-${state.id}`}
                    >
                        {/* <div>dsfwdfwe</div> */}
                        {/* <img className={styles.card_image} src={`images/${id}.jpg`} alt="" />className="card-image" */}
                        <img className="card-image" src={`images/${state.id}.jpg`} alt="" />
                    </motion.div>
                    <motion.div
                        className={styles.title_container}
                        layoutId={`title-container-${state.id}`}
                    >
                        <span className={styles.category}>{state.category}</span>
                        <h2>{state.title}</h2>
                    </motion.div>
                </motion.div>
            </div>
            {/* <Link to={id} className={`card-open-link`} /> */}
        </li>
    );
}

export function List({ state }) {
    return (
        <ul className={styles.card_list}>
            {items.map((card, i) => (
                <Card key={i} state={card} />
            ))}
        </ul>
    );
}

export default List;