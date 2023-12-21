
// function findObjectsByPropertyValue(array, property, value) {
//   const similarCategory = array.filter((obj) => obj[property] === value);
//   let totalprice = 0;
//   if (similarCategory.length > 1) {
//     for (let i in similarCategory) {
//       totalprice += similarCategory[i].price;
//     }
//   }
// }
// const transactions = [
//   {
//     id: 1,
//     timestamp: 1656076800000,
//     price: 10,
//     category: "Food",
//     itemName: "Pizza",
//   },
//   {
//     id: 2,
//     timestamp: 1656259600000,
//     price: 20,
//     category: "Food",
//     itemName: "Burger",
//   },
//   {
//     id: 3,
//     timestamp: 1656019200000,
//     price: 15,
//     category: "Clothing",
//     itemName: "T-Shirt",
//   },
//   {
//     id: 4,
//     timestamp: 1656364800000,
//     price: 30,
//     category: "Electronics",
//     itemName: "Headphones",
//   },
//   {
//     id: 5,
//     timestamp: 1656105600000,
//     price: 25,
//     category: "Clothing",
//     itemName: "Jeans",
//   },
// ];
// console.log(calculateTotalSpentByCategory(transactions));