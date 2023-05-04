import React from "react";
import styled from "styled-components";
import ImageSlider from "../ImageSlider/ImageSlider";
import Viewers from "../Viewers/Viewers";

function Home() {
  return (
    <Container>
      <ImageSlider />
      <Viewers /> 
    </Container>
  );
}

const Container = styled.main`
  position: relative;
  top: 72px;
  width: 100%;
  min-height: calc(100vh - 250px);
  padding: 0 40px;

  &:before {
    content: "";
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    position: absolute;
    inset: 0;
    z-index: -1;
  }
`;

export default Home;
