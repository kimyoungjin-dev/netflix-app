import React, { useState, useEffect } from "react";
import { Text, TouchableOpacity } from "react-native";
import ScrollContainer from "../SlideContents/ScrollContainer";
import { apiMovieGenre } from "../../api/MovieGenreApi";
import { apiTVGenre } from "../../api/TVGenreApi";
import Vertical from "../Vertical";
import { Ionicons } from "@expo/vector-icons";
import styled from "styled-components/native";

const ButtonContainer = styled.View`
  flex-direction: row;
  background-color: black;
  padding-left: 25px;
  align-items: center;
  padding-top: 5px;
`;

const CategoryNavigation = ({ navigation, route }) => {
  const {
    params: {
      genre: { name, id },
      isTV,
    },
  } = route;

  useEffect(() => {
    navigation.setOptions({ title: `장르 : ${name}` });
  }, []);

  const [loading, setLoading] = useState(true);

  const [array, setArray] = useState({
    data: [],
    dataError: null,
  });

  const getData = async () => {
    const [data, dataError] = isTV
      ? await apiTVGenre.discoveryGenre(id)
      : await apiMovieGenre.discoveryGenre(id);

    setArray({
      data,
      dataError,
    });
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <ButtonContainer>
        <TouchableOpacity
          onPress={() => navigation.navigate("홈")}
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Ionicons name="chevron-back-outline" size={24} color="white" />
          <Text style={{ color: "white" }}>뒤로가기</Text>
        </TouchableOpacity>
      </ButtonContainer>

      <ScrollContainer loading={loading} refreshing={getData}>
        {array.data &&
          array.data.map((value, index) => (
            <Vertical
              key={value.id}
              poster={value.poster_path}
              title={value.original_title || value.original_name}
              vote={value.vote_average}
              overView={value.overview}
              id={value.id}
              rank={index}
              isTV={value.original_name ? true : false}
            />
          ))}
      </ScrollContainer>
    </>
  );
};

export default CategoryNavigation;
