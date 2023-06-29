import { styled } from "styled-components";
import { useState } from "react";
import validate from "../validate";

import logo from "../assets/img/r&m_logo.png";

const LogInContainer = styled.section`
  color: #fff;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  border-radius: 12px;
  padding: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 2.9rem;
  line-height: 4rem;
  text-align: center;
  background: linear-gradient(144deg, #f3f520, #a8d102 50%, #00ddeb);
  filter: drop-shadow(0 0px 30px rgba(168, 209, 2, 0.2));
  color: #fff;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-box-decoration-break: clone;
  margin: 22px;
`;

const ImageContainer = styled.div`
  width: 100px;
  height: 100px;
  margin: 16px auto;
  justify-self: center;
  filter: drop-shadow(0 0px 30px rgba(168, 209, 2, 0.3));

  img {
    width: 100%;
    height: 100%;
  }
`;

const FormContainer = styled.form`
  font-size: 2rem;
  width: 340px;
  height: fit-content;
  padding: 24px;
  border-radius: 30px;
  /* box-shadow: 5px 5px 30px rgba(4, 4, 4, 0.4),
    -5px -5px 30px rgba(60, 60, 60, 0.4); */

  @media (min-width: 960px) {
    width: 430px;
    padding: 30px;
  }
`;

const InputGroup = styled.div`
  margin-top: 4px;
  font-size: 1.4rem;
  line-height: 2rem;
  display: flex;
  flex-direction: column;
  gap: 34px;
`;

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  position: relative;
  margin: 4px 0;

  label {
    color: #eee;
    position: absolute;
    top: 0;
    left: 16px;
    padding: 12px 0;
    pointer-events: none;
    transition: 0.3s;
  }
  input {
    width: 100%;
    border-radius: 8px;
    border: 1px solid #333;
    outline: 0;
    background-color: #212121;
    padding: 10px 16px;
    line-height: 2.4rem;
    color: rgba(243, 244, 246, 1);
  }

  input:focus {
    border-color: #a8d102;
  }

  input:focus ~ label,
  input:not([value=""]) ~ label {
    top: -36px;
    left: 4px;
    color: #bdb8b8;
    font-size: 1.3rem;
  }

  input:not([value=""]) ~ label[for="email"] {
    ${(props) =>
      props.emailerrors
        ? `color: #bdb8b8;`
        : `color: #a8d102;
  filter: drop-shadow(0 0px 30px rgba(168, 209, 2, 0.3));`}
  }

  input:not([value=""]) ~ label[for="password"] {
    ${(props) =>
      props.passworderrors
        ? `color: #bdb8b8;`
        : `color: #a8d102;
  filter: drop-shadow(0 0px 30px rgba(168, 209, 2, 0.3));`}
  }

  p {
    text-align: center;
    color: rgba(255, 255, 255, 0.8);
    border-radius: 2px 2px 12px 12px;
    padding: 8px;
    width: fit-content;
    background-color: rgba(255, 0, 0, 0.1);
  }
`;

const Button = styled.button`
  display: block;
  width: 100%;
  padding: 16px;
  text-align: center;
  color: #fff;
  border: none;
  border-radius: 10px;
  font-weight: 600;
  margin-top: 26px;
  cursor: pointer;
  background: linear-gradient(144deg, #f3f520, #a8d102 50%, #00ddeb);
  box-shadow: 5px 5px 20px rgba(0, 221, 235, 0.3),
    -5px -5px 20px rgba(243, 245, 32, 0.2);
  transition: all 0.5s ease;

  &:active {
    transform: translateY(3px) scale(0.95);
  }
`;

const Divider = styled.div`
  display: flex;
  align-items: center;
  padding-top: 1.6rem;

  .line {
    height: 1px;
    flex: 1 1 0%;
    background-color: #444;
  }
  .message {
    padding: 12px 16px;
    font-size: 1.6rem;
    line-height: 2rem;
    color: #aaa;
  }
`;

const SignUp = styled.p`
  text-align: center;
  font-size: 1.6rem;
  line-height: 16px;
  color: #aaa;
  padding: 12px 0px;

  a {
    color: rgba(234, 244, 246);
    text-decoration: none;
    font-size: 1.6rem;
  }

  a:hover {
    text-decoration: underline #a8d102;
  }
`;

export default function LogIn({ logIn, toggleForm }) {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });

    setErrors(
      validate({
        ...userData,
        [event.target.name]: event.target.value,
      })
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    logIn(userData);
  };

  return (
    <LogInContainer>
      <FormContainer>
        <ImageContainer>
          <img src={logo} alt="" />
        </ImageContainer>
        <Title>Log In</Title>
        <InputGroup>
          <InputBox emailerrors={errors.email}>
            <input
              type="email"
              name="email"
              value={userData.email}
              onChange={handleChange}
            />
            <label htmlFor="email">Email</label>
            {errors.email && <p>{errors.email}</p>}
          </InputBox>
          <InputBox passworderrors={errors.password}>
            <input
              type="text"
              name="password"
              value={userData.password}
              onChange={handleChange}
            />
            <label htmlFor="password">Password</label>
            {errors.password && <p>{errors.password}</p>}
          </InputBox>
        </InputGroup>
        <Button onClick={handleSubmit}>Log In</Button>
        <Divider>
          <div className="line"></div>
          <p className="message">or</p>
          <div className="line"></div>
        </Divider>
        <SignUp>
          Don't have an account?{" "}
          <a href="#" onClick={toggleForm}>
            Sign Up
          </a>
        </SignUp>
      </FormContainer>
    </LogInContainer>
  );
}
