const buttons = document.querySelectorAll("button");
const input = document.querySelector("input");
const equalBtn = document.querySelector(".equalBtn");

for (const button of buttons) {
  button.addEventListener("click", (event) => {
    btnInputs = event.target.innerText;
    
    if (btnInputs == "=") {
      input.value = eval(input.value);
      nullBtnInput();
    } else {
      if (btnInputs == "X") {
        btnInputs = "*";
      } else if (btnInputs == "÷") {
        btnInputs = "/";
      } else if (btnInputs == "mod") {
        btnInputs = "%";
      } else if (btnInputs == "xy") {
        btnInputs = "**";
      } else if (btnInputs == "C") {
        input.value = "";
        nullBtnInput();
      } else if (btnInputs == "⌫") {
        input.value = input.value.substr(0, input.value.length - 1);
        nullBtnInput();
      } else if (btnInputs == "π") {
        input.value = input.value * Math.PI;
        nullBtnInput();
      } else if (btnInputs == "e") {
        input.value = input.value * Math.E;
        nullBtnInput();
      } else if (btnInputs == "x2") {
        result = Math.pow(Number(input.value), 2);
        input.value = result.toString();
        nullBtnInput();
      } else if (btnInputs == "10x") {
        result = Math.pow(10, Number(input.value));
        input.value = result.toString();
        nullBtnInput();
      } else if (btnInputs == "ln") {
        result = Math.log(Number(value));
        input.value = result.toString();
        nullBtnInput();
      } else if (btnInputs == "log") {
        result = Math.log10(Number(input.value));
        input.value = result.toString();
        nullBtnInput();
      } else if (btnInputs == "√x") {
        result = Math.sqrt(Number(input.value));
        input.value = result.toString();
        nullBtnInput();
      } else if (btnInputs == "3√x") {
        result = Math.cbrt(Number(input.value));
        input.value = result.toString();
        nullBtnInput();
      } else if (btnInputs == "|x|") {
        result = Math.abs(Number(input.value));
        input.value = result.toString();
        nullBtnInput();
      } else if (btnInputs == "Sin") {
        result = Math.sin(Number(input.value));
        input.value = result.toString();
        nullBtnInput();
      } else if (btnInputs == "Cos") {
        result = Math.cos(Number(input.value));
        input.value = result.toString();
        nullBtnInput();
      } else if (btnInputs == "Tan") {
        result = Math.tan(Number(input.value));
        input.value = result.toString();
        nullBtnInput();
      } else if (btnInputs == "+/-") {
        result = Number(input.value) * -1;
        input.value = result.toString();
        nullBtnInput();
      } else if (btnInputs == "exp") {
        result = Math.exp(Number(input.value));
        input.value = result.toString();
        nullBtnInput();
      } else if (btnInputs == "n!") {
        let f = 1;
        for (let i = 1; i <= input.value; i++) {
          f *= i;
        }
        input.value = f.toString();
        nullBtnInput();
      } else if (btnInputs == "1/x") {
        result = 1 / Number(input.value);
        input.value = result.toString();
        nullBtnInput();
      }
      input.value += btnInputs;
      console.log(input.value);
    }
  });
}
// for null btnInput
const nullBtnInput = () => {
  btnInputs = "";
};