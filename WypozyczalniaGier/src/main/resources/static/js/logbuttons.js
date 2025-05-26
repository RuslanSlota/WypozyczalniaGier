document.addEventListener('DOMContentLoaded', () => {
    const loginButton = document.getElementById('loginButton');
    const registerButton = document.getElementById('registerButton');
    const logoutButton = document.getElementById('logoutButton');

    // Перевірка статусу входу
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

    if (isLoggedIn) {
        // Якщо користувач увійшов, показати зображення "Wyloguj się"
        if (loginButton) loginButton.style.display = 'none';
        if (registerButton) registerButton.style.display = 'none';
        if (logoutButton) logoutButton.style.display = 'inline';
    } else {
        // Якщо користувач не увійшов, показати "Zaloguj się" і "Zarejestruj się"
        if (loginButton) loginButton.style.display = 'inline';
        if (registerButton) registerButton.style.display = 'inline';
        if (logoutButton) logoutButton.style.display = 'none';
    }

    // Обробка кліку на зображення "Wyloguj się"
    if (logoutButton) {
        logoutButton.addEventListener('click', () => {
            localStorage.removeItem('isLoggedIn'); // Видалити статус входу
            alert('Wylogowano pomyślnie!');
            window.location.reload(); // Перезавантажити сторінку
        });
    }
});