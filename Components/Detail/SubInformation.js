import React from "react";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const RankContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Top10Container = styled.View`
  border: 3px solid white;
  background-color: black;
  align-items: center;
  padding: 5px;
`;

const TopText = styled.Text`
  color: white;
  font-family: "Noto_Sans";
  font-size: 18px;
  font-weight: bold;
`;

const Top10Text = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 16px;
  font-family: "Noto_Sans";
`;

const ContentRanking = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: white;
  margin-left: 5px;
  font-family: "Noto_Sans";
`;

const PlaySaveContainer = styled.View`
  margin: 10px 0px;
`;

const PlayingContainer = styled.View`
  background-color: white;
  height: 40px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  flex-direction: row;
`;

const PlayingText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-left: 13px;
`;

const SaveContainer = styled.View`
  background-color: gray;
  height: 40px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const SaveText = styled.Text`
  color: white;
  font-size: 20px;
  font-weight: bold;
  margin-left: 10px;
`;

const OverViewContainer = styled.Text`
  color: white;
  font-family: "Noto_Sans";
`;

const AppearanceContainer = styled.View`
  flex-direction: row;
  margin: 20px 0px;
`;

const Appearance = styled.Text`
  color: gray;
  font-size: 14px;
`;

const AppearanceText = styled.Text`
  color: white;
  opacity: 0.8;
  font-size: 16px;
`;

const SubInformation = ({ results, openBrowser }) => {
  const navigation = useNavigation();

  return (
    <>
      <RankContainer>
        <Top10Container>
          <TopText>Top</TopText>
          <Top10Text>10</Top10Text>
        </Top10Container>
        <ContentRanking>
          오늘 한국에서 콘텐츠 순위 {results.rank}위
        </ContentRanking>
      </RankContainer>
      <PlaySaveContainer>
        <TouchableOpacity
          onPress={() =>
            openBrowser(
              `https://www.youtube.com/watch?v=${results.videos.results[0].key}`
            )
          }
        >
          <PlayingContainer>
            <FontAwesome name="play" size={20} color="black" />
            <PlayingText>재생</PlayingText>
          </PlayingContainer>
        </TouchableOpacity>

        <TouchableOpacity>
          <SaveContainer>
            <MaterialIcons name="save-alt" size={24} color="white" />
            <SaveText>저장</SaveText>
          </SaveContainer>
        </TouchableOpacity>
      </PlaySaveContainer>
      <OverViewContainer>{results.overview}</OverViewContainer>
      <AppearanceContainer>
        <Appearance>
          출연:
          {results.cast &&
            results.cast
              .slice(0, 3)
              .map((h, index) =>
                index === results.cast.length ? `${h.name}` : `, ${h.name}.`
              )}
        </Appearance>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Credit", {
              results,
            })
          }
        >
          <AppearanceText>더 보기</AppearanceText>
        </TouchableOpacity>
      </AppearanceContainer>
    </>
  );
};

export default SubInformation;
