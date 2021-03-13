import React from "react";
import styled from "styled-components/native";
import { FontAwesome } from "@expo/vector-icons";
import { TextInput } from "react-native";

const Form = styled.View`
  background-color: rgb(23, 25, 30);
  align-items: center;
  justify-content: flex-start;
  height: 40px;
  flex-direction: row;
  padding-left: 20px;
`;

const FromContainer = ({ onSubmit, onChange, word }) => {
  return (
    <>
      <Form>
        <FontAwesome
          name="search"
          size={22}
          color="white"
          style={{ marginRight: 10 }}
        />

        <TextInput
          style={{ fontSize: 20, color: "white" }}
          placeholder="검색"
          placeholderTextColor="white"
          value={word}
          onChangeText={onChange}
          onSubmitEditing={onSubmit}
          autoCapitalize="none"
        />
      </Form>
    </>
  );
};

export default FromContainer;
