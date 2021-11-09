import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Conatiner = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  background-image: url("https://theme.zdassets.com/theme_assets/109411/c0952083c20ca93ff56e4a71b30bcec61149ca27.png");
  background-position: center;
  background-size: cover;
  background-color: black;
  z-index: 20;
  height: 500px;
  `;
const Wrapper = styled.div`
  max-width: 1440px;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const HeaderBlock = styled.div`
  max-width: 100%;
  width: 95vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 72px;
  `;
const Logo = styled.div`
  color: white;
  `;
const Anchor = styled.a`
  color: #ff6800;
  text-decoration: none;
  font-size: 20px;
  `;
const SearchBlock = styled.div`
  max-width: 100%;
  width: 95vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-size: 40px;
    color: white;
  }

  div {
    margin: 20px 0;
    width: 40%;
    background-color: white;
    padding: 10px 20px;
    border-radius: 20px;
  }

  input {
    width: 100%;
    height: 30px;
    border: none;
    background-color: transparent;
    color: black;
    font-size: 24px;

    :focus {
      outline: none;
    }
  }
`;

const Header = ({ setMainActive }) => {
  const [search, setSearch] = useState("");

  return (
    <Conatiner>
      <Wrapper>
        <HeaderBlock>
          <Link
            to="/"
            onClick={() => setMainActive(true)}
            style={{
              color: "white",
              textDecoration: "none",
              cursor: "pointer",
            }}
          >
            <Logo>Logo</Logo>
          </Link>
          <Anchor>Contact us</Anchor>
        </HeaderBlock>
        <SearchBlock>
          <h1>How can we help?</h1>
          <div>
            <input
              type="text"
              placeholder="Search"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />
          </div>
        </SearchBlock>
      </Wrapper>
    </Conatiner>
  );
};

export default Header;
