//Business Logic//
function getNumber() {
  const numberInput = document.getElementById('numberInput').value;
  const resultList = [];
  for (let i = 0; i <= numberInput; i++) {
    resultList.push(subNumber(i));
  }
  showResults(resultList)
}

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
      return currentNumber;
    }
  }
}

//UI Logic//
window.onload = function () {
  document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();
    const numberInput = parseInt(document.getElementById("numberInput").value)
    const resultOutput = getNumber(numberInput)
    showResults(resultOutput)
  });
  const refresh = document.getElementById("refresh");
  refresh.addEventListener("click", function () {
    location.reload();
  })
}

function showResults(resultList) {
  const resultP = document.getElementById("results")
  resultP.innerText = resultList.join(', ')
}