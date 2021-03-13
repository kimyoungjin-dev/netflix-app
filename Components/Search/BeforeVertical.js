import React from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { apiImage } from "../../api/api";
import { MaterialCommunityIcons, FontAwesome } from "@expo/vector-icons";

const Container = styled.View`
  flex-direction: row;
  margin-bottom: 10px;
`;

const PosterBox = styled.View`
  height: 80px;
  width: 130px;
`;

const PosterContainer = styled.Image`
  height: 100%;
  width: 100%;
  border-radius: 4px;
  margin-right: 20px;
`;

const Contents = styled.View`
  width: 90%;
  flex-direction: row;
  margin-left: 20px;
`;

const TitleContainer = styled.View`
  width: 50%;
  justify-content: center;
`;

const IconContainer = styled.View`
  justify-content: center;
  align-items: center;
  width: 20%;
`;

const Title = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 20px;
  justify-content: center;
`;

const Top10Container = styled.View`
  background-color: red;
  align-items: center;
  justify-content: center;
  align-items: center;
  padding: 3px;
  position: absolute;
  top: 0;
  left: 0;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 15px;
`;

const TopText = styled.Text`
  color: white;
  font-size: 14px;
  font-weight: bold;
  font-family: "Noto_Sans_JP";
`;

const Top10Text = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 19px;
  font-family: "Noto_Sans_JP";
`;

const BeforeVertical = ({ rank, isTV = false, vote, poster, title, id }) => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <Container>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Detail", {
              poster,
              title,
              isTV,
              id,
              rank,
            })
          }
        >
          <PosterBox>
            <PosterContainer source={{ uri: apiImage(poster) }} />

            {rank === 1 && (
              <Top10Container>
                <Top10Container>
                  <TopText>Top</TopText>
                  <Top10Text>10</Top10Text>
                </Top10Container>
              </Top10Container>
            )}
            {vote > 8 && (
              <MaterialCommunityIcons
                name="netflix"
                size={24}
                color="red"
                style={{
                  paddingLeft: 20,
                  position: "absolute",
                  right: 0,
                  opacity: 0.8,
                }}
              />
            )}
          </PosterBox>
        </TouchableOpacity>
        <Contents>
          <TitleContainer>
            <Title>{title}</Title>
          </TitleContainer>
          <IconContainer>
            <FontAwesome name="play-circle" size={40} color="white" />
          </IconContainer>
        </Contents>
      </Container>
    </ScrollView>
  );
};

export default BeforeVertical;
