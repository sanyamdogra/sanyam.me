import React, { ReactNode } from "react";
import { FaSpotify } from "react-icons/fa";

import useSWR from "swr";
import { SpotifyNowPlaying } from "../../services/spotify/types";
import swrFetcher from "../../services/swr/service";
import {
  PlayingWrapper,
  SpotifyIcon,
  SpotifyName,
  MusicStatus,
  SongDetail
} from "./styles";

const Spotify = () => {
  const { data } = useSWR<SpotifyNowPlaying>("/api/spotify", swrFetcher);

  const playingMessage: ReactNode = data?.isPlaying ? (
    <>
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
    </>
  ) : (
    <>Not Playing</>
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
