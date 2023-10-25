import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from "react";
import Sidebar from '../../sidebar/Sidebar';
import "./Portfolio.scss";
import proj1 from "/proj1.png";
import proj2 from "/proj2.png";
import proj3 from "/proj3.png";
import proj4 from "/proj4.png";

const items = [
{
    id:1,
    title: "Meet Me Halfway",
    img: proj1,
    desc: "Meet Me Halfway is a mobile application developed using Flutter and Dart, integrated with Google Maps APIs. It enables users to find a midpoint for meetings and choose points of interest. Users can register, log in, and access their profiles. The app provides directions to the selected location and includes features like Google/Apple login, backend user data storage, and a dashboard for profile management. Current functionalities include registration, login, Google Maps integration, and midpoint calculation. Upcoming features include place autocomplete, place filtering, location services, and user communication.",
    link: "https://github.com/aminaopio/Meet-Me-Halfway",
},
{
    id:2,
    title: "Teamfight Builds",
    img: proj2,
    desc: "Teamfight Builds is a web application created using the React.js framework with Firebase backend integration. It serves as a build guide website for the popular auto chess game Teamfight Tactics, designed to assist beginners in navigating the game's complexities. Although the current information is based on an older game patch, future plans involve obtaining access to Riot Developer APIs to enhance the guide's intuitiveness and ensure it stays up-to-date.",
    link: "https://kaleidoscopic-pastelito-49f094.netlify.app/",
},
{
    id:3,
    title: "Tic Tac Toe",
    img: proj3,
    desc: "This is a React app showcasing the significance of using state management, with a focus on a basic Tic Tac Toe game. In React, state management is crucial for creating dynamic and responsive applications. This project illustrates how state enables components to update and reflect changes in data, which is essential for real-time game progress and user interactions. State ensures that the user interface accurately represents the game's current state, making it fundamental for interactive web applications.",
    link: "https://main.d2n6t6qmkqu47w.amplifyapp.com/",
},
{
    id:4,
    title: "Built-In Command Shell",
    img: proj4,
    desc: "This project is a Golang-based built-in command shell. The shell incorporates five essential built-in commands: 1. 'sh': Invokes the default shell. 2. 'help': Displays a list of available commands. 3. 'source': Reads and executes commands from a file. 4. 'mkdir': Creates one or more directories. 5. 'pwd': Outputs the absolute path. These commands enhance the functionality of the Go shell, providing essential features for command execution, directory manipulation, and information retrieval.",
    link: "https://github.com/aminaopio/CSCE4600-Project2",
}
]

const Single = ({item}) =>{
    const ref = useRef ();

    const {scrollYProgress} = useScroll ({
        target: ref,
    });

    const y = useTransform(scrollYProgress, [0,1],[-300,300])

        return (
            <section ref={ref}>
                <Sidebar/>
                <div className="container">
                    <div className="wrapper">
                        <div className="imageContainer">
                    <img src={item.img} alt=""/>
                    </div>
                    <motion.div className="textContainer">
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <a href={item.link}target="_blank" rel="noreferrer"><button>See Demo</button></a>
                    </motion.div>
                    </div>
                </div>
            </section>
        )
    };

const Portfolio = () => {
    const ref = useRef ();

    const { scrollYProgress } = useScroll ({
        target: ref,
        offset: ["end end", "start start"],
    });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    });

    return (
    <div className="portfolio" ref ={ref}>
        <div className="progress">
            <h1>Featured Projects</h1>
            <motion.div style={{ scaleX:scaleX }} className="progressBar"></motion.div>
        </div>
        {items.map((item)=>(
            <Single item={item} key={item.id} />
        ))}
    </div>
);
};

export default Portfolio