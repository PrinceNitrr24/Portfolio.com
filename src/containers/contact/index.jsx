import React, { useState } from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircle, BsInfoCircleFill } from "react-icons/bs";
import { Animate } from "react-simple-animate";
import "./style.scss";
import bgImage from "../../video/video6.mp4";

const Contact = () => {
  const [submitbtn, setSubmitBtn] = useState(false);

  function submithandle() {
    const nameInput = document.querySelector(".inputName");
    const emailInput = document.querySelector(".inputEmail");
    const descriptionInput = document.querySelector(".inputDescription");
    if (nameInput.value && emailInput.value && descriptionInput.value) {
      setSubmitBtn(true);
      alert("Thanks for your response!");
    } else {
      alert("Please fill in all required fields.");
    }
  }

  return (
    <>
      <section id="contact" className="contact">
        <video autoPlay loop muted>
          <source src={bgImage} type="video/mp4" />
        </video>

        <PageHeaderContent
          headerText="Contact Me"
          icon={<BsInfoCircleFill size={40} />}
        />

        <div className="contact__content">
          <Animate
            play
            duration={1}
            delay={0}
            start={{
              transform: "translateX(-200px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
            <h3 className="contact__content__header-text">Let's Talk</h3>
          </Animate>

          <Animate
            play
            duration={1}
            delay={0}
            start={{
              transform: "translateX(200px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
            <div className="contact__content__form">
              <div className="contact__content__form__controlswrapper">
                <div>
                  <input
                    required
                    name="name"
                    className="inputName"
                    type="text"
                  />
                  <label htmlFor="name" className="nameLabel">
                    Full Name
                  </label>
                </div>
                <div>
                  <input
                    required
                    name="email"
                    className="inputEmail"
                    type="text"
                  />
                  <label htmlFor="email" className="emailLabel">
                    Email
                  </label>
                </div>
                <div>
                  <textarea
                    required
                    name="description"
                    className="inputDescription"
                    type="text"
                    rows={5}
                  />
                  <label htmlFor="description" className="descriptionLabel">
                    Description
                  </label>
                </div>
              </div>
              <button onClick={submithandle}>Submit</button>
            </div>
          </Animate>
        </div>
      </section>
    </>
  );
};

export default Contact;
