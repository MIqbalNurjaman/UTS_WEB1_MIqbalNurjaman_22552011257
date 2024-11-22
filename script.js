// Fungsi untuk menampilkan/menghilangkan password
function togglePassword(id) {
    const passwordField = document.getElementById(id);
    const eyeIcon = document.getElementById("eye-icon");

    if (passwordField.type === "password") {
        passwordField.type = "text";
        eyeIcon.classList.remove("fa-eye");
        eyeIcon.classList.add("fa-eye-slash");
    } else {
        passwordField.type = "password";
        eyeIcon.classList.remove("fa-eye-slash");
        eyeIcon.classList.add("fa-eye");
    }
}

// Validasi login ketika form disubmit
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Mencegah form dari submit secara default

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Cek apakah username dan password diisi
    if (username === "" || password === "") {
        alert("Username dan password harus diisi!");
    } else {
        // Jika data valid, arahkan ke halaman dashboard
        window.location.href = "dashboard.html";  // Ganti dengan URL dashboard yang sesuai
    }
});