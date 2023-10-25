import { motion } from 'framer-motion';
import { BsFileArrowDown } from 'react-icons/bs';
import Typewriter from 'typewriter-effect';
import "./homepage.scss";

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

const Homepage = () => {
return (
    <div className="homepage">
        <div className="wrapper">
        <motion.div className="textContainer"
        variants= {textVariants}
        initial="initial"
        animate="animate">
            <motion.h2 variants= {textVariants}>Hi 👋🏿 </motion.h2>
            <motion.h1 variants= {textVariants}>I'm Amina</motion.h1>
            <motion.div className="type" variants= {textVariants}>
                    <Typewriter options={{
                        autoStart:true,
                        loop: true,
                        delay: 40,
                        strings: [
                            "I'm a Developer.",
                            "I'm a Comp Sci Grad.",
                            "I'm a Photographer.",
                            "I'm a Digital Artist.",
                        ],
                    }}/>
                </motion.div>
            <div className="buttons">
                <motion.button variants= {textVariants}>See My Projects</motion.button>
                <motion.button variants= {textVariants}>Contact Me</motion.button>
            </div>
            <motion.div className="scrollButton" variants= {textVariants} animate="scrollButton">
            <a href={"#About"}><BsFileArrowDown/></a>
            </motion.div>
        </motion.div>
        </div>
    </div>
)
}

export default Homepage