import React, { useState } from "react";
import styles from "./styles.module.css";
import passHidden from "../../assets/svg/pass_hidden.svg";
import passShown from "../../assets/svg/pass_show.svg";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    tel: "",
    password: "",
  });
  const [isPassHidden, setIsPassHidden] = useState(true);
  const [error, setError] = useState([
    { name: "name", errorMsg: "" },
    { name: "email", errorMsg: "" },
    { name: "tel", errorMsg: "" },
    { name: "password", errorMsg: "" },
  ]);
  const [serverErrorMsg, setServerErrorMsg] = useState("");
  const [showServerError, setShowServerError] = useState(false);
  const navigate = useNavigate();

  const checkInputs = (form) => {
    const name = form.elements.name,
      email = form.elements.email,
      tel = form.elements.tel,
      password = form.elements.password;
    if (!name.checkValidity()) {
      const { tooShort, valueMissing } = name.validity;
      if (tooShort) {
        setError([
          ...error.filter((i) => i.name !== "name"),
          { name: "name", errorMsg: "At azyndan 6 symboldan durmaly" },
        ]);
        return false;
      }
      if (valueMissing) {
        setError([
          ...error.filter((i) => i.name !== "name"),
          { name: "name", errorMsg: "At azyndan 6 symboldan durmaly" },
        ]);
        return false;
      }
    }
    if (!tel.checkValidity()) {
      const { valueMissing, patternMismatch } = tel.validity;
      if (valueMissing) {
        setError([
          ...error.filter((i) => i.name !== "tel"),
          { name: "tel", errorMsg: "Telefon oyjugi dolduryn" },
        ]);
        return false;
      }
      if (patternMismatch) {
        setError([
          ...error.filter((i) => i.name !== "tel"),
          {
            name: "tel",
            errorMsg:
              "Telefon +9936xxxxxxx / 9936xxxxxxx / 86xxxxxxx gornushlerde yazmaly",
          },
        ]);
        return false;
      }
    }
    if (!email.checkValidity()) {
      const { valueMissing, typeMismatch } = email.validity;
      if (valueMissing) {
        setError([
          ...error.filter((i) => i.name !== "email"),
          { name: "email", errorMsg: "Email oyjugi dolduryn" },
        ]);
        return false;
      }
      if (typeMismatch) {
        setError([
          ...error.filter((i) => i.name !== "email"),
          { name: "email", errorMsg: "Dogry email yazyn" },
        ]);
        return false;
      }
    }
    if (!password.checkValidity()) {
      const { valueMissing, tooShort } = password.validity;
      if (valueMissing) {
        setError([
          ...error.filter((i) => i.name !== "password"),
          { name: "password", errorMsg: "Acar sozi oyjugi dolduryn" },
        ]);
        return false;
      }
      if (tooShort) {
        setError([
          ...error.filter((i) => i.name !== "password"),
          {
            name: "password",
            errorMsg: "Acar sozi azyndan 8 belgi saklamaly",
          },
        ]);
        return false;
      }
    }
    return true;
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const isValid = checkInputs(e.target);
    if (!isValid) return;
    fetch("http://localhost:3001/register", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...formData }),
    })
      .then((j) => j.json())
      .then((res) => {
        if (res.success) navigate("/");
        if (!res.success && res.errorMsg) {
          setServerErrorMsg(res.errorMsg);
          setShowServerError(true);
          setTimeout(() => setShowServerError(false), 5000);
          return clearTimeout(() => setShowServerError(false), 5000);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const inputChangeHandler = (e) => {
    setError([
      ...error.filter((i) => i.name !== e.target.name),
      { name: e.target.name, errorMsg: "" },
    ]);
    setFormData((prevVal) => ({ ...prevVal, [e.target.name]: e.target.value }));
  };

  return (
    <div className={styles.wrapper}>
      <p
        className={
          !showServerError
            ? styles.serverErrorMsg
            : styles.serverErrorMsg + " " + styles.show
        }
      >
        {serverErrorMsg}
      </p>
      <header className={styles.header}>
        <div className={styles.logo}>Logo</div>
      </header>
      <main className={styles.main}>
        <form className={styles.form} noValidate onSubmit={submitHandler}>
          <div className={styles.formField}>
            <input
              onChange={inputChangeHandler}
              className={
                !!!error.find((i) => i.name === "name").errorMsg.length
                  ? styles.formField_input
                  : styles.formField_input + " " + styles.invalid
              }
              type="text"
              name="name"
              id="name"
              value={formData.name}
              minLength={6}
              required
            />
            <label className={styles.formField_label} htmlFor="name">
              Doly adynyz
            </label>
            {!!error.find((i) => i.name === "name").errorMsg.length && (
              <p>{error.find((i) => i.name === "name").errorMsg}</p>
            )}
          </div>
          <div className={styles.formField}>
            <input
              onChange={inputChangeHandler}
              className={
                !!!error.find((i) => i.name === "tel").errorMsg.length
                  ? styles.formField_input
                  : styles.formField_input + " " + styles.invalid
              }
              type="tel"
              name="tel"
              id="tel"
              value={formData.tel}
              pattern="^[\+]?(993|8)6?[1-5]{1}[0-9]{6}$"
              required
            />
            <label className={styles.formField_label} htmlFor="tel">
              Telefon belgi
            </label>
            {!!error.find((i) => i.name === "tel").errorMsg.length && (
              <p>{error.find((i) => i.name === "tel").errorMsg}</p>
            )}
          </div>
          <div className={styles.formField}>
            <input
              onChange={inputChangeHandler}
              className={
                !!!error.find((i) => i.name === "email").errorMsg.length
                  ? styles.formField_input
                  : styles.formField_input + " " + styles.invalid
              }
              type="email"
              name="email"
              id="email"
              value={formData.email}
              required
            />
            <label className={styles.formField_label} htmlFor="email">
              Email adres
            </label>
            {!!error.find((i) => i.name === "email").errorMsg.length && (
              <p>{error.find((i) => i.name === "email").errorMsg}</p>
            )}
          </div>
          <div className={styles.formField}>
            <input
              onChange={inputChangeHandler}
              className={
                !!!error.find((i) => i.name === "password").errorMsg.length
                  ? styles.formField_input
                  : styles.formField_input + " " + styles.invalid
              }
              type={isPassHidden ? "password" : "text"}
              name="password"
              id="password"
              value={formData.password}
              minLength={8}
              required
            />
            <label className={styles.formField_label} htmlFor="password">
              Acar sozi
            </label>
            <span
              className={styles.showHidePassword}
              onClick={() => setIsPassHidden(!isPassHidden)}
            >
              <img
                src={!isPassHidden ? passHidden : passShown}
                alt="show hide password"
              />
            </span>
            {!!error.find((i) => i.name === "password").errorMsg.length && (
              <p>{error.find((i) => i.name === "password").errorMsg}</p>
            )}
          </div>
          <button className={styles.submit}>Submit</button>
        </form>
      </main>
    </div>
  );
};