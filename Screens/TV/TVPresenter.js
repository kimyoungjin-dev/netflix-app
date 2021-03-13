import React, { useState } from "react";
import { Dimensions, TouchableOpacity } from "react-native";
import Horizontal from "../../Components/Horizontal";
import Slide from "../../Components/Slide";
import ScrollContainer from "../../Components/SlideContents/ScrollContainer";
import ScrollHorizontal from "../../Components/SlideContents/ScrollHorizontal";
import ScrollSwiper from "../../Components/SlideContents/ScrollSwiper";
import ScrollVertical from "../../Components/SlideContents/ScrollVertical";
import Vertical from "../../Components/Vertical";
import styled from "styled-components/native";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

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

const TVPresenter = ({ topRated, popular, airingToday, thisweek, loading }) => {
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
              <MainItem>TV 프로그램</MainItem>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("Movie")}>
              <Item>영화</Item>
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
            <CategoryItem>TV 프로그램</CategoryItem>
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
            <CategoryItem>카테고리</CategoryItem>
            <FontAwesome name="caret-down" size={24} color="white" />
          </TouchableOpacity>
        </CategoryList>
      </CategoryContainer>

      <ScrollContainer loading={loading}>
        <ScrollSwiper>
          {topRated.map((show, index) => (
            <Slide
              isTV={true}
              key={show.id}
              id={show.id}
              backDrop={show.backdrop_path}
              overView={show.overview}
              poster={show.poster_path}
              title={show.original_name}
              vote={show.vote_average}
              year={show.first_air_date}
              rank={index}
            />
          ))}
        </ScrollSwiper>

        <ScrollHorizontal title={"인기 TV프로그램"}>
          {popular.map((show, index) => (
            <Horizontal
              isTV={true}
              key={show.id}
              id={show.id}
              poster={show.poster_path}
              title={show.original_name}
              vote={show.vote_average}
              rank={index}
            />
          ))}
        </ScrollHorizontal>

        <ScrollHorizontal title={"이번주에 뜨는 TV프로그램"}>
          {thisweek.map((show, index) => (
            <Horizontal
              isTV={true}
              key={show.id}
              id={show.id}
              poster={show.poster_path}
              title={show.original_name}
              vote={show.vote_average}
              rank={index}
            />
          ))}
        </ScrollHorizontal>

        <ScrollVertical title={"오늘 방영한 프로그램"}>
          {airingToday.map((show, index) => (
            <Vertical
              isTV={true}
              key={show.id}
              id={show.id}
              poster={show.poster_path}
              title={show.original_name}
              vote={show.vote_average}
              overView={show.overview}
              rank={index}
            />
          ))}
        </ScrollVertical>
      </ScrollContainer>
    </>
  );
};

export default TVPresenter;
