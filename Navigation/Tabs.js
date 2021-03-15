import React, { useLayoutEffect } from "react";
import Home from "../Screens/Home";
import Movie from "../Screens/Movie";
import TV from "../Screens/TV";
import Open from "../Screens/Open";
import Discovery from "../Screens/Discovery";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome } from "@expo/vector-icons";

const Tabs = createBottomTabNavigator();

export default ({ navigation, route }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "",
    });
  }, [route]);

  return (
    <Tabs.Navigator
      barStyle={{
        backgroundColor: "rgb(23,25,30)",
        padding: 15,
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;
          if (route.name === "홈") {
            iconName = "home";
          } else if (route.name === "Movie") {
            iconName = "film";
          } else if (route.name === "TV") {
            iconName = "tv";
          } else if (route.name === "공개예정") {
            iconName = "ravelry";
          } else if (route.name === "저장한 컨텐츠 목록") {
            iconName = "save";
          }

          return (
            <FontAwesome
              name={iconName}
              size={22}
              color={focused ? "white" : "gray"}
            />
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: "white",
        style: {
          backgroundColor: "black",
          borderTopColor: "black",
          inactiveTintColor: "gray",
          activeTintColor: "white",
        },
      }}
    >
      <Tabs.Screen name="공개예정" component={Open} />
      <Tabs.Screen name="홈" component={Home} />
      <Tabs.Screen name="Movie" component={Movie} />
      <Tabs.Screen name="TV" component={TV} />
      <Tabs.Screen name="저장한 컨텐츠 목록" component={Discovery} />
    </Tabs.Navigator>
  );
};
