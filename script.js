const usecases = document.querySelectorAll('.usecase');


usecases.forEach(uc => {
  uc.setAttribute('tabindex', '0');   
  uc.setAttribute('role', 'button');  
});


function showUseCase(el) {
  const name = el.textContent.trim();
  const tip = el.getAttribute('title');
  alert(tip ? `${name}\n\n${tip}` : `Use Case: ${name}`);
}


usecases.forEach(uc => {
  uc.addEventListener('click', () => showUseCase(uc));
});


usecases.forEach(uc => {
  uc.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      showUseCase(uc);
    }
  });
});
