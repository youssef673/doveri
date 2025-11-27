// Contenuti in italiano e inglese (articolo unico) + generazione TOC e funzioni di condivisione
const content = {
  it: {
    toc: [
      { id: "introduzione", title: "Introduzione ai doveri" },
      { id: "solidarieta", title: "Solidarietà" },
      { id: "partecipazione", title: "Partecipazione politica e civica" },
      { id: "responsabilita", title: "Responsabilità e rispetto della legge" },
      { id: "digitale", title: "Responsabilità nell'era digitale" },
      { id: "ambiente", title: "Rispetto dell'ambiente e beni comuni" },
      { id: "educazione", title: "Educazione civica e giovani" },
      { id: "diritti", title: "Relazione tra diritti e doveri" },
      { id: "risorse", title: "Risorse utili" },
      { id: "conclusioni", title: "Riflessioni e conclusioni" }
    ],
    sections: {
      introduzione: {
        title: "Introduzione ai doveri dei cittadini",
        html: `<p>La cittadinanza non è fatta solo di diritti: comporta doveri fondamentali che ogni persona deve rispettare. Questi doveri sono essenziali per il buon funzionamento di una democrazia, perché assicurano solidarietà, partecipazione e responsabilità civica.</p>
               <p>Obiettivo: introdurre il concetto di "doveri" come complemento imprescindibile dei diritti e mostrare come tali doveri contribuiscano alla coesione sociale e al funzionamento democratico.</p>
               <div class="article-hero">
                 <img src="assets/images/solidarieta.svg" alt="Illustrazione solidarietà" />
                 <div><p>La conoscenza dei doveri aiuta i cittadini a partecipare consapevolmente alla vita pubblica. Qui trovi riferimenti, esempi pratici e strumenti per approfondire.</p></div>
               </div>`
      },
      solidarieta: {
        title: "Cos'è la solidarietà?",
        html: `<p>La solidarietà è il dovere di prendersi cura degli altri membri della comunità, in particolare delle persone più vulnerabili. È un senso di responsabilità collettiva verso il benessere comune.</p>
               <h3>Perché è importante</h3>
               <p>La solidarietà rafforza il tessuto sociale e favorisce politiche più eque; è fondamentale in situazioni di emergenza e nella tutela delle minoranze.</p>`
      },
      partecipazione: {
        title: "Partecipazione politica e civica",
        html: `<p>Partecipare è sia un diritto sia un dovere. Votare, aderire a iniziative locali, fare volontariato e monitorare le politiche pubbliche sono strumenti concreti per influenzare il cambiamento.</p>
               <img src="assets/images/partecipazione.svg" alt="Illustrazione partecipazione" style="width:220px;margin-top:8px" />`
      },
      responsabilita: {
        title: "Responsabilità civica e rispetto della legge",
        html: `<p>Rispettare le leggi, collaborare con le autorità e curare i beni comuni sono aspetti fondamentali del vivere insieme. L'eticità delle azioni personali supporta la fiducia pubblica.</p>`
      },
      digitale: {
        title: "Responsabilità nell'era digitale",
        html: `<p>Verificare le fonti, proteggere i dati personali e limitare la diffusione di disinformazione sono doveri che valgono anche online. Usa strumenti di fact-checking prima di condividere notizie.</p>`
      },
      ambiente: {
        title: "Rispetto dell'ambiente e cura dei beni comuni",
        html: `<p>Ridurre sprechi, favorire mobilità sostenibile e partecipare a iniziative di tutela del territorio sono pratiche concrete che esprimono responsabilità civica verso le generazioni future.</p>
               <img src="assets/images/ambiente.svg" alt="Illustrazione ambiente" style="width:180px;margin-top:8px" />`
      },
      educazione: {
        title: "Educazione civica e giovani",
        html: `<p>Formare i giovani alla partecipazione e alla conoscenza dei diritti/doveri è un investimento per la democrazia. Scuole e istituzioni devono promuovere percorsi pratici di cittadinanza attiva.</p>`
      },
      diritti: {
        title: "Relazione tra diritti e doveri",
        html: `<p>I diritti sono fondamentali, ma il loro esercizio responsabile richiede il rispetto dei doveri. Le costituzioni moderne, come l'art. 2 della Costituzione italiana, richiamano l'adempimento dei doveri di solidarietà.</p>`
      },
      risorse: {
        title: "Risorse utili (link esterni)",
        html: `<p>Trovi risorse istituzionali, strumenti per il volontariato e piattaforme di verifica delle informazioni nella sezione "Riferimenti legislativi" e nella lista delle risorse nel footer della pagina.</p>`
      },
      conclusioni: {
        title: "Riflessioni e conclusioni",
        html: `<p>La democrazia richiede impegno quotidiano: solidarietà, partecipazione e responsabilità sono la base per una convivenza giusta. Comincia dalle azioni locali e informate.</p>`
      }
    }
  },

  en: {
    toc: [
      { id: "introduzione", title: "Introduction to citizens' duties" },
      { id: "solidarieta", title: "Solidarity" },
      { id: "partecipazione", title: "Political and civic participation" },
      { id: "responsabilita", title: "Responsibility and rule of law" },
      { id: "digitale", title: "Responsibility in the digital age" },
      { id: "ambiente", title: "Environmental protection and commons" },
      { id: "educazione", title: "Civic education and youth" },
      { id: "diritti", title: "Relationship between rights and duties" },
      { id: "risorse", title: "Useful resources" },
      { id: "conclusioni", title: "Reflections and conclusions" }
    ],
    sections: {
      introduzione: {
        title: "Introduction to citizens' duties",
        html: `<p>Citizenship involves duties as well as rights. Duties sustain democracy by promoting solidarity, participation and civic responsibility.</p>
               <p>This page provides references, images and tools to help you explore civic duties and how to act responsibly in public life.</p>`
      },
      solidarieta: {
        title: "What is solidarity?",
        html: `<p>Solidarity is the duty to care for other members of the community, especially the most vulnerable. It underpins social cohesion and fair policies.</p>`
      },
      partecipazione: {
        title: "Political and civic participation",
        html: `<p>Participation is both a right and a duty. Voting, volunteering and engaging in public debate are ways to shape collective decisions.</p>`
      },
      responsabilita: {
        title: "Civic responsibility and the rule of law",
        html: `<p>Respecting laws, collaborating with institutions and caring for public goods are essential expressions of civic responsibility.</p>`
      },
      digitale: {
        title: "Responsibility in the digital age",
        html: `<p>Verify sources, protect personal data and avoid spreading misinformation online. Digital conduct impacts the whole community.</p>`
      },
      ambiente: {
        title: "Environmental protection and commons",
        html: `<p>Responsible use of natural resources and participation in local environmental initiatives are ways to express intergenerational solidarity.</p>`
      },
      educazione: {
        title: "Civic education and youth",
        html: `<p>Investing in education for civic engagement helps prepare responsible citizens for the future.</p>`
      },
      diritti: {
        title: "Relationship between rights and duties",
        html: `<p>Rights and duties are interconnected: to fully enjoy rights, citizens must exercise responsibilities that protect others' rights.</p>`
      },
      risorse: {
        title: "Useful resources",
        html: `<p>See the legislative references and resource links for official documents and organizations working on civic participation.</p>`
      },
      conclusioni: {
        title: "Reflections and conclusions",
        html: `<p>Democracy depends on continuous commitment. Start locally, stay informed and act responsibly — both offline and online.</p>`
      }
    }
  }
};

// DOM references
const tocList = document.getElementById('tocList');
const contentContainer = document.getElementById('contentContainer');
const btnIt = document.getElementById('btn-it');
const btnEn = document.getElementById('btn-en');
const shareTwitter = document.getElementById('shareTwitter');
const shareFacebook = document.getElementById('shareFacebook');
const shareWhatsapp = document.getElementById('shareWhatsapp');

let currentLang = 'it';

function buildTOC(lang) {
  tocList.innerHTML = '';
  const items = content[lang].toc;
  items.forEach(it => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = `#${it.id}`;
    a.textContent = it.title;
    li.appendChild(a);
    tocList.appendChild(li);
  });
}

function buildContent(lang) {
  contentContainer.innerHTML = '';
  const sections = content[lang].sections;
  for (const key in sections) {
    const sec = document.createElement('section');
    sec.id = key;
    sec.className = 'article-section';
    sec.innerHTML = `<h2>${sections[key].title}</h2>${sections[key].html}`;
    contentContainer.appendChild(sec);
  }
  // add legislazione section is static in index.html, keep it after generated content
}

// Language switch handlers
btnIt.addEventListener('click', () => setLang('it'));
btnEn.addEventListener('click', () => setLang('en'));

function setLang(lang) {
  if (lang === currentLang) return;
  currentLang = lang;
  // toggle active class
  document.querySelectorAll('.lang').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
  buildTOC(lang);
  buildContent(lang);
  // update top texts if needed
  document.getElementById('siteTitle').textContent = lang === 'it' ? 'Doveri dei cittadini' : "Citizens' duties";
  document.getElementById('siteLead').textContent = lang === 'it'
    ? 'Un testo unico con riferimenti legislativi, immagini, risorse e strumenti per condividere e commentare.'
    : 'A single-page text with legislative references, images, resources and tools to share and comment.';
  document.getElementById('tocTitle').textContent = lang === 'it' ? 'Sommario' : 'Contents';
  document.getElementById('legTitle').textContent = lang === 'it' ? 'Riferimenti legislativi' : 'Legislative references';
  document.getElementById('legIntro').textContent = lang === 'it'
    ? 'Link utili ai testi costituzionali e ad altri riferimenti normativi.'
    : 'Useful links to constitutional texts and other normative references.';
  document.getElementById('footerNote').textContent = lang === 'it'
    ? 'Creato per la presentazione sui doveri civici. Immagini SVG incluse nella cartella assets/images. Lingue: italiano / inglese.'
    : "Created for the presentation on citizens' duties. SVG images are included in assets/images. Languages: Italian / English.";
  // scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Social share links (open in new window)
function updateShareLinks() {
  const url = encodeURIComponent(window.location.href);
  const textIT = encodeURIComponent('Doveri dei cittadini — risorse e approfondimenti');
  const textEN = encodeURIComponent("Citizens' duties — resources and references");
  const text = currentLang === 'it' ? textIT : textEN;

  shareTwitter.href = `https://twitter.com/intent/tweet?url=${url}&text=${text}`;
  shareFacebook.href = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
  shareWhatsapp.href = `https://api.whatsapp.com/send?text=${text}%20${url}`;
  // ensure links open in new tab
  [shareTwitter, shareFacebook, shareWhatsapp].forEach(a => {
    a.setAttribute('target', '_blank');
    a.setAttribute('rel', 'noopener noreferrer');
  });
}

// init
buildTOC(currentLang);
buildContent(currentLang);
updateShareLinks();

// update share links when language changes
document.querySelectorAll('.lang').forEach(b => b.addEventListener('click', () => setTimeout(updateShareLinks, 100)));

// Enhance: deep links in TOC: smooth scroll
document.addEventListener('click', (e) => {
  if (e.target.tagName === 'A' && e.target.getAttribute('href')?.startsWith('#')) {
    e.preventDefault();
    const id = e.target.getAttribute('href').substring(1);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
});
