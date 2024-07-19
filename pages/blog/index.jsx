import { motion } from "framer-motion";
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import { fadeIn } from "../../variants";
import { useEffect, useState } from "react";

const Blog = () => {
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
            Blog
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            className="w-full xl:w-3/4 mx-auto mb-6 xl:mb-12 px-2 xl:px-0"
          >
            Welcome to ElectrAura's🩵🩻⚡️✨ Blog – your ultimate source for the latest news, comprehensive crypto education, and exclusive artist interviews. We have gathered a rich ensemble of knowledge, insights, and expert perspectives to help you stay informed, learn, and connect with the heartbeat of our thriving community.
          </motion.p>

          <motion.h3
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h3"
          >
            News and Updates
          </motion.h3>
          <motion.p
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            animate="show"
            className="w-full xl:w-3/4 mx-auto mb-6 xl:mb-12 px-2 xl:px-0"
          >
            In our News and Updates section, you will find:
            <ul className="list-disc list-inside mt-4">
              <li>The latest information about ElectrAura's advancements, new features, and ecosystem developments</li>
              <li>Announcements regarding partnerships, collaborations, and community events</li>
              <li>Updates about improvisations and platform advancements based on your feedback</li>
              <li>Crucial news from the crypto world that affects our community and EAURA</li>
            </ul>
            Stay tuned to keep your finger on the pulse of all things ElectrAura.
          </motion.p>

          <motion.h3
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h3"
          >
            Crypto Education
          </motion.h3>
          <motion.p
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            animate="show"
            className="w-full xl:w-3/4 mx-auto mb-6 xl:mb-12 px-2 xl:px-0"
          >
            As an integral part of the ElectrAura community, we want you to feel confident navigating the ecosystem of cryptocurrency. In our Crypto Education section, we offer:
            <ul className="list-disc list-inside mt-4">
              <li>Beginner guides to blockchain technology and cryptocurrency</li>
              <li>Detailed insights on the EAURA economy</li>
              <li>Information on how to invest, earn, and manage your EAURA tokens</li>
              <li>Security guidelines to protect your assets</li>
              <li>Updates and analyses on crypto trends, market dynamics, and more</li>
            </ul>
            Whether you're a crypto novice or a seasoned investor, our Crypto Education series is designed to advance your knowledge at every level.
          </motion.p>

          <motion.h3
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h3"
          >
            Interviews with Artists
          </motion.h3>
          <motion.p
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            animate="show"
            className="w-full xl:w-3/4 mx-auto mb-6 xl:mb-12 px-2 xl:px-0"
          >
            Join us as we host conversations with talented artists from around the globe in our Interviews with Artists section. Here, you can:
            <ul className="list-disc list-inside mt-4">
              <li>Get to know more about your favorite artists, their inspirations, and their creative process</li>
              <li>Discover how artists are embracing EAURA and experiencing the ElectrAura community</li>
              <li>Watch exclusive behind-the-scenes glimpses into their music-making process</li>
              <li>Learn about their health routines and how they stay fit while delivering incredible music</li>
            </ul>
            Dive into these captivating stories and deepen your connection with the artists that inspire you!
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
