import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  margin: 0 20px;
  border-radius: 16px;
  border: ${(props) => props.diff ? "4px solid #ff8600" : "2px solid grey"};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  text-align: center;
  max-width: 300px;
  height: 400px;
  ${(props) => props.diff ? "transform: scale(1.1);" : ""}
`;
const Discount = styled.div`
  width: 40%;
  position: absolute;
  transform: rotate(45deg);
  right: -30px;
  top: 25px;
  background-color: ${(props) => props.diff ? "rgba(255,0,0,0.7)" : "#ff8600"};
  font-weight: 700;
  color: white;
`;
const Time = styled.h3``;
const Regularly = styled.div`
  text-decoration: line-through;
  margin: 10px 0;
`;
const Price = styled.h1``;
const Frequency = styled.div`
  margin: 10px 0;
`;
const Desc = styled.div`
  span {
    text-decoration: line-through;
  }
`;
const Button = styled.div`
  width: fit-content;
  border: ${(props) => props.diff ? "none" : "2px solid black"};
  padding: 10px 24px;
  border-radius: 32px;
  color: ${(props) => props.diff ? "white" : "black"};
  background-color: ${(props) => props.diff ? "rgba(255,0,0,0.7)" : "transparent"};
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

const Card = ({ disc, month, regularly, price, frequency, desc, diff }) => {
  return (
    <Container diff={diff}>
      <Discount diff={diff}>Save {disc}%</Discount>
      <Time>{month}</Time>
      <Regularly>{regularly}</Regularly>
      <Price>{price}</Price>
      <Frequency>{frequency}</Frequency>
      <Desc dangerouslySetInnerHTML={{ __html: desc}}/>
      <Button diff={diff}>
        <span>Choose Plan</span>
        <span>
          <FontAwesomeIcon icon={faArrowRight} />
        </span>
      </Button>
    </Container>
  );
};

export default Card;
