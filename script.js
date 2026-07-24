const P = {
  finland: {
    place: "Finland",
    title: "Portuguese and Finnish Pre-Christian Mythologies",
    sub: "Smartwalk Design in the Metaverse",
    date: "2026 - ongoing",
    image: "Finland.png",
    copy: "This doctoral research project explores how Portuguese and Finnish pre-Christian mythologies can be interpreted through an educational 3D environment. Participants move through a collaborative metaverse, examine archaeological contexts, test multimodal narrative strategies and design heritage-based smartwalks. The project brings together cultural memory, digital mediation, intermediality and collaborative learning. It approaches the metaverse not as a virtual display case, but as a space for interpretation, experimentation and shared meaning-making.",
    meta: "<strong>Partners & Academic Context:</strong> Universidade Aberta, University of Minho, UNESCO Chair and UNITWIN Network “The City that Educates and Transforms”, prospective Finnish higher-education partners.",
  },
  macau: {
    place: "Macau",
    title: "Urban Narratives: Crossing Roads in Portuguese",
    sub: "Language and urban memory",
    date: "2021",
    image: "Macau.png",
    copy: "Developed with the Portuguese Institute of the Orient and university students in Macau, this project connected Hamburg and Macau through Portuguese-language narratives. Students observed streets, buildings, signs, objects and everyday gestures. Their narratives became points of comparison between two distant urban contexts. The project explored how cities can reflect one another without becoming identical, and how Portuguese can create a meeting place between different urban memories.",
    meta: "<strong>Partners & Participants:</strong> Portuguese Institute of the Orient, University of Hamburg, university students in Macau and Hamburg.",
    links: [
      [
        "View project",
        "https://lecture2go.uni-hamburg.de/en/l2go/-/get/v/52134",
      ],
    ],
    audio: "urban_narratives.mp3",
  },
  sounds: {
    place: "Tunis",
    title: "Sounds of the Mediterranean",
    sub: "Heritage and Arts",
    date: "2016 - 2020",
    image: "Tunes.png",
    copy: "This programme connected Portuguese and Tunisian institutions through music, literature and artistic residencies. During these residencies, poems were adapted into music and brought into universities, heritage institutions, festivals, galleries, workshops and historic sites. The projects explored shared Mediterranean rhythms and chants, traces of Islamic culture in Portugal, and the movement of artistic forms across languages, religions and territories.",
    meta: "<strong>Partners & Stakeholders:</strong> Institut Supérieur des Langues de Tunis, University of Carthage, University of Manouba, Institut National du Patrimoine, Centre des Musiques Arabes et Méditerranéennes at Ennejma Ezzahra Palace, artists, writers and cultural organisations.",
    links: [
      [
        "View film",
        "https://drive.google.com/file/d/1qSoKs1eJmdILBNC4VpirsBvOrbcZx5_r/view?usp=sharing",
      ],
    ],
    audio: "sounds_mediterranean.m4a",
  },
  intersections: {
    place: "Hamburg",
    title: "Intersections",
    sub: "Literature and Photography, Architecture and Film, Theatre and Music, Painting and Scriptwriting",
    date: "2020 - 2026",
    image: "Intersections.png",
    copy: "These interdisciplinary modules explored how one artistic language can be transformed through another. Literary techniques were connected with framing, focalisation and cinematic space. Architecture was read through film. Paintings became starting points for scripts. Poetry moved into performance, sound and image. The sessions became small laboratories of intermedial translation, where participants could test how meaning changes when it moves from one medium into another.",
    meta: "<strong>Partners & Contributors:</strong> Institute of Romance Studies, University of Hamburg, guest filmmakers, actors, writers, musicians and artists.",
    links: [
      [
        "View example 1",
        "https://lecture2go.uni-hamburg.de/en/l2go/-/get/v/64127",
      ],
      [
        "View example 2",
        "https://lecture2go.uni-hamburg.de/en/l2go/-/get/v/64126",
      ],
    ],
    audio: "intersections_excerpt.mp3",
  },
  radio: {
    place: "Hamburg",
    title: "Radio Days",
    sub: "Digital Cultural Programming and Public Encounters",
    date: "2022 - 2026",
    image: "Radio-Days.png",
    copy: "Radio Days brings together the digital and public work developed through the Portuguese Language Centre in Hamburg. In a local radio programme, participants exchange ideas about sensory travel, conduct interviews, recommend readings and music, report on cultural encounters, and read texts inspired by their contact with writers, filmmakers, actors and musicians across the interdisciplinary programmes developed within Intersections. The project aimed to transform the Language Centre into a platform for cultural production, public exchange and experimental learning.",
    meta: "<strong>Partners & Stakeholders:</strong> University of Hamburg, EUNIC Hamburg, Senate of Hamburg, German radio stations, institutions in Macau, museums, cinemas, writers, filmmakers, actors, musicians and European cultural institutes.",
    links: [
      [
        "View project",
        "https://lecture2go.uni-hamburg.de/en/l2go/-/get/v/58188",
      ],
    ],
  },
  ink: {
    place: "Durban",
    title: "Voices of Inkululeko",
    sub: "Narratives of Place, Memory and Freedom",
    date: "2013 - 2016",
    image: "Voices.png",
    copy: "Developed through fieldwork in Lamontville township, this project gathered local narratives of place, identity, memory and social transformation. Interviews and visual material were shaped into a short ethnographic video. The work explored how community voices can enter educational and cultural spaces without being reduced to background material.",
    meta: "<strong>Partners & Participants:</strong> Durban University of Technology, International Education and Partnerships, Lamontville community representatives and local participants.",
    audio: "voices_inkululeko.mp3",
  },
  quiz: {
    place: "Durban",
    title: "After the Quizumbas, the Lions",
    sub: "After the Laughter, the Fear",
    date: "2013 - 2016",
    image: "Lions.png",
    copy: "This oral-history and sound project brings together memories from Portuguese people who lived in Mozambique. The accounts move between savannah and city, family life and displacement, laughter and fear. Through voice, silence and remembered sound, the project explores how personal testimony can preserve the emotional texture of a place after departure.",
    meta: "<strong>Participants:</strong> Portuguese interviewees with lived experience of Mozambique.",
    audio: "after_quizumbas.mp3",
  },
};
const D = document.querySelector("#project"),
  C = document.querySelector("#content");
function projectHtml(p) {
  const links = p.links
    ? `<div class="actions">${p.links.map((x) => `<a target="_blank" rel="noopener" href="${x[1]}">${x[0]}</a>`).join("")}</div>`
    : "";
  const audio = p.audio
    ? `<div class="audio"><strong>Voices of the project</strong><audio controls src="assets/audio/${p.audio}"></audio></div>`
    : "";
  const image = p.image
    ? ` style="--project-image:url('assets/images/project-backgrounds/${p.image}')"`
    : "";
  return `<article class="project"${image}><p class="kicker">${p.place}</p><p class="date">${p.date}</p><h2>${p.title}</h2><p class="sub">${p.sub}</p><div class="copy"><p>${p.copy}</p></div>${audio}${links}<p class="meta">${p.meta}</p></article>`;
}
document.querySelectorAll("[data-project]").forEach((button) => {
  button.addEventListener("click", () => {
    C.innerHTML = projectHtml(P[button.dataset.project]);
    D.showModal();
  });
});
document
  .querySelector("[data-close]")
  .addEventListener("click", () => D.close());
const CD = document.querySelector("#contact");
document.querySelectorAll("[data-contact]").forEach((button) => {
  button.addEventListener("click", () => CD.showModal());
});
document
  .querySelector("[data-close-contact]")
  .addEventListener("click", () => CD.close());
document.querySelector("#form").addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(event.target);
  const subject = encodeURIComponent(data.get("subject"));
  const body = encodeURIComponent(
    `Name: ${data.get("name")}\nInstitution: ${data.get("institution")}\nEmail: ${data.get("email")}\n\n${data.get("message")}`,
  );
  location.href = `mailto:ispeakportuguese351@gmail.com?subject=${subject}&body=${body}`;
});
