
const clock = document.getElementById('clock');


setInterval(function()){
   let date = new Date();
  clock.innerHTML = date.toLocalTimeString();
},1000);
// 1000 => means 1 second
