var timer = 5;
var score = 0;
var hitNum = 0;

function makeBubble() {
  //console.log("Ok");
  var x = "";

  for (var i = 1; i <= 168; i++) {
    var num = Math.floor(Math.random() * 10);
    x += `<div class="bubble">${num}</div>`;
  }

  document.querySelector("#pbtm").innerHTML = x;
}

function runTimer() {
  var x = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#time-value").textContent = timer;
    } else {
      clearInterval(x);
      document.querySelector("#pbtm").innerHTML = `
            <div class="end-game">
             <h1>Game Over</h1>

            <div class="end-score">
                <h1>  Your Score : ${score}</h1>
            </div>

            <div class="end-btn-container" >
            </div>

            </div>`;
    }
  }, 1000);
}

function getNewHit() {
  hitNum = Math.floor(Math.random() * 10);

  document.querySelector("#hit-val").textContent = hitNum;
}

function increaseScore() {
  score += 10;
  document.querySelector("#score-val").textContent = score;
}

document.querySelector("#pbtm").addEventListener("click", function (dets) {
  // console.log(dets.target.textContent);
  var clickedNumber = Number(dets.target.textContent);
  // alert(hitNum);
  if (hitNum === clickedNumber) {
    increaseScore();
    makeBubble();
    getNewHit();
  } else {
    if (timer > 0) {
      alert("Opps!! Wrong Hit");
      makeBubble();
      getNewHit();
    }
  }
});


runTimer();
makeBubble();
getNewHit();

