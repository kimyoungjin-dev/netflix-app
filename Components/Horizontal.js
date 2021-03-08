import React from "react";
import styled from "styled-components/native";
import { apiImage } from "../api";

const Container = styled.View`
  margin-right: 20px;
`;

const PosterContainer = styled.Image`
  height: 160px;
  width: 130px;
  border-radius: 10px;
  margin-bottom: 10px;
`;

const Title = styled.Text`
  font-weight: bold;
  color: white;
  font-size: 14px;
`;
const Horizontal = ({ id, poster, title }) => {
  return (
    <Container>
      <PosterContainer source={{ uri: apiImage(poster) }} />
      <Title>{title}</Title>
    </Container>
  );
};

export default Horizontal;
