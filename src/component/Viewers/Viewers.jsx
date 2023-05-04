import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Viewers = () => {
  return (
    <Container>
      <Content>
        <img src="/images/viewers-disney.png" alt="" />
        <video autoPlay={true} muted={true} loop={true} playsInline={true}>
          <source src="/videos/1564674844-disney.mp4" type="video/mp4" />
        </video>
      </Content>

      <Content>
        <img src="/images/viewers-marvel.png" alt="" />
        <video autoPlay={true} muted={true} loop={true} playsInline={true}>
          <source src="/videos/1564676115-marvel.mp4" type="video/mp4" />
        </video>
      </Content>

      <Content>
        <img src="/images/viewers-national.png" alt="" />
        <video autoPlay muted loop playsInline>
          <source
            src="/videos/1564676296-national-geographic.mp4"
            type="video/mp4"
          />
        </video>
      </Content>

      <Content>
        <img src="/images/viewers-pixar.png" alt="" />
        <video autoPlay muted loop playsInline>
          <source src="/videos/1564676714-pixar.mp4" type="video/mp4" />
        </video>
      </Content>

      <Content>
        <img src="/images/viewers-starwars.png" alt="" />
        <video autoPlay muted loop playsInline>
          <source src="/videos/1608229455-star-wars.mp4" type="video/mp4" />
        </video>
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
    transform: scale(1.05);
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

  video {
    width: 100%;
    position: absolute;
    inset: 0;
    opacity: 0;
    transition: all 1s ease-in-out 0s;
    z-index: 0;

    &:hover {
      opacity: 1;
    }
  }
`;

export default Viewers;
