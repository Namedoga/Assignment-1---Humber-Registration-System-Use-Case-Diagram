const usecases = document.querySelectorAll('.usecase');

usecases.forEach(uc => {
    uc.addEventListener('click', () => {
        alert(`Use Case: ${uc.textContent}`);
    });
});
