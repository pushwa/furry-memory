const srcArray = indexNumber => {
  const arr = [];
  for (let i = 0; i <= indexNumber; i++) {
    arr.push(`images/${i}.png`);
  }
  return arr;
};

const makeTumb = (indexNumber, currentIndexNumber) => {
  const imgWrapper = document.getElementById('imgWrapper');
  const newSrcArray = [...srcArray(indexNumber)];
  const img = document.createElement('img');
  img.src = newSrcArray[currentIndexNumber];
  img.alt = newSrcArray[currentIndexNumber];
  imgWrapper.appendChild(img);

  img.addEventListener('load', () => {
    img.classList.add('fadeIn');
  });
};

const makeImgTumbs = total => {
  for (let i = 0; i < total; i++) {
    makeTumb(total, i);
  }
};

makeImgTumbs(5);
