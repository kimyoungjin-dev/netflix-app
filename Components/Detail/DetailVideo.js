import React from "react";
import styled from "styled-components/native";
import { ScrollView, Text, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { apiImage } from "../../api";

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

const VideoName = styled.Text`
  color: white;
  font-size: 17px;
  font-weight: bold;
  margin-left: 10px;
`;

const ShowVideosContainer = styled.View``;

const DetailVideo = ({
  results,
  showVideos,
  showToggle,
  video,
  videoToggle,
  openBrowser,
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
      {showVideos && (
        <ShowVideosContainer>
          {results.seasons ? (
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {results.seasons?.map((season, index) => (
                <SeasonContainer key={index}>
                  <SeasonName>{season.name}</SeasonName>
                  <SeasonPosterContainer
                    source={{ uri: apiImage(season.poster_path) }}
                  />
                </SeasonContainer>
              ))}
            </ScrollView>
          ) : (
            <Text style={{ color: "white", marginTop: 5 }}>
              시즌정보가 존재하지 않습니다.
            </Text>
          )}
        </ShowVideosContainer>
      )}

      {video &&
        results.videos.results.map((video, index) => (
          <TouchableOpacity
            onPress={() =>
              openBrowser(`https://www.youtube.com/watch?v=${video.key}`)
            }
            key={index}
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 14,
              marginBottom: 14,
            }}
          >
            <FontAwesome name="youtube-play" size={24} color="white" />
            <VideoName>{video.name}</VideoName>
          </TouchableOpacity>
        ))}
    </>
  );
};

export default DetailVideo;
