document.getElementById('search').addEventListener('input', function() {
    const term = this.value.toLowerCase();
    const items = document.querySelectorAll('#benefits-list li');
    items.forEach(item => {
        const text = item.textContent.toLowerCase();
        if (text.includes(term)) {
            item.classList.remove('hide');
        } else {
            item.classList.add('hide');
        }
    });
});