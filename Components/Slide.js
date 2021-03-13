import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { apiImage } from "../api/api";
import { useNavigation } from "@react-navigation/native";

const Continaer = styled.View`
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
`;

const Slide = ({ isTV = false, backDrop, id, title }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("Detail", {
          id,
          isTV,
        })
      }
    >
      <Continaer
        style={{
          shadowOpacity: 18.75,
          shadowRadius: 5,
          shadowColor: "black",
          shadowOffset: { height: 10, width: 10 },
        }}
      >
        <BackDropContainer source={{ uri: apiImage(backDrop) }} />
        <Title>{title}</Title>
      </Continaer>
    </TouchableOpacity>
  );
};

export default Slide;
