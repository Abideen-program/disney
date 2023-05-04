import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Viewers = () => {
  return (
    <Container>
      <Content>
        <motion.img
          whileHover={{ scale: 1.3 }}
          src="/images/viewers-disney.png"
          alt=""
        />
      </Content>

      <Content>
        <motion.img
          whileHover={{ scale: 1.3 }}
          src="/images/viewers-marvel.png"
          alt=""
        />
      </Content>

      <Content>
        <motion.img
          whileHover={{ scale: 1.3 }}
          src="/images/viewers-national.png"
          alt=""
        />
      </Content>

      <Content>
        <motion.img
          whileHover={{ scale: 1.3 }}
          src="/images/viewers-pixar.png"
          alt=""
        />
      </Content>

      <Content>
        <motion.img
          whileHover={{ scale: 1.3 }}
          src="/images/viewers-starwars.png"
          alt=""
        />
      </Content>
    </Container>
  );
};

const Container = styled.div`
  margin: 30px 0;
  padding: 30px 0 26px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 25px;
  position: relative;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const Content = styled.div`
  position: relative;
  cursor: pointer;
  overflow: hidden;
  border: 3px solid rgba(249, 249, 249, 0.1);
  border-radius: 10px;
  transition: all 0.3s ease 0s;

  &:hover {
    border: solid rgba(249, 249, 249, 0.8);
  }

  img {
    width: 100%;
    height: 100;
    display: block;
    object-fit: cover;
    z-index: 1;
    opacity: 1;
    transition: opacity 1s ease-in-out 0s;
  }
`;

export default Viewers;
