var givenNumber;
var score=20;
let highscore=0;
function reload(){
    document.querySelector(".input-style").value='';
    document.querySelector("#guessing").textContent="Start Guessing....";
    score=20;
    document.querySelector('.number-value').textContent="??";
    document.querySelector('.container').style.backgroundColor="black";
    document.querySelector('#rain').classList.remove("rain");
}
var quessthenumber=Math.floor(Math.random() * 20)+1;
document.querySelector('.check-button-style').addEventListener('click',function(){
    givenNumber=Number(document.querySelector(".input-style").value);
        console.log(givenNumber);
        console.log(quessthenumber);
    if(!givenNumber){
        document.querySelector("#guessing").textContent="No number!";
    }
    else if(givenNumber>quessthenumber){
      
        if(score>1){
            document.querySelector("#guessing").textContent="Too high!!!!";
            document.querySelector("#score").textContent=score;
            score--;
        }
        else{
            document.querySelector("#guessing").textContent="Loss the game??!!";
        }
    }
    else if(givenNumber<quessthenumber){
        if(score>1){
            document.querySelector("#guessing").textContent="Too low!!!!";
            document.querySelector("#score").textContent=score;
            score--;
        }
        else{
            document.querySelector("#guessing").textContent="Loss the game??!!";
        }
    }
    else if(quessthenumber===givenNumber){
        document.querySelector("#guessing").textContent="Correct Number!";
        document.querySelector('.container').style.backgroundColor="#36d856";
        document.querySelector('.number-value').textContent=givenNumber;
        document.querySelector('#rain').classList.add("rain");
        if(score>highscore){
            highscore=score;
            document.querySelector("#highscore").textContent=highscore;
            console.log(highscore);
        }
    }
});