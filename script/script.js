const buttons = document.querySelectorAll("button");
const input = document.querySelector("input");
const equalBtn = document.querySelector(".equalBtn");

for (const button of buttons) {
  button.addEventListener("click", (event) => {
    btnInputs = event.target.innerText;

    if (btnInputs == "=") {
      getResult();
      nullBtnInput();
    } else {
      if (btnInputs == "X") {
        btnInputs = "*";
      } else if (btnInputs == "÷") {
        btnInputs = "/";
      } else if (btnInputs == "mod") {
        btnInputs = "%";
      } else if (btnInputs == "C") {
        nullBtnInput();
        input.value = "";
      } else if (btnInputs == "⌫") {
        nullBtnInput();
        input.value = input.value.substr(0, input.value.length - 1);
      } else if (btnInputs == "xy") {
        btnInputs = "**";
      } else if (btnInputs == "π") {
        nullBtnInput();
        input.value = input.value * Math.PI;
      } else if (btnInputs == "e") {
        nullBtnInput();
        input.value = input.value * Math.E;
      } else if (btnInputs == "x2") {
        square(input.value);
        nullBtnInput();
      } else if (btnInputs == "10x") {
        powerOfTen(input.value);
        nullBtnInput();
      } else if (btnInputs == "ln") {
        ln(input.value);
        nullBtnInput();
      } else if (btnInputs == "log") {
        log(input.value);
        nullBtnInput();
      } else if (btnInputs == "√x") {
        squareRoot(input.value);
        nullBtnInput();
      } else if (btnInputs == "3√x") {
        cubeRoot(input.value);
        nullBtnInput();
      } else if (btnInputs == "|x|") {
        absolute(input.value);
        nullBtnInput();
      } else if (btnInputs == "+/-") {
        sinChanged(input.value);
        nullBtnInput();
      } else if (btnInputs == "n!") {
        factorial(input.value);
        nullBtnInput();
      } else if (btnInputs == "Sin") {
        sin(input.value);
        nullBtnInput();
      } else if (btnInputs == "Cos") {
        cos(input.value);
        nullBtnInput();
      } else if (btnInputs == "Tan") {
        tan(input.value);
        nullBtnInput();
      } else if (btnInputs == "1/x") {
        oneDivX(input.value);
        nullBtnInput();
      } else if (btnInputs == "exp") {
        euler(input.value);
        nullBtnInput();
      }
      input.value += btnInputs;
      console.log(input.value);
    }
  });
}
const getResult = () => {
  input.value = eval(input.value);
};
function square(value) {
  result = Number(value) * Number(value);
  input.value = result.toString();
}
function powerOfTen(value) {
  result = Math.pow(10, Number(value));
  input.value = result.toString();
}
function ln(value) {
  result = Math.log(Number(value));
  input.value = result.toString();
}
function log(value) {
  result = Math.log10(Number(value));
  input.value = result.toString();
}
function squareRoot(value) {
  result = Math.sqrt(Number(value));
  input.value = result.toString();
}
function cubeRoot(value) {
  result = Math.cbrt(Number(value));
  input.value = result.toString();
}
function absolute(value) {
  result = Math.abs(Number(value));
  input.value = result.toString();
}
function sinChanged(value) {
  result = Number(value) * -1;
  input.value = result.toString();
}
function sin(value) {
  result = Math.sin(Number(value));
  input.value = result.toString();
}
function tan(value) {
  result = Math.tan(Number(value));
  input.value = result.toString();
}
function cos(value) {
  result = Math.cos(Number(value));
  input.value = result.toString();
}
function factorial(value) {
  let f = 1;
  for (let i = 1; i <= value; i++) {
    f *= i;
  }
  input.value = f.toString();
}
function oneDivX(value) {
  result = 1 / Number(value);
  input.value = result.toString();
}
function euler(value) {
  result = Math.exp(Number(value));
  input.value = result.toString();
}

// for null btnInput
const nullBtnInput = () => {
  btnInputs = "";
};
