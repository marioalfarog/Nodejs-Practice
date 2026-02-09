// const doWorkPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve([7, 4, 1]);
//   }, 2000);
// });

// doWorkPromise
//   .then((result) => {
//     console.log("success!", result);
//   })
//   .catch((error) => {
//     console.log("error!", error);
//   });

const add = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b);
    }, 2000);
  });
};

// add(1, 2)
//   .then((sum) => {
//     console.log("success!", sum);
//     add(sum, 2)
//       .then((sum) => {
//         console.log("success!", sum);
//       })
//       .catch((error) => {
//         console.log("error!", error);
//       });
//   })
//   .catch((error) => {
//     console.log("error!", error);
//   });

add(1, 1)
  .then((sum) => {
    console.log("success!", sum);
    return add(sum, 4);
  })
  .then((sum2) => {
    console.log("success!", sum2);
  })
  .catch((error) => {
    console.log("error!", error);
  });
