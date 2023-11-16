const arn = prompt("Quel est l'ARN à traduire ?");
    const codons = arn.match(/.{1,3}/g);
    const proteins = codons.map(codon => {
      switch (codon) {
        case "UCU":
        case "UCC":
        case "UCA":
        case "UCG":
        case "AGU":
        case "AGC":
          return "Sérine";
        case "CCU":
        case "CCC":
        case "CCA":
        case "CCG":
          return "Proline";
        case "UUA":
        case "UUG":
          return "Leucine";
        case "UUU":
        case "UUC":
          return "Phénylalanine";
        case "CGU":
        case "CGC":
        case "CGA":
        case "CGG":
        case "AGA":
        case "AGG":
          return "Arginine";
        case "UAU":
        case "UAC":
          return "Tyrosine";
        default:
          return "Codon inconnu";
      }
    });
console.log(`L'ARN ${arn} correspond à la suite d'acides amniés : ${proteins.join("-")}.`);