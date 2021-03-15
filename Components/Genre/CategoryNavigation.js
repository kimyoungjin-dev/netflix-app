import React, { useState, useEffect } from "react";
import { Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import ScrollContainer from "../SlideContents/ScrollContainer";
import { apiMovieGenre } from "../../api/MovieGenreApi";
import { apiTVGenre } from "../../api/TVGenreApi";
import Vertical from "../Vertical";

const goBackStyles = {
  flexDirection: "row",
  backgroundColor: "black",
  paddingLeft: 25,
  alignItems: "center",
  paddingTop: 5,
};

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
      <TouchableOpacity
        style={{ ...goBackStyles }}
        onPress={() => navigation.navigate("홈")}
      >
        <Ionicons name="caret-back-sharp" size={16} color="white" />
        <Text style={{ color: "white", marginLeft: 5 }}>뒤로가기</Text>
      </TouchableOpacity>
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
