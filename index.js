"use strict";

function confettiBurst1() {
  confetti();
}

function confettiBurst2() {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
  });
}

function confettiBurst3() {
  confetti({
    angle: 60,
    spread: 100,
    particleCount: 150,
    origin: { x: 0, y: 0.5 },
  });
}

function confettiBurst4() {
  confetti({
    angle: 120,
    spread: 100,
    particleCount: 150,
    origin: { x: 1, y: 0.5 },
  });
}

function confettiBurst5() {
  confetti({
    particleCount: 200,
    startVelocity: 30,
    spread: 360,
    ticks: 60,
    origin: { x: 0.5, y: 0.5 },
  });
}

const confettiFunctions = [
  confettiBurst1,
  confettiBurst2,
  confettiBurst3,
  confettiBurst4,
  confettiBurst5
];

function randomConfetti() {
  const randomIndex = Math.floor(Math.random() * confettiFunctions.length);
  confettiFunctions[randomIndex](); // panggil salah satu secara acak
}

function sendToWhatsapp() {
  const score = document.getElementById("happinessLevel").value;
  const number = "6281262179132";

  const message = `Aku udah lihat kejutan yang kamu buat 😍. Nilai kebahagiaan aku: ${score} dari 10!\nAku mau bilang sesuatu langsung ke kamu 🤭❤️`;
  const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;

  window.open(url, '_blank');
}


document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("myModal");
  const modalBody = document.getElementById("modal-body");
  const closeBtn = document.querySelector(".close");

  document.getElementById("btn-open").addEventListener("click", () => {
    const opening = document.getElementById("opening");
    opening.classList.add("hidden");

    // Memutar musik setelah interaksi
    const bgMusic = document.getElementById("bg-music");
      if (bgMusic) {
        bgMusic.volume = 0.5; 
        bgMusic.play().catch(e => {
        });
      }
    });

  const musicBtn = document.getElementById("toggleMusic");
  const music = document.getElementById("bg-music");
  let isPlaying = true;

  musicBtn.addEventListener("click", () => {
    if (isPlaying) {
      music.pause();
      musicBtn.textContent = "🔇";
    } else {
      music.play();
      musicBtn.textContent = "🔊";
    }
    isPlaying = !isPlaying;
  });

  document.querySelectorAll(".box").forEach((box) => {
    box.addEventListener("click", () => {
      modalBody.innerHTML = box.getAttribute("data-content");
      modal.style.display = "block";
      modal.style.opacity = 0;
      setTimeout(() => (modal.style.opacity = 1), 50);
    });

    box.addEventListener("click", () => {
      modalBody.innerHTML = box.getAttribute("data-content");
      modal.style.display = "block";

      setTimeout(() => {
      const video = modalBody.querySelector("video");
      const bgMusic = document.getElementById("bg-music");

      if (video && bgMusic) {
        // Saat video diputar, hentikan musik latar
        video.addEventListener("play", () => {
          bgMusic.pause();
        });

        // Saat video dihentikan/di-pause, lanjutkan musik
        video.addEventListener("pause", () => {
          bgMusic.play().catch(() => {});
        });

        // Saat video selesai, lanjutkan musik
        video.addEventListener("ended", () => {
          bgMusic.play().catch(() => {});
        });
      }
    }, 300);

      randomConfetti();
    });
  });

  closeBtn.onclick = function () {
    modal.style.display = "none";
    const videos = modal.querySelectorAll("video");
    videos.forEach(video => {
      video.pause();
    });
  };

  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
      const videos = modal.querySelectorAll("video");
      videos.forEach(video => {
        video.pause();
      });
    }
  };
});

