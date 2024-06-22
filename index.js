let computerNumber
let userNumbers = []
let attempts = 0
let maxGuesses = 10

function newGame (){
    window.location.reload()
}

function init(){
    computerNumber=Math.floor(Math.random() * 99 + 1)
console.log(computerNumber)
}

function compareNumbers(){
    const userNumber = Number(document.getElementById('inputBox').value)
userNumbers.push(userNumber)
document.getElementById('guesses').innerHTML = userNumbers.join("-")

if(attempts<maxGuesses){
    if(userNumber>computerNumber){
        document.getElementById('textOutput').innerHTML='Seu numero é muito alto'
        document.getElementById('inputBox').value=''
        attempts++
        document.getElementById('attempts').innerHTML=attempts
        }
    else if (userNumber<computerNumber){
        document.getElementById('textOutput').innerHTML='Seu numero é muito baixo'
        document.getElementById('inputBox').value=''
        attempts++
        document.getElementById('attempts').innerHTML=attempts
    }

    else{
        document.getElementById('textOutput').innerHTML='GOODBYE WORLD!!!'
        document.getElementById('inputBox').setAttribute('Readonly','Readonly')
        attempts++
        document.getElementById('attempts').innerHTML=attempts
    }
}

else{
    document.getElementById('textOutput').innerHTML='Que azar, voce atingiu o maximo de tentativas. O número era: ' + computerNumber
    document.getElementById('inputBox').setAttribute('Readonly', 'Readonly')
}
}


