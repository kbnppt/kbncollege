import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  ProjectWrapper,
  ProjectCover,
} from "./Project.sc";

const Project = ({ project }) => {

  const [imageRef, imageInView] = useInView();

  const imageControls = useAnimation({});
  const imageCoverControls = useAnimation();

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

  console.log(project);

  return (
    <div style={{ position: 'relative' }}>
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
  );
};

export default Project;
