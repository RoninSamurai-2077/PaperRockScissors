
// // Complete logic of game inside this function
class PaperRockScissors{
    constructor(){
        this.computerMoves = ["paper", "rock", "scissors]
        this.randomChoiceResponse;
    }
        paper() {
            this.randomChoice();
                switch (this.randomChoiceResponse) {
                    case "paper": return "tie"; 
                    case "rock": return "win";
                    case "scissors": return "lose";
                }
    }
        
        Rock(){
            this.randomChoice()
                switch (this.randomChoiceResponse) {
                    case "paper":return "lose";
            ``          case "rock": return "tie"; 
                    case "scissors": return"win";
                            }
    }
        scissors() {
        this.randomChoice()
            switch (this.randomChoiceResponse) {
                case "paper":return "win";
                case "rock": return "lose"; 
                case "scissors": return"tie";
            }
    }
    randomChoice()
this.randomChoiceResponse = this.computerMoves [Math.floor(Math.random()*this.computerMoves.length)] console.log(this.randomChoiceResponse)
}
// const game = () => {
// 	let playerScore = 0;
// 	let computerScore = 0;
// 	let moves = 0;


// 	// Function to
// 	const playGame = () => {
// 		const rockBtn = document.querySelector('.rock');
// 		const paperBtn = document.querySelector('.paper');
// 		const scissorBtn = document.querySelector('.scissor');
// 		const playerOptions = [rockBtn,paperBtn,scissorBtn];
// 		const computerOptions = ['rock','paper','scissors']
		
// 		// Function to start playing game
// 		playerOptions.forEach(option => {
// 			option.addEventListener('click',function(){

// 				const movesLeft = document.querySelector('.movesleft');
// 				moves++;
// 				movesLeft.innerText = `Moves Left: ${10-moves}`;
				

// 				const choiceNumber = Math.floor(Math.random()*3);
// 				const computerChoice = computerOptions[choiceNumber];

// 				// Function to check who wins
// 				winner(this.innerText,computerChoice)
				
// 				// Calling gameOver function after 10 moves
// 				if(moves == 10){
// 					gameOver(playerOptions,movesLeft);
// 				}
// 			})
// 		})
		
// 	}

// 	// Function to decide winner
// 	const winner = (player,computer) => {
// 		const result = document.querySelector('.result');
// 		const playerScoreBoard = document.querySelector('.p-count');
// 		const computerScoreBoard = document.querySelector('.c-count');
// 		player = player.toLowerCase();
// 		computer = computer.toLowerCase();
// 		if(player === computer){
// 			result.textContent = 'Tie'
// 		}
// 		else if(player == 'rock'){
// 			if(computer == 'paper'){
// 				result.textContent = 'Computer Won';
// 				computerScore++;
// 				computerScoreBoard.textContent = computerScore;

// 			}else{
// 				result.textContent = 'Player Won'
// 				playerScore++;
// 				playerScoreBoard.textContent = playerScore;
// 			}
// 		}
// 		else if(player == 'scissors'){
// 			if(computer == 'rock'){
// 				result.textContent = 'Computer Won';
// 				computerScore++;
// 				computerScoreBoard.textContent = computerScore;
// 			}else{
// 				result.textContent = 'Player Won';
// 				playerScore++;
// 				playerScoreBoard.textContent = playerScore;
// 			}
// 		}
// 		else if(player == 'paper'){
// 			if(computer == 'scissors'){
// 				result.textContent = 'Computer Won';
// 				computerScore++;
// 				computerScoreBoard.textContent = computerScore;
// 			}else{
// 				result.textContent = 'Player Won';
// 				playerScore++;
// 				playerScoreBoard.textContent = playerScore;
// 			}
// 		}
// 	}

// 	// Function to run when game is over
// 	const gameOver = (playerOptions,movesLeft) => {

// 		const chooseMove = document.querySelector('.move');
// 		const result = document.querySelector('.result');
// 		const reloadBtn = document.querySelector('.reload');

// 		playerOptions.forEach(option => {
// 			option.style.display = 'none';
// 		})

	
// 		chooseMove.innerText = 'Game Over!!'
// 		movesLeft.style.display = 'none';

// 		if(playerScore > computerScore){
// 			result.style.fontSize = '2rem';
// 			result.innerText = 'You Won The Game'
// 			result.style.color = '#308D46';
// 		}
// 		else if(playerScore < computerScore){
// 			result.style.fontSize = '2rem';
// 			result.innerText = 'You Lost The Game';
// 			result.style.color = 'red';
// 		}
// 		else{
// 			result.style.fontSize = '2rem';
// 			result.innerText = 'Tie';
// 			result.style.color = 'grey'
// 		}
// 		reloadBtn.innerText = 'Restart';
// 		reloadBtn.style.display = 'flex'
// 		reloadBtn.addEventListener('click',() => {
// 			window.location.reload();
// 		})
// 	}


// 	// Calling playGame function inside game
// 	playGame();
	
// }

// // Calling the game function
// game();