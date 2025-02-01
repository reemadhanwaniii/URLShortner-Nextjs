import { NextResponse } from "next/server";
import { UrlShortnerService } from "@/services/URLShortnerService";
import { cache } from "react";

const fetchUrls = cache(async () => {
    const shortenerService = new UrlShortnerService();
    return await shortenerService.getAllUrls();
})

export async function GET() {

    const response =  NextResponse.json({urls: await fetchUrls()})
    response.headers.set('Cache-control','public,max-age=60 s-maxage=60, stale-while-revalidate=59');
    return response;
}