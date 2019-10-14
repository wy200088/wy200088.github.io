const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: true,
    lrcType: 3,
    audio: [
      {
        name: "Hey Kong",
        artist: 'Key.L',
        url: 'http://m10.music.126.net/20191014142334/fbe05aae8fb626d29c766a3dbe228c23/yyaac/015e/555d/0153/644df2e32ab78b8eebfc69fdb3b1c658.m4a',
        cover: 'http://p1.music.126.net/6_bZAvi7pi7V9U0JnvS8uQ==/109951164298338067.jpg?param=130y130',
      },
    ]
});