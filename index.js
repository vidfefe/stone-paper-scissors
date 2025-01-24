
let resultBlock = document.getElementById('result');
let select = document.querySelector('.select');
let buttons = document.querySelectorAll('button');
let imgUser = document.getElementById('user-choice-image');
let textUser = document.getElementById('user-choice-text');
let imgComputer = document.getElementById('computer-choice-image');
let textComputer = document.getElementById('computer-choice-text');
let resultText = document.getElementById('result-text');
let audio = document.getElementById('result-audio')



function computerSelection(){
    let randomNumber = Math.floor(Math.random()*3);
    let choices =["Камень","Ножницы","Бумага"];
    return computerChoice = choices[randomNumber];
}

buttons.forEach(button => {
    button.addEventListener("click",()=>{
        if(button.value == "again"){
            playAgain();
            return;
        }
        select.style.display = "none"
        let computerChoice = computerSelection();
        let userChoice = button.value;
        check(computerChoice,userChoice);
    })
});

function check(computerChoice,userChoice){
    resultBlock.style.display = "flex";
    let imgOfComputerChoice='';
    let imgOfUserChoice='';

    switch(userChoice){
        case 'Камень':
            imgOfUserChoice = 'stone.png'
            break;
        case 'Ножницы':
            imgOfUserChoice = 'scissors.png'
            break;
        case 'Бумага':
            imgOfUserChoice = 'paper.png'
            break;
        default:
            imgOfUserChoice='Упс...что-то пошло не так'
            break;
    } 

    switch(computerChoice){
        case 'Камень':
            imgOfComputerChoice = 'stone.png'
            break;
        case 'Ножницы':
            imgOfComputerChoice = 'scissors.png'
            break;
        case 'Бумага':
            imgOfComputerChoice = 'paper.png'
            break;
        default:
            imgOfComputerChoice='Упс...что-то пошло не так'
            break;
    } 
    
    imgUser.src=imgOfUserChoice;
    textUser.innerText = userChoice;
    imgComputer.src = imgOfComputerChoice;
    textComputer.innerText = computerChoice;

    if((userChoice =='Камень' && computerChoice =='Ножницы')||
        (userChoice =='Бумага' && computerChoice =='Камень')||
        (userChoice =='Ножницы' && computerChoice =='Бумага')) {
            audio.src = 'win.mp3'
            audio.play()
            resultText.innerText = "Вы выиграли!"
            resultText.style.color = "green"
        }
    else if(userChoice == computerChoice){
        audio.src = 'win.mp3'
            audio.play()
         resultText.innerText = "Ничья!"
         resultText.style.color = "blue"
    }
    else{
        audio.src = 'lose.mp3'
        audio.play()
         resultText.innerText = "Вы проиграли!"
         resultText.style.color = "red"
    }
};

function playAgain(){
    resultBlock.style.display = "none";
    select.style.display = "flex"
}