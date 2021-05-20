import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Tabs from "./Tabs";
import Search from "../Screens/Search";
import Detail from "../Screens/Detail";
import Credit from "../Components/Detail/Credit";
import DetailCategory from "../Components/Detail/DetailCategory";
import CategoryNavigation from "../Components/Genre/CategoryNavigation";
import HeaderRightStyle from "./HeaderRightStyle";
import HeaderLeftStyle from "./HeaderLeftStyle";

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          borderBottomColor: "rgb(23,25,30)",
          shadowColor: "rgb(23,25,30)",
          height: 100,
          backgroundColor: "black",
        },
      }}
    >
      <Stack.Screen
        name="Tabs"
        component={Tabs}
        options={{
          headerLeft: () => <HeaderLeftStyle />,
          headerRight: () => <HeaderRightStyle />,
        }}
      />

      <Stack.Screen
        name="Search"
        component={Search}
        options={{
          headerBackTitleVisible: false,
          headerTintColor: "white",
          headerTitleStyle: { color: "black" },
          headerLeftContainerStyle: { paddingLeft: 15 },
        }}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{
          headerBackTitleVisible: false,
          headerTitleStyle: { fontSize: 15 },
          headerTintColor: "white",
          headerRight: () => <HeaderRightStyle />,
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
      <Stack.Screen
        name="DetailCategory"
        component={DetailCategory}
        options={{
          headerBackTitleVisible: false,
          headerTintColor: "white",
          headerTitleStyle: { color: "gray", fontSize: 20 },
        }}
      />

      <Stack.Screen
        name="CategoryNavigation"
        component={CategoryNavigation}
        options={{
          headerTitleStyle: { color: "white" },
          headerLeft: () => <HeaderLeftStyle />,
          headerRight: () => <HeaderRightStyle />,
        }}
      />
    </Stack.Navigator>
  );
};
