import React, { useState } from "react";
import Horizontal from "../../Components/Horizontal";
import Slide from "../../Components/Slide";
import ScrollContainer from "../../Components/SlideContents/ScrollContainer";
import ScrollHorizontal from "../../Components/SlideContents/ScrollHorizontal";
import ScrollSwiper from "../../Components/SlideContents/ScrollSwiper";
import ScrollVertical from "../../Components/SlideContents/ScrollVertical";
import Vertical from "../../Components/Vertical";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";

const CategoryContainer = styled.View`
  padding: 10px 0px;
  flex-direction: row;
  background-color: black;
  justify-content: space-around;
`;

const CategoryList = styled.View`
  justify-content: flex-end;
`;

const CategoryItem = styled.Text`
  color: white;
  font-size: 20px;
  padding-right: 20px;
`;

const ChangeTab = styled.View`
  background-color: gray;
  height: 100%;
  width: 100%;
`;

const List = styled.View`
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const MainItem = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 20px;
`;

const Item = styled.Text`
  color: white;
  font-size: 24px;
  margin-bottom: 20px;
`;

const MoviePresenter = ({
  nowPlaying,
  popular,
  upcoming,
  movieTopRated,
  loading,
}) => {
  const navigation = useNavigation();
  const [editing, setEditing] = useState(false);

  return (
    <>
      {editing && (
        <ChangeTab>
          <List>
            <TouchableOpacity onPress={() => navigation.navigate("홈")}>
              <Item>홈</Item>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("TV")}>
              <Item>TV 프로그램</Item>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("Movie")}>
              <MainItem>영화</MainItem>
            </TouchableOpacity>
          </List>
          <TouchableOpacity onPress={() => setEditing((prev) => !prev)}>
            <MaterialIcons
              name="cancel"
              size={70}
              color="wite"
              style={{ position: "absolute", bottom: "20%", right: "40%" }}
            />
          </TouchableOpacity>
        </ChangeTab>
      )}

      <CategoryContainer>
        <CategoryList>
          <TouchableOpacity
            onPress={() => setEditing((prev) => !prev)}
            style={{ flexDirection: "row" }}
          >
            <CategoryItem>영화</CategoryItem>
            <FontAwesome name="caret-down" size={24} color="white" />
          </TouchableOpacity>
        </CategoryList>

        <CategoryList>
          <TouchableOpacity
            style={{ flexDirection: "row" }}
            onPress={() =>
              navigation.navigate("Category", {
                movieGenre,
                tvGenre,
              })
            }
          >
            <CategoryItem>모든 카테고리</CategoryItem>
            <FontAwesome name="caret-down" size={24} color="white" />
          </TouchableOpacity>
        </CategoryList>
      </CategoryContainer>

      <ScrollContainer loading={loading}>
        <ScrollSwiper>
          {nowPlaying.map((movie, index) => (
            <Slide
              key={movie.id}
              id={movie.id}
              backDrop={movie.backdrop_path}
              overView={movie.overview}
              poster={movie.poster_path}
              title={movie.original_title}
              vote={movie.vote_average}
              rank={index}
            />
          ))}
        </ScrollSwiper>

        <ScrollHorizontal title={"인기영화"}>
          {popular.map((movie, index) => (
            <Horizontal
              key={movie.id}
              id={movie.id}
              poster={movie.poster_path}
              title={movie.original_title}
              vote={movie.vote_average}
              rank={index}
            />
          ))}
        </ScrollHorizontal>

        <ScrollHorizontal title={"Top10 영화"}>
          {movieTopRated.map((movie, index) => (
            <Horizontal
              key={movie.id}
              id={movie.id}
              poster={movie.poster_path}
              title={movie.original_name}
              vote={movie.vote_average}
              rank={index}
            />
          ))}
        </ScrollHorizontal>

        <ScrollVertical title={"방금나온 영화"}>
          {upcoming.map((movie, index) => (
            <Vertical
              key={movie.id}
              id={movie.id}
              poster={movie.poster_path}
              title={movie.original_title}
              vote={movie.vote_average}
              overView={movie.overview}
              rank={index}
            />
          ))}
        </ScrollVertical>
      </ScrollContainer>
    </>
  );
};

export default MoviePresenter;
