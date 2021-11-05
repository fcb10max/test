import { faArrowRight, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const Container = styled.div`
  background-image: ${(props) => `url(${props.img})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100vw;
  display: flex;
  justify-content: center;
  color: white;
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
`;
const LongMenu = styled.div``;
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
    margin-right: 10px
  }
  
  :hover {
    color: black;
    background-color: white;
  }
`;
const TextContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 12px 20px 104px;
`;
const BigText = styled.div`
  margin-bottom: 16px;
  font-size: 40px;
  font-weight: 700;
`;
const SmallText = styled.div`
  margin-bottom: 32px;
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  width: 75%;
`;
const BtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const RegisterButton = styled.div`
  width: fit-content;
  padding: 10px 24px;
  border-radius: 32px;
  background-color: #ff8600;
  color: black;
  font-size: 18px;
  font-weight: 600;
  transition: transform 0.3s linear;
  margin-top: 40px;

  span:first-child {
    margin-right: 5px;
  }

  :hover {
    transform: translateY(-5px);
    cursor: pointer;
  }
`;

const NavbarNoImg = ({ img, title, desc }) => {
  return (
    <Container img={img}>
      <Wrapper>
        <LogoAndMenuContainer>
          <Logo>Logo</Logo>
          <Menu>
            <ShortMenu></ShortMenu>
            <LongMenu>
              <LongMenuItems>
                <LongMenuItem>USA</LongMenuItem>
                <LongMenuItem>Features</LongMenuItem>
                <LongMenuItem>Locations</LongMenuItem>
                <LongMenuItem>Pricing</LongMenuItem>
                <LongMenuItem>Support</LongMenuItem>
                <LoginButton><span><FontAwesomeIcon icon={faLock} /></span><span>Log in</span></LoginButton>
              </LongMenuItems>
            </LongMenu>
          </Menu>
        </LogoAndMenuContainer>
        <TextContainer>
          <BigText>{title}</BigText>
          <SmallText>
          {desc}
          </SmallText>
          <BtnContainer>
            <RegisterButton><span>Register Now</span><span><FontAwesomeIcon icon={faArrowRight} /></span></RegisterButton>
          </BtnContainer>
        </TextContainer>
      </Wrapper>
    </Container>
  );
};

export default NavbarNoImg;
