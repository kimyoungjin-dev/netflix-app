import React, { useState } from "react";
import { ActivityIndicator, RefreshControl, ScrollView } from "react-native";

const ScrollContainer = ({
  loading,
  children,
  refreshing,
  contentContainerStyle,
}) => {
  const [refresh, setRefresh] = useState(false);

  const onFreshing = async () => {
    setRefresh(true);
    await refreshing();
    setRefresh(false);
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          onRefresh={onFreshing}
          refreshing={refresh}
          tintColor="white"
        />
      }
      contentContainerStyle={{
        justifyContent: loading ? "center" : "flex-start",
        flex: loading ? 1 : "auto",
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 80,
        paddingTop: 10,
        ...contentContainerStyle,
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
