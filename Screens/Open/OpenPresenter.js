import React from "react";
import ScrollContainer from "../../Components/SlideContents/ScrollContainer";
import styled from "styled-components/native";
import { Dimensions, ScrollView, Text } from "react-native";
import { apiImage } from "../../api/api";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import Category from "../../Components/Home/Category";

const { height: HEIGHT } = Dimensions.get("window");

const Container = styled.View``;

const Header = styled.View`
  height: ${HEIGHT / 3}px;
  width: 100%;
`;

const Contents = styled.View`
  margin: 10px 0px;
  flex-direction: row;
  justify-content: space-between;
  padding: 0px 10px;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: white;
`;

const PosterContainer = styled.Image`
  height: 100%;
  width: 100%;
`;

const IconContainer = styled.View`
  flex-direction: row;
  width: 100px;
  justify-content: space-around;
`;

const IconBox = styled.View`
  align-items: center;
`;

const OpenPresenter = ({
  loading,
  movies,
  refreshing,
  movieCategory: { genres: movieGenre },
  showCategory: { genres: tvGenre },
}) => {
  return (
    <>
      <Category movieGenre={movieGenre} tvGenre={tvGenre} />
      <ScrollContainer loading={loading} refreshing={refreshing}>
        <ScrollView>
          {movies.map((movie) => (
            <Container key={movie.id}>
              <Header>
                <PosterContainer
                  source={{ uri: apiImage(movie.poster_path) }}
                />
              </Header>
              <Contents>
                <Title>{movie.title}</Title>
                <IconContainer>
                  <IconBox>
                    <FontAwesome name="bell-o" size={24} color="white" />
                    <Text style={{ color: "white" }}>알림 받기</Text>
                  </IconBox>

                  <IconBox>
                    <Ionicons
                      name="information-circle-outline"
                      size={24}
                      color="white"
                    />
                    <Text style={{ color: "white" }}>정보</Text>
                  </IconBox>
                </IconContainer>
              </Contents>
              <Text style={{ color: "gray", fontSize: 16 }}>
                매주 월요일 새로운 애피소드 공개
              </Text>

              <Text style={{ color: "white", marginTop: 10, fontSize: 17 }}>
                {movie.original_title}
              </Text>
              <Text style={{ color: "gray", marginTop: 5, marginBottom: 50 }}>
                {movie.overview}
              </Text>
            </Container>
          ))}
        </ScrollView>
      </ScrollContainer>
    </>
  );
};

export default OpenPresenter;
