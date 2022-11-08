const relativePath = `${process.env.PUBLIC_URL}`;

const imagesPath = {
  0: `${relativePath}/img/headerBgc.jpg`,
  1: `${relativePath}/img/textOnImage1.jpg`,
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
