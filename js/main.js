function playAudio(num) {
  var audioPlayer = document.getElementById('audioPlayer');
  audioPlayer.setAttribute('src', 'audio/' + num.toString() + '.mp3');
  audioPlayer.play();
}
