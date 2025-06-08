"use strict";

document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("myModal");
    const modalBody = document.getElementById("modal-body");
    const closeBtn = document.querySelector(".close");
  
    document.querySelectorAll(".box").forEach(box => {
      box.addEventListener("click", () => {
        modalBody.innerHTML = box.getAttribute("data-content");
        modal.style.display = "block";
      });
    });
  
    closeBtn.onclick = function () {
      modal.style.display = "none";
    };
  
    window.onclick = function (event) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    };
  });