function openChannel(url) {
  const videoPlayer = document.getElementById('videoPlayer');
  videoPlayer.src = url;

  // Solicita a tela cheia
  if (videoPlayer.requestFullscreen) {
    videoPlayer.requestFullscreen();
  } else if (videoPlayer.mozRequestFullScreen) { // Firefox
    videoPlayer.mozRequestFullScreen();
  } else if (videoPlayer.webkitRequestFullscreen) { // Chrome, Safari and Opera
    videoPlayer.webkitRequestFullscreen();
  } else if (videoPlayer.msRequestFullscreen) { // IE/Edge
    videoPlayer.msRequestFullscreen();
  }

  // Scroll suave até o player
  document.querySelector('.player-container').scrollIntoView({ behavior: 'smooth' });
}


function moveCarousel(direction, carouselId) {
  const carousel = document.getElementById(carouselId);
  const channelWidth = 220; // Largura do canal + margem
  const scrollAmount = direction === 'left' ? -channelWidth : channelWidth;

  carousel.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
  });
}

function openChannel(url) {
  window.open(url, '_blank'); // Abre o link em uma nova aba
}
