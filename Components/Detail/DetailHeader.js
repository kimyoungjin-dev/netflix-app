import React from "react";
import { Dimensions } from "react-native";
import styled from "styled-components/native";
import { WebView } from "react-native-webview";
import { apiImage } from "../../api";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

const Container = styled.View``;

const Header = styled.View`
  height: ${HEIGHT / 2.5};
  align-items: flex-end;
  justify-content: flex-end;
`;

const PosterContainer = styled.Image`
  height: 100%;
  width: 100%;
`;

const DetailHeader = ({ results }) => {
  console.log(results);
  return (
    <Container>
      {results?.videos?.results[0] ? (
        <Header>
          <WebView
            style={{ width: WIDTH / 1 }}
            mixedContentMode="always"
            source={{
              uri: `https://www.youtube.com/embed/${results?.videos?.results?.[0]?.key}`,
            }}
            scrollEnabled={true}
            javaScriptEnabled={true}
            allowsFullscreenVideo={false}
          />
        </Header>
      ) : (
        <Header>
          <PosterContainer source={{ uri: apiImage(results.poster_path) }} />
        </Header>
      )}
    </Container>
  );
};

export default DetailHeader;
