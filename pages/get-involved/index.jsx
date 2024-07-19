import { motion } from "framer-motion";
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import { fadeIn } from "../../variants";
import { useEffect, useState } from "react";

const GetInvolved = () => {
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
            Get Involved
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            className="w-full xl:w-3/4 mx-auto mb-6 xl:mb-12 px-2 xl:px-0"
          >
            ElectrAura is as much about our incredible community as it's about health, music, and cryptocurrency. We invite you to embrace our vision and become part of our journey.
          </motion.p>

          <motion.h3
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h3"
          >
            Join Our Community
          </motion.h3>
          <motion.p
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            animate="show"
            className="w-full xl:w-3/4 mx-auto mb-6 xl:mb-12 px-2 xl:px-0"
          >
            At the heart of ElectrAura lies a vibrant, diverse, and forward-thinking community of users, artists, and crypto enthusiasts. Whether you're a music lover, a health enthusiast or a blockchain admirer, there's a place for everyone in our collective.
            <br /><br />
            By joining our community, you can:
            <ul className="list-disc list-inside mt-4">
              <li>Stay updated with the latest news and announcements</li>
              <li>Participate in exclusive community events and challenges</li>
              <li>Interact directly with artists and other community members</li>
              <li>Contribute to feedback, aiding in the evolution of our platform</li>
            </ul>
            Join the ElectrAura community today and start experiencing the harmony of health, music, and cryptocurrency.
          </motion.p>

          <motion.h3
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h3"
          >
            Become an Artist Partner
          </motion.h3>
          <motion.p
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            animate="show"
            className="w-full xl:w-3/4 mx-auto mb-6 xl:mb-12 px-2 xl:px-0"
          >
            ElectrAura invites musicians and artists around the globe to join us in this pioneering journey. By becoming an Artist Partner, you will be able to:
            <ul className="list-disc list-inside mt-4">
              <li>Reach a global audience of dedicated fans</li>
              <li>Receive direct support from your fans through EAURA donations</li>
              <li>Interact with fans personally through our platform's private DM feature</li>
              <li>Contribute to the wellness journey of users as they experience your music</li>
            </ul>
            Together, we can transform the landscape of the music industry while impacting the realm of health and blockchain. Join the ElectrAura artist community and be a part of this path-breaking revolution.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default GetInvolved;
