import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { apiImage } from "../api/api";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";

const Container = styled.View`
  justify-content: flex-end;
  align-items: center;
  height: 100%;
`;

const BackDropContainer = styled.Image`
  height: 100%;
  width: 100%;
  position: absolute;
`;

const Title = styled.Text`
  color: white;
  font-size: 40px;
  font-weight: bold;
  bottom: 50;
  font-family: "Ranchers";
`;

const Slide = ({ isTV = false, backDrop, id, title }) => {
  const navigation = useNavigation();
  const [loaded] = useFonts({
    Ranchers: require("../assets/fonts/Ranchers/Ranchers-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("Detail", {
          id,
          isTV,
        })
      }
    >
      <Container>
        <BackDropContainer source={{ uri: apiImage(backDrop) }} />
        <Title>{title}</Title>
      </Container>
    </TouchableOpacity>
  );
};

export default Slide;
