import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

export const Home = () => {
  const [data, setData] = useState([]);
  const [isAuthorized, setIsAuthorized] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3001/api", { credentials: "include" })
      .then((j) => j.json())
      .then((data) => {
        if (data.success) {
          setData(data.data);
          setIsAuthorized(true);
        }
        if (data.errorMsg === "Forbidden") {
          setIsAuthorized(false);
          fetch("http://localhost:3001/refreshToken", {
            credentials: "include",
          }).then((res) => {
            if (res.status === 403) {
              setIsAuthorized(false);
              navigate("/login");
            }
            setIsAuthorized(true);
          });
        }
      })
      .catch((err) => {
        console.log("err: ", err);
      });
  }, [isAuthorized]);

  return (
    <div className={styles.wrapper}>
      {!!data.length &&
        data.map((i) => (
          <div className={styles.post} key={i.id}>
            <h1>{i.title}</h1>
            <p>{i.body}</p>
          </div>
        ))}
    </div>
  );
};
