function adduser()
{
   var player1= document.getElementById("player_1").value;
   var player2= document.getElementById("player_2").value;
   localStorage.setItem("player1",player1);
   localStorage.setItem("player2",player2);
   console.log("Adduser");
   window.location="game_page.html";
}