// Bài Tập 3

/**
 * Input: Nhập vào 3 số nguyên: num1Value, num2Value, num3Value
 *
 *
 * Process:
 * Bước 1: Kiểm tra số nguyên hợp lệ Number.isInteger(num1Value) && Number.isInteger(num2Value) && Number.isInteger(num3Value)
 * Bước 2: soChan = 0; soLe=0;
 * Nếu num1Value%2===0 thì soChan+=1 ngược lại soLe+=1;
 * Nếu num2Value%2===0 thì soChan+=1 ngược lại soLe+=1;
 * Nếu num3Value%2===0 thì soChan+=1 ngược lại soLe+=1;
 *
 *
 * Output: soChan, soLe;
 * */

function tinhChanLe() {
  var num1Value = document.getElementById("num1").value * 1;
  var num2Value = document.getElementById("num2").value * 1;
  var num3Value = document.getElementById("num3").value * 1;
  var rsSoChan = 0;
  var rsSoLe = 0;

  if (
    Number.isInteger(num1Value) &&
    Number.isInteger(num2Value) &&
    Number.isInteger(num3Value)
  ) {
    if (isChan(num1Value)) {
      rsSoChan += 1;
    } else {
      rsSoLe += 1;
    }
    if (isChan(num2Value)) {
      rsSoChan += 1;
    } else {
      rsSoLe += 1;
    }
    if (isChan(num3Value)) {
      rsSoChan += 1;
    } else {
      rsSoLe += 1;
    }
    document.getElementById("rsSoChan").innerText = rsSoChan.toString();
    document.getElementById("rsSoLe").innerText = rsSoLe.toString();
    document.getElementById("result").style.visibility = "visible";
  }
}

function isChan(number) {
  return number % 2 === 0;
}
