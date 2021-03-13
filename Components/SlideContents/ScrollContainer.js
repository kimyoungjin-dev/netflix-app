import React from "react";
import { ActivityIndicator, ScrollView } from "react-native";

const ScrollContainer = ({ loading, children }) => {
  return (
    <ScrollView
      contentContainerStyle={{
        justifyContent: loading ? "center" : "flex-start",
        flex: loading ? 1 : "auto",
        paddingLeft: 5,
        paddingBottom: 80,
        paddingTop: 10,
      }}
      style={{
        backgroundColor: "black",
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
