import React, { ReactNode } from "react";
import { FaSpotify } from "react-icons/fa";
import styled from "styled-components";
import useSWR from "swr";
import { SpotifyNowPlaying } from "../../services/spotify/types";
import swrFetcher from "../../services/swr/service";
import { TextHighlight } from "../shared/typography";

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
      <SpotifyName>Spotify - </SpotifyName>
      <MusicStatus>{playingMessage}</MusicStatus>
    </PlayingWrapper>
  );
};

export default Spotify;

const PlayingWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 2rem 0;
`;

const MusicStatus = styled.span``;

const SpotifyIcon = styled.div`
  color: rgb(30, 215, 96);
  font-size: 30px;
  margin-right: 0.5rem;
  line-height: 0;
`;

const SpotifyName = styled.span`
  color: var(--text-color-grey);
  margin-right: 0.3rem;
`;
