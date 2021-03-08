import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from "expo-font";
import Tabs from "./Tabs";
import Detail from "../Screens/Detail";

const Stack = createStackNavigator();

export default () => {
  const [loaded] = useFonts({
    Noto_Sans: require("../assets/fonts/Noto_Sans_JP/NotoSansJP-Bold.otf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "black",
          borderBottomColor: "black",
          shadowColor: "black",
        },
        headerTintColor: "white",
        headerTitleStyle: { fontFamily: "Noto_Sans" },
      }}
    >
      <Stack.Screen name="Tabs" component={Tabs} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
};
