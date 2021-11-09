import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ImgTextBlock from "./HomeComponents/ImgTextBlock";
import NavbarNoImg from "./Navbars/NavbarNoImg";

const Container = styled.div``;
const Wrapper = styled.div``;
const OutlinedDigit = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  border-radius: 50%;
  font-size: 24px;
`;
const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;
const Title = styled.h1`
  font-size: 30px;
  max-width: 80vw;
`;
const Desc = styled.div`
  min-width: 300px;
  text-align: center;
  width: 40%;
  margin: 20px 0;
  font-size: 18px;
  color: gray;
`;

const RegisterButton = styled.div`
  width: fit-content;
  padding: 10px 24px;
  border-radius: 32px;
  background-color: #ff8600;
  color: black;
  font-size: 18px;
  font-weight: 600;
  transition: transform 0.3s linear;
  margin: 40px 0;

  span:first-child {
    margin-right: 5px;
  }

  :hover {
    transform: translateY(-5px);
    cursor: pointer;
  }
`;

const UsesComponent = () => {
  window.scrollTo(0, 0);

  return (
    <Container>
      <Wrapper>
        <NavbarNoImg
          title="5 Key Reasons to Use a VPN"
          desc="Why are so many people protecting themselves with UltraVPN? We surveyed our users, and here’s what they told us."
          img="https://ultravpn.com/assets/hero-wired-dots.png"
        />
        <ImgTextBlock
          intro={<OutlinedDigit>1</OutlinedDigit>}
          title="Boosting Privacy and Staying Safe"
          desc="The internet is something of a ‘Wild West’ at the moment. Privacy scandals and dubious marketing techniques are always in the news. A VPN is your best form of defense against being watched, followed, or hacked.We encrypt your traffic, keep it private, and ensure that you're protected. We don't keep track of the sites you visit."
          image="https://ultravpn.com/assets/password-laptop.png"
        />
        <ImgTextBlock
          reversed={true}
          intro={<OutlinedDigit>2</OutlinedDigit>}
          title="Getting Around Blocks, Restrictions, and Censorship"
          desc="Different countries, regimes, and ISPs have different attitudes towards the internet; many would like to prevent you from seeing the entire web. With a VPN, you can bypass the barriers and access everything the internet has to offer."
          image="https://ultravpn.com/assets/social-media-location.png"
        />
        <ImgTextBlock
          intro={<OutlinedDigit>3</OutlinedDigit>}
          title="Comparing Prices Around the World Without Restriction"
          desc="Did you know that some online stores set their pricing according to where you live? Our users think that’s unfair, and they use their VPN to review prices from different locations to get the best deal."
          image="https://ultravpn.com/assets/global-network-map.png"
        />
        <ImgTextBlock
          reversed={true}
          intro={<OutlinedDigit>4</OutlinedDigit>}
          title="Accessing Free WiFi Without the Risk"
          desc="Public WiFi is a known security problem for all internet users, with man-in-the-middle attacks and hacking becoming more common. With a VPN, you can use free internet anywhere while staying safe and encrypted."
          image="https://ultravpn.com/assets/cc-black.png"
        />
        <ImgTextBlock
          intro={<OutlinedDigit>5</OutlinedDigit>}
          title="Using a VPN on Every Device"
          desc="The best VPNs will protect you on every device. UltraVPN provides apps for Windows, Desktop, iOS, Android and more to ensure that you never risk browsing without protection."
          image="https://ultravpn.com/assets/ultra-vpn-apple-devices.png"
        />
        <BottomContainer>
          <Title>One VPN, All Your Devices</Title>
          <Desc>
            Sign up with UltraVPN today for instant, unrestricted access. It's
            the easiest way to secure your browsing, enhance your privacy, and
            unlock the whole of the web.
          </Desc>
          <Link to="/payment" style={{ textDecoration: "none" }}>
            <RegisterButton>
              <span>Register Now</span>
              <span>
                <FontAwesomeIcon icon={faArrowRight} />
              </span>
            </RegisterButton>
          </Link>
        </BottomContainer>
      </Wrapper>
    </Container>
  );
};

export default UsesComponent;
