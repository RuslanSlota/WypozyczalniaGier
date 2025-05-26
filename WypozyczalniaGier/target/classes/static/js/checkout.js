document.addEventListener('DOMContentLoaded', () => {
    console.log("Document loaded");

    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    console.log("Is Logged In:", isLoggedIn);

    const guestForm = document.getElementById('guestForm');
    const registeredForm = document.getElementById('registeredForm');
    const checkoutGuestButton = document.getElementById('checkoutGuestButton');
    const checkoutRegisteredButton = document.getElementById('checkoutRegisteredButton');

    // Перевіряємо наявність форм і кнопок
    if (!guestForm || !registeredForm || !checkoutGuestButton || !checkoutRegisteredButton) {
        console.error("One or more required elements are missing from the DOM.");
        return;
    }

    // Функція для перемикання видимості форм
    function toggleForms() {
        console.log("Toggling forms...");
        if (isLoggedIn) {
            guestForm.style.display = 'none';
            registeredForm.style.display = 'block';
        } else {
            guestForm.style.display = 'block';
            registeredForm.style.display = 'none';
        }
    }

    toggleForms();

    // Обробка кнопки для гостей
    checkoutGuestButton.addEventListener('click', async () => {
        const name = document.getElementById('guestName')?.value;
        const surname = document.getElementById('guestSurname')?.value;
        const email = document.getElementById('guestEmail')?.value;
        const phone = document.getElementById('guestPhone')?.value;
        const street = document.getElementById('guestStreet')?.value;
        const streetNumber = document.getElementById('guestStreetNumber')?.value;
        const apartmentNumber = document.getElementById('guestApartment')?.value || ""; // необов'язкове
        const postalCode = document.getElementById('guestPostalCode')?.value;
        const city = document.getElementById('guestCity')?.value;
        const paymentMethod = document.getElementById('guestPaymentMethod')?.value;

        // Отримуємо товари з кошика (зберігаються в localStorage)
        const cart = JSON.parse(localStorage.getItem('cart') || '[]');

        if (!name || !surname || !email || !phone || !street || !streetNumber || !postalCode || !city || !paymentMethod) {
            alert('Proszę wypełnić wszystkie obowiązkowe pola.');
            return;
        }

        if (cart.length === 0) {
            alert('Twój koszyk jest pusty.');
            return;
        }

        // Формуємо об'єкт адреси
        const address = {
            street,
            streetNumber,
            apartmentNumber,
            postalCode,
            city
        };

        // Формуємо масив items
        const items = cart.map(item => ({
            gameId: item.id,
            quantity: item.quantity
        }));

        const formData = {
            name,
            surname,
            email,
            phone,
            address,
            paymentMethod,
            items
        };

        try {
            const response = await fetch('/api/checkout/guest', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                alert('Zakup został pomyślnie zakończony!');
                localStorage.removeItem('cart'); // очищаємо кошик
                window.location.href = '/index.html';
            } else {
                const errorText = await response.text();
                alert(`Wystąpił błąd podczas zakupu: ${errorText}`);
            }
        } catch (error) {
            alert('Wystąpił błąd podczas zakupu. Spróbuj ponownie.');
            console.error(error);
        }
    });


    // Обробка кнопки для зареєстрованих користувачів
    checkoutRegisteredButton.addEventListener('click', async () => {
        const userId = localStorage.getItem('userId'); // Отримуємо ID користувача

        if (!userId) {
            alert('Wystąpił problem: brak ID użytkownika. Proszę zalogować się ponownie.');
            return;
        }

        const street = document.getElementById('registeredStreet')?.value;
        const streetNumber = document.getElementById('registeredStreetNumber')?.value;
        const apartmentNumber = document.getElementById('registeredApartment')?.value || ""; // необов'язкове
        const postalCode = document.getElementById('registeredPostalCode')?.value;
        const city = document.getElementById('registeredCity')?.value;
        const paymentMethod = document.getElementById('registeredPaymentMethod')?.value;

        const cart = JSON.parse(localStorage.getItem('cart') || '[]');

        if (!street || !streetNumber || !postalCode || !city || !paymentMethod) {
            alert('Proszę wypełnić wszystkie obowiązkowe pola.');
            return;
        }

        if (cart.length === 0) {
            alert('Twój koszyk jest pusty.');
            return;
        }

        const address = {
            street,
            streetNumber,
            apartmentNumber,
            postalCode,
            city
        };

        const items = cart.map(item => ({
            gameId: item.id,
            quantity: item.quantity
        }));

        const formData = {
            userId,
            address,
            paymentMethod,
            items
        };

        try {
            const response = await fetch('/api/checkout/registered', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                alert('Zakup został pomyślnie zakończony!');
                localStorage.removeItem('cart'); // очищаємо кошик
                window.location.href = '/index.html';
            } else {
                const errorText = await response.text();
                alert(`Wystąpił błąd podczas zakupu: ${errorText}`);
            }
        } catch (error) {
            alert('Wystąpił błąd podczas zakupu. Spróbuj ponownie.');
            console.error(error);
        }
    });


});
