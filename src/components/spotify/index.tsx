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
  MusicStatus,
  SongDetail
} from "./styles";

const Spotify = () => {
  const { data } = useSWR<SpotifyNowPlaying>("/api/spotify", swrFetcher);
  console.log(data);

  const playingMessage: ReactNode = data?.isPlaying ? (
    <p>
      Currently listening to
      <SongDetail
        target='_blank'
        rel='noopener noreferrer'
        href={data?.songUrl}
      >
        {data?.title ?? ""}
      </SongDetail>
      by
      <SongDetail
        target='_blank'
        rel='noopener noreferrer'
        href={data?.songUrl}
      >
        {data?.artist ?? ""}
      </SongDetail>
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
