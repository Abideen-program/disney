import React from "react";
import styled from "styled-components";

const Login = () => {
  return (
    <Container>
      <Content>
        login
        <BgImage />
      </Content>
    </Container>
  );
};

const Container = styled.section`
  overflow: hidden;
  width: 100%;
  height: 100vh;
  border: 1px solid blue;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  border: 1px solid red;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 40px;
  position: relative;
`;

const BgImage = styled.div`
background-image: url('/images/login-background.jpg');
height: 100%;
background-position: top;
background-repeat: no-repeat
background-size: cover;
position: absolute;
top: 0;
left: 0;
right: 0;
z-index: -1
`;

export default Login;
