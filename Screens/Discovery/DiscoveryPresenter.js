import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";
import { apiImage } from "../../api/api";

const Container = styled.View`
  flex: 1;
  background-color: black;
`;
const Card = styled.View``;

const PosterContainer = styled.Image``;

const DiscoveryPresenter = ({ discovery }) => {
  console.log(discovery);
  return (
    <Container>
      <Card>
        <PosterContainer source={{ uri: apiImage() }} />
      </Card>
    </Container>
  );
};

export default DiscoveryPresenter;
