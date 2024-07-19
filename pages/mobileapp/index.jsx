import { motion } from "framer-motion";
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import { fadeIn } from "../../variants";
import { useEffect, useState } from "react";

const MobileApp = () => {
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
            The Mobile App
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            className="w-full xl:w-3/4 mx-auto mb-6 xl:mb-12 px-2 xl:px-0"
          >
            ElectrAura's mobile app is your one-stop solution for invigorating your health, enriching your music experience, and growing your wealth in cryptocurrency. Here's what the app has in store for you:
          </motion.p>
          
          <motion.h3
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h3"
          >
            Health & Fitness Tracking
          </motion.h3>
          <motion.p
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            animate="show"
            className="w-full xl:w-3/4 mx-auto mb-6 xl:mb-12 px-2 xl:px-0"
          >
            The app provides in-depth health tracking functionalities, compiling critical metrics such as your heart rate, steps walked, and sleep patterns into a fully comprehensive health profile.
          </motion.p>
          
          <motion.h3
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h3"
          >
            Goal Setting & Achievements
          </motion.h3>
          <motion.p
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            animate="show"
            className="w-full xl:w-3/4 mx-auto mb-6 xl:mb-12 px-2 xl:px-0"
          >
            Set your fitness targets and monitor your progress. Completed achievements are celebrated and rewarded with EAURA tokens!
          </motion.p>
          
          <motion.h3
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h3"
          >
            Music Streaming
          </motion.h3>
          <motion.p
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            animate="show"
            className="w-full xl:w-3/4 mx-auto mb-6 xl:mb-12 px-2 xl:px-0"
          >
            With an extensive library from talented artists around the world, the app ensures you always have the perfect soundtrack for your day, workout, or downtime.
          </motion.p>
          
          <motion.h3
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h3"
          >
            Artist Donations & DMs
          </motion.h3>
          <motion.p
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            animate="show"
            className="w-full xl:w-3/4 mx-auto mb-6 xl:mb-12 px-2 xl:px-0"
          >
            Show your support directly! Make donations to your favorite artists with EAURA tokens and send personal messages through our secure and private communication channel.
          </motion.p>
          
          <motion.h3
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h3"
          >
            EAURA Wallet
          </motion.h3>
          <motion.p
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            animate="show"
            className="w-full xl:w-3/4 mx-auto mb-6 xl:mb-12 px-2 xl:px-0"
          >
            Manage your EAURA tokens right from the app. View your balance, earned rewards, and use your tokens to interact with artists directly.
          </motion.p>
          
          <motion.h3
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h3"
          >
            Community Engagement
          </motion.h3>
          <motion.p
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            animate="show"
            className="w-full xl:w-3/4 mx-auto mb-6 xl:mb-12 px-2 xl:px-0"
          >
            The app connects you to the broader ElectrAura community. Listen to new releases, participate in exclusive events, and contribute to making ElectrAura an ever-evolving platform.
          </motion.p>
          
          <motion.h3
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h3"
          >
            Download the ElectrAura App
          </motion.h3>
          <motion.p
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            animate="show"
            className="w-full xl:w-3/4 mx-auto mb-6 xl:mb-12 px-2 xl:px-0"
          >
            Are you ready to embark on this pioneering journey? The ElectrAura mobile app is available for download on both iOS and Android platforms.
            <br /><br />
            <strong>For iOS Users:</strong> You can download the ElectrAura app from the App Store.
            <br /><br />
            <strong>For Android Users:</strong> The ElectrAura app is available on the Google Play Store.
            <br /><br />
            Download today to witness the perfect fusion of health, music, and Web3!
          </motion.p>
          
          <motion.h3
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h3"
          >
            User Guide
          </motion.h3>
          <motion.p
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            animate="show"
            className="w-full xl:w-3/4 mx-auto mb-6 xl:mb-12 px-2 xl:px-0"
          >
            Starting your journey with the ElectrAura app is easy and exciting! You can find a comprehensive User Guide within the app, providing step-by-step instructions on:
            <ul className="list-disc list-inside mt-4">
              <li>Creating and managing your account</li>
              <li>Navigating the app interface</li>
              <li>Setting up your health goals and tracking your progress</li>
              <li>Discovering music and supporting artists</li>
              <li>Making the most of our private artist-fan DMs</li>
              <li>Earning and managing your EAURA tokens</li>
            </ul>
            Our User Guide is designed to ensure you have a smooth and enjoyable experience with the app, from your first step to every achievement you unlock along the way.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default MobileApp;
