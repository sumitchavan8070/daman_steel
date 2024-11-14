import Head from 'next/head';
import Header from '@/components/Header/Header';
import Services from '@/components/Services/Services';
import Stats from '@/components/Stats/Stats';
import Testimonials from '@/components/Testimonials/Testimonials';
import Footer from '@/components/Footer/Footer';
import PageHeader from '@/components/PageHeader/PageHeader';
import { Parallax } from "react-parallax";


export default function ServicesPage() {
  return <>
    <Head>
      <title>Services</title>
      <meta name="description" content="OnePro Nextjs Starter Template is a free template designed for business landing pages, which aligns with the growing trend towards one-page web designs." />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header />
    {/* <PageHeader title="Our Services" navTitle="Services" /> */}

    <section className="home_banner_area">

      <Parallax
        blur={0}
        bgImage="/images/abou_us.jpg"
        bgImageAlt="home banner"
        strength={100}
        className="container-fluid banner_inner d-flex"
        contentClassName="container-fluid d-flex align-items-center"
      >
        <div className="container">
          <div className="banner_content text-center">
            <span>Services</span>
            <h3>
              Welcome to DMAN Steel
              <br />
              fab pvt.ltd
            </h3>

          </div>
        </div>
      </Parallax>

    </section>


    <Services />
    <Stats />

    <Testimonials />

    <Footer />
  </>
}
