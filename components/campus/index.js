import * as React from "react";
import Header from '../Header/index';

// const CampusCafeteria =()=>{
//     return(
//         <div >
//         <h1>hi hello</h1>
//         </div>
//     );

// }
// export default CampusCafeteria
import { useEffect } from 'react';
import Link from 'next/link';
// import posts from '../../data/posts';
import { motion } from 'framer-motion';
// import PostInfo from '../../components/post-info';

let easing = [0.175, 0.85, 0.42, 0.96];

const imageVariants = {
  exit: { y: 150, opacity: 0, transition: { duration: 0.5, ease: easing } },
  enter: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: easing
    }
  }
};

const textVariants = {
  exit: { y: 100, opacity: 0, transition: { duration: 0.5, ease: easing } },
  enter: {
    y: 0,
    opacity: 1,
    transition: { delay: 0.1, duration: 0.5, ease: easing }
  }
};

const backVariants = {
  exit: {
    x: 100,
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: easing
    }
  },
  enter: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.5,
      ease: easing
    }
  }
};

const CampusCafeteria = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container post">
      <motion.div initial="exit" animate="enter" exit="exit">
        <motion.img variants={imageVariants} src={`../../public/images/cafeteria.jpg`} />

        <motion.div variants={textVariants}>
        <p>LoremIpsum Nec vero pietas adversus deos nec quanta iis gratia debeatur sine explicatione naturae intellegi potest. Aliter enim explicari, quod quaeritur, non potest. Quaero igitur, quo modo hae tantae</p>
          <p>Nec vero pietas adversus deos nec quanta iis gratia debeatur sine explicatione naturae intellegi potest. Aliter enim explicari, quod quaeritur, non potest. Quaero igitur, quo modo hae tantae commendationes a natura profectae subito a sapientia relictae sint. An dolor longissimus quisque miserrimus, voluptatem non optabiliorem diuturnitas facit? Quare obscurentur etiam haec, quae secundum naturam esse dicimus, in vita beata; Scio enim esse quosdam, qui quavis lingua philosophari possint; Nunc haec primum fortasse audientis servire debemus. Quarum cum una sit, qua mores conformari putantur, differo eam partem, quae quasi stirps ets huius quaestionis.</p>
        </motion.div>

        <motion.div variants={backVariants}>
          <Link href="/">
            <a>Back to list</a>
          </Link>
        </motion.div>
      </motion.div>

      <style jsx>{`
        .post {
          margin: 20px;
        }
        .post p {
          margin: 40px 0;
        }
      `}</style>
    </div>
  );
};

// Post.getInitialProps = ({ query }) => {
//   let post = posts.find(post => post.id == query.post);

//   return {
//     post
//   };
// };

export default CampusCafeteria;
