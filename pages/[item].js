/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from "framer-motion";
// import Image from 'next/image';
import { useRouter } from 'next/router'
import { items } from '../components/Gallery/data';
import styles from '../components/Gallery/gallery.module.css'
// import { AnimateSharedLayout, AnimatePresence } from "framer-motion";
import List from '../components/Gallery/ListComponent'
// import Link from 'next/link';
import { static_gallery_paths } from "../path";

function Item(props) {
    const router = useRouter();
    const { item } = router.query;
    const newdata = items.find(c => c.id === item);
    // console.log(item, '==============', newdata);
    const [state, setState] = React.useState(newdata)

    return (
        <>
            {/* <AnimateSharedLayout type="crossfade">
                <AnimatePresence> */}
            <List />
            <motion.div
                key={router.key}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0 } }}
                transition={{ duration: 1, delay: 0 }}
                style={{ pointerEvents: "auto" }}
                // transition={{ type: "spring", stiffness: 100 }}
                className={styles.overlay}
            >
                {/* <Link href='/'></Link> */}
                <div onClick={() => router.push('/')}></div>
            </motion.div>
            <div className={`${styles.card_content_container} ${styles.open}`}>
                <motion.div className={styles.card_content} layoutId={`card-container-${state.id}`}>
                    <motion.div
                        className={styles.card_image_container}
                        layoutId={`card-image-container-${state.id}`}
                    >
                        {/* <img className={styles.card_image} src={`images/${state.id}.jpg`} alt="" /> */}
                        {/* <motion.img
                            key={state.id}
                            src={`images/${state.id}.jpg`}
                            animate={{ x: 0, opacity: 1 }}
                            initial={{ x: 200, opacity: 0 }}
                            exit={{ opacity: 0 }}
                            transition={{ delay: 0.2 }}
                            style={{ position: 'relative', width: '50%', objectFit: 'contain' }}
                        /> */}
                        <img className="card-image" src={`images/${state.id}.jpg`} alt=""
                            style={{ position: 'relative', width: '90%', objectFit: 'contain' }}
                        />
                    </motion.div>
                    <motion.div
                        className={styles.title_container}
                        layoutId={`title-container-${state.id}`}
                    >
                        <span className={styles.category}>{state.category}</span>
                        <h2 style={{
                            color: '#fff',
                            margin: '8px 0'
                        }}>{state.title}</h2>
                    </motion.div>
                    <motion.div className={styles.content_container} animate>
                        <p>hello world</p>
                        {/* <LoremIpsum
                            p={2}
                            avgWordsPerSentence={6}
                            avgSentencesPerParagraph={4}
                        /> */}
                    </motion.div>
                </motion.div>
            </div>
            {/* </AnimatePresence>
            </AnimateSharedLayout> */}
        </>
    );
}

export async function getStaticProps(ctx) {
    try {
        const data = items.find(c => c.id === ctx.params.item);
        // console.log(props.trending.course_info, "type");
        console.log(data);
        if (!data) {
            return {
                notFound: true,
            };
        } else {
            return {
                props: {
                    pages: data,
                }, // will be passed to the page component as props
            };
        }
    } catch (error) {
        console.log(error);
    }
}

export async function getStaticPaths() {
    const paths = static_gallery_paths.map((arg) => {
        return { params: { item: arg } };
    });
    // console.log(paths, 'paths')
    return {
        paths,
        fallback: "blocking",
    };
}

export default Item;