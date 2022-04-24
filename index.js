window.addEventListener("click", function (e) {
  const data = document.querySelector(".text-center");
  const text = e.target.alt;
  const first = text.toLowerCase().charAt(0);
  const vowels = ["a", "e", "i", "o", "u"];
  for (let char of first) {
    var preposition = "a";
    if (vowels.includes(char)) {
      preposition = "an";
    }
  }

  if (typeof text !== "undefined") {
    var msg = new SpeechSynthesisUtterance();
    msg.text = "This is " + preposition + " " + text;
    msg.lang = "en";
    window.speechSynthesis.speak(msg);
    alert(msg.text);
  }
});
