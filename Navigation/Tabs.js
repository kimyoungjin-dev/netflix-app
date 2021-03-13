import React, { useLayoutEffect } from "react";
import Home from "../Screens/Home";
import Movie from "../Screens/Movie";
import TV from "../Screens/TV";
import Search from "../Screens/Search";
import Discovery from "../Screens/Discovery";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { FontAwesome } from "@expo/vector-icons";

const Tabs = createMaterialBottomTabNavigator();

export default ({ navigation, route }) => {
  useLayoutEffect(() => {
    navigation.setOptions({ title: "" });
  }, [route]);

  return (
    <Tabs.Navigator
      barStyle={{ backgroundColor: "rgb(23,25,30)", padding: 15 }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;
          if (route.name === "홈") {
            iconName = "home";
          } else if (route.name === "Movie") {
            iconName = "film";
          } else if (route.name === "TV") {
            iconName = "tv";
          } else if (route.name === "검색") {
            iconName = "search";
          } else if (route.name === "저장한 컨텐츠 목록") {
            iconName = "save";
          }

          return (
            <FontAwesome
              name={iconName}
              size={23}
              color={focused ? "white" : "rgb(232,238,248)"}
            />
          );
        },
      })}
    >
      <Tabs.Screen name="Movie" component={Movie} />
      <Tabs.Screen name="홈" component={Home} />
      <Tabs.Screen name="TV" component={TV} />
      <Tabs.Screen name="검색" component={Search} />
      <Tabs.Screen name="저장한 컨텐츠 목록" component={Discovery} />
    </Tabs.Navigator>
  );
};
