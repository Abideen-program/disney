import React from "react";
import styled from "styled-components";

const Login = () => {
  return (
    <Container>
      <Content>Login</Content>
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
`;

export default Login;
