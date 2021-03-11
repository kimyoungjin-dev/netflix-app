import React from "react";
import styled from "styled-components/native";
import { Dimensions } from "react-native";
import { apiImage } from "../../api";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  FontAwesome,
} from "@expo/vector-icons";
import { useFonts } from "expo-font";

//file
import ScrollContainer from "../../Components/SlideContents/ScrollContainer";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

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

//contents

const MovieInforMationContainer = styled.View``;

const Title = styled.Text`
  color: white;
  font-weight: bold;
  font-family: "Noto_Sans";
  font-size: 30px;
`;

const CenterContents = styled.View`
  align-items: center;
  flex-direction: row;
  width: 60%;
  margin: 10px 0px;
  justify-content: space-between;
`;

const Year = styled.Text`
  color: gray;
  font-size: 22px;
  font-family: "Noto_Sans";
`;

const AdultContainer = styled.View`
  background-color: gray;
  padding: 0px 5px;
  border-radius: 4px;
`;

const Adult = styled.Text`
  color: white;
  font-size: 20px;
  font-family: "Noto_Sans";
`;

const Runtime = styled.Text`
  color: white;
  font-size: 20px;
  font-family: "Noto_Sans";
`;

const ScreenQualityContainer = styled.View`
  border: 1px solid gray;
  background-color: black;
  border-radius: 5px;
`;

const ScreenQuality = styled.Text`
  padding: 0px 5px;
  color: white;
  font-size: 20px;
  font-family: "Noto_Sans";
`;

//RankContainer

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

const DetailPresenter = ({ openBrowser, loading, results }) => {
  console.log(results);

  //usefonts
  const [loaded] = useFonts({
    Noto_Sans: require("../../assets/fonts/Noto_Sans_JP/NotoSansJP-Black.otf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <>
      <Header>
        <PosterContainer source={{ uri: apiImage(results.poster_path) }} />
        <HeaderBottomContainer>
          <ButtonContainer>
            <ButtonText>미리보기 없음</ButtonText>
          </ButtonContainer>
          <SpeakerContainer>
            <MaterialCommunityIcons
              name="volume-mute"
              size={24}
              color="white"
            />
          </SpeakerContainer>
        </HeaderBottomContainer>
      </Header>
      <ScrollContainer loading={loading}>
        <MovieInforMationContainer>
          <Title>{results.original_title || results.original_name}</Title>
          <CenterContents>
            <Year>{results.release_date?.slice(0, 4)}</Year>
            <AdultContainer>
              <Adult>{results.adult === false ? "15+" : "19+"}</Adult>
            </AdultContainer>
            <Runtime>{results.runtime}분</Runtime>
            <ScreenQualityContainer>
              <ScreenQuality>HD</ScreenQuality>
            </ScreenQualityContainer>
          </CenterContents>
        </MovieInforMationContainer>

        <RankContainer>
          <Top10Container>
            <TopText>Top</TopText>
            <Top10Text>10</Top10Text>
          </Top10Container>
          <ContentRanking>오늘 한국에서 콘텐츠 순위 3위</ContentRanking>
        </RankContainer>

        <PlaySaveContainer>
          <PlayingContainer>
            <FontAwesome name="play" size={20} color="black" />
            <PlayingText>재생</PlayingText>
          </PlayingContainer>
          <SaveContainer>
            <MaterialIcons name="save-alt" size={24} color="white" />

            <SaveText>저장</SaveText>
          </SaveContainer>
        </PlaySaveContainer>

        <OverViewContainer>{results.overview}</OverViewContainer>
      </ScrollContainer>
    </>
  );
};

export default DetailPresenter;
