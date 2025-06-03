document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const messageDisplay = document.getElementById('message');

    // Akun-akun yang terdaftar (dummy data)
    const registeredAccounts = [
        { username: 'miaw', password: 'hore' },
        { username: 'Nurul', password: 'hore' },
        
    ];

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Mencegah form untuk refresh halaman

        const username = usernameInput.value;
        const password = passwordInput.value;

        // Mengecek apakah akun terdaftar
        const accountFound = registeredAccounts.find(account => 
            account.username === username && account.password === password
        );

        if (accountFound) {
            messageDisplay.textContent = 'Login Berhasil! Selamat datang, ' + username + '!';
            messageDisplay.className = 'message success';
            // Di sini Anda bisa mengarahkan pengguna ke halaman lain
            // window.location.href = 'dashboard.html'; 
            
            // Mengosongkan input setelah login berhasil
            usernameInput.value = '';
            passwordInput.value = '';

        } else {
            messageDisplay.textContent = 'Nama pengguna atau kata sandi salah. Silakan coba lagi.';
            messageDisplay.className = 'message error';
        }
    });
});