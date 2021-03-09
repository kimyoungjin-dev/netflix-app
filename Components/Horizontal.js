import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { apiImage } from "../api";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Container = styled.View`
  margin-right: 10px;
  margin-bottom: 20px;
`;

const PosterContainer = styled.Image`
  height: 160px;
  width: 130px;
  border-radius: 5px;
`;

const NewEpisode = styled.View`
  width: 50%;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 10;
  left: 30;
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

const Horizontal = ({ isTV = false, id, poster, title, vote }) => {
  const navigation = useNavigation();
  console.log(vote);

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("Detail", {
          id,
          poster,
          title,
          vote,
          isTV,
        })
      }
    >
      <Container>
        <PosterContainer source={{ uri: apiImage(poster) }} />
        {isTV && vote > 8.5 && (
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

        {vote > 7 && (
          <MaterialCommunityIcons
            name="netflix"
            size={20}
            color="red"
            style={{
              paddingLeft: 20,
              position: "absolute",
              left: -22,
              opacity: 0.8,
            }}
          />
        )}
      </Container>
    </TouchableOpacity>
  );
};

export default Horizontal;
