const buttons = document.querySelectorAll("button");
const input = document.querySelector("input");

for (const button of buttons) {
  button.addEventListener("click", (event) => {
    btnInputs = event.target.innerText;
    switch (btnInputs) {
      case "X":
        btnInputs = "*";
        break;
      case "÷":
        btnInputs = "/";
        break;
      case "mod":
        btnInputs = "%";
        break;
      case "xy":
        btnInputs = "**";
        break;
      case "⌫":
        input.value = input.value.substr(0, input.value.length - 1);
        btnInputs = "";
        break;
      case "C":
        input.value = "";
        btnInputs = "";
        break;
      case "π":
        input.value = input.value * Math.PI;
        btnInputs = "";
        break
      case "e":
        input.value = input.value * Math.E;
        btnInputs = "";
        break;
      case "x2":
        result = Number(input.value) * Number(input.value);
        input.value = result.toString();
        btnInputs = "";
        break;
      case "10x":
        result = Math.pow(10, Number(input.value));
        input.value = result.toString();
        btnInputs = "";
        break;
      case "ln":
        result = Math.log(Number(input.value));
        input.value = result.toString();
        btnInputs = "";
        break;
      case "log":
        result = Math.log10(Number(input.value));
        input.value = result.toString();
        btnInputs = "";
        break;
      case "√x":
        result = Math.sqrt(Number(input.value));
        input.value = result.toString();
        btnInputs = "";
        break;
      case "3√x":
        result = Math.cbrt(Number(input.value));
        input.value = result.toString();
        btnInputs = "";
        break;
      case "|x|":
        result = Math.abs(Number(input.value));
        input.value = result.toString();
        btnInputs = "";
        break;
      case "Sin":
        result = Math.sin(Number(input.value));
        input.value = result.toString();
        btnInputs = "";
        break;
      case "Tan":
        result = Math.tan(Number(input.value));
        input.value = result.toString();
        btnInputs = "";
        break;
      case "Cos":
        result = Math.cos(Number(input.value));
        input.value = result.toString();
        btnInputs = "";
        break;
      case "+/-":
        result = Number(input.value) * -1;
        input.value = result.toString();
        btnInputs = "";
        break;
      case "exp":
        result = Math.exp(Number(input.value));
        input.value = result.toString();
        btnInputs = "";   
        break;
      case "n!":
        let f = 1;
        for (let i = 1; i <= input.value; i++) {
          f *= i;
        }
        input.value = f.toString();
        btnInputs = "";
        break;
      case "1/x":
        result = 1 / Number(input.value);
        input.value = result.toString();
        btnInputs=""
        break;
      case "=":
        input.value = eval(input.value);
        btnInputs = "";
    }
    input.value = input.value + btnInputs;
    console.log(input.value);
  });
}
