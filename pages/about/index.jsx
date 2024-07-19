import { motion } from "framer-motion";
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import { fadeIn } from "../../variants";
import { useEffect, useState } from "react";

const About = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="min-h-screen bg-primary/30 py-32 text-center xl:text-left overflow-y-auto">
      <Circles />

      {/* avatar img */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        <Avatar />
      </motion.div>

      <div className="container mx-auto flex flex-col items-center xl:items-start gap-x-6 px-4 xl:px-0">
        {/* text */}
        <div className="w-full xl:w-3/4 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            About Us
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            className="w-full xl:w-3/4 mx-auto mb-6 xl:mb-12 px-2 xl:px-0"
          >
            At ElectrAura🩵🩻⚡️✨, we are envisioning a transformative future where health, music, and decentralized finance coexist in harmonic unison. Our unparalleled amalgamation of technological innovation, artistic inspiration, and forward-thinking approach sets us apart. We are relentlessly dedicated to creating a community where everyone can thrive while experiencing truly unique, immersive moments.
          </motion.p>

          <motion.h3
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h3"
          >
            Our Vision
          </motion.h3>
          <motion.p
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            animate="show"
            className="w-full xl:w-3/4 mx-auto mb-6 xl:mb-12 px-2 xl:px-0"
          >
            Our vision is to weave the worlds of health, music, and Web3 into a unified experience. We aim to dissolve barriers between artists and audiences, providing a platform where interactions are not only possible but personal. Our currency, EAURA, inspired by the iPod Shuffle and EMS microcurrent technology like Healy, is central to this vision. We believe in the power and potential of cryptocurrency and see it as a vessel for building relationships, enhancing health, and fostering an unparalleled appreciation of music. Through our mobile application, we aim to motivate our users towards healthier lifestyles, rewarding their efforts with EAURA and creating a perfect harmony between wellbeing and wealth creation. As we look forward to developing custom hardware at a $10 million market cap, we remain steadfast in shaping a world where health, music, and cryptocurrency interact fluidly, paving the way for transformative experiences.
          </motion.p>

          <motion.h3
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h3"
          >
            Our Team
          </motion.h3>
          <motion.p
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            animate="show"
            className="w-full xl:w-3/4 mx-auto mb-6 xl:mb-12 px-2 xl:px-0"
          >
            ElectrAura's dedicated team consists of forward-thinking innovators, seasoned tech-savvy enthusiasts, and passionate musicians, all joined by the shared goal of creating output that truly matters.
          </motion.p>
          <motion.p
            variants={fadeIn("left", 0.6)}
            initial="hidden"
            animate="show"
            className="w-full xl:w-3/4 mx-auto mb-6 xl:mb-12 px-2 xl:px-0"
          >
            <strong>Founder & CEO - John Doe</strong><br />
            With years of executive experience in fintech startups and a lifelong passion for music, John Doe envisioned ElectrAura's captivating blend of music, health, and cryptocurrency.
          </motion.p>
          <motion.p
            variants={fadeIn("left", 0.8)}
            initial="hidden"
            animate="show"
            className="w-full xl:w-3/4 mx-auto mb-6 xl:mb-12 px-2 xl:px-0"
          >
            <strong>CTO - Mary Smith</strong><br />
            Specializing in blockchain technology and mobile app development, Mary Smith's technological expertise is crucial to the development and upkeep of EAURA and the ElectrAura mobile application.
          </motion.p>
          <motion.p
            variants={fadeIn("left", 1.0)}
            initial="hidden"
            animate="show"
            className="w-full xl:w-3/4 mx-auto mb-6 xl:mb-12 px-2 xl:px-0"
          >
            <strong>Chief Music Officer - James Taylor</strong><br />
            A renowned artist in the music industry, James Taylor brings with him invaluable insights, overseeing artist relations and aligning the platform's music technology for the best user experience.
          </motion.p>
          <motion.p
            variants={fadeIn("left", 1.2)}
            initial="hidden"
            animate="show"
            className="w-full xl:w-3/4 mx-auto mb-6 xl:mb-12 px-2 xl:px-0"
          >
            <strong>Head of Health Innovation - Dr. Jane Lewis</strong><br />
            A leading expert in health tech, Dr. Jane Lewis spearheads the integration of health tracking features into the ElectrAura app, ensuring users are motivated and rewarded for their health-conscious efforts.
          </motion.p>
          <motion.p
            variants={fadeIn("left", 1.4)}
            initial="hidden"
            animate="show"
            className="w-full xl:w-3/4 mx-auto mb-6 xl:mb-12 px-2 xl:px-0"
          >
            <strong>Community Relations Manager - Patrick Davis</strong><br />
            As the link between ElectrAura and its dynamic community, Patrick Davis manages and nurtures relationships with all ElectrAura users, broadening outreach while preserving the platform's core values.
          </motion.p>
          <motion.p
            variants={fadeIn("left", 1.6)}
            initial="hidden"
            animate="show"
            className="w-full xl:w-3/4 mx-auto mb-6 xl:mb-12 px-2 xl:px-0"
          >
            Behind the scenes, our team is supported by a collective of developers, marketing professionals, support specialists, and content creators, all committed to driving the vision and values of ElectrAura.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default About;
