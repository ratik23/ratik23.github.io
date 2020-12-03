function toggle_world() {
  document.getElementById("world-stats").style.display = "block";
  document.getElementById("india-stats").style.display = "none";

  var Wbtn = document.getElementById("world-btn");
  Wbtn.style.backgroundColor = "rgba(0, 172, 193)";
  Wbtn.style.color = "white";

  var Ibtn = document.getElementById("india-btn");
  Ibtn.style.backgroundColor = "white";
  Ibtn.style.color = "rgba(0, 172, 193)"; 
} 

function toggle_india() {
  document.getElementById("world-stats").style.display = "none";
  document.getElementById("india-stats").style.display = "block";
  
  var Wbtn = document.getElementById("world-btn");
  Wbtn.style.backgroundColor = "white";
  Wbtn.style.color = "rgba(0, 172, 193)";

  var Ibtn = document.getElementById("india-btn");
  Ibtn.style.backgroundColor = "rgba(0, 172, 193)";
  Ibtn.style.color = "white";  
} 

