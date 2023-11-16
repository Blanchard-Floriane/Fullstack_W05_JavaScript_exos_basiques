answer = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?")

for(var count = 1; count <=answer; count++){
  let stage = " ".repeat(answer - count) + "#".repeat(count)
  console.log(stage)
}