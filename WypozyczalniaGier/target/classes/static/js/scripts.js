const cart = [];

async function loadGames() {
    try {
        const response = await fetch('/api/games');
        if (!response.ok) {
            throw new Error('Failed to fetch games.');
        }
        const games = await response.json();

        const gameList = document.getElementById('game-list');
        gameList.innerHTML = ''; // Очистити контейнер перед додаванням нових ігор

        games.forEach(game => {
            const div = document.createElement('div');
            div.classList.add('game-item');
            div.innerHTML = `
                <img src="${game.imageUrl}" alt="${game.title}" style="max-width: 100%; height: auto;">
                <h3>${game.title}</h3>
                <p>${game.description}</p>
                <p><strong>Cena:</strong> ${game.price} Zł</p>
                <button onclick="addToCart('${game.id}', '${game.title}', ${game.price})">Dodaj do koszyka</button>
            `;
            gameList.appendChild(div);
        });
    } catch (error) {
        console.error('Error loading games:', error);
    }
}

loadGames();


document.addEventListener('DOMContentLoaded', () => {
    updateCartView();

    document.getElementById('checkoutButton').addEventListener('click', () => {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        if (cart.length === 0) {
            alert('Twój koszyk jest pusty.');
        } else {
            window.location.href = '/checkout.html';
        }
    });
});

function addToCart(gameId, title, price) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    const existingItem = cart.find(item => item.id === gameId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ id: gameId, title, price, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartView();
}

function updateCartView() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItems = document.getElementById('cartItems');

    cartItems.innerHTML = '';

    if (cart.length === 0) {
        cartItems.innerHTML = '<p>Twój koszyk jest pusty.</p>';
        return;
    }

    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.title} - ${item.quantity} x ${item.price} Zł = ${(item.quantity * item.price).toFixed(2)} Zł`;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Usuń';
        removeButton.onclick = () => {
            removeFromCart(item.id);
        };

        li.appendChild(removeButton);
        cartItems.appendChild(li);
    });
}

function removeFromCart(gameId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(item => item.id !== gameId);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartView();
}


function redirectToCheckout() {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    if (cart.length === 0) {
        alert('Twój koszyk jest pusty.');
        return;
    }

    if (!isLoggedIn) {
        const proceedAsGuest = confirm(
            'Nie jesteś zalogowany. Czy chcesz kontynuować jako gość?'
        );
        if (proceedAsGuest) {
            window.location.href = '/checkout.html?guest=true';
        } else {
            window.location.href = '/login.html';
        }
    } else {
        window.location.href = '/checkout.html';
    }
}

function checkLoginStatus() {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'; // Перевіряємо, чи true
    const loginButton = document.getElementById('loginButton');
    const registerButton = document.getElementById('registerButton');
    const logoutButton = document.getElementById('logoutButton');

    if (isLoggedIn) {
        // Якщо користувач увійшов
        loginButton.style.display = 'none';
        registerButton.style.display = 'none';
        logoutButton.style.display = 'inline';
    } else {
        // Якщо користувач не увійшов
        loginButton.style.display = 'inline';
        registerButton.style.display = 'inline';
        logoutButton.style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    checkLoginStatus();
});

document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.filter-button');
    const gameContainer = document.getElementById('gameContainer');

    async function loadGames(category = 'all') {
        try {
            const response = await fetch('/api/games');
            const games = await response.json();

            const filteredGames = category === 'all'
                ? games
                : games.filter(game => game.category === category);

            gameContainer.innerHTML = '';

            filteredGames.forEach(game => {
                const gameCard = document.createElement('div');
                gameCard.className = 'game-card';

                gameCard.innerHTML = `
                    <img src="${game.imageUrl}" alt="${game.title}">
                    <h3>${game.title}</h3>
                    <p>${game.description}</p>
                    <p><strong>Cena:</strong> ${game.price} Zł</p>
                    <button class="add-to-cart" data-id="${game.id}" data-title="${game.title}" data-price="${game.price}">
                        Dodaj do koszyka
                    </button>
                `;

                gameContainer.appendChild(gameCard);
            });

            // Додаємо обробники подій для всіх кнопок "Dodaj do koszyka"
            document.querySelectorAll('.add-to-cart').forEach(button => {
                button.addEventListener('click', () => {
                    const gameId = button.getAttribute('data-id');
                    const gameTitle = button.getAttribute('data-title');
                    const gamePrice = parseFloat(button.getAttribute('data-price'));

                    addToCart(gameId, gameTitle, gamePrice);
                });
            });
        } catch (err) {
            console.error('Error loading games:', err);
        }
    }

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-category');
            loadGames(category);
        });
    });

    loadGames();
});













