// TIPOS DE VEHÍCULOS
const vehicle1 = "moto";
const vehicle2 = "auto";
const vehicle3 = "camioneta";
// PRECIO DE LOS VEHICULOS X DIA
const priceVehicle1 = 1000;
const priceVehicle2 = 1500;
const priceVehicle3 = 2000;

function final(vehicle, days) {
  if (vehicle === vehicle1 || vehicle === vehicle3) {
    alert(
      "Usted seleccionó una " +
        vehicle +
        " para alquilar por el plazo de " +
        days +
        " días"
    );
  } else {
    alert(
      "Usted seleccionó un " +
        vehicle +
        " para alquilar por el plazo de " +
        days +
        " días"
    );
  }
  if (vehicle === vehicle1) {
    vehicle = priceVehicle1;
    alert("El precio final del alquiler solicitado es $" + vehicle * days);
  } else if (vehicle === vehicle2) {
    vehicle = priceVehicle2;
    alert("El precio final del alquiler solicitado es $" + vehicle * days);
  } else if (vehicle === vehicle3) {
    vehicle = priceVehicle3;
    alert("El precio final del alquiler solicitado es $" + vehicle * days);
  } else {
    alert("Error!! Vuelva a intentarlo");
  }
  alert("Gracias por elegirnos!!");
}
final(electionVehicles(), time());

function time() {
  let days = Number(
    prompt("Seleccione la cantidad de días que desea alquilar el vehículo")
  );
  return days;
}

function electionVehicles() {
  let electionVehicle = Number(
    prompt(
      "Seleccione el número correspondiente al tipo de vehículo que desea seleccionar: \n1. " +
        vehicle1 +
        "\n2. " +
        vehicle2 +
        "\n3. " +
        vehicle3
    )
  );
  switch (electionVehicle) {
    case 1:
      alert(
        "El vehículo seleccionado es una " +
          vehicle1 +
          " y el precio por día de alquiler es $" +
          priceVehicle1
      );
      return (electionVehicle = vehicle1);
    case 2:
      alert(
        "El vehículo seleccionado es un " +
          vehicle2 +
          " y el precio por día de alquiler es $" +
          priceVehicle2
      );
      return (electionVehicle = vehicle2);
    case 3:
      alert(
        "El vehículo seleccionado es una " +
          vehicle3 +
          " y el precio por día de alquiler es $" +
          priceVehicle3
      );
      return (electionVehicle = vehicle3);
    default:
      alert("El vehículo seleccionado no existe");
      return (electionVehicle = "No existe");
  }
}
