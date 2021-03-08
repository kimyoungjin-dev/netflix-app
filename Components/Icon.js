import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;

const TextContainer = styled.Text`
  color: white;
  font-size: 20px;
  margin-right: 5px;
`;

const Icon = ({ onPress, name, text }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Container>
        <TextContainer>{text}</TextContainer>
        <FontAwesome name={name} color="white" size={30} />
      </Container>
    </TouchableOpacity>
  );
};

export default Icon;
