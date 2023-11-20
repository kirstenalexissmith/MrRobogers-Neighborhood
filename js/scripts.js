//Business Logic//
function getNumber(numberInput) {
  const resultList = [];
  for (let i = 0; i <= numberInput; i++) {
    resultList.push(subNumber(i));
  }
  return resultList.join(", ")
}
console.log(getNumber)
function subNumber(number) {

  for (let i = 0; i <= numberInput; i++) {
    let currentNumber = number.toString();

    if (currentNumber.includes('1')) {
      resultList.push("Beep!");
    } else if (currentNumber.includes('2')) {
      resultList.push("Boop!");
    } else if (currentNumber.includes('3')) {
      resultList.push("Won't you be my neighbor?");
    } else {
      number;
    }
    console.log(subNumber)
  }

  //UI Logic//

  function showResults(resultList) {
    const resultP = document.getElementById("results")
    resultP.innerHTML = resultList.join(', ')
  }


  window.addEventListener("load", function () {
    const form = document.querySelector("form");
    form.addEventListener("submit", subNumber);
    const refresh = document.getElementById("refresh");
    refresh.addEventListener("click", function () {
      location.reload();
    })
  })