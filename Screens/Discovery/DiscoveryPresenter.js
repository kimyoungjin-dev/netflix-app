import React, { useState } from "react";
import { Dimensions, PanResponder, Animated } from "react-native";
import styled from "styled-components/native";
import { apiImage } from "../../api/api";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

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
  const [topIndex, setTopIndex] = useState(0);
  const nextCard = () => setTopIndex((card) => card + 1);

  const position = new Animated.ValueXY();
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (event, { dx, dy }) => {
      position.setValue({ x: dx, y: dy });
    },
    onPanResponderRelease: (event, { dx, dy }) => {
      if (dx >= 250) {
        Animated.spring(position, {
          toValue: {
            x: WIDTH + 100,
            y: dy,
          },
        }).start(nextCard);
      } else if (dx <= -250) {
        Animated.spring(position, {
          toValue: {
            x: -WIDTH - 100,
            y: dy,
          },
        }).start(nextCard);
      } else {
        Animated.spring(position, {
          toValue: {
            x: 0,
            y: 0,
          },
        }).start();
      }
    },
  });

  const rotationValues = position.x.interpolate({
    inputRange: [-100, 0, 100],
    outputRange: ["-10deg", "0deg", "10deg"],
    extrapolate: "clamp",
  });

  const secondCardOpacity = position.x.interpolate({
    inputRange: [-255, 0, 255],
    outputRange: [1, 0.2, 1],
  });

  const secondCardScale = position.x.interpolate({
    inputRange: [-255, 0, 255],
    outputRange: [1, 0.8, 1],
  });

  ///return
  return (
    <Container>
      {discovery.map((movie, index) => {
        if (index < topIndex) {
          return null;
        } else if (index === topIndex) {
          return (
            <Animated.View
              style={{
                ...styles,
                transform: [
                  ...position.getTranslateTransform(),
                  { rotate: rotationValues },
                ],
              }}
              key={movie.id}
              {...panResponder.panHandlers}
            >
              <PosterContainer source={{ uri: apiImage(movie.poster_path) }} />
            </Animated.View>
          );
        } else if (index === topIndex + 1) {
          return (
            <Animated.View
              style={{
                ...styles,
                zIndex: -1,
                opacity: secondCardOpacity,
                transform: [{ scale: secondCardScale }],
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
              zIndex: -index,
              opacity: 0,
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
