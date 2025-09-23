
// Funktion för att klassificera storlek baserat på ras
export function getSizeByBreed(breed) {
  const smallBreeds = [
    "chihuahua",
    "papillon",
    "shihtzu",
    "pomeranian",
    "maltese",
  ];
  const mediumBreeds = [
    "beagle",
    "corgi",
    "terrier",
    "retriever",
    "sheepdog",
    "dalmatian",
    "boxer",
  ];
  const largeBreeds = [
    "labrador",
    "greyhound",
    "akita",
    "rottweiler",
    "newfoundland",
    "mastiff",
    "briard",
    "groenendael",
  ];

  if (smallBreeds.includes(breed)) return "Liten";
  if (mediumBreeds.includes(breed)) return "Mellan";
  if (largeBreeds.includes(breed)) return "Stor";
  return "Okänd";
}
