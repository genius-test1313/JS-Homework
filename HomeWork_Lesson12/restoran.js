// Ждем, пока весь HTML-документ полностью загрузится
document.addEventListener('DOMContentLoaded', () => {

    /* =========================================
       1. ЛОГИКА КОРЗИНЫ (Счетчик товаров)
       ========================================= */
    let cartCount = 0; // Переменная для хранения количества товаров
    const cartCountElement = document.querySelector('.cart-count'); // Цифра в шапке
    const addButtons = document.querySelectorAll('.btn-add'); // Все кнопки "+ Add to cart"

    if (cartCountElement && addButtons.length > 0) {
        addButtons.forEach(button => {
            button.addEventListener('click', function() {
                cartCount++; 
                cartCountElement.textContent = cartCount; 

                // Визуальный эффект: кнопка на секунду становится зеленой
                const originalText = this.textContent;
                this.textContent = 'Added! ✓';
                this.style.backgroundColor = '#4CAF50'; 
                this.style.color = '#fff';

                // Возвращаем исходный вид через 1 секунду
                setTimeout(() => {
                    this.textContent = originalText;
                    this.style.backgroundColor = ''; 
                }, 1000);
            });
        });
    }

    /* =========================================
       2. ФИЛЬТРАЦИЯ И СОРТИРОВКА МЕНЮ
       ========================================= */
    const searchInput = document.getElementById('searchInput');
    const categoryFilter = document.getElementById('categoryFilter');
    const sortFilter = document.getElementById('sortFilter');
    const menuGrid = document.getElementById('menuGrid');
    
    // Если секция меню существует на странице
    if (menuGrid) {
        const menuItems = Array.from(document.querySelectorAll('.menu-item')); 

        function updateMenu() {
            const searchTerm = searchInput.value.toLowerCase().trim();
            const selectedCategory = categoryFilter.value;
            const sortMethod = sortFilter.value;

            // Шаг 1: Фильтрация (поиск + категория)
            let filteredItems = menuItems.filter(item => {
                const title = item.querySelector('h3').textContent.toLowerCase();
                const category = item.dataset.category; 

                const matchesSearch = title.includes(searchTerm);
                const matchesCategory = (selectedCategory === 'all') || (category === selectedCategory);

                return matchesSearch && matchesCategory;
            });

            // Шаг 2: Сортировка (алфавит или цена)
            filteredItems.sort((a, b) => {
                if (sortMethod === 'default') {
                    const nameA = a.querySelector('h3').textContent;
                    const nameB = b.querySelector('h3').textContent;
                    return nameA.localeCompare(nameB);
                } else if (sortMethod === 'price-low') {
                    const priceA = parseFloat(a.querySelector('.price').textContent.replace('$', ''));
                    const priceB = parseFloat(b.querySelector('.price').textContent.replace('$', ''));
                    return priceA - priceB;
                } else if (sortMethod === 'price-high') {
                    const priceA = parseFloat(a.querySelector('.price').textContent.replace('$', ''));
                    const priceB = parseFloat(b.querySelector('.price').textContent.replace('$', ''));
                    return priceB - priceA;
                }
            });

            // Шаг 3: Обновление сетки
            menuGrid.innerHTML = '';
            
            if (filteredItems.length === 0) {
                menuGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; font-size: 18px; color: #666;">No dishes found. Try a different search!</p>';
            } else {
                filteredItems.forEach(item => menuGrid.appendChild(item));
            }
        }

        // Запускаем функцию при любых изменениях в фильтрах
        if (searchInput) searchInput.addEventListener('input', updateMenu);
        if (categoryFilter) categoryFilter.addEventListener('change', updateMenu);
        if (sortFilter) sortFilter.addEventListener('change', updateMenu);
    }

    /* =========================================
       3. ВАЛИДАЦИЯ ФОРМЫ (Contact US)
       ========================================= */
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Останавливаем отправку страницы

            const nameInput = this.querySelector('input[type="text"]');
            const emailInput = this.querySelector('input[type="email"]');
            
            // Проверка на пустые поля
            if (nameInput.value.trim() === '' || emailInput.value.trim() === '') {
                alert('Oops! Please fill in your name and email.');
                return;
            }

            // Проверка на наличие @ в email
            if (!emailInput.value.includes('@')) {
                alert('Please enter a valid email address with an "@" symbol.');
                return;
            }

            // Успех
            alert(`Thank you, ${nameInput.value}! Your message has been sent successfully.`);
            this.reset(); // Очищаем форму
        });
    }

    /* =========================================
       4. ПОДПИСКА В ПОДВАЛЕ (Footer Subscribe)
       ========================================= */
    const subscribeForm = document.querySelector('.subscribe-form');
    
    if (subscribeForm) {
        const subscribeBtn = subscribeForm.querySelector('button');
        const subscribeInput = subscribeForm.querySelector('input[type="email"]');

        subscribeBtn.addEventListener('click', function(e) {
            e.preventDefault(); 
            
            const email = subscribeInput.value.trim();
            
            if (email === '' || !email.includes('@')) {
                alert('Please enter a valid email address to subscribe!');
            } else {
                alert('Awesome! You are now subscribed to FoodHub news. 🍕');
                subscribeInput.value = ''; 
            }
        });
    }

});
