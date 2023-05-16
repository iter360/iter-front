import React from "react";
import FacebookIcon from "./Icons/FacebookIcon";
import InstagramIcon from "./Icons/InstagramIcon";
import LinkedinIcon from "./Icons/LinkedinIcon";
import Link from "next/link";
import TwitterIcon from "./Icons/TwitterIcon";
import WhatsappIcon from "./Icons/WhatsappIcon";

const SocialLinks = ({ socialLinks }) => {
  console.log(socialLinks.attributes.social_links);
  const { facebook, instagram, linkedin, whatsapp, twitter } = socialLinks.attributes.social_links;
  const backgroundColor = socialLinks.attributes.background_color;
  const socialMediaPlatforms = [
    {
      platform: "facebook",
      url: facebook,
      icon: <FacebookIcon />,
    },
    {
      platform: "instagram",
      url: instagram,
      icon: <InstagramIcon />,
    },
    {
      platform: "twitter",
      url: twitter,
      icon: <TwitterIcon />,
    },
    {
      platform: "linkedin",
      url: linkedin,
      icon: <LinkedinIcon />,
    },
    {
      platform: "whatsapp",
      url: whatsapp,
      icon: <WhatsappIcon />,
    },
  ];
  return (
    <>
      <h2 className="font-bold">Síguenos en nuestras redes</h2>
      <ul className="flex gap-5 flex-wrap">
        {socialMediaPlatforms.map(({ platform, url, icon }) =>
          url ? (
            <li
              style={{ backgroundColor: backgroundColor }}
              className="bg-[#222222] rounded-xl p-2 flex justify-center items-center"
              key={platform}
            >
              {platform == "whatsapp" ? <Link href={`https://wa.me/507${url}`}>{icon}</Link> : <Link href={url}>{icon}</Link>}
            </li>
          ) : null
        )}
      </ul>
    </>
  );
};

export default SocialLinks;
