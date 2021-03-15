import React from "react";
import styled from "styled-components/native";
import { Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5 } from "@expo/vector-icons";

const CategoryContainer = styled.View`
  padding: 10px 0px;
  flex-direction: row;
  background-color: black;
  justify-content: flex-end;
`;

const CategoryList = styled.View`
  flex-direction: row;
  align-items: center;
  width: 30%;
  justify-content: space-around;
`;

const Category = ({ movieGenre, tvGenre }) => {
  const navigation = useNavigation();

  return (
    <CategoryContainer>
      <CategoryList>
        <TouchableOpacity onPress={() => navigation.navigate("Search")}>
          <FontAwesome5 name="search" size={24} color="white" />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            navigation.navigate("DetailCategory", {
              movieGenre,
              tvGenre,
            })
          }
        >
          <Text style={{ color: "white", fontSize: 15 }}>카테고리</Text>
        </TouchableOpacity>
      </CategoryList>
    </CategoryContainer>
  );
};

export default Category;
