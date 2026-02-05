//objects property shorthand
const myName = "Mario";
const userAge = 33;

const user = {
  myName,
  age: userAge,
  location: "Montevideo",
};

//object destructuring
const product = {
  label: "read notebok",
  price: 3,
  stock: 201,
  salePrice: undefined,
  // rating: 4.2
};

// const label = product.label
// const stock = product.stock

const { label: productLabel, stock, rating = 5 } = product;
console.log(productLabel, stock, rating);

const transaction = (type, { label, stock }) => {
    console.log(type, label, stock)
};

transaction("order", product);
