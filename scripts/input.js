const cOfSurgeKey = '--c-of-surge';

function mvInput(root) {
  const input = root.querySelector('input');
  const surge = root.querySelector('.mv-input__animator')

  input.addEventListener('invalid', () => {
    console.log('invalid');
    root.style.setProperty(cOfSurgeKey, `val(--c-pink)`);
  });

  input.addEventListener('keydown', () => {
    //root.style.setProperty(cOfSurgeKey, initCOfSurge);
    surge.classList.add('mv-input__animator--surge');
    input.checkValidity();
  });

  surge.addEventListener('animationend', () => {
    surge.classList.remove('mv-input__animator--surge');
  });
}
