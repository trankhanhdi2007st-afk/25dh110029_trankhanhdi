function capNhatSoTruong() {
    const chuyenNganh = document.getElementById("chuyenNganh").value;
    const txtSoTruong = document.getElementById("txtSoTruong");

    if (chuyenNganh === "Hệ thống") {
        txtSoTruong.innerText = "Phân tích & Thiết kế";
    } else if (chuyenNganh === "Phần mềm") {
        txtSoTruong.innerText = "Lập trình";
    } else if (chuyenNganh === "Mạng máy tính") {
        txtSoTruong.innerText = "Quản lý mạng";
    }
}


function kiểmTraVaDangKy() {
    let isValid = true;


    const errMaSV = document.getElementById("errMaSV");
    const errHoTen = document.getElementById("errHoTen");
    const errTuoi = document.getElementById("errTuoi");
    const resultNgoaiNgu = document.getElementById("resultNgoaiNgu");
    const thongBaoChung = document.getElementById("thongBaoChung");


    errMaSV.innerText = "";
    errHoTen.innerText = "";
    errTuoi.innerText = "";
    resultNgoaiNgu.innerText = "";
    thongBaoChung.innerText = "";
    thongBaoChung.className = "error";


    const maSV = document.getElementById("maSV").value.trim();
    if (maSV.length !== 10) {
        errMaSV.innerText = "Mã sinh viên gồm 10 ký tự";
        isValid = false;
    }


    const hoTen = document.getElementById("hoTen").value.trim();
    if (hoTen === "" || hoTen.length > 30) {
        errHoTen.innerText = "Họ tên không rỗng và < 30 ký tự";
        isValid = false;
    }


    const tuoi = parseInt(document.getElementById("tuoi").value, 10);
    if (isNaN(tuoi) || tuoi <= 18) {
        errTuoi.innerText = "Tuổi phải 18 trở lên";
        isValid = false;
    }

    // 5. Hiển thị danh sách ngoại ngữ đã chọn
    const chkNgoaiNgu = document.querySelectorAll('input[name="ngoaiNgu"]:checked');
    const dsNgoaiNgu = Array.from(chkNgoaiNgu).map(item => item.value);
    if (dsNgoaiNgu.length > 0) {
        resultNgoaiNgu.innerText = dsNgoaiNgu.join(" và ");
    }

    // Kiểm tra tổng thể để hiển thị thông báo chung
    if (isValid) {
        thongBaoChung.innerText = "Bạn đã đăng ký thành công";
        thongBaoChung.className = "success";
    } else {
        thongBaoChung.innerText = "Bạn phải nhập lại cho đúng";
        thongBaoChung.className = "error";
    }
}

// Khởi tạo sở trường mặc định khi trang vừa tải xong
window.onload = function () {
    capNhatSoTruong();
};