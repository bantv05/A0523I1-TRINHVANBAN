let arr = [1, 3, 5, 7, 10];
let temp = arr.forEach(function (item, index) {
  console.log(item);
});

// mong muốn gấp đôi các phần tử trong mảng
// let newArr = [];
// for(let item of arr) {
//     newArr.push(item * 2)
// }

// Chỉ gấp đôi các phần tử ở vị trí chẵn
// let newArr = arr.map((item, index) => {
//     if(index%2==0) {
//         return item * 2;
//     } else {
//         return item;
//     }
// });

// console.log(newArr);

// let newArrayFilter = arr.filter((item) => item%2!=0);


// console.log(newArrayFilter);

// reduce
let sum = arr.reduce((prev, item, index) => prev + item);
console.log(sum);

// Tìm số lớn nhất
let max = arr.reduce((prev, item) => {
    if(prev < item) {
        prev = item;
    }
    return prev;
});
