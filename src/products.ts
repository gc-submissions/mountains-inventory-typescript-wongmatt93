import Product from "../models/Product";

const products: Product[] = [
  {
    name: "iPhone",
    price: 1000,
  },
  {
    name: "Macbook",
    price: 1100,
  },
  {
    name: "Apple Watch",
    price: 300,
  },
];

const calcAverageProductPrice = (array: Product[]): number =>
  array.length ? array.reduce((pv, cv) => pv + cv.price, 0) / array.length : 0;

const averagePrice: number = calcAverageProductPrice(products);
console.log(averagePrice);

export default calcAverageProductPrice;
