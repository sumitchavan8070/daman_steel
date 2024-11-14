import React from 'react'
import Image from 'next/image'

type Props = {}

const About = (props: Props) => {
  return (
    <section className="about-area area-padding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 d-none d-lg-block">
              <div className="about-img">
                <Image width={555} height={485} src="/images/about1.png.webp" alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-content">
                <h4>
                  WE ARE ON EXPERT <br />
                  THIS FIELD BUILDINGS
                  <br />
                  SOLUTIONS SINCE 1974.
                </h4>
                <p>
                Greetings From Global/ Dman Global PEB is a pioneering name in the fabrication industry rooted in Pune, specializing in providing complete solutions including consulting, design, fabrication erection, of good quality pre-engineered steel building & steel structure products Our team is dedicated and committed to quality standards. The eccentric vision of our diligent staff proclaims a wide range of expertise in producing invincible outcomes. We happen to manufacture distinctive machines and fixtures that solve multiple purposes. We provide customers with full steel structures such as factories, warehouses, Logistics terminals, Railway stations, shopping mall, Farm House, exhibition centres, infrastructure {`(`}railway stations, airports etc.
                  <br />
                  likeness spirit winged two all fourth they{`'`}re gathered
                  <br /> seasons very may heaven saying. Fly image th
                </p>
                <a className="main_btn" href="#">
                  Get A QUOTE
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default About