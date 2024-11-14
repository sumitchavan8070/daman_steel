import React, { useState } from "react";
import { z } from "zod";

type Props = {};

// Define the Zod schema for validation
const contactSchema = z.object({
  message: z.string().min(1, "Message is required"),
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(1, "Subject is required"),
  phone: z.string().min(10, "Phone number must be 10 digits").regex(/^[0-9]{10}$/, "Please enter a valid 10-digit phone number"),
});

const ContactUs = (props: Props) => {
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [phone, setPhone] = useState("");
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({
    message: "",
    name: "",
    email: "",
    subject: "",
    phone: "",
  });


  const handleMailUsClick = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission

    // Validate the form fields using Zod
    const result = contactSchema.safeParse({
      message,
      name,
      email,
      subject,
      phone,
    });

    if (!result.success) {
      // Reset errors
      const validationErrors: { [key: string]: string } = {};
      result.error.errors.forEach((err) => {
        validationErrors[err.path[0]] = err.message;
      });
      setErrors(validationErrors);
      return;
    }

    // If validation passes, reset errors and proceed
    setErrors({
      message: "",
      name: "",
      email: "",
      subject: "",
      phone: "",
    });

    // Here you can implement logic to send the form data to an email API or process it
    console.log("Form Submitted", { message, name, email, subject, phone });

    // Set form submitted state to show confirmation
    setIsFormSubmitted(true);
  };

  const handleWhatsAppUsClick = () => {
    const messageForWhatsApp = `Hello, I need assistance with: ${subject}\nMessage: ${message}`;
    const encodedMessage = encodeURIComponent(messageForWhatsApp);

    // Open WhatsApp chat with the pre-filled message
    window.open(`https://wa.me/919604463765?text=${encodedMessage}`, "_blank");
  };

  return (
    <section className="contact-section area-padding">
      <div className="container">
        <div className="d-none d-sm-block mb-5 pb-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23833.85716245098!2d73.9187064!3d18.6734842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c7e114221d41%3A0xa53c859f6b71d01b!2sDman+steel+Fab+Pvt+Ltd!5e0!3m2!1sen!2sph!4v1681066121731!5m2!1sen!2sph"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="row">
          <div className="col-12">
            <h2 className="contact-title">Get in Touch</h2>
          </div>
          <div className="col-lg-8">
            <form
              className="form-contact contact_form"
              id="contactForm"
              noValidate={true}
            >
              <div className="row">
                <div className="col-12">
                  <div className="form-group">
                    <textarea
                      className="form-control w-100"
                      name="message"
                      id="message"
                      cols={30}
                      rows={9}
                      placeholder="Enter Message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                    {errors.message && <small className="text-danger">{errors.message}</small>}
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <input
                      className="form-control"
                      name="name"
                      id="name"
                      type="text"
                      placeholder="Enter your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    {errors.name && <small className="text-danger">{errors.name}</small>}
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <input
                      className="form-control"
                      name="email"
                      id="email"
                      type="email"
                      placeholder="Enter email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    {errors.email && <small className="text-danger">{errors.email}</small>}
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <input
                      className="form-control"
                      name="phone"
                      id="phone"
                      type="text"
                      placeholder="Enter phone number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                    {errors.phone && <small className="text-danger">{errors.phone}</small>}
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group">
                    <input
                      className="form-control"
                      name="subject"
                      id="subject"
                      type="text"
                      placeholder="Enter Subject"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                    />
                    {errors.subject && <small className="text-danger">{errors.subject}</small>}
                  </div>
                </div>
              </div>
              <div className="form-group mt-3">
                <button
                  type="submit"
                  className="button button-contactForm"
                  onClick={handleMailUsClick}
                >
                  Mail us
                </button>

                <a
                  href="javascript:void(0)" // Use JavaScript to prevent default link behavior
                  className="button button-whatsapp"
                  style={{ backgroundColor: "#25d366", color: "#fff", margin: "10px", borderColor: "#25d366" }}
                  onClick={handleWhatsAppUsClick}
                >
                  WhatsApp Us
                </a>
              </div>
            </form>
            {isFormSubmitted && (
              <div className="alert alert-success mt-4">
                Thank you! Your message has been sent successfully.
              </div>
            )}
          </div>
          <div className="col-lg-4">
            <div className="media contact-info">
              <span className="contact-info__icon">
                <i className="ti-home"></i>
              </span>
              <div className="media-body">
                <h3>Dman steel Fab Pvt Ltd.</h3>
                <p>Sr no 250, Alandi-Markal Rd</p>
              </div>
            </div>
            <div className="media contact-info">
              <span className="contact-info__icon">
                <i className="ti-tablet"></i>
              </span>
              <div className="media-body">
                <h3>
                  <a href="tel:+919604463765">+91 9604463765</a>
                </h3>
                <p> 8.30 to 6.30pm</p>
              </div>
            </div>
            <div className="media contact-info">
              <span className="contact-info__icon">
                <i className="ti-email"></i>
              </span>
              <div className="media-body">
                <h3>
                  <a href="mailto:sales@dmansteelfab.in">
                    sales@dmansteelfab.in
                  </a>
                </h3>
                <p>Send us your query anytime!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
