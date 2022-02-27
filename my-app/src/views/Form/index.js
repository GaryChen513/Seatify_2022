import React, { useState } from "react";
import "./form.css";
import API from "../../utils/API.js";
import { message } from "antd";
import { send } from "@emailjs/browser";

const Form = (props) => {
  const [people, setPeople] = useState([]);
  const { request, setRequest, setPage } = props;

  const [toSend, setToSend] = useState({
    from_name: "booking system",
    to_name: "",
    reply_to: "",
  });

  const handleSubmit = async (e) => {
    //event object
    e.preventDefault(); //important!!! not refreshing the page
    if (toSend.to_name && toSend.reply_to) {
      const person = {
        id: new Date().getTime().toString(),
        firstName: toSend.to_name,
        email: toSend.reply_to,
      }; // same --> const person = {firstName, email}

      setPeople((people) => {
        return [...people, person];
      });

      await submitRequest();

      send("service_gmail", "template_01", toSend, "user_UpSYAJoBV5dAAhT9qL1QX")
        .then((response) => {
          console.log("SUCCESS!", response.status, response.text);
        })
        .catch((err) => {
          console.log("FAILED...", err);
        });

      setPage(1);
    }
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  function submitRequest() {
    for (const id in request) {
      const occupiedTime = request[id];

      API.updateSeat(id, { occupiedTime })
        .then((res) => {
          setRequest({});
          message.success("Seat saved");
        })
        .catch((err) => console.log(err));
    }
  }

  return (
    <>
      <article>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="firstName">Name : </label>
            <input
              type="text"
              id="firstName"
              name="to_name"
              value={toSend.to_name}
              onChange={handleChange}
            />
          </div>

          <div className="form-control">
            <label htmlFor="email">Email : </label>
            <input
              type="text"
              id="email"
              name="reply_to"
              value={toSend.reply_to}
              onChange={handleChange}
            />
          </div>

          <div className="form-control">
            <label htmlFor="email">Phone: </label>
            <input
              type="text"
              id="email"
              name="reply_to"
            />
          </div>

          <button type="submit" onClick={handleSubmit}>
            Click here to book
          </button>
        </form>

        {people.map((person, index) => {
          const { id, firstName, email } = person;
          return (
            <div className="item" key={id}>
              <h4>{firstName}</h4>
              <p>{email}</p >
            </div>
          );
        })}
      </article>
    </>
  );
};

export default Form;