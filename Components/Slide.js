import React from "react";
import styled from "styled-components/native";
import { apiImage } from "../api";
import { trimText } from "./utils";

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

const Contents = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
  height: 100%;
  align-items: center;
`;

const PosterContainer = styled.Image`
  height: 100px;
  width: 100px;
`;

const Data = styled.View`
  width: 50%;
`;

const Title = styled.Text`
  color: white;
  font-size: 18px;
  font-weight: bold;
`;

const Year = styled.Text`
  color: white;
  font-size: 14px;
  margin: 5px 0px;
`;

const Vote = styled.Text`
  color: white;
  font-size: 14px;
  margin-bottom: 5px;
`;

const OverView = styled.Text`
  color: white;
  font-size: 15px;
  opacity: 0.8;
`;

const Slide = ({ backDrop, id, overView, poster, title, vote, year }) => {
  return (
    <Continaer
      style={{
        shadowOpacity: 18.75,
        shadowRadius: 5,
        shadowColor: "black",
        shadowOffset: { height: 10, width: 10 },
      }}
    >
      <BackDropContainer source={{ uri: apiImage(backDrop) }} />
      <Contents>
        <PosterContainer source={{ uri: apiImage(poster) }} />
        <Data>
          <Title>{title}</Title>
          <Year>{year}</Year>
          <Vote>⭐️ {vote} /10</Vote>
          <OverView>{trimText(overView, 100)}</OverView>
        </Data>
      </Contents>
    </Continaer>
  );
};

export default Slide;
