import animejs from "https://cdn.skypack.dev/animejs@3.2.1";

function move({ clientX: x, clientY: y, target }) {
  let scale = 1;

  if (target && target.classList && target.classList.contains("link")) {
    scale = 1.75;
  }

  const cursorElement = animejs({
    targets: ".cursor",
    translateX: Math.floor(x),
    translateY: Math.floor(y),
    rotate: x / -8 + 135,
    scale,
    easing: "easeOutElastic(1, 1)",
  });
}

document.addEventListener("mousemove", move);

window.onload = () =>
  animejs({
    targets: ".cursor",
    opacity: 1,
  });

const toggler = document.querySelector(".toggle");
toggler.addEventListener("click", () => {
  if (document.body.classList.contains("dark")) {
    toggler.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>`;
  } else {
    toggler.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                        </svg>`;
  }
  document.body.classList.toggle("dark");
});
