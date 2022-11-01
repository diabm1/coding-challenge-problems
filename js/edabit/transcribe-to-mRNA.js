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
let dna = "ATGC";
//   console.log(dna.split("")[0]);
let dnaSplitArr = dna.split("");
//   console.log(dnaSplitArr.length)
for (let i = 0; i < dnaSplitArr.length - 1; i++) {
  //   console.log(dnaSplitArr[i]); // represents each letter of the string array
  // let i = 0;
  // while (i < dnaSplitArr.length - 1) {
  if (dnaSplitArr[i] === "A") {
    let replace = dna.replace("A", "U");
    console.log(replace);
  } else if (dnaSplitArr[i] === "T") {
    let replace = dna.replace("T", "A");
    console.log(replace);
  } else if (dnaSplitArr[i] === "G") {
    let replace = dna.replace("G", "C");
    console.log(replace);
  } else if (dnaSplitArr[i] === "C") {
    let replace = dna.replace("C", "G");
    console.log(replace);
  }
//   console.log()
  // }
}

console.log(dna);
// }

// dnaToRna();
