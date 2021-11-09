import { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

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

  @media (max-width: 1100px) {
    flex-wrap: wrap;
  }
`;
const Block = styled.div`
  flex: 1;
  margin: 20px;
  min-width: 150px;
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

const Footer = ({ devices, setDevice, setMainActive }) => {
  window.scrollTo(0, 0);

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
            <Link
              style={{ textDecoration: "none" }}
              to="/devices"
              onClick={() => setDevice(devices.windows)}
            >
              <Item>VPN for Windows</Item>
            </Link>
            <Link
              style={{ textDecoration: "none" }}
              to="/devices"
              onClick={() => setDevice(devices.macOS)}
            >
              <Item>VPN for Mac</Item>
            </Link>
            <Link
              style={{ textDecoration: "none" }}
              to="/devices"
              onClick={() => setDevice(devices.iOS)}
            >
              <Item>VPN for iOS</Item>
            </Link>
            <Link
              style={{ textDecoration: "none" }}
              to="/devices"
              onClick={() => setDevice(devices.Android)}
            >
              <Item>VPN for Android</Item>
            </Link>
          </Content>
        </Block>
        <Block>
          <Title>Explore</Title>
          <Content>
            <Link to="/articles" style={{ textDecoration: "none" }}>
              <Item>What is a VPN</Item>
            </Link>
            <Link to="/top5uses" style={{ textDecoration: "none" }}>
              <Item>Top 5 VPN Uses</Item>
            </Link>
            <Link to="/sport" style={{ textDecoration: "none" }}>
              <Item>Stream Sports</Item>
            </Link>
            <Link to="/stream" style={{ textDecoration: "none" }}>
              <Item>Stream Live Events</Item>
            </Link>
            <Link to="/login" style={{ textDecoration: "none" }}>
              <Item>Log In</Item>
            </Link>
            <Link to="/downloadNow" style={{ textDecoration: "none" }}>
              <Item>Download Now</Item>
            </Link>
          </Content>
        </Block>
        <Block>
          <Title>Support</Title>
          <Content>
            <Link to="/support" style={{ textDecoration: "none" }} onClick={() => setMainActive(false)}>
              <Item>Knowledge Base</Item>
            </Link>
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
  );
};

export default Footer;
