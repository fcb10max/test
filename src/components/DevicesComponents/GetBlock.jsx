import {
  faArrowRight,
  faCheckCircle,
  faDesktop,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  margin: 150px 0;
`;
const Wrapper = styled.div`
  max-width: 1440px;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.div`
  text-align: center;
  max-width: 80vw;
`;
const Desc = styled.div`
  text-align: center;
  max-width: 80vw;
`;
const Block = styled.div`
  max-width: 80%;
  width: 100vw;
  display: flex;
  justify-content: center;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Item = styled.div`
  margin: 40px;
  display: flex;
  min-width: 300px;
`;
const LeftIcon = styled.div`
  width: 30px;
  margin-right: 15px;
  font-size: 24px;
`;
const LeftText = styled.div`
  max-width: 350px;
`;
const LeftTitle = styled.h2``;
const LeftDesc = styled.div`
  max-width: 70vw;
  font-weight: 400;
  color: gray;
`;
const Right = styled.div`
  flex: 1;
`;
const Img = styled.div`
  display: flex;
  justify-content: flex-start;
  img {
    max-width: 50vw;
    min-width: 300px;
  }
`;
const Button = styled.div`
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

const GetBlock = ({ title, desc, item1, item2, img }) => {
  return (
    <Container>
      <Wrapper>
        <Title>
          <h1>{title}</h1>
        </Title>
        <Desc>{desc}</Desc>
        <Block>
          <Left>
            <Item>
              <LeftIcon>
                <FontAwesomeIcon icon={faDesktop} />
              </LeftIcon>
              <LeftText>
                <LeftTitle>{item1.title}</LeftTitle>
                <LeftDesc>{item1.desc}</LeftDesc>
              </LeftText>
            </Item>
            <Item>
              <LeftIcon>
                <FontAwesomeIcon icon={faCheckCircle} />
              </LeftIcon>
              <LeftText>
                <LeftTitle>{item2.title}</LeftTitle>
                <LeftDesc>{item2.desc}</LeftDesc>
              </LeftText>
            </Item>
          </Left>
          <Right>
            <Img>
              <img src={img} alt="" />
            </Img>
          </Right>
        </Block>
        <Link to="/payment" style={{textDecoration:"none"}}>
        <Button>
          <span>Register Now</span>
          <span>
            <FontAwesomeIcon icon={faArrowRight} />
          </span>
        </Button>
        </Link>
      </Wrapper>
    </Container>
  );
};

export default GetBlock;
