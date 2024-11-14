import React from 'react'

type Props = {}


const TopNav = (props: Props) => {

  const sendWhatsAppMessage = () => {
    const message = "Hi";
    const phoneNumber = "9604463765"; // Replace with the recipient's phone number
    // const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    const url = `https://wa.me/${phoneNumber}?text=Hello,%20I%20would%20like%20to%20inquire%20about%20your%20products.%20Also,%20you%20can%20reach%20me%20via%20email%20at%20sales@dmansteelfab.in%20for%20further%20details.`;

    window.open(url, "_blank");
  };

  const sendEmail = () => {

    const email = "sales@dmansteelfab.in";

    const url = `mailto:${email}?subject=Inquiry%20About%20Products&body=Hello,%20I%20would%20like%20more%20information%20about%20your%20products.`;

    window.open(url, "_blank");

  }



  return (
    <div className="top_menu row m0">
      <div className="container">
        <div className="float-left">
          <a className="dn_btn" href="tel:+919604463765">
            <i className="ti-mobile"></i>+91 9604463765
          </a>
          {/* <a className="dn_btn" href="mailto:sales@dmansteelfab.in?subject=Inquiry&body=Hello, I would like more information about your products.">
            <i className="ti-location-pin"></i> Contact us: sales@dmansteelfab.in
          </a> */}

          <a className="dn_btn" onClick={sendEmail} href="Send Email">
            <i className="ti-location-pin"></i> Contact us: sales@dmansteelfab.in
          </a>

        </div>
        <div className="float-right">
          {/* <span className="follow_us">Follow us: </span> */}
          <ul className="list header_social">
            <li>
              <a onClick={sendWhatsAppMessage} href="Connect us with whatsapp">
                <img
                  src="https://static.whatsapp.net/rsrc.php/yZ/r/JvsnINJ2CZv.svg"
                  alt="WhatsApp Icon"
                  style={{ margin: "10px", }}
                />
                {/* <i className="ti-whatsapp"></i> */}
              </a>
            </li>


            {/* <li>
              <a href="#">
                <i className="ti-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="ti-instagram"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="ti-skype"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="ti-vimeo"></i>
              </a>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default TopNav