## YouTube Live Embed PHP Class

PHP Class to embed a live YouTube Streaming / Google Hangouts On Air at an website.

### Usage

#### Creating the object

    $channelId = 'REPLACE_ME'; // This is the your [channel id][1]
    $api_key = 'REPLACE_ME'; // This is your [google project api key][2] with youtube api enabled
    $YouTubeLive = new EmbedYoutubeLiveStreaming($channelId, $api_key);

##### 1. First parameter: Channel ID

To know your channel id (which is **not** the channel title, after youtube.com/user/CHANNELTITLE):

1. Open https://youtube.com
2. At top left, below the logo, click "My Channel"
3. It will open an address like https://www.youtube.com/channel/[LOTS-OF-NONSENSE]
4. This lots of nonsense is the channel id you should enter.


##### 2. Second parameter: API Key

To create your api key:

1. Create a project at google developer console. https://console.developers.google.com
2. Enable YouTube API for that project.
3. Create a credential  of type "Public API Access", a "Server key", with the IPs from the server you will query the API from.
4. This will create an API Key for you, which you should copy and then use it for the second parameter when creating the Object fr the clas.

#### Using it

Then, as we said, one will create the object using

    $YouTubeLive = new EmbedYoutubeLiveStreaming($CHANNELID, $APIKEY);

And then it will query that channel, and list if there is a Live YouTube Streaming running.

** It takes some seconds after the session is live for the server to tell that it is live. **

##### Demos

###### Seeing if there is a live session and embedding it automatically

    $YouTubeLive = new EmbedYoutubeLiveStreaming($CHANNELID, $APIKEY);
    if(! $YouTubeLive->isLive )
    {
        echo "There is currently no live streaming for the channel!";
    }
    else
    {
        echo "There is a live streaming happening right now! See below";
	echo $YouTubeLive->embed_code;
    }
    
### Documentation

Documentation is still to come, but some things that you can do is:

* Set the size of the embedded player by width or height, and it will put the correct aspect radio
* Set autoplay **on** or **off**
* Get live streaming ID (?watch=#), Title and Description
* Get thumbnails, small, medium, large; get channel ID.

Code is commented and is easy to use!!
