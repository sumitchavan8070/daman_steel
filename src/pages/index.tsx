import Head from 'next/head';
import Header from '@/components/Header/Header';
import HomeBanner from '@/components/HomeBanner/HomeBanner';
import About from '@/components/About/About';
import Services from '@/components/Services/Services';
import Stats from '@/components/Stats/Stats';
import Portfolio from '@/components/Portfolio/Portfolio';
import Testimonials from '@/components/Testimonials/Testimonials';
import Footer from '@/components/Footer/Footer';
import Blog from '@/components/Blog/Blog';

export default function HomePage() {
  return <>
  <Head>
        <title>Home</title>
        <meta name="description" content="OnePro Nextjs Starter Template is a free template designed for business landing pages, which aligns with the growing trend towards one-page web designs." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     
      <Header />
                <div
            style={{
              position: "relative",
              paddingBottom: "56.25%", // 16:9 aspect ratio
              height: 0,
              overflow: "hidden",
              width: "100%",
              maxWidth: "100%",
            }}
          >
            <iframe
            
            src="https://www.youtube.com/embed/s6rT-9nA1A0?autoplay=1&controls=0&rel=0&playsinline=1&enablejsapi=1&origin=https%3A%2F%2Fdmansteelfab.in&mute=1&loop=1&playlist=s6rT-9nA1A0"
            
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
            ></iframe>
          </div>


    
      {/* <HomeBanner /> */}
      
     
      <About />
      <Services />
      <Stats />
      <Portfolio />
      <Testimonials />
      <Blog />
      <Footer />
  </>
}
