document.getElementById('loginForm').addEventListener('submit', async function (e) {
    e.preventDefault();

    const loginData = {
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
    };

    try {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(loginData),
        });

        if (response.ok) {
            const responseData = await response.json(); // Отримуємо дані з сервера
            localStorage.setItem('isLoggedIn', 'true'); // Зберігаємо статус
            localStorage.setItem('userId', responseData.userId);
            alert('Zalogowano pomyślnie!');
            window.location.href = '/index.html'; // Перенаправляємо на головну сторінку
        } else {
            const error = await response.text();
            alert('Błąd logowania: ' + error);
        }
    } catch (err) {
        console.error('Błąd serwera:', err);
        alert('Błąd serwera. Spróbuj ponownie później.');
    }
});
