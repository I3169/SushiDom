/*Hide Navbar*/
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos){
    document.getElementById("navbar").style.top = "0";
  }
  else{
    document.getElementById("navbar").style.top = "-100px";
  } 
  prevScrollpos = currentScrollPos;
}

  const nama = ["Uziki Mashu"];
  const description = ["This is heavenly delight","This is to scam your money"];

/*Display subwindow*/
function reply_click(clicked_id){
  var veiljs = document.getElementById("veiljs");
  /*Contains description of items, 
  the first string in the array will be the description of the first sushi in menu*/
  
  veiljs.style.display = "block";
  
  window.onclick = function(event) {
    if (event.target == veiljs) {
      veiljs.style.display = "none";
      counter = 0;
    }
  }

  document.getElementById('output').innerHTML = `<img src="./Img/${clicked_id}.jpg" alt="SUSHI">`;
  document.getElementById('output').innerHTML += `<p>${nama[clicked_id.at(-1) - 1]}<br>${description[clicked_id.at(-1) - 1]}</p>`;
  document.getElementById('output').innerHTML += '<span class = "add" onClick ="itemNumber(1)">&plus;</span>'
  document.getElementById('output').innerHTML += '<span class = "minus" onClick="itemNumber(0)">&minus;</span>'
  document.getElementById('output').innerHTML += `<div id="counting" class="counting">${counter}</div>`
  document.getElementById('output').innerHTML += '<button id="Order" onClick="order()">Order</button>'
  
}

function order(clicked_id){
  var order = document.getElementById("Order");
  var veiljs = document.getElementById("veiljs");

  order.onclick = function(){
    if (counter > 0){
      document.getElementById('Ordered').innerHTML = 'Ordered Item(s):'
      document.getElementById('Ordered').innerHTML += `<li>${nama[clicked_id.at(-1) - 1]} ..... ${counter}</li>`;
      counter = 0;
    }
    veiljs.style.display = "none";
  }
}

function callingBoth(clicked_id){
  reply_click(clicked_id)
  order(clicked_id)
}

function orderWindow(){
  var ordered = document.getElementById("Ordered");
  var veilol = document.getElementById("veilol");

  veilol.style.display = "block";
  ordered.style.display = "block";
  
  window.onclick = function(event) {
    if (event.target == veilol) {
      counter = 0;
      veilol.style.display = "none"
    }
  }
}

var counter = 0;

function itemNumber(para){
  if (para == "1"){
    counter += 1
  }
  else{
    counter = counter - 1
    if (counter < 1){
        counter = 0
    }
  }
  document.getElementById("counting").innerHTML = `${counter}`
}
