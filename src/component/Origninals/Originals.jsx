import React from "react";
import styled from "styled-components";
import Contents from "../Contents/Contents";
import { useSelector } from "react-redux";

const Originals = () => {
  const movies = useSelector((state) => state.movies.original);
  return (
    <Container>
      <Text>Originals</Text>
      <Content>
        {movies &&
          movies.map((movie) => {
            return <Contents image={movie.cardImg} />;
          })}
      </Content>
    </Container>
  );
};

const Container = styled.div`
  padding-bottom: 40px;
`;

const Text = styled.h4`
  margin-bottom: 10px;
`;

const Content = styled.div`
  display: grid;
  gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  overflow: hidden;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;
export default Originals;
