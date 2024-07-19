import { motion } from "framer-motion";
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import { fadeIn } from "../../variants";
import { useEffect, useState } from "react";

const Legal = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="min-h-screen bg-primary/30 py-32 text-center xl:text-left">
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

      <div className="container mx-auto flex flex-col items-center xl:flex-row gap-x-6 px-4 xl:px-0">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Legal Information
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            className="max-w-full xl:max-w-[60%] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            We place a keen emphasis on clarity, compliance, and the legal safeguards in place for our community members. At ElectrAura🩵🩻⚡️✨, we assure you that we adhere strictly to regulatory requirements, ensuring clear, transparent, and secure operations.
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto py-8 px-4 xl:px-0">
        {/* Privacy Policy */}
        <motion.h3
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="h3"
        >
          Privacy Policy
        </motion.h3>
        {isClient && (
          <motion.p
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            animate="show"
            className="max-w-full xl:max-w-[60%] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            At ElectrAura, we respect your privacy and are committed to protecting your personal data. Our Privacy Policy outlines:
            <ul className="list-disc list-inside mt-4">
              <li>The types of personal data we collect from you</li>
              <li>How we handle and use your personal information</li>
              <li>How we protect your data and maintain its privacy</li>
              <li>Your rights and choices regarding your information</li>
            </ul>
            We continuously strive to maintain the highest standards of privacy by adopting advanced data security measures. Understanding our Privacy Policy ensures that you have full knowledge, control, and decision-making power over your data.
          </motion.p>
        )}

        {/* Terms of Service */}
        <motion.h3
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="h3"
        >
          Terms of Service
        </motion.h3>
        {isClient && (
          <motion.p
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            animate="show"
            className="max-w-full xl:max-w-[60%] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            By using the ElectrAura platform, you agree to our Terms of Service. This agreement outlines:
            <ul className="list-disc list-inside mt-4">
              <li>Your obligations as an ElectrAura user</li>
              <li>Our responsibilities as a service provider</li>
              <li>Detailed guidelines about the fair and permitted use of our platform</li>
              <li>The limitations and disclaimers relevant to our service</li>
            </ul>
            We advise you to read through our Terms of Service thoroughly to understand the framework that governs your use of ElectrAura and our obligations to you. This ensures a fair, harmonious, and civil environment for all our community members.
          </motion.p>
        )}
      </div>
    </div>
  );
};

export default Legal;
