import styled from "styled-components"

const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  background-color: #101010;
  color: white;
  padding: 30px 0;
  `;
const Wrapper = styled.div`
  max-width: 1440px;
  width: 100vw;
  display: flex;
  margin: 0 20px;
`;
const Block = styled.div`
  flex: 1;
  padding-right: 20px;
`;
const Logo = styled.div``;
const Copyright = styled.div``;
const Title = styled.div``;
const Content = styled.div``;
const Item = styled.div`
  color: gray;
  
  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <Block>
          <Logo>Logo</Logo>
          <Copyright>© UltraVPN.com 2021. All Rights Reserved.</Copyright>
        </Block>
        <Block>
          <Title>Product</Title>
          <Content>
            <Item>VPN for Windows</Item>
            <Item>VPN for Mac</Item>
            <Item>VPN for iOS</Item>
            <Item>VPN for Android</Item>
          </Content>
        </Block>
        <Block>
          <Title>Explore</Title>
          <Content>
            <Item>What is a VPN</Item>
            <Item>Top 5 VPN Uses</Item>
            <Item>Stream Sports</Item>
            <Item>Stream Live Events</Item>
            <Item>Log In</Item>
            <Item>Download Now</Item>
          </Content>
        </Block>
        <Block>
          <Title>Support</Title>
          <Content>
            <Item>Knowledge Base</Item>
            <Item>Contact Us</Item>
          </Content>
        </Block>
        <Block>
          <Title>Legal</Title>
          <Content>
            <Item>Terms of Service</Item>
            <Item>Privacy Policy</Item>
            <Item>Money Back Guarantee</Item>
          </Content>
        </Block>
      </Wrapper>
    </Container>
  )
}

export default Footer
