// Un prompt s'affiche avec la question suivante
answer = prompt("De quel nombre veux-tu calculer la factorielle ?")

function factorial(n) {
  // Ici (n != 1) ? est une expression ternaire ('(condition) ? truePart : falsPart') => si vraie => retourne n * factorial(n-1), sinon elle retourne 1
  return (n != 1) ? n * factorial(n - 1) : 1;

  // le fait d'appeler un fonction dans une fonction c'est ce que l'on appelle une fonction "récursive"
}

// Affiche en pop-up
alert(`Le résultat est : ${factorial(answer)}`);

//Résultat dans la console
console.log(`Le résultat est : ${factorial(answer)}`)