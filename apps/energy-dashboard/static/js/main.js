function animatePulse(circle, path, durationMs, delayMs = 0) {
  const length = path.getTotalLength();
  let start;
  function frame(ts) {
    if (start === undefined) start = ts + delayMs;
    const elapsed = ts - start;
    if (elapsed >= 0) {
      const t = (elapsed % durationMs) / durationMs;
      const pt = path.getPointAtLength(t * length);
      circle.setAttribute("cx", pt.x);
      circle.setAttribute("cy", pt.y);
    }
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}

function init() {
  const p1 = document.getElementById("line-plant-sub");
  const p2 = document.getElementById("line-sub-tower");
  const p3 = document.getElementById("line-tower-trans");
  const p4 = document.getElementById("line-trans-house");
  const c1 = document.getElementById("pulse-1");
  const c2 = document.getElementById("pulse-2");
  const c3 = document.getElementById("pulse-3");
  const c4 = document.getElementById("pulse-4");
  animatePulse(c1, p1, 3000);
  animatePulse(c2, p2, 3200, 350);
  animatePulse(c3, p3, 3400, 700);
  animatePulse(c4, p4, 2800, 1050);
  fetch("/api/status")
    .then(r => r.json())
    .then(data => {
      const text = document.getElementById("status-text");
      text.textContent = `${data.message} • ${data.region}`;
      const status = text.closest(".status");
      status.classList.remove("pop");
      void status.offsetWidth;
      status.classList.add("pop");
    })
    .catch(() => {
      const text = document.getElementById("status-text");
      text.textContent = "Status unavailable";
    });
}

document.addEventListener("DOMContentLoaded", init);
