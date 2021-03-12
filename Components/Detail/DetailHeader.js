import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Dimensions } from "react-native";
import styled from "styled-components/native";
import { WebView } from "react-native-webview";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

const Header = styled.View`
  height: ${HEIGHT / 2.5};
  align-items: flex-end;
  justify-content: flex-end;
`;

const HeaderBottomContainer = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 10px;
  padding: 0px 10px;
  position: absolute;
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
      <WebView
        style={{ width: WIDTH / 1 }}
        mixedContentMode="always"
        source={{
          uri: `https://www.youtube.com/embed/${results.videos?.results?.[0].key}`,
        }}
        scrollEnabled={true}
        javaScriptEnabled={true}
        allowsFullscreenVideo={false}
      />
    </Header>
  );
};

export default DetailHeader;
