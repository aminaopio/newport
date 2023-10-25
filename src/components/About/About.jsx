import { motion } from 'framer-motion';
import { BiLogoHtml5, BiLogoJavascript, BiSolidFileCss } from 'react-icons/bi';
import { BsFileArrowDown } from 'react-icons/bs';
import { SiAmazonaws, SiAmazondynamodb, SiAngularjs, SiFirebase, SiFlutter, SiMysql } from 'react-icons/si';
import Sidebar from "../../sidebar/Sidebar";
import "./About.scss";

const textVariants ={
  initial:{
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y:0,
    transition:{
        duration: 2,
        repeat: Infinity,
    },
}
}

function About() {
  return (
    <div className='about'>
      <Sidebar/>
      <div className="wrapper">
      <motion.div className="textContainer"
      variants= {textVariants}
      initial="initial"
      animate="animate"
      >
        <motion.h2 variants= {textVariants}>Hello!</motion.h2>
        <motion.h1 variants= {textVariants}>My name is Amina Opio and I'm an aspiring software engineer and recent graduate from the University of North Texas with a Bachelor of Science in Computer Science and a minor in International Studies. This is my personal website created with React, SASS and Framer Motion. Below you'll find some of my projects! 😁</motion.h1>
        <motion.h3 variants= {textVariants}>Frontend Stacks: <BiLogoJavascript/>, <BiLogoHtml5/>, <BiSolidFileCss/>, <SiFlutter/>,<SiAngularjs/>, etc. </motion.h3>
        <motion.h3 variants= {textVariants}>Backend Stacks: <SiFirebase/>, <SiAmazonaws/>, <SiAmazondynamodb/>, <SiMysql/>, etc. </motion.h3>
        <motion.div className="scrollButton" variants= {textVariants} animate="scrollButton">
            <a href={"#CV"}><BsFileArrowDown/></a>
      </motion.div>
      </motion.div>
        <div className="imageContainer">
            <img src= "/aminao.PNG" alt=""/>
        </div>
        </div>
    </div>
  )
}

export default About