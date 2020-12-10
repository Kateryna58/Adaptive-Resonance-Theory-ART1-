const RHO = 0.4;
const B = 0.9;
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
  function andVector(a,b) {
    // for (let i = 0; i < 1; i++) {
    //   x = P[i];
    futureVector=[];
      for (let j = 0; j < D; j++) {
        // futureVector.push(x[j]+E[j]);
        if(a[j]+b[j]>1){
          futureVector.push(1);
        }else{
          futureVector.push(0);
        }
      // }
    }
    return futureVector;
  }
  let futureVectorSumm;
  function summVector(a) {
    futureVectorSumm=0
    for (let i = 0; i < D; i++) {
      futureVectorSumm+=a[i];
    }
    return futureVectorSumm;
  }
  // andVector(P[0],E)
  // summVector(E);
  let newClaster=new Array();
  for(let i=0;i<N;i++){
    if(((summVector(andVector(P[i],E)))/(B+summVector(P[i])))>(summVector(E)/(B+parseFloat(D)))){
      if((summVector(andVector(P[i],E)))/summVector(E)>=RHO){
        P[i]=andVector(P[i],E);

        // console.log("yes");
      }
    }else{
      console.log("no")
    }
  }
  console.log(P)
  for (let i = 0; i < N; i++) {
    document.querySelector("#newP").innerHTML += "<tr id=" + i+N + "></tr>";

    for (let j = 0; j < D; j++) {
      if (j == 0) {
        document.getElementById(i+N).innerHTML += "<td>{ " + P[i][j] + "</td>";
      } else if (j == D - 1) {
        document.getElementById(i+N).innerHTML += "<td>" + P[i][j] + " }</tr>";
      } else {
        document.getElementById(i+N).innerHTML += "<td>" + P[i][j] + "</td>";
      }
    }
  }
}
generateRandomArray();
