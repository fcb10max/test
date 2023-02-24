import React, { useState } from "react";
import { TelLogin, EmailLogin } from "./components";
import styles from "./styles.module.css";

export const Login = () => {
  const [loginType, setLoginType] = useState("tel");

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <div className={styles.logo}>Logo</div>
      </header>
      <main className={styles.main}>
        <form
          className={styles.loginType}
          onChange={(e) =>
            setLoginType(e.currentTarget.elements.loginType.value)
          }
        >
          <label className={styles.loginType_label}>
            <input className={styles.loginType_input} type="radio" value="tel" name="loginType" defaultChecked />
            Telefon belgi
          </label>
          <label className={styles.loginType_label}>
            <input className={styles.loginType_input} type="radio" value="email" name="loginType" />
            Email adres
          </label>
        </form>
        <div className="form">
          {loginType === "tel" && <TelLogin />}
          {loginType === "email" && <EmailLogin />}
        </div>
      </main>
    </div>
  );
};
