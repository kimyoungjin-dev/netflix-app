import React, { useState } from "react";
import { Dimensions, PanResponder, Animated } from "react-native";
import { event } from "react-native-reanimated";
import styled from "styled-components/native";
import { apiImage } from "../../api/api";

const { height: HEIGHT } = Dimensions.get("window");

const Container = styled.View`
  flex: 1;
  background-color: black;
  align-items: center;
`;
const Card = styled.View`
  top: 30;
  height: ${HEIGHT / 1.5}px;
  width: 90%;
  position: absolute;
`;

const PosterContainer = styled.Image`
  border-radius: 20px;
  height: 100%;
  width: 100%;
`;

///////styles

const styles = {
  top: 30,
  height: HEIGHT / 1.5,
  width: "90%",
  position: "absolute",
};

///////components
const DiscoveryPresenter = ({ discovery }) => {
  console.log(discovery);
  const [topIndex, setTopIndex] = useState(0);

  const position = new Animated.ValueXY();
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (event, { dx, dy }) => {
      position.setValue({ x: dx, y: dy });
    },
    onPanResponderRelease: () => {
      Animated.spring(position, {
        toValue: {
          x: 0,
          y: 0,
        },
      }).start();
    },
  });

  return (
    <Container>
      {discovery.reverse().map((movie, index) => {
        if (index === topIndex) {
          return (
            <Animated.View
              style={{
                ...styles,
                zIndex: 1,
                transform: [...position.getTranslateTransform()],
              }}
              key={movie.id}
              {...panResponder.panHandlers}
            >
              <PosterContainer source={{ uri: apiImage(movie.poster_path) }} />
            </Animated.View>
          );
        }
        return (
          <Animated.View
            style={{
              ...styles,
            }}
            key={movie.id}
            {...panResponder.panHandlers}
          >
            <PosterContainer source={{ uri: apiImage(movie.poster_path) }} />
          </Animated.View>
        );
      })}
    </Container>
  );
};

export default DiscoveryPresenter;
