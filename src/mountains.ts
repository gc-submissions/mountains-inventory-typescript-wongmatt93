import Mountain from "../models/Mountain";

const mountains: Mountain[] = [
  {
    name: "Kilimanjaro",
    height: 19341,
  },

  {
    name: "Everest",
    height: 29029,
  },
  {
    name: "Denali",
    height: 20310,
  },
];

const findNameOfTallestMountain = (array: Mountain[]): string =>
  array.length
    ? array.reduce((pv, cv) => (pv.height > cv.height ? pv : cv)).name
    : "";

const tallestMountain: string = findNameOfTallestMountain(mountains);
console.log(tallestMountain);

export default findNameOfTallestMountain;
