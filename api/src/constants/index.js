const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (res, file, cb) => {
    const original = res.originalUrl === "/api/upload" ? "images" : "xlsxs";
    cb(null, `src/public/${original}/`);
  },
  filename: (res, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload__ = multer({ storage: storage });

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
