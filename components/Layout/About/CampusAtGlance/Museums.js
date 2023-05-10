import React from 'react';
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Image from 'next/image';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
  teluguHeadingMain:{
    // fontSize:'30px',
    // textAlign:'center',
    color:'#2e69d6'
  },
  teluguHeading:{
    // fontSize:'23px',
    color:'green',
    margin:'0',
    // paddingTop:'12px'
  },
  teluguContent:{
    // fontSize:'22px',
    margin:'0',
    paddingTop:'10px'
 }

}));
const Museums = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  // const [open,setOpen]=useState(false);

  return <div>
      <h2 className={classes.teluguHeadingMain}>ZOOLOGY & BOTANY MUSEUMS</h2>
      <h3 className={classes.teluguHeading}>ZOOLOGY MUSEUM</h3>
      <p className={classes.teluguContent}>
      The department has a fine museum with its master pieces. It is a feather in the cap of the department. It is impressive with its multifarious specimens. Darwin’s theory of evolution of man from anthropoid ape to modern man is beautifully depicted here. Stuffed animals like Monkey, White Tiger, Kangaroo, Python, Vulture, Giraffe and various birds are strikingly seen in the museum. Specimen jars of 18 poriferans, 38 cnidarians, 19 helminthes, 30 annelids, 77 anthropods, 55 molluscs and 18 echnioderms in the museum. Vertebrate specimens of 16 prochordates, 82 Pisces, 30 amphibians, 58 reptiles, 12 mammals and 44 aves are obviousle found in the museum
      </p>
      <p className={classes.teluguContent}>
      Embryological specimens like human embryo (1 to 9 months), human placenta, frog embryo and shark embryo are also there in the museum. Models of development stages of amphioxus are found in the museum
      </p>
      <p className={classes.teluguContent}>
      We have anatomical specimens like human heart, human brain, human kidney, human lung and human uterus. There are sheep brains, sheep heart and sheep kidney (specimens)
      </p>
      <p className={classes.teluguContent}>
      Several models of cytology like mitosis & meiosis (divisions), DNA helical structure, mechanism of DNA replication, segment of DNA molecule, mechanism of protein synthesis, mechanism of linking of nucleotides and structural formula of DNA are also kept here
      </p>
      <p className={classes.teluguContent}>
      Nervous system of unio, afferent & Efferent vessels of shark, nervous system of mytilus, shark internal ear, rat urinogenital system, fish digestive & reproductive systems, neck nerves of rat, leech general anatomy and brains of Pisces, amphibians, reptilians and aves are kept in the cases
      </p>
      <p className={classes.teluguContent} style={{paddingBottom:'20px'}}>
      Benevolent and beneficial insects like silk worm, honey bee, lac insect are present. There are models of fish dissections, frog dissections, life cycle of frog, rabbit reproductive organs (male & female), human viscera, eye, and akin. The highlight of the museum is the entire human Skelton. It has Australian Specimens like Kangaroo, Opposum & lungfish Neoceratodus. It has connecting links like Duck billed platypus (between reptiles & Mammals), lungfishes (fishes & amphibians) and Peripatus (annelids & anthropods). Thus the museum of the department is a milestone in the organic development of the college
      </p>
      <Image src={'/images/museumzoo.gif'} alt="" width={600} height={600} />
      <p className={classes.teluguHeading} style={{marginTop:'20px'}}>BOTANY MUSEUM</p>
      <p className={classes.teluguContent}>
      The Museum of Botanical diversity in the Department of Botany, houses the collection of botanical specimens gathered by the late Prof. K.R.V. Subrahmanyam, since 1965 and further augmented from time to time by the faculty members till date HOD of Botany Ms. Ch. Radhika and Dr. G. Ramesh with the support of students of the Botany Department
      </p>
      <p className={classes.teluguContent} style={{paddingBottom:'20px'}}>
      This facility houses specimens of various groups such as Algae, Fungi, Bryophyta, Pteridophyta, Gymnosperms & Angiosperms and also models of rare specimens, photographs of scientists, Herbarium photographs and rare plant photographs and economic importance and their derive products. And also housing nearly 500 dried plant specimens
      The herbarium houses specimens of vascular plants, mosses and fungi collected from different parts of India. The museum is properly maintained from time to time and also caters to the needs of postgraduate, under graduates and visiting students from in and around the college campus
      </p>
    
      {/* <Button variant="contained" color="primary" style={{margin:'18px 0px'}}>
        More
      </Button> */}
      <Image src={'/images/botany_musium.gif'} alt="" width={600} height={600} />
  </div>;
};

export default Museums;
