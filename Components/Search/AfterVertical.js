import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { apiImage } from "../../api/api";
import { useNavigation } from "@react-navigation/native";

const Container = styled.View`
  margin-bottom: 10px;
  flex-direction: row;
`;

const PosterContainer = styled.Image`
  height: 240px;
  width: 185px;
  border-radius: 5px;
`;

const AfterVertical = ({ poster, id, isTV = false }) => {
  const navigation = useNavigation();
  return (
    <Container>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Detail", {
            id,
            isTV,
          })
        }
      >
        <PosterContainer source={{ uri: apiImage(poster) }} />
      </TouchableOpacity>
    </Container>
  );
};

export default AfterVertical;
