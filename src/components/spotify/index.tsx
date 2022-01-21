import React, { ReactNode } from "react";
import { FaSpotify } from "react-icons/fa";

import useSWR from "swr";
import { SpotifyNowPlaying } from "../../services/spotify/types";
import swrFetcher from "../../services/swr/service";
import { TextHighlight } from "../shared/typography";
import {
  PlayingWrapper,
  SpotifyIcon,
  SpotifyName,
  MusicStatus
} from "./styles";

const Spotify = () => {
  const { data } = useSWR<SpotifyNowPlaying>("/api/spotify", swrFetcher);

  const playingMessage: ReactNode = data?.isPlaying ? (
    <p>
      Currently listening to <TextHighlight>{data?.title ?? ""} </TextHighlight>
      by
      <TextHighlight> {data?.artist ?? ""}</TextHighlight>
    </p>
  ) : (
    <p>Not Playing</p>
  );
  return (
    <PlayingWrapper>
      <SpotifyIcon>
        <FaSpotify />
      </SpotifyIcon>
      <SpotifyName>Spotify -</SpotifyName>
      <MusicStatus>{playingMessage}</MusicStatus>
    </PlayingWrapper>
  );
};

export default Spotify;
