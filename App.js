import AppLoading from "expo-app-loading";
import { Asset } from "expo-asset";
import React, { useState } from "react";
import { Image } from "react-native";
import * as Font from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import Stack from "./Navigation//Stack";

const getImages = (images) =>
  images.map((image) => {
    if (typeof image === "string") {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });

const getFonts = (fonts) => fonts.map((font) => [Font.loadAsync(font)]);

const App = () => {
  const [loading, setLoading] = useState(false);

  const loadAssets = () => {
    const images = getImages([
      "https://images.unsplash.com/photo-1615149956009-f9fa32fc75e5?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      require("./assets/loading.gif"),
    ]);
    const fonts = getFonts([Ionicons.font], [FontAwesome.font]);
    return Promise.all([...images, ...fonts]);
  };
  const onFinish = () => setLoading(true);
  return (
    <>
      {loading ? (
        <NavigationContainer>
          <Stack />
        </NavigationContainer>
      ) : (
        <AppLoading
          startAsync={loadAssets}
          onError={console.error}
          onFinish={onFinish}
        />
      )}
    </>
  );
};

export default App;
