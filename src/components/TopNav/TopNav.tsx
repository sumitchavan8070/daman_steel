import React from 'react'

type Props = {}


const TopNav = (props: Props) => {

  const sendWhatsAppMessage = () => {
    const message = "Hi";
    const phoneNumber = "9604463765"; // Replace with the recipient's phone number
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank"); // Open the WhatsApp URL in a new tab
  };



  return (
    <div className="top_menu row m0">
      <div className="container">
        <div className="float-left">
          <a className="dn_btn" href="">
            <i className="ti-mobile"></i>+91 9604463765
          </a>
          <span className="dn_btn">
            {" "}
            <i className="ti-location-pin"></i> Contact us : sales@dmansteelfab.in
          </span>
        </div>
        <div className="float-right">
          {/* <span className="follow_us">Follow us: </span> */}
          <ul className="list header_social">
          <li>
  <a onClick={sendWhatsAppMessage} href="#">
    <img 
      src="https://static.whatsapp.net/rsrc.php/yZ/r/JvsnINJ2CZv.svg" 
      alt="WhatsApp Icon" 
      style={{  margin : "10px",  }}
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