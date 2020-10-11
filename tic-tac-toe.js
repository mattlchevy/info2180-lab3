
"use strict"; 

window.onload = () => {
       let squares = document.querySelectorAll('#board div');
       var boardlength = squares.length;
       for (var count = 0; count < boardlength; count++) {
              squares[count].classList.add('square');
       

       };
       

       squares[count].onclick = function () {
              if (squares[count].innerHTML === "" || squares[count].innerHTML === "O") {
                     squares[count].classList.toggle("O", false);
                     squares[count].innerHTML = "X";
                     squares[count].classList.toggle("X", true);
       
              } else if (squares[count].innerHTML === "X") {
                     squares[count].classList.toggle("X", false);
                     squares[count].innerHTML = "O";
                     squares[count].classList.toggle("O", true);
                     checkBoard(squares);
              };
              
       
       
       squares[count].onmouseover = function() { squares[count].classList.toggle("hover", true) };
       squares[count].onmouseout = function() { squares[count].classList.toggle("hover", false) };

       function checkBoard(arr) {
              if (arr[0].innerHTML !== "" && arr[0].innerHTML === arr[1].innerHTML && arr[0].innerHTML === arr[2].innerHTML) {
                  document.getElementById('status').className = "you-won"
                  document.getElementById('status').innerHTML = "Congratulations! " + arr[0].innerHTML + " is the Winner!"
              } else if (arr[3].innerHTML !== "" && arr[3].innerHTML === arr[4].innerHTML && arr[3].innerHTML === arr[5].innerHTML) {
                  document.getElementById('status').className = "you-won"
                  document.getElementById('status').innerHTML = "Congratulations! " + arr[3].innerHTML + " is the Winner!"
              } else if (arr[6].innerHTML !== "" && arr[6].innerHTML === arr[7].innerHTML && arr[6].innerHTML === arr[8].innerHTML) {
                  document.getElementById('status').className = "you-won"
                  document.getElementById('status').innerHTML = "Congratulations! " + arr[6].innerHTML + " is the Winner!"
              } else if (arr[0].innerHTML !== "" && arr[0].innerHTML === arr[3].innerHTML && arr[0].innerHTML === arr[6].innerHTML) {
                  document.getElementById('status').className = "you-won"
                  document.getElementById('status').innerHTML = "Congratulations! " + arr[0].innerHTML + " is the Winner!"
              } else if (arr[1].innerHTML !== "" && arr[1].innerHTML === arr[4].innerHTML && arr[1].innerHTML === arr[7].innerHTML) {
                  document.getElementById('status').className = "you-won"
                  document.getElementById('status').innerHTML = "Congratulations! " + arr[1].innerHTML + " is the Winner!"
              } else if (arr[0].innerHTML !== "" && arr[0].innerHTML === arr[4].innerHTML && arr[0].innerHTML === arr[8].innerHTML) {
                  document.getElementById('status').className = "you-won"
                  document.getElementById('status').innerHTML = "Congratulations! " + arr[0].innerHTML + " is the Winner!"
              } else if (arr[6].innerHTML !== "" && arr[6].innerHTML === arr[4].innerHTML && arr[6].innerHTML === arr[2].innerHTML) {
                  document.getElementById('status').className = "you-won"
                  document.getElementById('status').innerHTML = "Congratulations! " + arr[6].innerHTML + " is the Winner!"
              } else if (arr[2].innerHTML !== "" && arr[2].innerHTML === arr[5].innerHTML && arr[2].innerHTML === arr[8].innerHTML) {
                  document.getElementById('status').className = "you-won"
                  document.getElementById('status').innerHTML = "Congratulations! " + arr[2].innerHTML + " is the Winner!"
              }
          
          }; 

       }
}









 