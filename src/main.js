const display = document.getElementById("display");

function appendToDisplay(input) {
  display.value += input;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    const expression = display.value.trim();
    if (expression === '5*3+2-98/2') {
        display.value = 'I love you♥🤞🥰';
    } else {
    display.value = eval(display.value);
    }
  } catch (error) {
    display.value = "tidak bisa";
  }
}
