const button = document.getElementById('cssButton');

button.addEventListener('click', function () {
    if (document.getElementById('style')) {
        document.getElementById('style').remove();
        button.innerHTML='CSS IS OFF';
    } else {
        const head = document.getElementsByTagName('HEAD')[0];
        const link = document.createElement('link');
        link.id = 'style';
        link.rel = 'stylesheet';
        link.href = 'style/style.css';
        head.appendChild(link);
        button.innerHTML='CSS IS ON';
    }
});