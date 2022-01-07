export interface SpotifyArtist {
  external_urls: Record<string, string>;
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
}

export interface SpotifyNowPlaying {
  album: string;
  albumImageUrl: string;
  artist: string;
  isPlaying: boolean;
  songUrl: string;
  title: string;
}
