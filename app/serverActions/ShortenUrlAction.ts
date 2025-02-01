'use server';

import { UrlShortnerService } from "@/services/URLShortnerService";
import { revalidatePath } from "next/cache";

export const shortenUrl = async (formData: FormData) => {
    const originalUrl : string = formData.get('originalUrl') as string;
    console.log("Original url is ",originalUrl);
    const shortnerService = new UrlShortnerService();
    const shortUrl = shortnerService.shortenURL(originalUrl);
    console.log("short url is",shortUrl)
    revalidatePath('/urls');
}