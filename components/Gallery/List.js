/* eslint-disable @next/next/no-img-element */
import React from "react";
import { items } from "./data";
// import { Link } from "react-router-dom";
import { motion } from "framer-motion";
// import Image from 'next/image';
import styles from './gallery.module.css';
import { useRouter } from 'next/router';
// import Link from 'next/link';

function Card({ id, title, category, theme }) {
  const router = useRouter();
  // console.log(id, 'hello')
  return (
    <li className={`${theme}`} style={{
      position: 'relative',
      padding: '25px',
      height: '460px',
      flex: ' 0 0 40%',
      maxWidth: '40%',
      listStyle: 'none'
    }}
      onClick={() => router.push(id)}>
      {/* // onClick={() => router.push({ pathname: id, query: { id, title, category } })}> */}
      <div className={styles.card_content_container}>
        <motion.div className={styles.card_content} layoutId={`card-container-${id}`}>
          <motion.div
            className={styles.card_image_container}
            layoutId={`card-image-container-${id}`}
          >
            {/* <div>dsfwdfwe</div> */}
            {/* <img className={styles.card_image} src={`images/${id}.jpg`} alt="" />className="card-image" */}
            <img className="card-image" src={`images/${id}.jpg`}
              style={{ position: 'relative', width: '90%', objectFit: 'cover' }} alt="" />
          </motion.div>
          <motion.div
            className={styles.title_container}
            layoutId={`title-container-${id}`}
          >
            <span className={styles.category}>{category}</span>
            <h2>{title}</h2>
          </motion.div>
        </motion.div>
      </div>
    </li>
  );
}

export function List({ selectedId }) {
  return (
    <ul className={styles.card_list}>
      {items.map(card => (
        <Card key={card.id} {...card} isSelected={card.id === selectedId} />
      ))}
    </ul>
  );
}
