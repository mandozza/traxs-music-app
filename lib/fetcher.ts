export default function fetcher(url: string, data = undefined) {
  return fetch(`${window.location.origin}/apu${url}`, {
    method: data ? "POST" : "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: data ? JSON.stringify(data) : undefined,
  });
}
