import React from "react";
import styled from "styled-components/native";
import ScrollContainer from "../SlideContents/ScrollContainer";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

const Container = styled.View`
  flex-direction: row;
  justify-content: space-around;
`;

const Contents = styled.View`
  align-items: center;
`;

const Appearance = styled.Text`
  color: white;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 40px;
`;

const GenresList = styled.View`
  justify-content: center;
  align-items: center;
`;

const GenresItem = styled.Text`
  color: gray;
  margin-bottom: 20px;
  font-size: 20px;
`;

const DetailCategory = ({ route }) => {
  const {
    params: { movieGenre, tvGenre },
  } = route;

  const navigation = useNavigation();

  return (
    <>
      <ScrollContainer>
        <Container>
          <Contents>
            <Appearance>Movie Genres</Appearance>
            <GenresList>
              {movieGenre.map((genre, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() =>
                    navigation.navigate("CategoryNavigation", {
                      genre,
                      isTV: false,
                    })
                  }
                >
                  <GenresItem>{genre.name}</GenresItem>
                </TouchableOpacity>
              ))}
            </GenresList>
          </Contents>

          <Contents>
            <Appearance>TV Genres</Appearance>
            <GenresList>
              {tvGenre.map((genre, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() =>
                    navigation.navigate("CategoryNavigation", {
                      genre,
                      isTV: true,
                    })
                  }
                >
                  <GenresItem>{genre.name}</GenresItem>
                </TouchableOpacity>
              ))}
            </GenresList>
          </Contents>
        </Container>
      </ScrollContainer>

      <MaterialIcons
        onPress={() => navigation.navigate("홈")}
        name="cancel"
        color="white"
        style={{
          position: "absolute",
          bottom: "10%",
          fontSize: 100,
          right: "35%",
          opacity: 0.6,
        }}
      />
    </>
  );
};

export default DetailCategory;
