var cars = [
  {
    module: "Peugeot 208",
    mainImage: "./images/vehicule1.png",
    sideImage: "",
    description:
      "Diesel, 5 portes, GPS, AutoRadio, Forfait 1000Km (0.5/Km supplémentaire).",
    prix: 999,
    agency: "Agence de Paris",
  },
  {
    module: "Ford Focus",
    mainImage: "./images/vehicule2.png",
    sideImage: "",
    description:
      "Diesel, 5 portes, GPS, AutoRadio, Forfait 1000Km (0.5/Km supplémentaire).",
    prix: 999,
    agency: "Agence de Paris",
  },
  {
    module: "Audi A1",
    mainImage: "./images/vehicule3.png",
    sideImage: "",
    description:
      "Diesel, 5 portes, GPS, AutoRadio, Forfait 1000Km (0.55/Km supplémentaire).",
    prix: 1100,
    agency: "Agence de Paris",
  },
  {
    module: "Opel Mokka",
    mainImage: "./images/vehicule4.png",
    sideImage: "",
    description:
      "Diesel, 5 portes, GPS, AutoRadio, Forfait 1000Km (0.4/Km supplémentaire).",
    prix: 1150,
    agency: "Agence de Paris",
  },
];
var backgroundCars = [
  {
    img: "./images/background",
  },
  {
    img: "./images/background2",
  },
  {
    img: "./images/background3",
  },
];
$(document).ready(function () {
  $(".carsNumber").html(`${cars.length} résultat`);
  for (var i = 0; i < cars.length; i++) {
    $("#cars").append(` <div class="car">
  <div class="carImage" style="background-image: url(${cars[i].mainImage});"></div>
  <div class="carDes">
   <h3 class="module">${cars[i].module}</h3>
   <p class="carInfo">${cars[i].description}</p>
   <p class="carPrice">${cars[i].prix} - ${cars[i].agency}</p>
   <button class="reserveButton">Réservez et payez</button>
  </div>
 </div>`);
  }
  $("#Menu").click(function () {
    $(".menu").fadeToggle();
  });
});
