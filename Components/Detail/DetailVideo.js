import React from "react";
import styled from "styled-components/native";
import { ScrollView, Text, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const ViewContens = styled.View`
  flex-direction: row;
  align-items: center;
`;

const SeasonVideoText = styled.Text`
  color: white;
  margin-right: 5px;
`;

const SeasonContainer = styled.View`
  margin-right: 10px;
  align-items: center;
`;

const SeasonName = styled.Text`
  color: white;
  margin: 10px 0px;
`;
const SeasonPosterContainer = styled.Image`
  height: 100px;
  width: 70px;
`;

const VideoContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 14px 0px;
`;

const VideoName = styled.Text`
  color: white;
  font-size: 17px;
  font-weight: bold;
  margin-left: 10px;
`;

const DetailVideo = ({
  results,
  showVideos,
  showToggle,
  video,
  videoToggle,
}) => {
  return (
    <>
      <ViewContens>
        <TouchableOpacity>
          <SeasonVideoText onPress={() => showToggle()}>
            시즌 정보
          </SeasonVideoText>
        </TouchableOpacity>
        <FontAwesome
          name="caret-down"
          size={18}
          color="white"
          style={{ marginRight: 10 }}
        />

        <TouchableOpacity>
          <SeasonVideoText onPress={() => videoToggle()}>
            Youtube
          </SeasonVideoText>
        </TouchableOpacity>
        <FontAwesome name="caret-down" size={18} color="white" />
      </ViewContens>

      {showVideos && results.seasons && (
        <ScrollView horizontal showsHorizontalScrollIndicator>
          {results.seasons?.map((season, index) => (
            <SeasonContainer key={index}>
              <SeasonName>{season.name}</SeasonName>
              <SeasonPosterContainer
                source={{ uri: apiImage(season.poster_path) }}
              />
            </SeasonContainer>
          ))}
        </ScrollView>
      )}

      {video &&
        results.videos.results.map((video, index) => (
          <VideoContainer key={index}>
            <FontAwesome name="youtube-play" size={24} color="black" />
            <VideoName>{video.name}</VideoName>
          </VideoContainer>
        ))}
    </>
  );
};

export default DetailVideo;
