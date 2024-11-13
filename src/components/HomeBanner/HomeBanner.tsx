import React from "react";
import { Parallax } from "react-parallax";

type Props = {};

const HomeBanner = (props: Props) => {
  return (
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
              <span>Future construction</span>
              <h3>
              Welcome to DMAN Steel 
                <br />
                fab pvt.ltd
              </h3>
          
            </div>
          </div>
        </Parallax>
     
    </section>
  );
};

export default HomeBanner;




// import React from "react";
// import { Parallax } from "react-parallax";

// type Props = {};

// const HomeBanner: React.FC<Props> = (props: Props) => {
//   return (
//     <section className="home_banner_area">
//       <Parallax
//         blur={0}
//         bgImage="/images/home-banner.jpg.webp"
//         bgImageAlt="home banner"
//         strength={100}
//         className="container-fluid banner_inner d-flex"
//         contentClassName="container-fluid d-flex align-items-center"
//       >
//         <div className="container">
//           <div className="banner_content text-center">
//             {/* Responsive video container with inline styles */}
//             <div
//               style={{
//                 position: "relative",
//                 paddingBottom: "56.25%", // 16:9 aspect ratio
//                 height: 0,
//                 overflow: "hidden",
//                 width: "100%",
//                 maxWidth: "100%"
//               }}
//             >
//               <iframe
//                 src="https://www.youtube.com/embed/s6rT-9nA1A0?autoplay=1&controls=0&rel=0&playsinline=1&enablejsapi=1&origin=https%3A%2F%2Fdmansteelfab.in"
//                 title="YouTube video player"
//                 frameBorder="0"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//                 style={{
//                   position: "absolute",
//                   top: 0,
//                   left: 0,
//                   width: "100%",
//                   height: "100%"
//                 }}
//               ></iframe>
//             </div>

//             <span>Future construction</span>
//             <h3>
//               Make your dream home
//               <br />
//               with sintac
//             </h3>
//             <a className="main_btn" href="#">
//               get a quote
//             </a>
//           </div>
//         </div>
//       </Parallax>
//     </section>
//   );
// };

// export default HomeBanner;
