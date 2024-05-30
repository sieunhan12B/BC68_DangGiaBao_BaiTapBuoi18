let mangSo = [];
document.getElementById("input_content").onsubmit = function (event) {
  event.preventDefault();
  let soN = document.getElementById("nhapN").value;
  mangSo.push(soN);
  document.getElementById("hienthi").innerHTML = mangSo;
};
/**
 *
 *
 *
 *
 *
 */
// BÀI 1. TỔNG CÁC SỐ DƯỚNG CÓ TRONG MẢNG
document.querySelector(".bai1").addEventListener("click", function () {
  // TẠO BIẾN TỔNG =0;
  let tong = 0;
  for (let i = 0; i < mangSo.length; i++) {
    // NẾU PHẦN TỬ THỨ I TRONG MẢNG LÁ SỐ DƯƠNG , THÌ SẼ CỘNG VÀO BIẾN TỔNG
    if (mangSo[i] >= 0) {
      tong += +mangSo[i];
    }
  }
  // XUẤT RA MÀN HÌNH
  document.getElementById(
    "hienthibai1"
  ).innerHTML = `Tổng các số dương: ${tong}`;
});
/**
 *
 *
 *
 *
 *
 */
// BÀI 2. ĐẾM CÁC SỐ DƯƠNG CÓ TRONG MẢNG
document.querySelector(".bai2").addEventListener("click", function () {
  // TẠO BIẾN ĐẾM =0;
  let dem = 0;
  for (let i = 0; i < mangSo.length; i++) {
    // NẾU PHẦN TỬ THỨ I TRONG MẢNG LÁ SỐ DƯƠNG , THÌ BIẾN ĐẾM SẼ TĂNG LÊN 1
    if (mangSo[i] >= 0) {
      dem++;
    }
  }
  // XUẤT RA MÀN HÌNH
  document.getElementById(
    "hienthibai2"
  ).innerHTML = `Tổng số dương có trong mảng: ${dem}`;
});
/**
 *
 *
 *
 *
 *
 */
//BÀI 3. TÌM SỐ NHỎ NHẤT TRONG MẢNG
document.querySelector(".bai3").addEventListener("click", function () {
  // TẠO BIẾN ĐẾM =0;
  let soNhoNhat = mangSo[0] * 1;
  for (let i = 0; i < mangSo.length; i++) {
    // NẾU PHẦN TỬ THỨ I TRONG MẢNG LÁ SỐ DƯƠNG , THÌ BIẾN ĐẾM SẼ TĂNG LÊN 1
    if (mangSo[i] * 1 < soNhoNhat) {
      soNhoNhat = mangSo[i] * 1;
    }
  }
  // XUẤT RA MÀN HÌNH
  document.getElementById(
    "hienthibai3"
  ).innerHTML = `Số nhỏ nhất: ${soNhoNhat}`;
});
/**
 *
 *
 *
 *
 *
 */
//BÀI 4. TÌM SỐ DƯƠNG NHỎ NHẤT TRONG MẢNG
document.querySelector(".bai4").addEventListener("click", function () {
  // KHAI BÁO BIẾN DƯƠNG NHỎ NHẤT ĐẦU TIÊN
  let soDuongNhoNhat = 0;
  let hienThiBai4 = document.getElementById("hienthibai4");
  // TẠO BIẾN CỜ=-1(CHƯA TÌM THẤY)
  let flag = -1;
  for (let so of mangSo) {
    if (so >= 0) {
      // BẬT CỜ NẾU TÌM THẤY
      flag = 1;
      // SỐ DƯƠNG ĐẦU TIÊN
      soDuongNhoNhat = so;
      break;
    }
  }
  // XUẤT RA THÔNG BÁO NẾU KHÔNG CÓ SỐ DƯƠNG TRONG MẢNG
  if (flag == -1) {
    hienThiBai4.innerHTML = `Không có số dương trong mảng`;
    return;
  }
  for (let i = 0; i < mangSo.length; i++) {
    // KIỂM TRA SỐ NHỎ NHẤT
    if (mangSo[i] * 1 < soDuongNhoNhat && mangSo[i] >= 0) {
      soDuongNhoNhat = mangSo[i] * 1;
    }
  }
  // XUẤT RA MÀN HÌNH
  hienThiBai4.innerHTML = `Số dương nhỏ nhất: ${soDuongNhoNhat}`;
});
/**
 *
 *
 *
 *
 *
 */
//BÀI 5. Tìm số chẵn cuối cùng trong mảng. Nếu mảng không có giá trị chẵn thì trả về -1.
document.querySelector(".bai5").addEventListener("click", function () {
  // KHAI BÁO BIẾN DƯƠNG NHỎ NHẤT ĐẦU TIÊN
  let hienThiBai5 = document.getElementById("hienthibai5");
  // TẠO BIẾN CỜ=-1(CHƯA TÌM THẤY)
  let flag = -1;
  for (let i = mangSo.length; i > 0; i--) {
    // kiểm tra có phải số chẵn không
    if (mangSo[i] % 2 == 0) {
      // XUẤT RA MÀN HÌNH
      hienThiBai5.innerHTML = `Số chẵn cuối cùng: ${mangSo[i]}`;
      flag = 1;
      return;
    }
  }
  if (flag == -1) {
    hienThiBai5.innerHTML = `-1`;
  }
});
/**
 *
 *
 *
 *
 *
 */
//BÀI 6.Đổi chỗ 2 giá trị trong mảng theo vị trí (Cho nhập vào 2 vị trí muốn đổi chỗ giá trị).
document.querySelector(".bai6").addEventListener("click", function () {
  // DOM tới để lấy giá trị của 2 số
  let hienThiBai6 = document.getElementById("hienthibai6");
  let viTriSo1 = document.getElementById("so1").value * 1;
  let viTriSo2 = document.getElementById("so2").value * 1;
  let so1 = mangSo[viTriSo1];
  let so2 = mangSo[viTriSo2];
  for (let i = 0; i < mangSo.length; i++) {
    // kiểm tra giá trị có bằng số nhập vào không,nếu bằng thì thay thế bằng số thứ 2 /1
    if (i == viTriSo1) {
      mangSo[i] = so2;
    } else if (i == viTriSo2) {
      mangSo[i] = so1;
    }
  }
  // HIỂN THỊ
  hienThiBai6.innerHTML = `Mảng sau khi sắp xếp: ${mangSo}`;
});
/**
 *
 *
 *
 *
 *
 */
//BÀI 7.Sắp xếp mảng theo thứ tự tăng dần
document.querySelector(".bai7").addEventListener("click", function () {
  let hienThiBai7 = document.getElementById("hienthibai7");

  //Sắp xếp
  mangSo.sort((a, b) => a - b);

  // HIỂN THỊ
  hienThiBai7.innerHTML = `Mảng sau khi sắp xếp: ${mangSo}`;
});
/**
 *
 *
 *
 *
 *
 */
//BÀI 8.TÌM SỐ NGUYÊN TỐ ĐẦU TIÊN CÓ TRONG MẢNG
// hàm kiểm tra số nguyên tố
function isPrime(number) {
  if (number < 2) return false;
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
}

document.querySelector(".bai8").addEventListener("click", function () {
  let hienThiBai8 = document.getElementById("hienthibai8");
  // TẠO BIẾN CỜ
  let flag = -1;
  for (let i = 0; i < mangSo.length; i++) {
    // kiểm tra có phải số nguyên tố không
    if (isPrime(mangSo[i])) {
      flag = 1;
      // HIỂN THỊ
      hienThiBai8.innerHTML = `Số nguyên tố đầu tiên: ${mangSo[i]}`;
      return;
    }
  }
  if ((flag = -1)) {
    hienThiBai8.innerHTML = `-1`;
  }
});

/**
 *
 *
 *
 *
 *
 */
//BÀI 9.Nhập thêm 1 mảng số thực, tìm xem trong mảng có bao nhiêu số nguyên?
// HÀM KIỂM TRA 1 SỐ CÓ PHẢI LÀ SỐ NGUYÊN KHÔNG
function isInteger(number) {
  return Number.isInteger(number);
}
// tạo mảng mới
let mangSoThuc = [];
// viết sự kiện nhập vào 1 mảng số thực
document.getElementById("option_content_bai9").onsubmit = function (event) {
  event.preventDefault();
  let soThuc = parseFloat(document.getElementById("sothuc").value);
  mangSoThuc.push(soThuc);
  document.getElementById("hienthimang").innerHTML = mangSoThuc;
};
document.querySelector(".bai9").addEventListener("click", function () {
  // tạo biến đếm
  let hienThiBai9 = document.getElementById("hienthibai9");
  let dem = 0;
  for (let i = 0; i < mangSoThuc.length; i++) {
    // kiểm tra có phải số nguyên không
    if (isInteger(mangSoThuc[i])) {
      dem++;
    }
  }
  // hiển thị
  hienThiBai9.innerHTML = `Số nguyên có trong mảng là: ${dem}`;
});

/**
 *
 *
 *
 *
 *
 */
//BÀI 10.So sánh số lượng số dương và số lượng số âm xem số nào nhiều hơn.

document.querySelector(".bai10").addEventListener("click", function () {
  let hienThiBai10 = document.getElementById("hienthibai10");
  // khai báo 2 biến đếm dương âm
  let demDuong = 0;
  let demAm = 0;
  for (let i = 0; i < mangSo.length; i++) {
    // kiểm tra nếu là số dương thì đếm dương tăng,ngược lại thì đếm âm tăng
    if (mangSo[i] >= 0) {
      demDuong++;
    } else {
      demAm++;
    }
  }
  // so sánh số dương hay số âm nhiều hơn
  if (demDuong > demAm) {
    hienThiBai10.innerHTML = `Số dương có nhiều hơn:\tSố dương: ${demDuong}\t Số âm: ${demAm}`;
  } else if (demDuong < demAm) {
    hienThiBai10.innerHTML = `Số âm có nhiều hơn:\tSố dương: ${demDuong}\t Số âm: ${demAm}`;
  } else {
    // hiển thị
    hienThiBai10.innerHTML = `2 số bằng nhau:\tSố dương: ${demDuong}\t Số âm: ${demAm}`;
  }
});
