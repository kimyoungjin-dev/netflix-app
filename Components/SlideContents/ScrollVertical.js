import React from "react";
import { ScrollView } from "react-native";
import Title from "../Title";

const ScrollVertical = ({ title, children }) => {
  return (
    <>
      <Title title={title} />
      <ScrollView>{children}</ScrollView>
    </>
  );
};

export default ScrollVertical;
