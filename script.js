document.addEventListener("DOMContentLoaded", () => {
  // Todas las cartas disponibles
  const objetos = [
    {
      name: "pantalla",
      img: "img/pantalla.jpg"
    },
    {
      name: "platano",
      img: "img/platano.png"
    },
    {
      name: "galleta",
      img: "img/galleta.png"
    },
    {
      name: "pera",
      img: "img/pera.png"
    },
    {
      name: "manzana",
      img: "img/manzana.png"
    },
    {
      name: "caramelo",
      img: "img/caramelo.png"
    },
    {
      name: "ironman",
      img: "img/ironman.png"
    },
    {
      name: "pokemon",
      img: "img/pokemon.png"
    },
    {
      name: "patricio",
      img: "img/patricio.png"
    },
    {
      name: "mario",
      img: "img/mario.jpg"
    },
    {
      name: "zorro",
      img: "img/zorro.png"
    },
    {
      name: "gafas",
      img: "img/gafas.png"
    },
    {
      name: "helado",
      img: "img/helado.png"
    },
    {
      name: "burger",
      img: "img/burger.png"
    },
    {
      name: "limonada",
      img: "img/limonada.png"
    },
    {
      name: "rana",
      img: "img/rana.gif"
    },
    {
      name: "tarta",
      img: "img/tarta.gif"
    },
    {
      name: "perro",
      img: "img/perro.png"
    },
    {
      name: "gato",
      img: "img/gato.png"
    },
    {
      name: "pizza",
      img: "img/pizza.png"
    }
  ];

  objetos.sort(() => 0.5 - Math.random());

  const total = document.querySelector(".total");
  const resultDisplay = document.querySelector("#resultado");
  var cardsChosen = [];
  var cardsChosenId = [];
  var cardsWon = [];

  // Crea tu tablero
  function createBoard() {
    for (let i = 0; i < objetos.length; i++) {
      var card = document.createElement("img");
      card.setAttribute("src", "img/cartagirada.png");
      card.setAttribute("data-id", i);
      card.addEventListener("click", flipCard);
      total.appendChild(card);
    }
  }

  // Funcion para ver si alguna carta elegida coincide.
  function checkForMatch() {
    var cards = document.querySelectorAll("img");
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];

    if (optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute("src", "img/cartagirada.png");
      cards[optionTwoId].setAttribute("src", "img/cartagirada.png");
      alert("Recuerda Que Tienes Que Elegir Dos Cartas!");
    } else if (cardsChosen[0] === cardsChosen[1]) {
      alert("You found a match");
      cards[optionOneId].setAttribute("src", "img/blanco.png");
      cards[optionTwoId].setAttribute("src", "img/blanco.png");
      cards[optionOneId].removeEventListener("click", flipCard);
      cards[optionTwoId].removeEventListener("click", flipCard);
      cardsWon.push(cardsChosen);
    } else {
      cards[optionOneId].setAttribute("src", "img/cartagirada.png");
      cards[optionTwoId].setAttribute("src", "img/cartagirada.png");
      alert("Lo Siento Prueba De Nuevo");
    }
    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardsWon.length;
    if (cardsWon.length === objetos.length / 2) {
      resultDisplay.textContent = "Felicidades! Acabas De Ganar El Juego!";
    }
  }

  // Funcion girar tu carta
  function flipCard() {
    var cardId = this.getAttribute("data-id");
    cardsChosen.push(objetos[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute("src", objetos[cardId].img);
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  }

  createBoard();
})