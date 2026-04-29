// =================TOPBAR=================//
const topbar = document.querySelector("#topbar");

function renderTopbar() {
  topbar.innerHTML = `
    <div class="topbar">
      <div class="topbar__left">
        <h3>Overlev din digitale hverdag</h3>
      </div>

      <div class="topbar__right">
        <div class="score">
          ⭐ ${score} / 300 point
        </div>

        <button class="info-btn">Sådan spiller du</button>
      </div>
    </div>
  `;
}

// =================APP=================//

const app = document.querySelector("#app");

let score = 0;

// ================= START ================= //
function showStartScreen() {
  app.innerHTML = `
    <section class="start">
      <div class="start__content">
        <h1>Overlev din digitale hverdag</h1>

        <p>
          Gennemfør 3 scenarier og lær at undgå phishing, 
          malware og usikre netværk.
        </p>

        <button class="btn start-btn" data-action="start">
          ▶ Start spillet
        </button>

        <p class="time">Det tager ca. 10-15 minutter</p>
      </div>
    </section>
  `;
}

function showScene1() {
  app.innerHTML = `
    <section class="card">
      <h2>Du har modtaget en vigtig mail</h2>
      <p>
        "Mistænkelig aktivitet på din studieprofil. 
        Log ind nu for at sikre din konto."
      </p>

      <div class="choices">
        <button class="btn" data-choice="click">Klik på linket</button>
        <button class="btn" data-choice="delete">Slet mailen</button>
        <button class="btn" data-choice="report">Rapportér mailen</button>
      </div>
    </section>
  `;
}

// ================= EVENTS ================= //

app.addEventListener("click", (e) => {
  if (!e.target.classList.contains("btn")) return;

  const choice = e.target.dataset.choice;
  const action = e.target.dataset.action;

  // ===== VALG ===== //
  if (action === "start") return showScene1();

  if (choice === "click") {
    score += 0;
    renderTopbar();
    showFeedbackClick();
  }

  if (choice === "delete") {
    score += 75;
    renderTopbar();
    showFeedbackDelete();
  }

  if (choice === "report") {
    score += 100;
    renderTopbar();
    showFeedbackReport();
  }

  // ===== ACTIONS ===== //
  if (action === "highlight") {
    showHighlight();
  }

  if (action === "next") {
    nextScene();
  }
});

// ================= FEEDBACK ================= //

function showFeedbackClick() {
  app.innerHTML = `
    <section class="card danger">
      <h2>Du klikkede på linket</h2>
      <p>Det kan være farligt at klikke på mistænkelige links.</p>
      <p class="points">+0 point</p>

      <button class="btn" data-action="highlight">Se hvad du missede</button>
    </section>
  `;
}

function showFeedbackDelete() {
  app.innerHTML = `
    <section class="card warning">
      <h2>Godt du ikke klikkede</h2>
      <p>Du undgik risikoen, men kunne have rapporteret mailen.</p>
      <p class="points">+75 point</p>

      <button class="btn" data-action="highlight">Se tegnene</button>
    </section>
  `;
}

function showFeedbackReport() {
  app.innerHTML = `
    <section class="card success">
      <h2>Rigtigt håndteret!</h2>
      <p>Du genkendte phishing og hjalp med at beskytte andre.</p>
      <p class="points">+100 point</p>

      <button class="btn" data-action="highlight">Se tegnene</button>
    </section>
  `;
}

// ================= HIGHLIGHT ================= //

function showHighlight() {
  app.innerHTML = `
    <section class="card">
      <h2>Sådan opdager du phishing</h2>
      <ul>
        <li>Generisk hilsen ("Hej")</li>
        <li>Mistænkelig afsender</li>
        <li>Uofficiel URL</li>
      </ul>

      <button class="btn" data-action="next">Gå videre</button>
    </section>
  `;
}

// ================= NEXT ================= //

function nextScene() {
  app.innerHTML = `
    <section class="card">
      <h2>Scene 2 kommer her</h2>
      <p>Din score: ${score}</p>
    </section>
  `;
}

// ================= INIT ================= //

showStartScreen();