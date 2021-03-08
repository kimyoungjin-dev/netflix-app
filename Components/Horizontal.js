import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { apiImage } from "../api";
import { useNavigation } from "@react-navigation/native";

const Container = styled.View`
  margin-right: 20px;
`;

const PosterContainer = styled.Image`
  height: 160px;
  width: 130px;
  border-radius: 10px;
  margin-bottom: 10px;
`;

const Contents = styled.View`
  align-items: center;
`;

const Title = styled.Text`
  font-weight: bold;
  color: white;
  font-size: 10px;
`;

const Vote = styled.Text`
  color: white;
  font-size: 8px;
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
        <Contents>
          <Title>{title}</Title>
          <Vote>⭐️ {vote} /10</Vote>
        </Contents>
      </Container>
    </TouchableOpacity>
  );
};

export default Horizontal;
