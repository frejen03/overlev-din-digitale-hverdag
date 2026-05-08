const main = document.querySelector("main");

let score = 0;

// ================= COMPONENTS ================= //

const renderScore = () => {
  return `
    <div class="score">
      ⭐ ${score} / 300 point
    </div>
  `;
};


const renderTopbar = (
  progressImg = "",
  showInfoBtn = false
) => {
  return `
    <header class="topbar">
      <div class="topbar__left">
        <img src="img/nav-logo.png" alt="" class="site-icon">

        <h3>Overlev din digitale hverdag</h3>
      </div>

      <div class="topbar__center">
        ${
          progressImg
            ? `
              <img src="${progressImg}" alt="" class="progress-top">
            `
            : ""
        }
      </div>

      <div class="topbar__right">
        ${renderScore()}
        ${
          showInfoBtn
            ? `
              <button class="info-btn">
                Sådan spiller du
              </button>
            `
            : ""
        }
      </div>
    </header>
  `;
};

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
    ${renderTopbar("", true)}

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
    ${renderTopbar()}

    <section class="intro">

      <img src="img/progress-bar-scene1-v4.png" alt="Progression" class="progress-img">

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
            “Vigtig besked: Mistænkelig aktivitet på din studieprofil”
          </blockquote>

          <button class="next-btn btn" data-action="open-mail">
            Åben mail
          </button>
        </div>

        <img src="img/pc-intro1.png" alt="Computer" class="laptop">
      </div>
    </section>

  `);
};


// ================= SCENE 1 ================= //

const showScene1 = () => {

  updateUI(`

    ${renderTopbar("img/mini-progressbar-1-v2.png")}

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

          <button
            class="choice-btn choice-1-btn"
            data-action="choice-link"
          >

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

          <button
            class="choice-btn choice-2-btn" 
            data-action="choice-report"
          >

            <img
              src="img/report-icon.png"
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

          <button
            class="choice-btn choice-3-btn" 
            data-action="choice-delete"
          >

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
            <img src="img/lightbulb-icon2.png" alt="" class="tip-icon">
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

//=============== INTRO LOGIN ===============//
const showLoginIntro = () => {

  const popup = document.createElement("div");

  popup.classList.add("overlay");

  popup.innerHTML = `
  
    <div class="popup-card">

      <p>
        Linket i mailen fører dig til en <strong>loginside</strong>
      </p>

      <button class="next-btn btn">
        Se siden →
      </button>

    </div>

  `;

  document.body.appendChild(popup);

  popup.querySelector("button")
    .addEventListener("click", () => {

      popup.remove();

      showLoginScene();
    });
};

//=============== LOGIN SCENE ================//
const showLoginScene = () => {

  updateUI(`

    ${renderTopbar("img/mini-progressbar-1-v2.png")}

    <section class="scene1">
      <div class="scene1-wrapper">

        <!-- LEFT CARD -->

        <div class="scene1-card">
          <h2>Hvad gør du?</h2>

          <p class="scene1-subtitle">
            Linket fører til denne loginside
          </p>

          <!-- CHOICE 1 -->

          <button class="choice-btn choice-1a-btn"
            data-action="choice-login"
          >

          <img src="img/login-ikon.png" alt="" class="choice-icon">

          <div>
            <h4>Login</h4>
            <p>
              Indtast oplysninger for at sikre din konto
            </p>
          </div>

          </button>


          <!-- CHOICE 2 -->

          <button
            class="choice-btn choice-2a-btn" 
            data-action="choice-tilbage"
          >

            <img
              src="img/tilbage-ikon.png"
              alt=""
              class="choice-icon"
            >

            <div>

              <h4>Gå tilbage</h4>

              <p>
                Luk siden uden at logge ind
              </p>

            </div>

          </button>


          <!-- CHOICE 3 -->

          <button
            class="choice-btn choice-3a-btn" 
            data-action="choice-tjek"
          >

            <img
              src="img/søg-ikon.png"
              alt=""
              class="choice-icon"
            >

            <div>

              <h4>Tjek siden nærmere</h4>

              <p>
                Undersøg URL og afsender
              </p>

            </div>

          </button>



          <!-- TIP BUTTON -->

          <button class="tip-btn">
            <img src="img/lightbulb-icon2.png" alt="" class="tip-icon">
            Tip?

          </button>

        </div>



        <!-- LAPTOP -->

        <img
          src="img/laptop-scene1.2.png"
          alt=""
          class="scene1-login-laptop"
        >

      </div>

    </section>

  `);
};

//=============== FEEDBACK LOGIN ===============//
const showLoginFeedback3 = () => {

  const popup = document.createElement("div");

  popup.classList.add("overlay-yellow");

  popup.innerHTML = `
  
    <div class="popup-card-feedback">

      <h2>Godt du tjekkede!</h2>

      <p> Da du undersøgte nærmere så du, at siden ikke er officiel <br>⟶ du loggede derfor ikke ind </p>
      <p> <strong> MEN </strong>du klikkede på et phishing-link i mailen </p>

      <div class= gul-feedback>
        <img src="img/warning-icon.png" alt="" class="warning-icon">
        <p> I nogle tilfælde kan disse links forsøge at <br>installere skadelig software på din enhed </p>
      </div>

      <button class="next-btn btn">
        Se tegn på phishing →
      </button>

    </div>
  `;

  document.body.appendChild(popup);

  popup.querySelector("button")
    .addEventListener("click", () => {

      popup.remove();

      showPhishingInfo();
    });
};

//=============== INFO PHISHING 2 ===============//
const showPhishingInfo = () => {

  const popup = document.createElement("div");

  popup.classList.add("overlay");

  popup.innerHTML = `
  <div class="phishing-layout">
    <div class="popup-card-info1b">

      <h2>Tegn på phishing</h2>

      <div class= ph-info>
        <div class= ph-pics>
          <img src="img/phishing-info-1.png" alt="" class="phishing-info-1">
          <img src="img/phishing-info-2.png" alt="" class="phishing-info-2">
        </div>

        <div class= ph-explain>
          <div class= ph-explain-mail>
            <h3> Mailen </h3>
            <p class= ph-explain-1> <strong>Generisk hilsen</strong> <br>Mailen bruger en generisk hilsen “Hej” i stedet for dit navn</p>
            <p class= ph-explain-2> <strong>Mistænkelig afsender</strong> <br>Afsendermailen matcher ikke officielt domæne</p>
            <p class= ph-explain-3> <strong>Mistænkeligt link</strong> <br>Linket fører ikke til en officielle platform</p>
          </div>

          <div class= ph-explain-hjemmeside>
            <h3> Hjemmesiden </h3>
            <p class= ph-explain-4> <strong>Uofficiel URL</strong> <br>URL’en matcher ikke den officielle side (studieplatformen)</p>
          </div>
        </div>
      </div>
    </div>

      <button class="next-btn btn">
        Næste scene →
      </button>
    </div>
  `;

  document.body.appendChild(popup);

  popup.querySelector("button")
    .addEventListener("click", () => {

      popup.remove();

      showScene2Intro();
    });
};

// ================= INTRO SCENE 2 ================= //

const showScene2Intro = () => {

  updateUI(`
    ${renderTopbar()}

    <section class="intro">

      <img src="img/progress-bar-scene2.png" alt="Progression" class="progress-img">

      <div class="intro-wrapper">
        <div class="intro-card">

          <h2>Opgave i skolen</h2>

          <p>
            Du kommer i skole, hvor der er oplæg om den kommende store opgave
          </p>

          <p>
            Til opgaven mangler din computer programmet:
          </p>

          <blockquote>
            “PDF Pro Editor”
          </blockquote>

          <button class="next-btn btn" data-action="find-program">
            Find program
          </button>
        </div>
      </div>
    </section>

  `);
};

// ================= SCENE 2 ================= //

const showScene2 = () => {

  updateUI(`

    ${renderTopbar("img/mini-progressbar-2.png")}

    <section class="scene1">
      <div class="scene1-wrapper">

        <!-- LEFT CARD -->
        <div class="scene1-card">
          <h2>Hvad gør du?</h2>

          <p class="scene1-subtitle">
            Du har brug for programmet “PDF Pro Editor” til din opgave.
          </p>

          <!-- CHOICE 1 -->

          <button class="choice-btn choice-1-btn" data-action="choice-google">

            <img src="img/søg-ikon.png" alt="" class="choice-icon">

            <div>
              <h4>Søger efter gratis-versioner</h4>
              <p>Googler “PDF Pro Editor FREE download”</p>
            </div>
          </button>

          <!-- CHOICE 2 -->

          <button class="choice-btn choice-2-btn" data-action="choice-official">

            <img src="img/download-icon.png" alt="" class="choice-icon">

            <div>
              <h4>Den officielle hjemmeside</h4>
              <p>Finder programmets officielle side <br>og køber og downloader derfra</p>
            </div>
          </button>

          <!-- TIP BUTTON -->

          <button class="tip-btn">
            <img src="img/lightbulb-icon2.png" alt="" class="tip-icon">
            Tip?
          </button>
        </div>

        <!-- LAPTOP -->
        <img src="img/laptop-scene2.png" alt="" class="scene1-laptop">
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

    case "choice-link":
      showLoginIntro();
    break;

    case "choice-report":
      score += 100;
    break;

    case "choice-delete":
      score += 75;
    break;

    case "choice-login":
      score += 0;
    break;

    case "choice-tilbage":
      score += 25;
    break;

    case "choice-tjek":
      showLoginFeedback3();
      score += 30;
    break;

    case "find-program":
      showScene2();
    break;
  }
};


// ================= INIT ================= //

showStartScreen();