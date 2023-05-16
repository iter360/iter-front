import Image from "next/image";
import React from "react";
// import BannerImage from "../../public/images/patron-negro.png";
// import Logo from "../../public/images/linki-logo.png";
import Logo from "../../public/logowhite.png"

const Banner = ({bannerData}) => {
  // bg-gradient-to-r from-[#4eb1c7] via-[#384a74] to-[#483e83]
  const bannerUrl = bannerData.attributes.banner.data.attributes.url
  const myLoader = ({ src }) => {
    return src;
  };
  return (
    <div className="relative w-full">
      <Image src={Logo} className="z-10 max-h-24 object-contain absolute top-[-10px] left-0 w-32" />
      <div className="brightness-50">
        <Image width={100} height={100} className="w-full h-[250px] object-cover" loader={myLoader} src={bannerUrl} alt="banner" />
      </div>
    </div>
  );
};

export default Banner;
