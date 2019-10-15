const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: true,
    lrcType: 3,
    audio: [
      {
        name: "Hey Kong",
        artist: 'Key.L',
        url: 'http://www.170mv.com/kw/antiserver.kuwo.cn/anti.s?rid=MUSIC_75188512&response=res&format=mp3|aac&type=convert_url&br=128kmp3&agent=iPhone&callback=getlink&jpcallback=getlink.mp3',
        cover: 'http://p1.music.126.net/6_bZAvi7pi7V9U0JnvS8uQ==/109951164298338067.jpg?param=130y130',
      },
    ]
});