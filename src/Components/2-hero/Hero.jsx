import "./hero.css";
import Lottie from "lottie-react";
import developerAnimation from "../../../public/animation/developer.json";
import { motion } from "framer-motion";
import myPic from "../../../public/pic/MyPic.png";
export default function Hero() {
  return (
    <section className="hero flex">
      <div className="left-section">
        <div className="parent-avatar">
          <motion.img
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2 }}
            src="https://res.cloudinary.com/dprfoqe2j/image/upload/v1724266335/MyPic_wwtzg8.png"
            className="avatar"
            alt=""
          />
          <span className="icon-verified"></span>
        </div>
        <h1 className="title">Frontend Developer</h1>
        <p className="subtitle">
          Hi iam kholoud , a Frontend Developer React.js ambitious, detail
          oriented and passionate about creating engaging user experience.eager
          to contribute fresh ideas and skills to dynamic projects
        </p>
        <div className="icons flex">
          <div className="icon icon-twitter"></div>
          <div className="icon icon-instagram"></div>
          <div className="icon icon-github"></div>
          <div className="icon icon-linkedin-square"></div>
        </div>
      </div>
      <div className="right-section animation">
        <Lottie animationData={developerAnimation} />
      </div>
    </section>
  );
}
