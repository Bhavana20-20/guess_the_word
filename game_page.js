var player1_name = localStorage.getItem("player1")
var player2_name = localStorage.getItem("player2")
var player1score = 0;
var player2score = 0;
var question_turn="player_1";
var answer_turn="player_2";
document.getElementById("player1_name").innerHTML=player1_name;
document.getElementById("player2_name").innerHTML=player2_name;
document.getElementById("player1_score").innerHTML=":"+player1score;
document.getElementById("player2_score").innerHTML=":"+player2score;
document.getElementById("player_question").innerHTML="Question Turn:"+player1_name;
document.getElementById("player_answer").innerHTML="Answer Turn:"+player2_name;
function send() {
    get_word=document.getElementById("word").value;
    word=get_word.toLowerCase();
    charAt1=word.charAt(1);
    length_divide_2=Math.floor(word.length/2);
    charAt2=word.charAt(length_divide_2);
    charAt3=word.charAt(word.length-1);
    remove_charAt1=word.replace(charAt1,"_");
    remove_charAt2=remove_charAt1.replace(charAt2,"_");
    remove_charAt3=remove_charAt2.replace(charAt3,"_");

    question_word="<h4 id='word_display'> Q."+remove_charAt3+"</h4>";
    input_box="<br><br>Answer:<input type='text' id='input_box'>";
    check_button="<br><br><button class='btn btn-success' onclick='check()'>Check</button>";
    row=question_word+input_box+check_button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("word").value="";
}
function check() {
    get_answer=document.getElementById("input_box").value;
    answer=get_answer.toLowerCase();
    if (answer==word){
        if (answer_turn=="player_1"){
            player1score = player1score+1;
            document.getElementById("player1_score").innerHTML=player1score;
        }
        else{
            player2score=player2score+1;
            document.getElementById("player2_score").innerHTML=player2score;
        }
    }
    if (question_turn=="player_1"){
        question_turn="player_2"
        document.getElementById("player_question").innerHTML="Question Turn - "+player2_name;
    }
    else{
        question_turn= "player_1"
        document.getElementById("player_question").innerHTML="Question Turn - "+player1_name;
    }
    if (answer_turn=="player_1"){
        answer_turn="player_2"
        document.getElementById("player_answer").innerHTML="Answer Turn - "+player2_name;
    }
    else{
        question_turn= "player_1"
        document.getElementById("player_answer").innerHTML="Answer Turn - "+player1_name; 
    }
    document.getElementById("output").innerHTML="";
}