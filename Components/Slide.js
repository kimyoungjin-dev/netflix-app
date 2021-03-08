import React from "react";
import styled from "styled-components/native";
import { apiImage } from "../api";
import { trimText } from "./utils";

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

const Slide = ({ id, poster, title, year, overView }) => {
  return (
    <Continaer>
      <PosterContainer source={{ uri: apiImage(poster) }} />
      <Data>
        <Title>{title}</Title>
        <OverView>{trimText(overView, 40)}</OverView>
      </Data>
    </Continaer>
  );
};

export default Slide;
