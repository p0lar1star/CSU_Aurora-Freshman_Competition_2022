// const code = "web1_2048_happy_gam3!!!!";

// const flagContent =
//   "This is your flag: Aurora{web1_happy_chal1enge-gamemmmmmm!}";

// let result = "";

// const len = code.length;

// for (let i = 0; i < flagContent.length; i++) {
//   console.log(flagContent.charCodeAt(i) ^ code.charCodeAt(i % len));
//   result += String.fromCharCode(
//     flagContent.charCodeAt(i) ^ code.charCodeAt(i % len)
//   );
// }

// console.log(btoa(result));

// let flagB64 =
//   "Iw0LQn9bQxRBMB0TUBYVPgBbTXJUU05TFh4VVD0Db1xZLxgYLxMRPgtQCF1GRAxGFggHXDJfXVlVfhU=";
// flagB64 = atob(flagB64);
// const code = "web1_2048_happy_gam3!";
// let len = code.length;
// let result = "";

// for (let i = 0; i < flagB64.length; i++) {
//   result += String.fromCharCode(
//     flagB64.charCodeAt(i) ^ code.charCodeAt(i % len)
//   );
// }

// console.log(result);

function successReward() {
  const code = "web1_2048_happy_gam3!!!!";
  let successContent = atob(
    "Iw0LQn9bQxRBMB0TUBYVPgBbTXJUU05TFh4VVD0Db1xZLxgYLxMRPgtQCF1GRAxGFggHXDJfXVlVfhU="
  );
  let len = code.length;
  let result = "";

  for (let i = 0; i < successContent.length; i++) {
    result += String.fromCharCode(
      successContent.charCodeAt(i) ^ code.charCodeAt(i % len)
    );
  }
  return result;
}

console.log(successReward());
