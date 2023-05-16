import Banner from '@/components/Banner'
import Layout from '@/components/Layout'
import Profile from '@/components/Profile'
import SocialLinks from '@/components/SocialLinks'
import TourButtons from '@/components/TourButtons'
import Wrapper from '@/components/Wrapper'
import { useRouter } from 'next/router'
import React from 'react'

const Perfil = ({data}) => {
  const router = useRouter()
  const {slug} = router.query
  const pageTitle = slug.split("-");
  function capitalizeTitle(title) {
    const titleArr = title.map(title => title.charAt(0).toUpperCase() + title.slice(1))
    const newTitle = titleArr.join(" ")
    return newTitle
  }
  const newTitle = capitalizeTitle(pageTitle)
  return (
    <Layout pageName={newTitle}>
      <Banner bannerData={data}/>
      <Wrapper>
        <Profile  profileData={data}/>
        <TourButtons buttonData={data}/>
        <SocialLinks socialLinks={data}/>
      </Wrapper>
    </Layout>
  )
}

export default Perfil

export async function getServerSideProps({ query: { slug } }) {
  const url = `${process.env.NEXT_PUBLIC_STRAPI_URL}/companies?filters[slug][$eq]=${slug}&populate=deep`;
  const req = await fetch(url);
  const res = await req.json();
  const data = res.data[0];
  return {
    props: {
      data,
    },
  };
}