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
  justify-content: center;
`;
const Grid = styled.div`
  width: 90vw;
  margin: 50px 0;
  display: flex;
  flex-wrap: wrap;
`;
const Item = styled.div`
  padding: 20px 10px;
  width: 350px;
  margin-right: 20px;
`;
const Icon = styled.div`
  font-size: 30px;
  margin-bottom: 20px;
`;
const Title = styled.div`
  font-size: 25px;
  font-weight: 700;
`;
const Links = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Catalog = ({ data, setCatalog }) => {
  return (
    <Container>
      <Wrapper>
        <Grid>
          {data.map((item) => (
            <Item>
              <Icon>{item.icon}</Icon>
              <Title>{item.title}</Title>
              <Links>
                {item.content[0].links.slice(0, 3).map((link) => (
                  <Link
                    to="#"
                    style={{
                      textDecoration: "none",
                      color: "black",
                      cursor: "pointer",
                      fontSize: "14px",
                      fontWeight: "700",
                      margin: "10px 0",
                    }}
                  >
                    {link.title}
                  </Link>
                ))}
                <Link
                  to="/categories"
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <p
                    onClick={() => setCatalog(item)}
                    style={{
                      fontSize: "14px",
                      fontWeight: "700",
                      color: "#fb800d",
                    }}
                  >
                    View All
                  </p>
                </Link>
              </Links>
            </Item>
          ))}
        </Grid>
      </Wrapper>
    </Container>
  );
};

export default Catalog;
