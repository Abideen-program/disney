import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();

  return (
    <Container>
      <Background>
        <img
          src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/49B92C046117E89BC9243A68EE277A3B30D551D4599F23C10BF0B8C1E90AEFB6/scale?width=1440&aspectRatio=1.78&format=jpeg"
          alt=""
        />
      </Background>

      <ImageTitle>
        <img
          src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/5C647DF3FFBFA343CFEA84AC715148F25F9E86F398B408010CC403E7654FB908/scale?width=1440&aspectRatio=1.78"
          alt=""
        />
      </ImageTitle>

      <ContentMeta>
        <Controls>
          <Player>
            <img src="/images/play-icon-black.png" alt="play icon" />
            <span>Play</span>
          </Player>

          <Trailer>
            <img src="/images/play-icon-white.png" alt="play icon" />
            <span>Trailer</span>
          </Trailer>

          <AddList>
            <span></span>
            <span></span>
          </AddList>

          <GroupWatch>
            <div>
              <img src="/images/group-icon.png" alt="" />
            </div>
          </GroupWatch>
        </Controls>
        <SubTitle>Subtitle</SubTitle>
        <Description>Description</Description>
      </ContentMeta>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  top: 72px;
  width: 100%;
  min-height: calc(100vh - 250px);
  padding: 0 40px;
  overflow: hidden;
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: -1;
  opacity: 0.8;

  img {
    width: 100%;
    height: 100vh;

    @media (max-width: 768px) {
      width: initial;
    }
  }
`;

const ImageTitle = styled.div`
  // margin: 0px auto;
  height: 35vh;
  width: 100%;
  min-height: 170px;
  padding-bottom: 24px;

  img {
    width: 35vw;
    max-width: 600px;
    min-width: 200px;
  }
`;

const ContentMeta = styled.div`
  max-width: 864px;
  margin-top: 45px;
  // border: 3px solid red;
`;

const Controls = styled.div`
  margin: 24px 0;
  min-height: 56px;
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
`;

const Player = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 24px;
  margin: 0 22px 0 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  height: 56px;
  font-size: 15px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1.8px;
  background: rgb(249, 249, 249);
  color: black;

  img {
    width: 32px;
  }

  &:hover {
    background: rgb(198, 198, 198);
  }

  @media (max-width: 768px) {
    height: 45px;
    padding: 0 12px;
    font-size: 12px;
    margin: 0 10px 0 0;

    img {
      width: 25px;
    }
  }
`;

const Trailer = styled(Player)`
  background: rgba(0, 0, 0, 0.3);
  color: rgb(249, 249, 249);
  border: 1px solid rgb(249, 249, 249);
`;

const AddList = styled.div`
  margin-right: 16px;
  width: 44px;
  height: 44px;
  background: rgba(0, 0, 0, 0.6);
  border: 2px solid white;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    background-color: rgb(249, 249, 249);
    display: inline-block;

    &:first-child {
      height: 2px;
      width: 16px;
      transform: translate(1px, 0px) rotate(0deg);
    }

    &:nth-child(2) {
      height: 16px;
      width: 2px;
      transform: translateX(-8px);
    }
  }
`;

const GroupWatch = styled.div`
  background: white;
  width: 44px;
  height: 44px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;

  div {
    background: rgb(0, 0, 0);
    height: 40px;
    width: 40px;
    border-radius: 50%;

    img {
      width: 100%;
    }
  }
`;

const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Description = styled.div`
  line-height: 1.4;
  color: rgb(249, 249, 249);
  font-size: 20px;
  padding: 16px 0px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export default Details;
