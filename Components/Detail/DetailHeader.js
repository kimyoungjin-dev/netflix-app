import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Dimensions } from "react-native";
import styled from "styled-components/native";
import { apiImage } from "../../api";

const { height: HEIGHT } = Dimensions.get("window");

const Header = styled.View`
  height: ${HEIGHT / 3.5};
  align-items: flex-end;
  justify-content: flex-end;
`;

const PosterContainer = styled.Image`
  height: 100%;
  width: 100%;
  position: absolute;
`;

const HeaderBottomContainer = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 10px;
  padding: 0px 10px;
`;

const ButtonContainer = styled.View`
  background-color: black;
  padding: 5px;
  border-radius: 3px;
  justify-content: center;
  align-items: center;
`;

const ButtonText = styled.Text`
  color: white;
  font-size: 18px;
  font-weight: bold;
  font-family: "Noto_Sans";
`;

const SpeakerContainer = styled.View`
  padding: 5px;
  background-color: black;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
`;

const DetailHeader = ({ results }) => {
  return (
    <Header>
      <PosterContainer source={{ uri: apiImage(results.poster_path) }} />
      <HeaderBottomContainer>
        <ButtonContainer>
          <ButtonText>미리보기 없음</ButtonText>
        </ButtonContainer>
        <SpeakerContainer>
          <MaterialCommunityIcons name="volume-mute" size={24} color="white" />
        </SpeakerContainer>
      </HeaderBottomContainer>
    </Header>
  );
};

export default DetailHeader;
