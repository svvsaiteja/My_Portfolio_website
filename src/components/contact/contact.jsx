import React, { useRef } from "react";
import "./contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import {
  faLinkedin,
  faInstagram,
  faDiscord,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fn5wpx9",
        "template_rtsqzjl",
        form.current,
        "W3mFa4XEznHXbVUNo"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert("Message Sent, I will get back to you shortly", result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contactPage">
      <h1 className="contactTilte">Contact Me</h1>
      <span className="contactDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
        deleniti dignissimos porro rem, minus iure perspiciatis cumque suscipit
        velit voluptatem voluptatum aperiam aliquam voluptatibus illum modi
        officiis consectetur aspernatur quasi?
      </span>
      <form action="" className="contactForm" ref={form} onSubmit={sendEmail}>
        <input
          type="text"
          placeholder="Name"
          className="name"
          name="from_name"
        />
        <input
          type="email"
          placeholder="Email"
          className="email"
          name="from_email"
        />
        <textarea
          placeholder="Message"
          className="msg"
          name="message"
        ></textarea>
        <button type="submit" value="Send" className="submitBtn">
          Submit
        </button>

        <div className="links">
          <script
            src="https://kit.fontawesome.com/61d5eeebab.js"
            crossorigin="anonymous"
          ></script>
          <div class="container">
            <div class="social-icons">
              <div class="social linkedIn">
                <div class="tooltip">LinkedIn</div>
                <div class="icons">
                  <a
                    href="https://www.linkedin.com/in/sai-teja-239b0022b/"
                    style={{ color: "white" }}
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </div>
              </div>
              <div class="social instagram">
                <div class="tooltip">Instagram</div>
                <div class="icons">
                  <a
                    href="https://www.instagram.com/sai_teja2909/"
                    style={{ color: "white" }}
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </div>
              </div>
              <div class="social discord">
                <div class="tooltip">Discord</div>
                <div class="icons">
                  <a
                    href="https://discordapp.com/users/889884088306135050"
                    style={{ color: "white" }}
                  >
                    <FontAwesomeIcon icon={faDiscord} />
                  </a>
                </div>
              </div>
              <div class="social github">
                <div class="tooltip">Github</div>
                <div class="icons">
                  <a
                    href="https://github.com/svvsaiteja"
                    style={{ color: "white" }}
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </div>
              </div>
              <div class="social gmail">
                <div class="tooltip">Gmail</div>
                <div class="icons">
                  <a
                    href="mailto:svv.saiteja123@gmail.com "
                    style={{ color: "white" }}
                  >
                    <FontAwesomeIcon icon={faEnvelope} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Contact;
