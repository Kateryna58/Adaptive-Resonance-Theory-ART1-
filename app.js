const RHO = 0.4;
const BETA = 0.9;
var y,
  P = new Array(),
  E = new Array();
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
  for (let i = 0; i < D; i++) {
    y = Math.random();
    if (y < 0.5) {
      E[i] = Math.floor(y);
    } else {
      E[i] = Math.ceil(y);
    }
  }
  for (let i = 0; i < N; i++) {
    document.querySelector("#P").innerHTML += "<tr id=" + i + "></tr>";

    for (let j = 0; j < D; j++) {
      if (j == 0) {
        document.getElementById(i).innerHTML += "<td>{ " + P[i][j] + "</td>";
      } else if (j == D - 1) {
        document.getElementById(i).innerHTML += "<td>" + P[i][j] + " }</tr>";
      } else {
        document.getElementById(i).innerHTML += "<td>" + P[i][j] + "</td>";
      }
    }
  }
  for (let j = 0; j < D; j++) {
    if (j == 0) {
      document.getElementById("E").innerHTML += "<span>{" + E[j] + " </span>";
    } else if (j == D - 1) {
      document.getElementById("E").innerHTML += "<span>" + E[j] + "} </span>";
    } else {
      document.getElementById("E").innerHTML += "<span>" + E[j] + "</span>";
    }
  }
  let futureVector = new Array();
  let x = new Array();
  function andVector() {
    for (let i = 0; i < 1; i++) {
      x = P[i];
      for (let j = 0; j < D; j++) {
        // futureVector.push(x[j]+E[j]);
        if(x[j]+E[j]>1){
          futureVector.push(1);
        }else{
          futureVector.push(0);
        }
      }
    }
  }
  let futureVectorSumm=0;
  function summVector() {
    for (let i = 0; i < D; i++) {
      futureVectorSumm+=E[i];
    }
  }
  summVector()
  console.log(futureVectorSumm);
}
generateRandomArray();
