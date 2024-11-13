import Head from 'next/head';
import Header from '@/components/Header/Header';
import About from '@/components/About/About';
import Testimonials from '@/components/Testimonials/Testimonials';
import Footer from '@/components/Footer/Footer';
import PageHeader from '@/components/PageHeader/PageHeader';
import { Parallax } from "react-parallax";


export default function AboutPage() {
  return <>
  <Head>
        <title>About us</title>
        <meta name="description" content="OnePro Nextjs Starter Template is a free template designed for business landing pages, which aligns with the growing trend towards one-page web designs." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {/* <PageHeader /> */}

      <section className="home_banner_area">

<Parallax
  blur={0}
  bgImage="/images/home-banner.jpg.webp"
  bgImageAlt="home banner"
  strength={100}
  className="container-fluid banner_inner d-flex"
  contentClassName="container-fluid d-flex align-items-center"
>
  <div className="container">
    <div className="banner_content text-center">
      <span>About Us</span>
      <h3>
      Welcome to DMAN Steel 
        <br />
        fab pvt.ltd
      </h3>
  
    </div>
  </div>
</Parallax>

</section>

      
      <About />

      <Testimonials />
  
      <Footer />
  </>
}
