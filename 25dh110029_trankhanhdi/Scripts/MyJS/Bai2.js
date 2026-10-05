// Yêu cầu 1: Hàm dùng chung kiểm tra không cho phép rỗng cho các textbox được chỉ định[cite: 1]
function validateRequiredFields() {
    let isValid = true;
    const requiredInputs = document.querySelectorAll('.required-field');

    requiredInputs.forEach(input => {
        const errorSpan = document.getElementById(input.id + '-error');
        const fieldName = input.getAttribute('data-name');

        if (input.value.trim() === '') {
            errorSpan.innerText = 'Vui lòng nhập ' + fieldName;
            isValid = false;
        } else {
            errorSpan.innerText = '';
        }
    });

    return isValid;
}

// Yêu cầu 2: Hàm kiểm tra số điện thoại từ 10 ký số trở lên[cite: 1]
function validatePhone() {
    const phoneInput = document.getElementById('phone');
    const phoneError = document.getElementById('phone-error');
    const phoneValue = phoneInput.value.trim();
    const phoneRegex = /^[0-9]{10,}$/;

    if (phoneValue === '') {
        phoneError.innerText = 'Vui lòng nhập số điện thoại';
        return false;
    } else if (!phoneRegex.test(phoneValue)) {
        phoneError.innerText = 'Số điện thoại phải từ 10 ký số trở lên';
        return false;
    } else {
        phoneError.innerText = '';
        return true;
    }
}

// Yêu cầu 3: Hàm dùng chung cho 2 nút button "Văn phòng" và "Nhà riêng" xuất thông báo alert[cite: 1]
function showAddressType(type) {
    if (type === 'Văn phòng') {
        alert('Bạn chọn giao hàng tại văn phòng');
    } else if (type === 'Nhà riêng') {
        alert('Bạn chọn giao hàng tại nhà riêng');
    }
}

// Yêu cầu 4: Hàm xử lý khi nhấn nút "Lưu"[cite: 1]
function handleSave() {
    const isRequiredValid = validateRequiredFields();
    const isPhoneValid = validatePhone();

    if (isRequiredValid && isPhoneValid) {
        alert('Lưu thông tin thành công');
    } else {
        alert('Thông tin nhập không hợp lệ');
    }
}