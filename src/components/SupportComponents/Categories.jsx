import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
`;
const Wrapper = styled.div`
  max-width: 1440px;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Header = styled.div`
  width: 100vw;
  display: flex;
  background-color: rgba(0, 0, 0, 0.9);
  justify-content: center;

  div {
    max-width: 1440px;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    padding: 20px;
  }
`;
const Logo = styled.p`
  color: white;
  margin-left: 20px;
  font-size: 24px;
`;
const Main = styled.div`
  max-width: 100%;
  width: 90vw;
  margin: 40px 20px;
`;
const Top = styled.div`
  max-width: 100%;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media(max-width: 700px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin: 40px 0;
  }
`;
const RouteDesc = styled.div`
  margin-bottom: 20px;
`;
const SearchBar = styled.div`
  min-width: 300px;
  max-width: 450px;
  width: 90vw;
  background-color: lightgray;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  input {
    background-color: transparent;
    width: 100%;
    height: 100%;
    border: none;
    padding: 15px 20px;
    font-size: 20px;

    :focus {
      outline: none;
    }
  }
`;
const Middle = styled.div``;
const Title = styled.h1``;
const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const LinkTitle = styled.h2``;

const Categories = ({ data }) => {

  window.scrollTo(0,0);

  return (
    <Container>
      <Wrapper>
        <Header>
          <div>
            <Logo>Logo</Logo>
            <Link
              to="#"
              style={{
                fontSize: "24px",
                color: "#fb800d",
                cursor: "pointer",
                textDecoration: "none",
                marginRight: "20px",
              }}
            >
              Contact us
            </Link>
          </div>
        </Header>
        <Main>
          <Top>
            <RouteDesc>UltraVPN &gt; Mac</RouteDesc>
            <SearchBar>
              <input type="text" placeholder="Search" />
            </SearchBar>
          </Top>
          <Middle>
            <Title>{data.title}</Title>
            <Grid>
              {data.content.map((content) => (
                <div style={{minWidth:"300px", maxWidth:"450px", width:"100vw", marginRight:"20px"}}>
                  <LinkTitle>{content.title}</LinkTitle>
                  <div style={{display:"flex", flexDirection:"column", margin:"20px 0"}}>
                  {content.links.map((link) => (
                      <Link
                        to="#"
                        style={{
                          textDecoration: "none",
                          color: "black",
                          margin: "10px 0",
                        }}
                      >
                        {link.title}
                      </Link>
                  ))}
                  </div>
                </div>
              ))}
            </Grid>
          </Middle>
        </Main>
      </Wrapper>
    </Container>
  );
};

export default Categories;
