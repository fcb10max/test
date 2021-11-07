import {
  faCheck,
  faDesktop,
  faEyeSlash,
  faLock,
  faMapMarkerAlt,
  faShieldAlt,
  faStopwatch,
  faTachometerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import NavbarNoImg from "./Navbars/NavbarNoImg";
import Card from "./PricingComponents/Card";

const Container = styled.div`
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Wrapper = styled.div`
  max-width: 1440px;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px 0;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 75vw;

  margin: 50px 0 100px;

  @media (max-width: 1000px) {
    flex-direction: column;
    margin: 20px 0;
    padding: 0;
  }
`;

const Middle = styled.div`
  max-width: 1440px;
  width: 100vw;
  display: flex;
  justify-content: center;
`;
const MiddleWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const MiddleIcon = styled.div`
  font-size: 30px;
`;
const MiddleTitle = styled.h1`
  margin: 20px 0;
  text-align: center;
  width: 80vw;
`;
const MiddleDesc = styled.div`
  color: gray;
  text-align: center;
  width: 80vw;
`;
const MiddleBlock = styled.div`
  max-width: 1440px;
  width: 70%;
  display: grid;
  grid-template: 1fr 1fr 1fr / 1fr 1fr;
  grid-row-gap: 20px;
  margin: 40px 0;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    width: 90%;
  }
`;
const Item = styled.div`
  display: flex;
  width: 70%;
  margin: 20px;

  @media (max-width: 800px) {
    justify-content: flex-start;
    width: 90vw;
  }

  i {
    display: flex;
    justify-content: center;
    font-size: 24px;
    width: 40px;
    margin-right: 10px;
  }
`;
const BlockText = styled.div``;
const BlockTitle = styled.h3`
  font-size: 20px;
  max-width: 70vw;
  `;
const BlockDesc = styled.div`
  font-size: 16px;
  max-width: 70vw;
  `;
const Bottom = styled.div`
  display: flex;
  justify-content: center;
`;
const BottomBlock = styled.div`
  max-width: 1440px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const BottomIcon = styled.div`
  font-size: 30px;
`;
const BottomTitle = styled.h1`
  margin: 20px 0;
  max-width: 80vw;
  text-align: center;
`;
const BottomDesc = styled.div`
  max-width: 80vw;
  text-align: center;
`;
const Table = styled.div`
  width: 100%;
`;
const PremiumText = styled.div`
  margin: 15px 0;
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  height: 20px;

  p {
    font-size: 15px;
    position: absolute;
    right: 15px;
  }
`;
const Columns = styled.div`
  margin: 10px;
`;
const Column = styled.div`
  width: 100%;
  border-bottom: 2px solid grey;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;
const ColumnLeft = styled.div`
  display: flex;
`;
const Flag = styled.div`
  margin-right: 10px;

  img {
    width: 24px;
    height: 24px;
  }
`;
const Country = styled.div``;
const ColumnRight = styled.div`
  margin-right: 35px;
`;
const Button = styled.div`
  width: fit-content;
  border: 2px solid black;
  padding: 10px 24px;
  border-radius: 32px;
  color: black;
  font-size: 18px;
  font-weight: 600;
  transition: transform 0.3s linear;
  margin-top: 40px;

  span:first-child {
    margin-right: 5px;
  }

  :hover {
    transform: translateY(-5px);
    cursor: pointer;
  }
`;

const Pricing = () => {
  const cardObjs = [
    {
      disc: "22",
      month: "1 month",
      regularly: "Regularly $8.99",
      price: "$6.99",
      frequency: "per month",
      desc: "Billed <span>$8.99</span> $6.99 Per Month 30 Day Money Back Guarantee",
      diff: false,
    },
    {
      disc: "60",
      month: "12 months",
      regularly: "Regularly $7.50",
      price: "$2.99",
      frequency: "",
      desc: "Billed <span>$89.99</span> $35.88 For 12 Months 30 Day Money Back Guarantee",
      diff: true,
    },
    {
      disc: "50",
      month: "6 months",
      regularly: "Regularly $9.98",
      price: "$4.99",
      frequency: "per month",
      desc: "Billed <span>$59.89</span> $29.95 For 6 Months 30 Day Money Back Guarantee",
      diff: false,
    },
  ];

  const gridObjs = [
    {
      icon: <FontAwesomeIcon icon={faMapMarkerAlt} />,
      title: "More Than 100 Server Locations",
      desc: "Scale up to enjoy access to our entire network.",
    },
    {
      icon: <FontAwesomeIcon icon={faTachometerAlt} />,
      title: "Confidential and Safe",
      desc: "Our encryption technology hides your browsing and protects you online.",
    },
    {
      icon: <FontAwesomeIcon icon={faShieldAlt} />,
      title: "No Caps",
      desc: "Access unlimited content without annoying delays or limits.",
    },
    {
      icon: <FontAwesomeIcon icon={faDesktop} />,
      title: "No Limits",
      desc: "Download as much as you need, whenever you like.",
    },
    {
      icon: <FontAwesomeIcon icon={faStopwatch} />,
      title: "No Waiting",
      desc: "Stream video instantly thanks to super server speed.",
    },
    {
      icon: <FontAwesomeIcon icon={faEyeSlash} />,
      title: "Completely Anonymous",
      desc: "We don't keep tabs on your online activity, so your browsing remains anonymous.",
    },
  ];

  const countriesArr = [
    {
      name: "US Central",
      flag: "https://ultravpn.com/assets/us.png",
    },
    {
      name: "France",
      flag: "https://ultravpn.com/assets/fr.png",
    },
    {
      name: "Hong Kong",
      flag: "https://ultravpn.com/assets/hk.png",
    },
    {
      name: "US East",
      flag: "https://ultravpn.com/assets/us.png",
    },
    {
      name: "Switzerland",
      flag: "https://ultravpn.com/assets/ch.png",
    },
    {
      name: "Norway",
      flag: "https://ultravpn.com/assets/no.png",
    },
    {
      name: "Germany",
      flag: "https://ultravpn.com/assets/de.png",
    },
    {
      name: "United Kingdom",
      flag: "https://ultravpn.com/assets/gb.png",
    },
  ];

  return (
    <Container>
      <NavbarNoImg
        img={"https://ultravpn.com/assets/hero-lightspeed.png"}
        title={"Versatile, Affordable Plans"}
        desc={"Try UltraVPN for a month without any risk."}
      />
      <Wrapper>
        <Top>
          {cardObjs.map((item) => (
            <Card
              disc={item.disc}
              month={item.month}
              regularly={item.regularly}
              price={item.price}
              frequency={item.frequency}
              desc={item.desc}
              diff={item.diff}
            />
          ))}
        </Top>
        <Middle>
          <MiddleWrapper>
            <MiddleIcon>
              <FontAwesomeIcon icon={faLock} />
            </MiddleIcon>
            <MiddleTitle>Premium VPN - For Serious Internet Users</MiddleTitle>
            <MiddleDesc>
              Connect to any of our global servers for an unrestricted internet.
            </MiddleDesc>
            <MiddleBlock>
              {gridObjs.map((item) => (
                <Item>
                  <i>{item.icon}</i>
                  <BlockText>
                    <BlockTitle>{item.title}</BlockTitle>
                    <BlockDesc>{item.desc}</BlockDesc>
                  </BlockText>
                </Item>
              ))}
            </MiddleBlock>
          </MiddleWrapper>
        </Middle>
        <Bottom>
          <BottomBlock>
            <BottomIcon>
              <FontAwesomeIcon icon={faMapMarkerAlt} />
            </BottomIcon>
            <BottomTitle>100+ Server Locations Worldwide</BottomTitle>
            <BottomDesc>
              Connect to any of our global servers for an unrestricted internet.
            </BottomDesc>
            <Table>
              <Columns>
                <PremiumText>
                  <p>Premium</p>
                </PremiumText>
                {countriesArr.map((item) => (
                  <Column>
                    <ColumnLeft>
                      <Flag>
                        <img src={item.flag} alt="" />
                      </Flag>
                      <Country>{item.name}</Country>
                    </ColumnLeft>
                    <ColumnRight>
                      <FontAwesomeIcon icon={faCheck} />
                    </ColumnRight>
                  </Column>
                ))}
              </Columns>
            </Table>
          </BottomBlock>
        </Bottom>
        <Button style={{ backgroundColor: "#ff8600", border: "none" }}>
          View More Locations
        </Button>
      </Wrapper>
    </Container>
  );
};

export default Pricing;
