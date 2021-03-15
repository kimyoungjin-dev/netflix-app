import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { apiImage } from "../api/api";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Container = styled.View`
  margin-right: 10px;
  margin-bottom: 10px;
`;

const PosterBox = styled.View`
  height: 140px;
  width: 110px;
`;

const PosterContainer = styled.Image`
  height: 100%;
  width: 100%;
  border-radius: 4px;
`;

const NewEpisode = styled.View`
  width: 60%;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 10;
  left: 25;
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

const Top3Container = styled.View`
  background-color: red;
  justify-content: center;
  align-items: center;
  padding: 2px;
  position: absolute;
  top: 0;
  left: 0;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 15px;
`;

const TopText = styled.Text`
  color: white;
  font-size: 10px;
  font-weight: bold;
`;

const Top3 = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 14px;
`;

const randomNumber = Math.floor(Math.random() * 3);

const Horizontal = ({ isTV = false, id, poster, title, vote, rank }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("Detail", {
          id,
          poster,
          title,
          vote,
          isTV,
          rank,
        })
      }
    >
      <Container>
        <PosterBox>
          <PosterContainer source={{ uri: apiImage(poster) }} />

          {rank < 3 && vote > 8.4 && (
            <Top3Container>
              <TopText>Top</TopText>
              <Top3>3</Top3>
            </Top3Container>
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
      </Container>
    </TouchableOpacity>
  );
};

export default Horizontal;
