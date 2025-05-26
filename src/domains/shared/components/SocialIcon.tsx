// SocialIcon.tsx
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { FaX, FaXTwitter } from "react-icons/fa6";

const SocialIcon = () => {
  const socialItems = [
    { icon: <FaFacebookF />, href: "#" },
    { icon: <FaXTwitter />, href: "#" },
    { icon: <FaInstagram />, href: "#" },
  ];

  return (
    <ul className="flex justify-center py-4 list-none md:justify-start">
      {socialItems.map((item, index) => (
        <li
          key={index}
          className="mx-1 transition hover:cursor-pointer hover:shadow-lg"
        >
          <a
            href={item.href}
            className="flex items-center justify-center text-gray-700 rounded-full w-7 h-7 bg-main hover:bg-secondary "
          >
            <span className="text-xs">{item.icon}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialIcon;
