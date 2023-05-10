import React from 'react'
import withTransition from '../HOC/withTransition'
import Footer from '../components/Footer/animatedfooter';
import NavBar from '../components/Header/index';

const Policy = () => {
    return (
        <div>
            <nav>
                <NavBar />
            </nav>
            Policy

            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default withTransition(Policy);
