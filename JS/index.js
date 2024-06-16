// fetch("https://fakestoreapi.com/products")
//   .then((responce) => responce.json())
//   .then((result1) => console.log(result1));

// async function rem() {
//   let result1 = await step1(10, false);
//   let result2 = await step2(result1, false);
//   let result3 = await step3(result2, false);
//   console.log(result3);
// }

function step1(value, error) {
  return new Promise((resolve, reject) => {
    if (!error) {
      resolve(value + 10);
    } else {
      reject("Something wrong");
    }
  });
}
async function result() {
  let result1 = await step1(10, false);
  console.log(result1);
  return result1;
}
async function result2() {
  let result = await Promise.resolve(5);
  return result;
}
//console.log(result());
result()
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
