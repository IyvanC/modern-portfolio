import { motion } from "framer-motion";
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import { fadeIn } from "../../variants";
import { useEffect, useState } from "react";

const FAQs = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="min-h-screen bg-primary/30 py-32 text-center xl:text-left overflow-y-auto">
      <Circles />

      {/* avatar img */}
      <motion.div
        variants={fadeIn("right", 2.2)}
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
            FAQs
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            className="w-full xl:w-3/4 mx-auto mb-6 xl:mb-12 px-2 xl:px-0"
          >
            Questions are a crucial part of your journey with ElectrAura🩵🩻⚡️✨. In our FAQs section, we have gathered the most frequently asked questions and provided clear, concise answers to help you navigate our world with ease. These include queries about:
          </motion.p>
          <motion.ul
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            animate="show"
            className="w-full xl:w-3/4 mx-auto mb-6 xl:mb-12 px-2 xl:px-0 list-disc list-inside"
          >
            <li>Getting started with ElectrAura</li>
            <li>Understanding EAURA tokens</li>
            <li>Using the ElectrAura mobile app</li>
            <li>Earning and managing EAURA through our rewards program</li>
            <li>Providing artist donations and messages</li>
            <li>Future plans including our Custom Hardware Project</li>
          </motion.ul>
          <motion.p
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            animate="show"
            className="w-full xl:w-3/4 mx-auto mb-6 xl:mb-12 px-2 xl:px-0"
          >
            Our FAQs are regularly updated to ensure the most relevant information and guidance is available to you at all times.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
