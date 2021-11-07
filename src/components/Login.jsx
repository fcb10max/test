import {
  faArrowRight,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-image: url("https://ultravpn.com/assets/hero-wired-globe.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Logo = styled.div`
  height: 34px;
  margin: 34px auto;
  color: white;
  cursor: pointer;
`;
const MainBlock = styled.div`
  margin: 88px 0;
  max-width: 450px;
  min-height: 550px;
  width: 100vw;
  height: auto;
  background-color: white;
  padding: 24px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 16px;
  position: relative;
`;
const Top = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 20px;
`;
const Desc = styled.p`
  font-size: 16px;
  color: gray;
  margin-bottom: 40px;
`;
const InputName = styled.div`
  align-self: flex-start;
  margin-bottom: 15px;
  color: gray;
`;
const LoginInput = styled.div`
  width: 90%;
  display: flex;
  justify-content: flex-start;
  border: 1px solid gray;
  padding: 5px 10px;
  border-radius: 5px;
  margin-bottom: 25px;

  input {
    width: 100%;
    border: none;
    background-color: transparent;

    :focus {
      outline: none;
    }
  }
`;
const PasswordInput = styled.div`
  width: 90%;
  border: 1px solid gray;
  display: flex;
  padding: 5px 10px;
  border-radius: 5px;

  input {
    width: 90%;
    border: none;

    :focus {
      outline: none;
    }
  }
`;
const Icon = styled.div`
  width: 10%;
  cursor: pointer;
`;
const Button = styled.div`
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
const Links = styled.div`
  a {
    text-decoration: none;
    color: default;
    :hover {
      text-decoration: underline;
    }
    :visited {
      color: default;
    }
  }
`;
const BottomBlock = styled.div`
  height: 90px;
  width: 100%;
  background-color: rgba(255, 0, 0, 0.15);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  p {
    padding: 20px;
    text-align: center;
    font-size: 14px;
  }
`;

const Login = () => {

  window.scrollTo(0,0);

  const [passType, setPassType] = useState("password");
  const [eyeType, setEyeType] = useState(<FontAwesomeIcon icon={faEyeSlash} />);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = (e) => {
    if (passType === "password") {
      setPassType("text");
      setEyeType(<FontAwesomeIcon icon={faEye} />);
    } else if (passType === "text") {
      setPassType("password");
      setEyeType(<FontAwesomeIcon icon={faEyeSlash} />);
    }
  };

  return (
    <Container>
      <Link to="/" style={{ textDecoration: "none" }}>
        <Logo>Logo</Logo>
      </Link>
      <MainBlock>
        <Top>
          <Title>Welcome Back!</Title>
          <Desc>Log in to your account below</Desc>
          <InputName>Email address</InputName>
          <LoginInput>
            <input
              type="email"
              onChange={(e) => setEmail(e.currentTarget.value)}
              value={email}
            />
          </LoginInput>
          <InputName>Password</InputName>
          <PasswordInput>
            <input
              type={passType}
              onChange={(e) => setPassword(e.currentTarget.value)}
              value={password}
            />
            <Icon onClick={(e) => handleClick(e)}>{eyeType}</Icon>
          </PasswordInput>
          <Button>
            <span>Log in</span>
            <span>
              <FontAwesomeIcon icon={faArrowRight} />
            </span>
          </Button>
          <Links>
            <a href="">Forgot Password?</a> | <a href="">Create an Account</a>
          </Links>
        </Top>
        <BottomBlock>
          <p>
            <strong>Having Trouble Logging In?</strong> If you signed up for
            UltraVPN prior to 3 November 2020, please visit
            &nbsplogin.ultravpn.com to access your dashboard.
          </p>
        </BottomBlock>
      </MainBlock>
    </Container>
  );
};

export default Login;
