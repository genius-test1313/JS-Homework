// --1--
// Напишіть такий JavaScript, щоб після натискання на кнопку button, елемент
// <div id="text"> зникав


// document.getElementById('hideButton').onclick = function() {
//     document.getElementById('text').style.display = 'none';
// };

// --2--
// Напишіть такий код, щоб після натискання на кнопку, вона зникала


// document.getElementById('hideButton').onclick = function() {
//     this.style.display = 'none';
// };

// --3--
// Створіть дерево, яке показує/приховує дочірні вузли при кліці


document.querySelectorAll('.toggle').forEach(function(toggle) {
    toggle.addEventListener('click', function() {
        const children = this.nextElementSibling;
        if (children && children.classList.contains('hidden')) {
            children.classList.remove('hidden');
        } else if (children) {
            children.classList.add('hidden');
        }
    });
});