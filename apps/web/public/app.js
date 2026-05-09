const pre = document.getElementById("bbs");
const clock = document.getElementById("clock");
const phosphorBtn = document.getElementById("toggle-phosphor");
const scanBtn = document.getElementById("toggle-scan");

async function loadWelcome() {
  const res = await fetch("/git4gits-welcome.txt");
  if (!res.ok) {
    pre.textContent = `[ERR ${res.status}] Could not fetch welcome matrix.`;
    return;
  }
  pre.textContent = await res.text();
}

function tick() {
  const d = new Date();
  clock.textContent = d.toLocaleTimeString(undefined, {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
}

phosphorBtn?.addEventListener("click", () => {
  document.body.classList.toggle("theme-amber");
});

scanBtn?.addEventListener("click", () => {
  document.body.classList.toggle("no-scan");
});

loadWelcome();
setInterval(tick, 250);
tick();
