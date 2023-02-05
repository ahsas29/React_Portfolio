import { FaHtml5, FaCss3, FaNodeJs, FaReact, FaPhoneAlt, FaUser, FaMapMarkerAlt, FaPaperPlane, FaInstagram, FaLinkedin, FaJava, FaGithub, FaPython } from "react-icons/fa";
import { SiJavascript, SiLeetcode } from "react-icons/si";
import work1 from "./assets/cs.gif";
import work2 from "./assets/cs.gif";
import work3 from "./assets/cs.gif";
import work4 from "./assets/cs.gif";
import work5 from "./assets/cs.gif";
import work6 from "./assets/cs.gif";


export const navLinks = ["home", "about", "skills", "portfolio", "contact"]

export const socialIcons = [
 <a href="https://www.linkedin.com/in/ahsas-srivastava-976065189/" target="_blank" rel="noreferrer"><FaLinkedin /></a> ,
 <a href="https://www.instagram.com/_.a.h.s.a.s._/" target="_blank" rel="noreferrer"><FaInstagram /></a>,
 <a href="https://github.com/ahsas29" target="_blank" rel="noreferrer" > <FaGithub /></a>,
 <a href="https://leetcode.com/ahsassrivastava29901/" rel="noreferrer"  target="_blank"> <SiLeetcode /></a> 
]

export const bios = [
  {
    id: 1,
    icon: <FaUser />,
    key: "Name",
    value: "Ahsas"
  },
  {
    id: 2,
    icon: <FaPhoneAlt />,
    key: "Phone",
    value: "+917348258925"
  },
  {
    id: 3,
    icon: <FaPaperPlane />,
    key: "Email",
    value: "ahsassrivastava29901@gmail.com"
  }
]

export const icons = [<a href="https://www.w3schools.com/html/" target="_blank" rel="noreferrer"><FaHtml5 /></a>,
<a href="https://www.w3schools.com/css/css_intro.asp" target="_blank" rel="noreferrer"><FaCss3 /></a>,
 <a href="https://www.w3schools.com/js/js_intro.asp" target="_blank" rel="noreferrer"><SiJavascript /></a>,
 <a href="https://www.w3schools.com/java/java_intro.asp" target="_blank" rel="noreferrer"><FaJava /></a>,
   <a href="https://www.w3schools.com/react/react_intro.asp" target="_blank" rel="noreferrer"><FaReact /></a>,
   <a href="https://www.w3schools.com/nodejs/nodejs_intro.asp" target="_blank" rel="noreferrer"><FaNodeJs /></a>,
   <a href="https://docs.github.com/en/get-started/quickstart/git-and-github-learning-resources" target="_blank" rel="noreferrer"><FaGithub /></a>,
   <a href="https://www.w3schools.com/python/python_intro.asp" target="_blank" rel="noreferrer"><FaPython /></a>]

export const experiences = [
  {
    id: 1,
    year: "2020-2024",
    position: "Aspiring Software Developer",
    company: "B.Tech (ECE), SRM Institute of Science and Technology",
  },
  {
    di: 2,
    year: "2022-Present",
    position: "President",
    company: "Alumni Chapter of ECE"
  },
  {
    di: 3,
    year: "2021-2022",
    position: "Committee Head",
    company: "AARUUSH, National Level Techno Management Fest"
  },
  {
    id: 4,
    year: "2021",
    position: "Graphic Designer & Front End Developer",
    company: "Vidyam Tutorials"
  },
  {
    id: 5,
    year: "2020",
    position: "Marketing Intrern",
    company: "MyCaptain"
  }
]
export const finishes = [
  {
    id: 1,
    number: '2+',
    itemName: "Years Of Learning"
  },
  {
    id: 2,
    number: "Learnt about",
    itemName: "multiple job roles"
  },
  {
    id: 3,
    number: "Team / Project",
    itemName: "Management"
  },
  {
    id: 4,
    number: "Still",
    itemName: "learning.."
  }
]
export const workImages = [
  {
    id: 1,
    img: work1,
    name: "project 1",
    category: "web"
  },
  {
    id: 2,
    img: work2,
    name: "project 2",
    category: "web"
  },
  {
    id: 3,
    img: work3,
    name: "project 3",
    category: "web"
  },
  {
    id: 4,
    img: work4,
    name: "project 4",
    category: "app"
  },
  {
    id: 5,
    img: work5,
    name: "project 5",
    category: 'app'
  },
  {
    id: 6,
    img: work6,
    name: "project 6",
    category: "design"
  }
]


export const workNavs = [
  "All", "Web"
]

export const contacts = [
  {
    id: 1,
    icon: <FaMapMarkerAlt />,
    infoText: "Chennai, India"
  },
  {
    id: 2,
    icon: <FaPaperPlane />,
    infoText: "ahsassrivastava29901@gmail.com"
  },
  {
    id: 3,
    icon: <FaPhoneAlt />,
    infoText: "+917348258925"
  }
]
