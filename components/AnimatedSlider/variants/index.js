const childTransition = {
  type: 'spring',
  stiffness: 100,
  damping: 50,
  delay: 1.5
};

export const motionSliderVariants = {
  containerVariants: {
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  },

  // imgVariants: {
  //   hidden: (direction) => {
  //     return {
  //       x: direction > 0 ? 30 : -30,
  //       opacity: 0,
  //     };
  //   },
  //   visible: {
  //     x: 0,
  //     opacity: 1,
  //   },
  //   exit: (direction) => {
  //     return {
  //       x: direction < 0 ? 30 : -30,
  //       opacity: 0,
  //     };
  //   },
  imgVariants: {
    // hidden: (direction) => {
    //   return {
    //     x: direction > 0 ? 0 : 0,
    //     opacity: 0,
    //   };
    // },
    visible: {
      x: 0,
      opacity: 1,
    },
    // exit: (direction) => {
    //   return {
    //     x: direction < 0 ? 0 : 0,
    //     opacity: 0,
    //   };
    // },
  },

  textVariants: {
    hidden: {
      y: -150,
      opacity: 0,
      transition: childTransition,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: childTransition,
    },
    exit: {
      y: 20,
      opacity: 0,
      transition: childTransition,
    },
  },
};

export const buttonIconVariants = {
  hover: {
    scale: 1.2,
  },
  tap: {
    scale: 0.9,
  },
};
