// Bài Tập 2

/**
 * Input: Lựa chọn của User : userSelect
 *
 *
 * Process:
 * Trường hợp userSelect == "B" xuất ra Msg="Chào Bố"; Kết thúc;
 * Trường hợp userSelect == "M" xuất ra Msg="Chào Mẹ"; Kết thúc;
 * Trường hợp userSelect == "A" xuất ra Msg="Chào Anh Trai"; Kết thúc;
 * Trường hợp userSelect == "E" xuất ra Msg="Chào Em Gái"; Kết thúc;
 * Còn lại xuất ra Msg="Mời lựa chọn lại"; Kết thúc;
 *
 *
 * Output: Xuất câu trả lời Msg
 */

function chaoHoi() {
  var userSelect = document.getElementById("userSelect").value;

  switch (userSelect) {
    case "B":
      alert("Chào Bố");
      break;
    case "M":
      alert("Chào Mẹ");
      break;
    case "A":
      alert("Chào Anh Trai");
      break;
    case "E":
      alert("Chào Em Gái");
      break;
    default:
      alert("Mời bạn lựa chọn");
      break;
  }
}
