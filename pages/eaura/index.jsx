import { motion } from "framer-motion";
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import { fadeIn } from "../../variants";
import { useEffect, useState } from "react";

const EAURA = () => {
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
            EAURA: Our Cryptocurrency
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            className="w-full xl:w-3/4 mx-auto mb-6 xl:mb-12 px-2 xl:px-0"
          >
            At the heart of ElectrAura🩵🩻⚡️✨ lies EAURA, our revolutionary cryptocurrency. Designed and developed with cutting-edge blockchain technology, EAURA beautifully encapsulates our company ethos, brings our vision to life, and provides a token that is integrative, interactive, and innovative.
          </motion.p>

          <motion.h3
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h3"
          >
            What is EAURA?
          </motion.h3>
          <motion.p
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            animate="show"
            className="w-full xl:w-3/4 mx-auto mb-6 xl:mb-12 px-2 xl:px-0"
          >
            EAURA is a meticulously crafted cryptocurrency that embodies our belief in the fusion of music, health, and blockchain technology. Inspired by the iPod Shuffle and EMS microcurrent technology like Healy, EAURA enables a unique understanding and appreciation of music and health.
            EAURA fuels our platform by acting as the atomic unit of transactions, facilitating direct donations to artists and serving as rewards for health-conscious users. Functioning as the medium in a private DM, artists and fans can have exclusive interactions, making the connection personal and stirring. Meanwhile, users can earn EAURA by healthy activities such as walking and listening to music via our mobile application.
            By holding EAURA, you become a part of a transdisciplinary community, experiencing an innovative amalgamation of health tracking, music appreciation, and cryptocurrency rewards.
          </motion.p>

          <motion.h3
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h3"
          >
            Why Choose EAURA?
          </motion.h3>
          <motion.p
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            animate="show"
            className="w-full xl:w-3/4 mx-auto mb-6 xl:mb-12 px-2 xl:px-0"
          >
            Choosing EAURA means choosing a disruptive approach that is transforming the traditional spheres of health, music, and finance.
            <br /><br />
            <strong>Unique Experiences:</strong> EAURA is more than a cryptocurrency—it's a passport to unique, personal experiences with your favorite artists. By facilitating direct donations and private interactions, EAURA encourages deeper connections.
            <br /><br />
            <strong>Rewarding Health:</strong> Choosing EAURA means deciding to reward your health habits. With our mobile application, engaging in healthy activities such as walking and listening to music can earn you EAURA tokens.
            <br /><br />
            <strong>Inclusive Community:</strong> EAURA symbolizes membership to an overarching, diverse community, where artists, fans, investors, and health enthusiasts worldwide come together.
            <br /><br />
            <strong>Future Growth:</strong> Investing in EAURA is a vote for a progressive future. As we plan to develop custom hardware upon reaching a $10 million market cap, being an early adopter presents massive growth potential.
            <br /><br />
            <strong>Secure Investments:</strong> By leveraging blockchain technology, EAURA ensures your transactions and investments are secure, private, and transparent.
            <br /><br />
            EAURA isn’t just a cryptocurrency—it’s a lifestyle. Join us today and be a part of our vision for a healthier, more musical, and financially empowered world.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default EAURA;
