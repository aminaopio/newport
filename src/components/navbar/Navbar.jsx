import { motion } from 'framer-motion';
import { AiOutlineMail } from 'react-icons/ai';
import { BiLeaf } from 'react-icons/bi';
import { SlSocialGithub, SlSocialLinkedin } from 'react-icons/sl';
import Sidebar from '../../sidebar/Sidebar';
import "./Navbar.scss";

const Navbar = () => {
return (<div className="navbar">
    {/* Sidebar */}
    <Sidebar/>
    <div className="wrapper">
        <motion.span
        initial= {{ opacity:0, scale:0.5}}
        animate={{ opacity:1, scale: 1 }}
        transition={{ duration: 0.5 }}
        >AO <BiLeaf/></motion.span>
        <div className="social">
        <a href="https://github.com/aminaopio" target="_blank" rel="noreferrer"><SlSocialGithub/></a>
        <a href="https://www.linkedin.com/in/aminaopio/" target="_blank" rel="noreferrer"><SlSocialLinkedin/></a>
        <a href="mailto:aminaopio@gmail.com" target="_blank" rel="noreferrer"><AiOutlineMail/></a>
        </div>
    </div>
</div>
)
};

export default Navbar