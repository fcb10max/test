import styled from "styled-components";

const Container = styled.div``;
const Wrapper = styled.div`
  text-align: center;
`;
const Icon = styled.div`
  font-size: 30px;
`;
const Title = styled.h1`
  font-size: 35px;
  margin: 20px 0;
  max-width: 90vw;
  text-align: center;
  `;
const Desc = styled.div`
  font-size: 20px;
  max-width: 80vw;
  text-align: center;
`;
const Block = styled.div`
  display: flex;
  align-items: center;
  flex-direction: ${(props) => props.reversed ? "row-reverse" : "row"};
  margin: 80px 0;

  @media (max-width:1000px) {
    flex-direction: column;
  }
`;
const Left = styled.div`
  width: 100%;

  img {
    max-width: 90vw;
  }
`;
const Right = styled.div``;
const Items = styled.div``;
const Item = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;
`;
const ItemIcon = styled.div`
  min-width: 30px;
  margin-right: 10px;
`;
const TextContainer = styled.div`
  text-align: start;
`;
const TextTitle = styled.h3`
  max-width: 70vw;
`;
const TextDesc = styled.div`
  max-width: 70vw;
`;

const MainBlock = ({
  reversed,
  mainIcon,
  mainTitle,
  mainDesc,
  mainImg,
  contentObj
}) => {
  return (
    <Container>
      <Wrapper>
        <Icon>
          {mainIcon}
        </Icon>
        <Title>{mainTitle}</Title>
        <Desc>{mainDesc}</Desc>
        <Block reversed={reversed}>
          <Left>
            <img src={mainImg} alt="" />
          </Left>
          <Right>
            <Items>
              {contentObj.map((item) => (
              <Item>
                <ItemIcon>
                  {item.icon}
                </ItemIcon>
                <TextContainer>
                  <TextTitle>{item.title}</TextTitle>
                  <TextDesc>
                    {item.desc}
                  </TextDesc>
                </TextContainer>
              </Item>
              ))}
            </Items>
          </Right>
        </Block>
      </Wrapper>
    </Container>
  );
};

export default MainBlock;
