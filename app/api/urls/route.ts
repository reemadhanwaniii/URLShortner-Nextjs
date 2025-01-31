import { NextResponse } from "next/server";
import { UrlShortnerService } from "@/services/URLShortnerService";
import { cache } from "react";

const fetchUrls = cache(async () => {
    const shortenerService = new UrlShortnerService();
    return await shortenerService.getAllUrls();
})

export async function GET() {

    return NextResponse.json({urls: await fetchUrls()});
}