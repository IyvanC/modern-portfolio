import { motion } from "framer-motion";
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import { fadeIn } from "../../variants";
import { useEffect, useState } from "react";

const Roadmap = () => {
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
            Roadmap
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            className="w-full xl:w-3/4 mx-auto mb-6 xl:mb-12 px-2 xl:px-0"
          >
            Our roadmap is a testament to our commitment towards continual growth and development. It lays the framework of our journey, outlining crucial milestones that direct our efforts and the progression we picture for ElectrAura's future.
          </motion.p>

          <motion.h3
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h3"
          >
            Development Milestones
          </motion.h3>
          <motion.ul
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            animate="show"
            className="w-full xl:w-3/4 mx-auto mb-6 xl:mb-12 px-2 xl:px-0 list-disc list-inside"
          >
            <li>Conceptualization: A ground-breaking idea to pioneer the harmonization of health, music, and cryptocurrency.</li>
            <li>Assembling the Team: Gathering a diverse team of tech innovators, musicians, and health professionals.</li>
            <li>Developing EAURA: Launching our unique cryptocurrency, focused on music appreciation, artist support, and health rewards.</li>
            <li>Building the Mobile app: Merging health metrics tracking, music streaming, and cryptocurrency management into one user-friendly mobile app.</li>
            <li>Growing the Community: Building a thriving community of users, artists, and crypto enthusiasts embracing our vision.</li>
          </motion.ul>

          <motion.h3
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h3"
          >
            Future Plans
          </motion.h3>
          <motion.ul
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            animate="show"
            className="w-full xl:w-3/4 mx-auto mb-6 xl:mb-12 px-2 xl:px-0 list-disc list-inside"
          >
            <li>Custom Hardware Development: Upon reaching a $10 million market cap, we aim to design and manufacture custom hardware to further revolutionize the user experience.</li>
            <li>Supercharging the Rewards Program: Augmenting the rewards program for higher engagement and improved user health metrics.</li>
            <li>Collaborations with More Artists: Continuously expanding our music library by partnering with a diverse range of artists worldwide.</li>
            <li>Global Community Expansion: Scaling the ElectrAura community to reach new demographics, cultures, and regions.</li>
            <li>Continuous Platform Enhancement: Guided by user feedback, we will continually enhance the platform's features and functionalities.</li>
          </motion.ul>

          <motion.p
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            animate="show"
            className="w-full xl:w-3/4 mx-auto mb-6 xl:mb-12 px-2 xl:px-0"
          >
            Join us as we navigate the roadmap towards a harmonized future of health, music, and cryptocurrency.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
