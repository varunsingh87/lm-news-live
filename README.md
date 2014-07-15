## YouTube Live Embed PHP Class

PHP Class to embed a live YouTube Streaming / Google Hangouts On Air at an website.

### Usage

#### Creating the object

    $channelId = 'REPLACE_ME'; // This is the your [channel id][1]
    $api_key = 'REPLACE_ME'; // This is your [google project api key][2] with youtube api enabled
    $YouTubeLive = new EmbedYoutubeLiveStreaming($channelId, $api_key);

#### First parameter: Channel ID

To know your channel id (which is **not** the channel title):

1. Open https://youtube.com
2. At top left, below the logo, click "My Channel"
3. It will open an address like https://www.youtube.com/channel/[LOTS-OF-NONSENSE]
4. This lots of nonsense is the channel id you should enter.


#### Second parameter: API Key

To create your api key:

1. Create a project at google developer console. https://console.developers.google.com
2. Enable YouTube API for that project.
3. Create a credential  of type "Public API Access", a "Server key", with the IPs from the server you will query the API from.
4. This will create an API Key for you, which you should copy and then use it for the second parameter when creating the Object fr the clas.
