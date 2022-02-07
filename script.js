// Varun Singh Youtube Channel
const channelId = "UCFXSb8P7vm5I1xOj4quia_w";
const api_key = "AIzaSyAZ0wxsTxhTH9ix7cIB4MtnHm_38nvUZpQ";

const YouTubeLive = new YouTubeLivestream(channelId, api_key);

if(!YouTubeLive.isLive)
{
	document.body.innerHTML += "There is no live streaming right now! Response is (Decoded to object):<br><br>";
	document.body.innerHTML += "<pre><code>";
	console.log(YouTubeLive.objectResponse);
	document.body.innerHTML += "</code></pre>";
}
else
{
	document.body.innerHTML += `<main>There is a live streaming currently! You can see below!<br>
<br>
Title is: ${YouTubeLive.live_video_title}<br>
<br>
Description is: ${YouTubeLive.live_video_description}<br>
<br>
Video ID is: ${YouTubeLive.live_video_id}<br><br>
Thumbs are: ${YouTubeLive.live_video_thumb_default}, ${YouTubeLive.live_video_thumb_medium}, ${YouTubeLive.live_video_thumb_high} <br><br>
Published at: ${YouTubeLive.live_video_published_at}<br><br>
Channel Title: ${YouTubeLive.channel_title}<br><br>
</main>
`

	YouTubeLive.setEmbedSizeByWidth(200);
	YouTubeLive.setEmbedSizeByHeight(200);
	YouTubeLive.embed_autoplay = false;

	document.body.innerHTML += YouTubeLive.embedCode();
}

