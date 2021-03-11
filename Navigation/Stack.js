import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import Tabs from "./Tabs";
import Detail from "../Screens/Detail";
import styled from "styled-components/native";
import Credit from "../Components/Detail/Credit";
import Category from "../Components/Detail/Category";

const Container = styled.View`
  flex-direction: row;
  justify-content: space-around;
  width: 120px;
  align-items: center;
`;

const Div = styled.View`
  background-color: skyblue;
  padding: 3px;
  border-radius: 3px;
  opacity: 0.8;
`;

const Stack = createStackNavigator();

export default () => {
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            borderBottomColor: "rgb(23,25,30)",
            shadowColor: "rgb(23,25,30)",
            backgroundColor: "rgb(23,25,30)",
            height: 100,
          },
        }}
      >
        <Stack.Screen
          name="Tabs"
          component={Tabs}
          options={{
            headerLeft: () => (
              <MaterialCommunityIcons
                name="netflix"
                size={50}
                color="red"
                style={{ paddingLeft: 20 }}
              />
            ),
            headerRight: () => (
              <Container>
                <MaterialCommunityIcons
                  name="gift-outline"
                  size={30}
                  color="white"
                />
                <Div>
                  <FontAwesome5 name="smile" size={30} color="white" />
                </Div>
              </Container>
            ),
          }}
        />
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={{
            headerBackTitleVisible: false,
            headerTintColor: "white",
            headerRight: () => (
              <Container>
                <MaterialCommunityIcons
                  name="gift-outline"
                  size={30}
                  color="white"
                />
                <Div>
                  <FontAwesome5 name="smile" size={30} color="white" />
                </Div>
              </Container>
            ),
          }}
        />
        <Stack.Screen
          name="Credit"
          component={Credit}
          options={{
            headerBackTitleVisible: false,
            headerTintColor: "white",
            headerTitleStyle: { fontSize: 24, fontWeight: "bold" },
          }}
        />
      </Stack.Navigator>
      <Stack.Screen name="category" component={Category} />
    </>
  );
};
