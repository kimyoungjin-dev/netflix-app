import React from "react";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const CategoryContainer = styled.View`
  padding: 10px 0px;
  flex-direction: row;
  background-color: black;
  justify-content: flex-end;
`;

const CategoryList = styled.View`
  flex-direction: row;
  justify-content: flex-end;
`;

const CategoryItem = styled.Text`
  color: white;
  font-size: 20px;
  padding-right: 20px;
`;

const Category = ({ movieGenre, tvGenre }) => {
  const navigation = useNavigation();

  return (
    <CategoryContainer>
      <CategoryList>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("DetailCategory", {
              movieGenre,
              tvGenre,
            })
          }
        >
          <CategoryItem>카테고리</CategoryItem>
        </TouchableOpacity>
      </CategoryList>
    </CategoryContainer>
  );
};

export default Category;
