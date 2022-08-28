// PASTEL DE PAPAS
const papas = 0.25;
const carnePicada = 0.25;
const cebolla = 0.25;
const morron = 0.25;
const ajo = 0.5;
const manteca = 10;
let comensales;
do {
  comensales = prompt(
    "Aquí tenemos la receta perfecta del pastel de papas!! \nIngrese la cantidad de comesales y, a continuación, te daremos las cantidades correctas de cada ingrediente!"
  );
  if (!isNaN(comensales) && comensales >= 1) {
    alert(
      "La cantidad de gente para la que cocinas es " +
        comensales +
        ". Tu receta debe llevar: \n" +
        papas * comensales +
        "kg de papas \n" +
        carnePicada * comensales +
        " kg de carne picada \n" +
        cebolla * comensales +
        " kg de cebolla \n" +
        morron * comensales +
        " morrones rojos \n" +
        ajo * comensales +
        " dientes de ajo \n" +
        comensales * manteca +
        " gr de manteca \n"
    );
  } else if (!isNaN(comensales) && comensales < 1 && comensales != "") {
    alert("Sin comensales no hay pastel!!");
  } else {
    alert("Debes ingresar un dato válido. Vuelve a intenarlo!");
  }
} while (isNaN(comensales) || comensales == 0 || comensales < 0);
