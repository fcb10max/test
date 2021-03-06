import { faMousePointer } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components"

const Container = styled.div`
  max-width: 100%;
  width: 100vw;
  display: flex;
  justify-content: center;
  margin: 40px 20px;

  @media (max-width: 800px) {
    margin: 40px 0;
  }
`;
const Wrapper = styled.div`
  text-align: center;
  max-width: 1440px;
  width: 100vw;
`;
const Icon = styled.h1``;
const Title = styled.h1``;
const Block = styled.div`
  display: flex;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;
const Item = styled.div`
  flex: 1;
  padding: 40px;
`;
const Img = styled.div`
  img {
    width: 300px;
}
`;
const Text = styled.h2``;
const Desc = styled.div`
  max-width: 60vw;
  min-width: 300px;
  font-size: 20px;
  color: gray;
`;

const SetupInstructions = ({ steps, title }) => {
  return (
    <Container>
      <Wrapper>
        <Icon>
          <FontAwesomeIcon icon={faMousePointer} />
        </Icon>
        <Title>{title}</Title>
        <Block>
          {steps.map((item, ind) => (
          <Item>
            <Img><img src={item.img} alt="" srcset="" /></Img>
            <Text>Step {ind+1}</Text>
            <Desc>{item.desc}</Desc>
          </Item>
          ))}
        </Block>
      </Wrapper>
    </Container>
  )
}

export default SetupInstructions
