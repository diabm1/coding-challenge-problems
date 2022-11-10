// Transcribe the given DNA strand into corresponding mRNA - a type of RNA, that will be formed from DNA after
//transcription. DNA has the bases A, T, G and C, while RNA converts to U, A, C and G respectively

//Examples:

// dnaToRna("ATTAGCGCGATATACGCGTAC") ➞ "UAAUCGCGCUAUAUGCGCAUG"

// dnaToRna("CGATATA") ➞ "GCUAUAU"

// dnaToRna("GTCATACGACGTA") ➞ "CAGUAUGCUGCAU"

// Notes:

//     Transcription is the process of making complementary strand.
//     A, T, G and C in DNA converts to U, A, C and G respectively in mRNA.

// function dnaToRna(dna) {
//   let A = "U";
//   let T = "A";
//   let G = "C";
//   let C = "G";
let dna = "ATTAGCGCGATATACGCGTAC";
// let mRna = "UACG";
// dna.split("A").join("U")
// dna.split("T").join("A")
// dna.split("G").join("C")
// dna.split("C").join("A")
dna.replaceAll("A", "U"); //replaces all occurences of "A" with "U" and returns a new string "UTGCUTGC"
dna.replaceAll("T", "A"); //replaces all occurences of "T" with "A" and returns a new string "AAGCAAGC"
dna.replaceAll("G", "C"); //replaces all occurences of "G" with "C" and returns a new string "ATCCATCC"
dna.replaceAll("C", "G"); //replaces all occurences of "C" with "G" and returns a new string "ATGGATGG"
let dnaSplitArr = dna.split(""); //string array
for (let i = 0; i < dnaSplitArr.length; i++) {
  // console.log(dna.replaceAll(dna, mRna))
  if (dnaSplitArr[i] === "A") {
    dna.replaceAll("A", "U");
  } else if (dnaSplitArr[i] === "T") {
    dna.replaceAll("T", "A");
  } else if (dnaSplitArr[i] === "G") {
    dna.replaceAll("G", "C");
  } else if (dnaSplitArr[i] === "C") {
    dna.replaceAll("C", "G");
  } 

  console.log(dna);
}

//how do I combine all of the new strings created from each letter with the replace letters in a new string?
//I just want one solid string, of the replaced letters

// console.log(dna)
//   console.log(dna.split("")[0]);
// let dnaSplitArr = dna.split(""); //string array
// let mRnaSplitArr = mRna.split(""); //string array
// console.log(typeof dnaSplitArr.join("")) //== string

//what if I just replace each letter
// console.log(typeof dnaSplitArr[0]) //string
//because .replaceAll() only works on string from my knowledge so far
// let joinmRNA = dna.join("")
// I need to cycle through in order to get a
// for (let i = 0; i < dnaSplitArr.length; i++) {
// console.log(dnaSplitArr[i].replaceAll(`${dnaSplitArr[i]}`, `${mRnaSplitArr[i]}`));//how do i format the output for this to be on a single line

// for (let j = 0; j < mRnaSplitArr.length; j++) {
//   // console.log(dnaSplitArr[i].replaceAll(`${dnaSplitArr[i]}`, `${mRnaSplitArr[j]}`) +
//   //   " ---> " +
//   //   dnaSplitArr[i]);
//   console.log(
//     dnaSplitArr[i]
//     // .replaceAll(`${dnaSplitArr[i]}`, `${mRnaSplitArr[j]}`)
//   );
// }

// console.log(dnaSplitArr[i].replace(`${dnaSplitArr[i]}`));

// }
// console.log(dnaSplitArr.join(""));

// console.log(joinmRNA)

// console.log(dnaSplitArr[0].replaceAll("A", "U") + " ---> " + dnaSplitArr[0]);
// console.log(dnaSplitArr[1].replaceAll("T", "A") + " ---> " + dnaSplitArr[1]);
// console.log(dnaSplitArr[2].replaceAll("G", "C") + " ---> " + dnaSplitArr[2]);
// console.log(dnaSplitArr[3].replaceAll("C", "G") + " ---> " + dnaSplitArr[3]);
//now I can replace all the dynamic parts with variables and then put it inside of a loop

//incoming should be dnaSplitArr[i]
//.replaceAll w/ incoming
//put above in below for loop

// console.log(dnaSplitArr)

// console.log(dnaSplitArr.join(""))

// console.log(dnaSplitArr[i]);
// if (dnaSplitArr[0] === "A") {
//   console.log(dna.replace("A", "U"));
// }
// if (dnaSplitArr[1] === "T") {
//   console.log(dna.replace("T", "A"));
// }
// if (dnaSplitArr[2] === "G") {
//   console.log(dna.replace("G", "C"));
// }
// if (dnaSplitArr[3] === "C") {
//   console.log(dna.replace("C", "G"));
// }

// if (
//   dnaSplitArr[0] === "A" &&
//   dnaSplitArr[1] === "T" &&
//   dnaSplitArr[2] === "G" &&
//   dnaSplitArr[3] === "C"
// ) {
//   dna.replace("A", "U");
//   dna.replace("T", "A");
//   dna.replace("G", "C");
//   dna.replace("C", "G");

//   console.log(dnaSplitArr.join(""));

//   console.log(dna.join())
// }

// console.log(dna)

//   console.log(dnaSplitArr.length)
for (let i = 0; i < dnaSplitArr.length; i++) {
  //   console.log(dnaSplitArr[i]); // represents each letter of the string array //dnaSplitArr[i] typeof string, is a string value
  // console.log(dnaSplitArr[i]);
  // console.log(dnaSplitArr.length)
  // let i = 0;
  // while (i < dnaSplitArr.length - 1) {
  // if (dnaSplitArr[i] === "A") {
  //   dna.replaceAll("A", "U");
  // } else if (dnaSplitArr[i] === "T") {
  //   dna.replaceAll("T", "A"); //why doesn't it replace the letter here?
  // } else if (dnaSplitArr[i] === "G") {
  //   dna.replaceAll("G", "C");
  // } else if (dnaSplitArr[i] === "C") {
  //   dna.replaceAll("C", "G");
  // }
  //   console.log(dnaSplitArr);
  //   console.log(dna)
}

// for (let j = 0; j < mRnaSplitArr.length; j++) {
// while (j < mRnaSplitArr.length) {
// console.log(mRnaSplitArr[j]);
// }
// }

// console.log(mRnaSplitArr.join(""));

// console.log(dnaSplitArr.join(""));
// console.log(dna);
// }

// dnaToRna();
