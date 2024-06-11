function top3(products, amounts, prices) {
  const objs = products.map((product, index) => {
    return {
      name: product,
      revenue: amounts[index] * prices[index],
    };
  });

  let topObjects = objs
    .sort((a, b) => b.revenue - a.revenue)
    .slice(0, 3)
    .map((product) => {
      let nameArray = [];
    });
}

const products = ["Computer", "Cell Phones", "Vacuum Cleaner"];
const amounts = [3, 24, 8];
const prices = [199, 299, 399];

top3(products, amounts, prices);
