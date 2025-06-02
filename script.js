document.addEventListener("DOMContentLoaded", () => {
  // 🎯 DOM Elements
  const titleEl = document.querySelector(".movie-title");
  const releaseDateEl = document.querySelector(".release-date");
  const descriptionEl = document.querySelector(".description");
  const posterEl = document.getElementById("movie-poster");
  const typeEl = document.querySelector(".project-type");

  const daysEl = document.getElementById("days");
  const hoursEl = document.getElementById("hours");
  const minutesEl = document.getElementById("minutes");
  const secondsEl = document.getElementById("seconds");

  const toggleBtn = document.getElementById("toggle-info");
  const infoPanel = document.getElementById("movie-info-panel");

  const nextBtn = document.getElementById("next");
  const prevBtn = document.getElementById("prev");
  const logoBtn = document.getElementById("logo-button");

  let countdownInterval = null;
  let history = [];
  let currentIndex = -1;

  // ▶️ Initial Load
  loadProject();

  // 🖱️ Logo button resets view
  logoBtn?.addEventListener("click", () => {
    if (history.length > 0) {
      currentIndex = 0;
      updateUI(history[0]);
      updateNavigationButtons();
    } else {
      loadProject();
    }
  });

  // 🔁 Toggle info panel
  toggleBtn?.addEventListener("click", () => {
    const label = toggleBtn.querySelector(".label");
    const isOpen = toggleBtn.classList.toggle("open");
    infoPanel?.classList.toggle("open");
    if (label) label.textContent = isOpen ? "CLOSE" : "LEARN MORE";
  });

  // ⏭️ Next button
  nextBtn?.addEventListener("click", () => {
    if (nextBtn.disabled) return;

    const nextDate = new Date(history[currentIndex].release_date);
    nextDate.setDate(nextDate.getDate() + 1);
    const isoDate = nextDate.toISOString().split("T")[0];

    loadProject(isoDate);
  });

  // ⏮️ Previous button
  prevBtn?.addEventListener("click", () => {
    if (prevBtn.disabled || currentIndex <= 0) return;
    currentIndex--;
    updateUI(history[currentIndex]);
    updateNavigationButtons();
  });

  // 🚀 Load project from API
  async function loadProject(date = null) {
    const url = date
      ? `https://whenisthenextmcufilm.com/api?date=${date}`
      : `https://whenisthenextmcufilm.com/api`;

    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
      const data = await res.json();

      // Avoid duplicate entries and maintain history
      if (currentIndex === history.length - 1) {
        history.push(data);
        currentIndex++;
      } else {
        history = history.slice(0, currentIndex + 1);
        history.push(data);
        currentIndex = history.length - 1;
      }

      updateUI(data);
      updateNavigationButtons();
    } catch (err) {
      console.error("Failed to fetch MCU data:", err);
      titleEl.textContent = "⚠️ Error loading project.";
      descriptionEl.textContent = "Check your internet connection and try again.";
    }
  }

  // 🔄 Update UI with new project data
  function updateUI(data) {
    titleEl.textContent = data.title.toUpperCase();
    releaseDateEl.textContent = formatDate(data.release_date);
    descriptionEl.textContent = data.overview;

    const type = data.type?.trim().toLowerCase();
    typeEl.textContent =
      type === "movie"
        ? "MOVIE — ONLY IN THEATRES"
        : type === "tv show"
        ? "SERIES — ONLY ON DISNEY+"
        : data.type?.toUpperCase();

    posterEl.src = data.poster_url;
    posterEl.alt = `${data.title} Poster`;

    clearInterval(countdownInterval);
    startCountdown(data.release_date);
  }

  // ⏳ Start countdown
  function startCountdown(releaseDateStr) {
    const target = new Date(releaseDateStr);

    function updateCountdown() {
      const now = new Date();
      const diff = target - now;

      if (diff <= 0) {
        [daysEl, hoursEl, minutesEl, secondsEl].forEach((el) => (el.textContent = "00"));
        clearInterval(countdownInterval);
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      daysEl.textContent = String(days).padStart(2, "0");
      hoursEl.textContent = String(hours).padStart(2, "0");
      minutesEl.textContent = String(minutes).padStart(2, "0");
      secondsEl.textContent = String(seconds).padStart(2, "0");
    }

    updateCountdown();
    countdownInterval = setInterval(updateCountdown, 1000);
  }

  // 📅 Format date string
  function formatDate(dateStr) {
    return new Date(dateStr).toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).toUpperCase();
  }

  // ⬅️➡️ Update nav button states
  function updateNavigationButtons() {
    // Prev
    const atStart = currentIndex <= 0;
    prevBtn.disabled = atStart;
    prevBtn.classList.toggle("disabled", atStart);

    // Next (disable only if no future data expected)
    const currentRelease = new Date(history[currentIndex].release_date);
    const today = new Date();
    const disableNext = currentRelease <= today;
    nextBtn.disabled = disableNext;
    nextBtn.classList.toggle("disabled", disableNext);
  }
});
