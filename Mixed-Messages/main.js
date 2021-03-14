// Let's Get It

var greeting = ["Howdy", "Ahoy", "What's crackin", "Good tidings",
               "Salutations", "Sup", "Surf's up", "How ya livin"];

var middle = ["You're the best", "You're the best person I know",
             "You make everyone around you better", "They broke the mold with you",
           "You're an absolute legend"];

var seeYa = ["Let's make it a good day", "Keep being you", "Thanks for being you",
            "You're my hero"];

var bank = [greeting, middle, seeYa];

var output = "";
for (let k = 0; k < 3; k++) {
  var select = bank[k];
  var item = select[Math.floor(Math.random() * select.length)];
  output = output + item + "! ";
}

// You're the best!
console.log(output);
