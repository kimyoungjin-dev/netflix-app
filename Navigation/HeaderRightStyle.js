import React from "react";
import styled from "styled-components/native";
import { MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";

const Container = styled.View`
  flex-direction: row;
  justify-content: space-around;
  width: 60px;
  align-items: center;
`;

const Div = styled.View`
  background-color: skyblue;
  border-radius: 5px;
  margin-left: 10px;
`;

const HeaderRightStyle = () => {
  return (
    <Container>
      <MaterialCommunityIcons name="gift-outline" size={26} color="white" />
      <Div>
        <FontAwesome5 name="smile" size={26} color="white" />
      </Div>
    </Container>
  );
};

export default HeaderRightStyle;
