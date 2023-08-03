import { Button } from "../common/Button";
// import Footer from "./Footer";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [inputError, setInputError] = useState({});
  const [data, setData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const validate = () => {
    let userNameError = "";
    let userEmailError = "";
    let messageError = "";

    if (!data.user_email.includes("@")) {
      userEmailError = "email is invalid";
    }
    if (!data.user_name) {
      userNameError = "name is required";
    }
    if (!data.user_email) {
      userEmailError = "email is required";
    }

    if (!data.message) {
      messageError = "message is required";
    }

    if (userEmailError || userNameError || messageError) {
      setInputError({
        user_name: userNameError,
        user_email: userEmailError,
        message: messageError,
      });
      return false;
    }

    return true;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const checkValidate = validate();

    if (checkValidate) {
      setLoading(true);
      setInputError({});

      emailjs
        .send(
          process.env.REACT_APP_SERVICE_ID,
          process.env.REACT_APP_TEMPLATE_ID,
          data,
          process.env.REACT_APP_PUBLIC_KEY
        )
        .then(
          function (response) {
            setLoading(false);
            toast.success("Message Sent Successfully", {
              position: toast.POSITION.TOP_RIGHT,
            });
            setData({
              user_name: "",
              user_email: "",
              message: "",
            });
          },
          function (err) {
            setLoading(false);
            toast.error("Send Message Failed", {
              position: toast.POSITION.TOP_RIGHT,
            });
          }
        );
    }
  };

  const handleInputChange = (name, value) => {
    setData((curr) => {
      return { ...curr, [name]: value };
    });

    if (inputError?.[name]) {
      setInputError((currError) => {
        return { ...currError, [name]: "" };
      });
    }
  };

  return (
    <section id="contact" className="contact">
      <h2 className="contact__title">Let Discuss</h2>

      <form onSubmit={sendEmail} className="contact__form">
        <div className="contact__form__inputs">
          <div>
            <input
              type="text"
              placeholder="Name"
              value={data.user_name}
              onChange={(e) => handleInputChange("user_name", e.target.value)}
              name="user_name"
            />
            <div className="contact__form__inputs__error">
              {inputError?.user_name}
            </div>
          </div>
          <div>
            <input
              type="text"
              placeholder="Email Address"
              value={data.user_email}
              onChange={(e) => handleInputChange("user_email", e.target.value)}
              name="user_email"
            />
            <div className="contact__form__inputs__error">
              {inputError?.user_email}
            </div>
          </div>
        </div>

        <div className="contact__form__textareaCon">
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            placeholder="Message"
            value={data.message}
            onChange={(e) => handleInputChange("message", e.target.value)}
          ></textarea>
          <div className="contact__form__inputs__error">
            {inputError?.message}
          </div>
        </div>
        <div className="contact__form__btn">
          <Button type="submit">{loading ? "Sending..." : "Send"}</Button>
        </div>
      </form>

      {/* <div className="contact__links">
        <span>Linkedin</span>
        <span>email</span>
        <span>github</span>
      </div> */}

      {/* <Footer /> */}
    </section>
  );
};

export default Contact;
