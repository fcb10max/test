import styled from "styled-components";

const Container = styled.div`
  display: ${(props) => (props.active ? "block" : "none")};
  background-color: rgba(0, 0, 0, 0.2);
  position: absolute;
  left: 0;
  top: 0;
`;
const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: flex-end;
`;
const Menu = styled.div`
  width: 20vw;
  height: 100vh;
  background-color: white;
`;

const BigMenu = ({ active }) => {
  return (
    <Container active={active}>
      <Wrapper>
        <Menu></Menu>
      </Wrapper>
    </Container>
  );
};

export default BigMenu;
