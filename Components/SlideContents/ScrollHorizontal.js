import React from "react";
import Title from "../Title";
import { ScrollView } from "react-native";

const ScrollHorizontal = ({ title, children }) => {
  return (
    <>
      <Title title={title} />
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {children}
      </ScrollView>
    </>
  );
};

export default ScrollHorizontal;
