import React from 'react';
import Head from 'next/head';
import AllAboutComponents from '../components/Layout/Administration/index'
import Footer from '../components/Footer/animatedfooter';

const About = () => {
    return (
        <>
            <Head>
                <title>Administration - Kakaraparti Bhavanarayana College (Autonomous)</title>
            </Head>
            <main>
                <AllAboutComponents />
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    )
}

export default About
