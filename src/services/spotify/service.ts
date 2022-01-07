import {
  SPOTIFY_NOW_PLAYING_ENDPOINT,
  SPOTIFY_TOKEN_ENDPOINT,
} from "./constants";

const clientId = process.env.SPOTIFY_CLIENT_ID;
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN ?? "";

const buffer = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");

const bodyResp: Record<string, string> = {
  grant_type: "refresh_token",
  refresh_token: refreshToken,
};
export const getAccessToken = async (): Promise<any> => {
  const response = await fetch(SPOTIFY_TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${buffer}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams(bodyResp).toString(),
  });
  return response.json();
};

export const getNowPlaying = async (): Promise<any> => {
  const { access_token } = await getAccessToken();

  return fetch(SPOTIFY_NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};
