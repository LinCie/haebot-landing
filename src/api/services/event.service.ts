import { api } from "..";

async function sendEvent(event: string) {
  const response = await api.post("event", {
    headers: {
      "content-type": "application/json",
    },
    json: { event },
  });

  return response;
}

export { sendEvent };
