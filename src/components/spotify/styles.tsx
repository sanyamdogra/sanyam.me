import styled from "styled-components";

export const PlayingWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
`;

export const MusicStatus = styled.p``;

export const SpotifyIcon = styled.div`
  color: rgb(30, 215, 96);
  font-size: 28px;
  margin-right: 0.5rem;
  line-height: 0;
`;

export const SpotifyName = styled.span`
  color: var(--text-color-grey);
  margin-right: 0.3rem;
  white-space: nowrap;
`;

export const SongDetail = styled.a`
  color: var(--color-primary);
  text-decoration: none;
  font-weight: 500;
  margin: 0 0.3rem;
`;
