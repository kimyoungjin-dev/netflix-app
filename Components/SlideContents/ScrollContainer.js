import React from "react";
import { ActivityIndicator, ScrollView } from "react-native";

const ScrollContainer = ({ loading, children }) => {
  return (
    <ScrollView
      contentContainerStyle={{
        justifyContent: loading ? "center" : "flex-start",
        flex: loading ? 1 : "auto",
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 80,
        paddingTop: 10,
      }}
      style={{
        backgroundColor: "rgb(23,25,30)",
      }}
    >
      {loading ? (
        <ActivityIndicator color={"white"} size="large" />
      ) : (
        <>{children}</>
      )}
    </ScrollView>
  );
};

export default ScrollContainer;
