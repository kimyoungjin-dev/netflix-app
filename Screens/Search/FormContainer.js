import React from "react";
import styled from "styled-components/native";
import { FontAwesome } from "@expo/vector-icons";
import { TextInput } from "react-native";

const Container = styled.View`
  width: 100%;
  height: 40px;
  background-color: black;
  align-items: center;
  justify-content: flex-start;
`;

const Form = styled.View`
  align-items: center;
  justify-content: center;
  height: 30px;
  flex-direction: row;
  width: 90%;
  background-color: gray;
  border-radius: 5px;
`;

const FormContainer = ({ onSubmit, onChange, word }) => {
  return (
    <Container>
      <Form>
        <FontAwesome
          name="search"
          size={17}
          color="white"
          style={{ marginRight: 10 }}
        />

        <TextInput
          style={{
            fontSize: 17,
            color: "white",
          }}
          placeholder="검색"
          placeholderTextColor="white"
          value={word}
          onChangeText={onChange}
          onSubmitEditing={onSubmit}
          autoCapitalize="none"
        />
      </Form>
    </Container>
  );
};

export default FormContainer;
