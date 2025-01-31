import { NextResponse } from "next/server";

export async function GET(request: Request, {params}:{params: {id: string}}) {
    const id = params;
    return NextResponse.json({
        id: id,
        response: "hii from /api/id"
    })
}