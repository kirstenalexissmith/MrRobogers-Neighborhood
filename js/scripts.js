//Business Logic//
function getNumber(numberInput) {
  let arrayList = [];
  for (let i = 0; i <= numberInput; i++) {
    arrayList.push(i)
  }
  return arrayList
}

function subNumber(arrayList) {
  let subArray = []
  for (let i = 0; i < arrayList.length; i++) {
    let currentNumber = arrayList[i].toString();

    if (currentNumber.includes('3')) {
      subArray.push("Won't you be my neighbor?!");
    } else if (currentNumber.includes('2')) {
      subArray.push("Boop!");
    } else if (currentNumber.includes('1')) {
      subArray.push("Beep");
    } else {
      subArray.push(currentNumber);
    }
  }
  return subArray;
}

//UI Logic//
window.onload = function () {
  document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();
    const numberInput = parseInt(document.getElementById("numberInput").value);
    const resultOutput = getNumber(numberInput)
    const subOutput = subNumber(resultOutput); 
    showResults(subOutput);
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