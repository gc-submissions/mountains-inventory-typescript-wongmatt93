import InventoryItem from "../models/InventoryItem";

const inventory: InventoryItem[] = [
  {
    product: {
      name: "motor",
      price: 10.0,
    },
    quantity: 10,
  },
  {
    product: {
      name: "sensor",
      price: 12.5,
    },
    quantity: 4,
  },
  {
    product: {
      name: "LED",
      price: 1.0,
    },
    quantity: 20,
  },
];

const calcInventoryValue = (array: InventoryItem[]): number =>
  array.length
    ? array.reduce((pv, cv) => pv + cv.product.price * cv.quantity, 0)
    : 0;

const totalValue: number = calcInventoryValue(inventory);
console.log(totalValue);

export default calcInventoryValue;
