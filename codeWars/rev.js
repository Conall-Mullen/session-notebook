// function top3(products, amounts, prices) {
// refactor this part so that the same 'revs' array is created
// but without using 'map'
// [
// 	{ name: 'Computer', revenue: 597, index: 0 },
// 	{ name: 'Cell Phones', revenue: 7176, index: 1 },
// 	{ name: 'Vacuum Cleaner', revenue: 3192, index: 2 }
// ]
//
// const revs = products.map((product, i) => {
//   return {
// 	name: product,
// 	revenue: amounts[i] * prices[i],
// 	index: i
//   }
// })

const products = ["Computer", "Cell Phones", "Vacuum Cleaner"];
const amounts = [3, 24, 8];
const prices = [199, 299, 399];
const revArray = [];

function top3(products, amounts, prices) {
  for (let i = 0; i < products.length; i++) {
    let revs = {
      name: products[i],
      revenue: amounts[i] * prices[i],
    };

    revArray.push(revs);
  }
  console.log(revArray);  §
  const sorted = revArray.sort((a, b) => {
    return b.revenue - a.revenue || a.index - b.index;
  });
  const names = sorted.name;
  //   console.log(sorted.name);
  return sorted;
}

//   console.log(revs);
//   const sorted = revs.sort((a, b) => {
//     return b.revenue - a.revenue || a.index - b.index;
//   });
//   return sorted.slice(0, 3).map((product) => {
//     return product.name;
//   });
// }

top3(
  ["Computer", "Cell Phones", "Vacuum Cleaner"],
  [3, 24, 8],
  [199, 299, 399]
);
