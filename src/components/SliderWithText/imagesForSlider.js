const relativePath = `${process.env.PUBLIC_URL}`;

const imagesPath = {
  0: `${relativePath}/img/1.JPG`,
  1: `${relativePath}/img/2.JPG`,
  2: `${relativePath}/img/3.JPG`,
  3: `${relativePath}/img/4.JPG`,
  4: `${relativePath}/img/5.JPG`,
  5: `${relativePath}/img/6.JPG`,
  6: `${relativePath}/img/7.JPG`,
  7: `${relativePath}/img/8.JPG`,
  8: `${relativePath}/img/9.JPG`,
};

const addImagesToArr = (source, target) => {
  for (const key in source) {
    target.push({
      original: source[key],
      thumbnail: source[key],
    });
  }
};

export const images = [];

addImagesToArr(imagesPath, images);
