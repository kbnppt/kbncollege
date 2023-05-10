import Head from 'next/head';
// import { Example } from '../components/Banner';
import HomeComponents from '../components/Layout/Home/index';
// import withTransition from '../HOC/withTransition';
import Footer from '../components/Footer/animatedfooter';
import InitialPopupComponent from '../components/InitialPopup'
// import { useRouter } from 'next/router'
// import Store from '../components/Gallery/Store';
// import styles from '../components/Gallery/gallery.module.css'
// import CustomCursor from '../components/CustomCursor/index'
// import styles from '../components/Header/header.module.css'

function Home() {
  // const router = useRouter()
  return (
    <div >
      <Head>
        <title>Home - Kakaraparti Bhavanarayana College (Autonomous)</title>
      </Head>
      <main >
        <HomeComponents />
        <InitialPopupComponent />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  )
}

// export default withTransition(Home);
export default Home;
{/* <Gallery /> */ }
{/* <Store /> */ }