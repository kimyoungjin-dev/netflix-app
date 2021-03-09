import React, { useLayoutEffect } from "react";
import Movie from "../Screens/Movie";
import TV from "../Screens/TV";
import Search from "../Screens/Search";
import Discovery from "../Screens/Discovery";
import { Ionicons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

const Tabs = createMaterialBottomTabNavigator();

export default ({ navigation, route }) => {
  useLayoutEffect(() => {
    navigation.setOptions({ title: "" });
  }, [route]);

  return (
    <Tabs.Navigator
      activeColor="white"
      barStyle={{ backgroundColor: "rgb(23,25,30)" }}
      tabBarOptions={{ activeTintColor: "white", inactiveTintColor: "green" }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;
          if (route.name === "Movie") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "TV") {
            iconName = focused ? "tv" : "tv-outline";
          } else if (route.name === "Search") {
            iconName = focused ? "search-circle" : "search-circle-outline";
          } else if (route.name === "Discovery") {
            iconName = focused ? "heart-circle" : "heart-circle-outline";
          }
          return (
            <Ionicons
              name={iconName}
              size={route.name === "Search" ? 25 : 22}
              color={focused ? "white" : "rgb(232,238,248)"}
            />
          );
        },
      })}
    >
      <Tabs.Screen name="Movie" component={Movie} />
      <Tabs.Screen name="TV" component={TV} />
      <Tabs.Screen name="Search" component={Search} />
      <Tabs.Screen name="Discovery" component={Discovery} />
    </Tabs.Navigator>
  );
};
