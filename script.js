let chooseBox = document.querySelectorAll('.box');

let optionArr = ['rock', 'paper', 'scissor'];
let yourPoint = 0;

//All the Selecting Option button
chooseBox.forEach(element => {

    element.addEventListener('click', () => {
        let userClicked = element.className.split(' ')[0];
        console.log(userClicked);

        let randomComp = Math.floor(Math.random() * 3);
        let compClicked = optionArr[randomComp];
        console.log(compClicked);

        checkWin(userClicked, compClicked);
    })
});

// Checking the whole scenario who win or lose
function checkWin(user, comp) {
    if (user === comp) {
        
        tryAgain.style.display = 'inline';
    } 
    else if (user == 'rock' && comp == 'paper') {
        
        setArea(user, 'LOST', comp);
    } 
    else if (user == 'rock' && comp == 'scissor') {
        
        setArea(user, 'WIN', comp);
    } 
    else if (user == 'paper' && comp == 'rock') {
       
        setArea(user, 'WIN', comp);
    } 
    else if (user == 'paper' && comp == 'scissor') {
       
        setArea(user, 'LOST', comp);
    } 
    else if (user == 'scissor' && comp == 'rock') {
       
        setArea(user, 'LOST', comp);
    } 
    else if (user == 'scissor' && comp == 'paper') {

        setArea(user, 'WIN', comp);
    }
}

let tryAgain = document.querySelector('.try')//Try again (if tie)

let playArea = document.querySelector('.playArea');
let rock = document.querySelector('.rock');
let paper = document.querySelector('.paper');
let scissor = document.querySelector('.scissor');

let initialOn = document.querySelector('.initialOn');
let initialOff = document.querySelector('.initialOff');

//Diplaying the area where choose the option
function setArea(user, mid, comp) {

    tryAgain.style.display = 'none';

    initialOn.style.display = 'none';
    initialOff.style.display = 'flex';

    initialOff.innerHTML = `<div class="${user} box">You Picked<img src="image/${user}.png" alt="rock"></div>
                            <div class="box mid-man">
                                <h3>YOU ${mid}</h3>
                                <p>AGAINST PC</p>
                                <button onclick='playAgain()'>Play Again</button>
                            </div>
                            <div class="${comp} box">PC Picked<img src="image/${comp}.png" alt="rock"></div>`

    // Update YourScore if you win
    if (mid === 'WIN') {
        yourPoint++;
        document.querySelector('#score').innerHTML = yourPoint;  
    }
}

function playAgain() {  //Play again button
    initialOn.style.display = 'flex';
    initialOff.style.display = 'none';

}

function gameRule() {  //Game Rule Button
    let ruleBtn = document.querySelector('.game-rule');

    ruleBtn.style.display != 'inline-block' ? ruleBtn.style.display = 'inline-block' : ruleBtn.style.display = 'none';
    
}
