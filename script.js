document.addEventListener('DOMContentLoaded', () => {
    const coinContainer = document.querySelector('#coinContainer');
    const coin = document.querySelector('#coin');
    const flipBtn = document.querySelector('#flipBtn');
    const resultDiv = document.querySelector('#result');

    let isSpinning = false;

    flipBtn.addEventListener('click', () => {
        if (isSpinning) return;

        isSpinning = true;
        resultDiv.textContent = '';

        const randomNum = Math.random();
        const outcome = randomNum < 0.5 ? 'head' : 'tail';

        coin.classList.add('spin');

        setTimeout(() => {
            coin.classList.remove('spin');

            // Determinar la clase final para mostrar la cara correcta
            if (outcome === 'head') {
                coin.style.transform = 'rotateY(0deg)';
                resultDiv.textContent = 'Head';
            } else {
                coin.style.transform = 'rotateY(180deg)';
                resultDiv.textContent = 'Tail';
            }
            isSpinning = false;
        }, 600); // La duración de la animación (debe coincidir con la transición en CSS)
    });

    // Permitir lanzar la moneda haciendo clic en el contenedor de la moneda
    coinContainer.addEventListener('click', () => {
        flipBtn.click(); // Simula un clic en el botón
    });
});