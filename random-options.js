document.addEventListener('DOMContentLoaded', function () {
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    const selectElement = document.getElementById('my-select');
    const options = Array.from(selectElement.options);
    shuffle(options);

    while (selectElement.firstChild) {
        selectElement.removeChild(selectElement.firstChild);
    }
    options.forEach(option => selectElement.appendChild(option));
});
