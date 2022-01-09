// Bài Tập 1

/**
 * Input: nhập vào 3 số nguyên: num1Value, num2Value, num3Value
 *
 *
 * Process:
 * Step1: Kiểm tra số nguyên hợp lệ Number.isInteger(num1Value) && Number.isInteger(num2Value) && Number.isInteger(num3Value)
 * Step2: Kiểm tra 2 số num1Value và num2Value. Nếu num1Value < num2Value thì hoán đổi 2 số
 * temp = num1Value; num1Value= num2Value; num2Value = temp;
 *
 * Step3: Kiểm tra 2 số num1Value và num3Value. Nếu num1Value < num3Value thì hoán đổi 2 số
 * temp = num1Value; num1Value= num3Value; num3Value = temp;
 *
 * Step4: Kiểm tra 2 số num2Value và num3Value. Nếu num2Value < num3Value thì hoán đổi 2 số
 * temp = num2Value; num2Value= num3Value; num3Value = temp;
 *
 *
 * Output: Thứ tự tăng dần num3Value => num2Value => num1Value
 */

function sapXep() {
  var num1Value = document.getElementById("num1").value * 1;
  var num2Value = document.getElementById("num2").value * 1;
  var num3Value = document.getElementById("num3").value * 1;
  var rsNum1El = document.getElementById("rsNum1");
  var rsNum2El = document.getElementById("rsNum2");
  var rsNum3El = document.getElementById("rsNum3");
  var resultEl = document.getElementById("result");
  var _temp;
  if (
    Number.isInteger(num1Value) &&
    Number.isInteger(num2Value) &&
    Number.isInteger(num3Value)
  ) {
    if (num1Value < num2Value) {
      _temp = hoanDoi(num1Value, num2Value);
      num1Value = _temp.num1;
      num2Value = _temp.num2;
    }

    if (num1Value < num3Value) {
      _temp = hoanDoi(num1Value, num3Value);
      num1Value = _temp.num1;
      num3Value = _temp.num2;
    }

    if (num2Value < num3Value) {
      _temp = hoanDoi(num2Value, num3Value);
      num2Value = _temp.num1;
      num3Value = _temp.num2;
    }

    rsNum1El.innerText = num1Value.toString();
    rsNum2El.innerText = num2Value.toString();
    rsNum3El.innerText = num3Value.toString();
    rsNum1El.style.fontWeight = "bold";
    rsNum2El.style.fontWeight = "bold";
    rsNum3El.style.fontWeight = "bold";
    resultEl.style.visibility = "visible";
  } else {
    alert("Vui lòng nhập số nguyên!!!");
  }
}

function hoanDoi(num1, num2) {
  var temp = num1;
  num1 = num2;
  num2 = temp;
  return { num1, num2 };
}
