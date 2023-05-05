import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Contents from "../Contents/Contents";

const Originals = () => {
  return (
    <Container>
      <Text>Originals</Text>
      <Content>
        <Contents
          image={`https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6EA416AD3B15FCC1BADC817A932A57FFF707556DB2233FFCB4CFEB7C8EEDE23C/scale?width=400&aspectRatio=1.78&format=jpeg`}
        />

        <Contents
          image={`https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6EA416AD3B15FCC1BADC817A932A57FFF707556DB2233FFCB4CFEB7C8EEDE23C/scale?width=400&aspectRatio=1.78&format=jpeg`}
        />

        <Contents
          image={`https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6EA416AD3B15FCC1BADC817A932A57FFF707556DB2233FFCB4CFEB7C8EEDE23C/scale?width=400&aspectRatio=1.78&format=jpeg`}
        />

        <Contents
          image={`https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6EA416AD3B15FCC1BADC817A932A57FFF707556DB2233FFCB4CFEB7C8EEDE23C/scale?width=400&aspectRatio=1.78&format=jpeg`}
        />
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
