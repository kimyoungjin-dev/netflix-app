import React from "react";
import styled from "styled-components/native";
import { apiImage } from "../api";
import { trimText } from "./utils";

const Container = styled.View`
  flex-direction: row;
  margin-bottom: 30px;
`;

const PosterContainer = styled.Image`
  height: 100px;
  width: 60px;
`;

const Contents = styled.View``;

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

const Vertical = ({ poster, title, vote, overView }) => {
  return (
    <Container>
      <PosterContainer source={{ uri: apiImage(poster) }} />
      <Contents>
        <Title>{title}</Title>
        <Vote>⭐️ {vote} /10</Vote>
        <OverView>{trimText(overView, 145)}</OverView>
      </Contents>
    </Container>
  );
};

export default Vertical;
