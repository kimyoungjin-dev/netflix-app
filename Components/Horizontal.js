import React, { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { apiImage } from "../api/api";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useFonts } from "expo-font";

const Container = styled.View`
  margin-right: 10px;
  margin-bottom: 4px;
`;

const PosterBox = styled.View`
  height: 160px;
  width: 130px;
`;

const PosterContainer = styled.Image`
  height: 100%;
  width: 100%;
  border-radius: 4px;
`;

const NewEpisode = styled.View`
  width: 50%;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 10;
  left: 30;
`;

const TopEpisodeContents = styled.View`
  background-color: white;
  opacity: 0.7;
  width: 100%;
`;

const BotEpisodeContents = styled.View`
  background-color: red;
  width: 100%;
`;

const TopEpisodeText = styled.Text`
  font-size: 10px;
  color: black;
  text-align: center;
`;

const BotEpisodeText = styled.Text`
  color: white;
  text-align: center;
  font-size: 10;
`;

const Top10Container = styled.View`
  background-color: red;
  align-items: center;
  justify-content: center;
  align-items: center;
  padding: 5px;
  position: absolute;
  top: 0;
  left: 0;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 15px;
`;

const TopText = styled.Text`
  color: white;
  font-size: 14px;
  font-weight: bold;
  font-family: "Noto_Sans_JP";
`;

const Top10Text = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 19px;
  font-family: "Noto_Sans_JP";
`;

const Horizontal = ({ isTV = false, id, poster, title, vote, rank }) => {
  const navigation = useNavigation();
  const randomNumber = Math.floor(Math.random() * 2);
  const [loaded] = useFonts({
    Noto_Sans_JP: require("../assets/fonts/Noto_Sans_JP/NotoSansJP-Black.otf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("Detail", {
          id,
          poster,
          title,
          vote,
          isTV,
          rank,
        })
      }
    >
      <Container>
        <PosterBox>
          <PosterContainer source={{ uri: apiImage(poster) }} />

          {rank === randomNumber && (
            <Top10Container>
              <Top10Container>
                <TopText>Top</TopText>
                <Top10Text>10</Top10Text>
              </Top10Container>
            </Top10Container>
          )}

          {isTV && vote > 8.3 && (
            <>
              <NewEpisode>
                <TopEpisodeContents>
                  <TopEpisodeText>매주</TopEpisodeText>
                </TopEpisodeContents>
                <BotEpisodeContents>
                  <BotEpisodeText>새로운 에피소드</BotEpisodeText>
                </BotEpisodeContents>
              </NewEpisode>
            </>
          )}

          {vote > 8 && (
            <MaterialCommunityIcons
              name="netflix"
              size={30}
              color="red"
              style={{
                paddingLeft: 20,
                position: "absolute",
                right: 0,
                opacity: 0.8,
              }}
            />
          )}
        </PosterBox>
      </Container>
    </TouchableOpacity>
  );
};

export default Horizontal;
