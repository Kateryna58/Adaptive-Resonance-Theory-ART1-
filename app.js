const RHO = 0.4;
const B = 0.9;
var y,
  P = new Array(),
  E = new Array();
let D;
let N;
function generateRandomArray() {
  D = document.querySelector("#D").value;
  N = document.querySelector("#N").value;
  document.querySelector("#P").innerHTML ="";
  document.querySelector("#E").innerHTML ="";
  document.querySelector("#newP").innerHTML ="";
  document.querySelector("#recomend").innerHTML ="";
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
      if ( P[i][j] == 1) {
        document.getElementById(i).innerHTML += "<td style='background-color:red;'>" + P[i][j] + "</td>";
      }  else {
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
  function andVector(a, b) {
    // for (let i = 0; i < 1; i++) {
    //   x = P[i];
    futureVector = [];
    for (let j = 0; j < D; j++) {
      // futureVector.push(x[j]+E[j]);
      if (a[j] + b[j] > 1) {
        futureVector.push(1);
      } else {
        futureVector.push(0);
      }
      // }
    }
    return futureVector;
  }
  let futureVectorSumm;
  function summVector(a) {
    futureVectorSumm = 0;
    for (let i = 0; i < D; i++) {
      futureVectorSumm += a[i];
    }
    return futureVectorSumm;
  }
  // andVector(P[0],E)
  // summVector(E);
  let newClaster = new Array();
  for (let i = 0; i < N; i++) {
    if (
      summVector(andVector(P[i], E)) / (B + summVector(P[i])) >
      summVector(E) / (B + parseFloat(D))
    ) {
      if (summVector(andVector(P[i], E)) / summVector(E) >= RHO) {
        P[i] = andVector(P[i], E);

        // console.log("yes");
      }
    } else {
      console.log("no");
    }
  }
  // console.log(P)
  for (let i = 0; i < N; i++) {
    document.querySelector("#newP").innerHTML += "<tr id=" + i + N + "></tr>";

    for (let j = 0; j < D; j++) {
      if (P[i][j] == 1) {
        document.getElementById(i + N).innerHTML +=
          "<td style='background-color:red'>" + P[i][j] + "</td>";
      }  else {
        document.getElementById(i + N).innerHTML += "<td>" + P[i][j] + "</td>";
      }
    }
  }
  /*---------------personalisation 2------------*/
  let vectorSumuvania = new Array(),
    l = 0,
    resultSumm = 0,
    resultMatrix = new Array(),
    cnt = 0,
    result = new Array();
  let indices = new Array();
  let idx;
  function max(obj) {
    let a = obj[0];
    for (let i = 1; i < obj.length; i++) {
      if (obj[i] > a) {
        a = obj[i];
      }
    }
    return a;
  }
  function giveRecommend(a, b) {
    cnt = 0;
    resultMatrix = [];
    for (let j = 0; j < D; j++) {
      l = 0;
      for (let i = 0; i < N; i++) {
        if (i != b && a[j] == 0) {
          vectorSumuvania[l] = P[i][j];
          l++;
        } else {
          vectorSumuvania[l] = 0;
          l++;
        }
      }
      resultSumm = 0;
      for (let i = 0; i < vectorSumuvania.length; i++) {
        resultSumm += vectorSumuvania[i];
        resultMatrix[cnt] = resultSumm;
      }
      cnt++;
    }
    console.log("recomend for ", resultMatrix);
    console.log("recomend for max ", max(resultMatrix));
    indices = [];
    idx = resultMatrix.indexOf(max(resultMatrix));
    while (idx != -1) {
      indices.push(idx);
      idx = resultMatrix.indexOf(max(resultMatrix), idx + 1);
    }
    console.log("index", indices);

    result[b] = new Array();
    result[b] = a;
    result[b][indices] = 1;
    console.log("a:", a);
  }

  let recomendation;
  for (let i = 0; i < N; i++) {
    giveRecommend(P[i], i);
  }
  console.log("RESULT", result);
  let c;
  for (let i = 0; i < N; i++) {
    document.querySelector("#recomend").innerHTML +=
      "<tr id=" + i + N + N + "></tr>";
    for (let j = 0; j < D; j++) {
      if ( result[i][j] == 1) {
        document.getElementById(i + N + N).innerHTML +=
          "<td style='background-color:red'> " + result[i][j] + "</td>";
      } else {
        document.getElementById(i + N + N).innerHTML +=
          "<td>" + result[i][j] + " </td>";

      } 
    }
  }
  // if(document.getElementById(tr).childNodes.value==1){
  //   document.getElementById(tr).childNodesstyle.cssText = 'background-color:red;'
  // }
}
generateRandomArray();
