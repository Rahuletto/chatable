// Edge Function
export const runtime = "edge";


export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const input = searchParams.get("input");

  const r = await fetch(
    `https://simplyapi.js.org/chatbot?message=${input}&developer=Rahuletto`,
    {
      cache: "no-cache",
    }
  );

  return new Response(await r.text(), {
    status: 200,
    headers: {
      "content-type": "application/json",
    },
  });
}
