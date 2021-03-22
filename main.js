//
const imgWrapper = document.getElementById('imgWrapper');

const img = value => {
  const arr = [];
  for (let i = 0; i <= value; i++) {
    arr.push(`images/${i}.png`);
  }

  return arr;
};

const mkImage = (amount, current) => {
  const imgSrc = [...img(amount)];
  const el = document.createElement('img');
  el.src = imgSrc[current];
  el.alt = imgSrc[current];
  return imgWrapper.appendChild(el);
};

const tumbs = amount => {
  for (let i = 0; i < amount; i++) {
    mkImage(amount, i);
  }
};

tumbs(10);
