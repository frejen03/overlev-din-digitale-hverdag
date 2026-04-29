const app = document.querySelector("#app");

let score = 0;


// ================= START SCREEN ================= //

function showStartScreen() {
  app.innerHTML = `
    
    <header class="topbar">
      <div class="topbar__left">
        <span class="logo">🛡️</span>
        <h3>Overlev din digitale hverdag</h3>
      </div>

      <div class="topbar__right">
        <div class="score">⭐ ${score} / 300 point</div>
        <button class="info-btn">Sådan spiller du</button>
      </div>
    </header>


    <!-- NY WRAPPER -->
    <div class="home">

      <section class="hero">
        <div class="hero__left">
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

        <div class="hero__right"></div>
      </section>


      <section class="features">
        <div class="feature">
          <span class="icon">🎯</span>
          <div>
            <h4>Træf valg</h4>
            <p>Du vælger, hvad du gør i realistiske situationer.</p>
          </div>
        </div>

        <div class="feature">
          <span class="icon">👍</span>
          <div>
            <h4>Få feedback</h4>
            <p>Se konsekvenserne af dine valg.</p>
          </div>
        </div>

        <div class="feature">
          <span class="icon">🧠</span>
          <div>
            <h4>Bliv klogere</h4>
            <p>Lær at spotte trusler og tag bedre beslutninger online.</p>
          </div>
        </div>
      </section>


      <p class="tagline">
        Små valg i dag – større sikkerhed i morgen.
      </p>

    </div>
  `;
}


// ================= SCENE 1 ================= //

function showScene1() {
  app.innerHTML = `
    <header class="topbar">
      <div class="topbar__left">
        <span class="logo">🛡️</span>
        <h3>Overlev din digitale hverdag</h3>
      </div>

      <div class="topbar__right">
        <div class="score">⭐ ${score} / 300 point</div>
        <button class="info-btn">Sådan spiller du</button>
      </div>
    </header>

    <section class="card">
      <h2>Du har modtaget en mail</h2>
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

  if (action === "start") showScene1();

  if (choice === "click") {
    score += 0;
    showFeedback("danger", "Du klikkede på linket", "+0 point");
  }

  if (choice === "delete") {
    score += 75;
    showFeedback("warning", "Godt du ikke klikkede", "+75 point");
  }

  if (choice === "report") {
    score += 100;
    showFeedback("success", "Rigtigt håndteret!", "+100 point");
  }

  if (action === "next") showStartScreen();
});


// ================= FEEDBACK ================= //

function showFeedback(type, title, points) {
  app.innerHTML = `
    <section class="card ${type}">
      <h2>${title}</h2>
      <p class="points">${points}</p>

      <button class="btn" data-action="next">Tilbage</button>
    </section>
  `;
}


// ================= INIT ================= //

showStartScreen();