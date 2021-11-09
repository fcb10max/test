import {
  faArrowDown,
  faArrowUp,
  faCheck,
  faLongArrowAltRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import styled from "styled-components";

const Container = styled.div``;
const Wrapper = styled.div`
  display: flex;
  max-width: 100%;
  width: 90vw;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;
const Left = styled.div`
  flex: 2;
  margin: 20px;
`;
const Top = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const FormBlock = styled.div`
  border: 2px solid black;
  padding: 20px 40px;
  border-radius: 10px;
  margin: 20px 0;
`;
const Cards = styled.div`
  display: flex;
`;
const FormWrapper = styled.div`
  display: ${(props) => (props.active ? "flex" : "none")};
  flex-direction: column;
`;
const FormDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;
const FormLeft = styled.div`
  flex: 1;
  display: flex;
  margin-right: 20px;
  div {
    flex: 1;
    margin-right: 20px;
  }
  @media (max-width: 1000px) {
    flex-direction: column;
    margin: 0;
    div {
      margin: 5px;
    }
  }
`;
const FormTitle = styled.div`
  margin: 10px 0;
  cursor: pointer;
  height: 30px;
`;
const FormInput = styled.div`
  input {
    width: 100%;
    padding: 10px;
    margin: 5px 0;

    @media (max-width: 1000px) {
      padding: 5px;
    }
  }
`;
const FormRight = styled.div`
  flex: 1;
  display: flex;
  margin: 0;
  div {
    flex: 1;
    margin-right: 20px;
  }
  @media (max-width: 1000px) {
    flex-direction: column;
    div {
      margin: 5px;
    }
  }
`;
const PurchaseBlock = styled.div`
  display: flex;
  margin: 20px 0;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;
const PurchaseText = styled.div`
  flex: 2;
`;
const PurchaseBtn = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
`;
const Button = styled.div`
  padding: 10px 24px;
  border-radius: 32px;
  background-color: #3cb371;
  color: white;
  font-size: 18px;
  font-weight: 600;
  transition: transform 0.3s linear;
  margin: 40px 0;
  width: 90%;
  text-align: center;

  span:first-child {
    margin-right: 5px;
  }

  :hover {
    transform: translateY(-5px);
    cursor: pointer;
  }
`;
const Right = styled.div`
  flex: 1;
  margin: 20px;
  display: flex;
  justify-content: center;
  width: 100%;
  height: fit-content;
`;
const RBlock = styled.div`
  max-width: 90%;
  width: 20vw;
  border: 2px solid black;
  padding: 20px 40px;
  border-radius: 10px;
  margin: 20px 0;

  span {
    display: flex;
    align-items: center;
    margin: 5px 0;

    span {
      color: #3cb371;
      margin-right: 10px;
    }
  }
  @media (max-width: 1000px) {
    width: 80vw;
  }
`;

const PaymentBlock = () => {
  const [CardsActive, setCardsActive] = useState(true);
  const [PaypalActive, setPaypalActive] = useState(false);

  const svgArr = [
    <svg
      class="ult-payment-accordion-badge-cc-logo"
      fill="none"
      height="20"
      viewBox="0 0 29 20"
      width="29"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect fill="#26337A" height="19.837" rx="1.32" width="29" y=".082"></rect>
      <path
        clip-rule="evenodd"
        d="M11.06 13.156l1.014-6.306h1.622l-1.015 6.306H11.06zM18.564 7.005c-.32-.127-.825-.265-1.453-.265-1.604 0-2.733.856-2.742 2.082-.01.906.805 1.412 1.42 1.713.632.309.845.506.842.782-.004.423-.504.616-.97.616-.65 0-.995-.095-1.528-.33l-.209-.1-.227 1.41c.379.176 1.08.329 1.807.337 1.704 0 2.812-.846 2.825-2.154.006-.719-.427-1.264-1.363-1.714-.566-.292-.914-.486-.91-.782 0-.262.294-.542.929-.542.53-.009.914.114 1.214.242l.145.072.22-1.367M20.724 10.92c.134-.362.646-1.762.646-1.762-.01.016.133-.365.215-.602l.11.544.375 1.82h-1.346zm2-4.063h-1.253c-.389 0-.68.111-.85.522l-2.409 5.78h1.704l.34-.949 2.078.004c.049.22.198.944.198.944h1.505l-1.312-6.301zM9.698 6.855l-1.587 4.3-.17-.874c-.296-1.007-1.217-2.099-2.247-2.645l1.452 5.515 1.717-.001 2.554-6.295H9.698"
        fill="#FFFFFE"
        fill-rule="evenodd"
      ></path>
      <path
        clip-rule="evenodd"
        d="M6.637 6.851H4.022L4 6.981c2.035.523 3.382 1.784 3.94 3.3l-.568-2.898c-.098-.4-.383-.518-.735-.532"
        fill="#EC982D"
        fill-rule="evenodd"
      ></path>
    </svg>,
    <svg
      class="ult-payment-accordion-badge-cc-logo"
      fill="none"
      height="20"
      viewBox="0 0 29 20"
      width="29"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        fill="#fff"
        height="19.5"
        rx="1.75"
        stroke="#DFDFDF"
        stroke-width=".5"
        width="28.5"
        x=".25"
        y=".25"
      ></rect>
      <path d="M2.5 2H26.389V17.982H2.5z" fill="#fff" opacity=".01"></path>
      <path d="M11.294 4.784H17.596V15.195H11.294z" fill="#FF5F00"></path>
      <path
        d="M11.944 9.99c-.002-2.03.92-3.95 2.5-5.204C11.76 2.653 7.905 2.964 5.59 5.5c-2.315 2.536-2.315 6.447 0 8.983 2.316 2.537 6.17 2.848 8.854.714-1.58-1.254-2.503-3.174-2.5-5.206z"
        fill="#EB001B"
      ></path>
      <path
        d="M25.035 9.99c0 2.536-1.431 4.848-3.685 5.956-2.255 1.107-4.936.816-6.906-.75 1.579-1.256 2.5-3.175 2.5-5.206 0-2.031-.921-3.95-2.5-5.206 1.97-1.566 4.652-1.858 6.906-.75 2.254 1.108 3.685 3.42 3.685 5.955v.002z"
        fill="#F79E1B"
      ></path>
    </svg>,
    <svg
      class="ult-payment-accordion-badge-cc-logo"
      fill="none"
      height="20"
      viewBox="0 0 29 20"
      width="29"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        fill="#fff"
        height="19.333"
        rx="1.667"
        stroke="#E6772F"
        stroke-width=".667"
        width="28.333"
        x=".333"
        y=".333"
      ></rect>
      <path
        clip-rule="evenodd"
        d="M6.357 19.986h20.54c1.104 0 2-.896 2-2v-6.47s-7.96 5.851-22.54 8.47z"
        fill="#E6772F"
        fill-rule="evenodd"
      ></path>
      <mask
        height="9"
        id="oy38gd93na"
        maskUnits="userSpaceOnUse"
        width="23"
        x="6"
        y="11"
      >
        <path
          clip-rule="evenodd"
          d="M6.357 19.986h20.54c1.104 0 2-.896 2-2v-6.47s-7.96 5.851-22.54 8.47z"
          fill="#fff"
          fill-rule="evenodd"
        ></path>
      </mask>
      <path
        clip-rule="evenodd"
        d="M12.338 12.024c-1.123 0-1.995-.85-1.995-1.947 0-1.083.894-1.95 2.01-1.95.32 0 .584.067.907.228v.856c-.306-.297-.573-.42-.922-.42-.693 0-1.235.567-1.235 1.281 0 .756.525 1.286 1.267 1.286.335 0 .595-.115.89-.408v.857c-.334.156-.606.217-.922.217zM9.024 9.641c-.443-.16-.573-.267-.573-.469 0-.234.231-.412.55-.412.22 0 .402.087.596.3l.383-.496c-.317-.275-.696-.415-1.109-.415-.668 0-1.178.46-1.178 1.067 0 .515.237.777.928 1.025.29.1.436.167.51.213.148.094.22.229.22.385 0 .303-.243.526-.572.526-.35 0-.634-.173-.803-.498l-.475.454c.34.491.746.71 1.307.71.765 0 1.304-.505 1.304-1.225 0-.593-.25-.862-1.088-1.165zm-5.052 1.668c.476 0 .775-.09 1.009-.296.254-.223.406-.581.406-.94s-.152-.704-.406-.929c-.246-.217-.533-.3-1.01-.3h-.197v2.466h.198zm-.935-3.098h1.082c1.195 0 2.028.765 2.028 1.866 0 .55-.256 1.082-.686 1.433-.362.297-.776.432-1.348.432H3.037v-3.73zm4.184 0h-.734v3.73h.734v-3.73zm12.008 2.505L18.22 8.21h-.803l1.602 3.825h.395l1.632-3.825h-.797l-1.021 2.505zm4.242 1.226h-2.09v-3.73h2.09v.631h-1.352v.828h1.3v.632h-1.3v1.006h1.352v.633zm2.916-2.63c0-.699-.485-1.1-1.336-1.1h-1.094v3.73h.739v-1.5h.095l1.018 1.5h.907l-1.189-1.573c.556-.112.86-.486.86-1.057zm-1.691.615h.214c.472 0 .718-.201.718-.574 0-.364-.246-.555-.706-.555h-.226v1.129z"
        fill="#1A1919"
        fill-rule="evenodd"
      ></path>
      <path
        clip-rule="evenodd"
        d="M17.522 10.086c0 1.074-.881 1.944-1.97 1.944-1.087 0-1.968-.87-1.968-1.944 0-1.074.88-1.945 1.969-1.945 1.088 0 1.97.871 1.97 1.945"
        fill="#E6772F"
        fill-rule="evenodd"
      ></path>
    </svg>,
    <svg
      class="ult-payment-accordion-badge-cc-logo"
      fill="none"
      height="20"
      viewBox="0 0 29 20"
      width="29"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect fill="#0A62C3" height="20" rx="2" width="29"></rect>
      <path
        clip-rule="evenodd"
        d="M26.922 8.872h-1.155L24.222 6.24l.002 2.63h-1.66l-.317-.782H20.55l-.304.783h-.954c-.399 0-.9-.091-1.182-.387-.29-.3-.436-.702-.436-1.341 0-.522.09-.996.439-1.371.265-.28.677-.411 1.238-.411h.788v.752h-.77c-.299 0-.47.047-.632.21-.135.147-.231.426-.231.796 0 .376.07.644.225.823.123.138.352.18.566.18h.367l1.149-2.761h1.22l1.38 3.32v-3.32h1.243l1.433 2.444V5.362h.833v3.51zm-10.478 0h.831v-3.51h-.831v3.51zm-.646-1.33c.115.171.137.33.137.641v.689h-.822l-.003-.44c0-.21.02-.515-.13-.683-.121-.125-.299-.15-.595-.15h-.876v1.273h-.813V5.363h1.876c.414 0 .722.014.986.17.259.156.412.384.412.778 0 .557-.363.847-.573.935.178.07.33.191.4.295zM12.13 6.095h-1.905v.63h1.858v.721l-1.858-.001v.701h1.905v.725H9.408V5.363h2.723v.733zm-3.33 2.776h-.835L7.96 6.127 6.78 8.872h-.715l-1.189-2.75v2.75H3.221l-.313-.781H1.21l-.313.78H.01l1.458-3.508H2.68l1.385 3.325V5.363h1.333l1.065 2.383.98-2.383H8.8v3.509zm16.583-4.205v.58l-.316-.58h-2.324v.58l-.29-.58h-3.139c-.525 0-.99.075-1.362.286v-.286H15.79v.286c-.24-.218-.564-.286-.922-.286H6.956l-.534 1.265-.542-1.265H3.388v.58l-.276-.58H.986L0 6.992v2.571h1.394l.314-.782h.702l.312.782h2.741v-.598l.246.6h1.42l.245-.606v.604h6.81l-.003-1.28h.132c.093.002.12.014.12.17v1.11h3.52v-.298c.284.157.728.298 1.307.298h1.483l.317-.782h.704l.31.782h2.855v-.742l.432.742h2.287V4.667h-2.264zm-4.54 2.691h1.123l-.564-1.397-.559 1.397zM2.615 7.36L2.056 5.96 1.501 7.36h1.114zm12.457-.892c0-.15-.065-.258-.17-.31-.097-.057-.245-.062-.388-.062h-1.005v.78h.992c.159 0 .292-.005.402-.072.106-.06.169-.182.169-.336zM29 12.15h-1.488c-.148 0-.247.007-.328.064-.085.057-.12.142-.12.253 0 .131.073.223.18.262.084.03.177.039.314.04l.44.011c.445.014.743.092.927.281.03.028.052.06.075.09v-1zm0 2.315c-.2.3-.585.45-1.108.45h-1.574v-.754h1.568c.155 0 .264-.021.33-.088.055-.052.098-.13.098-.228 0-.102-.043-.184-.1-.232-.061-.054-.146-.078-.287-.08-.765-.025-1.72.026-1.72-1.085 0-.51.314-1.045 1.168-1.045H29v-.698h-1.51c-.456 0-.786.112-1.021.288v-.288h-2.23c-.356 0-.774.092-.974.288l.001-.288H19.28v.288c-.317-.234-.85-.288-1.1-.288h-2.625v.288c-.253-.25-.808-.288-1.149-.288h-2.942l-.674.752-.63-.752H5.766v4.9h4.312l.693-.762.655.762 2.655.002v-1.154h.264c.35.005.768-.008 1.134-.17v1.322h2.192v-1.278h.106c.136 0 .148.007.148.144v1.134h6.658c.422 0 .864-.112 1.109-.314v.314h2.112c.44 0 .868-.064 1.196-.226v-.914zm-3.253-1.404c.16.17.244.385.244.745 0 .756-.46 1.109-1.28 1.109h-1.588v-.754h1.582c.156 0 .264-.021.333-.088.055-.052.096-.13.096-.228 0-.102-.043-.184-.1-.232-.062-.054-.148-.078-.29-.08-.762-.025-1.716.026-1.716-1.085 0-.51.31-1.045 1.164-1.045h1.635v.747h-1.494c-.15 0-.247.007-.328.064-.089.057-.122.142-.122.253 0 .131.076.223.178.262.085.03.177.039.316.04l.44.011c.443.014.745.092.93.281zm-7.355-.214c-.107.065-.243.071-.401.071H17v-.787h1.003c.145 0 .291.003.388.062.105.058.169.165.169.316 0 .15-.064.271-.17.338zm.492.436c.181.068.33.19.4.295.114.172.134.332.135.642v.695h-.817v-.44c0-.212.019-.524-.133-.686-.118-.128-.3-.157-.596-.157H17v1.283h-.817v-3.512h1.879c.415 0 .715.018.982.167.256.159.418.38.418.78 0 .558-.363.845-.578.933zm1.03-1.88h2.722v.728h-1.909v.637h1.862v.716h-1.862v.698l1.91.004v.729h-2.723v-3.512zm-5.497 1.62H13.36v-.892h1.065c.295 0 .498.121.498.43 0 .304-.194.461-.506.461zm-1.868 1.573l-1.25-1.43 1.25-1.384v2.814zm-3.232-.414H7.314v-.698h1.79v-.716h-1.79v-.637h2.043l.892 1.021-.932 1.03zm6.48-1.621c0 .973-.705 1.176-1.419 1.176H13.36v1.178H11.78l-1.005-1.162-1.043 1.162H6.504v-3.512h3.278l1.002 1.15 1.036-1.15h2.605c.647 0 1.372.186 1.372 1.158z"
        fill="#fff"
        fill-rule="evenodd"
      ></path>
    </svg>,
  ];

  return (
    <Container>
      <Wrapper>
        <Left>
          <FormBlock>
            <Top>
              <FormTitle onClick={() => setCardsActive(!CardsActive)}>
                {CardsActive ? (
                  <FontAwesomeIcon icon={faArrowUp} />
                ) : (
                  <FontAwesomeIcon icon={faArrowDown} />
                )}{" "}
                Credit Card
              </FormTitle>
              <Cards>
                {svgArr.map((item) => (
                  <span>{item}</span>
                ))}
              </Cards>
            </Top>
            <FormWrapper active={CardsActive}>
              <FormDiv>
                <FormLeft>
                  <div>
                    <FormTitle>Name on card</FormTitle>
                    <FormInput>
                      <input type="text" required />
                    </FormInput>
                  </div>
                </FormLeft>
                <FormRight>
                  <div>
                    <FormTitle>Street address</FormTitle>
                    <FormInput>
                      <input type="text" required />
                    </FormInput>
                  </div>
                </FormRight>
              </FormDiv>
              <FormDiv>
                <FormLeft>
                  <div>
                    <FormTitle>Card number</FormTitle>
                    <FormInput>
                      <input type="text" required />
                    </FormInput>
                  </div>
                </FormLeft>
                <FormRight>
                  <div>
                    <FormTitle>Expiration</FormTitle>
                    <FormInput>
                      <input type="text" required />
                    </FormInput>
                  </div>
                  <div>
                    <FormTitle>CVV</FormTitle>
                    <FormInput>
                      <input type="text" required />
                    </FormInput>
                  </div>
                  <div>
                    <FormTitle>Postal Code</FormTitle>
                    <FormInput>
                      <input type="text" required />
                    </FormInput>
                  </div>
                </FormRight>
              </FormDiv>
              <FormDiv>
                <FormLeft>
                  <div>
                    <FormTitle>Country</FormTitle>
                    <FormInput>
                      <input type="text" required />
                    </FormInput>
                  </div>
                  <div>
                    <FormTitle>State</FormTitle>
                    <FormInput>
                      <input type="text" required />
                    </FormInput>
                  </div>
                </FormLeft>
                <FormRight>
                  <div>
                    <FormTitle>Email Address</FormTitle>
                    <FormInput>
                      <input type="text" required />
                    </FormInput>
                  </div>
                </FormRight>
              </FormDiv>
              <FormDiv>
                <PurchaseBlock>
                  <PurchaseText>
                    <h2>Total Today: £35.88 (Unlimited VPN)</h2>
                    <h3>60% Discount - You Save £54.11 today</h3>
                    <h4>
                      Just £35.88 today for 12 Months VPN service then regular
                      rate
                    </h4>
                  </PurchaseText>
                  <PurchaseBtn>
                    <Button>
                      <span>Register Now</span>
                      <span>
                        <FontAwesomeIcon icon={faLongArrowAltRight} />
                      </span>
                    </Button>
                  </PurchaseBtn>
                </PurchaseBlock>
              </FormDiv>
              <FormDiv>
                <p style={{ fontSize: "14px" }}>
                  By submitting this order, you agree to our Terms of Service &
                  Privacy Policies. The 60% discount is an introductory offer
                  and applies to the initial term. UltraVPN will automatically
                  renew at the regular rate until canceled. This charge will
                  show on your bank statement as BLS*UltraVPN.
                </p>
              </FormDiv>
            </FormWrapper>
          </FormBlock>
          <FormBlock>
            <Top>
              <FormTitle onClick={() => setPaypalActive(!PaypalActive)}>
                {PaypalActive ? (
                  <FontAwesomeIcon icon={faArrowUp} />
                ) : (
                  <FontAwesomeIcon icon={faArrowDown} />
                )}{" "}
                Paypal
              </FormTitle>
              <Cards>
                <svg
                  fill="none"
                  height="24"
                  viewBox="0 0 94 24"
                  width="94"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M72.596 6.26h-5.068c-.298 0-.596.299-.745.597l-2.087 13.118c0 .298.149.447.447.447h2.683c.298 0 .447-.149.447-.447l.597-3.727c0-.298.298-.596.745-.596h1.64c3.428 0 5.366-1.64 5.814-4.92.298-1.34 0-2.533-.597-3.279-.894-.745-2.236-1.192-3.876-1.192zm.597 4.92c-.298 1.789-1.64 1.789-2.982 1.789h-.894l.596-3.429c0-.149.15-.298.447-.298h.299c.894 0 1.788 0 2.236.596.298.15.298.597.298 1.342z"
                    fill="#139AD6"
                  ></path>
                  <path
                    d="M36.076 6.26h-5.068c-.299 0-.597.299-.746.597l-2.087 13.118c0 .298.15.447.447.447h2.386c.298 0 .596-.298.745-.596l.596-3.578c0-.298.298-.596.745-.596h1.64c3.429 0 5.367-1.64 5.814-4.92.298-1.34 0-2.533-.596-3.279-.895-.745-2.087-1.192-3.876-1.192zm.596 4.92c-.298 1.789-1.64 1.789-2.981 1.789h-.745l.596-3.429c0-.149.149-.298.447-.298h.298c.895 0 1.789 0 2.236.596.15.15.298.597.15 1.342zM51.428 11.031h-2.385c-.15 0-.447.15-.447.298l-.15.746-.148-.298c-.597-.746-1.64-1.044-2.833-1.044-2.683 0-5.068 2.087-5.515 4.92-.298 1.49.149 2.832.894 3.726.746.894 1.79 1.192 3.13 1.192 2.237 0 3.43-1.341 3.43-1.341l-.15.745c0 .298.15.447.447.447h2.236c.299 0 .597-.298.746-.596l1.341-8.348c-.149-.149-.447-.447-.596-.447zM48 15.801c-.299 1.342-1.342 2.385-2.833 2.385-.745 0-1.341-.298-1.64-.596-.298-.447-.447-1.043-.447-1.789.15-1.341 1.342-2.385 2.684-2.385.745 0 1.192.298 1.64.596.446.448.595 1.193.595 1.79z"
                    fill="#263B80"
                  ></path>
                  <path
                    d="M87.8 11.031h-2.384c-.15 0-.448.15-.448.298l-.149.745-.149-.298c-.596-.745-1.64-1.043-2.832-1.043-2.683 0-5.068 2.087-5.516 4.92-.298 1.49.15 2.832.895 3.726.745.894 1.789 1.192 3.13 1.192 2.236 0 3.429-1.341 3.429-1.341l-.15.745c0 .298.15.447.448.447h2.236c.298 0 .596-.298.745-.596l1.342-8.348c-.15-.149-.298-.447-.596-.447zm-3.428 4.77c-.298 1.342-1.341 2.385-2.832 2.385-.746 0-1.342-.298-1.64-.596-.298-.447-.447-1.043-.447-1.789.149-1.341 1.341-2.385 2.683-2.385.745 0 1.193.298 1.64.596.596.448.745 1.193.596 1.79z"
                    fill="#139AD6"
                  ></path>
                  <path
                    d="M64.397 11.031h-2.534c-.299 0-.448.15-.597.298l-3.28 5.069-1.49-4.77c-.149-.299-.298-.448-.745-.448h-2.385c-.298 0-.447.298-.447.596l2.683 7.901-2.534 3.578c-.15.298 0 .745.298.745h2.385c.298 0 .447-.15.596-.298l8.199-11.777c.447-.447.149-.894-.15-.894z"
                    fill="#263B80"
                  ></path>
                  <path
                    d="M90.634 6.708l-2.087 13.416c0 .298.149.448.447.448h2.087c.298 0 .596-.299.745-.597l2.087-13.118c0-.298-.149-.447-.447-.447h-2.385c-.149-.15-.298 0-.447.298z"
                    fill="#139AD6"
                  ></path>
                  <path
                    d="M17.143 1.789C16.099.596 14.16 0 11.478 0H4.025C3.578 0 3.13.447 2.98.894L0 20.422c0 .448.298.746.596.746h4.621l1.193-7.305v.299c.149-.448.596-.895 1.043-.895H9.69c4.323 0 7.603-1.789 8.646-6.708v-.447c-.149 0-.149 0 0 0 .15-1.938-.149-3.13-1.192-4.323z"
                    fill="#263B80"
                  ></path>
                  <path
                    d="M18.187 6.112v.447c-1.043 5.068-4.323 6.708-8.646 6.708H7.305c-.447 0-.894.447-1.043.895L4.77 23.255c0 .298.15.596.596.596h3.876c.447 0 .894-.298.894-.745v-.15l.746-4.62v-.299c0-.447.447-.745.894-.745h.597c3.726 0 6.707-1.49 7.453-5.963.298-1.789.149-3.428-.746-4.472-.148-.298-.447-.596-.894-.745z"
                    fill="#139AD6"
                  ></path>
                  <path
                    d="M17.143 5.665c-.149 0-.298-.15-.447-.15-.15 0-.298 0-.447-.149-.597-.149-1.193-.149-1.938-.149H8.497c-.149 0-.298 0-.447.15-.298.148-.447.447-.447.745L6.41 13.863v.298c.15-.447.596-.894 1.044-.894H9.69c4.323 0 7.602-1.789 8.646-6.708 0-.15 0-.298.149-.447-.299-.15-.447-.298-.746-.298-.447-.15-.447-.15-.596-.15z"
                    fill="#232C65"
                  ></path>
                </svg>
              </Cards>
            </Top>
            <FormWrapper active={PaypalActive}>
              <FormDiv>
                <FormLeft>
                  <div>
                    <FormTitle>Email Address</FormTitle>
                    <FormInput>
                      <input type="text" required />
                    </FormInput>
                  </div>
                </FormLeft>
              </FormDiv>
              <FormDiv>
                <PurchaseBlock>
                  <PurchaseText>
                    <h2>Total Today: £35.88 (Unlimited VPN)</h2>
                    <h3>60% Discount - You Save £54.11 today</h3>
                    <h4>
                      Just £35.88 today for 12 Months VPN service then regular
                      rate
                    </h4>
                  </PurchaseText>
                  <PurchaseBtn>
                    <Button>
                      <span>Register Now</span>
                      <span>
                        <FontAwesomeIcon icon={faLongArrowAltRight} />
                      </span>
                    </Button>
                  </PurchaseBtn>
                </PurchaseBlock>
              </FormDiv>
              <FormDiv>
                <p style={{ fontSize: "14px" }}>
                  By submitting this order, you agree to our Terms of Service &
                  Privacy Policies. The 60% discount is an introductory offer
                  and applies to the initial term. UltraVPN will automatically
                  renew at the regular rate until canceled. This charge will
                  show on your bank statement as BLS*UltraVPN.
                </p>
              </FormDiv>
            </FormWrapper>
          </FormBlock>
        </Left>
        <Right>
          <RBlock>
            <h2>UltraVPN Benefits</h2>
            <span>
              <span>
                <FontAwesomeIcon icon={faCheck} />
              </span>{" "}
              <p>100+ secure worldwide servers</p>
            </span>
            <span>
              <span>
                <FontAwesomeIcon icon={faCheck} />
              </span>{" "}
              <p>Unlimited bandwidth</p>
            </span>
            <span>
              <span>
                <FontAwesomeIcon icon={faCheck} />
              </span>{" "}
              <p>Industry leading encryption</p>
            </span>
            <span>
              <span>
                <FontAwesomeIcon icon={faCheck} />
              </span>{" "}
              <p>24/7 technical support</p>
            </span>
            <span>
              <span>
                <FontAwesomeIcon icon={faCheck} />
              </span>{" "}
              <p>Compatible with all devices</p>
            </span>
            <span>
              <span>
                <FontAwesomeIcon icon={faCheck} />
              </span>{" "}
              <p>30-day-money-back guarantee</p>
            </span>
          </RBlock>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default PaymentBlock;
