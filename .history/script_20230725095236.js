document.addEventListener("DOMContentLoaded", function () {

var sentences = [
    "Chad was born in North Dakota.",
    "Chad really enjoys the scent of tomato leaves.",
    "Chad feeds his cat at 7am, 12pm, 3pm, and 8pm.",
    "The first role that Chad every played on stage was Francis in 'Our Girls' by Conrad Seiler.",
    "Chad's favorite college acting role is Orpheus in 'Polaroid Stories' by Naomi Iizuka.",
    "Chad's favorite manga artist is Junji Ito.",
    "Chad's favorite SNES game is a tie between Chrono Trigger and Super Mario RPG.",
    "Chad's favorite N64 game is The Legend of Zelda: Majora's Mask.",
    "Chad has never traveled east of North Dakota.",
    "Chad got engaged in Honolulu.",
    "Chad's favorite western comic is Hellboy.",
    "Chad's childhood stuffed animal was the RCA dog, Nipper.",
    "Chad likes to get work started early in the day.",
    "Chad prefers cool weather. 60 degrees is t-shirt weather",
    "Chad was on the men's dance team in high school.",
    "Chad's favorite album is 'Abbey Road'.",
    "Chad's favorite book as a child was 'Mrs. Frisby and the Rats of NIMH'",
    "Chad's would rank his favorite types of candy as fruity, sour, then chocolate.",
    "Chad's two favorite movies are Tombstone and John Carpenter's The Thing.",
    "Chad has never broken a bone (knock on wood).",
    "While it wasn't the best that has ever been made, Chad has successfully made a Beef Wellington.",
  ];

  function getRandomSentence() {
    var randomIndex = Math.floor(Math.random() * sentences.length);
    return sentences[randomIndex];
  }

  document.getElementById("factButton").addEventListener("click", function() {
    var randomSentence = getRandomSentence();
    document.getElementById("facts").textContent = randomSentence;
  });

});