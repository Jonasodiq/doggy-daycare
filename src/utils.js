
// Funktion för att klassificera storlek baserat på ras
export function getSizeByBreed(breed) {
  if (!breed) return "Okänd";

  const breedLower = breed.toLowerCase();

  // Lista över regler
  const rules = [
    // Små hundar
    { match: ["chihuahua", "papillon", "shihtzu", "pomeranian", "maltese"], size: "Liten" },

    // Mellanstora hundar
    { match: ["beagle", "corgi", "dalmatian", "boxer"], size: "Mellan" },
    { match: ["terrier", "retriever", "sheepdog"], size: "Mellan", type: "partial" },

    // Stora hundar
    { match: ["labrador", "greyhound", "akita", "rottweiler", "newfoundland", "mastiff", "briard", "groenendael"], size: "Stor" },
  ];

  // Kolla reglerna i ordning
  for (const rule of rules) {
    if (rule.type === "partial") {
      // Matcha om rasen innehåller ordet
      if (rule.match.some((m) => breedLower.includes(m))) {
        return rule.size;
      }
    } else {
      // Matcha exakta ord
      if (rule.match.includes(breedLower)) {
        return rule.size;
      }
    }
  }

  // Fallback
  return "Okänd";
}
