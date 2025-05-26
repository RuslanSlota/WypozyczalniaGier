document.getElementById('registerForm').addEventListener('submit', async function (e) {
    e.preventDefault();
    console.log("Formularz został wysłany."); // Перевірка

    const userData = {
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        password: document.getElementById('password').value,
        name: document.getElementById('name').value,
        surname: document.getElementById('surname').value,
        dateofbirth: document.getElementById('dateofbirth').value,
        sex: document.getElementById('sex').value
    };

    console.log("Wysyłanie danych:", userData); // Діагностика

    try {
        const response = await fetch('/api/users/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData),
        });

        console.log("Odpowiedź serwera:", response); // Діагностика

        if (response.ok) {
            const message = await response.text();
            alert(message);
            window.location.href = '/login.html';
        } else {
            const error = await response.text();
            alert('Błąd rejestracji: ' + error);
        }
    } catch (err) {
        console.error("Błąd klienta:", err);
        alert('Błąd serwera. Spróbuj ponownie później.');
    }
});