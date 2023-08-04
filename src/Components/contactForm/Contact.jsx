import React, { Fragment } from "react";
import "./Contact.css";
import { useColorMode } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Contact = () => {
  const { colorMode } = useColorMode();

  console.log(colorMode)
  return (
    <div id="contact">

    <div id="Contact" style={{ color: "black" }}>
      {" "}
      <Fragment>
        <section className="contact">
          <div className="contact-heading">
            <h2 style={colorMode==='dark'?{color:'white'}:{color:'black'}}>Contact Me </h2>
          </div>
       
          <div className="container">
            <div className="row">
              <div className="column">
                <div className="contact-widget ">
                  <div className="contact-widget-item">
                    <div className="icon" style={{backgroundColor:"#5084e4"}}>
                     <i className="fa fa-location-dot" />
                    </div>
                    <div className="text">
                      <h5 style={colorMode==='dark'?{color:'white'}:{color:'black'}}>Address</h5>
                      <p style={colorMode==='dark'?{color:'white'}:{color:'black'}}>Ajmer, Rajasthan</p>
                    </div>
                  </div>

                  <div className="contact-widget-item">
                    <div className="icon" style={{backgroundColor:"#5084e4"}}>
                    <i className="fa fa-phone"></i>
                    </div>
                    <div className="text" id="contact-phone">
                      <h5 style={colorMode==='dark'?{color:'white'}:{color:'black'}}>Contact me</h5>
                      <p style={colorMode==='dark'?{color:'white'}:{color:'black'}}>+91 7665900650</p>
                    </div>
                  </div>

                  <div className="contact-widget-item">
                    <div className="icon" style={{backgroundColor:"#5084e4"}}>
                      <i className="fa-regular fa-envelope"></i>
                    </div>
                    <div className="text" id="contact-email">
                      <h5 style={colorMode==='dark'?{color:'white'}:{color:'black'}}>Email</h5>
                      <p style={colorMode==='dark'?{color:'white'}:{color:'black'}}>karankotai9183@gmail.com</p>
                    </div>
                  </div>
                  <div className="contact-widget-item">
                    <div className="icon" style={{backgroundColor:"#5084e4"}}>
                      <i className="fa-brands fa-github"></i>
                    </div>
                    <div className="text" id="contact-github">
                      <h5 style={colorMode==='dark'?{color:'white'}:{color:'black'}}>Github</h5>
                      <Link to={"https://github.com/karnking"} target="blank" style={colorMode==='dark'?{color:'white'}:{color:'black'}}>@karnking</Link>
                    </div>
                  </div>
                  <div className="contact-widget-item">
                    <div className="icon" style={{backgroundColor:"#5084e4"}}>
                      <i className="fa-brands fa-linkedin"></i>
                    </div>
                    <div className="text" id="contact-linkedin">
                      <h5 style={colorMode==='dark'?{color:'white'}:{color:'black'}}>Linkedin</h5>
                      <Link to={"https://www.linkedin.com/in/karan-kotai-1a79a9270/"} style={colorMode==='dark'?{color:'white'}:{color:'black'}} target="blank">@karan-kotai-1a79a9270</Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="column">
                <div className="contact-form">
                  <form
                    action="https://getform.io/f/d72aeccd-342e-437d-ba5e-ed371e37cc83"
                    method="POST">
                    <input type="text" name="name" placeholder="Name" style={colorMode==='dark'?{color:'white'}:{color:'black'}}/>
                    <input type="email" name="email" placeholder="Email" style={colorMode==='dark'?{color:'white'}:{color:'black'}} />
                    <textarea
                      placeholder="Message"
                      type="text"
                      style={colorMode==='dark'?{color:'white'}:{color:'black'}}
                      name="message"></textarea>
                    <button
                      type="submit"
                      className="site-btn"
                      style={colorMode==='dark'?{color:'white'}:{color:'black'}}
                      formTarget="_blank">
                      {" "}
                      Send Message 
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    </div>
  </div>
  );
};

export default Contact;
