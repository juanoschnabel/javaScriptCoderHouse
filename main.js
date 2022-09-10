// TIPOS DE VEHÍCULOS
const vehicles = [];
vehicles.push({ id: "moto", price: 1000 });
vehicles.push({ id: "auto", price: 1500 });
vehicles.push({ id: "camioneta", price: 2000 });
function final(vehicle, days) {
  if (vehicle == 1000) {
    alert(
      `Usted seleccionó una moto para alquilar por el plazo de ` +
        days +
        " días!"
    );
  } else if (vehicle == 2000) {
    alert(
      `Usted seleccionó una camioneta para alquilar por el plazo de ` +
        days +
        " días!"
    );
  } else {
    alert(
      `Usted seleccionó un auto para alquilar por el plazo de ` +
        days +
        " días!"
    );
  }
  if (vehicle === 1000) {
    vehicle = 1000;
    alert("El precio final del alquiler solicitado es $" + vehicle * days);
  } else if (vehicle === 1500) {
    vehicle = 1500;
    alert("El precio final del alquiler solicitado es $" + vehicle * days);
  } else if (vehicle === 2000) {
    vehicle = 2000;
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
  let price = 0;
  let mapVehicles = vehicles.map((vehicle) => vehicle.id);
  let electionVehicle = prompt(
    `Hola!! ¿Qué tipo de vehículo desearías alquilar?\n${mapVehicles.join(
      "\n"
    )}`
  ).toLowerCase();
  switch (electionVehicle) {
    case "moto":
      alert(
        `El vehículo seleccionado es una moto. El precio por día de alquiler es de $ 1000`
      );
      return (price = 1000);
    case "auto":
      alert(
        `El vehículo seleccionado es un auto. El precio por día de alquiler es de $ 1500`
      );
      return (price = 1500);
    case "camioneta":
      alert(
        `El vehículo seleccionado es una camioneta. El precio por día de alquiler es de $ 2000`
      );
      return (price = 2000);
    default:
      alert("El vehículo seleccionado no existe");
      return price;
  }
}
