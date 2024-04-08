// const BASE_URL = "https://inspired-spirit-e444f62316.strapiapp.com";
export const BASE_URL = process.env.BASE_URL || "http://127.0.0.1:1338";

export const api = (url: string, options?: RequestInit) => {
  return fetch(`${BASE_URL}/api${url}`, {
    headers: {
      "Content-Type": "application/json",
    },
    ...options,
  }).then((response) => response.json());
};
