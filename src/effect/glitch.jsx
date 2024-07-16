export const glitchText = (event) => {
  let iterations = 0;
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if (index < iterations) {
          return event.target.dataset.value[index];
        }
        return letters[Math.floor(Math.random() * 26)];
      })
      .join("");
    if (iterations >= event.target.dataset.value.length)
      clearInterval(interval);
    iterations += 2;
  }, 50);
};
