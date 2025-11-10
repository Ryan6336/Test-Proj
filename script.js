/*nav stuff */
function Nav() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

/*gay ass time stuff*/
var objDate = new Date();
var hours = objDate.getHours();
if(hours >= 5 ){
    document.write('Good Morning');
}
else if(hours >= 12){
    document.write('Good Afternoon');
}
else if(hours >= 18){
  document.write('Good Evening');
} else{
  document.write('Good Night');
}