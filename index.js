let mangSo = [];
document.getElementById("input_content").onsubmit = function (event) {
  // console.log("xin chào");

  event.preventDefault();
  let soN = document.getElementById("nhapN").value;
  mangSo.push(soN);
  // Kiểm tra nếu giá trị đầu tiên là dấu phẩy, loại bỏ nó

  document.getElementById("hienthi").innerHTML = mangSo;
};

document.querySelector(".bai1").addEventListener("click", function () {
  let tong = 0;
  for (let i = 0; i < mangSo.length; i++) {
    if (mangSo[i] >= 0) {
      tong += +mangSo[i];
    }
  }
  document.getElementById("hienthibai1").innerHTML = `Tổng số dương: ${tong}`;
});
