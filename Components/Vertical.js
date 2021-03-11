import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { apiImage } from "../api";
import { trimText } from "./utils";

const Container = styled.View`
  flex-direction: row;
  margin-bottom: 30px;
`;

const PosterContainer = styled.Image`
  height: 130px;
  width: 110px;
  border-radius: 10px;
  margin-right: 20px;
`;

const Contents = styled.View`
  width: 60%;
`;

const Title = styled.Text`
  color: white;
  font-size: 18px;
  font-weight: bold;
`;

const Vote = styled.Text`
  color: white;
  font-size: 12px;
`;

const OverView = styled.Text`
  color: white;
  font-size: 14px;
`;

const Vertical = ({ isTV = false, poster, title, vote, overView, id }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("Detail", {
          poster,
          title,
          vote,
          overView,
          isTV,
          id,
        })
      }
    >
      <Container>
        <PosterContainer source={{ uri: apiImage(poster) }} />
        <Contents>
          <Title>{title}</Title>
          <Vote>⭐️ {vote} /10</Vote>
          <OverView>{trimText(overView, 145)}</OverView>
        </Contents>
      </Container>
    </TouchableOpacity>
  );
};

export default Vertical;
