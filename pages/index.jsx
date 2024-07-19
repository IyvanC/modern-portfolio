import { motion } from "framer-motion";
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div className="min-h-screen bg-primary/60 text-center xl:text-left overflow-y-auto relative">
      <div className="absolute inset-0">
        <ParticlesContainer />
      </div>
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10 flex flex-col justify-center relative z-10">
        <div className="text-center flex flex-col justify-center xl:pt-20 xl:text-left h-full container mx-auto">
          {/* title */}
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1"
          >
            $EAURA 
            <br />
            <span className="text-accent">Get paid to listen to music.</span>
            <br />
            
          </motion.h1>

          {/* subtitle */}
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-4 xl:mb-8"
          >
            The first Listen-to-Earn 🎶🎧💸
          </motion.p>

          {/* btn */}
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mb-10 xl:mb-16 flex justify-end xl:justify-start"
          >
            <ProjectsBtn />
          </motion.div>

          <motion.h2
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Revolutionizing Experiences
          </motion.h2>
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
          >
            Discover EAURA, an exceptional cryptocurrency inspired by the iPod Shuffle and EMS microcurrent technology such as Healy. We've leveraged the power of blockchain to ensure not only privacy and transparency but convenience and novelty. EAURA is our vessel to create a unified syncing experience, captivating audiences, and setting a new standard for immersive enjoyment.
          </motion.p>

          <motion.h2
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Shaping the Future of Donations
          </motion.h2>
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
          >
            We believe in the passionate connection between artists and their fans. EAURA amplifies this relationship by facilitating direct donations to artists, serving as a platform for genuine connection and personal replies.
          </motion.p>

          <motion.h2
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Health Metrics Meet Cryptocurrency
          </motion.h2>
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
          >
            Stay motivated. Stay fit. Stay rewarded. With the ElectrAura mobile app, your healthy habits can play a key role in your wealth. The mobile app tracks your health metrics while appreciating your loyalty with EAURA rewards when you walk and listen to music.
          </motion.p>

          <motion.h2
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Building a Thriving Community
          </motion.h2>
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
          >
            At ElectrAura, we believe that the future is better when built together. We're more than a service, we're a community. Our roadmap unveils the creation of custom hardware, an ambitious plan to come to life when we reach a $10 million market cap, solidifying ElectrAura's unique footprint in the blockchain sector.
          </motion.p>

          <motion.h2
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Join the ElectrAura Community
          </motion.h2>
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
          >
            Immerse yourself in the symbiosis of health, music, and cryptocurrency. Join the ElectrAura community today as we pioneer the unexplored terrains of a boundlessly unified experience.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Home;
