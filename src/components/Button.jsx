import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
  background: white;
  padding: 3em;
`;

const Button = () => {
  return (
    <>
      <div>
        <Title>Hello world</Title>
      </div>
    </>
  );
};

export default Button;
