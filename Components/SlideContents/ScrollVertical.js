import React from "react";
import { ScrollView } from "react-native";
import styled from "styled-components/native";
import Title from "../Title";

const Container = styled.View``;

const ScrollVertical = ({ title, children }) => {
  return (
    <Container>
      <Title title={title} />
      <ScrollView>{children}</ScrollView>
    </Container>
  );
};

export default ScrollVertical;
