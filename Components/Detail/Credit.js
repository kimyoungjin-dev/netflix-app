import React, { useLayoutEffect } from "react";
import styled from "styled-components/native";
import ScrollContainer from "../SlideContents/ScrollContainer";

const Container = styled.View`
  align-items: center;
`;

const Appearance = styled.Text`
  color: white;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 40px;
`;

const AppearanceList = styled.View`
  justify-content: center;
  align-items: center;
`;

const AppearanceItem = styled.Text`
  color: gray;
  margin-bottom: 20px;
  font-size: 20px;
`;

const Credit = ({ navigation, route }) => {
  const {
    params: { results },
  } = route;

  useLayoutEffect(() => {
    navigation.setOptions({ title: route.params.results.original_title });
  }, []);

  return (
    <ScrollContainer>
      <Container>
        <Appearance>출연</Appearance>
        <AppearanceList>
          {results.cast.map((movie) => (
            <AppearanceItem key={movie.id}>{movie.name}</AppearanceItem>
          ))}
        </AppearanceList>
      </Container>
    </ScrollContainer>
  );
};

export default Credit;
