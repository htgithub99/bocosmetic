const multer = require("multer");
const path = require("path");
const { RoutePath } = require("./constant");

const storage = multer.diskStorage({
  destination: ({ originalUrl }, file, cb) => {
    const UPLOAD_IMAGE_API = [
      originalUrl === RoutePath.UPLOAD_PATH,
      originalUrl === RoutePath.UPLOAD_ADMIN_PATH,
      originalUrl === RoutePath.UPLOAD_ADMIN_MULTIPLE_PATH,
    ];
    const original = UPLOAD_IMAGE_API.some(Boolean) ? "images" : "xlsxs";
    cb(null, `public/${original}/`);
  },
  filename: (res, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload__ = multer({
  storage: storage,
  // limits: {
  //   fileSize: 10000,
  // },
  typeFilter: (res, file, cb) => {
    if (file.originalname.match(/\.(png|jpg)$/)) {
      return cb(new Error("Bạn phải chọn file image png, jpg!"));
    }
    cb(undefined, true);
  },
});

const percentageDiscount = (price, salePrice) =>
  Math.round(((price - salePrice) / price) * 100);

const getCountByCategory = (data) => {
  if (!data.length) return [];
  // Use reduce to count occurrences of each element
  const categoryCountMap = data.reduce((countMap, category) => {
    countMap.set(category, (countMap.get(category) || 0) + 1);
    return countMap;
  }, new Map());

  // Use map to transform the countMap into the desired output format
  const entries = [...categoryCountMap.entries()].map(([category, count]) => ({
    category: category,
    count: count,
  }));

  return entries;
};

module.exports = {
  upload__,
  storage,
  percentageDiscount,
  getCountByCategory,
};
