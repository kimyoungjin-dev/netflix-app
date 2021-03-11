import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import Horizontal from "../../Components/Horizontal";
import Slide from "../../Components/Slide";
import ScrollContainer from "../../Components/SlideContents/ScrollContainer";
import ScrollHorizontal from "../../Components/SlideContents/ScrollHorizontal";
import ScrollSwiper from "../../Components/SlideContents/ScrollSwiper";
import ScrollVertical from "../../Components/SlideContents/ScrollVertical";
import Vertical from "../../Components/Vertical";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const CategoryContainer = styled.View`
  background-color: rgb(23, 25, 30);
  padding: 10px 0px;
  padding-left: 30px;
`;

const CategoryList = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 60%;
`;

const CatagoryMainItem = styled.Text`
  color: white;
  font-size: 20px;
  margin-right: 5px;
`;

const CategoryItem = styled.Text`
  color: white;
  font-size: 16px;
  margin-right: 5px;
`;

const TVPresenter = ({
  topRated,
  popular,
  airingToday,
  thisweek,
  loading,
  movieCategory: { movieGenre },
  showCategory: { tvGenre },
}) => {
  const navigation = useNavigation();
  return (
    <>
      <CategoryContainer>
        <CategoryList>
          <TouchableOpacity
            style={{ flexDirection: "row", alignItems: "center" }}
            onPress={() => navigation.navigate("TV")}
          >
            <CatagoryMainItem>TV 프로그램</CatagoryMainItem>
            <FontAwesome name="caret-down" size={24} color="white" />
          </TouchableOpacity>

          <TouchableOpacity
            style={{ flexDirection: "row", alignItems: "center" }}
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
