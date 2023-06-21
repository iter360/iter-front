import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

const Profile = ({ profileData }) => {

  const { Logo, company_url } = profileData.attributes;

  // const src = foto_perfil.data.attributes.url
  const myLoader = ({ src }) => {
    return src;
  };

  return (
    <>
      <div className="-space-x-1 mt-[-35%] relative z-10 shadow-lg rounded-3xl bg-white overflow-hidden">
        <div className="flex justify-center z-10">
          <Link href={company_url} target="_blank" className="min-h-[175px] rounded-3xl w-[300px] max-h-[175px] flex items-center justify-center">
            <Image loader={myLoader} src={Logo.data.attributes.url} width={100} height={100} alt="" className="z-10 mt-0 w-full object-fill w-full"/>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Profile;
