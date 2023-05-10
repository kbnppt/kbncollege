import React, { useState, useEffect } from 'react';
import { Fade } from "react-slideshow-image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
    ProjectWrapper,
    ProjectCover,
} from "./slider.sc";

const Index = () => {
    const [previousIndex, setPreviousIndex] = useState(null);
    const [nextIndex, setNextIndex] = useState(null);
    // motion states
    const [imageRef, imageInView] = useInView();
    const [imageRef1, imageInView1] = useInView();
    const [imageRef2, imageInView2] = useInView();
    const [imageRef3, imageInView3] = useInView();
    const imageControls = useAnimation({});
    const imageCoverControls = useAnimation();
    const imageControls1 = useAnimation({});
    const imageCoverControls1 = useAnimation();
    const imageControls2 = useAnimation({});
    const imageCoverControls2 = useAnimation();
    const imageControls3 = useAnimation({});
    const imageCoverControls3 = useAnimation();

    const style = {
        textAlign: "center",
        padding: "200px 0",
        fontSize: "30px"
    };

    const properties = {
        autoplay: true,
        indicators: true,
        onChange: (previous, next) => {
            setPreviousIndex(previous);
            setNextIndex(next);
        }
    };

    useEffect(() => {
        if (imageInView) {
            imageControls.start({
                scale: 1,
            });

            imageCoverControls.start({
                scaleX: 0,
            });
        }
    }, [imageInView, imageControls, imageCoverControls]);
    useEffect(() => {
        if (imageInView1) {
            imageControls1.start({
                scale: 1,
            });

            imageCoverControls1.start({
                scaleX: 0,
            });
        }
    }, [imageInView1, imageControls1, imageCoverControls1]);
    useEffect(() => {
        if (imageInView2) {
            imageControls2.start({
                scale: 1,
            });

            imageCoverControls2.start({
                scaleX: 0,
            });
        }
    }, [imageInView2, imageControls2, imageCoverControls2]);
    useEffect(() => {
        if (imageInView3) {
            imageControls3.start({
                scale: 1,
            });

            imageCoverControls3.start({
                scaleX: 0,
            });
        }
    }, [imageInView3, imageControls3, imageCoverControls3]);
    return (
        <div style={{ border: '1px solid blue' }}>
            <div>
                <Fade {...properties}>
                    <div style={{ ...style, background: 'teal' }}>
                        <ProjectWrapper>
                            <ProjectCover>
                                <motion.div
                                    className="project-cover-inner"
                                    initial={{ scaleX: 1 }}
                                    animate={imageCoverControls}
                                    transition={{ duration: 1, ease: "easeInOut" }}
                                ></motion.div>
                                <motion.img
                                    ref={imageRef}
                                    src={project?.mainImage}
                                    alt="profiles"
                                    initial={{ scale: 1.6 }}
                                    animate={imageControls}
                                    transition={{ delay: 0.2, duration: 0.7, ease: "easeInOut" }}
                                />
                            </ProjectCover>
                        </ProjectWrapper>
                    </div>
                    <div style={{ ...style, background: '#6c6ce3' }}>
                        <ProjectWrapper>
                            <ProjectCover>
                                <motion.div
                                    className="project-cover-inner"
                                    initial={{ scaleX: 1 }}
                                    animate={imageCoverControls1}
                                    transition={{ duration: 1, ease: "easeInOut" }}
                                ></motion.div>
                                <motion.img
                                    ref={imageRef1}
                                    src={project?.mainImage}
                                    alt="profiles"
                                    initial={{ scale: 1.6 }}
                                    animate={imageControls1}
                                    transition={{ delay: 0.2, duration: 0.7, ease: "easeInOut" }}
                                />
                            </ProjectCover>
                        </ProjectWrapper>
                    </div>
                    <div style={{ ...style, background: '#8fe78f' }}>
                        <ProjectWrapper>
                            <ProjectCover>
                                <motion.div
                                    className="project-cover-inner"
                                    initial={{ scaleX: 1 }}
                                    animate={imageCoverControls2}
                                    transition={{ duration: 1, ease: "easeInOut" }}
                                ></motion.div>
                                <motion.img
                                    ref={imageRef2}
                                    src={project?.mainImage}
                                    alt="profiles"
                                    initial={{ scale: 1.6 }}
                                    animate={imageControls2}
                                    transition={{ delay: 0.2, duration: 0.7, ease: "easeInOut" }}
                                />
                            </ProjectCover>
                        </ProjectWrapper>
                    </div>
                    <div style={{ ...style, background: '#ccc' }}>
                        <ProjectWrapper>
                            <ProjectCover>
                                <motion.div
                                    className="project-cover-inner"
                                    initial={{ scaleX: 1 }}
                                    animate={imageCoverControls3}
                                    transition={{ duration: 1, ease: "easeInOut" }}
                                ></motion.div>
                                <motion.img
                                    ref={imageRef3}
                                    src={project?.mainImage}
                                    alt="profiles"
                                    initial={{ scale: 1.6 }}
                                    animate={imageControls3}
                                    transition={{ delay: 0.2, duration: 0.7, ease: "easeInOut" }}
                                />
                            </ProjectCover>
                        </ProjectWrapper>
                    </div>
                </Fade>
            </div>
            {/* <p style={{ fontSize: "20px", textAlign: "center" }}>Transitioned from {previousIndex} to {nextIndex}</p> */}
        </div>
    )
}

export default Index

const project = [
    {
        title: 'Teja 1',
        slug: '11',
        body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
        author: 'teja',
        live_link: 'https://www.everest-thinkers.com',
        github_link: 'https://github.com/Tejasriram944',
        mainImage: 'https://www.everest-thinkers.com/static/media/teja.59b76d20.png'
    },
    {
        title: 'Sravani 1',
        slug: '22',
        body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
        author: 'Sravani 1',
        live_link: 'https://www.everest-thinkers.com',
        github_link: 'https://github.com/Tejasriram944',
        mainImage: 'https://www.everest-thinkers.com/static/media/sravani.f3a7bf88.jpeg'
    },
    {
        title: 'Haritha 1',
        slug: '33',
        body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
        author: 'haritha',
        live_link: 'https://www.everest-thinkers.com',
        github_link: 'https://github.com/Tejasriram944',
        mainImage: 'https://www.everest-thinkers.com/static/media/harry.c25a9b2e.PNG'
    },
    {
        title: 'Everest Thinkers 4',
        slug: '44',
        body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
        author: 'tejEverest thinkers',
        live_link: 'https://www.everest-thinkers.com',
        github_link: 'https://github.com/Tejasriram944',
        mainImage: 'https://www.everest-thinkers.com/static/media/teja.59b76d20.png'
    }
]