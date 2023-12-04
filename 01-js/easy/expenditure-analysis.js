/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  const ans = [];
  for(let i = 0; i < transactions.length; i++){
    let trans = transactions[i];
    let category = trans.category;
    let price = trans.price;
    let obj = contains(ans,category);

    if(obj!=null){
      obj.totalSpent += price;
    }else{
      ans.push({'category':category, 'totalSpent':price});
    }
  }

  function contains(ans, category){
    for(let i = 0; i<ans.length;i++){
      if(ans[i].category==category){
        return ans[i];
      }
    }
    return;
  }
  return ans;
}

//
// const transactions = [
//   {
//     id: 1,
//     timestamp: 1656076800000,
//     price: 10,
//     category: 'Food',
//     itemName: 'Pizza',
//   },
//   {
//     id: 2,
//     timestamp: 1656259600000,
//     price: 20,
//     category: 'Food',
//     itemName: 'Burger',
//   },
//   {
//     id: 3,
//     timestamp: 1656019200000,
//     price: 15,
//     category: 'Clothing',
//     itemName: 'T-Shirt',
//   },
//   {
//     id: 4,
//     timestamp: 1656364800000,
//     price: 30,
//     category: 'Electronics',
//     itemName: 'Headphones',
//   },
//   {
//     id: 5,
//     timestamp: 1656105600000,
//     price: 25,
//     category: 'Clothing',
//     itemName: 'Jeans',
//   },
// ];

// let valCat = transactions[0]?.category
// console.log(valCat);
// let tempArr = [];
// for(let i = 0; i < transactions.length; i++){
//   tempArr.push({
//     'category': transactions[i].category,
//     'price':transactions[i].price
//   });
// }
// console.log(tempArr);
// for(let i = 0; i < tempArr.length; i++){
//   if(tempArr[i]?.category){
//     //google update value with specific key
//   }else{
//     ans.push({
//       'category': transactions[i].category,
//       'price':transactions[i].price
//     });
//   }
// }
//

module.exports = calculateTotalSpentByCategory;
