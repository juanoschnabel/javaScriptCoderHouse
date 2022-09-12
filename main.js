//VEHICULOS
const vehicles = [];
vehicles.push({ id: "moto", price: 1000 });
vehicles.push({ id: "auto", price: 1500 });
vehicles.push({ id: "camioneta", price: 2000 });
vehicles.push({ id: "cuatriciclo", price: 3000 });
let vehicle;
let finalId;
let finalPrice;
function electionVehicles() {
  let electionVehicle;
  const mapVehicles = vehicles.map((vehicle) => vehicle.id);
  do {
    electionVehicle = prompt(
      `Hola!! ¿Qué tipo de vehículo deseas alquilar?\n${mapVehicles.join("\n")}`
    ).toLowerCase();
    vehicle = vehicles.find((vehicle) => vehicle.id === electionVehicle);
    electionVehicle = vehicles.some(
      (vehicle) => vehicle.id === electionVehicle
    );
    if (electionVehicle === true) {
      alert(
        `Usted seleccionó un ${vehicle.id}. El precio por día de alquiler es de $${vehicle.price}`
      );
      return vehicle;
    } else {
      alert(`El vehículo seleccionado no existe. Intente nuevamente`);
    }
  } while (electionVehicle != true);
}
function time() {
  let days;
  do {
    days = Number(
      prompt(`Seleccione la cantidad de días que desea alquilar el vehículo`)
    );
    if (!isNaN(days) && days >= 1 && Number.isInteger(days)) {
      break;
    } else {
      alert(`Ingrese un dato válido`);
    }
  } while (isNaN(days) || days == 0 || days < 0 || !Number.isInteger(days));
  return days;
}
function final(vehicle, price, time) {
  alert(
    `Usted seleccionó un ${vehicle} para alquilar por el plazo de ${time} días!! El precio final es de $${
      price * time
    }`
  );
  alert(`Gracias por elegirnos!!`);
}
electionVehicles();
finalId = vehicle.id;
finalPrice = vehicle.price;
final(finalId, finalPrice, time());
