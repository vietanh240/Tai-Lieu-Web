
// Form validation script
document.addEventListener('DOMContentLoaded', function() {
  const submitBtn = document.querySelector('input[name="submit"]');
  const form = document.querySelector('form');
  
  if (submitBtn) {
    submitBtn.addEventListener('click', function(e) {
      e.preventDefault();
      validateForm();
    });
  }
});

function validateForm() {
  // Lấy giá trị từ các trường input
  const fullname = document.querySelector('input[name="Fullname"]').value.trim();
  const phone = document.querySelector('input[name="Phone"]').value.trim();
  const date = document.querySelector('input[name="Date"]').value.trim();
  
  let errors = [];
  
  // Validate Fullname (bắt buộc)
  if (fullname === '') {
    errors.push('Vui lòng nhập Họ và tên');
  }
  
  // Validate Phone (bắt buộc và phải đúng định dạng)
  if (phone === '') {
    errors.push('Vui lòng nhập Số điện thoại');
  } else {
    // Kiểm tra phone phải có 10-11 số và bắt đầu bằng số 0
    const phoneRegex = /^0\d{9,10}$/;
    if (!phoneRegex.test(phone)) {
      errors.push('Số điện thoại phải có 10-11 số và bắt đầu bằng số 0');
    }
  }
  
  // Validate Date (bắt buộc và phải đúng định dạng DD/MM/YYYY hoặc DD-MM-YYYY)
  if (date === '') {
    errors.push('Vui lòng nhập Ngày tháng');
  } else {
    // Kiểm tra định dạng DD/MM/YYYY hoặc DD-MM-YYYY
    const dateRegex = /^(0[1-9]|[12][0-9]|3[01])[\/\-](0[1-9]|1[0-2])[\/\-]\d{4}$/;
    if (!dateRegex.test(date)) {
      errors.push('Ngày tháng phải có định dạng DD/MM/YYYY hoặc DD-MM-YYYY và ');
    } else {
      // Kiểm tra xem ngày có hợp lệ không
      const parts = date.split(/[\/\-]/);
      const day = parseInt(parts[0], 10);
      const month = parseInt(parts[1], 10);
      const year = parseInt(parts[2], 10);
      
      const dateObj = new Date(year, month - 1, day);
      if (dateObj.getDate() !== day || dateObj.getMonth() !== month - 1 || dateObj.getFullYear() !== year) {
        errors.push('Ngày tháng không hợp lệ');
      }
    }
  }
  
  // Hiển thị lỗi hoặc submit form
  if (errors.length > 0) {
    alert('Lỗi:\n\n' + errors.join('\n'));
  } else {
    alert('Form hợp lệ! Dữ liệu đã được gửi thành công.');
    // Có thể submit form thực tế ở đây
    // document.querySelector('form').submit();
  }
}