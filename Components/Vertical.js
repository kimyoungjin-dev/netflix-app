import React from "react";
import { Text, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { apiImage } from "../api/api";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Container = styled.View`
  flex-direction: row;
  margin-bottom: 30px;
`;

const PosterBox = styled.View`
  height: 130px;
  width: 110px;
`;

const PosterContainer = styled.Image`
  height: 100%;
  width: 100%;
  border-radius: 10px;
  margin-right: 20px;
`;

const Contents = styled.View`
  width: 60%;
  margin-left: 15px;
`;

const Title = styled.Text`
  color: white;
  font-size: 22px;
  font-weight: bold;
`;

const Vote = styled.Text`
  color: white;
  font-size: 16px;
  margin: 4px 0px;
`;

const OverView = styled.Text`
  color: white;
  font-size: 16px;
  opacity: 0.7;
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

const NewEpisode = styled.View`
  width: 60%;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 10;
  left: 26;
`;

const TopEpisodeContents = styled.View`
  background-color: white;
  opacity: 0.7;
  width: 100%;
`;

const BotEpisodeContents = styled.View`
  background-color: red;
  width: 100%;
`;

const TopEpisodeText = styled.Text`
  font-size: 10px;
  color: black;
  text-align: center;
`;

const BotEpisodeText = styled.Text`
  color: white;
  text-align: center;
  font-size: 10;
`;

const Vertical = ({
  rank,
  isTV = false,
  poster,
  title,
  vote,
  overView,
  id,
}) => {
  const randomNumber = Math.floor(Math.random() * 3);

  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("Detail", {
          poster,
          title,
          vote,
          overView,
          isTV,
          id,
          rank,
        })
      }
    >
      <Container>
        <PosterBox>
          <PosterContainer source={{ uri: apiImage(poster) }} />

          {rank === randomNumber && (
            <Top10Container>
              <Top10Container>
                <TopText>Top</TopText>
                <Top10Text>10</Top10Text>
              </Top10Container>
            </Top10Container>
          )}

          {isTV && vote > 8.3 && (
            <>
              <NewEpisode>
                <TopEpisodeContents>
                  <TopEpisodeText>매주</TopEpisodeText>
                </TopEpisodeContents>
                <BotEpisodeContents>
                  <BotEpisodeText>새로운 에피소드</BotEpisodeText>
                </BotEpisodeContents>
              </NewEpisode>
            </>
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

        <Contents>
          <Title>{title}</Title>
          <Vote>⭐️ {vote} /10</Vote>
          {overView ? (
            <OverView numberOfLines={3}>{overView}</OverView>
          ) : (
            <Text style={{ color: "white", marginTop: 10 }}>
              "줄거리가 존재하지않습니다."
            </Text>
          )}
        </Contents>
      </Container>
    </TouchableOpacity>
  );
};

export default Vertical;
