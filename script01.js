var rodizio = "";

function placa1() {
  rodizio = prompt(
    "Dia da semana do seu rodizio",
    "Digite o numero final da sua placa"
  );

  if (rodizio <= 3) {
    alert("Proibido andar nas segundas-feiras");
  } else {
    if (rodizio > 9) {
      alert("Digite certo o numero final de sua placa");
    } else {
      if (rodizio <= 6) {
        alert("Proibido andar nas quartas-feiras");
      } else {
        alert("Proibido andar nas sextas-feiras");
      }
    }
  }
}

function placa2() {
  rodizio = prompt(
    "Dia da semana do seu rodizio",
    "Digita o final da sua placa"
  );

  switch (rodizio) {
    case "1":
      alert("Proibido andar nas Segundas");
      break;

    case "2":
      alert("Proibido andar nas Segundas");
      break;

    case "3":
      alert("Proibido andar nas Terças");
      break;

    case "4":
      alert("Proibido andar nas Terças");
      break;

    case "5":
      alert("Proibido andar nas Quartas");
      break;

    case "6":
      alert("Proibido andar nas Quartas");
      break;

    case "7":
      alert("Proibido andar nas Quintas");
      break;

    case "8":
      alert("Proibido andar nas Quintas");
      break;

    case "9":
      alert("Proibido andar nas Sextas");
      break;

    case "0":
      alert("Proibido andar nas Sextas");
      break;

    default:
      alert("Digite certo o numero final de sua placa");
      break;
  }
}
