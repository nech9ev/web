(function () {
    var start = performance.now();

    window.addEventListener('load', function () {
        var end = performance.now();
        var loadTime = end - start;

        const loadTimeDiv = document.createElement('div');
        loadTimeDiv.className = 'time-load-information';
        loadTimeDiv.innerHTML = 'Время загрузки <span class="time-load-title">' + (loadTime / 1000).toFixed(5) + '</span> секунд';

        document.body.appendChild(loadTimeDiv);
    });
})();
