import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import passHidden from "../../../../assets/svg/pass_hidden.svg";
import passShown from "../../../../assets/svg/pass_show.svg";

export const TelLogin = () => {
  const [isPassHidden, setIsPassHidden] = useState(true);
  const [tel, setTel] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState([
    { name: "tel", errorMsg: "" },
    { name: "password", errorMsg: "" },
  ]);
  const [serverErrorMsg, setServerErrorMsg] = useState("");
  const [showServerError, setShowServerError] = useState(false);
  const navigate = useNavigate();

  const checkInputs = (form) => {
    const tel = form.elements.tel,
      password = form.elements.password;
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
          tel,
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
          name="tel"
          type="tel"
          pattern="^[\+]?(993|8)6?[1-5]{1}[0-9]{6}$"
          title="+9936xxxxxxx / 9936xxxxxxx / 86xxxxxxx"
          onChange={(e) => {
            setError([
              ...error.filter((i) => i.name !== e.target.name),
              { name: e.target.name, errorMsg: "" },
            ]);
            setTel(e.currentTarget.value);
          }}
          value={tel}
          id={"tel_input"}
          className={
            !!!error.find((i) => i.name === "tel").errorMsg.length
              ? styles.formField_input
              : styles.formField_input + " " + styles.invalid
          }
          required
        />
        <label className={styles.formField_label} htmlFor="tel_input">
          Telefon belgi
        </label>
        {!!error.find((i) => i.name === "tel").errorMsg.length && (
          <p>{error.find((i) => i.name === "tel").errorMsg}</p>
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
        <label htmlFor="pass_input" className={styles.formField_label}>
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
