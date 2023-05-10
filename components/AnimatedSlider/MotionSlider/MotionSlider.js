import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';
import { useInView } from "react-intersection-observer";
import ButtonIcon from '../ButtonIcon/ButtonIcon';
import { motionSliderVariants } from '../variants/index';
import { useMotionSlider } from '../hooks/useMotionSlider';
import {
  container,
  slider,
  buttonLeft,
  buttonRight,
  contentContainer,
  imgContainer,
  imgStyle,
  spanStyle,
  slideIn,
  slideOut,
  project_cover_inner,
  sliderBtnContainer
} from './MotionSlider.module.css';
import { Button } from '@material-ui/core';

const { containerVariants, imgVariants, textVariants } = motionSliderVariants;
// const { containerVariants, imgVariants } = motionSliderVariants;

const MotionSlider = ({ data, options }) => {
  const {
    state,
    currentIndex,
    handleChangeSlide,
    // handleDrag,
  } = useMotionSlider(data, options);
  const [imageRef, imageInView] = useInView();
  const imageControls = useAnimation({});
  const imageCoverControls = useAnimation();

  const { srcImg, name, quote, price, backColor } = data[currentIndex];
  // const { srcImg, name, backColor } = data[currentIndex];

  useEffect(() => {
    if (imageInView) {
      imageControls.start({
        scale: 1,
      });

      imageCoverControls.start({
        scaleX: 0,
      });
    }
  }, [srcImg, imageInView, imageControls, imageCoverControls]);

  const [page, direction] = state;

  return (
    <div>
      <div className={container} >
        {/* <AnimatePresence initial={false} custom={direction} > */}
        <motion.div
          key={page}
          custom={direction}
          className={slider}
          // style={{ backgroundColor: `${backColor}` }}
          variants={containerVariants}
          initial="hidden"
          // animate={{ opacity: 1 }}
          // initial={{ opacity: 1 }}
          animate="visible"
          exit="exit"
        // drag="x"
        // dragConstraints={{ left: 0, right: 0 }}
        // dragElastic={1}
        // onDragEnd={(e, info) => handleDrag(e, info)}
        >
          <motion.div
            className={project_cover_inner}
            // initial={{ scaleX: 1 }}
            animate={imageCoverControls}
            transition={{ duration: 2, ease: "easeInOut" }}
          ></motion.div>
          <motion.div className={imgContainer} variants={imgVariants}>
            {/* <div className={pickgradient}> */}
            <motion.img
              ref={imageRef}
              // effect="blur"
              width="100%"
              height="100%"
              src={srcImg}
              alt={name}
              className={imgStyle}
              initial={{ scale: 1.6 }}
              animate={imageControls}
              transition={{ delay: 0.5, duration: 1.4, ease: "easeInOut" }}
            />
          </motion.div>
          <div className={contentContainer}>
            <motion.h2 variants={textVariants}>{name}</motion.h2>
            <motion.p variants={textVariants} >{quote}</motion.p>
            {/* <motion.span className={spanStyle} variants={textVariants}>{name}</motion.span> */}
            <motion.div variants={textVariants} className={sliderBtnContainer}>
              <Button variant="contained" color="primary">{price}</Button>
              {/* <Button variant="contained" color="secondary">{price}</Button> */}
            </motion.div>
          </div>
        </motion.div>
        {/* </AnimatePresence> */}

        <ButtonIcon
          classNames={buttonLeft}
          icon={MdNavigateBefore}
          onClick={() => handleChangeSlide(-1)}
        />
        <ButtonIcon
          classNames={buttonRight}
          icon={MdNavigateNext}
          onClick={() => handleChangeSlide(1)}
        />
      </div>
    </div>
  );
};

MotionSlider.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  options: PropTypes.shape({
    nextSlideTime: PropTypes.number,
    swipingThreshold: PropTypes.number,
  }),
};

MotionSlider.defaultProps = {
  options: {
    nextSlideTime: 6000,
    swipingThreshold: 100000,
  },
};
export default MotionSlider;
