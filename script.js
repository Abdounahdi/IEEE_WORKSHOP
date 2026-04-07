(function () {
  // Simple vanilla JS for interactive landing page
  // 1. Alert on CTA buttons (simple demonstration)
  const exploreBtn = document.getElementById("exploreBtn");
  const standardsBtn = document.getElementById("standardsBtn");

  if (exploreBtn) {
    exploreBtn.addEventListener("click", () => {
      alert(
        "🚀 Join IEEE: Access cutting-edge research, network with experts, and shape the future.",
      );
    });
  }

  if (standardsBtn) {
    standardsBtn.addEventListener("click", () => {
      alert(
        "📡 IEEE Standards: From Wi-Fi to AI ethics — explore 1,200+ active standards driving global innovation.",
      );
    });
  }

  // 2. Interactive impact section: dynamic increment simulation
  // We'll store numeric base values and update the DOM with smooth increments.
  let members = 423000;
  let countries = 160;
  let standards = 1200;

  const membersEl = document.getElementById("membersCount");
  const countriesEl = document.getElementById("countriesCount");
  const standardsEl = document.getElementById("standardsCount");

  function formatNumberWithPlus(value, isMembers = true) {
    // for members we show "xxx,xxx+" format, for countries "xxx+", standards "xxx+"
    if (isMembers) {
      return value.toLocaleString() + "+";
    }
    return value.toLocaleString() + "+";
  }

  function updateStatsUI() {
    if (membersEl) membersEl.innerText = members.toLocaleString() + "+";
    if (countriesEl) countriesEl.innerText = countries.toLocaleString() + "+";
    if (standardsEl) standardsEl.innerText = standards.toLocaleString() + "+";
  }

  // initial update
  updateStatsUI();

  const boostBtn = document.getElementById("impactBoostBtn");
  if (boostBtn) {
    boostBtn.addEventListener("click", () => {
      // Simulate growing community & standards adoption
      // increase members by 2.5k to 12k random, countries by 1~2, standards by 2~6
      const memberIncrease = Math.floor(Math.random() * 8500) + 1500; // 1500 to 10000
      const countryIncrease =
        Math.random() > 0.6 ? Math.floor(Math.random() * 3) + 1 : 1;
      const standardsIncrease = Math.floor(Math.random() * 8) + 2; // 2 to 9

      members += memberIncrease;
      countries += countryIncrease;
      standards += standardsIncrease;

      // Animate numbers with a quick temporary effect
      if (membersEl) {
        membersEl.style.transform = "scale(1.08)";
        setTimeout(() => {
          if (membersEl) membersEl.style.transform = "";
        }, 180);
      }
      if (countriesEl) {
        countriesEl.style.transform = "scale(1.08)";
        setTimeout(() => {
          if (countriesEl) countriesEl.style.transform = "";
        }, 180);
      }
      if (standardsEl) {
        standardsEl.style.transform = "scale(1.08)";
        setTimeout(() => {
          if (standardsEl) standardsEl.style.transform = "";
        }, 180);
      }

      updateStatsUI();

      // Show small toast-like alert (non-intrusive but vanilla)
      const boostMsg = document.createElement("div");
      boostMsg.innerText = `📈 IEEE impact grows: +${memberIncrease.toLocaleString()} members, +${countryIncrease} countries, +${standardsIncrease} standards!`;
      boostMsg.style.position = "fixed";
      boostMsg.style.bottom = "24px";
      boostMsg.style.left = "24px";
      boostMsg.style.backgroundColor = "#003b5c";
      boostMsg.style.color = "white";
      boostMsg.style.padding = "12px 20px";
      boostMsg.style.borderRadius = "40px";
      boostMsg.style.fontSize = "0.85rem";
      boostMsg.style.fontWeight = "500";
      boostMsg.style.zIndex = "999";
      boostMsg.style.boxShadow = "0 6px 14px rgba(0,0,0,0.2)";
      boostMsg.style.backdropFilter = "blur(4px)";
      boostMsg.style.fontFamily = "inherit";
      document.body.appendChild(boostMsg);

      setTimeout(() => {
        boostMsg.style.opacity = "0";
        boostMsg.style.transition = "opacity 0.4s";
        setTimeout(() => {
          if (boostMsg.parentNode) boostMsg.remove();
        }, 500);
      }, 2800);
    });
  }

  // Optional: small hover console greetings or extra interactive
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    card.addEventListener("click", () => {
      const title = card.querySelector("h3")?.innerText;
      if (title) {
        console.log(`✨ IEEE ${title} — leading technology advancement.`);
      }
    });
  });

  // add dynamic year to footer (just elegance)
  const footerYearSpan = document.querySelector(".footer-copy");
  if (footerYearSpan) {
    const currentYear = new Date().getFullYear();
    if (!footerYearSpan.innerText.includes("2026")) {
      footerYearSpan.innerText = footerYearSpan.innerText.replace(
        "2026",
        currentYear,
      );
    }
  }
})();
