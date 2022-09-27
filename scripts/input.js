function keyPressClassPoke(input, target, className) {
  input.addEventListener('keydown', () => {
    target.classList.add(className);
  });

  target.addEventListener('animationend', () => {
    target.classList.remove(className);
  });
}
