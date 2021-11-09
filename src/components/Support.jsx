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
    </>
  );
};

export default Support;
