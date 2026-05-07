const main = document.querySelector("main");

let score = 0;


// ================= UPDATE UI ================= //

const updateUI = (content, className = "") => {

  const section = document.createElement("section");

  section.classList.add("stage");

  if (className !== "") {
    section.classList.add(className);
  }

  section.innerHTML = content;

  main.replaceChildren(section);

  // EventListeners på ALLE knapper
  const btns = document.querySelectorAll("button");

  for (const btn of btns) {
    btn.addEventListener("click", nextStage);
  }
};


// ================= STARTSKÆRM ================= //

const showStartScreen = () => {

  updateUI(`

    <header class="topbar">

      <div class="topbar__left">
        <span class="logo">🛡️</span>
        <h3>Overlev din digitale hverdag</h3>
      </div>

      <div class="topbar__right">
        <div class="score">
          ⭐ ${score} / 300 point
        </div>

        <button class="info-btn">
          Sådan spiller du
        </button>
      </div>

    </header>


    <div class="home">

      <section class="hero">

        <div class="hero__left">

          <h1>
            Overlev din digitale hverdag
          </h1>

          <p>
            Gennemfør 3 scenarier og lær at undgå phishing,
            malware og usikre netværk.
          </p>

          <button class="btn start-btn">
            Start spillet
          </button>

          <p class="time">
            Det tager ca. 10-15 minutter
          </p>

        </div>

        <div class="hero__right"></div>

      </section>


      <section class="features">

        <div class="feature">
          <span class="icon">🎯</span>

          <div>
            <h4>Træf valg</h4>

            <p>
              Du vælger, hvad du gør i realistiske situationer.
            </p>
          </div>
        </div>


        <div class="feature">
          <span class="icon">👍</span>

          <div>
            <h4>Få feedback</h4>

            <p>
              Se konsekvenserne af dine valg.
            </p>
          </div>
        </div>


        <div class="feature">
          <span class="icon">🧠</span>

          <div>
            <h4>Bliv klogere</h4>

            <p>
              Lær at spotte trusler og tag bedre beslutninger online.
            </p>
          </div>
        </div>

      </section>


      <p class="tagline">
        Små valg i dag – større sikkerhed i morgen.
      </p>

    </div>

  `);
};


// ================= INTRO SCENE 1 ================= //

const showScene1Intro = () => {

  updateUI(`

    <header class="topbar">

      <div class="topbar__left">
        <span class="logo">🛡️</span>
        <h3>Overlev din digitale hverdag</h3>
      </div>

      <div class="topbar__right">
        <div class="score">
          ⭐ ${score} / 300 point
        </div>
      </div>

    </header>


    <section class="intro">

      <img
        class="progress-img"
        src="img/progress-scene1.png"
        alt="Progression"
      >

      <div class="intro-card">

        <h2>HJEMME</h2>

        <p>
          Du står op og åbner din computer.
        </p>

        <p>
          Du har fået en mail fra “Studieadmin”
          med teksten:
        </p>

        <blockquote>
          “Vigtig besked – log ind her”
        </blockquote>

        <p>Hvad gør du?</p>

        <button class="next-btn">
          →
        </button>

      </div>

    </section>

  `);
};


// ================= SCENE 1 ================= //

const showScene1 = () => {

  updateUI(`

    <header class="topbar">

      <div class="topbar__left">
        <span class="logo">🛡️</span>
        <h3>Overlev din digitale hverdag</h3>
      </div>

      <div class="topbar__right">
        <div class="score">
          ⭐ ${score} / 300 point
        </div>
      </div>

    </header>


    <section class="card">

      <h2>
        Du har modtaget en mail
      </h2>

      <p>
        “Mistænkelig aktivitet på din studieprofil.
        Log ind nu for at sikre din konto.”
      </p>


      <div class="choices">

        <button class="btn">
          Klik på linket
        </button>

        <button class="btn">
          Slet mailen
        </button>

        <button class="btn">
          Rapportér mailen
        </button>

      </div>

    </section>

  `);
};


// ================= FEEDBACK ================= //

const showFeedback = (type, title, points) => {

  updateUI(`

    <section class="card ${type}">

      <h2>${title}</h2>

      <p class="points">
        ${points}
      </p>

      <button class="btn">
        Tilbage til start
      </button>

    </section>

  `);
};


// ================= BRANCHING ================= //

const nextStage = (e) => {

  const btnText = e.target.textContent.trim();

  switch (btnText) {

    // ===== START ===== //

    case "Start spillet":
      showScene1Intro();
    break;


    // ===== INTRO ===== //

    case "→":
      showScene1();
    break;


    // ===== SCENE 1 ===== //

    case "Klik på linket":
      score += 0;

      showFeedback(
        "danger",
        "Du klikkede på linket",
        "+0 point"
      );
    break;


    case "Slet mailen":
      score += 75;

      showFeedback(
        "warning",
        "Godt du ikke klikkede",
        "+75 point"
      );
    break;


    case "Rapportér mailen":
      score += 100;

      showFeedback(
        "success",
        "Rigtigt håndteret!",
        "+100 point"
      );
    break;


    // ===== RESET ===== //

    case "Tilbage til start":
      score = 0;

      showStartScreen();
    break;


    default:
      console.log("Ukendt knap");
  }
};


// ================= INIT ================= //

showStartScreen();