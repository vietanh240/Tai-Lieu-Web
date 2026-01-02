// coding implementation
function validateForm() {
    let email = document.getElementById("email").value.trim();
    let comment = document.getElementById("com").value.trim();
    let rating = document.getElementById("rate").value.trim();

    if(email === "" || comment === "" || rating === "") {
        alert("Vui long nhap du thong tin.");
        return false;
    }

    if(isNaN(rating) || rating < 1 || rating > 5) {
        alert("Rating phai la so tu 1 den 5.");
        return false;
    }

    let emailRegex = /^\w+@\w+\.\w+$/;
    if (!emailRegex.test(email)) {
        alert('Email phải đúng định dạng!');
        return false;
    }

    alert("Form da duoc gui thanh cong!");
    return true;
}
// end coding implementation