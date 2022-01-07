import React, { ReactNode } from "react";
import { FaSpotify } from "react-icons/fa";
import styled from "styled-components";
import useSWR from "swr";
import { SpotifyNowPlaying } from "../../services/spotify/types";
import swrFetcher from "../../services/swr/service";

const Spotify = () => {
  const { data } = useSWR<SpotifyNowPlaying>("/api/spotify", swrFetcher);

  const playingMessage: ReactNode | string = data?.isPlaying ? (
    <>
      Currently listening to <ColorName>{data?.title}</ColorName> by
      <ColorName>{data?.artist}</ColorName>
    </>
  ) : (
    "Not Playing"
  );

  return (
    <PlayingWrapper>
      <SpotifyIcon>
        <FaSpotify />
      </SpotifyIcon>
      <SpotifyName>Spotify - </SpotifyName> {playingMessage}
    </PlayingWrapper>
  );
};

export default Spotify;

const PlayingWrapper = styled.div`
  display: flex;
  align-items: center;
  line-height: 0;
  margin: 2rem 0;
`;

const ColorName = styled.span`
  color: var(--color-primary);
  margin: 0 0.3rem;
  font-weight: 600;
`;

const SpotifyIcon = styled.span`
  color: rgb(30, 215, 96);
  font-size: 30px;
  margin-right: 0.5rem;
`;

const SpotifyName = styled.span`
  color: var(--text-color-grey);
  margin-right: 0.3rem;
`;
