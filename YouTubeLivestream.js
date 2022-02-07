class YouTubeLivestream {

    constructor(ChannelID, API_Key, autoQuery = true) {
        this.channelId = ChannelID;
        this.API_Key = API_Key;

        this.part = "id,snippet";
        this.eventType = "live";
        this.type = "video";

        this.getAddress = "https://www.googleapis.com/youtube/v3/search?";

        this.default_embed_width = "560";
        this.default_embed_height = "315";
        this.default_ratio = this.default_embed_width / this.default_embed_height;

        this.embed_width = this.default_embed_width;
        this.embed_height = this.default_embed_height;

        this.embed_autoplay = true;

        if (autoQuery == true) { this.queryIt(); }
    }

    async queryIt() {
        this.queryData = {
            part: this.part,
            channelId: this.channelId,
            eventType: this.eventType,
            type: this.type,
            key: this.API_Key,
        }

        this.getQuery = new URLSearchParams(this.queryData).toString(); // transform array of data in url query
        this.queryString = this.getAddress + this.getQuery;

        const jsonResponse = await fetch(this.queryString); // pure server response
        this.objectResponse = await jsonResponse.json() // decode as object
        
        await this.isLive();
        if (this.isLive) {
            this.live_video_id = this.objectResponse.items[0].id.videoId;
            this.live_video_title = this.objectResponse.items[0].snippet.title;
            this.live_video_description = this.objectResponse.items[0].snippet.description;

            this.live_video_published_at = this.objectResponse.items[0].snippet.publishedAt;
            this.live_video_thumb_default = this.objectResponse.items[0].snippet.thumbnails.default.url;
            this.live_video_thumb_medium = this.objectResponse.items[0].snippet.thumbnails.medium.url;
            this.live_video_thumb_high = this.objectResponse.items[0].snippet.thumbnails.high.url;

            this.channel_title = this.objectResponse.items[0].snippet.channelTitle;
            this.embedCode();
        }
    }

    async isLive(getOrNot = false) {
        if (getOrNot == true) {
            await this.queryIt();
        }

        const live_items = this.objectResponse.items.length;

        if (live_items > 0) {
            this.isLive = true;
            return true;
        }
        else {
            this.isLive = false;
            return false;
        }
    }

    setEmbedSizeByWidth(width, refill_code = true) {
        const ratio = this.default_embed_width / this.default_embed_height;
        this.embed_width = width;
        this.embed_height = width / ratio;

        if (refill_code == true) { this.embedCode(); }
    }

    setEmbedSizeByHeight(height, refill_code = true) {
        const ratio = this.default_embed_width / this.default_embed_height;
        this.embed_height = height;
        this.embed_width = height * ratio;

        if (refill_code == true) { this.embedCode(); }
    }

    embedCode() {
        const autoplay = this.embed_autoplay ? "?autoplay=1" : "";

        this.embed_code = `<iframe
        width="{this.embed_width}"
        height="{this.embed_height}"
        src="//www.youtube.com/embed/${this.live_video_id}${autoplay}"
        frameborder="0"
        allowfullscreen>
    </iframe>`

        return this.embed_code;
    }
}

