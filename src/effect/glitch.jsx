export const glitchText = (event) => {
  let iterations = 0;
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const interval = setInterval(() => {
    event.target.innerText = event.target.dataset.value
      .split("")
      .map((letter, index) => {
        if (index < iterations) {
          return event.target.dataset.value[index];
        }
        if (index > iterations + 3) return "";
        return letters[Math.floor(Math.random() * 26)];
      })
      .join("");
    if (iterations >= event.target.dataset.value.length)
      clearInterval(interval);
    iterations += 1;
  }, 50);
};
