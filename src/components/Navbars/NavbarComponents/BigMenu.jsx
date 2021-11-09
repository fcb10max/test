import { faWindowClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MainDiv = styled.div`
  .active {
    opacity: 1;
  }
`;
const Container = styled.div`
  display: ${(props) => (props.active ? "flex" : "none")};
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  justify-content: flex-end;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 10;
  transition: all 0.5s linear;
  /* opacity: 0; */
`;
const Wrapper = styled.div`
  width: 300px;
  height: 100vh;
  background-color: white;
  display: flex;
  justify-content: center;
  position: relative;
`;
const Icon = styled.div`
  font-size: 24px;
  color: black;
  position: absolute;
  right: 10px;
  top: 10px;
`;
const MenuBlock = styled.div`
  width: 90%;
  margin: 10px;
  display: flex;
  flex-direction: column;
  padding: 60px 0;
`;

const BigMenu = ({ active, setMenuActive, setDispFixed }) => {
  const onclickHandler = (e) => {
    setMenuActive(false);
    setDispFixed(false);
  };

  const menuArr = [
    { name: "Features", link: "/features" },
    { name: "Locations", link: "/location" },
    { name: "Pricing", link: "/pricing" },
    { name: "Support", link: "/#" },
    { name: "Log: in", link: "/login" },
  ];

  return (
    <MainDiv>
      <Container active={active} id="item">
        <Wrapper>
          <Icon onClick={onclickHandler}>
            <FontAwesomeIcon icon={faWindowClose} />
          </Icon>
          <MenuBlock>
            {menuArr.map((item) => (
              <Link
                onMouseOver={(e) =>
                  (e.target.style.textDecoration = "underline")
                }
                onMouseOut={(e) => (e.target.style.textDecoration = "none")}
                style={{
                  textDecoration: "none",
                  color: "black",
                  marginBottom: "20px",
                  borderBottom: "2px solid gray",
                }}
                onClick={onclickHandler}
                to={item.link}
              >
                {item.name}
              </Link>
            ))}
          </MenuBlock>
        </Wrapper>
      </Container>
    </MainDiv>
  );
};

export default BigMenu;
