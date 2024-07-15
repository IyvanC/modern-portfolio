import Link from "next/link";

import {
  RiTwitterLine,
  RiTelegramLine,
  RiFilePaper2Line,
} from "react-icons/ri";

export const socialData = [
  {
    name: "Twitter",
    link: "https://x.com/electrauracoin/status/",
    Icon: RiTwitterLine,
  },
  {
    name: "Telegram",
    link: "https://t.me/electraura",
    Icon: RiTelegramLine,
  },
  {
    name: "WhitePaper",
    link: "https://jumpshare.com/v/hvjRV2cxNp50ThyCkF5F",
    Icon: RiFilePaper2Line,
  },
];

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      {socialData.map((social, i) => (
        <Link
          key={i}
          title={social.name}
          href={social.link}
          target="_blank"
          rel="noreferrer noopener"
          className={`${
            social.name === "Github"
              ? "bg-accent rounded-full p-[5px] hover:text-white"
              : "hover:text-accent"
          } transition-all duration-300`}
        >
          <social.Icon aria-hidden />
          <span className="sr-only">{social.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
