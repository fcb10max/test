import GSNContainer from "./HomeComponents/GSNContainer";
import ImgTextBlock from "./HomeComponents/ImgTextBlock";
import TopBlock from "./HomeComponents/TopBlock";
import Navbar from "./Navbars/Navbar";

const Home = () => {

  return (
    <>
      <Navbar />
      <TopBlock />
      <ImgTextBlock
        intro="DON’T COMPROMISE:"
        title="Fast and Unlimited VPN Access"
        desc="We’re proud of the speed of our servers. Stream live events without waiting for your download to catch up."
        image="https://ultravpn.com/assets/home-netflix.png"
      />
      <ImgTextBlock
        reversed={true}
        intro="PROTECTION AND SECURITY"
        title="Our Encryption is Virtually Uncrackable"
        desc="In the war against hacking and snooping, you need an extra layer of security. With UltraVPN, your ISP can't log your activity or sell your browsing data when you use our encrypted tunnel to go online. We hand the control back to you."
        image="https://ultravpn.com/assets/home-encryption.png"
      />
      <ImgTextBlock
        intro="BROWSE WITHOUT LIMITS:"
        title="Your VPN is Unlimited and Unrestricted"
        desc="When connected to UltraVPN, you'll be able to access content that you normally can't. Use your secure VPN to bypass blocks set up by your ISP or government, or to access all of your preferred sites and services when you’re overseas."
        image="https://ultravpn.com/assets/home-fb.png"
      />
      <GSNContainer />
    </>
  );
};

export default Home;
