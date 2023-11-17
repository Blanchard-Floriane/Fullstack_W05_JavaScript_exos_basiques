function botTeubé(userAnswer) {

  if (userAnswer.endsWith("?")) {
      return "Ouais Ouais...";
  }

  if (userAnswer === userAnswer.toUpperCase() && userAnswer.trim() !== "") {
      return "Pwa, calme-toi...";
  }

if (userAnswer.toLowerCase().includes("fortnite")) {
      return "on s' fait une partie soum-soum ?";
  }

  if (userAnswer.trim() === "") {
    return "t'es en PLS ?";
  }

    return "balek.";
}


let userAnswer = prompt("Dis un truc dis :");

let leBouffon = botTeubé(userAnswer);
alert(leBouffon);