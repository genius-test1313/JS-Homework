document.addEventListener('DOMContentLoaded', () => {

    /* =========================================
       1. ЛОГИКА КОРЗИНЫ (Счетчик товаров)
       ========================================= */
    let cartCount = 0; 
    const cartCountElement = document.querySelector('.cart-count'); 
    const addButtons = document.querySelectorAll('.btn-add'); 

    addButtons.forEach(button => {
        button.addEventListener('click', function() {
            cartCount++; 
            cartCountElement.textContent = cartCount; 

            const originalText = this.textContent;
            this.textContent = 'Added! ✓';
            this.style.backgroundColor = '#4CAF50'; 
            this.style.color = '#fff';

            setTimeout(() => {
                this.textContent = originalText;
                this.style.backgroundColor = ''; 
            }, 1000);
        });
    });


    /* =========================================
       2. ФИЛЬТРАЦИЯ И СОРТИРОВКА МЕНЮ
       ========================================= */
    const searchInput = document.getElementById('searchInput');
    const categoryFilter = document.getElementById('categoryFilter');
    const sortFilter = document.getElementById('sortFilter');
    const menuGrid = document.getElementById('menuGrid');
    
    const menuItems = Array.from(document.querySelectorAll('.menu-item')); 

    function updateMenu() {
        const searchTerm = searchInput.value.toLowerCase().trim(); 
        const selectedCategory = categoryFilter.value; 
        const sortMethod = sortFilter.value; 

        let filteredItems = menuItems.filter(item => {
            const title = item.querySelector('h3').textContent.toLowerCase();
            const category = item.dataset.category; 

            const matchesSearch = title.includes(searchTerm);
            const matchesCategory = (selectedCategory === 'all') || (category === selectedCategory);

            return matchesSearch && matchesCategory;
        });

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

        menuGrid.innerHTML = '';
        
        if (filteredItems.length === 0) {
            menuGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; font-size: 18px; color: #666;">No dishes found. Try a different search!</p>';
        } else {
            filteredItems.forEach(item => menuGrid.appendChild(item));
        }
    }

    searchInput.addEventListener('input', updateMenu);
    categoryFilter.addEventListener('change', updateMenu);
    sortFilter.addEventListener('change', updateMenu);


    /* =========================================
       3. ВАЛИДАЦИЯ ФОРМЫ (Проверка на ошибки)
       ========================================= */
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const nameInput = this.querySelector('input[type="text"]');
            const emailInput = this.querySelector('input[type="email"]');
            
            if (nameInput.value.trim() === '' || emailInput.value.trim() === '') {
                alert('Oops! Please fill in your name and email.');
                return; 
            }

            if (!emailInput.value.includes('@')) {
                alert('Please enter a valid email address with an "@" symbol.');
                return;
            }

            alert(`Thank you, ${nameInput.value}! Your message has been sent successfully.`);
            this.reset();
        });
    }

});
