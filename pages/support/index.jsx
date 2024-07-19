import { motion } from "framer-motion";
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import { fadeIn } from "../../variants";
import { useEffect, useState } from "react";

const Support = () => {
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
            Support
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            className="w-full xl:w-3/4 mx-auto mb-6 xl:mb-12 px-2 xl:px-0"
          >
            Customer support is at the heart of our commitment to ensuring a pleasant and seamless experience with ElectrAura. Our trusted support team is always ready to assist you with any queries or concerns you may have.
          </motion.p>

          <motion.h3
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h3"
          >
            Contact Us
          </motion.h3>
          <motion.p
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            animate="show"
            className="w-full xl:w-3/4 mx-auto mb-6 xl:mb-12 px-2 xl:px-0"
          >
            We value your feedback and queries. They help us enhance and evolve the ElectrAura platform as per your needs. You can get in touch with us via:
            <ul className="list-disc list-inside mt-4">
              <li>Email: For any challenges, queries, or suggestions, feel free to shoot us an email at support@electraura.com.</li>
              <li>Social Media: Participate in our online discussions, ask questions, and get the latest updates by following us on our social media platforms.</li>
            </ul>
          </motion.p>

          <motion.h3
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h3"
          >
            Help Center
          </motion.h3>
          <motion.p
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            animate="show"
            className="w-full xl:w-3/4 mx-auto mb-6 xl:mb-12 px-2 xl:px-0"
          >
            Our Help Center is home to comprehensive resources designed to guide you through every step of your ElectrAura experience. From detailed articles and video guides about our features to step-by-step walkthroughs about setting up your account and managing EAURA tokens, we've got you covered!
            <br /><br />
            Whether you're new to ElectrAura or a long-term user, our Help Center is a valuable resource for all your needs. With constant updates and additions, we ensure you have the up-to-date information you need for a pleasant and seamless ElectrAura experience.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Support;
