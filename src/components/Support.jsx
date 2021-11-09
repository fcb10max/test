import Catalog from "./SupportComponents/Catalog";
import Header from "./SupportComponents/Header";
import { useState } from "react";
import dataArr from "./SupportComponents/data";

const Support = ({ setMainActive, setCatalog }) => {
  const [data, setData] = useState(dataArr);

  window.scrollTo(0,0)

  return (
    <>
      <Header setMainActive={setMainActive} />
      <Catalog data={data} setCatalog={setCatalog} />
      <div
            style={{
              width: "100vw",
              display: "flex",
              justifyContent: "center",
              margin: "40px 0",
              borderBottom: "1px solid gray",
              paddingBottom: "40px",
            }}
          >
            <p
              style={{
                fontSize: "40px",
                fontWeFight: 700,
                width: "90vw",
                textAlign: "center",
              }}
            >
              Can’t find what you’re looking for?{" "}
              <span style={{ color: "#fb800d", cursor: "pointer" }}>
                Contact us
              </span>
            </p>
          </div>
          <p
            style={{
              fontSize: "12px",
              textAlign: "center",
              color: "gray",
              marginBottom: "20px",
            }}
          >
            UltraVPN
          </p>
    </>
  );
};

export default Support;
