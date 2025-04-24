const audio = document.getElementById('audio');
const playBtn = document.getElementById('play-btn');
const pauseBtn = document.getElementById('pause-btn');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');

const title = document.getElementById('title');
const artist = document.getElementById('artist');

const playlist = [
  {
    title: "Little do you Know",
    artist: "Jules Leblanc",
    src: "s1.mp3"
  },
  {
    title: "Kanta Laga",
    artist: "Neha Kakkar",
    src: "s2.mp3"
  },
  {
    title: "Believer",
    artist: "Imagine Dragons",
    src: "s3.mp3"
  }
];

let currentIndex = 0;

function loadSong(index) {
  const song = playlist[index];
  title.textContent = song.title;
  artist.textContent = song.artist;
  audio.src = song.src;
}

playBtn.addEventListener('click', () => {
  audio.play();
});

pauseBtn.addEventListener('click', () => {
  audio.pause();
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % playlist.length;
  loadSong(currentIndex);
  audio.play();
});

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + playlist.length) % playlist.length;
  loadSong(currentIndex);
  audio.play();
});

loadSong(currentIndex);
