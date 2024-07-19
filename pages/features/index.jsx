import { motion } from "framer-motion";
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import { fadeIn } from "../../variants";
import { useEffect, useState } from "react";

const Features = () => {
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
            Features
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            className="w-full xl:w-3/4 mx-auto mb-6 xl:mb-12 px-2 xl:px-0"
          >
            ElectrAura🩵🩻⚡️✨ is the synthesis of innovative features designed to harmonize health, music, and the financial world. Powered by EAURA, our groundbreaking platform offers benefits of which are just as exceptional as they are groundbreaking.
          </motion.p>

          <motion.h3
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h3"
          >
            Harmonizing Health and Music
          </motion.h3>
          <motion.p
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            animate="show"
            className="w-full xl:w-3/4 mx-auto mb-6 xl:mb-12 px-2 xl:px-0"
          >
            Our primary feature is the beautiful blend of health tracking and music appreciation. As you move to the rhythm of your favorite tracks, our mobile application measures your health metrics and rewards your efforts with EAURA. This creates an immersive experience where your daily walk or workout isn't just a physical activity, but an engagement with the universal language of music, rewarded by cryptocurrency.
          </motion.p>

          <motion.h3
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h3"
          >
            Direct Donations to Artists
          </motion.h3>
          <motion.p
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            animate="show"
            className="w-full xl:w-3/4 mx-auto mb-6 xl:mb-12 px-2 xl:px-0"
          >
            As an artist-centric platform, ElectrAura makes it easy for fans to support their favorite artists through direct donations using EAURA. This direct channel eliminates the intermediaries and brings more financial benefits to the artists. Each donation is a vote of support, affirming the creative efforts of artists and fueling their adventure in the music industry.
          </motion.p>

          <motion.h3
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h3"
          >
            Private DM for Artists
          </motion.h3>
          <motion.p
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            animate="show"
            className="w-full xl:w-3/4 mx-auto mb-6 xl:mb-12 px-2 xl:px-0"
          >
            We believe in intimately connecting artists and fans, and our private DM feature provides such a pathway. Fans can send personal messages to artists alongside their donations, creating an environment full of genuine appreciation and valuable connections. This revolutionizes the traditional artist-fan dynamic, making it more personal and rewarding.
          </motion.p>

          <motion.h3
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h3"
          >
            Health Metrics Tracking
          </motion.h3>
          <motion.p
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            animate="show"
            className="w-full xl:w-3/4 mx-auto mb-6 xl:mb-12 px-2 xl:px-0"
          >
            Health and wellness are at the core of ElectrAura. Our advanced mobile application measures critical health metrics such as heart rate, steps, and sleep quality. But we move a step beyond merely tracking; we reward your efforts. As your metrics improve, so does your EAURA balance, motivating you to maintain a healthier lifestyle while enjoying and appreciating the music you love.
          </motion.p>

          <motion.h3
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h3"
          >
            Rewards Program
          </motion.h3>
          <motion.p
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            animate="show"
            className="w-full xl:w-3/4 mx-auto mb-6 xl:mb-12 px-2 xl:px-0"
          >
            Living a healthier lifestyle is rewarding in itself, but at ElectrAura🩵🩻⚡️✨, we take this a step further. Our innovative Rewards Program encourages wellness by awarding users EAURA tokens for engaging in healthy activities and participating in our community.
            <br /><br />
            For every step you walk and every moment you spend immersed in music via our mobile app, you can earn EAURA tokens. Not only does this merge your fitness journey with enjoyable tunes, but it also allows you to amass wealth as you get healthier, making well-being more enjoyable and rewarding.
            <br /><br />
            Beyond physical activity, active participation in the ElectrAura community can yield additional rewards. From listening to newly released tracks, assisting in platform enhancement through feedback sharing, to engaging in meaningful interactions with artists, many unique opportunities can earn you EAURA tokens.
            <br /><br />
            Enjoy health, enjoy music, accrue wealth. Welcome to ElectrAura's Rewards Program.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Features;
