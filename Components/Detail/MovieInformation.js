import React from "react";
import styled from "styled-components/native";

const MovieInforMationContainer = styled.View``;

const Title = styled.Text`
  color: white;
  font-weight: bold;
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
`;

const AdultContainer = styled.View`
  background-color: gray;
  padding: 0px 5px;
  border-radius: 4px;
`;

const Adult = styled.Text`
  color: white;
  font-size: 20px;
`;

const Runtime = styled.Text`
  color: white;
  font-size: 20px;
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
`;

const MovieInformation = ({ results }) => {
  return (
    <MovieInforMationContainer>
      <Title>{results.original_title || results.original_name}</Title>
      <CenterContents>
        <Year>
          {results.release_date?.slice(0, 4) ||
            results.first_air_date?.slice(0, 4)}
        </Year>
        <AdultContainer>
          <Adult>{results.adult === false ? "15+" : "19+"}</Adult>
        </AdultContainer>
        <Runtime>
          {results.runtime || results.episode_run_time?.map((tv) => tv)}분
        </Runtime>
        <ScreenQualityContainer>
          <ScreenQuality>HD</ScreenQuality>
        </ScreenQualityContainer>
      </CenterContents>
    </MovieInforMationContainer>
  );
};

export default MovieInformation;
