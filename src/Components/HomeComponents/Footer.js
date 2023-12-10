import "../Stylesheets/HomePage.css";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Footer() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_dhdu7u9",
        "template_it4tlgr",
        form.current,
        "jMb57gECnI6lfsky4"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    alert("Email Sent Succesfully");
  };

  return (
    <div className="container-fluid">
      <div className="row footer-bg">
        <div className="col-md-6">
          <div className="F-Heading text-center">
            <h1>CONTACT US</h1>
          </div>
          <div className="Form-Inputs">
            <form ref={form} onSubmit={sendEmail} method="POST">
              <div className="form-group">
                <label htmlFor="name" className="pixelfont display-6">
                  Name:&nbsp;
                </label>
                <input
                  type="text"
                  className=" form-input form-control"
                  id="name"
                  name="user_name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="pixelfont display-6">
                  Email:
                </label>
                <input
                  type="email"
                  className=" form-input form-control"
                  id="email"
                  name="user_email"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message" className="pixelfont display-6">
                  Message:
                </label>
                <textarea
                  className="form-message form-control"
                  id="message"
                  name="message"
                  rows="7"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                value="Send"
                className="submitbutton  fs-5 my-3 btn btn-dark"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className="col-md-6">
          <div className="F-Heading text-center">
            <h1>CONTACT DETAILS</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
