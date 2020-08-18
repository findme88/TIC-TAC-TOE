const area = document.querySelector("#area");
let move = 0;
let result = "";
let count = 0;
const content = document.querySelector(".content");
const modalResult = document.querySelector(".modal-result");
const overlay = document.querySelector(".overlay");
const btnClose = document.querySelector(".btn-close");

area.addEventListener("click", (e) => {
  if ((e.target.className = "box")) {
    move % 2 === 0 ? (e.target.innerHTML = "X") : (e.target.innerHTML = "0");
    move++;
    check();
    
  }
});

const check = () => {
  const boxes = document.querySelectorAll(".box");
  const arr = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (i = 0; i < arr.length; i++) {
    if (
      boxes[arr[i][0]].innerHTML == "X" &&
      boxes[arr[i][1]].innerHTML == "X" &&
      boxes[arr[i][2]].innerHTML == "X"
    ) {
      result = "CROSSES";
      resultOutput(result);
    } else if (
      boxes[arr[i][0]].innerHTML == "0" &&
      boxes[arr[i][1]].innerHTML == "0" &&
      boxes[arr[i][2]].innerHTML == "0"
    ) {
      result = "ZEROS";
      resultOutput(result);
    } else if (move === 9) {
        content.innerHTML = `DRAW`; 
        modalResult.style.display = "block";
        
    }
  }
};

const resultOutput = (winner) => {
  content.innerHTML = `${winner} WINS`;
  modalResult.style.display = "block";
};

const closeMadal = () => {
  modalResult.style.display = "none";
  location.reload();
};

overlay.addEventListener("click", closeMadal);
btnClose.addEventListener("click", closeMadal);
