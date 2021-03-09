import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { apiImage } from "../api";
import { useNavigation } from "@react-navigation/native";

const Container = styled.View`
  margin-right: 20px;
  margin-bottom: 10px;
`;

const PosterContainer = styled.Image`
  height: 160px;
  width: 130px;
  border-radius: 5px;
`;

const Horizontal = ({ id, poster, title, vote }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("Detail", {
          id,
          poster,
          title,
          vote,
        })
      }
    >
      <Container>
        <PosterContainer source={{ uri: apiImage(poster) }} />
      </Container>
    </TouchableOpacity>
  );
};

export default Horizontal;
