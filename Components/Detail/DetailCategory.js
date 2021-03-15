import React from "react";
import styled from "styled-components/native";
import ScrollContainer from "../SlideContents/ScrollContainer";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 0px 5px;
`;

const Contents = styled.View`
  align-items: center;
`;

const Appearance = styled.Text`
  color: white;
  font-size: 20px;
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
            <Appearance>영화 장르</Appearance>
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
            <Appearance>프로그램 장르</Appearance>
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
          fontSize: 70,
          right: "40%",
          opacity: 0.6,
        }}
      />
    </>
  );
};

export default DetailCategory;
