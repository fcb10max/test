import {
  faAndroid,
  faApple,
  faAppStoreIos,
  faWindows,
} from "@fortawesome/free-brands-svg-icons";
import {
  faArrowRight,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
  padding: 10px 0 20px;
  position: relative;
`;
const Wrapper = styled.div`
  max-width: 1440px;
  width: 100vw;
  position: relative;
  display: flex;
  justify-content: center;
`;
const Block = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  margin: 40px 0 60px;
  position: relative;
  top: 60px;

  @media (max-width: 1000px) {
    flex-direction: column-reverse;
    margin: 40px 0;
    padding: 20px;
    align-items: center;
    top: 0;
  }
`;
const Left = styled.div`
  flex: 1;
  margin-right: 20px;
`;
const Right = styled.div`
  flex: 1;
  margin: 30px 0;
  display: flex;
  justify-content: center;
  align-items: center;

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
  display: ${(props) => props.btmHide ? "none" : "flex"};
  justify-content: center;
  background-color: #101010;
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 0;
`;
const BottomWrapper = styled.div`
  max-width: ${(props) => (props.sport ? "70%" : "860px")};
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;

  @media (max-width: 700px) {
    ${(props) => props.sport ? "flex-wrap: wrap" : "flex-direction: column" };
    align-items: center;
    font-size: 10px;
  }
`;
const BottomLeft = styled.div`
  margin-right: 40px;
  flex-basis: 20px;
  min-width: 250px;

  @media (max-width: 700px) {
    margin: 10px;
    min-width: auto;
  }
`;
const BottomRight = styled.div`
  display: flex;
  ${(props) => (props.sport ? "width: 100%" : "")};
  
  @media (max-width: 700px) {
    justify-content: ${(props) => props.sport ? "space-between" : "center"};
    ${(props) => (props.sport ? "width: fit-content" : "")};
    ${(props) => (props.sport ? "margin: 10px 20px" : "")};
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

const DevicesNavbar = ({ title, desc, list, bg, img, btmIcons, btmHide }) => {
  return (
    <Container bg={bg}>
      <Wrapper>
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
      <Bottom btmHide={btmHide}>
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
