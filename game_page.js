player1_name=localStorage.getItem("player1_name");
player2_name=localStorage.getItem("player2_name");
questionturn="player1";
answerturn="player2";
document.getElementById("player1_name").innerHTML=player1_name;
document.getElementById("player2_name").innerHTML=player2_name;

var player1_score=0;
var player2_score=0;
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;

document.getElementById("question").innerHTML="question_turn:"+player1_name;
document.getElementById("answer").innerHTML="answer_turn:"+player2_name;


function send(){
word=document.getElementById("word").value.toLowerCase();
console.log(word);
var letter1=word.charAt(1);
lenghnth1=word.length/2;
letter2=word.charAt(lenghnth1);
length2=word.length-1;
letter3=word.charAt(length2);
remove1=word.replace(letter1,"_");
remove2=remove1.replace(letter2,"_");
finalword=remove2.replace(letter3,"_");
console.log(finalword);

question="<h2 id='word12'>q."+finalword+"</h2>";
answer="<br>answer=<input type='text' id='inputanswer'>";
button="<br><button class='btn btn-info' onclick='check()'>check</button>";
row=question+answer+button;
document.getElementById("output").innerHTML=row;
document.getElementById("word").value=" ";
}

function check(){
   
    var get_answer=document.getElementById("inputanswer").value.toLowerCase();
    console.log(get_answer);
    if(get_answer==word){
        if(answerturn=="player2"){
            player2_score=player2_score+1;
            document.getElementById("player2_score").innerHTML=player2_score;
        }
        else
        {
            player1_score=player1_score+1;
            document.getElementById("player1_score").innerHTML=player1_score;
        }
    }
    if(questionturn=="player1"){
        questionturn="player2";
        document.getElementById("question").innerHTML="question_turn:"+player2_name;
    }else
    {
        questionturn="player2";
        document.getElementById("question").innerHTML="question_turn:"+player1_name;
    }
    if(answerturn=="player1"){
        answerturn="player2";
        document.getElementById("answer").innerHTML="answer_turn:"+player2_name;
    }else
    {
        answerturn="player1";
        document.getElementById("answer").innerHTML="answer_turn:"+player1_name;
    }
    document.getElementById("output").innerHTML=" ";
}
    