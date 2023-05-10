import React from 'react';
import Head from 'next/head';
import AllAboutComponents from '../components/Layout/About/index'
// import withTransition from '../HOC/withTransition'
import Footer from '../components/Footer/animatedfooter';
import SearchFunctionality from '../components/Search/index'

const About = () => {
    return (
        <>
            <Head>
                <title>About - Kakaraparti Bhavanarayana College (Autonomous)</title>
            </Head>
            <main>
                <SearchFunctionality />
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    )
}

export default About;
