import React from "react";
import { useFonts } from "expo-font";
//file
import ScrollContainer from "../../Components/SlideContents/ScrollContainer";
import DetailHeader from "../../Components/Detail/DetailHeader";
import MovieInformation from "../../Components/Detail/MovieInformation";
import DetailVideo from "../../Components/Detail/DetailVideo";
import SubInformation from "../../Components/Detail/SubInformation";

const DetailPresenter = ({
  openBrowser,
  loading,
  results,
  showVideos,
  showToggle,
  videoToggle,
  video,
}) => {
  const [loaded] = useFonts({
    Noto_Sans: require("../../assets/fonts/Noto_Sans_JP/NotoSansJP-Black.otf"),
  });

  if (!loaded) {
    return null;
  }
  return (
    <>
      <DetailHeader results={results} />
      <ScrollContainer loading={loading}>
        <MovieInformation results={results} />
        <SubInformation results={results} openBrowser={openBrowser} />
        <DetailVideo
          results={results}
          showVideos={showVideos}
          showToggle={showToggle}
          video={video}
          videoToggle={videoToggle}
          openBrowser={openBrowser}
        />
      </ScrollContainer>
    </>
  );
};

export default DetailPresenter;
