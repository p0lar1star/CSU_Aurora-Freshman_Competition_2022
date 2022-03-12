// const code = "web1_2048_happy_gam3!!!!";
const code = [
  18, 101, 83, 84, 109, 3, 4, 6, 103, 107, 9, 62, 0, 17, 38, 47, 6, 62, 94, 82,
  0, 18, 0, 0
];

// function codeCatch() {
//   let args = [...arguments];

//   let buf = new ArrayBuffer(24);
//   const view = new DataView(buf);
//   view.setUint8(0, 18);
//   view.setUint8(1, 101);
//   view.setUint8(2, 83);
//   view.setUint8(3, 84);
//   view.setUint16(4, 0x036d, true);
//   view.setUint16(6, 0x0604, true);
//   view.setUint16(8, 0x6b67, true);
//   view.setUint16(10, 0x3e09, true);
//   view.setUint32(12, 0x2f261100, true);
//   view.setUint32(16, 0x063e5e52);
//   view.setUint32(20, 0x120000);

//   function cat(code) {
//     if (code.length !== 24) return false;
//     let encode = [];
//     for (let i = 0; i < code.length; i++) {
//       if (~i % 2 === 0) {
//         encode.push(code.charCodeAt(i) ^ code.charCodeAt(i - 2));
//       } else {
//         encode.push(code.charCodeAt(i) ^ code.charCodeAt(i + 1));
//       }
//     }
//     for (let i = 0; i < code.length; i++) {
//       if (view.getInt8(i) !== encode[i]) return false;
//     }
//     return true;
//   }

//   return function () {
//     if (!!arguments.length) {
//       [].push.apply(args, arguments);

//       return arguments.callee;
//     }

//     return cat(args.join(""));
//   };
// }

// console.log(codeCatch("adsf")());
// console.log(codeCatch(1, 2)(2)(3)(4)());

// function decode() {
//   let encode = [];
//   for (let i = 0; i < code.length; i++) {
//     if (~i % 2 === 0) {
//       encode.push(code.charCodeAt(i) ^ code.charCodeAt(i - 2));
//     } else {
//       encode.push(code.charCodeAt(i) ^ code.charCodeAt(i + 1));
//     }
//   }
//   console.log(encode);
// }

// decode();

function decode() {
  let encode = [];
  for (let i = 1; i < code.length; i += 2) {
    encode.push(
      String.fromCharCode(code[i] ^ encode[(i - 3) / 2]?.charCodeAt(0))
    );
  }
  for (let i = 0; i < code.length; i += 2) {
    encode.splice(
      i,
      0,
      String.fromCharCode(code[i] ^ encode[i]?.charCodeAt(0))
    );
  }
  console.log(encode.join(""));
}

decode();
