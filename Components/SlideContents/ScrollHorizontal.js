import React from "react";
import Title from "../Title";
import styled from "styled-components/native";
import { ScrollView } from "react-native";

const Container = styled.View``;

const ScrollHorizontal = ({ title, children }) => {
  return (
    <Container>
      <Title title={title} />
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {children}
      </ScrollView>
    </Container>
  );
};

export default ScrollHorizontal;
