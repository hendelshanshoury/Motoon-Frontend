// SocialIcon.tsx
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { FaX, FaXTwitter } from "react-icons/fa6";

const SocialIcon = () => {
  const socialItems = [
    {
      icon: <FaFacebookF />,
      href: "https://www.facebook.com/people/%D8%A3%D9%83%D8%A7%D8%AF%D9%8A%D9%85%D9%8A%D8%A9-%D9%85%D8%AA%D9%88%D9%86-%D8%A7%D9%84%D8%B4%D8%B1%D8%B9%D9%8A%D8%A9/100089732822352/",
    },
    {
      icon: <FaXTwitter />,
      href: "https://x.com/motoonacademy?t=0hZiifp9KK-9yUFLSf8Yqw&s=09",
    },
    {
      icon: <FaInstagram />,
      href: "https://www.instagram.com/motoonacademy/?igshid=MzRlODBiNWFlZA%3D%3D",
    },
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
            className="flex items-center justify-center rounded-full text-gray w-7 h-7 bg-main hover:bg-secondary target='-blank'"
          >
            <span className="text-xs">{item.icon}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialIcon;
