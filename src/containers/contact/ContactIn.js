import React, { useState } from "react";
import emailjs from "emailjs-com"; // Import EmailJS
import "./ContactIn.css";

const ContactIn = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });

  let name, value;
  const getUserData = (event) => {
    name = event.target.name;
    value = event.target.value;
    setUser({ ...user, [name]: value });
  };

  const postData = async (e) => {
    e.preventDefault();

    const { name, email, phone, address, message } = user;

    if (name && email && message) {
      const templateParams = {
        name,
        email,
        phone,
        address,
        message,
      };

      try {
        const res = await emailjs.send(
          "YOUR_SERVICE_ID", // Replace with your service ID from EmailJS
          "YOUR_TEMPLATE_ID", // Replace with your template ID from EmailJS
          templateParams,
          "YOUR_USER_ID" // Replace with your user ID from EmailJS
        );

        if (res.status === 200) {
          setUser({
            name: "",
            email: "",
            phone: "",
            address: "",
            message: "",
          });
          alert("Thanks For Messaging");
        }
      } catch (error) {
        alert("Something went wrong. Please try again later.");
      }
    } else {
      alert("Please fill in all the required fields.");
    }
  };

  return (
    <>
      <div className="container-contact100">
        <div className="wrap-cintact100">
          <form className="contact100-form" method="POST">
            <p>Inbox Me</p>
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={getUserData}
              placeholder="Enter Name*"
              required
            />
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={getUserData}
              placeholder="Enter Email*"
              required
            />
            <input
              type="text"
              name="phone"
              value={user.phone}
              onChange={getUserData}
              placeholder="Phone Number"
            />
            <input
              type="text"
              name="address"
              value={user.address}
              onChange={getUserData}
              placeholder="Address"
            />
            <textarea
              name="message"
              value={user.message}
              onChange={getUserData}
              placeholder="Write your message here*."
              cols="46"
              rows="10"
              required
            />
            <button onClick={postData}>Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactIn;
