import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import passHidden from "../../../../assets/svg/pass_hidden.svg";
import passShown from "../../../../assets/svg/pass_show.svg";
import styles from "./styles.module.css";

export const EmailLogin = () => {
  const [isPassHidden, setIsPassHidden] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState([
    { name: "email", errorMsg: "" },
    { name: "password", errorMsg: "" },
  ]);
  const [serverErrorMsg, setServerErrorMsg] = useState("");
  const [showServerError, setShowServerError] = useState(false);
  const navigate = useNavigate();

  const checkInputs = (form) => {
    const email = form.elements.email,
      password = form.elements.password;
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
    try {
      fetch("http://localhost:3001/login", {
        method: "POST",
        body: JSON.stringify({
          email,
          password,
        }),
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      })
        .then((json) => json.json())
        .then((res) => {
          if (res.success) return navigate("/");
          if (!res.success && res.errorMsg) {
            setServerErrorMsg(res.errorMsg);
            setShowServerError(true);
            setTimeout(() => setShowServerError(false), 5000);
            return clearTimeout(() => setShowServerError(false), 5000);
          }
          console.log(res);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className={styles.form} onSubmit={submitHandler} noValidate>
      <p
        className={
          !showServerError
            ? styles.serverErrorMsg
            : styles.serverErrorMsg + " " + styles.show
        }
      >
        {serverErrorMsg}
      </p>
      <div className={styles.formField}>
        <input
          name="email"
          type="email"
          onChange={(e) => {
            setError([
              ...error.filter((i) => i.name !== e.target.name),
              { name: e.target.name, errorMsg: "" },
            ]);
            setEmail(e.currentTarget.value);
          }}
          value={email}
          id="email_input"
          className={
            !!!error.find((i) => i.name === "email").errorMsg.length
              ? styles.formField_input
              : styles.formField_input + " " + styles.invalid
          }
          required
        />
        <label className={styles.formField_label} htmlFor="email_input">
          Email adres
        </label>
        {!!error.find((i) => i.name === "email").errorMsg.length && (
          <p>{error.find((i) => i.name === "email").errorMsg}</p>
        )}
      </div>
      <div className={styles.formField}>
        <input
          minLength={8}
          name="password"
          type={isPassHidden ? "password" : "text"}
          onChange={(e) => {
            setError([
              ...error.filter((i) => i.name !== e.target.name),
              { name: e.target.name, errorMsg: "" },
            ]);
            setPassword(e.currentTarget.value);
          }}
          value={password}
          id="pass_input"
          className={
            !!!error.find((i) => i.name === "password").errorMsg.length
              ? styles.formField_input
              : styles.formField_input + " " + styles.invalid
          }
          required
        />
        <label className={styles.formField_label} htmlFor="pass_input">
          Acar soz
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
  );
};
