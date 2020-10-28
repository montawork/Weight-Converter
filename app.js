document.getElementById('lbsInput').addEventListener('input', (e) => {
  document.getElementById('output').style.display = 'block';
  let lbs = e.target.value;
  let grams = document.getElementById('gramsOutput');
  let kilograms = document.getElementById('kgOutput');
  let ounces = document.getElementById('ouncesOutput');

  grams.textContent = lbs / 0.0022046;
  kilograms.textContent = lbs / 2.2046;
  ounces.textContent = lbs * 16;
});
