import React from "react";
import styled from "styled-components/native";
import ScrollContainer from "../../Components/SlideContents/ScrollContainer";
import { apiImage } from "../../api";
import { Button, Dimensions } from "react-native";
import { TouchableOpacity } from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

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
  justify-content: center;
  width: 100%;
  top: 60;
  right: 30;
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

const ButtonContainer = styled.View``;

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
  console.log(results);

  return (
    <ScrollContainer loading={loading}>
      <Header>
        <BackDropContainer source={{ uri: apiImage(results.backDrop) }} />
        <Container>
          <PosterContainer source={{ uri: apiImage(results.poster_path) }} />
          <Contents>
            <Title>{results.original_title}</Title>
            <Year>{results.release_date}</Year>
            <RunTime>{results.runtime} minutes</RunTime>
            <Status>{results.status}</Status>
            <Vote>⭐️{results.vote_average} /10</Vote>

            <TouchableOpacity
              onPress={() =>
                openBrowser(`https://www.imdb.com/title/${results.imdb_id}`)
              }
            >
              <ButtonContainer>
                <FontAwesome name="imdb" color="white" size={40} />
              </ButtonContainer>
            </TouchableOpacity>
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
            results.spoken_languages.map((l) => l.name)}
        </DataValue>
      </DataContainer>

      {results.videos?.results?.map((movie) => (
        <TouchableOpacity
          onPress={() =>
            openBrowser(`https://www.youtube.com/watch?v=${movie.key}`)
          }
        >
          <DataContainer>
            <DataName>
              <FontAwesome name="youtube-play" size={22} />
            </DataName>
            <DataValue>{movie.name}</DataValue>
          </DataContainer>
        </TouchableOpacity>
      ))}
    </ScrollContainer>
  );
};

export default DetailPresenter;
