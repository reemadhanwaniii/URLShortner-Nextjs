import { UrlShortnerService } from "@/services/URLShortnerService";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const body= await req.json();
    const originalUrl = body.originalUrl;
    const shortenerService = new UrlShortnerService();
    const shortUrl = await shortenerService.shortenURL(originalUrl);
    return NextResponse.json({shortUrl}, {status: 201});
}
