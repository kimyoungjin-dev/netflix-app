import React from "react";
import styled from "styled-components/native";
import ScrollContainer from "../../Components/SlideContents/ScrollContainer";
import { apiImage } from "../../api";
import { Dimensions } from "react-native";
import { TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import Icon from "../../Components/Icon";

const { height: HEIGHT } = Dimensions.get("window");

const Header = styled.View`
  height: ${HEIGHT / 3}px;
  justify-content: flex-end;
  align-items: center;
`;

const BackDropContainer = styled.Image`
  height: 100%;
  width: 100%;
  position: absolute;
  opacity: 0.6;
`;

const Container = styled.View`
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  top: 30;
  right: 10;
`;

const PosterContainer = styled.Image`
  height: 180px;
  width: 130px;
  border-radius: 15px;
`;

const Contents = styled.View`
  align-items: flex-start;
  justify-content: center;
  margin-left: 20px;
`;

const Title = styled.Text`
  color: white;
  font-size: 18px;
  font-weight: bold;
`;

const Year = styled.Text`
  color: white;
  font-size: 14px;
  font-weight: bold;
  opacity: 0.8;
  margin: 7px 0px;
`;

const RunTime = styled.Text`
  color: orange;
`;

const Status = styled.Text`
  color: white;
  margin: 7px 0px;
`;

const Vote = styled.Text`
  color: white;
  font-size: 14px;
  margin-bottom: 6px;
`;

const DataContainer = styled.View`
  margin-top: 100px;
`;

const DataName = styled.Text`
  color: white;
  font-weight: bold;
  margin-bottom: 10px;
  font-size: 20px;
`;

const DataValue = styled.Text`
  color: white;
  font-size: 16px;
  opacity: 0.7;
`;

const DetailPresenter = ({ openBrowser, loading, results }) => {
  return (
    <ScrollContainer loading={loading}>
      <Header>
        <BackDropContainer source={{ uri: apiImage(results.backDrop) }} />
        <Container>
          <PosterContainer source={{ uri: apiImage(results.poster_path) }} />
          <Contents>
            <Title>{results.original_title || results.original_name}</Title>
            <Year>{results.release_date || results.first_air_date}</Year>
            <RunTime>
              {results.runtime || results.episode_run_time?.map((time) => time)}{" "}
              minutes
            </RunTime>
            <Status>{results.status}</Status>
            <Vote>⭐️{results.vote_average} /10</Vote>
            <Icon
              text={"IMDB"}
              name={"imdb"}
              onPress={() =>
                openBrowser(`https://www.imdb.com/title/${results.imdb_id}`)
              }
            />
          </Contents>
        </Container>
      </Header>

      <DataContainer>
        <DataName>Homepage</DataName>
        <DataValue onPress={() => openBrowser(results.homepage)}>
          {results.homepage}
        </DataValue>
      </DataContainer>

      <DataContainer>
        <DataName>OverView</DataName>
        <DataValue>{results.overview}</DataValue>
      </DataContainer>

      <DataContainer>
        <DataName>Spoken_Languages</DataName>
        <DataValue>
          {results.spoken_languages &&
            results.spoken_languages.map((l, index) =>
              index + 1 === results.spoken_languages.length
                ? `${l.name}`
                : `${l.name} , `
            )}
        </DataValue>
      </DataContainer>

      <DataContainer>
        <DataName>Youtube</DataName>
        <DataValue>
          {results?.videos?.results.map((movie) => (
            <Icon
              key={movie.id}
              name={"youtube-play"}
              text={movie.name}
              onPress={() =>
                openBrowser(`https://www.youtube.com/watch?v=${movie.key}`)
              }
            />
          ))}
        </DataValue>
      </DataContainer>
    </ScrollContainer>
  );
};

export default DetailPresenter;
