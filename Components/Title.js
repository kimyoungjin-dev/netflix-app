import React from "react";
import styled from "styled-components/native";

const TextContainer = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: white;
  margin-bottom: 5px;
  opacity: 0.8;
`;

const Title = ({ title }) => {
  return <TextContainer>{title}</TextContainer>;
};

export default Title;
