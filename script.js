const headerContainer = document.querySelector("#headerContainer");
const cardContainer = document.querySelector("#cardContainer");

const games = [
  {
    name: "Personal 5 Royal",
    src: "./src/persona-5-royale-ps5-store-artwork-01-en-30sep22.webp",
    alt: "Image of the game Persona 5 Royal",
  },
  {
    name: "PPokemon Emerald",
    src: "./src/pokemon-emerald-version_4q9d.1200.webp",
    alt: "Image of the game Pokemon Emerald",
  },
  {
    name: "Ori and the Blind Forest",
    src: "./src/ori.jpg",
    alt: "Image of the game Ori and the Blind Forest",
  },
  {
    name: "Trials of Mana",
    src: "./src/trials-of-mana.jpg",
    alt: "Image of the game Trials of Mana",
  },
];

const gameInfo = [
  {
    name: "LOZ: Echoes of Wisdom",
    desc: "Save the kingdom of Hyrule – this time with the wisdom of Princess Zelda – in The Legend of Zelda: Echoes of Wisdom for Nintendo Switch. The people of Hyrule are being stolen away by strange rifts that have appeared, and with a certain swordsman among those missing, it’s up to Princess Zelda to save her kingdom.",
    img: "https://target.scene7.com/is/image/Target/GUEST_f816abc1-9145-43e9-a9f1-7c9e4480a159?wid=1200&hei=1200&qlt=80",
    link: "https://www.nintendo.com/us/store/products/the-legend-of-zelda-echoes-of-wisdom-switch/?srsltid=AU7gw4XTrRpvqFiMi1Y-59-NwITJB8IzUWG-XVooXvQijpwx5xx-7T-I",
    imgAlt: "An image of the game, Legend of Zelda: Echoes of wisdom",
  },
  {
    name: "Persona 5 Royal",
    desc: "Forced to transfer to a high school in Tokyo, the protagonist has a strange dream. “You truly are a prisoner of fate. In the near future, ruin awaits you.” With the goal of “rehabilitation” looming overhead, he must save others from distorted desires by donning the mask of a Phantom Thief.",
    img: "https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_500/store/software/switch/70010000043147/684bd8b00abcbf6dd122727a27c01a337f667bef825f4f4662efad9854b72fd4",
    link: "https://www.nintendo.com/us/store/products/persona-5-royal-switch/?srsltid=AU7gw4UQD5_9Z_TchGf1WQDh24mD2NanZd89M0XL28hKnfMgmpT72Ob3",
    imgAlt: "An image of the game, Persona 5 Royal",
  },
  {
    name: "Ori and the Blind Forest",
    desc: "The forest of Nibel is dying. After a powerful storm sets a series of devastating events in motion, Ori must journey to find courage and confront a dark nemesis to save the forest of Nibel. “Ori and the Blind Forest” tells the tale of a young orphan destined for heroics, through a visually stunning Action-Platformer crafted by Moon Studios. Featuring hand-painted artwork, meticulously animated character performance, a fully orchestrated score and dozens of new features in the Definitive Edition, “Ori and the Blind Forest” explores a deeply emotional story about love and sacrifice, and the hope that exists in us all.",
    img: "https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_600/store/software/switch/70010000018710/89e1f45e5012962fcdbc47b297dbb99472d04fdae7c60213bce6fb44713d2068",
    link: "https://www.nintendo.com/us/store/products/ori-and-the-blind-forest-definitive-edition-switch/?srsltid=AU7gw4VMs83hjqhrKh38Ir-gk2on1Fuokkhc6obKTnoISEENcPYVR9i7",
    imgAlt: "An image of the game, Ori and the Blind Forest",
  },
];

function createElemComponent(object) {
  const { name, desc, img, link, imgAlt } = object;

  const generatedElem = `
    <div class="header-left-content">
          <p class="hero-text">${name}</p>
          <p class="hero-subtext">
            ${desc}
          </p>
          <button>
            <a
              href="${link}}" target="_blank"
              >Get it here</a
            >
          </button>
        </div>
        <div class="header-right-content">
          <figure>
            <img
              src="${img}"
              alt="${imgAlt}"
            />
          </figure>
        </div>
    `;

  return generatedElem;
}
function createRecommendedElemComp(array) {
  let completeCards = "";

  for (let index = 0; index < array.length; index++) {
    const { name, src, alt } = array[index];

    const cardElem = `
      <div class="card">
        <img
          src="${src}"
          alt="${alt}"
        />
        <p>${name}</p>
      </div>
  `;

    completeCards += cardElem;
  }

  return completeCards;
}

function appendElement(elem, container) {
  container.innerHTML = elem;
}

function changeFeaturedGame() {
  let gameIndex = 0;
  setInterval(function () {
    appendElement(createElemComponent(gameInfo[gameIndex]), headerContainer);
    gameIndex = (gameIndex + 1) % gameInfo.length;
  }, 3000);
}

changeFeaturedGame();
appendElement(createRecommendedElemComp(games), cardContainer);
console.table(gameInfo);
