import React, { useState } from "react";
import "../App.css";
import * as yup from "yup";
import { setLocale } from "yup";

setLocale({
  mixed: {
    default: "мэдкү",
  },
  string: {
    min: `Богинохон байна шдээ homie XD`,
    required: "Zaaval",
    max: "arai ih bn",
    email: "email gedeg ugee oilgojiinu?",
  },
});

const HarYdargaa = () => {
  const [form, setForm] = useState({
    userId: "",
    password: "",
    name: "",
    address: "",
    country: "",
    zipCode: [],
    email: "",
    about: "",
  });
  const [errors, setErrors] = useState({
    userId: "",
    password: "",
    name: "",
    address: "",
    country: "",
    zipCode: [],
    email: "",
    about: "",
  });

  let schema = yup.object().shape({
    userId: yup.string().required().min(5).max(12),
    password: yup.string().required().min(5).max(12),
    name: yup
      .string()
      .required()
      .matches(/^[aA-zZ\s]+$/)
      .typeError("NerChinBuruBn"),
    address: yup.string().optional(),
    country: yup.string().notRequired(),
    zipCode: yup.number().required().integer().positive(),
    email: yup.string().required().email(),
    about: yup.string().notRequired(),
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
    console.log(form);
    schema
      .validate(form, { abortEarly: false })
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        setErrors({
          userId: e.errors.filter((el) => el.includes("userId")).join("\n"),
          password: e.errors.filter((el) => el.includes("password")).join("\n"),
          name: e.errors.filter((el) => el.includes("name")).join("\n"),
          address: e.errors.filter((el) => el.includes("address")).join("\n"),
          country: e.errors.filter((el) => el.includes("country")).join("\n"),
          zipCode: e.errors.filter((el) => el.includes("zipCode")).join("\n"),
          email: e.errors.filter((el) => el.includes("email")).join("\n"),
          about: e.errors.filter((el) => el.includes("about")).join("\n"),
        });
      });
  };
  return (
    <div>
      <form>
        <h1>Registration Form</h1>
        <div className="column">
          <div className="row">
            <div>User Id:</div>
            <input
              minLength={5}
              maxLength={12}
              value={form.userId}
              onChange={handleChange}
              id="userId"
            />
            <div style={{ color: "red", marginLeft: "10vw" }}>
              {errors.userId}
            </div>
          </div>
          <div className="row">
            <div>Password:</div>
            <input
              type="password"
              minLength={7}
              maxLength={12}
              value={form.password}
              onChange={handleChange}
              id="password"
            />
            <div style={{ color: "red", marginLeft: "10vw" }}>
              {errors.password}
            </div>
          </div>
          <div className="row">
            <div>Name:</div>
            <input
              type="text"
              value={form.name}
              onChange={handleChange}
              id="name"
            />
            <div style={{ color: "red", marginLeft: "10vw" }}>
              {errors.name}
            </div>
          </div>
          <div className="row">
            <div>Address:</div>
            <input value={form.address} onChange={handleChange} id="address" />
            <div style={{ color: "red", marginLeft: "10vw" }}>
              {errors.address}
            </div>
          </div>
          <div className="row">
            <div>Country:</div>
            <input value={form.country} onChange={handleChange} id="country" />
            <div style={{ color: "red", marginLeft: "10vw" }}>
              {errors.country}
            </div>
          </div>
          <div className="row">
            <div>ZIP Code:</div>
            <input value={form.zipCode} onChange={handleChange} id="zipCode" />
            <div style={{ color: "red", marginLeft: "10vw" }}>
              {errors.zipCode}
            </div>
          </div>
          <div className="row">
            <div>Email:</div>
            <input
              type="email"
              value={form.email}
              onChange={handleChange}
              id="email"
            />
            <div style={{ color: "red", marginLeft: "10vw" }}>
              {errors.email}
            </div>
          </div>
          <div className="row">
            <div>About:</div>
            <input value={form.about} onChange={handleChange} id="about" />
            <div style={{ color: "red", marginLeft: "10vw" }}>
              {errors.about}
            </div>
          </div>
          <div className="row">
            <input
              type="button"
              value="Submit"
              className="id11"
              onClick={handleChange}
            />
            <input type="button" value="Reset" />
          </div>
        </div>
      </form>
    </div>
  );
};
export default HarYdargaa;
