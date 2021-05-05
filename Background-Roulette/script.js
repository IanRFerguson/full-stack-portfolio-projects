// Isolate button element
let button = document.querySelector("button");

// Function to change background color
function newColor () {

  // Color bank
  let options = ['#2E4057', '#66A182', '#EDAE49',
                '#D1495B', '#00798C']

  // Random choice
  let select = options[Math.floor(Math.random() * options.length)]

  // Avoid duplicate choices
  // Color will change every time
  if (select != document.body.style.backgroundColor) {
      document.body.style.backgroundColor = select;
  } else {
    document.body.style.backgroundColor = "black";
  }
}

// Add interactivity
button.onclick = newColor;
