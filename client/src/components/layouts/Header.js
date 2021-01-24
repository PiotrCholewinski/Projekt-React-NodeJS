import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <MainContainer>
      <center>
        <h1>Witaj na naszym blogu</h1>
      </center>
    </MainContainer>
  );
};

export default Header;

//Main Container
const MainContainer = styled.header`
  background: url(../../images/header-background-fiolet.jpg) no-repeat
    center/cover;
  height: 25rem;

  h1 {
    transform: translate(-50%, -50%);
    color: #fff0f5;
    font-weight: 200;
    font-size: 80px;
    font-family: "Dancing Script", cursive !important;
    position: absolute;
    top: 25%;
    left: 50%;
  }
`;
