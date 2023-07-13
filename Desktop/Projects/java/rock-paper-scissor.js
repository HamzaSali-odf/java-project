// let score = {
      //   win: 0,
      //   lose: 0,
      //   tie: 0,
      // };

      let score = JSON.parse(localStorage.getItem("score")) || {
        win: 0,
        lose: 0,
        tie: 0,
      };

      // console.log(localStorage.getItem("message"));
      // console.log(JSON.parse(localStorage.getItem("score")));

      // if (score === null) {
      //   score = {
      //     win: 0,
      //     lose: 0,
      //     tie: 0,
      //   };
      // }
      function resetScore() {
        score = {
          win: 0,
          lose: 0,
          tie: 0,
        };
        document.querySelector(
          ".js-score"
        ).innerHTML = `Result: Win ${score.win} Lose ${score.lose} Tie ${score.tie}`;
      }

      function playGame(playerMove) {
        const computerMove = pickComputerMove();
        let result = "";

        if (playerMove === "scissors") {
          if (computerMove === "rock") {
            result = "You lose.";
            score.lose++;
          } else if (computerMove === "paper") {
            result = "You win.";
            score.win++;
          } else if (computerMove === "scisors") {
            result = "Tie.";
            score.tie++;
          }
        } else if (playerMove === "paper") {
          if (computerMove === "rock") {
            result = "You win.";
            score.win++;
          } else if (computerMove === "paper") {
            result = "Tie.";
            score.tie++;
          } else if (computerMove === "scisors") {
            result = "You lose.";
            score.lose++;
          }
        } else if (playerMove === "rock") {
          if (computerMove === "rock") {
            result = "Tie.";
            score.tie++;
          } else if (computerMove === "paper") {
            result = "You lose.";
            score.lose++;
          } else if (computerMove === "scisors") {
            result = "You win.";
            score.win++;
          }
        }

        document.querySelector(".js-result").innerHTML = result;

        // localStorage.setItem("message", "hello");
        localStorage.setItem("score", JSON.stringify(score));

        document.querySelector(
          ".js-moves"
        ).innerHTML = `You picked <img src="images/${playerMove}.png" class="icon"> Computer picked <img src="images/${computerMove}.png" class="icon">`;

        document.querySelector(
          ".js-score"
        ).innerHTML = `Result: Win ${score.win} Lose ${score.lose} Tie ${score.tie}`;
      }

      // let computerMove = "";
      function pickComputerMove() {
        let computerMove = "";
        const randomNumber = Math.random(); // this one choses between 0 and 1

        if (randomNumber >= 0 && randomNumber < 1 / 3) {
          computerMove = "rock";
        } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
          computerMove = "paper";
        } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
          computerMove = "scisors";
        }
        return computerMove;
      }