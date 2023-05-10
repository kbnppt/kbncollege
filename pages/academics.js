import React from 'react';
import Head from 'next/head';
import AllAboutComponents from '../components/Layout/Academics/index';
import Footer from '../components/Footer/animatedfooter';

const About = () => {
    return (
        <>
            <Head>
                <title>Academics - Kakaraparti Bhavanarayana College (Autonomous)</title>
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
