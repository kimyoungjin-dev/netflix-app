import React from "react";
import styled from "styled-components/native";
import { useFonts } from "expo-font";
import { Text } from "react-native";

const TextContainer = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: white;
  margin-bottom: 20px;
`;
const Title = ({ title }) => {
  const [loaded] = useFonts({
    Noto_Sans: require("../assets/fonts/Noto_Sans_JP/NotoSansJP-Bold.otf"),
  });

  if (!loaded) {
    return null;
  }
  return (
    <TextContainer style={{ fontFamily: "Noto_Sans" }}>{title}</TextContainer>
  );
};

export default Title;
