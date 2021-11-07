import {
  faAndroid,
  faApple,
  faAppStoreIos,
  faWindows,
} from "@fortawesome/free-brands-svg-icons";
import {
  faArrowRight,
  faBars,
  faCheck,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  background-image: url(${(props) => props.bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  background-color: black;
`;
const Wrapper = styled.div`
  max-width: 1440px;
  width: 100vw;
`;
const LogoAndMenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 32px 20px;
`;
const Logo = styled.div``;
const Menu = styled.div``;
const ShortMenu = styled.div`
  display: none;
  width: 40px;
  height: 40px;
  font-size: 30px;
  color: black;
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
const Block = styled.div`
  display: flex;
  padding: 0 100px;
  margin: 30px 0 40px;

  @media (max-width: 1000px) {
    flex-direction: column-reverse;
    margin: 40px 0;
    padding: 20px;
    align-items: center;
  }
`;
const Left = styled.div`
  flex: 1;
`;
const Right = styled.div`
  flex: 1;
  margin: 30px 0;

  img {
    max-width: 450px;
    min-width: 300px;
    width: 80vw;
  }
`;
const Title = styled.h1``;
const Desc = styled.div`
  margin: 20px 0;
`;
const CheckText = styled.div``;
const Item = styled.div`
  display: flex;
`;
const Check = styled.div`
  color: gold;
  margin-right: 15px;
  margin-bottom: 10px;
`;
const Text = styled.div``;
const Button = styled.div`
  min-width: 140px;
  width: fit-content;
  padding: 10px 24px;
  border-radius: 32px;
  background-color: #ff8600;
  color: black;
  font-size: 18px;
  font-weight: 600;
  transition: transform 0.3s linear;
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;

  span:first-child {
    margin-right: 5px;
  }

  :hover {
    transform: translateY(-5px);
    cursor: pointer;
  }
`;
const Bottom = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  width: 100vw;
  display: flex;
  justify-content: center;
  background-color: #101010;
  align-items: center;
  min-height: 72px;
`;
const BottomWrapper = styled.div`
  max-width: ${(props) => (props.sport ? "70%" : "860px")};
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;

  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;
  }
`;
const BottomLeft = styled.div`
  margin-right: 40px;

  @media (max-width: 700px) {
    margin: 10px 0;
  }
`;
const BottomRight = styled.div`
  display: flex;
  ${(props) => (props.sport ? "width: 100%" : "")};

  @media (max-width: 700px) {
    justify-content: center;
  }
`;
const BottomRightItem = styled.div`
  display: flex;
  margin-right: 30px;
  align-items: center;

  @media (max-width: 700px) {
    flex-direction: column;
    margin-bottom: 10px;
  }
`;
const BottomRightIcon = styled.div`
  margin-right: 10px;
  font-size: 30px;
`;
const BottomRightText = styled.div``;

const DevicesNavbar = ({ title, desc, list, bg, img, btmIcons }) => {
  return (
    <Container bg={bg}>
      <Wrapper>
        <LogoAndMenuContainer>
          <Link style={{ textDecoration: "none", cursor: "pointer" }} to="/">
            <Logo>Logo</Logo>
          </Link>
          <Menu>
            <ShortMenu>
              <FontAwesomeIcon icon={faBars} />
            </ShortMenu>
            <LongMenu>
              <LongMenuItems>
                <LongMenuItem>USA</LongMenuItem>
                <Link style={{ textDecoration: "none", color: "white" }} to="/features">
                  <LongMenuItem>Features</LongMenuItem>
                </Link>
                <Link style={{ textDecoration: "none", color: "white" }} to="/location">
                  <LongMenuItem>Locations</LongMenuItem>
                </Link>
                <Link style={{ textDecoration: "none", color: "white" }} to="/pricing">
                  <LongMenuItem>Pricing</LongMenuItem>
                </Link>
                <Link style={{ textDecoration: "none", color: "white" }} to="/">
                  <LongMenuItem>Support</LongMenuItem>
                </Link>
                <Link style={{ textDecoration: "none", color: "white" }} to="/login">
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
        <Block>
          <Left>
            <Title>{title}</Title>
            <Desc>{desc}</Desc>
            <CheckText>
              {list.map((item) => (
                <Item>
                  <Check>
                    <FontAwesomeIcon icon={faCheck} />
                  </Check>
                  <Text>{item}</Text>
                </Item>
              ))}
            </CheckText>
            <Button>
              <span>Register Now</span>
              <span>
                <FontAwesomeIcon icon={faArrowRight} />
              </span>
            </Button>
          </Left>
          <Right>
            <img src={img} alt="" />
          </Right>
        </Block>
      </Wrapper>
      <Bottom>
        {btmIcons ? (
          <BottomWrapper sport={true}>
            {btmIcons.map((item) => (
              <BottomRight sport={true}>
                <img src={item} alt="" />
              </BottomRight>
            ))}
          </BottomWrapper>
        ) : (
          <BottomWrapper>
            <BottomLeft>ULTRAVPN IS COMPATIBLE WITH</BottomLeft>
            <BottomRight>
              <BottomRightItem>
                <BottomRightIcon>
                  <FontAwesomeIcon icon={faAppStoreIos} />
                </BottomRightIcon>
                <BottomRightText>macOS</BottomRightText>
              </BottomRightItem>
              <BottomRightItem>
                <BottomRightIcon>
                  <FontAwesomeIcon icon={faWindows} />
                </BottomRightIcon>
                <BottomRightText>Windows</BottomRightText>
              </BottomRightItem>
              <BottomRightItem>
                <BottomRightIcon>
                  <FontAwesomeIcon icon={faAndroid} />
                </BottomRightIcon>
                <BottomRightText>Android</BottomRightText>
              </BottomRightItem>
              <BottomRightItem>
                <BottomRightIcon>
                  <FontAwesomeIcon icon={faApple} />
                </BottomRightIcon>
                <BottomRightText>Apple</BottomRightText>
              </BottomRightItem>
            </BottomRight>
          </BottomWrapper>
        )}
      </Bottom>
    </Container>
  );
};

export default DevicesNavbar;
