import styled from "styled-components";
import PaymentBlock from "./PaymentComponents/PaymentBlock";
import Card from "./PricingComponents/Card";

const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Header = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  background-color: black;
`;
const Logo = styled.div`
  max-width: 1440px;
  width: 100vw;
  color: white;
  padding: 20px;
`;
const Wrapper = styled.div`
  max-width: 1440px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px 0;
  position: relative;
`;
const Title = styled.h1`
  text-align: center;
  max-width: 90vw;
`;
const Desc = styled.h2`
  text-align: center;
  max-width: 90vw;
`;
const Disc = styled.div`
  position: absolute;
  right: 0px;
  top: -40px;
  background-color: #3cb371;
  height: 128px;
  width: 122px;

  .wrapper {
    position: relative;
  }
  .triangle {
    position: absolute;
    top: 28px;
    left: 0;
    width: 0;
    height: 0;
    background-color: transparent;
    border-bottom: 27px solid white;
    border-top: 74px solid transparent;
    border-left: 63px solid transparent;
    border-right: 59px solid transparent;
  }
  h1 {
    text-align: center;
    color: white;
  }

  @media (max-width: 1000px) {
    display: none;
  }
`;
const Step = styled.div`
  display: flex;
  align-self: flex-start;
  margin: 20px 0;
  margin-left: 100px;
  align-items: center;
  font-size: 24px;

  @media (max-width: 1200px) {
    margin-left: 20px;
  }
  span {
    margin-right: 40px;
    border-radius: 50%;
    border: 1px solid black;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const Cards = styled.div`
  display: flex;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;
const Footer = styled.div`
  max-width: 1200px;
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  
  a, span {
    width: 200px;
    margin: 5px 10px;
  }
`;

const Payment = () => {
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

  window.scrollTo(0,0)

  return (
    <Container>
      <Header>
        <Logo>Logo</Logo>
      </Header>
      <Wrapper>
        <Title>Special Deal: 6 Months FREE Access!</Title>
        <Desc>
          Get 12 Months of Premium VPN for the Price of 6 (6 months FREE)
        </Desc>
        <Disc>
          <div className="wrapper">
            <div className="triangle"></div>
            <h1>60% OFF</h1>
          </div>
        </Disc>
        <Step>
          <span>1</span>
          <p>Select a plan that works for you</p>
        </Step>
        <Cards>
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
        </Cards>
        <Step>
          <span>2</span>
          <p>Select a payment method</p>
        </Step>
        <PaymentBlock/>
      </Wrapper>
      <Footer>
        <a href="#">Terms of Use</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Refund Policy</a>
        <a href="#">Auto Renew Policy</a>
        <a href="#">Money Back Guarantee</a>
        <span>© UltraVPN 2021</span>
      </Footer>
    </Container>
  );
};

export default Payment;
