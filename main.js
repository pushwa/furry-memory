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

  img.addEventListener('load', () => {
    return img.classList.add('fadeIn');
  });

  return imgWrapper.appendChild(img);
};

const makeImgTumbs = total => {
  for (let i = 0; i < total; i++) {
    makeTumb(total, i);
  }
};

makeImgTumbs(5);
