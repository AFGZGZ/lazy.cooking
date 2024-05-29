var pasta = {
  tipo: "lazos",
  cantidadPp: 100,
};

var personas = 3;

var ingredientes = ["tomate", "queso", "atun"];

var tiempoTotal = 10000;
var pastaCocida = false;

var instruccionesSencillas = ["agua en la cazuela", "calentar el agua"];

function cantidadTotal(cpp, per) {
  return cpp * per;
}

function estaYa(tiempo) {
  for (var i = tiempo; i > 0; i = i - 1000) {
    console.log("sigo cocinandome " + i);
  }
  pastaCocida = true;
  return "¡Estoy hecho!";
}

function cocinaTodo() {
  for (var i = 0; i < instruccionesSencillas.length; i++) {
    console.log(instruccionesSencillas[i] + " hecho");
  }

  console.log(
    "añadir " +
      cantidadTotal(pasta.cantidadPp, personas) +
      " gramos de " +
      pasta.tipo
  );

  console.log(estaYa(tiempo));

  if ((pastaCocida = true)) {
    for (var i = 0; i < ingredientes.length; i++) {
      console.log("añadido: " + ingredientes[i]);
    }
  }
  console.log("Listo para comer");
}

//llamar a la función cocinaTodo()
