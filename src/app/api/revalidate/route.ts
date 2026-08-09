import { revalidateTag } from "next/cache";
import type { NextRequest } from "next/server";
import { parseBody } from "next-sanity/webhook";

type SanityWebhookBody = {
  _type?: string;
};

export async function POST(request: NextRequest) {
  const secret = process.env.SANITY_REVALIDATE_SECRET;
  if (!secret) {
    return Response.json(
      { message: "Revalidation is not configured" },
      { status: 503 },
    );
  }

  const { isValidSignature, body } = await parseBody<SanityWebhookBody>(
    request,
    secret,
  );

  if (!isValidSignature) {
    return Response.json({ message: "Invalid signature" }, { status: 401 });
  }

  if (body?._type) {
    revalidateTag(body._type, "max");
  }

  return Response.json({ revalidated: true, type: body?._type ?? null });
}
