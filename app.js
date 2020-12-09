const RHO = 0.4;
const BETA = 0.9;
let y,
  P = new Array();
let D = document.querySelector("#D").value;
let N = document.querySelector("#N").value;
function generateRandomArray() {
  for (let i = 0; i < N; i++) {
    P[i] = new Array();
    for (let j = 0; j < D; j++) {
      y = Math.random();
      if (y < 0.5) {
        P[i][j] = Math.floor(y);
      } else {
        P[i][j] = Math.ceil(y);
      }
    }
  }
  console.log(P);
}
