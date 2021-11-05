import styled from "styled-components"
import WhyChooseComponent from "./DevicesComponents/WhyChooseComponent";
import ImgTextBlock from "./HomeComponents/ImgTextBlock";
import NavbarNoImg from "./Navbars/NavbarNoImg";

const Container = styled.div``;
const Wrapper = styled.div``;

const Articles = () => {
  return (
    <Container>
      <Wrapper>
        <NavbarNoImg
          img="https://ultravpn.com/assets/hero-wired-dots.png"
          title="VPNs Explained"
          desc="A VPN creates a secure tunnel between your device and a server. When you connect to a VPN, all of the information you send and receive goes through that tunnel, keeping your activity private and safe."
        />
        <ImgTextBlock
          image="https://ultravpn.com/assets/password-laptop.png"
          intro="ENCRYPTION"
          title="Hidden From Plain Sight"
          desc="When you connect directly to an Internet Service Provider (ISP), they can log and track your internet usage. When tracked, your data may be sold or passed on to marketers."
        />
        <ImgTextBlock
          reversed={true}
          image="https://ultravpn.com/assets/encryption.png"
          intro="ANTI-SNOOPING"
          title="Third Parties Can't Watch You"
          desc="A secure VPN will prevent snooping and collection of your browsing history by your ISP, your government, or marketers looking to track what you do online."
        />
        <ImgTextBlock
          image="https://ultravpn.com/assets/social-media.png"
          intro="ULTIMATE ACCESS"
          title="We Don't Restrict Sites, Servers, or Downloads"
          desc="Good VPN providers don’t track your activity. They don’t restrict the sites you can visit, the videos you can watch, or the information you can access. With a click, you unlock the content that you've previously been unable to see across the entire internet."
        />
        <WhyChooseComponent/>
      </Wrapper>
    </Container>
  )
}

export default Articles
