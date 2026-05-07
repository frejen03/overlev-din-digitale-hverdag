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
        <img src="img/nav-logo.png" alt="" class="site-icon">
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

          <h1>Overlev din <br>
          digitale hverdag</h1>

          <p>
            Gennemfør 3 scenarier og lær at undgå digitale <br>
            trusler som phishing, malware og usikre netværk.
          </p>

          <button class="btn start-btn" data-action="start">
            <span class="play-icon">
              ▶
            </span>
            
            <span class="btn-text">
              Start
            </span>
          </button>

          <p class="time">
            Det tager ca. 10-15 minutter
          </p>

        </div>

        <div class="hero__right"></div>

      </section>


      <section class="features">

        <div class="feature">
          <img src="img/feature-logo1.png" alt="" class="feature-icon">

          <div>
            <h4>Træf valg</h4>

            <p>
              Du vælger, hvad du gør i realistiske situationer.
            </p>
          </div>
        </div>


        <div class="feature">
          <img src="img/feature-logo2.png" alt="" class="feature-icon">

          <div>
            <h4>Få feedback</h4>

            <p>
              Se konsekvenserne af dine valg.
            </p>
          </div>
        </div>


        <div class="feature">
          <img src="img/feature-logo3.png" alt="" class="feature-icon">

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
        <img src="img/nav-logo.png" alt="" class="site-icon">
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
        src="img/progress-bar-scene1-v3.png"
        alt="Progression"
        class="progress-img"
      >


      <div class="intro-wrapper">

        <div class="intro-card">

          <div class="intro-top">
            <button class="back-btn" data-action="back">
              ← Tilbage
            </button>
          </div>

          <h2>Mail fra “Studieadmin”</h2>

          <p>
            Du står op og åbner din computer
            for at tjekke beskeder.
          </p>

          <p>
            Du har modtaget en mail fra
            "Studieadmin".
          </p>

          <blockquote>
            “Vigtig besked - log ind her”
          </blockquote>

          <button class="next-btn btn" data-action="open-mail">
            Åben mail
          </button>

        </div>


        <img
          src="img/pc-intro1.png"
          alt="Computer"
          class="laptop"
        >

      </div>

    </section>

  `);
};


// ================= SCENE 1 ================= //

const showScene1 = () => {

  updateUI(`

    <header class="topbar">

      <div class="topbar__left">

        <img
          src="img/nav-logo.png"
          alt=""
          class="site-icon"
        >

        <h3>Overlev din digitale hverdag</h3>

      </div>


      <div class="topbar__center">

        <img
          src="img/mini-progressbar-1-v2.png"
          alt=""
          class="progress-top"
        >

      </div>


      <div class="topbar__right">

        <div class="score">
          ⭐ ${score} / 300 point
        </div>

      </div>

    </header>



    <section class="scene1">

      <div class="scene1-wrapper">


        <!-- LEFT CARD -->

        <div class="scene1-card">

          <h2>Hvad gør du?</h2>

          <p class="scene1-subtitle">
            Du har fået en mail med en
            <strong>vigtig besked</strong>
          </p>


          <!-- CHOICE 1 -->

          <button class="choice-btn phishing-btn">

            <img
              src="img/link-icon.png"
              alt=""
              class="choice-icon"
            >

            <div>

              <h4>Klikker på linket</h4>

              <p>
                Åbner linket for at bekræfte min konto
              </p>

            </div>

          </button>


          <!-- CHOICE 2 -->

          <button class="choice-btn warning-btn">

            <img
              src="img/rapport-icon.png"
              alt=""
              class="choice-icon"
            >

            <div>

              <h4>Rapporterer mail som phishing</h4>

              <p>
                Jeg markerer mailen som phishing og advarer andre
              </p>

            </div>

          </button>


          <!-- CHOICE 3 -->

          <button class="choice-btn delete-btn">

            <img
              src="img/trash-icon.png"
              alt=""
              class="choice-icon"
            >

            <div>

              <h4>Jeg sletter mailen</h4>

              <p>
                Jeg sletter mailen uden at klikke på noget
              </p>

            </div>

          </button>



          <!-- TIP BUTTON -->

          <button class="tip-btn">
            <img src="img/lightbulb-icon.png" alt="" class="tip-icon">
            Tip?

          </button>

        </div>



        <!-- LAPTOP -->

        <img
          src="img/laptop-scene1.png"
          alt=""
          class="scene1-laptop"
        >

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


const nextStage = (e) => {

  const btn = e.target.closest("button");

  // Hvis der ikke blev klikket på en knap
  if (!btn) return;

  const action = btn.dataset.action;
  const btnText = btn.textContent.trim();


  // ===== ACTIONS ===== //

  switch (action) {

    case "start":
      showScene1Intro();
    break;

    case "back":
      showStartScreen();
    break;

    case "open-mail":
      showScene1();
    break;
  }


  // ===== TEXT BUTTONS ===== //

  switch (btnText) {

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