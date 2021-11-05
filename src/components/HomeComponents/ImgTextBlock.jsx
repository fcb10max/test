import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  position: relative;
`;
const Bg = styled.div`
  left: 100%;
  display: ${(props) => (props.active ? "block" : "none")};
  position: absolute;
  background-color: lightgray;
  width: 100vw;
  height: 100%;
  z-index: -1;
`;
const Wrapper = styled.div`
  max-width: 1440px;
  width: 80vw;
  display: flex;
  align-items: center;
  flex-direction: ${(props) => (props.reversed ? "row-reverse" : "row")};
  padding: 80px 10px;
  max-height: fit-content;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding-left: 20px;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
`;
const Intro = styled.p``;
const Title = styled.h1`
  margin: 20px 0;
  width: 60%;
`;
const Desc = styled.div`
  width: 70%;
`;
const Img = styled.div`
  img {
    max-width: 100%;
    width: 100vw;
  }
`;

const ImgTextBlock = ({ reversed, intro, title, desc, image }) => {

  return (
    <Container className={!reversed ? "animate" : ""}>
      <Bg active={!reversed}></Bg>
      <Wrapper reversed={reversed}>
        <Left>
          <Intro>{intro}</Intro>
          <Title>{title}</Title>
          <Desc>{desc}</Desc>
        </Left>
        <Right>
          <Img>
            <img src={image} alt="" />
          </Img>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default ImgTextBlock;
