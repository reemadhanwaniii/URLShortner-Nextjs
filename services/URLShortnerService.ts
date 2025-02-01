import URLRepository from "@/repositories/URLRepository";
import shortId from 'shortid';

export class UrlShortnerService {
    private urlRepository;
    constructor() {
        this.urlRepository = new URLRepository();
    }

    async shortenURL(orignalUrl?: string) : Promise<string>{
        if(!orignalUrl) {
            return "";
        }
        let url = await this.urlRepository.getUrlByOriginalUrl(orignalUrl);
        if(url) {
            return url.shortUrl;
        }

        let shortUrl = shortId();
        url = await this.urlRepository.getUrlByShortUrl(shortUrl);
        while(url) {
            shortUrl = shortId();
            url = await this.urlRepository.getUrlByShortUrl(shortUrl);
        }

        await this.urlRepository.createUrl(orignalUrl,shortUrl);
        return shortUrl;
    }

    async getAllUrls() {
        return await this.urlRepository.getAllUrls();
    }

    async getUrlByShortUrl(shortUrl: string) {
        return await this.urlRepository.getUrlByShortUrl(shortUrl);
    }
}