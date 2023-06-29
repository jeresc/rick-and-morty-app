import { useState } from "react";
import LogIn from "../components/LogIn";
import SignUp from "../components/SignUp";
import { styled } from "styled-components";

const FormContainer = styled.section`
  width: 100%;
  height: 100%;
`;

const TestContainer = styled.p`
  position: absolute;
  left: 15px;
  bottom: 15px;
  color: #444;
  font-size: 1.6rem;
  display: none;

  @media (min-width: 640px) {
    display: block;
  }
`;

export default function Form({ logIn, signUp }) {
  const [isNewUser, setIsNewUser] = useState(true);

  const toggleForm = () => {
    isNewUser ? setIsNewUser(false) : setIsNewUser(true);
  };

  return (
    <FormContainer>
      {isNewUser ? (
        <>
          <LogIn logIn={logIn} toggleForm={toggleForm} />
          <TestContainer>
            test@test.com
            <br />
            test01
          </TestContainer>
        </>
      ) : (
        <SignUp signUp={signUp} toggleForm={toggleForm} />
      )}
    </FormContainer>
  );
}
