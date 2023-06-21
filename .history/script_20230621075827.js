var sentences = [
    "Sentence 1",
    "Sentence 2",
    "Sentence 3",
    // Add more sentences to the array as needed
  ];

  function getRandomSentence() {
    var randomIndex = Math.floor(Math.random() * sentences.length);
    return sentences[randomIndex];
  }

  document.getElementById("factButton").addEventListener("click", function() {
    var randomSentence = getRandomSentence();
    document.getElementById("facts").textContent = randomSentence;
  });