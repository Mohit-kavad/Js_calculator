const buttons = document.querySelectorAll("button");
const input = document.querySelector("input");

for (const button of buttons) {
  button.addEventListener("click", (event) => {
    var btnInputs = event.target.innerText;
    function calFeatures(btnInput) {
      var calculator = {
        'X': () => "*",
        "÷": () => "/",
        'mod': () => "%",
        'xy': () => "**",
        'C': () => (btnInput = ""),
        "⌫": () => input.value.substring(0, input.value.length - 1),
        'π': () => input.value * Math.PI,
        'e': () => input.value * Math.E,
        'x2': () =>Math.pow(input.value,2),
        "10x": () => Math.pow(10, Number(input.value)),
        'ln': () => Math.log(Number(input.value)),
        'log': () => Math.log10(Number(input.value)),
        "√x": () => Math.sqrt(Number(input.value)),
        "3√x": () => Math.cbrt(Number(input.value)),
        "|x|": () => Math.abs(Number(input.value)),
        'Sin': () => Math.sin(Number(input.value)),
        'Tan': () => Math.tan(Number(input.value)),
        'Cos': () => Math.cos(Number(input.value)),
        'exp': () => Math.exp(Number(input.value)),
        "+/-": () => Number(input.value) * -1,
        '1/x':()=> 1/Number(input.value),
        "n!": () => {
          let f = 1;
          for (let i = 1; i <= input.value; i++) {
            f *= i;
          }
          return (input.value = f);
        },
        "=": () => eval(input.value),
      };
      return typeof calculator[btnInput] == "function"
        ? calculator[btnInput]()
        : btnInput;
    }
    let checkBtn = ["=","π","C","⌫","e","x2","10x","ln","log","√x","3√x",'|x|','Sin','Cos','Tan','exp','+/-','1/x','n!'];
    if (checkBtn.includes(btnInputs)) {
      input.value = calFeatures(btnInputs);
      console.log(input.value);
    } else {
      input.value = input.value + calFeatures(btnInputs);
      console.log(input.value);
    }
  });
}
