function showFact() {
  // Array of Italian history fun facts
  var facts = [
    "Italy has more UNESCO World Heritage sites than any other country in the world",
    "The first pizzeria in the world was opened in Naples, Italy in 1738",
    "The first modern bank was founded in Florence, Italy in 1397",
    "The Roman Empire was one of the largest and longest-lasting empires in world history",
    "The Leaning Tower of Pisa began to lean during its construction due to soft ground",
    "The Renaissance, a period of great cultural and artistic growth in Europe, began in Italy in the 14th century",
    "The first pizzeria in the world, Antica Pizzeria Port'Alba, opened in Naples in 1830.",
    "Pasta didn't originate in Italy, but in China. It was brought to Italy by Marco Polo.",
    "In Italy, there are over 350 different types of pasta.",
    "Parmigiano-Reggiano cheese can only be made in certain parts of Italy and is closely regulated by the government.",
    "Italian gelato is made with less butterfat and more sugar than ice cream, giving it a denser and creamier texture."
  ];

  // Generate a random number between 0 and the length of the facts array
  var randomIndex = Math.floor(Math.random() * facts.length);

  // Display a random fact
  alert(facts[randomIndex]);
}




  