let rnd=Math.floor(Math.random()*100)+1;

    console.log(rnd);

    const guesses=document.querySelector('.guesses');

    const lastResult=document.querySelector('.lastResult');

    const lowOrHIl=document.querySelector('lowOrHIl');

    const guessSubmit= document.querySelector('.guessSubmit');

    const guessField=document.querySelector('.guessField');

    let cnt=1;
    let reset;

    function checkGuess(){
        let userGuess= Number(guessField.value);
        if(cnt==1){
            guessField.textContent = "Intentos A";
        }
        guesses.textContent+= userGuess +" ";

        if(userGuess==rnd){
            lastResult.textContent="Felicieda has acertado";
            lastResult.computedStyleMap.backgroundColor="green";
            lowOrHIl.textContent="";
        }else if(cnt===10){
            lastResult.textContent="Muie fraiere, ai pierdut";
            setGameOver();
        }else{
            lastResult.computedStyleMap.backgroundColor="red";
            if(userGuess<rnd)
                lastResult.textContent="sorry e prea mic bbboy";
            else
                lastResult.textContent="ohhh, cred ca e cam mare";
        }
        cnt++;
        guessField.value="";
        guessField.focus();
    }

guessSubmit.addEventListener('click', checkGuess);

//Creamos la function gameOver()

function setGameOver(){
    guessField.dissabled = true; //Deshabilita el input
    guessSubmit.disabled = true; //Deshabilita el boton submit

    //crear un nuevo boton para resetear el juego
    reset = document.createElement('button');
    reset.className = 'reset';
    reset.textContent = "Reiniciar Juego";
    //Colocamos el boton en el elemento body
    document.body.appendChild(reset);
    reset.addEventListener('click', resetGame);
}

//Function para resetear el programa

function resetGame(){
    cnt = 1;

    //Temamos todos los parrafos de ayuda
    const resetParas = document.querySelectorAll('.resultParas p');
    for( let i=0; i < resetParas.length; i++){
        resetParas[i].textContent = "";
        resetParas[i].style.backgroundColor = 'black';
    }

    //Eliminamos el boton reset
    reset.parentNode.removeChild(reset);

    //Reactio el input y el boton de intentos
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = "";
    guessField.focus();

    lastResult.style.backgroundColor = 'black';

    randomNumber = Math.floor(Math.random() * 100) + 1;
    
}