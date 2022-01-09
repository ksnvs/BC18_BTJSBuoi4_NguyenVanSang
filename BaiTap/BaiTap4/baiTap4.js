// Bài Tập 4

/**
 * Input: canhAValue, canhBValue, canhCValue
 *
 *
 * Process:
 * Bước 1: Kiểm tra cạnh nhập vào có phải là Number không?  Number.isNaN(canhAValue) || Number.isNaN(canhBValue) || Number.isNaN(canhCValue)
 * Bước 2: Kiểm tra độ dài 3 cạnh có phải là Tam giác hay không? canh1 < canh2 + canh3 && canh2 < canh1 + canh3 && canh3 < canh1 + canh2
 * Bước 3: Kiểm tra có phải Tam Giác Vuông không? Math.pow(canh1, 2) === Math.pow(canh2, 2) + Math.pow(canh3, 2) || Math.pow(canh2, 2) === Math.pow(canh1, 2) + Math.pow(canh3, 2) || Math.pow(canh3, 2) === Math.pow(canh2, 2) + Math.pow(canh1, 2) return  Msg= "Đây là Tam Giác Vuông";
 * Bước 4: Kiểm tra có phải Tam Giác Đều? canh1 === canh2 && canh1 === canh3 return  Msg= "Đây là Tam Giác Đều";
 * Bước 5: Kiểm tra có phải Tam Giác Cân? canh1 === canh2 || canh1 === canh3 || canh2 === canh3 . Còn lại là Tam giác bình thường. return  Msg= "Đây là Tam Giác Cân";
 * Bước 6: return  Msg= "Đây là Tam Giác Bình thường";
 *
 *
 * Output: Xuất ra Msg.
 */

var resultEl = document.getElementById("result");
function timTamGiac() {
  var canhAValue = document.getElementById("canhA").value * 1;
  var canhBValue = document.getElementById("canhB").value * 1;
  var canhCValue = document.getElementById("canhC").value * 1;
  if (
    Number.isNaN(canhAValue) ||
    Number.isNaN(canhBValue) ||
    Number.isNaN(canhCValue)
  ) {
    alert("Độ dài cạnh nhập vào phải là Number, vui lòng nhập lại");
  } else {
    var resultMsg = kiemTraTamGiac(canhAValue, canhBValue, canhCValue);
    resultEl.innerText = resultMsg;
    resultEl.style.visibility = "visible";
  }
}

function kiemTraTamGiac(canh1, canh2, canh3) {
  if (canh1 < canh2 + canh3 && canh2 < canh1 + canh3 && canh3 < canh1 + canh2) {
    if (
      Math.pow(canh1, 2) === Math.pow(canh2, 2) + Math.pow(canh3, 2) ||
      Math.pow(canh2, 2) === Math.pow(canh1, 2) + Math.pow(canh3, 2) ||
      Math.pow(canh3, 2) === Math.pow(canh2, 2) + Math.pow(canh1, 2)
    ) {
      return "Đây là Tam Giác Vuông";
    } else if (canh1 === canh2 && canh1 === canh3) {
      return "Đây là Tam Giác Đều";
    } else if (canh1 === canh2 || canh1 === canh3 || canh2 === canh3) {
      return "Đây là Tam Giác Cân";
    } else {
      return "Đây là Tam Giác Bình thường";
    }
  } else {
    return "Đây không phải 3 cạnh của Tam giác, mời nhập lại";
  }
}
