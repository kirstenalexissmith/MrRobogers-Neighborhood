function getNumber(numberInput) {
  const resultList = [];
  for (let i = 0; i <= numberInput; i++) {
    resultList.push(subNumber(i));
  }
  return resultList.join(", ")
}

function subNumber() {

  for (let i = 0; i <= numberInput; i++) {
    let currentNumber = i.toString();

    if (currentNumber.includes('1')) {
      resultList.push("Beep!");
    } else if (currentNumber.includes('2')) {
      resultList.push("Boop!");
    } else if (currentNumber.includes('3')) {
      resultList.push("Won't you be my neighbor?");
    } else {
      number;
    }
  }

  function showResults(resultList) {
    const resultP = document.getElementById("results")
    resultP.innerHTML = resultList.join(', ')


  } window.addEventListener("load", function () {
    const form = document.querySelector("form");
    form.addEventListener("submit", subNumber);
    const refresh = document.getElementById("refresh");
    refresh.addEventListener("click", function () {
      location.reload();
    })
  })