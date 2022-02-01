//-----------------------------------------object------------------------------
const obj = {
  name: "John",
  age: 13,
  gender: "male",
  height: 17.78,
  marriage: false,
};

//1.
let obj1 = {
  ...obj,
  gender: "female",
  height: 2.2,
};
console.log(obj1);
//2.
let { marriage, gender, height } = obj1;
console.log({ marriage, gender, height });
console.log(marriage, gender, height);
//3.
const { height: tinggi } = obj1;
console.log({ tinggi });
//4
const { newStat = "default" } = obj1;
console.log(newStat);

//5
const obj2 = {
  ...obj1,
  address: {
    city: "Alamat ku",
    country: "Indonesia",
  },
  newFunc: () => 4 * 2,
};
const {
  address: { city },
} = obj2;
console.log({ address: { city } });

//6
const anything = "address";
const { ["address"]: address } = obj2;
console.log(address);

// 7:extract property (membuang property)
// and how to run function inside object, by doing destructuring first
let { name, newFunc, ...rest } = obj2;
console.log(newFunc());
console.log(rest);

//---------------------------------array -------------------------------
const arr = [1, 2, 3, 4, 5];
//1
let arr1 = [...arr, 10, 11];
console.log(arr1);

//2
const [first, second] = arr1;
console.log(first, second);

//3
let [pertama, kedua, ...restarr] = arr1;
console.log(restarr);

//4
let [, , , , ...restarr1] = arr1;
console.log(restarr1);

//5
let [kesatu = "test", lagi] = arr1;
console.log(kesatu, lagi);

//6: Swapping array
let a = 3;
let b = 6;
let c = 9;
let arr3 = [a, b, c];
console.log(arr3);
let arr4 = ([b, c, a] = arr3);
console.log(a, b, c);
