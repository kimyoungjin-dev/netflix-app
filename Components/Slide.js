import React from "react";
import styled from "styled-components/native";
import { apiImage } from "../api";
import { trimText } from "./utils";
import { FontAwesome } from "@expo/vector-icons";

const Continaer = styled.View`
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const PosterContainer = styled.Image`
  height: 300px;
  width: 300px;
  border-radius: 20px;
  position: absolute;
`;

const Data = styled.View`
  justify-content: center;
  align-items: center;
  top: 40;
`;

const Title = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 13px;
`;

const OverView = styled.Text`
  font-size: 10px;
  opacity: 0.8;
  color: white;
`;

const BottomData = styled.View`
  top: 100;
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const PlayNowContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

const PlayNow = styled.Text`
  color: white;
  font-size: 20px;
  font-weight: bold;
`;

const BackDropContainer = styled.Image`
  border-radius: 30px;
  height: 50px;
  width: 50px;
`;

const Slide = ({ backDrop, id, poster, title, year, overView }) => {
  return (
    <Continaer
      style={{
        shadowOpacity: 18.75,
        shadowRadius: 5,
        shadowColor: "black",
        shadowOffset: { height: 10, width: 10 },
      }}
    >
      <PosterContainer source={{ uri: apiImage(poster) }} />
      <Data>
        <Title>{title}</Title>
        <OverView>{trimText(overView, 40)}</OverView>
      </Data>
      <BottomData>
        <PlayNowContainer>
          <FontAwesome
            name="play-circle"
            size={22}
            color={"white"}
            style={{ marginRight: 10 }}
          />
          <PlayNow>Play</PlayNow>
        </PlayNowContainer>
        <BackDropContainer source={{ uri: apiImage(backDrop) }} />
      </BottomData>
    </Continaer>
  );
};

export default Slide;
