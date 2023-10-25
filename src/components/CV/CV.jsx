import { motion } from 'framer-motion';
import { BsFileArrowDown } from 'react-icons/bs';
import { MdOutlineSchool, MdWorkOutline } from "react-icons/md";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Sidebar from "../../sidebar/Sidebar";
import "./CV.scss";

const textVariants ={
    scrollButton: {
        opacity: 0,
        y:0,
        transition:{
            duration: 2,
            repeat: Infinity,
        },
    }
}

const CV = () => {
return (
    <div className="CV">
        <Sidebar/>
    <VerticalTimeline lineColor="#ffffff">
        <VerticalTimelineElement
        iconStyle={{ background: "rebeccapurple", color: "#fff" }}
        icon={<MdOutlineSchool />}
        style={{ height: "80px"}}
        >
        <h3>
        University of North Texas, Denton, Texas
        </h3>
        <h4>
            Bachelor of Science, Computer Science
        </h4>
        <p>July 2023</p>
<p>
•	Learned time complexity of various algorithms; merge and heap sort; trees and graphs, etc. Worked on multiple sprints for design and implementation of software systems utilizing current design tools such as UML, system and user documentation. 
</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
        iconStyle={{ background: "rebeccapurple", color: "#fff" }}
        icon={<MdOutlineSchool />}
        style={{ height: "80px" }}
        >
        <h3>
        University of North Texas, Denton, Texas
        </h3>

        <h4>
            Minor of Arts, International Studies
        </h4>
        <p>July 2023</p>
<p>
•	Drafted and edited documents such as user manuals, software installation guides, legal disclaimers, thesis statements, etc.
</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
        iconStyle={{ background: "pink", color: "#fff" }}
        icon={<MdWorkOutline />}
        style={{ height: "80px" }}
        >
        <h3>
        Vehicular Edge Computing & Security Research Intern — National Science Foundation
        </h3>
        <h4>Denton, TX</h4>
        <p>June 2022-August 2022</p>
        <p>•	Tested various real time object detection algorithms for multiple edge computing devices.</p>
        <p>•	Identified methods of improvement for existing techniques.</p>
<p>•	Utilized MMdetection framework and Python Anaconda Environment.</p>

        </VerticalTimelineElement>

        <VerticalTimelineElement
        iconStyle={{ background: "pink", color: "#fff" }}
        icon={<MdWorkOutline />}
        style={{ height: "80px" }}
        >
        <h3>
        Adjunct Professor Assistant — Tarrant County Community College
        </h3>
        <h4>
            Fort Worth, TX
        </h4>
        <p>January 2019 - December 2020</p>
        <p>
        Managed class material for 3 university level business and accounting courses.
        </p>
        <p>•	Set foundation for online learning platforms.</p>
        <p>•	Kept organized record of student submissions.  </p>
        </VerticalTimelineElement>
        <motion.div className="scrollButton" variants= {textVariants} animate="scrollButton">
            <a href={"#Portfolio"}><BsFileArrowDown/></a>
            </motion.div>
    </VerticalTimeline>
    </div>
);
}

export default CV;