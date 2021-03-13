import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { apiImage } from "../api/api";
import { useNavigation } from "@react-navigation/native";

const Continaer = styled.View`
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const BackDropContainer = styled.Image`
  height: 100%;
  width: 100%;
  position: absolute;
`;
const Slide = ({ isTV = false, backDrop, id }) => {
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
      </Continaer>
    </TouchableOpacity>
  );
};

export default Slide;
