function deleteLastDigit() {
  var display = document.getElementsByName('display')[0];
  display.value = display.value.toString().slice(0, -1);
}
function updateMultiplicationSymbol() {
      var display = document.getElementsByName('display')[0];
      display.value = display.value.replace(/×/g, '*');
    }
console.log("remember?")