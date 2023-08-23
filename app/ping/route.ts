// Edge Function
export const runtime = "edge";


export async function GET(req: Request) {

  const r = await fetch(
    `https://simplyapi.js.org/chatbot?message=ping`
  );

  return new Response(await r.text(), {
    status: 200,
    headers: {
      "content-type": "application/json",
    },
  });
}
