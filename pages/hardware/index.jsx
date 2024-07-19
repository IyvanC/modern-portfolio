import { motion } from "framer-motion";
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import { fadeIn } from "../../variants";
import { useEffect, useState } from "react";

const CustomHardware = () => {
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
            Custom Hardware Project
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            className="w-full xl:w-3/4 mx-auto mb-6 xl:mb-12 px-2 xl:px-0"
          >
            One of the ambitious goals in ElectrAura's🩵🩻⚡️✨ roadmap is the development of custom hardware. Inspired by the iPod Shuffle and EMS microcurrent technology like Healy, our custom hardware will further evolve the user experience and bring a tangible element to our vision of harmonizing health, music, and cryptocurrency.
          </motion.p>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            className="w-full xl:w-3/4 mx-auto mb-6 xl:mb-12 px-2 xl:px-0"
          >
            Reaching a $10 million market cap sparks the jumping-off point for our hardware development journey. This project aims to integrate health metrics tracking and immersive music experiences in a compact and user-friendly device, fueled by EAURA.
          </motion.p>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            className="w-full xl:w-3/4 mx-auto mb-6 xl:mb-12 px-2 xl:px-0"
          >
            Through this venture, we bring you one step closer to our dream – listening to the same frequency and music as everyone in the room, creating a unified and immersive experience. Stay tuned as we divulge more details about this project as we tread closer to our market cap goal!
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default CustomHardware;
