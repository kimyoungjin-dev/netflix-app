import React from "react";
import { Dimensions } from "react-native";
import Swiper from "react-native-web-swiper";
import styled from "styled-components/native";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

const SlideContainer = styled.View`
  height: ${HEIGHT / 4}px;
  width: 100%;
  margin-bottom: 10px;
`;

const ScrollSwiper = ({ children }) => {
  return (
    <SlideContainer>
      <Swiper
        loop
        timeout={3}
        springConfig={{ speed: 2 }}
        controlsEnabled={false}
      >
        {children}
      </Swiper>
    </SlideContainer>
  );
};

export default ScrollSwiper;
