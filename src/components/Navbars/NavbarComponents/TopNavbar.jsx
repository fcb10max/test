import { faBars, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  display: flex;
  justify-content: center;
  z-index: 2;
`;
const Wrapper = styled.div`
  max-width: 1440px;
  width: 100vw;
  display: flex;
  justify-content: center;
`;
const LogoAndMenuContainer = styled.div`
  max-width: 100%;
  width: 90vw;
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;
const Logo = styled.div``;
const Menu = styled.div``;
const ShortMenu = styled.div`
  display: none;
  width: 40px;
  height: 40px;
  font-size: 30px;
  color: white;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  @media (max-width: 900px) {
    display: flex;
  }
`;
const LongMenu = styled.div`
  @media (max-width: 900px) {
    display: none;
  }
`;
const LongMenuItems = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const LongMenuItem = styled.div`
  margin-right: 32px;
  font-weight: 600;
  color: white;

  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
const LoginButton = styled.div`
  padding: 8px 15px;
  border: 1px solid white;
  border-radius: 32px;
  transition: all 0.3s linear;

  span:first-child {
    margin-right: 10px;
  }

  :hover {
    color: black;
    background-color: white;
  }
`;

const TopNavbar = ({ setMenuActive, setDispFixed }) => {
  const onClickHandler = (e) => {
    setMenuActive(true);
    setDispFixed(true);
  };

  return (
    <Container>
      <Wrapper>
        <LogoAndMenuContainer>
          <Link style={{ textDecoration: "none", cursor: "pointer" }} to="/">
            <Logo>Logo</Logo>
          </Link>
          <Menu>
            <ShortMenu onClick={onClickHandler}>
              <FontAwesomeIcon icon={faBars} />
            </ShortMenu>
            <LongMenu>
              <LongMenuItems>
                <LongMenuItem>USA</LongMenuItem>
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to="/features"
                >
                  <LongMenuItem>Features</LongMenuItem>
                </Link>
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to="/location"
                >
                  <LongMenuItem>Locations</LongMenuItem>
                </Link>
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to="/pricing"
                >
                  <LongMenuItem>Pricing</LongMenuItem>
                </Link>
                <Link style={{ textDecoration: "none", color: "white" }} to="/support">
                  <LongMenuItem>Support</LongMenuItem>
                </Link>
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to="/login"
                >
                  <LoginButton>
                    <span>
                      <FontAwesomeIcon icon={faLock} />
                    </span>
                    <span>Log in</span>
                  </LoginButton>
                </Link>
              </LongMenuItems>
            </LongMenu>
          </Menu>
        </LogoAndMenuContainer>
      </Wrapper>
    </Container>
  );
};

export default TopNavbar;
